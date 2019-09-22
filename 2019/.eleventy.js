module.exports = function(eleventyConfig) {
  // Layouts
  eleventyConfig.addLayoutAlias('default', 'layouts/default.liquid');

  return {
    // passthroughFileCopy: true,
    templateFormats : ["liquid"],
  }
};
