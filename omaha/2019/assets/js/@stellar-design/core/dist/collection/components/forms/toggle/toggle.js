import { h } from "@stencil/core";
import Tunnel from '../../theme';
export class Toggle {
    constructor() {
        this.type = "checkbox";
        this.name = "";
        this.stacked = false;
        this.flip = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.card = "div";
        this.valid = true;
    }
    componentWillLoad() {
        const options = this.element.querySelectorAll('stellar-toggle-option');
        const values = [];
        // @ts-ignore
        options.forEach((option) => {
            option.type = this.type;
            option.for = this.name;
            if (option.checked) {
                values.push(option.value);
            }
        });
        this.value = values;
    }
    async validate() {
        this.status = {
            name: this.name,
            value: this.value,
            valid: this.valid,
            errors: [],
        };
        return this.status;
    }
    toggleChangedHandler(event) {
        if (event.detail && event.detail.element) {
            const options = Array.from(this.element.querySelectorAll('stellar-toggle-option'));
            options.filter(el => el !== event.detail.element).forEach((option) => {
                option.confirm();
            });
            const values = [];
            this.value = [];
            if (this.type === "checkbox" || this.type === "checkbox-block") {
                // @ts-ignore
                options.forEach((option) => {
                    if (option === event.detail.element && event.detail.element.checked) {
                        values.push(event.detail.value);
                    }
                });
            }
            else if (this.type === "radio" || this.type === "radio-block") {
                if (event.detail.element.checked) {
                    values.push(event.detail.value);
                }
            }
            this.value = values;
            this.update.emit(this.value);
        }
    }
    updateChecked() {
        const options = this.element.querySelectorAll('stellar-toggle-option');
        // @ts-ignore
        options.forEach((option) => {
            option.type = this.type;
            option.for = this.name;
        });
    }
    renderValidation() {
        if (this.error) {
            return (h("p", { class: "validation" }, this.error));
        }
    }
    renderBlock() {
        return (h("div", null,
            this.renderValidation(),
            h(this.card, { padding: "tiny" },
                h("stellar-grid", { cols: this.stacked ? "1" : "auto", compact: true },
                    h("slot", null)))));
    }
    renderPlain() {
        return [
            h("slot", null),
            this.renderValidation()
        ];
    }
    render() {
        return [
            this.label && h("stellar-label", null, this.label),
            h("div", { "data-type": this.type, onClick: e => { e.stopPropagation(); } },
                ["radio", "checkbox"].indexOf(this.type) === -1 && this.renderBlock(),
                ["radio", "checkbox"].indexOf(this.type) !== -1 && this.renderPlain()),
            this.description && h("stellar-label", { size: "small", underneath: true }, this.description)
        ];
    }
    static get is() { return "stellar-toggle"; }
    static get originalStyleUrls() { return {
        "$": ["toggle.css"]
    }; }
    static get styleUrls() { return {
        "$": ["toggle.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string|\"checkbox\"|\"radio\"|\"radio-block\"|\"checkbox-block\"",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "\"checkbox\""
        },
        "name": {
            "type": "string",
            "mutable": true,
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
            "reflect": true,
            "defaultValue": "\"\""
        },
        "description": {
            "type": "string",
            "mutable": true,
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
            "attribute": "description",
            "reflect": false
        },
        "stacked": {
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
            "attribute": "stacked",
            "reflect": true,
            "defaultValue": "false"
        },
        "flip": {
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
            "attribute": "flip",
            "reflect": false,
            "defaultValue": "false"
        },
        "required": {
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
            "attribute": "required",
            "reflect": false
        },
        "single": {
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
            "attribute": "single",
            "reflect": false
        },
        "size": {
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
            "attribute": "size",
            "reflect": false
        },
        "novalidate": {
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
            "attribute": "novalidate",
            "reflect": true
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
        "card": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "card",
            "reflect": false,
            "defaultValue": "\"div\""
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
                "text": ""
            },
            "attribute": "label",
            "reflect": false
        },
        "value": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string|string[]",
                "resolved": "string | string[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "value",
            "reflect": false
        }
    }; }
    static get states() { return {
        "form": {},
        "valid": {},
        "error": {},
        "status": {}
    }; }
    static get events() { return [{
            "method": "update",
            "name": "update",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "validate": {
            "complexType": {
                "signature": "() => Promise<FormResult>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "FormResult": {
                        "location": "global"
                    }
                },
                "return": "Promise<FormResult>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "changeToggle",
            "method": "toggleChangedHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
Tunnel.injectProps(Toggle, ['dark']);
