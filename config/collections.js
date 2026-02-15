const postsGlob = 'src/posts/*.{md,html}';
const postTypeTags = new Set(['blog', 'frontend', 'tools', 'books']);

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
        if (postTypeTags.has(tag)) tags.add(tag);
      }
      continue;
    }

    if (postTypeTags.has(item.data.tags)) tags.add(item.data.tags);
  }

  return Array.from(tags);
}
