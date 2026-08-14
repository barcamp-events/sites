module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy({
    "node_modules/normalize.css/normalize.css": "assets/css/normalize.css"
  });
  eleventyConfig.addPassthroughCopy("assets/**/*");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("_headers");

  const sortBy = (obj, attr) => {
    const sortedObj = Object.fromEntries(
      Object.entries(obj).sort(([,a], [,b]) => a[attr] - b[attr])
    );

    return sortedObj;
  }
  eleventyConfig.addFilter('sortBy', sortBy);

  return {
    passthroughFileCopy: true,
    templateFormats : ['njk'],
  }
};
