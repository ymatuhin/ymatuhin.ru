import { minify } from 'html-minifier-terser';
import Typograf from 'typograf';

const typograf = new Typograf({
  locale: ['ru', 'en-US'],
});

export function applyTypography(content) {
  if (!this.outputPath || !this.outputPath.endsWith('.html')) {
    return content;
  }

  return typograf.execute(content);
}

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
