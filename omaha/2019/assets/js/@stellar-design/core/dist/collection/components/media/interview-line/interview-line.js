import { h } from "@stencil/core";
export class InterviewLine {
    constructor() {
        this.in = 6000;
        this.out = 8300;
        this.complement = false;
    }
    render() {
        return (h("div", { class: "line", "data-start": this.in - 100, "data-end": this.in, "data-opacity-start": "0", "data-opacity-end": "1", "data-translatey-start": "10", "data-translatey-end": "0" },
            h("div", { class: "line", "data-start": this.out - 100, "data-end": this.out, "data-opacity-start": "1", "data-opacity-end": "0" },
                h("slot", null))));
    }
    static get is() { return "stellar-interview-line"; }
    static get originalStyleUrls() { return {
        "$": ["interview-line.css"]
    }; }
    static get styleUrls() { return {
        "$": ["interview-line.css"]
    }; }
    static get properties() { return {
        "in": {
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
            "attribute": "in",
            "reflect": false,
            "defaultValue": "6000"
        },
        "out": {
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
            "attribute": "out",
            "reflect": false,
            "defaultValue": "8300"
        },
        "complement": {
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
            "attribute": "complement",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "element"; }
}
