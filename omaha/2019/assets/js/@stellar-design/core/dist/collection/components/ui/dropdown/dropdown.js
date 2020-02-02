import { h, Host } from "@stencil/core";
import { focusWithin } from '../../../utils';
import Tunnel from '../../theme';
focusWithin(document);
export class Dropdown {
    constructor() {
        this.position = "center";
        this.icon = false;
        this.iconName = "arrow-down";
        this.label = "Dropdown";
        this.open = false;
        this.dark = false;
        this.footer = false;
    }
    componentWillLoad() {
        this.footer = this.element.querySelectorAll('[slot="footer"]').length !== 0;
    }
    componentDidLoad() {
        focusWithin(document);
    }
    onToggle() {
        this.open = !this.open;
    }
    render() {
        return h(Host, { "aria-label": this.label, class: "dropdown", title: this.label },
            h("div", { class: "toggle" },
                h("slot", { name: "handle" }),
                this.icon && h("stellar-asset", { name: this.iconName, class: "caret" })),
            h("div", { class: "clipper" },
                h("div", { class: "list-wrap" },
                    h("ul", { class: "list" },
                        h("slot", null),
                        this.footer && h("div", { class: "footer" },
                            h("slot", { name: "footer" }))))));
    }
    static get is() { return "stellar-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dropdown.css"]
    }; }
    static get styleUrls() { return {
        "$": ["dropdown.css"]
    }; }
    static get properties() { return {
        "position": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"left\"|\"center\"|\"right\"",
                "resolved": "\"center\" | \"left\" | \"right\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "position",
            "reflect": true,
            "defaultValue": "\"center\""
        },
        "icon": {
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
            "attribute": "icon",
            "reflect": false,
            "defaultValue": "false"
        },
        "iconName": {
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
            "attribute": "icon-name",
            "reflect": false,
            "defaultValue": "\"arrow-down\""
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
            "defaultValue": "\"Dropdown\""
        },
        "open": {
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
            "attribute": "open",
            "reflect": true,
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
        }
    }; }
    static get states() { return {
        "footer": {}
    }; }
    static get elementRef() { return "element"; }
}
Tunnel.injectProps(Dropdown, ['dark']);
