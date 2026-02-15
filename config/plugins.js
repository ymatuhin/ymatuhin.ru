export const feedConfig = {
  outputPath: '/feed.xml',
  collection: {
    name: 'posts',
    limit: 10,
  },
  metadata: {
    language: 'en',
    title: 'Blog Title',
    subtitle: 'This is a longer description about your blog.',
    base: 'https://example.com/',
    author: {
      name: 'Your Name',
      email: '',
    },
  },
};

export function idAttributeFilter({ page }) {
  return !page.inputPath.endsWith('javascript_styleguide.md');
}
