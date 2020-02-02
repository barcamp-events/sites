import { h } from "@stencil/core";
import Tunnel from '../../theme';
export class Comment {
    constructor() {
        this.dark = false;
        this.empty = false;
    }
    componentWillLoad() {
        this.empty = this.element.querySelectorAll('stellar-comment').length === 0;
    }
    componentDidLoad() {
        if (this.element.querySelector('stellar-avatar')) {
            // @ts-ignore
            this.element.querySelector('stellar-avatar').tabIndex = -1;
            this.name = this.element.querySelector('stellar-avatar').name;
        }
        this.content = this.element.querySelector('[slot="content"]').textContent.trim();
    }
    render() {
        return (h("div", { class: `comment ${this.empty ? "empty" : ""}`, "aria-label": `Comment by ${this.name}: ${this.content}`, tabindex: 0 },
            h("div", { class: "content" },
                h("slot", { name: "avatar" }),
                h("slot", { name: "content" })),
            h("div", { class: `thread`, "aria-label": `In reply to  ${this.name} saying ${this.content}` },
                h("slot", null))));
    }
    static get is() { return "stellar-comment"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["comment.css"]
    }; }
    static get styleUrls() { return {
        "$": ["comment.css"]
    }; }
    static get properties() { return {
        "content": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "content",
            "reflect": false
        },
        "name": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false
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
        "empty": {}
    }; }
    static get elementRef() { return "element"; }
}
Tunnel.injectProps(Comment, ['dark']);
