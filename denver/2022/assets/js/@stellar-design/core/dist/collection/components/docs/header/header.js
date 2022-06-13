import { h } from "@stencil/core";
import Tunnel from '../dependencies';
export class DocsHeader {
    constructor() {
        this.theme = "red";
        this.complement = "indigo";
        this.max = 10;
        this.value = 0;
    }
    handleTheming() {
        document.querySelector('body').setAttribute('class', `theme-${this.theme} complement-${this.complement}`);
    }
    render() {
        return this.ready && [
            h("stellar-message", { striped: true, type: "alert", size: "full" },
                h("stellar-asset", { name: "happy" }),
                h("p", null, "Stellar is still an alpha product - some things may change! We'll do out best to notify you when something changes."),
                h("stellar-button", { size: "tiny", pill: true },
                    "See change log ",
                    h("stellar-asset", { name: "arrow-forward", align: "right" }))),
            h("stellar-layout", { size: "large", class: "relative mb5", type: "sidebar-right" },
                h("stellar-starscape", null),
                h("copy-wrap", { class: "mv5" },
                    h("slot", { name: "title" },
                        h("h1", { class: "flex fs-massive" },
                            h("div", { class: "flex mr4 flex-column items-center" },
                                h("stellar-icon", { src: "/global/vector/mark.svg" }),
                                h("stellar-tag", { color: "blue5", class: "mt4" },
                                    "v",
                                    this.package && this.package.version)),
                            h("div", null,
                                h("h1", { class: "fw7 lh-solid theme-base0" }, "Stellar"),
                                h("h3", { class: "db fs4 fw7 theme-complement2 w-100" }, "A Beautiful, Complete Design System"),
                                h("stellar-code-block", { simple: true, class: "w-60", codeString: `npm install @stellar-design/core`, language: "bash" }))))),
                h("stellar-card", null,
                    h("stellar-grid", { compact: true },
                        h("stellar-select", { label: "Primary color", resize: true, onUpdate: (e) => { this.theme = e.detail; }, size: "small", overlay: true },
                            h("stellar-item", { value: "red", selected: true }, "Red"),
                            h("stellar-item", { value: "orange" }, "Orange"),
                            h("stellar-item", { value: "yellow" }, "Yellow"),
                            h("stellar-item", { value: "lime" }, "Lime"),
                            h("stellar-item", { value: "green" }, "Green"),
                            h("stellar-item", { value: "teal" }, "Teal"),
                            h("stellar-item", { value: "cyan" }, "Cyan"),
                            h("stellar-item", { value: "blue" }, "Blue"),
                            h("stellar-item", { value: "indigo" }, "Indigo"),
                            h("stellar-item", { value: "violet" }, "Violet"),
                            h("stellar-item", { value: "fuchsia" }, "Fuchsia"),
                            h("stellar-item", { value: "pink" }, "Pink"),
                            h("stellar-item", { value: "gray" }, "Gray")),
                        h("stellar-select", { label: "Secondary color", resize: true, onUpdate: (e) => { this.complement = e.detail; }, size: "small", overlay: true },
                            h("stellar-item", { value: "red" }, "Red"),
                            h("stellar-item", { value: "orange" }, "Orange"),
                            h("stellar-item", { value: "yellow" }, "Yellow"),
                            h("stellar-item", { value: "lime" }, "Lime"),
                            h("stellar-item", { value: "green" }, "Green"),
                            h("stellar-item", { value: "teal" }, "Teal"),
                            h("stellar-item", { value: "cyan" }, "Cyan"),
                            h("stellar-item", { value: "blue" }, "Blue"),
                            h("stellar-item", { value: "indigo", selected: true }, "Indigo"),
                            h("stellar-item", { value: "violet" }, "Violet"),
                            h("stellar-item", { value: "fuchsia" }, "Fuchsia"),
                            h("stellar-item", { value: "pink" }, "Pink"),
                            h("stellar-item", { value: "gray" }, "Gray")))))
        ];
    }
    static get is() { return "stellar-docs-header"; }
    static get properties() { return {
        "theme": {
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
            "attribute": "theme",
            "reflect": false,
            "defaultValue": "\"red\""
        },
        "complement": {
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
            "attribute": "complement",
            "reflect": false,
            "defaultValue": "\"indigo\""
        },
        "mark": {
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
            "attribute": "mark",
            "reflect": false
        },
        "max": {
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
            "attribute": "max",
            "reflect": false,
            "defaultValue": "10"
        },
        "value": {
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
            "attribute": "value",
            "reflect": false,
            "defaultValue": "0"
        },
        "package": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "package",
            "reflect": false
        },
        "ready": {
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
            "attribute": "ready",
            "reflect": false
        }
    }; }
    static get watchers() { return [{
            "propName": "theme",
            "methodName": "handleTheming"
        }, {
            "propName": "complement",
            "methodName": "handleTheming"
        }]; }
}
Tunnel.injectProps(DocsHeader, ['package', 'ready']);
