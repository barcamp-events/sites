import { h } from "@stencil/core";
import Tunnel from '../../theme';
export class Button {
    constructor() {
        /**
         * Allows the button to render for different tags.
         */
        this.tag = "link";
        /**
         * Sets accessibility options on the buttons
         */
        this.label = 'Submit';
        /**
         * Sets the name on the button if the button is an input. Allows the button to act as an item in a form.
         */
        this.name = '';
        /**
         * Sets the value on the button if the button is an input.
         */
        this.value = '';
        /**
         * Sets the href on the anchor tag if the button is a link.
         */
        this.href = '#';
        /**
         * Sets the target on the anchor tag if the button is a link.
         */
        this.target = '_self';
        /**
         * Sets the button or link as a button with only an icon.
         */
        this.icon = false;
        /**
         * Sets the button or link as an active state.
         */
        this.active = false;
        /**
         * Sets the button or link as disabled and not-interactable.
         */
        this.disabled = false;
        /**
         * Sets the button or link to provide the affordance of a dangerous action.
         */
        this.danger = false;
        /**
         * Sets the button or link to render as a pill.
         */
        this.pill = false;
        /**
         * Sets the button or link to render at full width to the parent.
         */
        this.block = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.outline = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.invert = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.contrast = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        /**
         * Sets the button or link as processing when clicked.
         */
        this.processable = false;
        this.processing = false;
        this.ghost = false;
    }
    componentWillLoad() {
        this.icon = this.element.querySelectorAll('stellar-asset').length > 0;
    }
    async click() {
        if (this.processable) {
            this.processing = true;
        }
        if (this.for) {
            const target = this.for.split(":");
            if (target[0] === "modal") {
                // @ts-ignore
                const modal = document.querySelector(`stellar-modal[name="${target[1]}"]`);
                modal.open();
            }
        }
        if (this.tag === "submit") {
            // @ts-ignore
            this.element.closest('stellar-form').submit_form();
        }
        if (this.tag === "link") {
            window.location.href = this.href;
        }
        return true;
    }
    renderSVG() {
        return (h("stellar-asset", { src: "Loading", color: "white" }));
    }
    renderButton() {
        return (h("button", { type: "button", class: "button", title: this.label, disabled: this.disabled, onClick: () => { this.click(); } },
            h("div", { class: "content" },
                h("slot", null, "Submit")),
            this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderSubmit() {
        return (h("button", { type: "submit", class: "button", title: this.label, disabled: this.disabled, name: this.name, value: this.value, onClick: () => { this.click(); } },
            h("div", { class: "content" },
                h("slot", null, "Submit")),
            this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderLink() {
        return (h("a", { href: this.href, target: this.target, class: "button", "data-disabled": this.disabled, title: this.label, onClick: () => { this.click(); } },
            h("div", { class: "content" },
                h("slot", null, "Submit")),
            this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderAppLink() {
        return (h("stencil-route-link", { url: this.href, anchorClass: "button", "data-disabled": this.disabled, title: this.label, onClick: () => { this.click(); } },
            h("div", { class: "content" },
                h("slot", null, "Submit")),
            this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderSpan() {
        return (h("span", { class: "button", title: this.label, "data-disabled": this.disabled, "aria-label": `Button ${this.label} ${this.element.textContent}`, tabIndex: 0, onClick: () => { this.click(); } },
            h("div", { class: "content" },
                h("slot", null, "Submit")),
            this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    render() {
        return [
            this.tag === "button" && this.renderButton(),
            this.tag === "submit" && this.renderSubmit(),
            this.tag === "link" && this.renderLink(),
            this.tag === "route-link" && this.renderAppLink(),
            this.tag === "span" && this.renderSpan()
        ];
    }
    static get is() { return "stellar-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
        "tag": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"button\"|\"submit\"|\"link\"|\"span\"|\"route-link\"",
                "resolved": "\"button\" | \"link\" | \"route-link\" | \"span\" | \"submit\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Allows the button to render for different tags."
            },
            "attribute": "tag",
            "reflect": false,
            "defaultValue": "\"link\""
        },
        "label": {
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
                "text": "Sets accessibility options on the buttons"
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "'Submit'"
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
                "text": "Sets the name on the button if the button is an input. Allows the button to act as an item in a form."
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "''"
        },
        "value": {
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
                "text": "Sets the value on the button if the button is an input."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
        },
        "href": {
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
                "text": "Sets the href on the anchor tag if the button is a link."
            },
            "attribute": "href",
            "reflect": false,
            "defaultValue": "'#'"
        },
        "for": {
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
                "text": "Sets the href on the anchor tag if the button is a link."
            },
            "attribute": "for",
            "reflect": false
        },
        "target": {
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
                "text": "Sets the target on the anchor tag if the button is a link."
            },
            "attribute": "target",
            "reflect": false,
            "defaultValue": "'_self'"
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"tiny\"|\"small\"|\"medium\"|\"large\"",
                "resolved": "\"large\" | \"medium\" | \"small\" | \"tiny\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the size of the button. Can be tiny, small, medium, or large."
            },
            "attribute": "size",
            "reflect": true
        },
        "padding": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"tiny\"|\"small\"|\"medium\"|\"large\"",
                "resolved": "\"large\" | \"medium\" | \"small\" | \"tiny\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the padding inside of the button. Can be small, medium, or large."
            },
            "attribute": "padding",
            "reflect": true
        },
        "icon": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the button or link as a button with only an icon."
            },
            "attribute": "icon",
            "reflect": true,
            "defaultValue": "false"
        },
        "active": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the button or link as an active state."
            },
            "attribute": "active",
            "reflect": true,
            "defaultValue": "false"
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the button or link as disabled and not-interactable."
            },
            "attribute": "disabled",
            "reflect": true,
            "defaultValue": "false"
        },
        "danger": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the button or link to provide the affordance of a dangerous action."
            },
            "attribute": "danger",
            "reflect": true,
            "defaultValue": "false"
        },
        "pill": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the button or link to render as a pill."
            },
            "attribute": "pill",
            "reflect": true,
            "defaultValue": "false"
        },
        "block": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the button or link to render at full width to the parent."
            },
            "attribute": "block",
            "reflect": true,
            "defaultValue": "false"
        },
        "outline": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the button or link as an outlined button."
            },
            "attribute": "outline",
            "reflect": true,
            "defaultValue": "false"
        },
        "invert": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the button or link as an outlined button."
            },
            "attribute": "invert",
            "reflect": true,
            "defaultValue": "false"
        },
        "contrast": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the button or link as an outlined button."
            },
            "attribute": "contrast",
            "reflect": true,
            "defaultValue": "false"
        },
        "dark": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the button or link as an outlined button."
            },
            "attribute": "dark",
            "reflect": true,
            "defaultValue": "false"
        },
        "processable": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the button or link as processing when clicked."
            },
            "attribute": "processable",
            "reflect": false,
            "defaultValue": "false"
        },
        "ghost": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "ghost",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "processing": {}
    }; }
    static get elementRef() { return "element"; }
}
Tunnel.injectProps(Button, ['dark']);
