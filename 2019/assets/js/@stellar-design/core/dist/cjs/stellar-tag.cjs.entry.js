'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
require('./_commonjsHelpers-3fc1f64e.js');
const cssCustomProperties_min = require('./css-custom-properties.min-d46e7f9d.js');
require('./index-9d31ce96.js');
const theme$1 = require('./theme-f448164e.js');

const Tag = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.pill = false;
        this.outline = false;
        this.dark = false;
        this.color = "cyan5";
        this.textColor = "white";
    }
    componentWillLoad() {
        cssCustomProperties_min.properties.set({
            '--background-color': `var(--${this.color})`,
            '--color': `var(--${this.textColor})`,
        }, this.element);
    }
    render() {
        return (core.h("stellar-label", { class: "tag", size: this.size }, core.h("slot", null)));
    }
    get element() { return core.getElement(this); }
    static get style() { return ":host{display:inline-block;--color:var(--color,var(--white));--background-color:var(--background-color,var(--blue5))}:host([color*=\"0\"]),:host([color*=\"1\"]),:host([color*=\"2\"]),:host([color*=\"3\"]),:host([color*=\"4\"]){--color:var(--black)!important}:host .tag{display:block;border:2px solid var(--background-color);background-color:var(--background-color);padding:0 var(--ms-6);text-transform:uppercase;white-space:nowrap;color:var(--color);font-weight:700;overflow:hidden;text-overflow:ellipsis;margin:0}:host([size=tiny]) .tag{padding:0 var(--ms-8)}:host([size=small]) .tag{padding:0 var(--ms-7)}:host([size=medium]) .tag{padding:0 var(--ms-5)}:host([size=large]) .tag{padding:0 var(--ms-4)}:host([pill]) .tag{border-radius:5rem}:host([dark][color*=\"5\"]),:host([dark][color*=\"6\"]),:host([dark][color*=\"7\"]),:host([dark][color*=\"8\"]),:host([dark][color*=\"9\"]){--color:var(--black)!important}"; }
};
theme$1.Tunnel.injectProps(Tag, ['dark']);

exports.stellar_tag = Tag;
