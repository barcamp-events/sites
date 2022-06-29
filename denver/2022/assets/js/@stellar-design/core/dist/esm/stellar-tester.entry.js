import { r as registerInstance, h, g as getElement } from './core-36452501.js';

const Testington = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        this.form = this.element.querySelector('stellar-form');
        this.select = this.form.querySelector('stellar-select');
    }
    submitLogin(_) {
        this.select.multiple = !this.select.multiple;
    }
    render() {
        return h("stellar-layout", { size: "tiny", padding: "large", align: "center", class: "mv6 dib w-100" }, h("stellar-theme", { body: true, system: true, base: "orange", complement: "violet" }), h("copy-wrap", { align: "center" }, h("h1", { class: "mb4" }, "Sign in to Your Account"), h("stellar-form", { ajax: true, onSubmitted: (e) => { this.submitLogin(e); } }, h("stellar-grid", { cols: "1", noresponsive: true }, h("stellar-select", { name: "config[query][metric_category]", overlay: true, fit: true, wrap: true, autoSelectFirst: true, label: "Metric Category", placeholder: "Select a metric category", novalidate: true, tooltip: "Select a metric category to view the related card type and metric options." }, h("stellar-item", { fit: true, wrap: true, selected: true, value: "Nice" }, "Nice"), h("stellar-item", { fit: true, wrap: true, value: "Awesome" }, "Awesome"), h("stellar-item", { fit: true, wrap: true, value: "Sick" }, "Sick"), h("stellar-item", { fit: true, wrap: true, value: "Cool" }, "Cool")), h("stellar-button", { tag: "submit" }, "submit")))));
    }
    get element() { return getElement(this); }
};

export { Testington as stellar_tester };
