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
import { r as registerInstance, h, g as getElement, e as createEvent } from './core-36452501.js';
import { b as blurringEase, d as delay } from './index-9d3b27e3.js';
import './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-e9450bee.js';
var Content = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.open = false;
        this.ease = blurringEase({
            end: 6,
            start: -1,
            duration: 200,
            tick: function (args) {
                _this.blur = args.value;
            },
            complete: function () {
                _this.blur = 0;
                _this.ease.stop();
            },
        });
        this.blur = 0;
    }
    class_1.prototype.handleActive = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var contents;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.parent = event.detail.parent;
                        return [4 /*yield*/, this.parent.contents()];
                    case 1:
                        contents = _a.sent();
                        if (event.detail.name !== this.element.id) {
                            contents.forEach(function (element) {
                                element.open = element.id === event.detail.name;
                                if (element.open) {
                                    _this.ease.start();
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        return (h("div", { class: "wrap", role: "tabpanel", "aria-hidden": !this.open ? "true" : "false" }, h("slot", null)));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:none;-webkit-animation-name:fadeInUp;animation-name:fadeInUp;-webkit-animation-timing-function:var(--ease);animation-timing-function:var(--ease);-webkit-animation-duration:.35s;animation-duration:.35s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0);opacity:0}:host([open]){display:block;opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}\@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var Tab = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.open = false;
        this.dark = false;
        this.notifications = false;
        this.tag = "button";
        /**
        * Sets the href on the anchor tag if the button is a link.
        */
        this.href = '#';
        /**
         * Sets the target on the anchor tag if the button is a link.
         */
        this.target = '_self';
        this.vertical = false;
        this.contentChange = createEvent(this, "contentChange", 7);
    }
    class_2.prototype.componentWillLoad = function () {
        this.parent = this.element.closest('stellar-tabs');
    };
    class_2.prototype.handleResize = function () {
        this.handleIndicatorPosition();
    };
    class_2.prototype.componentDidLoad = function () {
        this.handleIndicatorPosition();
    };
    class_2.prototype.handleClick = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var tabs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parent.tabs()];
                    case 1:
                        tabs = _a.sent();
                        tabs.forEach(function (element) {
                            element.open = false;
                        });
                        this.open = true;
                        this.handleIndicatorPosition();
                        if (!!this.disabled) return [3 /*break*/, 4];
                        e.preventDefault();
                        if (!(this.tag === "button")) return [3 /*break*/, 2];
                        this.contentChange.emit({
                            parent: this.parent,
                            name: this.name.replace(/[#]/g, "")
                        });
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.tag === "link")) return [3 /*break*/, 4];
                        return [4 /*yield*/, delay(350)];
                    case 3:
                        _a.sent();
                        window.location.href = this.href;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.handleIndicatorPosition = function () {
        if (this.open && this.parent && this.parent.nodeName === "STELLAR-TABS") {
            // this.parent.blurring()
            if (this.parent.vertical) {
                properties.set({
                    "--tab-top": this.element.offsetTop + "px",
                    "--tab-height": this.element.offsetHeight + "px"
                }, this.parent);
            }
            else {
                properties.set({
                    "--tab-left": this.element.offsetLeft + "px",
                    "--tab-width": this.element.offsetWidth + "px"
                }, this.parent);
            }
        }
    };
    class_2.prototype.renderNotifications = function () {
        return this.notifications && h("stellar-tag", null, this.notifications);
    };
    class_2.prototype.renderTitle = function () {
        return h("span", { class: "title" }, h("slot", null));
    };
    class_2.prototype.renderButton = function () {
        var _this = this;
        return (h("button", { role: "tab", type: "button", disabled: this.disabled, "aria-selected": this.open ? "true" : "false", "aria-setsize": this.tabCount, "aria-posinset": this.order, tabindex: "0", class: "tab-button", onClick: function (e) { return _this.handleClick(e); } }, this.renderNotifications(), this.renderTitle()));
    };
    class_2.prototype.renderLink = function () {
        var _this = this;
        return (h("a", { role: "tab", href: this.href, target: this.target, class: "tab-button", "data-disabled": this.disabled, onClick: function (e) { _this.handleClick(e); } }, this.renderNotifications(), this.renderTitle()));
    };
    class_2.prototype.renderAppLink = function () {
        var _this = this;
        return (h("stencil-route-link", { role: "tab", url: this.href, anchorClass: "tab-button", "data-disabled": this.disabled, onClick: function (e) { _this.handleClick(e); } }, this.renderNotifications(), this.renderTitle()));
    };
    class_2.prototype.render = function () {
        return h("div", { class: "tab-wrap" }, this.tag === "button" && this.renderButton(), this.tag === "link" && this.renderLink(), this.tag === "route-link" && this.renderAppLink());
    };
    Object.defineProperty(class_2.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color:var(--theme-base7);--focus-color:var(--theme-base8);--active-color:var(--theme-base9);--font-size:1rem;--font-weight:600;--height:100%;--button-padding:0 0.25em;display:block;z-index:2;font-family:inherit}:host,:host .tab-wrap{position:relative;font-size:var(--font-size);height:var(--height)}:host .tab-wrap{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:-1px .25em;padding:var(--padding);color:var(--color)}:host .tab-wrap stellar-tag{position:absolute;top:1px;right:-10px}:host .tab-wrap .tab-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;font-size:var(--font-size);position:relative;-ms-flex-pack:center;justify-content:center;-webkit-transition:color .2s;transition:color .2s;outline:none;padding:var(--button-padding);text-decoration:none;line-height:var(--ms1);color:var(--color);width:100%;height:100%;cursor:pointer;font-family:inherit}:host .tab-wrap .tab-button,:host .tab-wrap stencil-route-link{display:-ms-inline-flexbox;display:inline-flex}:host .tab-wrap .tab-button:focus,:host .tab-wrap .tab-button:hover{color:var(--focus-color)}:host([open]) .tab-wrap .tab-button{color:var(--active-color)}:host .tab-wrap .tab-button span{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;line-height:1;font-size:var(--font-size);font-weight:var(--font-weight)}:host([vertical]) .tab-wrap .tab-button span{width:100%;height:100%;text-align:left;-ms-flex-pack:start;justify-content:flex-start}:host .tab-wrap .tab-button span ::slotted(stellar-asset){line-height:0;margin-right:.25em}:host .tab-wrap .tab-button span ::slotted(stellar-avatar){line-height:0;margin:-1.175em .5em -1.075em -.5em}:host([disabled=true]) .tab-wrap{cursor:not-allowed;color:var(--theme-color-disabled)}:host([disabled=true]) .tab-wrap *{cursor:not-allowed}:host([disabled=true]) .tab-wrap .notifications{background:var(--theme-color-disabled)}:host([dark]) .tab-wrap .tab-button{color:var(--theme-base2)}:host([dark]) .tab-wrap .tab-button:focus,:host([dark]) .tab-wrap .tab-button:hover{color:var(--theme-base0)}:host([open][dark]) .tab-wrap .tab-button{color:var(--white)}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
Tunnel.injectProps(Tab, ['dark']);
var Tabs = /** @class */ (function () {
    function class_3(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.noanimation = false;
        this.block = false;
        this.vertical = false;
        this.dark = false;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 125,
            tick: function (args) {
                _this.blur = args.value;
            },
            complete: function () {
                _this.blur = 0;
                _this.ease.stop();
            },
        });
        this.blur = 0;
    }
    class_3.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.tabsList || this.tabsList.length === 0) {
                    this.tabsList = Array.from(this.element.querySelectorAll('stellar-tab'));
                }
                return [2 /*return*/, this.tabsList];
            });
        });
    };
    class_3.prototype.contents = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.contentsList = Array.from(document.querySelectorAll("stellar-content[for='" + this.name + "']"));
                return [2 /*return*/, this.contentsList];
            });
        });
    };
    class_3.prototype.blurring = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.ease.start();
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tabs()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.contents()];
                    case 2:
                        _a.sent();
                        this.tabsList.forEach(function (tab) {
                            if (_this.dark) {
                                tab.dark = _this.dark;
                            }
                            if (_this.vertical) {
                                tab.vertical = _this.vertical;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.handleDark = function () {
        var _this = this;
        this.tabsList.forEach(function (tab) {
            tab.dark = _this.dark;
        });
    };
    class_3.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tabs, tabCount;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.noanimation) {
                            setTimeout(function () {
                                // @ts-ignore
                                window.dispatchEvent(new Event('resize'));
                                _this.element.shadowRoot.querySelector('.indicator').classList.add('ready');
                            }, 100);
                        }
                        return [4 /*yield*/, this.tabs()];
                    case 1:
                        tabs = _a.sent();
                        tabCount = tabs.length;
                        tabs.forEach(function (tab, index) {
                            tab.order = index + 1;
                            tab.tabCount = tabCount;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.render = function () {
        return (h("div", { class: "tab-wrap" }, h("div", { class: "tab-list", role: "tablist" }, h("slot", null), h("stellar-blur", { horizontal: !this.vertical ? this.blur : 0, vertical: this.vertical ? this.blur : 0 }, h("div", { class: "indicator" })))));
    };
    Object.defineProperty(class_3.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "watchers", {
        get: function () {
            return {
                "dark": ["handleDark"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "style", {
        get: function () { return ":host{--font-size:var(--ms0);--padding:calc(var(--ms-1) + 0.4em) var(--ms-1);--indicator-color:var(--theme-base5);--overflow:auto hidden;--justify-content:space-evenly;font-size:var(--font-size);display:block;position:relative;margin:0;width:auto;overflow:var(--overflow);-webkit-overflow-scrolling:touch;-webkit-scroll-snap-type:mandatory;-ms-scroll-snap-type:mandatory;scroll-snap-type:mandatory;-webkit-scroll-snap-points-x:repeat(10%);-ms-scroll-snap-points-x:repeat(10%);scroll-snap-points-x:repeat(10%);font-family:var(--font-primary);border-bottom:1px solid var(--theme-base1);background:var(--white)}:host([size=tiny]){--font-size:var(--ms-2);--padding:calc(var(--ms-3) + 0.45em) var(--ms-3)}:host([size=small]){--font-size:var(--ms-1);--padding:calc(var(--ms-2) + 0.5em) var(--ms-2)}:host([size=medium]){--font-size:var(--ms1);--padding:calc(var(--ms0) + 0.25em) var(--ms0)}:host([size=large]){--font-size:var(--ms2);--padding:calc(var(--ms1) + 0.1em) var(--ms1)}:host stellar-blur{position:absolute;width:100%;height:100%;left:0;bottom:0}:host .indicator{display:block;position:absolute;bottom:-.1em;left:var(--tab-left,0);background:var(--indicator-color);width:var(--tab-width,0);height:.4em}:host([flip-indicator]) .indicator{top:-.1em;bottom:auto}:host .indicator.ready{-webkit-transition:all .35s var(--ease);transition:all .35s var(--ease)}:host .tab-wrap{max-width:1200px;margin:auto;height:100%}:host .tab-list{display:-ms-inline-flexbox;display:inline-flex;margin:0;padding:0;list-style:none;text-align:center;white-space:nowrap;height:100%;width:100%}:host .tab-wrap[height=flex],:host .tab-wrap[height=flex] .tab-list,:host .tab-wrap[height=flex] ::slotted(stellar-tab){height:100%}:host(:not([vertical])) ::slotted(stellar-tab+stellar-tab){margin-left:1em}:host([block]){overflow:var(--overflow);border:1px solid var(--theme-base0);width:100%}:host([block]) .tab-wrap{overflow:var(--overflow);height:100%}:host([block]) .tab-list,:host([block]) .tab-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:var(--justify-content);justify-content:var(--justify-content)}:host([block]) .tab-list{width:100%;margin:0 3px}:host([block]) ::slotted(stellar-tab[open=true]){color:var(--theme-base5)!important}:host([block-indicator]) .indicator{height:calc(100% - 6px);background:var(--theme-base1);top:3px;bottom:3px;-webkit-transition:all .35s var(--ease);transition:all .35s var(--ease)}:host([vertical]){height:auto;border-right:1px solid var(--theme-base1);border-bottom:0}:host([vertical]) .indicator{width:.4em;top:var(--tab-top);height:var(--tab-height)}:host([vertical]) .tab-list{-ms-flex-direction:column;flex-direction:column}:host([vertical]) .tab-list ::slotted(stellar-tab){height:auto}:host([height=auto]){height:100%}:host([dark]){border-color:var(--theme-base9);background:var(--black)}:host([dark]) .indicator{background:var(--theme-base5)}:host([block][dark]){border:1px solid var(--theme-base9)}"; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
Tunnel.injectProps(Tabs, ['dark']);
export { Content as stellar_content, Tab as stellar_tab, Tabs as stellar_tabs };
