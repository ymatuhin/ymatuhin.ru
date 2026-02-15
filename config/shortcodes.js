import Image from '@11ty/eleventy-img';

export async function mediaImageShortcode(url, alt, pixelated) {
  const imageUrl = url;
  const imageAlt = (alt || '').toString();

  if (!imageUrl) return '';

  const source = `./public/assets/img/${imageUrl}`;
  const extension = imageUrl.split('.').pop()?.toLowerCase();
  const formats = extension === 'svg' || extension === 'gif' ? ['auto'] : ['avif', 'webp', 'auto'];

  const metadata = await Image(source, {
    widths: ['auto'],
    formats,
    outputDir: './.cache/eleventy-img/',
    urlPath: '/assets/img/optimized/',
  });

  const imageAttributes = {
    alt: imageAlt,
    style: pixelated ? 'image-rendering: pixelated' : undefined,
    loading: 'lazy',
    decoding: 'async',
  };

  return `<figure>${Image.generateHTML(metadata, imageAttributes)}</figure>`;
}
