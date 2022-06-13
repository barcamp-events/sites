import { h, Host } from "@stencil/core";
import { titleCase, colors } from '../../../utils';
import Tunnel from '../../theme';
export class Avatar {
    constructor() {
        this.notooltip = false;
        this.color = "auto";
        this.name = "Stellar";
        this.initials = "ST";
        this.shape = "square";
        this.processing = false;
        this.dark = false;
        this.colorAuto = false;
    }
    componentWillLoad() {
        this.colors = Object.keys(colors).filter((color) => {
            // @ts-ignore
            return !["base", "white", "black"].includes(color);
        });
        if (this.color === "auto") {
            this.colorAuto = true;
        }
        this.formatName();
    }
    formatName() {
        if (this.processing) {
            this.initials = "";
            return;
        }
        if (this.color === "auto" || this.colorAuto) {
            this.colorAuto = true;
            this.color = this.colors[this.name.length % this.colors.length];
        }
        if (!this.name.length) {
            this.initials = "ST";
        }
        else {
            var the_name = titleCase(this.name);
            if (this.size === "large" || this.size === "medium") {
                this.initials = the_name.replace(/[^A-Z]/g, '').substring(0, 2);
            }
            else {
                this.initials = the_name.substring(0, 1);
            }
        }
        if (this.shape === "star" || this.shape === "diamond") {
            this.initials = this.initials.substring(0, 1);
        }
    }
    render() {
        return h(Host, { class: `theme-${this.color}` },
            h("button", { class: "wrapper", title: `You tabbed on an Avatar for ${this.name}`, onFocus: () => { this.focus = true; }, onBlur: () => { this.focus = false; } },
                this.processing && h("div", { class: "processing" },
                    h("stellar-avatar", { src: "Loading" })),
                h("div", { class: "content" },
                    h("div", { class: "spacer" }),
                    h("div", { class: "letter", title: this.name }, this.initials),
                    this.src && h("img", { src: this.src, alt: this.name })),
                !this.notooltip && h("stellar-tooltip", { focused: this.focus }, this.name)));
    }
    static get is() { return "stellar-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["avatar.css"]
    }; }
    static get styleUrls() { return {
        "$": ["avatar.css"]
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
            "reflect": false
        },
        "notooltip": {
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
            "attribute": "notooltip",
            "reflect": false,
            "defaultValue": "false"
        },
        "size": {
            "type": "string",
            "mutable": true,
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
        "color": {
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
            "attribute": "color",
            "reflect": true,
            "defaultValue": "\"auto\""
        },
        "name": {
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
            "attribute": "name",
            "reflect": true,
            "defaultValue": "\"Stellar\""
        },
        "initials": {
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
            "attribute": "initials",
            "reflect": true,
            "defaultValue": "\"ST\""
        },
        "shape": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"circle\"|\"square\"|\"rectangle\"|\"diamond\"|\"hexagon\"|\"star\"|\"message\"",
                "resolved": "\"circle\" | \"diamond\" | \"hexagon\" | \"message\" | \"rectangle\" | \"square\" | \"star\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "shape",
            "reflect": true,
            "defaultValue": "\"square\""
        },
        "processing": {
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
            "attribute": "processing",
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
        "colorAuto": {},
        "colors": {},
        "focus": {}
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "name",
            "methodName": "formatName"
        }]; }
}
Tunnel.injectProps(Avatar, ['dark']);
