import { h } from "@stencil/core";
import Tunnel from '../../theme';
export class Label {
    constructor() {
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
    }
    render() {
        // @ts-ignore
        return h("label", { for: this.for },
            h("slot", null));
    }
    static get is() { return "stellar-label"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["label.css"]
    }; }
    static get styleUrls() { return {
        "$": ["label.css"]
    }; }
    static get properties() { return {
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
                "text": ""
            },
            "attribute": "for",
            "reflect": false
        },
        "underneath": {
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
            "attribute": "underneath",
            "reflect": true
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
}
Tunnel.injectProps(Label, ['dark']);
