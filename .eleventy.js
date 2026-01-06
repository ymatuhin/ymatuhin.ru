import { DateTime } from "luxon";
import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginRss from "@11ty/eleventy-plugin-rss";
import eleventyNavigation from "@11ty/eleventy-navigation";

export default function(eleventyConfig) {
  eleventyConfig.setLibrary("md", markdownIt({
    html: true,
    breaks: true,
    linkify: false
  }).use(markdownItAttrs));

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(eleventyNavigation);

  // Passthrough copy
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPassthroughCopy({ "src/assets/*": "assets" });

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("stripDate", (slug) => {
    return slug.replace(/^\d{4}-\d{2}-\d{2}-/, "");
  });

  // Collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.{md,html}").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("categories", function(collectionApi) {
    let categories = new Set();
    let posts = collectionApi.getFilteredByGlob("src/posts/*.{md,html}");
    posts.forEach(item => {
      if (item.data.categories) {
        if (Array.isArray(item.data.categories)) {
          item.data.categories.forEach(cat => categories.add(cat));
        } else {
          categories.add(item.data.categories);
        }
      }
    });
    return Array.from(categories);
  });

  // Base config
  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "includes",
      layouts: "layouts",
      data: "data",
      output: "_site"
    }
  };
};
