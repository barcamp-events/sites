import { r as registerInstance, h, g as getElement } from './core-8f5ef0c7.js';
var ScrollZSection = /** @class */ (function () {
    function ScrollZSection(hostRef) {
        registerInstance(this, hostRef);
    }
    ScrollZSection.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(ScrollZSection.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return ScrollZSection;
}());
export { ScrollZSection as stellar_scroll_z_section };
