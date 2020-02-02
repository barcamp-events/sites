import { h } from "@stencil/core";
export class ParallaxSection {
    constructor() {
        this.speed = 1;
        this.percentage = 0.5;
        this.layer = 1;
    }
    componentWillLoad() {
        this.element.setAttribute("data-rellax-speed", this.speed.toString());
        if (this.percentage) {
            this.element.setAttribute("data-rellax-percentage", this.percentage.toString());
        }
        this.element.setAttribute("data-rellax-zindex", this.layer.toString());
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "stellar-parallax-section"; }
    static get originalStyleUrls() { return {
        "$": ["parallax-section.css"]
    }; }
    static get styleUrls() { return {
        "$": ["parallax-section.css"]
    }; }
    static get properties() { return {
        "speed": {
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
            "attribute": "speed",
            "reflect": false,
            "defaultValue": "1"
        },
        "percentage": {
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
            "attribute": "percentage",
            "reflect": false,
            "defaultValue": "0.5"
        },
        "layer": {
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
            "attribute": "layer",
            "reflect": false,
            "defaultValue": "1"
        }
    }; }
    static get elementRef() { return "element"; }
}
