import { h } from "@stencil/core";
export class Group {
    constructor() {
        this.overflow = false;
        this.count = 10;
        this.extras = [];
    }
    componentWillLoad() {
        this.sizes();
        this.buttons();
        if (this.overflow) {
            if (this.element.children.length > this.count) {
                const children = Array.from(this.element.children);
                children.forEach((element, index) => {
                    if ((index + 1) > this.count) {
                        this.size = element.size;
                        this.extras.push(element);
                        this.element.removeChild(element);
                    }
                });
            }
        }
    }
    sizes() {
        const kids = Array.from(this.element.children);
        if (kids) {
            kids.forEach((kid) => {
                kid.size = this.size;
            });
        }
    }
    buttons() {
        const buttons = this.element.querySelectorAll('stellar-button');
        if (buttons) {
            buttons.forEach((button) => {
                button.classList.add('h-auto');
            });
        }
    }
    resultantExtras() {
        return this.extras.map((element) => {
            const attributes = {};
            Array.prototype.slice.call(element.attributes).forEach(function (item) {
                attributes[item.name] = item.value;
            });
            return h(element.tagName, Object.assign({}, attributes));
        });
    }
    render() {
        return [
            h("slot", null),
            this.overflow && h("stellar-group-overflow", { size: this.size, count: this.extras.length }, this.resultantExtras())
        ];
    }
    static get is() { return "stellar-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["group.css"]
    }; }
    static get styleUrls() { return {
        "$": ["group.css"]
    }; }
    static get properties() { return {
        "size": {
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
            "attribute": "size",
            "reflect": true
        },
        "overflow": {
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
            "attribute": "overflow",
            "reflect": false,
            "defaultValue": "false"
        },
        "count": {
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
            "attribute": "count",
            "reflect": false,
            "defaultValue": "10"
        }
    }; }
    static get states() { return {
        "extras": {}
    }; }
    static get elementRef() { return "element"; }
}
