module.exports = function(eleventyConfig) {
  const parseArgs = (args) => { return (args ? JSON.parse(args) : '') };

  // Custom Collections
  eleventyConfig.addCollection("sponsors", function(collection) {
    return collection.getFilteredByTag("sponsors").map(function(sponsor) {
      // Don't create individual pages
      // This isn't working as of Eleventy 0.9.0 but it used to work
      sponsor.data.permalink = false;

      return sponsor;
    });
  });

  // Custom Tags
  eleventyConfig.addLiquidTag("section", function(liquidEngine) {
    return {
      parse: function(tagToken, remainingTokens) {
        this.str = parseArgs(tagToken.args);
      },
      render: function(scope, hash) {
        return (`<section class="flex flex-wrap justify-center pv5 pv6-l ${this.str}">`);
      }
    }
  });
  eleventyConfig.addLiquidTag("endsection", function(liquidEngine) {
    return { render: () => '</section>' }
  });

  eleventyConfig.addLiquidTag("smallcontainer", function(liquidEngine) {
    return {
      parse: function(tagToken, remainingTokens) {
        this.str = parseArgs(tagToken.args);
      },
      render: function(scope, hash) {
        return (`<div class="w-100 mw7 ph3 ph5-l ${this.str}">`);
      }
    }
  });
  eleventyConfig.addLiquidTag("endsmallcontainer", function(liquidEngine) {
    return { render: () => '</div>' }
  });

  eleventyConfig.addLiquidTag("track", function(liquidEngine) {
    return { render: () => '<div class="w-100 w-50-ns w-25-l pa2 pa3-l pb0-l">' }
  });
  eleventyConfig.addLiquidTag("endtrack", function(liquidEngine) {
    return { render: () => '</div>' }
  });

  eleventyConfig.addLiquidTag("schedule", function(liquidEngine) {
    return { render: () => '<div class="flex flex-wrap flex-nowrap-ns">' }
  });
  eleventyConfig.addLiquidTag("endschedule", function(liquidEngine) {
    return { render: () => '</div>' }
  });

  eleventyConfig.addLiquidTag("scheduleday", function(liquidEngine) {
    return {
      parse: function(tagToken, remainingTokens) {
        this.str = tagToken.args;
      },
      render: function(scope, hash) {
        return (
          '<div class="flex justify-center w-100 w-auto-ns mb4 mb0-ns">' +
            `<div class="flex items-center justify-center w2 h2 ba br-100 windsor f3 brown">${this.str}</div>` +
          '</div>'
        );
      }
    }
  });

  eleventyConfig.addLiquidTag("scheduledetails", function(liquidEngine) {
    return { render: () => '<div class="pt2 pl3-ns w-100">' }
  });
  eleventyConfig.addLiquidTag("endscheduledetails", function(liquidEngine) {
    return { render: () => '</div>' }
  });

  eleventyConfig.addLiquidTag("scheduledate", function(liquidEngine) {
    return {
      parse: function(tagToken, remainingTokens) {
        this.str = parseArgs(tagToken.args);
      },
      render: function(scope, hash) {
        return (`<h4 class="pa0 ma0 f5 brown windsor ttu">${this.str}</h4>`);
      }
    }
  });

  eleventyConfig.addLiquidTag("largeh2", function(liquidEngine) {
    return {
      parse: function(tagToken, remainingTokens) {
        this.str = parseArgs(tagToken.args);
      },
      render: function(scope, hash) {
        return (`<h2 class="windsor mt0 mb4 f2 f1-m f-subheadline-l lh-solid ${this.str}">`);
      }
    }
  });
  eleventyConfig.addLiquidTag("endlargeh2", function(liquidEngine) {
    return { render: () => '</h2>' }
  });

  eleventyConfig.addLiquidTag("h2", function(liquidEngine) {
    return {
      parse: function(tagToken, remainingTokens) {
        this.str = parseArgs(tagToken.args);
      },
      render: function(scope, hash) {
        return (`<h2 class="mt0 mb3 windsor f2 f1-m ${this.str}">`);
      }
    }
  });
  eleventyConfig.addLiquidTag("endh2", function(liquidEngine) {
    return { render: () => '</h2>' }
  });

  eleventyConfig.addLiquidTag("h3", function(liquidEngine) {
    return {
      parse: function(tagToken, remainingTokens) {
        this.str = parseArgs(tagToken.args);
      },
      render: function(scope, hash) {
        return (`<h3 class="mt2 mb1 f3 windsor pa0 ${this.str}">`);
      }
    }
  });
  eleventyConfig.addLiquidTag("endh3", function(liquidEngine) {
    return { render: () => '</h3>' }
  });

  eleventyConfig.addLiquidTag("paragraph", function(liquidEngine) {
    return {
      parse: function(tagToken, remainingTokens) {
        this.str = parseArgs(tagToken.args);
      },
      render: function(scope, hash) {
        return (`<p class="mv0 brown lh-copy ${this.str}">`);
      }
    }
  });
  eleventyConfig.addLiquidTag("endparagraph", function(liquidEngine) {
    return { render: () => '</p>' }
  });

  eleventyConfig.addLiquidTag("ctabutton", function(liquidEngine) {
    return {
      parse: function(tagToken, remainingTokens) {
        this.args = parseArgs(`{${tagToken.args}}`);
      },
      render: function(scope, hash) {
        return (
          '<a class="dib mt4 ph4 pv3 br3 bg-teal hover-bg-orange ' +
          'white hover-white f4 tracked lh-solid no-underline ttu shadow-4" ' +
          `href="${this.args.href}"${this.args.newtab ? ' target="_blank"' : ''}>` +
            this.args.text +
          '</a>'
        );
      }
    }
  });

  // Layouts
  eleventyConfig.addLayoutAlias('default', 'layouts/default.liquid');

  // Passthrough copy
  // Just copy this content into the _site directory
  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addPassthroughCopy("assets/images/favicons/*");
  eleventyConfig.addPassthroughCopy("assets/images/**/*.{png,jpg}");
  eleventyConfig.addPassthroughCopy("assets/js");

  return {
    passthroughFileCopy: true,
    templateFormats : ["liquid"],
  }
};
