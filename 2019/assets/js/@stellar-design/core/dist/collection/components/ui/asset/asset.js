import { h } from "@stencil/core";
export class Asset {
    constructor() {
        this.name = "person";
        this.language = "ios-";
        this.block = false;
    }
    componentWillLoad() {
        this.ariaLabel = this.name
            .replace('ios-', '')
            .replace('md-', '')
            .replace(/\-/g, ' ');
    }
    render() {
        return (h("div", { class: "icon-wrap" },
            h("stellar-icon", { src: this.src, name: this.name, ariaLabel: this.ariaLabel, "aria-label": this.ariaLabel })));
    }
    static get is() { return "stellar-asset"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["asset.css"]
    }; }
    static get styleUrls() { return {
        "$": ["asset.css"]
    }; }
    static get properties() { return {
        "src": {
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
            "attribute": "src",
            "reflect": true
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
            "reflect": true,
            "defaultValue": "\"person\""
        },
        "language": {
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
            "attribute": "language",
            "reflect": true,
            "defaultValue": "\"ios-\""
        },
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
            "reflect": true
        },
        "ariaLabel": {
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
            "attribute": "aria-label",
            "reflect": true
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
                "text": ""
            },
            "attribute": "block",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
