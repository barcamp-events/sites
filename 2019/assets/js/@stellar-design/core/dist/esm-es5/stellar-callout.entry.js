import { r as registerInstance, h, g as getElement } from './core-8f5ef0c7.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-c32519f3.js';
var Callout = /** @class */ (function () {
    function Callout(hostRef) {
        registerInstance(this, hostRef);
        this.dark = false;
        this.type = "default";
        this.theme = "gray";
    }
    Callout.prototype.componentDidLoad = function () {
        this.element.setAttribute('aria-label', "An " + this.type + " message. " + this.element.textContent);
        this.element.setAttribute('aria-role', "status");
        this.element.setAttribute('tabindex', "0");
        this.handleType();
        this.handleTheme();
    };
    Callout.prototype.handleTheme = function () {
        var _this = this;
        this.element.classList.forEach(function (c) {
            if (c.startsWith('theme-')) {
                _this.element.classList.remove(c);
            }
        });
        this.element.classList.add("theme-" + this.theme);
    };
    Callout.prototype.handleType = function () {
        switch (this.type) {
            case "alert":
                this.theme = "yellow";
                break;
            case "error":
                this.theme = "red";
                break;
            case "info":
                this.theme = "cyan";
                break;
            case "success":
                this.theme = "green";
                break;
            case "default":
            case undefined:
                this.theme = "gray";
                break;
            default:
                this.theme = "gray";
                break;
        }
    };
    Callout.prototype.render = function () {
        return (h("div", { class: "callout-wrap" }, h("slot", null)));
    };
    Object.defineProperty(Callout.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Callout, "watchers", {
        get: function () {
            return {
                "theme": ["handleTheme"],
                "type": ["handleType"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Callout, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;padding:2rem;background-color:var(--theme-base4)}:host .callout-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.db) .callout-wrap{display:block}:host ::slotted(*){color:var(--gray9)}:host([dark]){background-color:var(--theme-base6)}"; },
        enumerable: true,
        configurable: true
    });
    return Callout;
}());
Tunnel.injectProps(Callout, ['dark']);
export { Callout as stellar_callout };
