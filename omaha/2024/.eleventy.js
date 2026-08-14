module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy({
    "node_modules/normalize.css/normalize.css": "assets/css/normalize.css"
  });
  eleventyConfig.addPassthroughCopy("assets/**/*");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("_headers");

  return {
    passthroughFileCopy: true,
    templateFormats : ['njk'],
  }
};
