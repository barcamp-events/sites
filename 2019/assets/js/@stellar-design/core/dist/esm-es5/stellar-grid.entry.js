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
import { r as registerInstance, h, H as Host, g as getElement } from './core-36452501.js';
import './_commonjsHelpers-ae1b5db5.js';
import { e as eqjs } from './eq.min-aaf72f1b.js';
var Grid = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.cols = "auto";
        this.compact = false;
        this.padding = false;
        this.align = "items-start";
        this.noresponsive = false;
    }
    class_1.prototype.makeResponsive = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.noresponsive) {
                    eqjs.definePts(this.element, {
                        "tiny": 320,
                        "small": 480,
                        "medium": 640,
                        "large": 800,
                        "massive": 1024
                    });
                    this.refresh();
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.componentWillLoad = function () {
        this.makeResponsive();
    };
    class_1.prototype.componentDidLoad = function () {
        this.makeResponsive();
    };
    class_1.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resizeEvent;
            return __generator(this, function (_a) {
                resizeEvent = window.document.createEvent('UIEvents');
                resizeEvent.initEvent('resize', true, false);
                window.dispatchEvent(resizeEvent);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        return h(Host, { class: "" + this.align }, h("slot", null));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--grid-width:200px;--grid-gap:2rem;position:relative;display:-ms-flexbox;display:flex;display:grid;-ms-flex-wrap:wrap;flex-wrap:wrap;grid-gap:var(--grid-gap);grid-template-columns:repeat(auto-fit,minmax(var(--grid-width),1fr))}:host([padding]){padding:var(--grid-gap)}:host([noresponsive]){grid-template-columns:repeat(auto-fit,minmax(var(--grid-width),1fr))}:host([noresponsive][cols=\"1\"]){grid-template-columns:1fr}:host([noresponsive][cols=\"2\"]){grid-template-columns:repeat(2,1fr)}:host([noresponsive][cols=\"3\"]){grid-template-columns:repeat(3,1fr)}:host([noresponsive][cols=\"4\"]){grid-template-columns:repeat(4,1fr)}:host([noresponsive][cols=\"5\"]){grid-template-columns:repeat(5,1fr)}:host([noresponsive][cols=\"6\"]){grid-template-columns:repeat(6,1fr)}:host ::slotted(.width-all){grid-column:1/-1}:host ::slotted(.width-2){grid-column:auto/span 2}:host ::slotted(.width-3){grid-column:auto/span 3}:host ::slotted(.width-4){grid-column:auto/span 4}:host ::slotted(.width-5){grid-column:auto/span 5}:host ::slotted(.width-6){grid-column:auto/span 6}:host ::slotted(.height-all){grid-row:1/-1}:host ::slotted(.height-2){grid-row:auto/span 2}:host ::slotted(.height-3){grid-row:auto/span 3}:host ::slotted(.height-4){grid-row:auto/span 4}:host ::slotted(.height-5){grid-row:auto/span 5}:host ::slotted(.height-6){grid-row:auto/span 6}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { Grid as stellar_grid };
