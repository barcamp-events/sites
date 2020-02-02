import { r as registerInstance, h, g as getElement } from './core-36452501.js';
import { I as Image } from './kaleidoscope.es-5946172c.js';
var Image360 = /** @class */ (function () {
    function Image360(hostRef) {
        registerInstance(this, hostRef);
        this.nolazyload = false;
        this.width = 1280;
        this.height = 720;
        this.ready = false;
    }
    Image360.prototype.componentDidLoad = function () {
        this.image = this.element.querySelector(".image");
        if (this.nolazyload) {
            this.in();
        }
    };
    Image360.prototype.in = function () {
        if (!this.viewer) {
            this.viewer = new Image({
                source: this.src,
                container: this.image,
                width: this.width,
                height: this.height,
            });
        }
        this.viewer.render();
        this.ready = true;
    };
    Image360.prototype.out = function () {
        this.viewer.destroy();
        this.ready = false;
    };
    Image360.prototype.render = function () {
        return h("div", null, h("div", { class: "image" }), h("div", { class: "overlay" }), !this.nolazyload && h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this), margin: '50%' }), !this.ready && h("skeleton-img", { width: this.width, height: this.height }));
    };
    Object.defineProperty(Image360.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image360, "style", {
        get: function () { return "stellar-360-image{display:block;position:relative}stellar-360-image canvas{display:block;width:100%!important;height:auto!important}stellar-360-image .overlay{opacity:.3;z-index:3;pointer-events:none;background:var(--gradient,none);mix-blend-mode:var(--blend,multiply);position:absolute;top:0;left:0;width:100%;height:100%}"; },
        enumerable: true,
        configurable: true
    });
    return Image360;
}());
export { Image360 as stellar_360_image };
