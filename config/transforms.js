import { minify } from 'html-minifier-terser';
import Typograf from 'typograf';
import { parseDocument } from 'htmlparser2';
import { findAll } from 'domutils';
import domSerializer from 'dom-serializer';

const typograf = new Typograf({
  locale: ['ru', 'en-US'],
});

export function applyTypography(content) {
  if (!this.outputPath || !this.outputPath.endsWith('.html')) return content;
  return typograf.execute(content);
}

export function addExternalLinkSecurityAttrs(content) {
  if (!this.outputPath || !this.outputPath.endsWith('.html')) return content;

  const doc = parseDocument(content, { decodeEntities: false });
  const anchors = findAll((node) => node.name === 'a', doc.children);

  for (const anchor of anchors) {
    const href = anchor.attribs?.href?.trim() || '';
    const isExternalHttpLink = /^https?:\/\//i.test(href) || /^\/\//.test(href);
    if (!isExternalHttpLink) continue;

    anchor.attribs.target = '_blank';

    const relValues = new Set((anchor.attribs.rel || '').split(/\s+/).filter(Boolean));
    relValues.add('noopener');
    relValues.add('noreferrer');
    anchor.attribs.rel = [...relValues].join(' ');
  }

  return domSerializer.default(doc, { encodeEntities: false });
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
