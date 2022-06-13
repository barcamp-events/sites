import { h } from "@stencil/core";
export class Steps {
    async steps() {
        if (!this.stepsList || this.stepsList.length === 0) {
            this.stepsList = Array.from(this.element.querySelectorAll('stellar-step'));
        }
        return this.stepsList;
    }
    async contents() {
        this.contentsList = Array.from(document.querySelectorAll(`stellar-content[for='${this.name}']`));
        return this.contentsList;
    }
    async componentWillLoad() {
        const steps = await this.steps();
        const stepCount = steps.length;
        steps.forEach((step, index) => {
            step.order = index + 1;
            step.tabCount = stepCount;
        });
    }
    render() {
        return (h("div", { class: "step-list", role: "tablist" },
            h("slot", null)));
    }
    static get is() { return "stellar-steps"; }
    static get originalStyleUrls() { return {
        "$": ["steps.css"]
    }; }
    static get styleUrls() { return {
        "$": ["steps.css"]
    }; }
    static get properties() { return {
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
            "reflect": true
        }
    }; }
    static get states() { return {
        "stepsList": {},
        "contentsList": {}
    }; }
    static get methods() { return {
        "steps": {
            "complexType": {
                "signature": "() => Promise<any[]>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<any[]>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "contents": {
            "complexType": {
                "signature": "() => Promise<any[]>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<any[]>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
}
