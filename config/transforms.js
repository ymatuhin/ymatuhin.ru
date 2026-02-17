import { minify } from 'html-minifier-terser';
import Typograf from 'typograf';

const typograf = new Typograf({
  locale: ['ru', 'en-US'],
});

export function applyTypography(content) {
  if (!this.outputPath || !this.outputPath.endsWith('.html')) return content;
  return typograf.execute(content);
}

export function addExternalLinkSecurityAttrs(content) {
  if (!this.outputPath || !this.outputPath.endsWith('.html')) return content;

  return content.replaceAll(/<a\b[^>]*>/gi, (openTag) => {
    const href = openTag.match(/\bhref\s*=\s*(['"])(.*?)\1/i)?.[2]?.trim() || '';
    const isExternalHttpLink = /^https?:\/\//i.test(href) || href.startsWith('//');
    if (!isExternalHttpLink) return openTag;

    const withTarget = /\btarget\s*=/i.test(openTag)
      ? openTag.replace(/\btarget\s*=\s*(['"])(.*?)\1/i, 'target="_blank"')
      : openTag.replace(/>$/, ' target="_blank">');

    const existingRel = withTarget.match(/\brel\s*=\s*(['"])(.*?)\1/i)?.[2] || '';
    const relValues = new Set(existingRel.split(/\s+/).filter(Boolean));
    relValues.add('noopener');
    relValues.add('noreferrer');
    const rel = [...relValues].join(' ');

    return /\brel\s*=/i.test(withTarget)
      ? withTarget.replace(/\brel\s*=\s*(['"])(.*?)\1/i, `rel="${rel}"`)
      : withTarget.replace(/>$/, ` rel="${rel}">`);
  });
}

export async function minifyHtmlAndInlineCss(content) {
  if (!this.outputPath || !this.outputPath.endsWith('.html')) return content;

  return minify(content, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    continueOnParseError: true,
  });
}
