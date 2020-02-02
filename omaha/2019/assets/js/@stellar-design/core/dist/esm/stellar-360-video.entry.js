import { r as registerInstance, h, g as getElement } from './core-36452501.js';
import { v as video } from './kaleidoscope.es-5946172c.js';

const Video360 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.width = 1280;
        this.height = 720;
    }
    componentDidLoad() {
        this.video = this.element.querySelector(".video");
        this.viewer = new video({
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
            h("div", { class: "video" }),
            h("div", { class: "overlay" })
        ];
    }
    get element() { return getElement(this); }
    static get style() { return "stellar-360-video{display:block;position:relative}stellar-360-video canvas{display:block;width:100%!important;height:auto!important}stellar-360-video .overlay{opacity:.3;z-index:3;pointer-events:none;background:var(--gradient,none);mix-blend-mode:var(--blend,multiply);position:absolute;top:0;left:0;width:100%;height:100%}"; }
};

export { Video360 as stellar_360_video };
