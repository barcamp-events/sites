'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

const Testington = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        this.form = this.element.querySelector('stellar-form');
        this.select = this.form.querySelector('stellar-select');
    }
    submitLogin(_) {
        this.select.multiple = !this.select.multiple;
    }
    render() {
        return core.h("stellar-layout", { size: "tiny", padding: "large", align: "center", class: "mv6 dib w-100" }, core.h("stellar-theme", { body: true, system: true, base: "orange", complement: "violet" }), core.h("copy-wrap", { align: "center" }, core.h("h1", { class: "mb4" }, "Sign in to Your Account"), core.h("stellar-form", { ajax: true, onSubmitted: (e) => { this.submitLogin(e); } }, core.h("stellar-grid", { cols: "1", noresponsive: true }, core.h("stellar-select", { name: "config[query][metric_category]", overlay: true, fit: true, wrap: true, autoSelectFirst: true, label: "Metric Category", placeholder: "Select a metric category", novalidate: true, tooltip: "Select a metric category to view the related card type and metric options." }, core.h("stellar-item", { fit: true, wrap: true, selected: true, value: "Nice" }, "Nice"), core.h("stellar-item", { fit: true, wrap: true, value: "Awesome" }, "Awesome"), core.h("stellar-item", { fit: true, wrap: true, value: "Sick" }, "Sick"), core.h("stellar-item", { fit: true, wrap: true, value: "Cool" }, "Cool")), core.h("stellar-button", { tag: "submit" }, "submit")))));
    }
    get element() { return core.getElement(this); }
};

exports.stellar_tester = Testington;
