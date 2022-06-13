var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, e as createEvent, h, g as getElement } from './core-36452501.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-e9450bee.js';
import './_commonjsHelpers-ae1b5db5.js';
import { R as ResizeObserver } from './index-5afdd7fa.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
var Card = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Renders a shadow on the card
         */
        this.shadow = "medium";
        /**
         * Let's a card be flippable
         */
        this.flippable = false;
        /**
         * Renders a flipped card
         */
        this.flipped = false;
        /**
         * Sets the padding inside of the button. Can be small, medium, or large.
         */
        this.padding = "medium";
        /**
         * Sets the element to render the card as - an anchor tag, a button, or a div.
         */
        this.tag = "div";
        /**
         * Sets the href if the card is a link.
         */
        this.href = "#";
        /**
         * Sets the name if the card is a button.
         */
        this.name = "";
        /**
         * Sets the value if the card is a button.
         */
        this.value = "#";
        /**
         * Sets the href on the anchor tag if the button is a link.
         */
        this.flip_icon = "cog";
        this.dark = false;
        this.flip = createEvent(this, "flip", 7);
    }
    class_1.prototype.componentDidLoad = function () {
        this.updateFlippableCardHeight();
        this.addResizeObserver();
    };
    class_1.prototype.addResizeObserver = function () {
        this.ro = new ResizeObserver(function (entries) {
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var entry = entries_1[_i];
                var width = entry.contentRect.width;
                properties.set({ '--card-width': width + "px" }, entry.target);
            }
        });
        this.ro.observe(this.element);
    };
    class_1.prototype.updateFlippableCardHeight = function () {
        if (this.flippable) {
            var front = this.element.shadowRoot.querySelector('.front');
            var front_height = front.offsetHeight;
            properties.set({ '--min-height': front_height + "px" }, this.element);
            var back = this.element.shadowRoot.querySelector('.back');
            var back_height = back.scrollHeight;
            properties.set({ '--flipped-min-height': back_height + 50 + "px" }, this.element);
        }
    };
    class_1.prototype.click = function () {
        return __awaiter(this, void 0, void 0, function () {
            var target, modal;
            return __generator(this, function (_a) {
                if (this.for) {
                    target = this.for.split(":");
                    if (target[0] === "modal") {
                        modal = document.querySelector("stellar-modal[name=\"" + target[1] + "\"]");
                        modal.open();
                    }
                }
                return [2 /*return*/, true];
            });
        });
    };
    class_1.prototype.flip_card = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (e) {
                    e.stopPropagation();
                    e.preventDefault();
                }
                if (this.flippable) {
                    this.flipped = !this.flipped;
                    this.flip.emit();
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        var childProps = {
            href: this.href,
            url: this.href,
            name: this.name,
            value: this.value,
            type: this.type
        };
        // @ts-ignore
        return (h(this.tag, Object.assign({}, childProps, { class: "stencil-route-link" !== this.tag ? "wrap" : "", anchorClass: "stencil-route-link" === this.tag ? "wrap" : "", onClick: function (e) { _this.click(e); } }), this.flippable && [
            h("stellar-button", { tag: "button", ghost: true, class: "flip-button", onClick: function (e) { e.stopPropagation(); e.preventDefault(); _this.flip_card(e); } }, h("stellar-asset", { name: this.flipped ? "close" : this.flip_icon, class: "ma0" })),
            h("div", { class: "front" }, h("slot", null)),
            h("div", { class: "back" }, h("slot", { name: "back" }))
        ], !this.flippable && h("slot", null)));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-moz-appearance:none;appearance:none;-webkit-appearance:none!important;display:block;background:var(--background);border-radius:var(--border-radius);height:100%;--border:1px solid var(--gray1);--background:var(--white);--background-active:var(--theme-base0);--flipped-background:var(--white);--flipped-min-height:var(--flipped-min-height,20rem);--border-radius:var(--border-radius-sm);--padding:3rem;--min-height:10rem;--card-width:auto}:host([padding=none]){--padding:0rem}:host([padding=tiny]){--padding:0.5rem}:host([padding=small]){--padding:1rem}:host([padding=medium]){--padding:2rem}:host([padding=large]){--padding:4rem}:host .wrap{-moz-appearance:none;appearance:none;-webkit-appearance:none!important;display:block;border:var(--border);width:var(--card-width);height:100%;text-decoration:none;outline:none;display:grid;border-radius:var(--border-radius);background:var(--background);text-align:inherit;font-size:inherit;color:inherit}:host([flippable]) .wrap .back,:host([flippable]) .wrap .front,:host .wrap{padding:0;grid-template-columns:var(--padding) 1fr var(--padding);grid-template-rows:auto var(--padding) 1fr var(--padding) auto;grid-template-areas:\"header header header\" \". . .\" \". section .\" \". . .\" \"footer footer footer\";min-height:var(--min-height)}:host([flippable]) .wrap .back,:host([flippable]) .wrap .front{height:auto;display:grid}:host .wrap ::slotted(*),:host .wrap ::slotted(section){grid-area:section;max-width:calc(var(--card-width) - (var(--padding) * 2))}:host .wrap ::slotted(.flush),:host .wrap ::slotted(section.flush){grid-column:1/span 3;width:100%!important;max-width:100%!important;grid-row:1/span 4;padding:1rem}:host .wrap ::slotted(header){padding:1rem var(--padding);border-bottom:var(--border);border-radius:var(--border-radius) var(--border-radius) 0 0;grid-area:header!important;width:calc(var(--card-width) - 2px);max-width:calc(var(--card-width) - 2px)}:host .wrap ::slotted(header.subhead){background:var(--theme-base8)}:host .wrap ::slotted(header.sticky){position:-webkit-sticky;position:sticky;top:0;z-index:999999}:host .wrap ::slotted(footer){grid-area:footer!important;padding:1rem var(--padding);border-top:var(--border);width:calc(var(--card-width) - 2px);max-width:calc(var(--card-width) - 2px)}:host([has*=header][has*=footer]){grid-template-columns:1rem auto 1rem;grid-template-rows:1fr auto 1fr}:host stencil-route-link.wrap a{text-decoration:none}:host a.wrap:active,:host button.wrap:active,:host stencil-route-link.wrap:active{background:var(--background-active)}:host([shadow=light]){-webkit-box-shadow:0 .8rem 3rem -2rem var(--gray1);box-shadow:0 .8rem 3rem -2rem var(--gray1)}:host([shadow=heavy]){-webkit-box-shadow:0 .8rem 3rem -1rem var(--gray1);box-shadow:0 .8rem 3rem -1rem var(--gray1)}:host([rounded=true]){border-radius:1rem}:host([flippable]){-webkit-perspective:3000px;perspective:3000px;background:transparent}:host([flippable]) .wrap{display:block;background:var(--background);-webkit-transition:all .5s var(--ease,ease-in-out) 0s,background-color 0s ease 0s;transition:all .5s var(--ease,ease-in-out) 0s,background-color 0s ease 0s}:host([flippable]) .wrap .front{-webkit-transition:min-height .35s linear 0s,opacity .15s linear .3s!important;transition:min-height .35s linear 0s,opacity .15s linear .3s!important;z-index:1;opacity:1;height:100%}:host([flippable]) .wrap .back *,:host([flippable]) .wrap .front{-webkit-backface-visibility:hidden;backface-visibility:hidden}:host([flippable]) .wrap .back{top:0;left:0;position:absolute;height:100%;width:100%;z-index:0;-webkit-transform:rotateY(180deg);transform:rotateY(180deg);overflow-y:none;pointer-events:none;opacity:0}:host([flippable]) .wrap .back,:host([flippable][flipped]) .wrap .front{-webkit-transition:min-height .35s linear 0s,opacity .15s linear 0s!important;transition:min-height .35s linear 0s,opacity .15s linear 0s!important}:host([flippable][flipped]) .wrap .back{-webkit-transition:min-height .35s linear 0s,opacity .15s linear .3s!important;transition:min-height .35s linear 0s,opacity .15s linear .3s!important}:host([flippable]) .wrap .flip-button{position:absolute;right:.5rem;top:.5rem;z-index:1;-webkit-transform:translateZ(1px);transform:translateZ(1px)}:host([flippable][flipped]){--background:var(--flipped-background,#fff)!important;--min-height:var(--flipped-min-height)!important;z-index:1}:host([flippable][flipped]) .wrap{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}:host([flippable][flipped]) .wrap .flip-button{-webkit-transform:translateZ(-1px);transform:translateZ(-1px)}:host([flippable][flipped]) .wrap .back,:host([flippable][flipped]) .wrap .front{min-height:var(--min-height)}:host([flippable][flipped]) .wrap .front{pointer-events:none;opacity:0}:host([flippable][flipped]) .wrap .back{pointer-events:auto;overflow-y:initial;opacity:1}:host([dark]){--border:1px solid var(--gray8);--background:var(--gray9);--background-active:var(--gray8);--flipped-background:var(--gray9)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Tunnel.injectProps(Card, ['dark']);
export { Card as stellar_card };
