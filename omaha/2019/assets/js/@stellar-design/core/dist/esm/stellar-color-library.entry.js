import { r as registerInstance, h } from './core-36452501.js';
import './_commonjsHelpers-ae1b5db5.js';
import { c as colors } from './index-5afdd7fa.js';
import './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';

const ColorLibrary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    renderColorPallette(color) {
        const range = colors[color];
        return [
            h("stellar-grid", { cols: "6" }, range.map((code, index) => {
                return (h("stellar-card", { padding: "tiny" }, h("div", { class: `aspect-ratio aspect-ratio--16x9 flex items-center justify-around`, style: { "background-color": `var(--${color}${index})` } }, h("div", { class: "aspect-ratio--object flex items-center justify-around " }, h("h5", { class: `f-invert fw6 ttu ${color}${index}` }, code))), h("div", { class: "pv3 ph4 tc nt4 bg-white relative" }, h("div", { class: "dt w-100" }, h("div", { class: "dtc" }, h("p", { class: "f5 f4-ns mv0 black" }, "var(--", color, index, ")"))))));
            }))
        ];
    }
    render() {
        return (h("div", null, this.renderColorPallette("gray"), this.renderColorPallette("red"), this.renderColorPallette("orange"), this.renderColorPallette("yellow"), this.renderColorPallette("lime"), this.renderColorPallette("green"), this.renderColorPallette("teal"), this.renderColorPallette("cyan"), this.renderColorPallette("blue"), this.renderColorPallette("indigo"), this.renderColorPallette("violet"), this.renderColorPallette("fuchsia"), this.renderColorPallette("pink")));
    }
    static get style() { return ""; }
};

export { ColorLibrary as stellar_color_library };
