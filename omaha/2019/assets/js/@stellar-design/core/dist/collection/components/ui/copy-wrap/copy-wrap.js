import { h } from "@stencil/core";
export class CopyWrap {
    constructor() {
        this.align = "left";
        this.full = false;
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "copy-wrap"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["copy-wrap.css"]
    }; }
    static get styleUrls() { return {
        "$": ["copy-wrap.css"]
    }; }
    static get properties() { return {
        "align": {
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
            "attribute": "align",
            "reflect": true,
            "defaultValue": "\"left\""
        },
        "full": {
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
            "attribute": "full",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
}
