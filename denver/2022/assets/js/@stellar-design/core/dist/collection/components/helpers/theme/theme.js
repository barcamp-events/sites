import { h, Host } from "@stencil/core";
import Tunnel from '../../theme';
import { colors } from '../../../utils/colors';
export class Theme {
    constructor() {
        this.dark = false;
        this.light = false;
        this.body = false;
        this.system = false;
        this.base = "indigo";
        this.complement = "red";
        this.htmlEl = document.querySelector('html');
        this.bodyEl = document.querySelector('body');
    }
    componentWillLoad() {
        if (this.system) {
            this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.light = window.matchMedia('(prefers-color-scheme: light)').matches;
        }
        this.observeDark();
        this.observeColors();
    }
    observeColors() {
        const options = Object.keys(colors);
        if (this.body) {
            options.forEach((color) => {
                this.htmlEl.classList.remove(`theme-${color}`);
                this.htmlEl.classList.remove(`complement-${color}`);
                this.bodyEl.classList.remove(`theme-${color}`);
                this.bodyEl.classList.remove(`complement-${color}`);
            });
            this.bodyEl.classList.add(`theme-${this.base}`);
            this.bodyEl.classList.add(`complement-${this.complement}`);
        }
    }
    observeDark() {
        if (this.body && this.dark) {
            this.htmlEl.classList.add('dark-mode');
            this.bodyEl.classList.add('dark-mode');
        }
        else {
            this.htmlEl.classList.remove('dark-mode');
            this.bodyEl.classList.remove('dark-mode');
        }
        if (this.body && this.light) {
            this.htmlEl.classList.add('light-mode');
            this.bodyEl.classList.add('light-mode');
        }
        else {
            this.htmlEl.classList.remove('light-mode');
            this.bodyEl.classList.remove('light-mode');
        }
    }
    render() {
        return h(Host, { class: `${this.dark ? "dark-mode" : ""} ${this.light ? "light-mode" : ""} theme-${this.base} complement-${this.complement}` },
            h(Tunnel.Provider, { state: { dark: this.dark, light: this.light } },
                h("slot", null)));
    }
    static get is() { return "stellar-theme"; }
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
            "reflect": false,
            "defaultValue": "false"
        },
        "light": {
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
            "attribute": "light",
            "reflect": false,
            "defaultValue": "false"
        },
        "body": {
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
            "attribute": "body",
            "reflect": false,
            "defaultValue": "false"
        },
        "system": {
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
            "attribute": "system",
            "reflect": false,
            "defaultValue": "false"
        },
        "base": {
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
            "attribute": "base",
            "reflect": false,
            "defaultValue": "\"indigo\""
        },
        "complement": {
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
            "attribute": "complement",
            "reflect": false,
            "defaultValue": "\"red\""
        }
    }; }
    static get states() { return {
        "htmlEl": {},
        "bodyEl": {}
    }; }
    static get watchers() { return [{
            "propName": "base",
            "methodName": "observeColors"
        }, {
            "propName": "complement",
            "methodName": "observeColors"
        }, {
            "propName": "dark",
            "methodName": "observeDark"
        }]; }
}
