import { h } from "@stencil/core";
import Tunnel from '../../theme';
export class Switch {
    constructor() {
        this.checked = false;
        this.checkedDefault = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
    }
    componentDidLoad() {
        if (this.checkedDefault) {
            this.checked = this.checkedDefault;
        }
    }
    async validate() {
        const status = {
            name: this.name,
            value: this.checked,
            valid: true,
            errors: [],
        };
        if (!this.novalidate) {
            // @ts-ignore
            if (!this.checked && this.required) {
                status.valid = false;
                status.errors.push({ message: 'This field is required.' });
            }
        }
        this.status = status;
        return this.status;
    }
    async activate() {
        this.checked = !this.checked;
    }
    handleChecked() {
        this.update.emit({
            checked: this.checked
        });
    }
    render() {
        return (h("label", { class: "label" },
            h("input", { type: "checkbox", name: this.name, checked: this.checked, tabindex: "-1", onClick: () => { this.activate(); } }),
            h("button", { type: "button", onClick: () => { this.activate(); } },
                h("span", null,
                    this.checked && h("stellar-asset", { name: "checkmark" }),
                    !this.checked && h("stellar-asset", { name: "close" }))),
            h("slot", null)));
    }
    static get is() { return "stellar-switch"; }
    static get originalStyleUrls() { return {
        "$": ["switch.css"]
    }; }
    static get styleUrls() { return {
        "$": ["switch.css"]
    }; }
    static get properties() { return {
        "checked": {
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
                "text": ""
            },
            "attribute": "checked",
            "reflect": true,
            "defaultValue": "false"
        },
        "checkedDefault": {
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
            "attribute": "checked-default",
            "reflect": false,
            "defaultValue": "false"
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
            "reflect": true
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
        }
    }; }
    static get states() { return {
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
        },
        "activate": {
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
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "checked",
            "methodName": "handleChecked"
        }]; }
}
Tunnel.injectProps(Switch, ['dark']);
