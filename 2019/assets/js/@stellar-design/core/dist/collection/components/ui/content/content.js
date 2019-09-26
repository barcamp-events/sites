import { h } from "@stencil/core";
import { blurringEase } from '../../../utils';
export class Content {
    constructor() {
        this.open = false;
        this.ease = blurringEase({
            end: 6,
            start: -1,
            duration: 200,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
        this.blur = 0;
    }
    async handleActive(event) {
        this.parent = event.detail.parent;
        const contents = await this.parent.contents();
        if (event.detail.name !== this.element.id) {
            contents.forEach((element) => {
                element.open = element.id === event.detail.name;
                if (element.open) {
                    this.ease.start();
                }
            });
        }
    }
    render() {
        return (h("div", { class: "wrap", role: "tabpanel", "aria-hidden": !this.open ? "true" : "false" },
            h("slot", null)));
    }
    static get is() { return "stellar-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["content.css"]
    }; }
    static get styleUrls() { return {
        "$": ["content.css"]
    }; }
    static get properties() { return {
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
        "for": {
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
            "attribute": "for",
            "reflect": true
        },
        "behavior": {
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
            "attribute": "behavior",
            "reflect": true
        }
    }; }
    static get states() { return {
        "ease": {},
        "blur": {},
        "parent": {}
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "contentChange",
            "method": "handleActive",
            "target": "document",
            "capture": false,
            "passive": false
        }]; }
}
