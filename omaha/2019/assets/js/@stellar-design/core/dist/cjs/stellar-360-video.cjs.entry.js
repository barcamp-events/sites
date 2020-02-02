'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
const kaleidoscope_es = require('./kaleidoscope.es-c30f5b1d.js');

const Video360 = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.width = 1280;
        this.height = 720;
    }
    componentDidLoad() {
        this.video = this.element.querySelector(".video");
        this.viewer = new kaleidoscope_es.video({
            source: this.src,
            container: this.video,
            width: this.width,
            height: this.height,
            autoplay: true,
            muted: true,
            loop: true
        });
        this.viewer.render();
        this.viewer.play();
    }
    render() {
        return [
            core.h("div", { class: "video" }),
            core.h("div", { class: "overlay" })
        ];
    }
    get element() { return core.getElement(this); }
    static get style() { return "stellar-360-video{display:block;position:relative}stellar-360-video canvas{display:block;width:100%!important;height:auto!important}stellar-360-video .overlay{opacity:.3;z-index:3;pointer-events:none;background:var(--gradient,none);mix-blend-mode:var(--blend,multiply);position:absolute;top:0;left:0;width:100%;height:100%}"; }
};

exports.stellar_360_video = Video360;
