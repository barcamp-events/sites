import { h } from "@stencil/core";
import Tunnel from '../../theme';
export class Callout {
    constructor() {
        this.dark = false;
        this.type = "default";
        this.theme = "gray";
    }
    componentDidLoad() {
        this.element.setAttribute('aria-label', `An ${this.type} message. ${this.element.textContent}`);
        this.element.setAttribute('aria-role', "status");
        this.element.setAttribute('tabindex', `0`);
        this.handleType();
        this.handleTheme();
    }
    handleTheme() {
        this.element.classList.forEach((c) => {
            if (c.startsWith('theme-')) {
                this.element.classList.remove(c);
            }
        });
        this.element.classList.add(`theme-${this.theme}`);
    }
    handleType() {
        switch (this.type) {
            case "alert":
                this.theme = "yellow";
                break;
            case "error":
                this.theme = "red";
                break;
            case "info":
                this.theme = "cyan";
                break;
            case "success":
                this.theme = "green";
                break;
            case "default":
            case undefined:
                this.theme = "gray";
                break;
            default:
                this.theme = "gray";
                break;
        }
    }
    render() {
        return (h("div", { class: "callout-wrap" },
            h("slot", null)));
    }
    static get is() { return "stellar-callout"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["callout.css"]
    }; }
    static get styleUrls() { return {
        "$": ["callout.css"]
    }; }
    static get properties() { return {
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
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"alert\"|\"error\"|\"info\"|\"success\"|\"default\"",
                "resolved": "\"alert\" | \"default\" | \"error\" | \"info\" | \"success\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "\"default\""
        }
    }; }
    static get states() { return {
        "theme": {}
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "theme",
            "methodName": "handleTheme"
        }, {
            "propName": "type",
            "methodName": "handleType"
        }]; }
}
Tunnel.injectProps(Callout, ['dark']);
