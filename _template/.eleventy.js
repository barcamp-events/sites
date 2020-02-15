module.exports = function (eleventyConfig) {
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
	eleventyConfig.addLayoutAlias('en', 'en.liquid');
	eleventyConfig.addLayoutAlias('es', 'es.liquid');

	// Passthrough copy
	// Just copy this content into the _site directory
	eleventyConfig.addPassthroughCopy({ "node_modules/@stellar-design/core/dist/stellar-core": "assets/js/stellar-core" });
	eleventyConfig.addPassthroughCopy("assets/**/*");


	return {
		passthroughFileCopy: true,
		templateFormats: ["liquid"],
	};
};
