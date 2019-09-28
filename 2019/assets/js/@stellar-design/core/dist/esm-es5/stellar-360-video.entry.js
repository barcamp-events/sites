import { r as registerInstance, h, g as getElement } from './core-8f5ef0c7.js';
import { v as video } from './kaleidoscope.es-5946172c.js';
var Video360 = /** @class */ (function () {
    function Video360(hostRef) {
        registerInstance(this, hostRef);
        this.width = 1280;
        this.height = 720;
    }
    Video360.prototype.componentDidLoad = function () {
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
    };
    Video360.prototype.render = function () {
        return [
            h("div", { class: "video" }),
            h("div", { class: "overlay" })
        ];
    };
    Object.defineProperty(Video360.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video360, "style", {
        get: function () { return "stellar-360-video{display:block;position:relative}stellar-360-video canvas{display:block;width:100%!important;height:auto!important}stellar-360-video .overlay{opacity:.3;z-index:3;pointer-events:none;background:var(--gradient,none);mix-blend-mode:var(--blend,multiply);position:absolute;top:0;left:0;width:100%;height:100%}"; },
        enumerable: true,
        configurable: true
    });
    return Video360;
}());
export { Video360 as stellar_360_video };
