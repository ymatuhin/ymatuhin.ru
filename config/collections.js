const postsGlob = 'src/posts/*.{md,html}';
const postTypeTags = new Set(['blog', 'frontend', 'tools', 'books']);
const hashTag = (value) => {
  let hash = 5381;
  for (let i = 0; i < value.length; i += 1) {
    hash = ((hash << 5) + hash) + value.charCodeAt(i);
  }
  return (hash >>> 0).toString(36);
};

const toTagBaseSlug = (value) => {
  const normalized = String(value || '').trim().toLowerCase();
  const ascii = normalized
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40);

  return ascii || `tag-${hashTag(normalized).slice(0, 6)}`;
};

export function buildPostsCollection(collectionApi) {
  return collectionApi.getFilteredByGlob(postsGlob).sort((a, b) => b.date - a.date);
}

export function buildTagsCollection(collectionApi) {
  const tags = new Set();
  const posts = collectionApi.getFilteredByGlob(postsGlob);

  for (const item of posts) {
    if (!item.data.tags) continue;

    if (Array.isArray(item.data.tags)) {
      for (const tag of item.data.tags) {
        tags.add(tag);
      }
      continue;
    }

    tags.add(item.data.tags);
  }

  return Array.from(tags);
}

export function buildPostTypesCollection(collectionApi) {
  return buildTagsCollection(collectionApi).filter((tag) => postTypeTags.has(tag));
}

export function buildTagPagesCollection(collectionApi) {
  const pages = [];
  const usedSlugs = new Set();

  for (const tag of buildTagsCollection(collectionApi)) {
    const normalized = String(tag || '').trim().toLowerCase();
    const slugBase = toTagBaseSlug(tag);
    const slugWithHash = `${slugBase}-${hashTag(normalized).slice(0, 6)}`.slice(0, 64);
    const slug = usedSlugs.has(slugBase) ? slugWithHash : slugBase;
    if (!slug || usedSlugs.has(slug)) continue;
    usedSlugs.add(slug);
    pages.push({ name: tag, slug });
  }

  return pages.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
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
