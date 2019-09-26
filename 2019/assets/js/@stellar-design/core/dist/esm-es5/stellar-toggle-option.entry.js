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
import { b as blurringEase } from './index-9d3b27e3.js';
import './_commonjsHelpers-ae1b5db5.js';
import './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-e9450bee.js';
var ToggleOption = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.type = "checkbox";
        this.checked = false;
        this.checkedDefault = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.for = "";
        this.default = "";
        this.selectedCopy = "Selected!";
        this._type = "checkbox";
        this.focused = false;
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
            },
        });
        this.changeToggle = createEvent(this, "changeToggle", 7);
    }
    class_1.prototype.componentWillLoad = function () {
        this.updateRealType();
    };
    class_1.prototype.componentDidLoad = function () {
        this.input = this.element.querySelector('input.input');
        if (this.checkedDefault) {
            this.checked = this.checkedDefault;
            this.changeToggle.emit({ element: this.element, value: this.value, checked: this.checked });
        }
    };
    class_1.prototype.updateRealType = function () {
        if (this.type === "radio-block") {
            this._type = "radio";
        }
        else if (this.type === "checkbox-block") {
            this._type = "checkbox";
        }
        else {
            this._type = this.type;
        }
    };
    class_1.prototype.confirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.input.checked !== this.checked) {
                    this.checked = this.input.checked;
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.updateSelected = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.input.checked = value;
                this.onToggleChange();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.onToggleChange = function () {
        this.checked = this.input.checked;
        this.ease.start();
        this.changeToggle.emit({ element: this.element, value: this.checked ? this.value : undefined, checked: this.checked });
    };
    class_1.prototype.onFocus = function () {
        this.focused = true;
    };
    class_1.prototype.onBlur = function () {
        this.focused = false;
    };
    class_1.prototype.onClick = function () {
        this.input.checked = !this.input.checked;
        this.onToggleChange();
    };
    class_1.prototype.onKeyDown = function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            this.input.checked = !this.input.checked;
            this.onToggleChange();
        }
    };
    class_1.prototype.renderCheckbox = function () {
        if (this.type === "checkbox" || this.type === "radio") {
            return (h("div", { class: this.focused ? "box focused" : "box" }, h("div", { class: this.checked ? "indicator active" : "indicator" }, this.type === "checkbox" && h("stellar-asset", { name: "checkmark" }))));
        }
    };
    class_1.prototype.renderRadioBlock = function () {
        if (this.type === "radio-block") {
            return (h("div", { class: "wrapper" }, h("div", { class: this.focused ? "box focused" : "box" }, h("div", { class: this.checked ? "indicator active" : "indicator" })), h("div", { class: "block-content" }, h("slot", null))));
        }
    };
    class_1.prototype.renderCheckBlock = function () {
        if (this.type === "checkbox-block") {
            return (h("div", { class: "wrapper" }, h("div", { class: this.focused ? "box focused" : "box" }, h("div", { class: this.checked ? "indicator active" : "indicator" }, h("stellar-asset", { name: "checkmark", block: true }))), h("div", { class: "block-content" }, h("slot", null))));
        }
    };
    class_1.prototype.render = function () {
        var _this = this;
        // @ts-ignore
        return h("button", { type: "button", onClick: function () { return _this.onClick(); }, onKeyDown: function (e) { return _this.onKeyDown(e); } }, h("input", { type: "hidden", name: this.for + "[" + this.name + "]", value: this.default }), h("input", { class: "input", type: this._type, id: this.for + "_" + this.name + "_" + this.value, name: this.for + "[" + this.name + "]", checked: this.checked, value: this.value, required: this.required, onChange: function (e) { e.stopPropagation(); e.preventDefault(); }, onKeyDown: function (e) { return _this.onKeyDown(e); } }), this.renderCheckbox(), ["radio", "checkbox"].indexOf(this.type) !== -1 && h("p", null, h("slot", null)), this.renderRadioBlock(), this.renderCheckBlock(), ["radio", "checkbox"].indexOf(this.type) === -1 &&
            h("stellar-blur", { horizontal: this.blur, class: this.checked ? "status active" : "status" }, h("stellar-tag", { size: "small", color: "theme-base5" }, this.selectedCopy)), this.tooltip && h("stellar-tooltip", { align: "bottom-left" }, this.tooltip));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "stellar-toggle-option{--background:var(--gray0);--hover-background:var(--gray1);--border:var(--gray1);--focus:var(--gray5);--check-bg:var(--white);--check-subject-bg:var(--theme-base5);-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;font-family:inherit;position:relative}stellar-toggle-option[type*=block]{overflow:hidden}stellar-toggle-option *{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-toggle-option+stellar-toggle-option{margin-top:10px}stellar-toggle-option[type=checkbox-block]+stellar-toggle-option[type=checkbox-block],stellar-toggle-option[type=radio-block]+stellar-toggle-option[type=radio-block]{margin-top:0}stellar-toggle-option stellar-asset{--icon-color:#fff}stellar-toggle-option input{display:block;position:relative;overflow:hidden;width:0;height:0;opacity:0}stellar-toggle-option span{color:var(--gray9);font-weight:300}stellar-toggle-option .box{display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex:0 0 2rem;flex:0 0 2rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .15s var(--ease) 0s;transition:all .15s var(--ease) 0s;margin:0 7.5px 0 .2px;border:1px solid var(--background);-webkit-box-shadow:0 0 0 1px var(--border);box-shadow:0 0 0 1px var(--border);background:var(--check-bg) 50% 50%/5px 4px no-repeat;width:2rem;height:2rem;border-radius:100%;overflow:hidden}stellar-toggle-option:focus-within .box,stellar-toggle-option:hover .box,stellar-toggle-option[checked] .box{border:1px solid var(--background);-webkit-box-shadow:0 0 0 1px var(--focus),0 0 0 3px rgba(0,0,0,.125);box-shadow:0 0 0 1px var(--focus),0 0 0 3px rgba(0,0,0,.125)}stellar-toggle-option .box .indicator{position:absolute;top:50%;left:50%;height:100%;width:100%;-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:all .15s var(--ease) 0s;transition:all .15s var(--ease) 0s}stellar-toggle-option img{min-width:4rem}stellar-toggle-option .box .indicator *{height:100%;width:100%;display:-ms-flexbox;display:flex}stellar-toggle-option .box.focus{border:1px solid #000;-webkit-box-shadow:0 0 0 2px var(--theme-base3);box-shadow:0 0 0 2px var(--theme-base3)}stellar-toggle-option button{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;outline:0}stellar-toggle-option[type*=checkbox] .box .bg,stellar-toggle-option[type=radio] .box .bg{background:var(--check-subject-bg);color:var(--background)}stellar-toggle-option[type*=checkbox] .box .active,stellar-toggle-option[type=radio] .box .active{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);background:var(--check-subject-bg);color:var(--background);width:calc(100% - .5rem);height:calc(100% - .5rem);border-radius:100%}stellar-toggle-option[type*=checkbox] .box .active{border-radius:2px;width:calc(100% + 2px);height:calc(100% + 2px)}stellar-toggle-option[type*=checkbox] .box{-ms-flex:0 0 2rem;flex:0 0 2rem;width:2rem;height:2rem;font-size:2rem;color:var(--check-bg);border-radius:.3rem}stellar-toggle-option[type*=checkbox] .box stellar-asset{-webkit-transition:-webkit-transform .35s var(--ease) 0ms;transition:-webkit-transform .35s var(--ease) 0ms;transition:transform .35s var(--ease) 0ms;transition:transform .35s var(--ease) 0ms,-webkit-transform .35s var(--ease) 0ms;-webkit-transform:scale(0);transform:scale(0)}stellar-toggle-option[type=checkbox-block] .box stellar-asset{height:3rem;width:3rem;font-size:3rem;-ms-flex-item-align:center;align-self:center;margin:auto;display:-ms-flexbox;display:flex}stellar-toggle-option .status stellar-tag{display:block}stellar-toggle-option .status{position:absolute;right:0;top:0;-webkit-transform:translate(calc(100% + 1rem));transform:translate(calc(100% + 1rem));-webkit-transition:all 125ms var(--ease) 0ms;transition:all 125ms var(--ease) 0ms}stellar-toggle-option .status.active{-webkit-transform:translate(0);transform:translate(0)}stellar-toggle-option[type=checkbox] .box .active{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}stellar-toggle-option[type*=checkbox] .box .active stellar-asset{-webkit-transform:scale(1);transform:scale(1)}stellar-toggle-option[type*=block] button{position:relative;border:1px solid var(--border);width:100%;height:100%}stellar-toggle-option[type*=block] button,stellar-toggle-option[type*=block] button .wrapper{-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s}stellar-toggle-option[type*=block]:focus,stellar-toggle-option[type*=block]:hover{-webkit-box-shadow:0 2px 6px 0 rgba(72,72,73,.15);box-shadow:0 2px 6px 0 rgba(72,72,73,.15)}stellar-toggle-option[type*=block]:focus-within .wrapper,stellar-toggle-option[type*=block] button:focus .wrapper,stellar-toggle-option[type*=block] button:hover .wrapper{background:var(--hover-background)}stellar-toggle-option[type*=block] button:active{border-color:var(--gray2)}stellar-toggle-option[type*=block] .wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;background:var(--background);padding:1.5rem;width:100%;height:100%}stellar-toggle-option[type*=block] .block-content{display:grid;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-right:10px;grid-template-columns:1fr;grid-gap:1rem}stellar-toggle-option[type*=block] .box{-ms-flex:0 0 3rem;flex:0 0 3rem;-ms-flex-order:-1;order:-1;margin-right:1.5rem;width:3rem;height:3rem;color:var(--theme-base5);background:var(--check-bg)}stellar-toggle-option[type*=block] .box .active{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}stellar-toggle-option[type*=block][icon] .wrapper{-ms-flex-pack:justify;justify-content:space-between}stellar-toggle-option[type*=block][icon] .block-content{-ms-flex-pack:justify;justify-content:space-between;grid-template-columns:1fr 4fr}stellar-toggle-option[type*=block][icon] .box{-ms-flex-order:3;order:3;margin-right:0;margin-left:1.5rem}stellar-toggle-option[type*=block] copy-wrap{position:relative;z-index:2}stellar-toggle-option[type*=block][inline]{margin:0}stellar-toggle-option[type*=block][inline] button{padding-top:3rem;padding-bottom:3rem}stellar-toggle-option[type*=block][size=small] button{padding-top:2rem;padding-bottom:2rem}stellar-toggle-option[type*=block][checked]{z-index:3;border-color:var(--background)}stellar-toggle-option[type*=block][checked] .box{border:0;-webkit-box-shadow:0 0 0 1px var(--border);box-shadow:0 0 0 1px var(--border);background:var(--background);color:#fff}stellar-toggle-option[type=radio-block] .box .active{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);background:var(--theme-base5);width:calc(100% - .5rem);height:calc(100% - .5rem);border-radius:100%}stellar-toggle-option[type=radio-block][checked] .box .indicator{background:#fff}stellar-toggle-option[inline]{margin-top:0;margin-right:3rem}stellar-toggle-option[single]{margin:0}stellar-toggle-option[inline] button{display:-ms-inline-flexbox;display:inline-flex}stellar-toggle-option[single] .box{margin:0}stellar-toggle-option[disabled]{opacity:.75;-webkit-filter:grayscale(100%);filter:grayscale(100%);pointer-events:none}stellar-toggle-option copy-wrap *{color:var(--black)}stellar-toggle-option[dark]{--background:var(--black-alt);--hover-background:var(--black-alt);--border:var(--gray9)}stellar-toggle-option[dark] copy-wrap *{color:#fff}stellar-toggle-option[dark] .box{background:var(--black)}stellar-toggle-option[dark][type*=checkbox] .box .active stellar-asset{color:var(--black)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Tunnel.injectProps(ToggleOption, ['dark']);
export { ToggleOption as stellar_toggle_option };
