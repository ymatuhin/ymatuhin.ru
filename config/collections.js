const postsGlob = 'src/posts/*.{md,html}';
const postTypeTags = new Set(['blog', 'frontend', 'tools', 'books']);
const normalizeTag = (value) => String(value || '').trim().toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');
const extractPostTags = (item) => {
  if (!item?.data?.tags) return [];
  return Array.isArray(item.data.tags) ? item.data.tags : [item.data.tags];
};
const toTagSlugBase = (value) => {
  const normalized = normalizeTag(value).replace(/-+/g, '-').replace(/^-|-$/g, '');
  const limited = normalized.slice(0, 24);
  return limited;
};

export function buildPostsCollection(collectionApi) {
  return collectionApi.getFilteredByGlob(postsGlob).sort((a, b) => b.date - a.date);
}

export function buildTagsCollection(collectionApi) {
  const tags = new Set();
  const posts = collectionApi.getFilteredByGlob(postsGlob);

  for (const item of posts) {
    for (const tag of extractPostTags(item)) {
      if (tag) tags.add(tag);
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

  for (const tag of buildTagsCollection(collectionApi)) {
    const key = normalizeTag(tag);
    if (!key || usedKeys.has(key)) continue;
    usedKeys.add(key);
    const slug = toTagSlugBase(tag);
    if (!slug) continue;
    usedSlugs.add(slug);
    const count = posts.filter((post) => {
      const postTags = extractPostTags(post).filter(Boolean);
      return postTags.some((postTag) => normalizeTag(postTag) === key);
    }).length;
    pages.push({ name: tag, slug, count, key });
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

  for (const item of items) {
    if (!item.url || !item.data || !item.data.redirects) continue;

    const targets = Array.isArray(item.data.redirects) ? item.data.redirects : [item.data.redirects];
    for (const source of targets) {
      const from = String(source || '').trim();
      if (!from) continue;
      const key = `${from}->${item.url}`;
      if (redirectKeys.has(key) || from === item.url) continue;
      redirectKeys.add(key);
      redirects.push({ from, to: item.url });
    }
  }

  return redirects.sort((a, b) => a.from.localeCompare(b.from));
}
