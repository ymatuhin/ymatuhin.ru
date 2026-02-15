const postsGlob = 'src/posts/*.{md,html}';

export function buildPostsCollection(collectionApi) {
  return collectionApi.getFilteredByGlob(postsGlob).sort((a, b) => b.date - a.date);
}

export function buildCategoriesCollection(collectionApi) {
  const categories = new Set();
  const posts = collectionApi.getFilteredByGlob(postsGlob);

  for (const item of posts) {
    if (!item.data.categories) continue;

    if (Array.isArray(item.data.categories)) {
      for (const category of item.data.categories) {
        categories.add(category);
      }
      continue;
    }

    categories.add(item.data.categories);
  }

  return Array.from(categories);
}
