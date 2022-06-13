import { h } from "@stencil/core";
import properties from 'css-custom-properties';
export class LongShadow {
    constructor() {
        this.direction = "top-left";
        this.length = 100;
        this.delay = 100;
        this.timing = 50;
        this.active = false;
    }
    componentWillLoad() {
        this.children = Array.from(this.element.children);
    }
    handleChanges() {
        this.in();
    }
    getShadowCSS() {
        const vertical = this.direction.includes("top");
        const horizontal = this.direction.includes("left");
        // @ts-ignore
        let css = Array(this.length).fill("").map((item, index) => {
            const y = index * (horizontal ? -1 : 1);
            const x = index * (vertical ? -1 : 1);
            return `${y}px ${x}px var(--theme-complement7)`;
        });
        return css.join();
    }
    async out() {
        properties.set({ "--text-shadow": "none" }, this.element);
    }
    async in() {
        properties.set({ "--text-shadow": this.getShadowCSS() }, this.element);
    }
    render() {
        return h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) },
            h("slot", null));
    }
    static get is() { return "stellar-long-shadow"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["long-shadow.css"]
    }; }
    static get styleUrls() { return {
        "$": ["long-shadow.css"]
    }; }
    static get properties() { return {
        "direction": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"top-left\"|\"top-right\"|\"bottom-left\"|\"bottom-right\"",
                "resolved": "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "direction",
            "reflect": true,
            "defaultValue": "\"top-left\""
        },
        "length": {
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
            "attribute": "length",
            "reflect": true,
            "defaultValue": "100"
        },
        "delay": {
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
            "attribute": "delay",
            "reflect": true,
            "defaultValue": "100"
        },
        "timing": {
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
            "attribute": "timing",
            "reflect": true,
            "defaultValue": "50"
        },
        "active": {
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
            "attribute": "active",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "children": {}
    }; }
    static get methods() { return {
        "out": {
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
        },
        "in": {
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
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "length",
            "methodName": "handleChanges"
        }, {
            "propName": "direction",
            "methodName": "handleChanges"
        }]; }
}
