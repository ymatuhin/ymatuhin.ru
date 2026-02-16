import Image from '@11ty/eleventy-img';

export async function mediaImageShortcode(url, alt, loading = 'lazy', pixelated = false) {
  const imageUrl = url;
  const imageAlt = (alt || '').toString();
  let imageLoading = 'lazy';
  let isPixelated = Boolean(pixelated);

  if (!imageUrl) return '';

  const source = `./public/assets/img/${imageUrl}`;
  const extension = imageUrl.split('.').pop()?.toLowerCase();
  const formats = extension === 'svg' || extension === 'gif' ? ['auto'] : ['avif', 'webp', 'auto'];

  const metadata = await Image(source, {
    widths: ['366', '830', '1660', 'auto'],
    formats,
    outputDir: './.cache/eleventy-img/',
    urlPath: '/assets/img-optimized/',
  });

  const imageAttributes = {
    alt: imageAlt,
    sizes: imageLoading === 'eager' ? '(min-width: 926px) 830px, 366px' : 'auto',
    style: isPixelated ? 'image-rendering: pixelated' : undefined,
    loading: imageLoading,
    decoding: 'async',
  };

  return `<figure>${Image.generateHTML(metadata, imageAttributes)}</figure>`;
}
