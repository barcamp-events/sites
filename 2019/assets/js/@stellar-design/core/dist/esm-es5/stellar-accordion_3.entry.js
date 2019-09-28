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
import { r as registerInstance, h, g as getElement, H as Host } from './core-36452501.js';
import { b as blurringEase } from './index-9d3b27e3.js';
import './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-e9450bee.js';
var Accordion = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.open = false;
        this.tight = false;
        this.name = "accordion";
        this.label = "More Details";
        this.dark = false;
        this.blur = 0;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 250,
            tick: function (args) {
                _this.blur = args.value;
            },
            complete: function () {
                _this.blur = 0;
                _this.ease.stop();
            },
        });
        this.els = [];
    }
    class_1.prototype.componentWillLoad = function () {
        var _this = this;
        var callback = function (mutationsList) {
            for (var _i = 0, mutationsList_1 = mutationsList; _i < mutationsList_1.length; _i++) {
                var mutation = mutationsList_1[_i];
                if (mutation.type == 'childList') {
                    _this.refresh();
                }
            }
        };
        this.observer = new MutationObserver(callback);
    };
    class_1.prototype.componentDidLoad = function () {
        this.expander = this.element.shadowRoot.querySelector(".expander");
        this.refresh();
        this.attachObserver();
        this.els = Array.from(this.element.querySelectorAll("*:not([slot='label'])"));
        this.updateTabIndex();
    };
    class_1.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                properties.set({
                    "--accordion-height": this.expander.scrollHeight + "px"
                }, this.element);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.attachObserver = function () {
        // Start observing the target node for configured mutations
        this.observer.observe(this.element, { childList: true, subtree: true });
    };
    class_1.prototype.componentWillUnload = function () {
        this.observer.disconnect();
    };
    class_1.prototype.currentClasses = function () {
        return "expander " + this.openClass();
    };
    class_1.prototype.openClass = function () {
        return (this.open) ? "open" : "";
    };
    class_1.prototype.updateTabIndex = function () {
        var _this = this;
        this.els.forEach(function (element) {
            element.tabIndex = !_this.open ? -1 : 0;
        });
    };
    class_1.prototype.handleClick = function () {
        this.open = !this.open;
        this.ease.start();
        this.updateTabIndex();
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "wrap" }, h("div", { class: "button-wrap", title: "Selecting this opens the content of this accordion", onClick: function () { return _this.handleClick(); } }, h("slot", { name: "label" }, h("stellar-button", { id: "button", tag: "button", ghost: true, label: this.label }, this.label)), h("stellar-asset", { class: "chevron", name: "arrow-down" })), h("stellar-blur", { vertical: this.blur }, h("div", { class: this.currentClasses(), tabIndex: !this.open ? -1 : 0 }, h("slot", null)))));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;position:relative;--accordion-height:200vh;--padding-underneath:6rem}:host,:host .expander{width:100%;overflow:hidden}:host .expander{-webkit-transition:all .35s ease-out .1s,opacity .25s ease-out 0s;transition:all .35s ease-out .1s,opacity .25s ease-out 0s;opacity:0;padding:0;max-height:50vh;height:0;-webkit-transform:translateY(-60px);transform:translateY(-60px)}:host .expander.open{-webkit-transition:all .35s ease-in-out 0s,opacity .175s ease-in-out .175s,overflow 0s ease-in-out .2s;transition:all .35s ease-in-out 0s,opacity .175s ease-in-out .175s,overflow 0s ease-in-out .2s;opacity:1;height:calc(var(--accordion-height) + var(--padding-underneath));overflow:auto;-webkit-transform:translateY(0);transform:translateY(0)}:host .expander stellar-item{padding-left:1rem}:host .expander stellar-item:last-of-type{margin-bottom:.5rem}:host([tight]){--padding-underneath:1rem}:host([tight]) .expander ::slotted(stellar-item){padding:0 1.5rem;padding:0 .75rem}:host .wrap{-webkit-transform:translateZ(0);transform:translateZ(0)}:host .wrap .button-wrap{position:relative;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;z-index:9;min-height:3rem;padding:1rem 0;color:var(--theme-base9)}:host .wrap .button-wrap stellar-item button.button{padding:0}:host .chevron{position:absolute;right:1rem;color:var(--gray4);margin-left:auto;-webkit-transition:all .35s ease-in-out 0s;transition:all .35s ease-in-out 0s}:host([open]) .chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host .wrap .button-wrap stellar-button{--color:var(--gray9)}:host ::slotted(stellar-item[slot=label]){padding-right:2rem}:host([dark]) ::slotted(stellar-item),:host([dark]) ::slotted(stellar-item[slot=label]){color:var(--theme-base5)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Tunnel.injectProps(Accordion, ['dark']);
var Message = /** @class */ (function () {
    function Message(hostRef) {
        registerInstance(this, hostRef);
        this.closable = true;
        this.remember = true;
        this.name = "stellar";
        this.shown = true;
        this.striped = false;
        this.dark = false;
        this.theme = "gray";
    }
    Message.prototype.componentWillLoad = function () {
        if (this.remember) {
            var string = this.element.innerHTML;
            this.name = this.name + "_" + btoa(unescape(encodeURIComponent(string)));
            if (localStorage.getItem(this.name)) {
                this.shown = !(localStorage.getItem(this.name) === "hidden");
            }
        }
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
        }
    };
    Message.prototype.handleClose = function () {
        this.shown = false;
        if (this.remember) {
            localStorage.setItem(this.name, "hidden");
        }
    };
    Message.prototype.render = function () {
        var _this = this;
        return h(Host, { class: "theme-" + this.theme + " " + (this.shown ? "db" : "dn") }, h("div", { class: "wrap" }, h("slot", null), this.closable && h("button", { "aria-label": "Close", onClick: function () { _this.handleClose(); } }, h("stellar-asset", { name: "close" }))));
    };
    Object.defineProperty(Message.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message, "style", {
        get: function () { return ":host{display:block;position:relative;padding:0 20px;-webkit-transition:all .35s var(--ease) 0s;transition:all .35s var(--ease) 0s;width:100%;height:60px;overflow:hidden;background-color:var(--theme-base4,var(--gray5))}:host([striped]):after{content:\"\";position:absolute;width:120%;top:0;left:-10%;right:0;bottom:0;z-index:0;background:repeating-linear-gradient(45deg,var(--theme-base0),var(--theme-base0) 2rem,var(--theme-base1) 0,var(--theme-base1) 4rem);mix-blend-mode:multiply;-webkit-animation:moveStripes 10s linear infinite both;animation:moveStripes 10s linear infinite both}:host([visible=false]){height:0;overflow:hidden}:host([visible=false]) *{opacity:0}:host .wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;position:relative;width:100%;max-width:1200px;height:100%;z-index:1;overflow:auto}:host([size=full]) .wrap{min-width:30rem;max-width:100%}:host a{color:#fff}:host a:active,:host a:hover{color:var(--theme-base1)}:host p{color:var(--theme-base9)}:host .wrap stellar-asset{font-size:2rem;color:var(--theme-base9)}:host button{margin-left:auto;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#fff;cursor:pointer;width:3rem;height:3rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;outline:0}:host button,:host button[icon] stellar-asset{margin-right:0;background:transparent;border:none}:host button[icon] stellar-asset{margin-left:1rem;color:#000}:host([dark]){background-color:var(--theme-base7,var(--gray7))}:host([dark][striped]):after{background:repeating-linear-gradient(45deg,var(--theme-base7),var(--theme-base7) 2rem,var(--theme-base8) 0,var(--theme-base8) 4rem)}:host([dark]) .wrap stellar-asset{color:var(--theme-base1)}"; },
        enumerable: true,
        configurable: true
    });
    return Message;
}());
Tunnel.injectProps(Message, ['dark']);
var Starscape = /** @class */ (function () {
    function Starscape(hostRef) {
        registerInstance(this, hostRef);
    }
    Starscape.prototype.render = function () {
        return (h("stellar-parallax", { horizontal: true }, h("stellar-parallax-section", { layer: 1, speed: 5 }, h("div", { class: "stars" })), h("stellar-parallax-section", { layer: 2, speed: -10 }, h("div", { class: "stars" })), h("stellar-parallax-section", { layer: 3, speed: -4 }, h("div", { class: "stars" }))));
    };
    Object.defineProperty(Starscape.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Starscape, "style", {
        get: function () { return "stellar-starscape{background:linear-gradient(50deg,var(--theme-base7),var(--theme-complement7),var(--theme-base7),var(--theme-complement7));background-size:400% 400%;position:absolute;top:0;left:0;bottom:0;right:0;z-index:-1;overflow:hidden}stellar-starscape .stars{position:absolute;height:200vh;width:200vw;top:-10vh;left:0;bottom:0;right:0;z-index:1;opacity:.75;background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAgMAAADQNkYNAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMACzOmUnwDAAABMklEQVR4Ae1ZB05FMQyrLIUNvZpZ97/COwLaCBN2Kur+Wqt7OqNNO5oiNC9laPU4KrtMgKjvsjD4bvvY17EqpaXwSOoxu0jyNxwXFPUOlZdKdJ1lRtTfzATgT9iLZgw3y9u/PwLKthMDb5+aT5UzLIQ2kgtioxwiSheaV4eNVDLhmxQN30uEpx7rFV02DMAf+WTYxtJ8N/sJyUJXIkcf5F08fyGV27Vllkoaw13V1E8bkuVbnsNSzzGVWEzp6RcchDmprRCf7xpDzp3CHZyY4V3fF6cwIaRIOOZt0+OV0CgjVh/2p8RvBu+wZNhwIzIuhLIOBq4RQ3mTUxzzuv//6KPEJ+oAzlaU4l0Y7OS7N4MJV18/lL9Xv39hKccetI2KqqbWKnr+Kri+Z66+vVvMqvRfAGkGHx/jJEqXAAAAAElFTkSuQmCC\") 50% 50%/100px 100px}stellar-starscape stellar-parallax-section:first-of-type .stars{opacity:.25;left:17px}stellar-starscape stellar-parallax-section:nth-of-type(2) .stars{opacity:.45;left:24px}"; },
        enumerable: true,
        configurable: true
    });
    return Starscape;
}());
export { Accordion as stellar_accordion, Message as stellar_message, Starscape as stellar_starscape };
