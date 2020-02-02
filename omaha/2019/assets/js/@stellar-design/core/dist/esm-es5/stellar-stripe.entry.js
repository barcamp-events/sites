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
import { r as registerInstance, h, g as getElement } from './core-36452501.js';
var style = {
    iconStyle: 'solid',
    base: {
        iconColor: '#484849',
        color: '#484849',
        fontWeight: 500,
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '15px',
        fontSmoothing: 'antialiased',
        "::placeholder": {
            color: "#a3a3a4"
        },
        ":-webkit-autofill": {
            color: "#a3a3a4"
        }
    },
    invalid: {
        iconColor: '#f85e5a',
        color: '#f85e5a',
        '::placeholder': {
            color: '#fa8e8b',
        },
    },
};
var classes = {
    focus: 'focused',
    empty: 'empty',
    invalid: 'invalid',
};
var Card = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.token = 'pk_test_6pRNASCoBOKtIshFeQd4XMUh';
        this.name = 'stripe';
        this.value = undefined;
        this.cardData = {};
        this.state = "preparing";
    }
    class_1.prototype.componentWillLoad = function () {
        this.stripe = window["Stripe"](this.token);
    };
    class_1.prototype.componentDidLoad = function () {
        this.connect();
    };
    class_1.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.stripe = window["Stripe"](this.token);
                this.input = this.element.querySelector('.token');
                this.attachToForm();
                this.prepareStripe();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stripe.createToken(this.card, this.cardData)
                            .then(this.handleResponse.bind(this))
                            .catch(this.handleError.bind(this))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.value !== undefined];
                }
            });
        });
    };
    class_1.prototype.attachToForm = function () {
        var _this = this;
        var form = this.element.closest("form");
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                _this.getToken().then(function (result) {
                    if (result) {
                        form.submit();
                    }
                });
            });
        }
        else {
            console.error("The stellar-stripe tag must be added to a form.");
        }
    };
    class_1.prototype.handleResponse = function (_a) {
        var error = _a.error, token = _a.token;
        if (error) {
            this.setError(error.message);
            // this.dispatchEvent(new ErrorEvent('stripe-error', {error, bubbles, composed}));
        }
        else {
            this.error = undefined;
            this.value = token.id;
            // this.dispatchEvent(new CustomEvent('stripe-token', {token, bubbles, composed}));
        }
    };
    class_1.prototype.handleError = function (error) {
        // this.dispatchEvent(new ErrorEvent('stripe-error', {error, bubbles, composed}));
        // Show error in UI
        this.setError(error.message);
    };
    class_1.prototype.setError = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.error = error;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.prepareStripe = function () {
        var elements = this.stripe.elements({
            fonts: [
                {
                    cssSrc: 'https://fonts.googleapis.com/css?family=Open+Sans',
                },
            ],
            locale: 'auto'
        });
        this.card = elements.create('card', {
            style: style,
            classes: classes,
            hidePostalCode: true,
        });
        this.card.mount(this.element.querySelector('#card'));
    };
    class_1.prototype.renderPhone = function () {
        return (h("stellar-input", { id: "phone", "data-tid": "stellar_stripe.form.phone", type: "tel", placeholder: "(941) 555-0123", required: true, label: "Phone number" }));
    };
    class_1.prototype.renderZip = function () {
        return (h("stellar-input", { id: "zip", "data-tid": "stellar_stripe.form.postal_code", type: "text", placeholder: "94107", required: true, label: "ZIP" }));
    };
    class_1.prototype.render = function () {
        return (h("div", null, h("input", { type: "hidden", class: "token", name: this.name, value: this.value }), h("div", { class: "field" }, h("label", { "data-for": "stellar_stripe.form.card" }, h("p", { class: "label" }, "Card details")), h("div", { "data-tid": "stellar_stripe.form.card", id: "card", class: "input" }), this.error && h("p", { class: "validation" }, h("span", null, this.error))), h("stellar-grid", null, this.renderPhone(), this.renderZip())));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "stellar-stripe{display:block}stellar-stripe .field{position:relative;margin-bottom:30px;width:100%}stellar-stripe label{display:block;margin-bottom:10px;line-height:1.69;color:#484849;color:var(--gray5);font-size:13px;font-weight:600}stellar-stripe .input{border:1px solid var(--gray2);border-radius:4px}stellar-stripe .input::-webkit-input-placeholder{-webkit-transition:color .3s cubic-bezier(.165,.84,.44,1);transition:color .3s cubic-bezier(.165,.84,.44,1);color:transparent}stellar-stripe .input::-moz-placeholder{-webkit-transition:color .3s cubic-bezier(.165,.84,.44,1);transition:color .3s cubic-bezier(.165,.84,.44,1);color:transparent}stellar-stripe .input:-ms-input-placeholder{-webkit-transition:color .3s cubic-bezier(.165,.84,.44,1);transition:color .3s cubic-bezier(.165,.84,.44,1);color:transparent}stellar-stripe .input.StripeElement{display:-ms-flexbox;display:flex;top:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:20px;height:100%}stellar-stripe .input.StripeElement>div{width:100%}stellar-stripe .input.focused::-webkit-input-placeholder,stellar-stripe .input:not(.empty)::-webkit-input-placeholder{color:var(--gray2)}stellar-stripe .input.focused::-moz-placeholder,stellar-stripe .input:not(.empty)::-moz-placeholder{color:var(--gray2)}stellar-stripe .input.focused:-ms-input-placeholder,stellar-stripe .input:not(.empty):-ms-input-placeholder{color:var(--gray2)}stellar-stripe .input.focused+label,stellar-stripe .input:not(.empty)+label{cursor:default;-webkit-transform:scale(.85) translateY(-25px);transform:scale(.85) translateY(-25px);color:#aab7c4}stellar-stripe .input.focused+label{color:#24b47e}stellar-stripe .input.invalid+label{color:#ffa27b}stellar-stripe .input.focused+label+.baseline{background-color:#24b47e}stellar-stripe .input.focused.invalid+label+.baseline{background-color:#e25950}stellar-stripe .input input{appearance:none;-webkit-appearance:none;outline:none;border-style:none;-moz-appearance:none}stellar-stripe .validation{margin-top:10px;margin-bottom:0;color:var(--red5);font-size:14px;font-weight:500}stellar-stripe .validation span{display:block;padding:10px 0;line-height:1.4}stellar-stripe .validation span+span{border-top:1px solid var(--gray1)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { Card as stellar_stripe };
