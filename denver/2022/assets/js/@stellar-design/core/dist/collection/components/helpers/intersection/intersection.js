import { h } from "@stencil/core";
export class intersection {
    constructor() {
        this.in = () => { };
        this.out = () => { };
        this.margin = "0%";
    }
    componentWillLoad() {
        if (!this.element) {
            console.error('stellar-intersection needs an element or a seelctor passed into it');
        }
        else {
            this.addIntersectionObserver();
        }
    }
    componentDidUnload() {
        this.removeIntersectionObserver();
    }
    addIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver((data) => {
                if (!this.multiple) {
                    if (data[0].isIntersecting) {
                        this.in();
                        this.removeIntersectionObserver();
                    }
                }
                else {
                    if (data[0].isIntersecting) {
                        this.in();
                    }
                    else {
                        this.out();
                    }
                }
            }, {
                rootMargin: this.margin,
                threshold: [0]
            });
            if (typeof this.element === "string" && this.element.constructor.name === "String") {
                this.io.observe(document.querySelector(this.element));
            }
            else {
                this.io.observe(this.element);
            }
        }
    }
    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "stellar-intersection"; }
    static get properties() { return {
        "multiple": {
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
            "attribute": "multiple",
            "reflect": false
        },
        "in": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Function",
                "resolved": "Function",
                "references": {
                    "Function": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "() => { }"
        },
        "out": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Function",
                "resolved": "Function",
                "references": {
                    "Function": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "() => { }"
        },
        "margin": {
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
            "attribute": "margin",
            "reflect": false,
            "defaultValue": "\"0%\""
        },
        "element": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "HTMLElement|string",
                "resolved": "HTMLElement | string",
                "references": {
                    "HTMLElement": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "element",
            "reflect": false
        }
    }; }
    static get states() { return {
        "io": {}
    }; }
}
