import Image from '@11ty/eleventy-img';

export async function mediaImageShortcode(url, alt, loading = 'lazy', pixelated = false) {
  const imageUrl = url;
  const imageAlt = (alt || '').toString();
  let imageLoading = 'lazy';
  let isPixelated = Boolean(pixelated);

  // Backward compatibility: old call order was (url, alt, pixelated, loading)
  if (typeof loading === 'boolean') {
    isPixelated = loading;
  } else if (typeof loading === 'string') {
    const normalizedLoading = loading.toLowerCase();
    if (normalizedLoading === 'eager' || normalizedLoading === 'lazy') {
      imageLoading = normalizedLoading;
    }
  }

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
    style: isPixelated ? 'image-rendering: pixelated' : undefined,
    loading: imageLoading,
    decoding: 'async',
  };

  return `<figure>${Image.generateHTML(metadata, imageAttributes)}</figure>`;
}
