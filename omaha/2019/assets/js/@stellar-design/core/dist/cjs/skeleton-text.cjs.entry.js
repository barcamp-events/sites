'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
require('./_commonjsHelpers-3fc1f64e.js');
const cssCustomProperties_min = require('./css-custom-properties.min-d46e7f9d.js');

const SkeletonText = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.as = 'p';
        this.width = 100;
        this.loading = false;
    }
    componentWillLoad() {
        cssCustomProperties_min.properties.set({
            '--width': `${this.width}%`
        }, this.element);
    }
    in() { this.element.classList.add('visible'); }
    out() { this.element.classList.remove('visible'); }
    render() {
        return core.h("span", null, "\u00A0", core.h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) }));
    }
    get element() { return core.getElement(this); }
    static get style() { return "skeleton-text{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;display:inline-block;margin-bottom:1rem;width:100%;--line-height:1.2;--font-size:1rem}skeleton-text span{display:inline-block;border-radius:4px;background-color:var(--theme-base5);overflow:hidden;font-size:var(--font-size,1rem);width:var(--width);line-height:var(--line-height)}skeleton-text[loading] span{position:relative}skeleton-text[loading] span:before{content:\"\";display:block;position:absolute;top:0;right:0;bottom:0;left:0;background-color:var(--theme-base5);background-image:linear-gradient(45deg,var(--theme-base5),var(--theme-base5) 20%,var(--theme-base3) 40%,var(--theme-base4) 61%,var(--theme-base5) 80%,var(--theme-base5));background-repeat:no-repeat;width:300%;height:100%}skeleton-text[loading].visible span:before{-webkit-animation:shimmer 2.75s linear 0s infinite forwards;animation:shimmer 2.75s linear 0s infinite forwards}skeleton-text[as=h1]{--font-size:2.8rem}skeleton-text[as=h2]{--font-size:2.4rem;--line-height:1.33}skeleton-text[as=h3]{--font-size:2rem;--line-height:1.4}skeleton-text[as=h4]{--font-size:1.8rem;--line-height:1.6}skeleton-text[as=h5]{--font-size:1.4rem;--line-height:1.22}skeleton-text[as=h6]{--line-height:1.5;--font-size:1.2rem}\@-webkit-keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}to{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}\@keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}to{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}"; }
};

exports.skeleton_text = SkeletonText;
