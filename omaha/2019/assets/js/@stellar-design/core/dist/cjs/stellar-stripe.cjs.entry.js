'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

const style = {
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
const classes = {
    focus: 'focused',
    empty: 'empty',
    invalid: 'invalid',
};

const Card = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
            style: style,
            classes: classes,
            hidePostalCode: true,
        });
        this.card.mount(this.element.querySelector('#card'));
    }
    renderPhone() {
        return (core.h("stellar-input", { id: "phone", "data-tid": "stellar_stripe.form.phone", type: "tel", placeholder: "(941) 555-0123", required: true, label: "Phone number" }));
    }
    renderZip() {
        return (core.h("stellar-input", { id: "zip", "data-tid": "stellar_stripe.form.postal_code", type: "text", placeholder: "94107", required: true, label: "ZIP" }));
    }
    render() {
        return (core.h("div", null, core.h("input", { type: "hidden", class: "token", name: this.name, value: this.value }), core.h("div", { class: "field" }, core.h("label", { "data-for": "stellar_stripe.form.card" }, core.h("p", { class: "label" }, "Card details")), core.h("div", { "data-tid": "stellar_stripe.form.card", id: "card", class: "input" }), this.error && core.h("p", { class: "validation" }, core.h("span", null, this.error))), core.h("stellar-grid", null, this.renderPhone(), this.renderZip())));
    }
    get element() { return core.getElement(this); }
    static get style() { return "stellar-stripe{display:block}stellar-stripe .field{position:relative;margin-bottom:30px;width:100%}stellar-stripe label{display:block;margin-bottom:10px;line-height:1.69;color:#484849;color:var(--gray5);font-size:13px;font-weight:600}stellar-stripe .input{border:1px solid var(--gray2);border-radius:4px}stellar-stripe .input::-webkit-input-placeholder{-webkit-transition:color .3s cubic-bezier(.165,.84,.44,1);transition:color .3s cubic-bezier(.165,.84,.44,1);color:transparent}stellar-stripe .input::-moz-placeholder{-webkit-transition:color .3s cubic-bezier(.165,.84,.44,1);transition:color .3s cubic-bezier(.165,.84,.44,1);color:transparent}stellar-stripe .input:-ms-input-placeholder{-webkit-transition:color .3s cubic-bezier(.165,.84,.44,1);transition:color .3s cubic-bezier(.165,.84,.44,1);color:transparent}stellar-stripe .input.StripeElement{display:-ms-flexbox;display:flex;top:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:20px;height:100%}stellar-stripe .input.StripeElement>div{width:100%}stellar-stripe .input.focused::-webkit-input-placeholder,stellar-stripe .input:not(.empty)::-webkit-input-placeholder{color:var(--gray2)}stellar-stripe .input.focused::-moz-placeholder,stellar-stripe .input:not(.empty)::-moz-placeholder{color:var(--gray2)}stellar-stripe .input.focused:-ms-input-placeholder,stellar-stripe .input:not(.empty):-ms-input-placeholder{color:var(--gray2)}stellar-stripe .input.focused+label,stellar-stripe .input:not(.empty)+label{cursor:default;-webkit-transform:scale(.85) translateY(-25px);transform:scale(.85) translateY(-25px);color:#aab7c4}stellar-stripe .input.focused+label{color:#24b47e}stellar-stripe .input.invalid+label{color:#ffa27b}stellar-stripe .input.focused+label+.baseline{background-color:#24b47e}stellar-stripe .input.focused.invalid+label+.baseline{background-color:#e25950}stellar-stripe .input input{appearance:none;-webkit-appearance:none;outline:none;border-style:none;-moz-appearance:none}stellar-stripe .validation{margin-top:10px;margin-bottom:0;color:var(--red5);font-size:14px;font-weight:500}stellar-stripe .validation span{display:block;padding:10px 0;line-height:1.4}stellar-stripe .validation span+span{border-top:1px solid var(--gray1)}"; }
};

exports.stellar_stripe = Card;
