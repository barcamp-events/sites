import { r as registerInstance, h, g as getElement } from './core-8f5ef0c7.js';
import './index-9d3b27e3.js';
import './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
var Follow = /** @class */ (function () {
    function Follow(hostRef) {
        registerInstance(this, hostRef);
        this.width = 400;
        this.height = 400;
        this.frame = 1;
    }
    Follow.prototype.componentWillLoad = function () {
        this.update();
    };
    Follow.prototype.update = function () {
        properties.set({
            '--width': this.width + "px",
            '--height': this.height + "px",
            '--aspect-ratio': this.width / this.height * 100 + "%",
            '--position': "0 " + this.height * -(this.frame - 1) + "px"
        }, this.element);
    };
    Follow.prototype.render = function () {
        return h("div", { class: "background", style: { "background-image": "url(" + this.src + ")" } });
    };
    Object.defineProperty(Follow.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Follow, "watchers", {
        get: function () {
            return {
                "frame": ["update"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Follow, "style", {
        get: function () { return ":host{--position:var(--position,0);display:block;width:100%;height:100%;max-width:var(--width);max-height:var(--height)}:host .background{background-position:var(--position);background-size:cover;width:var(--width);height:var(--height);display:block}"; },
        enumerable: true,
        configurable: true
    });
    return Follow;
}());
export { Follow as stellar_keyframes };
