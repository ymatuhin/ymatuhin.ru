import { minify } from 'html-minifier-terser';

export async function minifyHtmlAndInlineCss(content) {
  if (!this.outputPath || !this.outputPath.endsWith('.html')) {
    return content;
  }

  return minify(content, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    continueOnParseError: true,
  });
}
