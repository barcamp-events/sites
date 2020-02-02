import { r as registerInstance, e as createEvent, h, g as getElement, H as Host } from './core-36452501.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-e9450bee.js';
import './_commonjsHelpers-ae1b5db5.js';
import { a as asyncForEach, g as form2js, c as colors } from './index-5afdd7fa.js';
import './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';

const Form = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ajax = false;
        this.method = "get";
        this.autocomplete = "on";
        this.enctype = "multipart/form-data";
        this.novalidate = false;
        this.selectors = ['stellar-input', 'stellar-toggle', 'stellar-range', 'stellar-switch', 'stellar-select'];
        this.submitted = createEvent(this, "submitted", 7);
    }
    handleEnter(event) {
        if (event.key === 'enter') {
            this.submit_form();
        }
    }
    async register(selectors) {
        this.selectors = [
            ...this.selectors,
            ...selectors
        ];
    }
    async refresh() {
        var resizeEvent = window.document.createEvent('UIEvents');
        resizeEvent.initEvent('resize', true, false);
        window.dispatchEvent(resizeEvent);
    }
    async state() {
        var formData = new FormData();
        var results = [];
        var valid = true;
        const els = Array.from(this.element.querySelectorAll(this.selectors.join(",")));
        await asyncForEach(els, async (element) => {
            try {
                let result = await element.validate();
                results.push(result);
            }
            catch (e) {
                results.push({
                    name: `${element.name}`,
                    value: undefined,
                    valid: false,
                    errors: [e.message],
                });
            }
        });
        results.forEach((result) => {
            if (result) {
                if (result.name) {
                    formData.append(result.name.toString(), result.value);
                }
                if (!result.valid) {
                    valid = false;
                }
            }
        });
        const json = form2js(results.filter(i => i && i.name));
        return {
            els,
            json,
            results: results,
            formData: formData,
            valid: valid,
        };
    }
    async submit_form() {
        const state = await this.state();
        if (state.valid) {
            if (this.ajax) {
                this.submitted.emit(state);
            }
            else {
                this.element.querySelector('form').submit();
            }
        }
    }
    render() {
        return (h("form", { action: this.action, method: this.method, "accept-charset": this.acceptCharset, autocomplete: this.autocomplete, enctype: this.enctype, name: this.name, novalidate: this.novalidate, target: this.target, onSubmit: (e) => { e.preventDefault(); this.submit_form(); } }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return "stellar-form{display:block}"; }
};

const Theme = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dark = false;
        this.light = false;
        this.body = false;
        this.system = false;
        this.base = "indigo";
        this.complement = "red";
        this.htmlEl = document.querySelector('html');
        this.bodyEl = document.querySelector('body');
    }
    componentWillLoad() {
        if (this.system) {
            this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.light = window.matchMedia('(prefers-color-scheme: light)').matches;
        }
        this.observeDark();
        this.observeColors();
    }
    observeColors() {
        const options = Object.keys(colors);
        if (this.body) {
            options.forEach((color) => {
                this.htmlEl.classList.remove(`theme-${color}`);
                this.htmlEl.classList.remove(`complement-${color}`);
                this.bodyEl.classList.remove(`theme-${color}`);
                this.bodyEl.classList.remove(`complement-${color}`);
            });
            this.bodyEl.classList.add(`theme-${this.base}`);
            this.bodyEl.classList.add(`complement-${this.complement}`);
        }
    }
    observeDark() {
        if (this.body && this.dark) {
            this.htmlEl.classList.add('dark-mode');
            this.bodyEl.classList.add('dark-mode');
        }
        else {
            this.htmlEl.classList.remove('dark-mode');
            this.bodyEl.classList.remove('dark-mode');
        }
        if (this.body && this.light) {
            this.htmlEl.classList.add('light-mode');
            this.bodyEl.classList.add('light-mode');
        }
        else {
            this.htmlEl.classList.remove('light-mode');
            this.bodyEl.classList.remove('light-mode');
        }
    }
    render() {
        return h(Host, { class: `${this.dark ? "dark-mode" : ""} ${this.light ? "light-mode" : ""} theme-${this.base} complement-${this.complement}` }, h(Tunnel.Provider, { state: { dark: this.dark, light: this.light } }, h("slot", null)));
    }
    static get watchers() { return {
        "base": ["observeColors"],
        "complement": ["observeColors"],
        "dark": ["observeDark"]
    }; }
};

export { Form as stellar_form, Theme as stellar_theme };
