import { h } from "@stencil/core";
import { default as eqjs } from 'eq.js';
export class Layout {
    constructor() {
        this.size = "medium";
        this.padding = "medium";
        this.align = "baseline";
        this.content = "baseline";
    }
    componentWillLoad() {
        const navs = Array.from(this.element.querySelectorAll('*[slot="nav"]'));
        this.hasNav = navs.length > 0;
        eqjs.definePts(this.element, {
            "tiny": 320,
            "small": 480,
            "medium": 640,
            "large": 800,
            "massive": 1024,
        });
        this.refresh();
    }
    componentDidLoad() {
        this.refresh();
    }
    async refresh() {
        var resizeEvent = window.document.createEvent('UIEvents');
        resizeEvent.initEvent('resize', true, false);
        window.dispatchEvent(resizeEvent);
    }
    render() {
        return (h("div", { class: "layout" },
            h("slot", null),
            h("slot", { name: "nav" })));
    }
    static get is() { return "stellar-layout"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["layout.css"]
    }; }
    static get styleUrls() { return {
        "$": ["layout.css"]
    }; }
    static get properties() { return {
        "type": {
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
            "attribute": "type",
            "reflect": true
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"tiny\"|\"small\"|\"medium\"|\"large\"|\"xlarge\"|\"full\"|\"flush\"",
                "resolved": "\"flush\" | \"full\" | \"large\" | \"medium\" | \"small\" | \"tiny\" | \"xlarge\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "size",
            "reflect": true,
            "defaultValue": "\"medium\""
        },
        "padding": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"none\"|\"tiny\"|\"small\"|\"medium\"|\"large\"",
                "resolved": "\"large\" | \"medium\" | \"none\" | \"small\" | \"tiny\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "padding",
            "reflect": true,
            "defaultValue": "\"medium\""
        },
        "align": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"baseline\"|\"center\"|\"top\"|\"bottom\"",
                "resolved": "\"baseline\" | \"bottom\" | \"center\" | \"top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "align",
            "reflect": true,
            "defaultValue": "\"baseline\""
        },
        "content": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"baseline\"|\"center\"|\"top\"|\"bottom\"",
                "resolved": "\"baseline\" | \"bottom\" | \"center\" | \"top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "content",
            "reflect": true,
            "defaultValue": "\"baseline\""
        },
        "height": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"fill\"",
                "resolved": "\"fill\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "height",
            "reflect": true
        },
        "hasNav": {
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
            "attribute": "has-nav",
            "reflect": true
        }
    }; }
    static get methods() { return {
        "refresh": {
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
