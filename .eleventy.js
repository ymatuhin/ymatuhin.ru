import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import {feedPlugin} from "@11ty/eleventy-plugin-rss";
import {IdAttributePlugin} from "@11ty/eleventy";
import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";

export default function (eleventyConfig) {
  eleventyConfig.addBundle("css");
  eleventyConfig.addBundle("html");

  const mdOptions = {html: true, breaks: true, linkify: false};
  eleventyConfig.setLibrary("md", markdownIt(mdOptions).use(markdownItAttrs));

  // Plugins
  eleventyConfig.addPlugin(IdAttributePlugin, {
    filter({page}) {
      if (page.inputPath.endsWith("javascript_styleguide.liquid")) {
        return false; // skip
      }

      return true;
    }
  });
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(feedPlugin, {
    outputPath: "/feed.xml",
    collection: {
      name: "posts", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "Blog Title",
      subtitle: "This is a longer description about your blog.",
      base: "https://example.com/",
      author: {
        name: "Your Name",
        email: "", // Optional
      }
    }
  });

  // Passthrough copy
  eleventyConfig.addPassthroughCopy({"public": "/"});

  // Collections
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.{md,html}").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("categories", function (collectionApi) {
    let categories = new Set();
    let posts = collectionApi.getFilteredByGlob("src/posts/*.{md,html}");
    posts.forEach(item => {
      if (item.data.categories) {
        if (Array.isArray(item.data.categories)) {
          item.data.categories.forEach(category => categories.add(category));
        } else {
          categories.add(item.data.categories);
        }
      }
    });
    return Array.from(categories);
  });

  return {
    // njk is required for feed plugin
    templateFormats: ["md", "html", "liquid", "njk"],
    dir: {
      input: "src",
      includes: "includes",
      layouts: "layouts",
      data: "data",
      output: "_site"
    }
  };
};
