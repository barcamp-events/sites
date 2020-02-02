import { h } from "@stencil/core";
import { parentNodeSelector } from '../../../utils';
export class Step {
    constructor() {
        this.href = "#";
        this.disabled = false;
        this.open = false;
    }
    componentWillLoad() {
        this.parent = parentNodeSelector(this.element, 'stellar-steps');
    }
    handleClick() {
        this.parent.steps().forEach((element) => {
            element.open = false;
        });
        this.open = true;
        this.contentChange.emit({
            parent: this.parent,
            name: this.href.replace(/[#]/g, "")
        });
    }
    renderTitle() {
        return (h("span", { class: "title" },
            h("slot", null)));
    }
    render() {
        return (h("button", { role: "tab", "aria-selected": this.open ? "true" : "false", "aria-setsize": this.tabCount, "aria-posinset": this.order, tabindex: "0", class: "step-button", onClick: () => this.handleClick() },
            h("stellar-label", null, this.renderTitle())));
    }
    static get is() { return "stellar-step"; }
    static get originalStyleUrls() { return {
        "$": ["step.css"]
    }; }
    static get styleUrls() { return {
        "$": ["step.css"]
    }; }
    static get properties() { return {
        "href": {
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
            "attribute": "href",
            "reflect": true,
            "defaultValue": "\"#\""
        },
        "disabled": {
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
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "open": {
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
            "attribute": "open",
            "reflect": true,
            "defaultValue": "false"
        },
        "order": {
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
            "attribute": "order",
            "reflect": true
        },
        "tabCount": {
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
            "attribute": "tab-count",
            "reflect": true
        }
    }; }
    static get states() { return {
        "parent": {}
    }; }
    static get events() { return [{
            "method": "contentChange",
            "name": "contentChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "element"; }
}
