import { h } from "@stencil/core";
export class GroupOverflow {
    constructor() {
        this.size = "medium";
    }
    render() {
        return (h("div", { class: "wrapper" },
            h("div", { class: "content" },
                h("div", { class: "count" },
                    "+",
                    this.count,
                    " more"),
                h("div", { class: "spacer" })),
            h("stellar-tooltip", null,
                h("slot", null))));
    }
    static get is() { return "stellar-group-overflow"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["group-overflow.css"]
    }; }
    static get styleUrls() { return {
        "$": ["group-overflow.css"]
    }; }
    static get properties() { return {
        "count": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "count",
            "reflect": false
        },
        "size": {
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
            "attribute": "size",
            "reflect": true,
            "defaultValue": "\"medium\""
        }
    }; }
    static get elementRef() { return "element"; }
}
