import { r as registerInstance, h, g as getElement } from './core-36452501.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-e9450bee.js';
var Breadcrumbs = /** @class */ (function () {
    function Breadcrumbs(hostRef) {
        registerInstance(this, hostRef);
        this.icon = 'analytics';
        this.icon_size = 0.85;
        this.tag = "link";
        this.home = "/";
        this.label = "Home";
        this.description = "An icon that shows the main page you're on";
        this.dark = false;
        this.color = "blue5";
    }
    Breadcrumbs.prototype.componentWillLoad = function () {
        this.updateBreadcrumbs();
    };
    Breadcrumbs.prototype.updateBreadcrumbs = function () {
        var last_breadcrumb = this.el.querySelector('stellar-breadcrumb:last-of-type');
        var breadcrumbs = this.el.querySelectorAll('stellar-breadcrumb');
        Array.from(breadcrumbs).forEach(function (breadcrumb) {
            breadcrumb.last = false;
        });
        if (last_breadcrumb) {
            last_breadcrumb.last = true;
        }
    };
    Breadcrumbs.prototype.render = function () {
        return (h("div", { id: "breadcumb_wrapper", class: "breadcrumbs" }, h("div", { class: "flush-left" }), h("stellar-breadcrumb", { first: true, tag: this.tag }, h("stellar-asset", { id: "icon", name: this.icon, src: this.icon_src, color: this.color }), h("stellar-label", { size: this.size }, this.label)), h("slot", null), h("div", { class: "flush" })));
    };
    Object.defineProperty(Breadcrumbs.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumbs, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--background:#fff;--clip-path:polygon(0 100%,0% 0%,calc(100% - 1em) 0%,100% 100%,calc(100% - 1em) 100%,0% 100%);--height:var(--ms5);--font-size:var(--ms0);display:inline-block;border-bottom:1px solid var(--background);background:var(--white);height:var(--height);overflow-x:auto;overflow-y:hidden;font-size:var(--font-size);-webkit-clip-path:var(--clip-path);clip-path:var(--clip-path)}:host([size=tiny]){--height:var(--ms3);--font-size:var(--ms-2)}:host([size=small]){--height:var(--ms4);--font-size:var(--ms-1)}:host([size=medium]){--height:var(--ms6);--font-size:var(--ms1)}:host([size=large]){--height:var(--ms7);--font-size:var(--ms2)}:host stellar-asset{font-size:2em;line-height:0}:host stellar-label{line-height:1;margin:0 0 0 .25rem;color:#fff}:host .breadcrumbs{display:-ms-inline-flexbox;display:inline-flex;position:relative;background:var(--background);width:auto;height:100%}:host .breadcrumbs .flush{right:0;margin-left:-2rem}:host .breadcrumbs .flush,:host .breadcrumbs .flush-left{display:block;-ms-flex:0 0 2rem;flex:0 0 2rem;background:transparent;width:2rem;height:inherit}:host .breadcrumbs .flush-left{left:0;margin-right:-2.5rem}:host([dark]){--background:linear-gradient(45deg,var(--theme-base7),var(--theme-base9))}"; },
        enumerable: true,
        configurable: true
    });
    return Breadcrumbs;
}());
Tunnel.injectProps(Breadcrumbs, ['dark']);
export { Breadcrumbs as stellar_breadcrumbs };
