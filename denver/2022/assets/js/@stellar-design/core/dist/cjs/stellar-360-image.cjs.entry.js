'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
const kaleidoscope_es = require('./kaleidoscope.es-c30f5b1d.js');

const Image360 = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.nolazyload = false;
        this.width = 1280;
        this.height = 720;
        this.ready = false;
    }
    componentDidLoad() {
        this.image = this.element.querySelector(".image");
        if (this.nolazyload) {
            this.in();
        }
    }
    in() {
        if (!this.viewer) {
            this.viewer = new kaleidoscope_es.Image({
                source: this.src,
                container: this.image,
                width: this.width,
                height: this.height,
            });
        }
        this.viewer.render();
        this.ready = true;
    }
    out() {
        this.viewer.destroy();
        this.ready = false;
    }
    render() {
        return core.h("div", null, core.h("div", { class: "image" }), core.h("div", { class: "overlay" }), !this.nolazyload && core.h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this), margin: '50%' }), !this.ready && core.h("skeleton-img", { width: this.width, height: this.height }));
    }
    get element() { return core.getElement(this); }
    static get style() { return "stellar-360-image{display:block;position:relative}stellar-360-image canvas{display:block;width:100%!important;height:auto!important}stellar-360-image .overlay{opacity:.3;z-index:3;pointer-events:none;background:var(--gradient,none);mix-blend-mode:var(--blend,multiply);position:absolute;top:0;left:0;width:100%;height:100%}"; }
};

exports.stellar_360_image = Image360;
