'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
require('./_commonjsHelpers-3fc1f64e.js');
const cssCustomProperties_min = require('./css-custom-properties.min-d46e7f9d.js');
const index = require('./index-bae84e7c.js');

const RevealList = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.animation = "fadeInUp";
        this.outAnimation = "fadeOut";
        this.delay = 100;
        this.timing = 20;
        this.active = false;
    }
    componentWillLoad() {
        this.children = Array.from(this.element.children);
    }
    async calculateTiming() {
        const time = 1000 + (this.children.length * this.delay);
        await index.delay(time);
    }
    async out() {
        cssCustomProperties_min.properties.set({
            "--animation": this.outAnimation
        }, this.element);
        this.children.forEach((element, index) => {
            // @ts-ignore
            element.style.setProperty('animation-delay', `${this.delay * index}ms`);
            element.style.setProperty('animation-timing', `${this.timing}ms`);
        });
        return await this.calculateTiming();
    }
    async in() {
        this.active = true;
        cssCustomProperties_min.properties.set({
            "--animation": this.animation
        }, this.element);
        this.children.forEach((element, index) => {
            // @ts-ignore
            element.style.setProperty('animation-delay', `${this.delay * index}ms`);
            element.style.setProperty('animation-timing', `${this.timing}ms`);
        });
        return await this.calculateTiming();
    }
    render() {
        return [
            core.h("stellar-intersection", { element: this.element.parentElement, in: this.in.bind(this) }),
            core.h("slot", null)
        ];
    }
    get element() { return core.getElement(this); }
    static get style() { return ":host,:host stellar-intersection{display:contents;--animation:fadeIn}:host ::slotted(*){opacity:0}:host([active]) ::slotted(*){-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:var(--ease);animation-timing-function:var(--ease);-webkit-animation-name:var(--animation);animation-name:var(--animation)}"; }
};

exports.stellar_reveal_list = RevealList;
