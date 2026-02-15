import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import { IdAttributePlugin } from '@11ty/eleventy';
import { feedPlugin } from '@11ty/eleventy-plugin-rss';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import { feedConfig, idAttributeFilter } from './config/plugins.js';
import { mediaImageShortcode } from './config/shortcodes.js';
import { buildTagsCollection, buildPostsCollection } from './config/collections.js';
import { addExternalLinkSecurityAttrs, applyTypography, minifyHtmlAndInlineCss } from './config/transforms.js';
import siteData from './config/site.js';

export default function (eleventyConfig) {
  // Preprocessors
  eleventyConfig.addPreprocessor('drafts', '*', (data, content) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === 'build') return false;
  });

  // Bundles
  eleventyConfig.addBundle('css');
  eleventyConfig.addBundle('html');

  // Global data
  eleventyConfig.addGlobalData('site', siteData);

  // Markdown
  const mdOptions = { html: true, breaks: false, linkify: false };
  eleventyConfig.setLibrary('md', markdownIt(mdOptions).use(markdownItAttrs));

  // Plugins
  eleventyConfig.addPlugin(IdAttributePlugin, {
    filter: idAttributeFilter,
  });
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(feedPlugin, feedConfig);

  // Shortcodes
  eleventyConfig.addAsyncShortcode('mediaImage', mediaImageShortcode);

  // Passthrough copy
  eleventyConfig.addPassthroughCopy({ public: '/' });
  eleventyConfig.addPassthroughCopy({ './.cache/eleventy-img': '/assets/img/optimized/' });

  // Collections
  eleventyConfig.addCollection('posts', buildPostsCollection);
  eleventyConfig.addCollection('tags', buildTagsCollection);

  // Transforms
  eleventyConfig.addTransform('apply-typography', applyTypography);
  eleventyConfig.addTransform('add-external-link-security-attrs', addExternalLinkSecurityAttrs);
  eleventyConfig.addTransform('minify-html-and-inline-css', minifyHtmlAndInlineCss);

  return {
    // njk is required for feed plugin
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
