export default {
  eleventyComputed: {
    permalink: (data) => {
      const slug = String(data?.page?.fileSlug || '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
      return `/posts/${slug}/`;
    },
  },
};
