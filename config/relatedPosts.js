export function buildRelatedPosts(data) {
  // Only compute for pages that are part of the posts collection
  if (!data?.page?.url || !data?.collections?.posts) return [];

  const allPosts = data.collections.posts;
  const currentUrl = data.page.url;

  const currentTags = new Set(
    (Array.isArray(data.tags) ? data.tags : [])
      .filter(Boolean)
      // optional: ignore common meta tags
      .filter((t) => !['post', 'posts', 'all'].includes(t)),
  );

  if (currentTags.size === 0) return [];

  return (
    allPosts
      .filter((item) => item.url !== currentUrl)
      .map((item) => {
        const tags = Array.isArray(item.data?.tags) ? item.data.tags : [];
        let score = 0;
        for (const t of tags) if (currentTags.has(t)) score++;
        return { item, score };
      })
      .filter(({ score }) => score > 0)
      // best match first; tie-breaker newest first
      .sort((a, b) => b.score - a.score || b.item.date - a.item.date)
      .slice(0, 3) // how many "similar" posts to show
      .map(({ item }) => item)
  );
}
