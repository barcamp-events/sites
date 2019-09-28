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
var Toggle = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.type = "checkbox";
        this.name = "";
        this.stacked = false;
        this.flip = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.card = "div";
        this.valid = true;
        this.update = createEvent(this, "update", 7);
    }
    class_1.prototype.componentWillLoad = function () {
        var _this = this;
        var options = this.element.querySelectorAll('stellar-toggle-option');
        var values = [];
        // @ts-ignore
        options.forEach(function (option) {
            option.type = _this.type;
            option.for = _this.name;
            if (option.checked) {
                values.push(option.value);
            }
        });
        this.value = values;
    };
    class_1.prototype.validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.status = {
                    name: this.name,
                    value: this.value,
                    valid: this.valid,
                    errors: [],
                };
                return [2 /*return*/, this.status];
            });
        });
    };
    class_1.prototype.toggleChangedHandler = function (event) {
        if (event.detail && event.detail.element) {
            var options = Array.from(this.element.querySelectorAll('stellar-toggle-option'));
            options.filter(function (el) { return el !== event.detail.element; }).forEach(function (option) {
                option.confirm();
            });
            var values_1 = [];
            this.value = [];
            if (this.type === "checkbox" || this.type === "checkbox-block") {
                // @ts-ignore
                options.forEach(function (option) {
                    if (option === event.detail.element && event.detail.element.checked) {
                        values_1.push(event.detail.value);
                    }
                });
            }
            else if (this.type === "radio" || this.type === "radio-block") {
                if (event.detail.element.checked) {
                    values_1.push(event.detail.value);
                }
            }
            this.value = values_1;
            this.update.emit(this.value);
        }
    };
    class_1.prototype.updateChecked = function () {
        var _this = this;
        var options = this.element.querySelectorAll('stellar-toggle-option');
        // @ts-ignore
        options.forEach(function (option) {
            option.type = _this.type;
            option.for = _this.name;
        });
    };
    class_1.prototype.renderValidation = function () {
        if (this.error) {
            return (h("p", { class: "validation" }, this.error));
        }
    };
    class_1.prototype.renderBlock = function () {
        return (h("div", null, this.renderValidation(), h(this.card, { padding: "tiny" }, h("stellar-grid", { cols: this.stacked ? "1" : "auto", compact: true }, h("slot", null)))));
    };
    class_1.prototype.renderPlain = function () {
        return [
            h("slot", null),
            this.renderValidation()
        ];
    };
    class_1.prototype.render = function () {
        return [
            this.label && h("stellar-label", null, this.label),
            h("div", { "data-type": this.type, onClick: function (e) { e.stopPropagation(); } }, ["radio", "checkbox"].indexOf(this.type) === -1 && this.renderBlock(), ["radio", "checkbox"].indexOf(this.type) !== -1 && this.renderPlain()),
            this.description && h("stellar-label", { size: "small", underneath: true }, this.description)
        ];
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "stellar-toggle{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;font-family:inherit}stellar-toggle+stellar-toggle{margin-top:3rem}stellar-grid stellar-toggle+stellar-toggle{margin-top:0!important}stellar-toggle *{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-toggle ::-moz-selection{background:var(--theme-base2)!important}stellar-toggle ::selection{background:var(--theme-base2)!important}stellar-toggle .label{margin-bottom:.5rem;line-height:1.69;color:var(--gray9);font-size:1rem;font-weight:600}stellar-toggle stellar-card .item{padding:1rem}stellar-toggle stellar-grid{width:100%;--width:18.5rem}stellar-toggle[stacked] stellar-grid{--width:100%}stellar-toggle[stacked] stellar-grid .grid{width:100%;grid-gap:0}stellar-toggle[stacked] stellar-toggle-option label{border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none}stellar-toggle[stacked] stellar-toggle-option+stellar-toggle-option label{border-top:1px solid var(--gray2)}stellar-toggle[dark][stacked] stellar-toggle-option+stellar-toggle-option label{border-top:1px solid var(--black)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Tunnel.injectProps(Toggle, ['dark']);
export { Toggle as stellar_toggle };
