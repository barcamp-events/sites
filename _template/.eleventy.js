module.exports = function (eleventyConfig) {
	const parseArgs = (args) => { return (args ? JSON.parse(args) : ''); };

	eleventyConfig.addCollection("sections", function (collection) {
		return collection.getFilteredByGlob("./data/en/**/*.md");
	});

	eleventyConfig.addCollection("data_es", function (collection) {
		return collection.getFilteredByGlob("./data/es/**/*");
	});

	// Custom Tags

	eleventyConfig.addLiquidTag("agenda", function (liquidEngine) {
		return { render: () => '<div class="flex flex-wrap flex-nowrap-ns">' };
	});
	eleventyConfig.addLiquidTag("endagenda", function (liquidEngine) {
		return { render: () => '</div>' };
	});

	eleventyConfig.addLiquidTag("agendaday", function (liquidEngine) {
		return {
			parse: function (tagToken, remainingTokens) {
				this.str = tagToken.args;
			},
			render: function (scope, hash) {
				return (
					'<div class="flex justify-center w-100 w-auto-ns mb4 mb0-ns">' +
					`<div class="b--theme-base7 b--solid black dm-white br-100 flex fs5 fw7 h3 items-center justify-center pa3 w3">${this.str}</div>` +
					'</div>'
				);
			}
		};
	});

	eleventyConfig.addLiquidTag("agendadetails", function (liquidEngine) {
		return { render: () => '<div class="pt2 pl3-ns w-100">' };
	});
	eleventyConfig.addLiquidTag("endagendadetails", function (liquidEngine) {
		return { render: () => '</div>' };
	});

	// Layouts
	eleventyConfig.addLayoutAlias('default', 'layout.liquid');

	// Passthrough copy
	// Just copy this content into the _site directory
	eleventyConfig.addPassthroughCopy("assets/audio");
	eleventyConfig.addPassthroughCopy("assets/video");
	eleventyConfig.addPassthroughCopy("assets/css");
	eleventyConfig.addPassthroughCopy("assets/fonts");
	eleventyConfig.addPassthroughCopy("assets/images/favicons/*");
	eleventyConfig.addPassthroughCopy("assets/images/**/*.{png,jpg}");
	eleventyConfig.addPassthroughCopy("assets/js");


	return {
		passthroughFileCopy: true,
		templateFormats: ["liquid"],
	};
};
