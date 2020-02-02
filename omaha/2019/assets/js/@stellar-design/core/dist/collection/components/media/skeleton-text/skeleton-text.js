import { h } from "@stencil/core";
import properties from 'css-custom-properties';
export class SkeletonText {
    constructor() {
        this.as = 'p';
        this.width = 100;
        this.loading = false;
    }
    componentWillLoad() {
        properties.set({
            '--width': `${this.width}%`
        }, this.element);
    }
    in() { this.element.classList.add('visible'); }
    out() { this.element.classList.remove('visible'); }
    render() {
        return h("span", null,
            "\u00A0",
            h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) }));
    }
    static get is() { return "skeleton-text"; }
    static get originalStyleUrls() { return {
        "$": ["skeleton-text.css"]
    }; }
    static get styleUrls() { return {
        "$": ["skeleton-text.css"]
    }; }
    static get properties() { return {
        "as": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "as",
            "reflect": true,
            "defaultValue": "'p'"
        },
        "width": {
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
            "attribute": "width",
            "reflect": true,
            "defaultValue": "100"
        },
        "loading": {
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
            "attribute": "loading",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "element"; }
}
