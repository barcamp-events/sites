import { h } from "@stencil/core";
import Tunnel from '../../theme';
export class Breadcrumbs {
    constructor() {
        this.icon = 'analytics';
        this.icon_size = 0.85;
        this.tag = "link";
        this.home = "/";
        this.label = "Home";
        this.description = "An icon that shows the main page you're on";
        this.dark = false;
        this.color = "blue5";
    }
    componentWillLoad() {
        this.updateBreadcrumbs();
    }
    updateBreadcrumbs() {
        const last_breadcrumb = this.el.querySelector('stellar-breadcrumb:last-of-type');
        const breadcrumbs = this.el.querySelectorAll('stellar-breadcrumb');
        Array.from(breadcrumbs).forEach((breadcrumb) => {
            breadcrumb.last = false;
        });
        if (last_breadcrumb) {
            last_breadcrumb.last = true;
        }
    }
    render() {
        return (h("div", { id: "breadcumb_wrapper", class: "breadcrumbs" },
            h("div", { class: "flush-left" }),
            h("stellar-breadcrumb", { first: true, tag: this.tag },
                h("stellar-asset", { id: "icon", name: this.icon, src: this.icon_src, color: this.color }),
                h("stellar-label", { size: this.size }, this.label)),
            h("slot", null),
            h("div", { class: "flush" })));
    }
    static get is() { return "stellar-breadcrumbs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["breadcrumbs.css"]
    }; }
    static get styleUrls() { return {
        "$": ["breadcrumbs.css"]
    }; }
    static get properties() { return {
        "icon": {
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
            "attribute": "icon",
            "reflect": false,
            "defaultValue": "'analytics'"
        },
        "icon_src": {
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
            "attribute": "icon_src",
            "reflect": false
        },
        "icon_size": {
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
            "attribute": "icon_size",
            "reflect": false,
            "defaultValue": "0.85"
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
        "home": {
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
            "attribute": "home",
            "reflect": false,
            "defaultValue": "\"/\""
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
            "reflect": false,
            "defaultValue": "\"Home\""
        },
        "description": {
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
            "attribute": "description",
            "reflect": false,
            "defaultValue": "\"An icon that shows the main page you're on\""
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"tiny\"|\"small\"|\"medium\"|\"large\"",
                "resolved": "\"large\" | \"medium\" | \"small\" | \"tiny\"",
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
                "text": ""
            },
            "attribute": "dark",
            "reflect": true,
            "defaultValue": "false"
        },
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
            "reflect": false,
            "defaultValue": "\"blue5\""
        }
    }; }
    static get elementRef() { return "el"; }
}
Tunnel.injectProps(Breadcrumbs, ['dark']);
