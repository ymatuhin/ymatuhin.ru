import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import { IdAttributePlugin } from '@11ty/eleventy';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import { idAttributeFilter } from './config/plugins.js';
import { mediaImageShortcode } from './config/shortcodes.js';
import {
  buildFrontmatterRedirectsCollection,
  buildPostsCollection,
  buildPostTypesCollection,
  buildTagPagesCollection,
  buildTagsCollection,
} from './config/collections.js';
import {
  addExternalLinkSecurityAttrs,
  applyTypography,
  minifyHtmlAndInlineCss,
} from './config/transforms.js';
import { buildRelatedPosts } from './config/relatedPosts.js';
import { toTagLabel, toTagSlug } from './config/tag-utils.js';
import siteData from './config/site.js';

export default function (eleventyConfig) {
  // Preprocessors
  eleventyConfig.addPreprocessor('drafts', '*', (data, content) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === 'build') return false;
  });

  // Bundles
  eleventyConfig.addBundle('css');
  eleventyConfig.addBundle('html');

  // Markdown
  const mdOptions = { html: true, breaks: false, linkify: false };
  eleventyConfig.setLibrary('md', markdownIt(mdOptions).use(markdownItAttrs));

  // Plugins
  eleventyConfig.addPlugin(IdAttributePlugin, { filter: idAttributeFilter });
  eleventyConfig.addPlugin(syntaxHighlight);

  // Filters
  eleventyConfig.addFilter('tagSlug', toTagSlug);
  eleventyConfig.addFilter('tagLabel', toTagLabel);
  eleventyConfig.addFilter('relatedPosts', buildRelatedPosts);

  // Shortcodes
  eleventyConfig.addAsyncShortcode('mediaImage', mediaImageShortcode);

  // Passthrough copy
  eleventyConfig.addPassthroughCopy({ public: '/' });
  eleventyConfig.addPassthroughCopy({ './.cache/eleventy-img': '/assets/img/optimized/' });

  // Collections
  eleventyConfig.addCollection('posts', buildPostsCollection);
  eleventyConfig.addCollection('tags', buildTagsCollection);
  eleventyConfig.addCollection('postTypes', buildPostTypesCollection);
  eleventyConfig.addCollection('tagPages', buildTagPagesCollection);
  eleventyConfig.addCollection('redirects', buildFrontmatterRedirectsCollection);

  // Global data
  eleventyConfig.addGlobalData('site', siteData);

  // Transforms
  eleventyConfig.addTransform('apply-typography', applyTypography);
  eleventyConfig.addTransform('add-external-link-security-attrs', addExternalLinkSecurityAttrs);
  eleventyConfig.addTransform('minify-html-and-inline-css', minifyHtmlAndInlineCss);

  return {
    templateFormats: ['md', 'html', 'liquid', 'njk'],
    dir: {
      input: 'src',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
      output: '_site',
    },
  };
}
