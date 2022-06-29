'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
const main = require('./main-6214461c.js');

const PasswordRequirements = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.length = false;
        this.uppercase = false;
        this.number = false;
        this.symbol = false;
        this.commonPasswords = true;
        this.commonNames = true;
        this.repeated = true;
    }
    componentDidLoad() {
        setTimeout(() => {
            this.input = document.querySelector(`stellar-input[name="${this.for}"]`);
            this.input.addEventListener('update', (e) => {
                this.value = e.detail;
            });
        }, 1000);
    }
    get fs() {
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
    }
    get icon() {
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
    }
    handleValueChange() {
        const result = main.zxcvbn(this.value);
        this.length = this.value.length >= 10;
        this.uppercase = (/[A-Z]/.test(this.value));
        this.number = (/[0-9]/.test(this.value));
        this.symbol = (/[^A-Za-z0-9]/.test(this.value));
        this.commonPasswords = result.feedback.warning !== "This is a very common password";
        this.commonNames = result.feedback.warning !== "Names and surnames by themselves are easy to guess";
        this.repeated = result.feedback.warning !== 'Repeats like "abcabcabc" are only slightly harder to guess than "abc"';
    }
    renderLength() {
        return core.h("p", { class: `${this.fs} flex items-center mb3 pa0 ma0 ${this.length ? 'theme-green' : 'theme-red'}` }, core.h("stellar-asset", { class: `${this.icon} fs4 dib mr2 theme-base7`, name: this.length ? "checkmark-circle-outline" : "close-circle-outline" }), core.h("small", null, "10 characters or longer"));
    }
    renderUppercase() {
        return core.h("p", { class: `${this.fs} flex items-center mb3 pa0 ma0 ${this.uppercase ? 'theme-green' : 'theme-red'}` }, core.h("stellar-asset", { class: `${this.icon} fs4 dib mr2 theme-base7`, name: this.uppercase ? "checkmark-circle-outline" : "close-circle-outline" }), core.h("small", null, "At least 1 uppercase character"));
    }
    renderNumber() {
        return core.h("p", { class: `${this.fs} flex items-center mb3 pa0 ma0 ${this.number ? 'theme-green' : 'theme-red'}` }, core.h("stellar-asset", { class: `${this.icon} fs4 dib mr2 theme-base7`, name: this.number ? "checkmark-circle-outline" : "close-circle-outline" }), core.h("small", null, "At least 1 number"));
    }
    renderSymbol() {
        return core.h("p", { class: `${this.fs} flex items-center mb3 pa0 ma0 ${this.symbol ? 'theme-green' : 'theme-red'}` }, core.h("stellar-asset", { class: `${this.icon} fs4 dib mr2 theme-base7`, name: this.symbol ? "checkmark-circle-outline" : "close-circle-outline" }), core.h("small", null, "At least 1 symbol"));
    }
    renderCommonPasswords() {
        return core.h("p", { class: `${this.fs} flex items-center mb3 pa0 ma0 ${this.commonPasswords ? 'theme-green' : 'theme-red'}` }, core.h("stellar-asset", { class: `${this.icon} fs4 dib mr2 theme-base7`, name: this.commonPasswords ? "checkmark-circle-outline" : "close-circle-outline" }), core.h("small", null, "Cannot be common passwords ('password123 is bad')"));
    }
    renderCommonNames() {
        return core.h("p", { class: `${this.fs} flex items-center mb3 pa0 ma0 ${this.commonNames ? 'theme-green' : 'theme-red'}` }, core.h("stellar-asset", { class: `${this.icon} fs4 dib mr2 theme-base7`, name: this.commonNames ? "checkmark-circle-outline" : "close-circle-outline" }), core.h("small", null, "Cannot be a name ('andrew')"));
    }
    renderRepeatedKeys() {
        return core.h("p", { class: `${this.fs} flex items-center mb3 pa0 ma0 ${this.repeated ? 'theme-green' : 'theme-red'}` }, core.h("stellar-asset", { class: `${this.icon} fs4 dib mr2 theme-base7`, name: this.repeated ? "checkmark-circle-outline" : "close-circle-outline" }), core.h("small", null, "Cannot be repeated keys ('asdfasdfasdf')"));
    }
    render() {
        return [
            this.renderLength(),
            this.renderUppercase(),
            this.renderNumber(),
            this.renderSymbol(),
            this.renderCommonPasswords(),
            this.renderCommonNames(),
            this.renderRepeatedKeys(),
        ];
    }
    get element() { return core.getElement(this); }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
};

exports.stellar_password_requirements = PasswordRequirements;
