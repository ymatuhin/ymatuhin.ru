import Image from '@11ty/eleventy-img';

export async function mediaImageShortcode(
  url,
  alt,
  loading = 'lazy',
  caption = false,
  className = '',
) {
  const imageUrl = url;
  const imageAlt = (alt || '').toString();
  let imageLoading = 'lazy';

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
    loading: imageLoading,
    decoding: 'async',
  };

  const captionText = typeof caption === 'string' ? caption : imageAlt;
  const captionHtml = caption ? `<figcaption>${captionText}</figcaption>` : '';
  const figureClass = className ? ` class="${className}"` : '';

  const imageHtml = Image.generateHTML(metadata, imageAttributes);
  const wrappedIfNeeded = imageHtml.startsWith('<picture') ? imageHtml : `<div>${imageHtml}</div>`;

  return `<figure${figureClass}>${wrappedIfNeeded}${captionHtml}</figure>`;
}
