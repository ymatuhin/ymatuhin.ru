import { toLegacyTagSlug, toTagLabel, toTagSlug, toUniqueTagSlug } from './tag-utils.js';

const postsGlob = 'src/posts/*.{md,html}';
const postTypeTags = new Set(['blog', 'frontend', 'tools', 'books']);
const staticLegacyRedirects = [
  { from: '/page2/', to: '/posts/2/' },
  { from: '/page3/', to: '/posts/3/' },
  { from: '/page4/', to: '/posts/4/' },
  { from: '/page5/', to: '/posts/5/' },
  { from: '/page6/', to: '/posts/6/' },
  { from: '/page7/', to: '/posts/7/' },
  { from: '/page8/', to: '/posts/8/' },
  { from: '/page9/', to: '/posts/9/' },
];
const extractPostTags = (item) => {
  if (!item?.data?.tags) return [];
  return Array.isArray(item.data.tags) ? item.data.tags : [item.data.tags];
};

export function buildPostsCollection(collectionApi) {
  return collectionApi.getFilteredByGlob(postsGlob).sort((a, b) => b.date - a.date);
}

export function buildTagsCollection(collectionApi) {
  const tags = new Set();
  const posts = collectionApi.getFilteredByGlob(postsGlob);

  for (const item of posts) {
    for (const tag of extractPostTags(item)) {
      const canonicalTag = toTagSlug(tag);
      if (canonicalTag) tags.add(canonicalTag);
    }
  }

  return Array.from(tags);
}

export function buildPostTypesCollection(collectionApi) {
  return buildTagsCollection(collectionApi).filter((tag) => postTypeTags.has(tag));
}

export function buildTagPagesCollection(collectionApi) {
  const posts = collectionApi.getFilteredByGlob(postsGlob);
  const pages = [];
  const usedKeys = new Set();
  const usedSlugs = new Set();
  const tagCounts = new Map();

  for (const post of posts) {
    const uniquePostTags = new Set(
      extractPostTags(post)
        .map((postTag) => toTagSlug(postTag))
        .filter(Boolean),
    );

    for (const postTagKey of uniquePostTags) {
      tagCounts.set(postTagKey, (tagCounts.get(postTagKey) || 0) + 1);
    }
  }

  for (const tag of buildTagsCollection(collectionApi)) {
    const key = toTagSlug(tag);
    if (!key || usedKeys.has(key)) continue;
    const count = tagCounts.get(key) || 0;
    if (count <= 1) continue;
    usedKeys.add(key);
    const slug = toUniqueTagSlug(key, usedSlugs);
    if (!slug) continue;
    const name = toTagLabel(key);
    const legacySlug = toLegacyTagSlug(name);
    usedSlugs.add(slug);
    pages.push({ name, slug, legacySlug, count, key });
  }

  return pages.sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return a.name.localeCompare(b.name, 'ru');
  });
}

export function buildFrontmatterRedirectsCollection(collectionApi) {
  const redirects = [];
  const redirectKeys = new Set();
  const items = collectionApi.getAll();
  const addRedirect = (from, to) => {
    const source = String(from || '').trim();
    const target = String(to || '').trim();
    if (!source || !target || source === target) return;
    const key = `${source}->${target}`;
    if (redirectKeys.has(key)) return;
    redirectKeys.add(key);
    redirects.push({ from: source, to: target });
  };

  for (const redirect of staticLegacyRedirects) {
    addRedirect(redirect.from, redirect.to);
  }

  for (const tagPage of buildTagPagesCollection(collectionApi)) {
    if (!tagPage.legacySlug || tagPage.legacySlug === tagPage.slug) continue;
    addRedirect(`/tag/${tagPage.legacySlug}/`, `/tag/${tagPage.slug}/`);
  }

  for (const item of items) {
    if (!item.url || !item.data || !item.data.redirects) continue;

    const targets = Array.isArray(item.data.redirects)
      ? item.data.redirects
      : [item.data.redirects];
    for (const source of targets) {
      addRedirect(source, item.url);
    }
  }

  return redirects.sort((a, b) => a.from.localeCompare(b.from));
}
