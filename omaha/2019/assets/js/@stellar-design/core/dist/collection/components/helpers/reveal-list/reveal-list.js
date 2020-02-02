import { h } from "@stencil/core";
import properties from 'css-custom-properties';
import delay from 'await-delay';
export class RevealList {
    constructor() {
        this.animation = "fadeInUp";
        this.outAnimation = "fadeOut";
        this.delay = 100;
        this.timing = 20;
        this.active = false;
    }
    componentWillLoad() {
        this.children = Array.from(this.element.children);
    }
    async calculateTiming() {
        const time = 1000 + (this.children.length * this.delay);
        await delay(time);
    }
    async out() {
        properties.set({
            "--animation": this.outAnimation
        }, this.element);
        this.children.forEach((element, index) => {
            // @ts-ignore
            element.style.setProperty('animation-delay', `${this.delay * index}ms`);
            element.style.setProperty('animation-timing', `${this.timing}ms`);
        });
        return await this.calculateTiming();
    }
    async in() {
        this.active = true;
        properties.set({
            "--animation": this.animation
        }, this.element);
        this.children.forEach((element, index) => {
            // @ts-ignore
            element.style.setProperty('animation-delay', `${this.delay * index}ms`);
            element.style.setProperty('animation-timing', `${this.timing}ms`);
        });
        return await this.calculateTiming();
    }
    render() {
        return [
            h("stellar-intersection", { element: this.element.parentElement, in: this.in.bind(this) }),
            h("slot", null)
        ];
    }
    static get is() { return "stellar-reveal-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["reveal-list.css"]
    }; }
    static get styleUrls() { return {
        "$": ["reveal-list.css"]
    }; }
    static get properties() { return {
        "animation": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"fadeIn\"|\"fadeInUp\"|\"fadeInDown\"",
                "resolved": "\"fadeIn\" | \"fadeInDown\" | \"fadeInUp\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "animation",
            "reflect": true,
            "defaultValue": "\"fadeInUp\""
        },
        "outAnimation": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"fadeOut\"|\"fadeOutUp\"|\"fadeOutDown\"",
                "resolved": "\"fadeOut\" | \"fadeOutDown\" | \"fadeOutUp\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "out-animation",
            "reflect": true,
            "defaultValue": "\"fadeOut\""
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
            "defaultValue": "20"
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
}
