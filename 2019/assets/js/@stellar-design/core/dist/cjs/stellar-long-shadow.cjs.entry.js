'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
require('./_commonjsHelpers-3fc1f64e.js');
const cssCustomProperties_min = require('./css-custom-properties.min-d46e7f9d.js');

const LongShadow = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.direction = "top-left";
        this.length = 100;
        this.delay = 100;
        this.timing = 50;
        this.active = false;
    }
    componentWillLoad() {
        this.children = Array.from(this.element.children);
    }
    handleChanges() {
        this.in();
    }
    getShadowCSS() {
        const vertical = this.direction.includes("top");
        const horizontal = this.direction.includes("left");
        // @ts-ignore
        let css = Array(this.length).fill("").map((item, index) => {
            const y = index * (horizontal ? -1 : 1);
            const x = index * (vertical ? -1 : 1);
            return `${y}px ${x}px var(--theme-complement7)`;
        });
        return css.join();
    }
    async out() {
        cssCustomProperties_min.properties.set({ "--text-shadow": "none" }, this.element);
    }
    async in() {
        cssCustomProperties_min.properties.set({ "--text-shadow": this.getShadowCSS() }, this.element);
    }
    render() {
        return core.h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) }, core.h("slot", null));
    }
    get element() { return core.getElement(this); }
    static get watchers() { return {
        "length": ["handleChanges"],
        "direction": ["handleChanges"]
    }; }
    static get style() { return ":host,:host ::slotted(*){text-shadow:var(--text-shadow);-webkit-transition:text-shadow .35s var(--ease) .35s;transition:text-shadow .35s var(--ease) .35s}"; }
};

exports.stellar_long_shadow = LongShadow;
