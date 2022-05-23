module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("assets/images/**/*");

  return {
    passthroughFileCopy: true,
    templateFormats : ['njk'],
  }
};
