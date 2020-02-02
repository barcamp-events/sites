import { h } from "@stencil/core";
import Tunnel from '../../theme';
export class Tooltip {
    constructor() {
        this.align = "center";
        this.dark = false;
        this.focused = false;
    }
    render() {
        return (h("div", { class: "wrap" },
            h("div", { class: "after" }),
            h("slot", null)));
    }
    static get is() { return "stellar-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tooltip.css"]
    }; }
    static get styleUrls() { return {
        "$": ["tooltip.css"]
    }; }
    static get properties() { return {
        "align": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"left\"|\"center\"|\"right\"|\"middle-left\"|\"middle-center\"|\"middle-right\"|\"bottom-left\"|\"bottom-center\"|\"bottom-right\"",
                "resolved": "\"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"center\" | \"left\" | \"middle-center\" | \"middle-left\" | \"middle-right\" | \"right\"",
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
            "defaultValue": "\"center\""
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
                "text": ""
            },
            "attribute": "dark",
            "reflect": true,
            "defaultValue": "false"
        },
        "focused": {
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
            "attribute": "focused",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "element"; }
}
Tunnel.injectProps(Tooltip, ['dark']);
