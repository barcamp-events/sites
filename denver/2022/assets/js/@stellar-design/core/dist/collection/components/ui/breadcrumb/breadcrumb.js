import { h } from "@stencil/core";
import Tunnel from '../../theme';
export class Breadcrumb {
    constructor() {
        this.href = "/";
        this.tag = "link";
        this.target = "_self";
        this.label = "Breadcrumb link";
        this.disabled = false;
        this.dark = false;
    }
    componentDidLoad() {
        this.label += ` for ${this.element.textContent}`;
    }
    getTag() {
        if (this.tag === "link") {
            return "a";
        }
        if (this.tag === "route") {
            return "stencil-route-link";
        }
    }
    render() {
        const Tag = this.getTag();
        // @ts-ignore
        return h(Tag, { class: "button", href: this.href, url: this.href, target: this.target, "aria-label": this.label, title: this.label, "data-disabled": this.disabled },
            h("slot", null));
    }
    static get is() { return "stellar-breadcrumb"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["breadcrumb.css"]
    }; }
    static get styleUrls() { return {
        "$": ["breadcrumb.css"]
    }; }
    static get properties() { return {
        "color": {
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
            "attribute": "color",
            "reflect": false
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
                "text": ""
            },
            "attribute": "href",
            "reflect": false,
            "defaultValue": "\"/\""
        },
        "tag": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"link\"|\"route\"",
                "resolved": "\"link\" | \"route\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "tag",
            "reflect": false,
            "defaultValue": "\"link\""
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
                "text": ""
            },
            "attribute": "target",
            "reflect": false,
            "defaultValue": "\"_self\""
        },
        "label": {
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
            "attribute": "label",
            "reflect": false,
            "defaultValue": "\"Breadcrumb link\""
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
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false,
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
                "text": ""
            },
            "attribute": "dark",
            "reflect": true,
            "defaultValue": "false"
        },
        "first": {
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
            "attribute": "first",
            "reflect": true
        },
        "last": {
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
            "attribute": "last",
            "reflect": true
        }
    }; }
    static get elementRef() { return "element"; }
}
Tunnel.injectProps(Breadcrumb, ['dark']);
