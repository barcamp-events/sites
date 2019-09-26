import { h } from "@stencil/core";
import * as config from './config';
export class Card {
    constructor() {
        this.token = 'pk_test_6pRNASCoBOKtIshFeQd4XMUh';
        this.name = 'stripe';
        this.value = undefined;
        this.cardData = {};
        this.state = "preparing";
    }
    componentWillLoad() {
        this.stripe = window["Stripe"](this.token);
    }
    componentDidLoad() {
        this.connect();
    }
    async connect() {
        this.stripe = window["Stripe"](this.token);
        this.input = this.element.querySelector('.token');
        this.attachToForm();
        this.prepareStripe();
    }
    async getToken() {
        await this.stripe.createToken(this.card, this.cardData)
            .then(this.handleResponse.bind(this))
            .catch(this.handleError.bind(this));
        return this.value !== undefined;
    }
    attachToForm() {
        const form = this.element.closest("form");
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.getToken().then((result) => {
                    if (result) {
                        form.submit();
                    }
                });
            });
        }
        else {
            console.error("The stellar-stripe tag must be added to a form.");
        }
    }
    handleResponse({ error, token }) {
        if (error) {
            this.setError(error.message);
            // this.dispatchEvent(new ErrorEvent('stripe-error', {error, bubbles, composed}));
        }
        else {
            this.error = undefined;
            this.value = token.id;
            // this.dispatchEvent(new CustomEvent('stripe-token', {token, bubbles, composed}));
        }
    }
    handleError(error) {
        // this.dispatchEvent(new ErrorEvent('stripe-error', {error, bubbles, composed}));
        // Show error in UI
        this.setError(error.message);
    }
    async setError(error) {
        this.error = error;
    }
    prepareStripe() {
        var elements = this.stripe.elements({
            fonts: [
                {
                    cssSrc: 'https://fonts.googleapis.com/css?family=Open+Sans',
                },
            ],
            locale: 'auto'
        });
        this.card = elements.create('card', {
            style: config.style,
            classes: config.classes,
            hidePostalCode: true,
        });
        this.card.mount(this.element.querySelector('#card'));
    }
    renderPhone() {
        return (h("stellar-input", { id: "phone", "data-tid": "stellar_stripe.form.phone", type: "tel", placeholder: "(941) 555-0123", required: true, label: "Phone number" }));
    }
    renderZip() {
        return (h("stellar-input", { id: "zip", "data-tid": "stellar_stripe.form.postal_code", type: "text", placeholder: "94107", required: true, label: "ZIP" }));
    }
    render() {
        return (h("div", null,
            h("input", { type: "hidden", class: "token", name: this.name, value: this.value }),
            h("div", { class: "field" },
                h("label", { "data-for": "stellar_stripe.form.card" },
                    h("p", { class: "label" }, "Card details")),
                h("div", { "data-tid": "stellar_stripe.form.card", id: "card", class: "input" }),
                this.error && h("p", { class: "validation" },
                    h("span", null, this.error))),
            h("stellar-grid", null,
                this.renderPhone(),
                this.renderZip())));
    }
    static get is() { return "stellar-stripe"; }
    static get originalStyleUrls() { return {
        "$": ["stripe.css"]
    }; }
    static get styleUrls() { return {
        "$": ["stripe.css"]
    }; }
    static get properties() { return {
        "token": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "token",
            "reflect": false,
            "defaultValue": "'pk_test_6pRNASCoBOKtIshFeQd4XMUh'"
        },
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "'stripe'"
        }
    }; }
    static get states() { return {
        "input": {},
        "stripe": {},
        "error": {},
        "card": {},
        "value": {},
        "cardData": {},
        "state": {}
    }; }
    static get methods() { return {
        "connect": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "getToken": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "setError": {
            "complexType": {
                "signature": "(error: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
}
