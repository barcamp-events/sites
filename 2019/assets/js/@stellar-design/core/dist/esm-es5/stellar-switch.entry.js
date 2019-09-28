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
var Switch = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.checked = false;
        this.checkedDefault = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.update = createEvent(this, "update", 7);
    }
    class_1.prototype.componentDidLoad = function () {
        if (this.checkedDefault) {
            this.checked = this.checkedDefault;
        }
    };
    class_1.prototype.validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                status = {
                    name: this.name,
                    value: this.checked,
                    valid: true,
                    errors: [],
                };
                if (!this.novalidate) {
                    // @ts-ignore
                    if (!this.checked && this.required) {
                        status.valid = false;
                        status.errors.push({ message: 'This field is required.' });
                    }
                }
                this.status = status;
                return [2 /*return*/, this.status];
            });
        });
    };
    class_1.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.checked = !this.checked;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.handleChecked = function () {
        this.update.emit({
            checked: this.checked
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("label", { class: "label" }, h("input", { type: "checkbox", name: this.name, checked: this.checked, tabindex: "-1", onClick: function () { _this.activate(); } }), h("button", { type: "button", onClick: function () { _this.activate(); } }, h("span", null, this.checked && h("stellar-asset", { name: "checkmark" }), !this.checked && h("stellar-asset", { name: "close" }))), h("slot", null)));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "checked": ["handleChecked"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "stellar-switch{display:block;--border-radius:200px;--font-size:1.2rem}stellar-switch .label{-webkit-tap-highlight-color:transparent;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;position:relative;margin:1.1rem 0}stellar-switch button ::-moz-selection{background:transparent}stellar-switch button ::selection{background:transparent}stellar-switch .label button{font-size:var(--font-size);display:inline-block;position:relative;-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s;margin-right:1em;background-color:var(--gray2);width:4rem;height:.8rem;vertical-align:text-bottom;border-radius:var(--border-radius);border:0;cursor:pointer;outline:0}stellar-switch .label button:focus{background-color:var(--theme-base3)}stellar-switch .label button:focus:after{-webkit-box-shadow:0 0 0 3px rgba(0,0,0,.125),0 0 3px 0 rgba(0,0,0,.3);box-shadow:0 0 0 3px rgba(0,0,0,.125),0 0 3px 0 rgba(0,0,0,.3)}stellar-switch .label button span{font-size:2rem;font-weight:700;color:var(--gray7);left:0;top:0;font-style:normal;text-transform:uppercase;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;padding:0;pointer-events:none;z-index:1}stellar-switch .label button:after,stellar-switch .label button span{-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s;position:absolute}stellar-switch .label button:after{content:\"\";top:-.8rem;left:-.2rem;-webkit-transform:translate3d(.125em,.125em,0);transform:translate3d(.125em,.125em,0);-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,.3);box-shadow:0 0 3px 0 rgba(0,0,0,.3);background-color:#fff;border-radius:var(--border-radius);width:2.1rem;height:2.1rem}stellar-switch .label:active button:after{-webkit-transform:translate3d(2px,.125rem,0);transform:translate3d(2px,.125rem,0);width:2.3rem}stellar-switch .label:active input:checked+button:after{-webkit-transform:translate3d(1.9rem,.125rem,0);transform:translate3d(1.9rem,.125rem,0)}stellar-switch .label input{pointer-events:none;position:absolute;opacity:0}stellar-switch .label input:checked+button{background-color:var(--theme-base6);color:#fff}stellar-switch .label input:checked+button span{padding:0 0 0 2.1rem;color:#fff}stellar-switch .label input:checked+button:after{-webkit-transform:translate3d(2.25rem,.125rem,0);transform:translate3d(2.25rem,.125rem,0);background:var(--theme-base5)}stellar-switch[dark] .label input:checked+button,stellar-switch[dark] .label input:checked+button span{color:var(--black)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Tunnel.injectProps(Switch, ['dark']);
export { Switch as stellar_switch };
