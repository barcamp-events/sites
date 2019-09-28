import { r as registerInstance, h, g as getElement } from './core-8f5ef0c7.js';
import { z as zxcvbn } from './main-07539eea.js';
var PasswordRequirements = /** @class */ (function () {
    function PasswordRequirements(hostRef) {
        registerInstance(this, hostRef);
        this.length = false;
        this.uppercase = false;
        this.number = false;
        this.symbol = false;
        this.commonPasswords = true;
        this.commonNames = true;
        this.repeated = true;
    }
    PasswordRequirements.prototype.componentDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.input = document.querySelector("stellar-input[name=\"" + _this.for + "\"]");
            _this.input.addEventListener('update', function (e) {
                _this.value = e.detail;
            });
        }, 1000);
    };
    Object.defineProperty(PasswordRequirements.prototype, "fs", {
        get: function () {
            if (this.size === "tiny") {
                return "fs7";
            }
            else if (this.size === "small") {
                return "fs6";
            }
            else if (this.size === "large") {
                return "fs4";
            }
            else {
                return "fs5";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PasswordRequirements.prototype, "icon", {
        get: function () {
            if (this.size === "tiny") {
                return "fs6";
            }
            else if (this.size === "small") {
                return "fs5";
            }
            else if (this.size === "large") {
                return "fs1";
            }
            else {
                return "fs4";
            }
        },
        enumerable: true,
        configurable: true
    });
    PasswordRequirements.prototype.handleValueChange = function () {
        var result = zxcvbn(this.value);
        this.length = this.value.length >= 10;
        this.uppercase = (/[A-Z]/.test(this.value));
        this.number = (/[0-9]/.test(this.value));
        this.symbol = (/[^A-Za-z0-9]/.test(this.value));
        this.commonPasswords = result.feedback.warning !== "This is a very common password";
        this.commonNames = result.feedback.warning !== "Names and surnames by themselves are easy to guess";
        this.repeated = result.feedback.warning !== 'Repeats like "abcabcabc" are only slightly harder to guess than "abc"';
    };
    PasswordRequirements.prototype.renderLength = function () {
        return h("p", { class: this.fs + " flex items-center mb3 pa0 ma0 " + (this.length ? 'theme-green' : 'theme-red') }, h("stellar-asset", { class: this.icon + " fs4 dib mr2 theme-base7", name: this.length ? "checkmark-circle-outline" : "close-circle-outline" }), h("small", null, "10 characters or longer"));
    };
    PasswordRequirements.prototype.renderUppercase = function () {
        return h("p", { class: this.fs + " flex items-center mb3 pa0 ma0 " + (this.uppercase ? 'theme-green' : 'theme-red') }, h("stellar-asset", { class: this.icon + " fs4 dib mr2 theme-base7", name: this.uppercase ? "checkmark-circle-outline" : "close-circle-outline" }), h("small", null, "At least 1 uppercase character"));
    };
    PasswordRequirements.prototype.renderNumber = function () {
        return h("p", { class: this.fs + " flex items-center mb3 pa0 ma0 " + (this.number ? 'theme-green' : 'theme-red') }, h("stellar-asset", { class: this.icon + " fs4 dib mr2 theme-base7", name: this.number ? "checkmark-circle-outline" : "close-circle-outline" }), h("small", null, "At least 1 number"));
    };
    PasswordRequirements.prototype.renderSymbol = function () {
        return h("p", { class: this.fs + " flex items-center mb3 pa0 ma0 " + (this.symbol ? 'theme-green' : 'theme-red') }, h("stellar-asset", { class: this.icon + " fs4 dib mr2 theme-base7", name: this.symbol ? "checkmark-circle-outline" : "close-circle-outline" }), h("small", null, "At least 1 symbol"));
    };
    PasswordRequirements.prototype.renderCommonPasswords = function () {
        return h("p", { class: this.fs + " flex items-center mb3 pa0 ma0 " + (this.commonPasswords ? 'theme-green' : 'theme-red') }, h("stellar-asset", { class: this.icon + " fs4 dib mr2 theme-base7", name: this.commonPasswords ? "checkmark-circle-outline" : "close-circle-outline" }), h("small", null, "Cannot be common passwords ('password123 is bad')"));
    };
    PasswordRequirements.prototype.renderCommonNames = function () {
        return h("p", { class: this.fs + " flex items-center mb3 pa0 ma0 " + (this.commonNames ? 'theme-green' : 'theme-red') }, h("stellar-asset", { class: this.icon + " fs4 dib mr2 theme-base7", name: this.commonNames ? "checkmark-circle-outline" : "close-circle-outline" }), h("small", null, "Cannot be a name ('andrew')"));
    };
    PasswordRequirements.prototype.renderRepeatedKeys = function () {
        return h("p", { class: this.fs + " flex items-center mb3 pa0 ma0 " + (this.repeated ? 'theme-green' : 'theme-red') }, h("stellar-asset", { class: this.icon + " fs4 dib mr2 theme-base7", name: this.repeated ? "checkmark-circle-outline" : "close-circle-outline" }), h("small", null, "Cannot be repeated keys ('asdfasdfasdf')"));
    };
    PasswordRequirements.prototype.render = function () {
        return [
            this.renderLength(),
            this.renderUppercase(),
            this.renderNumber(),
            this.renderSymbol(),
            this.renderCommonPasswords(),
            this.renderCommonNames(),
            this.renderRepeatedKeys(),
        ];
    };
    Object.defineProperty(PasswordRequirements.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PasswordRequirements, "watchers", {
        get: function () {
            return {
                "value": ["handleValueChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return PasswordRequirements;
}());
export { PasswordRequirements as stellar_password_requirements };
