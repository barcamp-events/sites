import { h } from "@stencil/core";
import Rellax from 'rellax';
export class Parallax {
    constructor() {
        this.horizontal = false;
        this.center = false;
    }
    componentWillLoad() {
        this.relax = new Rellax('stellar-parallax-section', {
            center: this.center,
            horizontal: this.horizontal
        });
    }
    componentDidLoad() {
        this.reload();
    }
    async reload() {
        this.relax.refresh();
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "stellar-parallax"; }
    static get originalStyleUrls() { return {
        "$": ["parallax.css"]
    }; }
    static get styleUrls() { return {
        "$": ["parallax.css"]
    }; }
    static get properties() { return {
        "horizontal": {
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
            "attribute": "horizontal",
            "reflect": false,
            "defaultValue": "false"
        },
        "center": {
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
            "attribute": "center",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "relax": {}
    }; }
    static get methods() { return {
        "reload": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
