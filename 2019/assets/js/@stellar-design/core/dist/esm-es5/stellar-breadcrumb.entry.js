import { r as registerInstance, h, g as getElement } from './core-8f5ef0c7.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-c32519f3.js';
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb(hostRef) {
        registerInstance(this, hostRef);
        this.href = "/";
        this.tag = "link";
        this.target = "_self";
        this.label = "Breadcrumb link";
        this.disabled = false;
        this.dark = false;
    }
    Breadcrumb.prototype.componentDidLoad = function () {
        this.label += " for " + this.element.textContent;
    };
    Breadcrumb.prototype.getTag = function () {
        if (this.tag === "link") {
            return "a";
        }
        if (this.tag === "route") {
            return "stencil-route-link";
        }
    };
    Breadcrumb.prototype.render = function () {
        var Tag = this.getTag();
        // @ts-ignore
        return h(Tag, { class: "button", href: this.href, url: this.href, target: this.target, "aria-label": this.label, title: this.label, "data-disabled": this.disabled }, h("slot", null));
    };
    Object.defineProperty(Breadcrumb.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumb, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--clip-path:polygon(1em 100%,0% 0%,calc(100% - 1em) 0%,100% 100%,calc(100% - 1em) 100%,0% 100%);--clip-path-first:polygon(0 100%,0% 0%,calc(100% - 1em) 0%,100% 100%,calc(100% - 1em) 100%,0% 100%);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-clip-path:var(--clip-path);clip-path:var(--clip-path);margin:0 0 0 -.35em;background:var(--white);text-align:center;text-decoration:none;color:var(--theme-base8)}:host(:focus-within),:host a:focus,:host a:hover{background:var(--theme-base0);color:var(--theme-base9)}:host([first]) a:focus,:host([first]) a:hover,:host([first]:focus-within){background:var(--theme-base9);color:#fff}:host ::slotted(*){--margin:0}:host a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:1em 1.75em;height:auto;text-decoration:none;white-space:nowrap;color:currentColor;font-size:var(--font-size);font-weight:600}:host a stellar-asset{margin-right:.25em}:host(:focus),:host(:hover){color:var(--white);background:var(--theme-base5)}:host([first]){background:var(--theme-base7);color:var(--white);margin:0 -.25rem 0 -.15em;position:-webkit-sticky;position:sticky;left:-.5rem;z-index:2;-webkit-clip-path:var(--clip-path-first);clip-path:var(--clip-path-first)}:host([first]) a{padding-left:1.5em;padding-right:1.75em}:host([first]) a stellar-asset{margin:0}:host([last]){color:var(--gray9);background:var(--white)}:host([last]) a:focus,:host([last]) a:hover,:host([last]:focus),:host([last]:hover){background:#fff;color:var(--gray9)}:host([dark]){background:var(--black);color:var(--theme-base0)}:host([dark]) a:focus,:host([dark]) a:hover,:host([dark]:focus),:host([dark]:focus-within),:host([dark]:hover){color:var(--white);background:var(--theme-base7)}:host([dark][last]){color:#fff;background:var(--black)}:host([dark][first]){background:var(--theme-base9)}:host([dark][last]) a:focus,:host([dark][last]) a:hover,:host([dark][last]:focus),:host([dark][last]:hover){background:var(--black);color:#fff}"; },
        enumerable: true,
        configurable: true
    });
    return Breadcrumb;
}());
Tunnel.injectProps(Breadcrumb, ['dark']);
export { Breadcrumb as stellar_breadcrumb };
