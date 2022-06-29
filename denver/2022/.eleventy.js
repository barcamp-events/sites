module.exports = function (eleventyConfig) {
  const parseArgs = (args) => {
    return args ? JSON.parse(args) : "";
  };

  // Custom Collections
  eleventyConfig.addCollection("tracks", function (collection) {
    return collection.getFilteredByTag("tracks").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  // Make sure sponsors are in alphabetical order
  const levels = ["platinum", "gold", "silver", "bronze", "carbon"];

  levels.forEach(function (level) {
    eleventyConfig.addCollection(level, function (collection) {
      return collection.getFilteredByTag(level).sort(function (a, b) {
        return a.data.name < b.data.name ? -1 : 1;
      });
    });
  });

  // Custom Tags

  eleventyConfig.addLiquidTag("schedule", function (liquidEngine) {
    return { render: () => '<div class="flex flex-wrap flex-nowrap-ns">' };
  });
  eleventyConfig.addLiquidTag("endschedule", function (liquidEngine) {
    return { render: () => "</div>" };
  });

  eleventyConfig.addLiquidTag("scheduleday", function (liquidEngine) {
    return {
      parse: function (tagToken, remainingTokens) {
        this.str = tagToken.args;
      },
      render: function (scope, hash) {
        return (
          '<div class="flex justify-center w-100 w-auto-ns mb4 mb0-ns">' +
          `<div class="flex items-center justify-center w2 h2 ba br-100 windsor f3 brown">${this.str}</div>` +
          "</div>"
        );
      },
    };
  });

  eleventyConfig.addLiquidTag("scheduledetails", function (liquidEngine) {
    return { render: () => '<div class="pt2 pl3-ns w-100">' };
  });
  eleventyConfig.addLiquidTag("endscheduledetails", function (liquidEngine) {
    return { render: () => "</div>" };
  });

  eleventyConfig.addLiquidTag("scheduledate", function (liquidEngine) {
    return {
      parse: function (tagToken, remainingTokens) {
        this.str = parseArgs(tagToken.args);
      },
      render: function (scope, hash) {
        return `<h4 class="pa0 ma0 f5 brown windsor ttu">${this.str}</h4>`;
      },
    };
  });

  eleventyConfig.addLiquidTag("h2", function (liquidEngine) {
    return {
      parse: function (tagToken, remainingTokens) {
        this.str = parseArgs(tagToken.args);
      },
      render: function (scope, hash) {
        return `<h2 class="mt0 mb3 windsor f2 f1-m ${this.str}">`;
      },
    };
  });
  eleventyConfig.addLiquidTag("endh2", function (liquidEngine) {
    return { render: () => "</h2>" };
  });

  eleventyConfig.addLiquidTag("h3", function (liquidEngine) {
    return {
      parse: function (tagToken, remainingTokens) {
        this.str = parseArgs(tagToken.args);
      },
      render: function (scope, hash) {
        return `<h3 class="mt2 mb1 f3 windsor pa0 ${this.str}">`;
      },
    };
  });
  eleventyConfig.addLiquidTag("endh3", function (liquidEngine) {
    return { render: () => "</h3>" };
  });

  eleventyConfig.addLiquidTag("paragraph", function (liquidEngine) {
    return {
      parse: function (tagToken, remainingTokens) {
        this.str = parseArgs(tagToken.args);
      },
      render: function (scope, hash) {
        return `<p class="mv0 brown lh-copy ${this.str}">`;
      },
    };
  });
  eleventyConfig.addLiquidTag("endparagraph", function (liquidEngine) {
    return { render: () => "</p>" };
  });

  // Layouts
  eleventyConfig.addLayoutAlias("main", "layouts/main.liquid");

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
  });

  // Passthrough copy
  // Just copy this content into the _site directory
  eleventyConfig.addPassthroughCopy("assets/**/*");

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    templateFormats: ["liquid"],
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "global",
    },
  };
};
