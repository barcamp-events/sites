'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
const index = require('./index-5a80c644.js');
require('./_commonjsHelpers-3fc1f64e.js');
require('./css-custom-properties.min-d46e7f9d.js');
require('./main-6214461c.js');
require('./moment-fd045425.js');

const ColorLibrary = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    renderColorPallette(color) {
        const range = index.colors[color];
        return [
            core.h("stellar-grid", { cols: "6" }, range.map((code, index) => {
                return (core.h("stellar-card", { padding: "tiny" }, core.h("div", { class: `aspect-ratio aspect-ratio--16x9 flex items-center justify-around`, style: { "background-color": `var(--${color}${index})` } }, core.h("div", { class: "aspect-ratio--object flex items-center justify-around " }, core.h("h5", { class: `f-invert fw6 ttu ${color}${index}` }, code))), core.h("div", { class: "pv3 ph4 tc nt4 bg-white relative" }, core.h("div", { class: "dt w-100" }, core.h("div", { class: "dtc" }, core.h("p", { class: "f5 f4-ns mv0 black" }, "var(--", color, index, ")"))))));
            }))
        ];
    }
    render() {
        return (core.h("div", null, this.renderColorPallette("gray"), this.renderColorPallette("red"), this.renderColorPallette("orange"), this.renderColorPallette("yellow"), this.renderColorPallette("lime"), this.renderColorPallette("green"), this.renderColorPallette("teal"), this.renderColorPallette("cyan"), this.renderColorPallette("blue"), this.renderColorPallette("indigo"), this.renderColorPallette("violet"), this.renderColorPallette("fuchsia"), this.renderColorPallette("pink")));
    }
    static get style() { return ""; }
};

exports.stellar_color_library = ColorLibrary;
