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
import { r as registerInstance, g as getElement, h, H as Host, c as getAssetPath, d as getMode, e as createEvent } from './core-36452501.js';
import { f as focusWithin, d as delay } from './index-9d3b27e3.js';
import './_commonjsHelpers-ae1b5db5.js';
import './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-e9450bee.js';
import { A as ActiveRouter } from './active-router-7be22857.js';
import './match-path-fd602b4d.js';
var ContextConsumer = /** @class */ (function () {
    function ContextConsumer(hostRef) {
        registerInstance(this, hostRef);
        this.context = {};
        this.renderer = function () { return null; };
    }
    ContextConsumer.prototype.connectedCallback = function () {
        if (this.subscribe != null) {
            this.unsubscribe = this.subscribe(this.el, 'context');
        }
    };
    ContextConsumer.prototype.disconnectedCallback = function () {
        if (this.unsubscribe != null) {
            this.unsubscribe();
        }
    };
    ContextConsumer.prototype.render = function () {
        return this.renderer(Object.assign({}, this.context));
    };
    Object.defineProperty(ContextConsumer.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return ContextConsumer;
}());
var Asset = /** @class */ (function () {
    function Asset(hostRef) {
        registerInstance(this, hostRef);
        this.name = "person";
        this.language = "ios-";
        this.block = false;
    }
    Asset.prototype.componentWillLoad = function () {
        this.ariaLabel = this.name
            .replace('ios-', '')
            .replace('md-', '')
            .replace(/\-/g, ' ');
    };
    Asset.prototype.render = function () {
        return (h("div", { class: "icon-wrap" }, h("stellar-icon", { src: this.src, name: this.name, ariaLabel: this.ariaLabel, "aria-label": this.ariaLabel })));
    };
    Object.defineProperty(Asset, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;-webkit-transform-origin:.5em .5em;transform-origin:.5em .5em}:host .icon-wrap{display:-ms-flexbox;display:flex}"; },
        enumerable: true,
        configurable: true
    });
    return Asset;
}());
focusWithin(document);
var Dropdown = /** @class */ (function () {
    function Dropdown(hostRef) {
        registerInstance(this, hostRef);
        this.position = "center";
        this.icon = false;
        this.iconName = "arrow-down";
        this.label = "Dropdown";
        this.open = false;
        this.dark = false;
        this.footer = false;
    }
    Dropdown.prototype.componentWillLoad = function () {
        this.footer = this.element.querySelectorAll('[slot="footer"]').length !== 0;
    };
    Dropdown.prototype.componentDidLoad = function () {
        focusWithin(document);
    };
    Dropdown.prototype.onToggle = function () {
        this.open = !this.open;
    };
    Dropdown.prototype.render = function () {
        return h(Host, { "aria-label": this.label, class: "dropdown", title: this.label }, h("div", { class: "toggle" }, h("slot", { name: "handle" }), this.icon && h("stellar-asset", { name: this.iconName, class: "caret" })), h("div", { class: "clipper" }, h("div", { class: "list-wrap" }, h("ul", { class: "list" }, h("slot", null), this.footer && h("div", { class: "footer" }, h("slot", { name: "footer" }))))));
    };
    Object.defineProperty(Dropdown.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dropdown, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--dropdown-color:var(--theme-base7);--dropdown-hover-color:var(--theme-base8);--dropdown-width:20rem;--border-radius:0.3rem;--clip-from:polygon(0 0,100% 0,100% 0,0 0);--clip-to:polygon(0 0,100% 0,100% 100%,0 100%);--filter:drop-shadow(0px 2px 2px var(--theme-base1));--icon-rotation:180deg;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;outline:0;height:100%;color:var(--dropdown-color);-webkit-transition:z-index 0ms linear .2s;transition:z-index 0ms linear .2s}:host([dark]){--filter:drop-shadow(0px 2px 2px var(--theme-base9))}:host .clipper{-webkit-filter:var(--filter);filter:var(--filter);position:absolute;top:calc(100% + .5rem);right:50%;left:calc(50% - (var(--dropdown-width) /2));height:0}:host .clipper,:host .list-wrap{width:var(--dropdown-width);-webkit-transition:all .25s var(--ease) .25s;transition:all .25s var(--ease) .25s}:host .list-wrap{z-index:10;display:initial;-webkit-clip-path:var(--clip-from);clip-path:var(--clip-from);border-radius:var(--border-radius);overflow:hidden;display:block}:host .caret{color:var(--dropdown-color);margin-left:1.5rem;-webkit-transition:all .21s var(--ease);transition:all .21s var(--ease);font-size:2rem}:host(:focus-within) .caret,:host(:hover) .caret{-webkit-transform:scale(1) rotate(var(--icon-rotation));transform:scale(1) rotate(var(--icon-rotation));color:var(--dropdown-hover-color)}:host(:active),:host(:focus-within),:host(:hover){z-index:6;color:var(--dropdown-hover-color)}:host(:active) .clipper,:host(:focus-within) .clipper,:host(:hover) .clipper{height:auto}:host(:active) .toggle:after,:host(:focus-within) .toggle:after,:host(:hover) .toggle:after{margin-top:-2px;background:var(--dropdown-hover-color);height:2px}:host(.toggle:active),:host(.toggle:hover){z-index:6;color:var(--dropdown-hover-color)}:host(.toggle:active:after),:host(.toggle:hover:after){margin-top:-2px;background:var(--dropdown-hover-color);height:2px}:host(:active) .list-wrap,:host(:focus-within) .list-wrap,:host(:hover) .list-wrap{-webkit-clip-path:var(--clip-to);clip-path:var(--clip-to);height:100%}:host .dropdown-placeholder{margin:0;width:3rem;height:3rem}:host .toggle{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;min-height:3rem}:host stellar-asset[slot=handle]{color:var(--dropdown-color)}:host(:focus-within) stellar-asset[slot=handle],:host([focus-within]) stellar-asset[slot=handle],:host stellar-asset[slot=handle]:active,:host stellar-asset[slot=handle]:hover{color:var(--dropdown-color)}:host .toggle span{color:inherit}:host .toggle .hidden{display:inline-block!important}:host .list{margin-top:0;margin-left:0;margin-bottom:0;-webkit-transition:all .11s var(--ease) .25s;transition:all .11s var(--ease) .25s;-webkit-box-shadow:0 0 2px 0 hsla(0,0%,50.2%,.35);box-shadow:0 0 2px 0 hsla(0,0%,50.2%,.35);background:#fff;list-style-type:none;padding:0}:host .list ::slotted(stellar-item){--item-size:3.25rem}:host .list .loader{cursor:wait;display:none}:host .list .separator{position:relative}:host .list .separator:after{content:\"\";display:block;position:absolute;top:calc(50% - .5px);background:var(--gray5);width:100%;height:.1rem}:host .icon{margin-right:1em}:host .icon,:host .thumb{-ms-flex:0 0 2.25em;flex:0 0 2.25em;-ms-flex-order:-1;order:-1;-webkit-transition:all .05s var(--ease) 0s;transition:all .05s var(--ease) 0s}:host .thumb{margin-right:1rem;width:2.25em;height:2.25em}:host .notification{display:inline-block;margin:0 0 0 .8rem;border-radius:50%;background:var(--yellow5);width:.8rem;height:.8rem}:host ::slotted(stellar-item){border:0;overflow:hidden;color:var(--gray9);font-size:1rem}:host .footer{border-top:1px solid var(--theme-base1);margin-top:.5rem}:host .footer ::slotted(*){background:transparent!important}:host .footer:empty{display:none}:host([position=left]){--clip-from:polygon(0% 0,0% 50%,0% 50%,0 50%)}:host([position=left]) .clipper{left:0;right:auto}:host([position=left][icon]) .clipper{left:var(--dropdown-offset,-3rem)}:host([position=left]) .list:after,:host([position=left]) .list:before{right:0;left:4rem}:host([position=right]){--clip-from:polygon(0 0,100% 0,100% 0,0 0);--clip-from:polygon(0 0,100% 0%,100% 0%,50% 0)}:host([position=right]) .clipper{left:auto;right:0}:host([position=right][icon]) .clipper{right:var(--dropdown-offset,3rem)}:host([position=right]) .list:after,:host([position=right]) .list:before{right:3rem;left:auto}:host([dark]) .list{background:var(--gray9)}:host([dark]) ::slotted(stellar-item){color:var(--gray0)}:host([dark]) .footer{border-top-color:var(--black)}"; },
        enumerable: true,
        configurable: true
    });
    return Dropdown;
}());
Tunnel.injectProps(Dropdown, ['dark']);
var CACHED_MAP;
var getIconMap = function () {
    if (!CACHED_MAP) {
        var win = window;
        win.Ionicons = win.Ionicons || {};
        CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
    }
    return CACHED_MAP;
};
var getUrl = function (i) {
    var url = getSrc(i.src);
    if (url) {
        return url;
    }
    url = getName(i.name, i.icon, i.mode, i.ios, i.md);
    if (url) {
        return getNamedUrl(url);
    }
    if (i.icon) {
        url = getSrc(i.icon);
        if (url) {
            return url;
        }
        url = getSrc(i.icon[i.mode]);
        if (url) {
            return url;
        }
    }
    return null;
};
var getNamedUrl = function (name) {
    var url = getIconMap().get(name);
    if (url) {
        return url;
    }
    return getAssetPath("svg/" + name + ".svg");
};
var getName = function (name, icon, mode, ios, md) {
    // default to "md" if somehow the mode wasn't set
    mode = (mode && mode.toLowerCase()) === 'ios' ? 'ios' : 'md';
    // if an icon was passed in using the ios or md attributes
    // set the iconName to whatever was passed in
    if (ios && mode === 'ios') {
        name = ios.toLowerCase();
    }
    else if (md && mode === 'md') {
        name = md.toLowerCase();
    }
    else {
        if (!name && icon && !isSrc(icon)) {
            name = icon;
        }
        if (isStr(name)) {
            name = name.toLowerCase();
            if (!/^md-|^ios-|^logo-/.test(name)) {
                // this does not have one of the defaults
                // so lets auto add in the mode prefix for them
                name = mode + '-' + name;
            }
        }
    }
    if (!isStr(name) || name.trim() === '') {
        return null;
    }
    // only allow alpha characters and dash
    var invalidChars = name.replace(/[a-z]|-|\d/gi, '');
    if (invalidChars !== '') {
        return null;
    }
    return name;
};
var getSrc = function (src) {
    if (isStr(src)) {
        src = src.trim();
        if (isSrc(src)) {
            return src;
        }
    }
    return null;
};
var isSrc = function (str) {
    return str.length > 0 && /(\/|\.)/.test(str);
};
var isStr = function (val) { return typeof val === 'string'; };
var validateContent = function (svgContent) {
    if (svgContent) {
        var div = document.createElement('div');
        div.innerHTML = svgContent;
        // setup this way to ensure it works on our buddy IE
        for (var i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
                div.removeChild(div.childNodes[i]);
            }
        }
        // must only have 1 root element
        var svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
            svgElm.setAttribute('class', 's-ion-icon');
            // root element must be an svg
            // lets double check we've got valid elements
            // do not allow scripts
            if (isValid(svgElm)) {
                return div.innerHTML;
            }
        }
    }
    return '';
};
var isValid = function (elm) {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (var i = 0; i < elm.attributes.length; i++) {
            var val = elm.attributes[i].value;
            if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }
        for (var i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
};
var requests = new Map();
var getSvgContent = function (url) {
    // see if we already have a request for this url
    var req = requests.get(url);
    if (!req) {
        // we don't already have a request
        req = fetch(url).then(function (rsp) {
            if (rsp.status <= 299) {
                return rsp.text();
            }
            return Promise.resolve(null);
        }).then(function (svgContent) { return validateContent(svgContent); });
        // cache for the same requests
        requests.set(url, req);
    }
    return req;
};
var Icon = /** @class */ (function () {
    function Icon(hostRef) {
        registerInstance(this, hostRef);
        this.mode = getStellarMode(this);
        this.isVisible = false;
        /**
         * If enabled, stellar-icon will be loaded lazily when it's visible in the viewport.
         * Default, `false`.
         */
        this.lazy = false;
    }
    Icon.prototype.connectedCallback = function () {
        var _this = this;
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.el, '50px', function () {
            _this.isVisible = true;
            _this.loadIcon();
        });
    };
    Icon.prototype.disconnectedCallback = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    };
    Icon.prototype.waitUntilVisible = function (el, rootMargin, cb) {
        var _this = this;
        if (this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
            var io_1 = this.io = new window.IntersectionObserver(function (data) {
                if (data[0].isIntersecting) {
                    io_1.disconnect();
                    _this.io = undefined;
                    cb();
                }
            }, { rootMargin: rootMargin });
            io_1.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    };
    Icon.prototype.loadIcon = function () {
        var _this = this;
        if (this.isVisible) {
            var url = getUrl(this);
            if (url) {
                getSvgContent(url)
                    .then(function (svgContent) { return _this.svgContent = svgContent; });
            }
        }
        if (!this.ariaLabel) {
            var label = getName(this.name, this.icon, this.mode, this.ios, this.md);
            // user did not provide a label
            // come up with the label based on the icon name
            if (label) {
                this.ariaLabel = label
                    .replace('ios-', '')
                    .replace('md-', '')
                    .replace(/\-/g, ' ');
            }
        }
    };
    Icon.prototype.render = function () {
        var _a;
        var mode = this.mode || 'ios';
        var flipRtl = this.flipRtl || (this.ariaLabel && this.ariaLabel.indexOf('arrow') > -1 && this.flipRtl !== false);
        return (h(Host, { role: "img", class: (_a = {},
                _a[mode] = true,
                _a["icon-" + this.size] = !!this.size,
                _a['flip-rtl'] = !!flipRtl && this.el.ownerDocument.dir === 'rtl',
                _a) }, ((this.svgContent)
            ? h("div", { class: "icon-inner", innerHTML: this.svgContent })
            : h("div", { class: "icon-inner" }))));
    };
    Object.defineProperty(Icon, "assetsDirs", {
        get: function () { return ["svg"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon, "watchers", {
        get: function () {
            return {
                "name": ["loadIcon"],
                "src": ["loadIcon"],
                "icon": ["loadIcon"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon, "style", {
        get: function () { return "stellar-icon{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}stellar-icon .icon-inner,stellar-icon svg{display:block;height:100%;width:100%}stellar-asset.flip-rtl .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}"; },
        enumerable: true,
        configurable: true
    });
    return Icon;
}());
var getStellarMode = function (ref) {
    return getMode(ref) || document.documentElement.getAttribute('mode') || 'ios';
};
function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
var Item = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.type = "button";
        this.href = "#";
        this.wrap = false;
        this.fit = false;
        this.simple = false;
        this.danger = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.selected = false;
        this.multiple = false;
        this.selectable = false;
        this.focused = false;
        this.selectTitle = false;
        this.route = false;
        this.current = false;
        this.selectionChanged = createEvent(this, "selectionChanged", 7);
        this.mounted = createEvent(this, "mounted", 7);
        this.focusChanged = createEvent(this, "focusChanged", 7);
        this.blurChanged = createEvent(this, "blurChanged", 7);
    }
    class_1.prototype.componentWillLoad = function () {
        this.select = this.element.closest('stellar-select');
    };
    class_1.prototype.componentDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.selected) {
                _this.mounted.emit(_this);
            }
        }, 10);
    };
    class_1.prototype.componentDidUnload = function () {
        this.selectionChanged.emit(this);
    };
    class_1.prototype.componentDidUpdate = function () {
        if (this.select) {
            this.select.update_values();
        }
    };
    class_1.prototype.data = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        size: this.size,
                        value: this.value,
                        type: this.type,
                        label: this.label,
                        danger: this.danger,
                        slotted: this.element.innerHTML
                    }];
            });
        });
    };
    class_1.prototype.apply = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.size = data.size;
                        this.value = data.value;
                        this.type = data.type;
                        this.label = data.label;
                        this.element.innerHTML = data.slotted;
                        if (!this.selectTitle) return [3 /*break*/, 2];
                        return [4 /*yield*/, delay(25)];
                    case 1:
                        _a.sent();
                        this.element.innerHTML = data.slotted;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.setFocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.focused = true;
                // @ts-ignore
                this.element.querySelector('.button').focus();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.handleClick = function (e) {
        if (this.route) {
            e.preventDefault();
            this.history.push(this.href, {});
        }
        if (!this.current) {
            this.selectionChanged.emit(this);
        }
    };
    class_1.prototype.handleFocus = function () {
        if (this.current) {
            this.focusChanged.emit(this);
        }
        this.focused = true;
    };
    class_1.prototype.handleBlur = function () {
        if (this.current) {
            this.blurChanged.emit(this);
        }
        this.focused = false;
    };
    class_1.prototype.classes = function () {
        var classes = "";
        classes += this.selected ? "selected " : "";
        classes += this.multiple ? "multiple " : "";
        return classes;
    };
    class_1.prototype.select_item = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var event, event;
            return __generator(this, function (_a) {
                if (this.selectable) {
                    if (state) {
                        if (this.selected !== state.selected) {
                            event = new CustomEvent('click');
                            this.element.shadowRoot.querySelector('.button').dispatchEvent(event);
                        }
                    }
                    else {
                        event = new CustomEvent('click');
                        this.element.shadowRoot.querySelector('.button').dispatchEvent(event);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(this.type, { class: "button", type: "button", href: this.href, url: this.href, tabindex: "0", value: this.value, title: this.label, onClick: function (e) { return _this.handleClick(e); }, onBlur: function () { return _this.handleBlur(); }, onFocus: function () { return _this.handleFocus(); } }, h("div", { class: "content" }, h("slot", null)), (this.selected || this.multiple) && h("stellar-asset", { class: this.classes(), name: "checkmark", block: true })));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--item-size:2.356em;--font-size:1.4rem;display:block;width:100%;height:var(--item-size);color:var(--theme-base9);font-family:inherit;visibility:visible!important;font-size:var(--font-size);line-height:1.4;text-align:left;position:relative}:host([fit]){--item-size:auto}:host .button .content{display:grid;grid-template-columns:auto 1fr;grid-gap:1rem;width:100%;text-align:left}:host([wrap]) .button .content{white-space:normal;text-align:left;width:calc(100% - var(--ms5))}:host([danger]) .button{color:var(--red5)}:host a.button,:host button.button,:host stencil-route-link a{text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;outline:0;border:0;background:transparent;padding:0 1em;width:100%;height:calc(var(--item-size) - 1px);color:currentColor;font-weight:500;font-size:inherit}:host stencil-route-link{padding:0}:host .button a{color:inherit;background:inherit;text-decoration:none}:host .button ::slotted([block]){grid-column:1/3}:host .button ::slotted(stellar-avatar){width:var(--avatar-size);visibility:visible!important;display:block!important;-ms-flex-item-align:center;align-self:center}:host .button ::slotted(stellar-tag){margin:auto .5rem auto auto}:host .button stellar-asset{margin-left:1rem;background:radial-gradient(ellipse at center,#fff 0,#fff 50%,hsla(0,0%,100%,0) 80%,hsla(0,0%,100%,0) 100%)}:host .button span{margin:auto auto auto 0;width:100%;text-overflow:ellipsis;white-space:nowrap}:host([size=small]) .button{padding:0 1rem;height:3rem}:host stellar-asset.selected{-webkit-animation:fadeInScale .2s var(--ease);animation:fadeInScale .2s var(--ease);font-size:var(--item-size);margin-left:auto!important;background:transparent;color:var(--theme-base5);height:calc(var(--item-size) - 1px)}:host([fit]) stellar-asset.selected{height:75%;font-size:3em;margin-right:.125em}:host(:focus) .selected,:host(:focus-within) .selected,:host(:hover) .selected{color:var(--theme-base7)}:host([fit]) stellar-asset{right:1em}:host(:focus-within),:host(:hover),:host .button:focus,:host .button:hover{background:var(--theme-base0)}:host(.current){background:#fff}:host([danger]) .button:focus,:host([danger]) .button:hover{background:var(--red5);color:#fff}:host([simple]) .button{background:#fff!important}:host(.current) stellar-asset{display:none}:host stellar-asset.multiple{border:1px solid var(--border-color);background:var(--background);border-radius:4px;font-size:calc(var(--item-size) * .55);width:calc(var(--item-size) * .55);height:calc(var(--item-size) * .55);margin:0 0 0 auto;left:-1rem;position:relative;color:transparent}:host stellar-asset.multiple.selected{color:var(--white);background:var(--theme-base5)}:host(.current) .button:focus,:host(.current) .button:hover,:host(.current:focus-within),:host(.current:hover){background:transparent}:host([dark]) .button:focus,:host([dark]) .button:hover,:host([dark]:focus-within),:host([dark]:hover){background:var(--theme-base8)}:host([dark].current) .button:focus,:host([dark].current) .button:hover,:host([dark].current:focus-within),:host([dark].current:hover){background:transparent}\@-webkit-keyframes fadeInScale{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}\@keyframes fadeInScale{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Tunnel.injectProps(Item, ['dark']);
if (injectHistory) {
    injectHistory(Item);
}
export { ContextConsumer as context_consumer, Asset as stellar_asset, Dropdown as stellar_dropdown, Icon as stellar_icon, Item as stellar_item };
