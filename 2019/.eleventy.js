module.exports = function(eleventyConfig) {
  // Layouts
  eleventyConfig.addLayoutAlias('default', 'layouts/default.liquid');

  // Passthrough copy
  // Just copy this content into the _site directory
  eleventyConfig.addPassthroughCopy("assets/fonts");

  return {
    passthroughFileCopy: true,
    templateFormats : ["liquid"],
  }
};
