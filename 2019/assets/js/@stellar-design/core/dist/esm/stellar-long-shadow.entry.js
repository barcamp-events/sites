import { r as registerInstance, h, g as getElement } from './core-8f5ef0c7.js';
import './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';

const LongShadow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        properties.set({ "--text-shadow": "none" }, this.element);
    }
    async in() {
        properties.set({ "--text-shadow": this.getShadowCSS() }, this.element);
    }
    render() {
        return h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) }, h("slot", null));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "length": ["handleChanges"],
        "direction": ["handleChanges"]
    }; }
    static get style() { return ":host,:host ::slotted(*){text-shadow:var(--text-shadow);-webkit-transition:text-shadow .35s var(--ease) .35s;transition:text-shadow .35s var(--ease) .35s}"; }
};

export { LongShadow as stellar_long_shadow };
