module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy({
    "node_modules/normalize.css/normalize.css": "assets/css/normalize.css"
  });
  eleventyConfig.addPassthroughCopy("assets/**/*");

  return {
    passthroughFileCopy: true,
    templateFormats : ['njk'],
  }
};
