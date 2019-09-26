import { h, Host } from "@stencil/core";
import properties from 'css-custom-properties';
export class Blur {
    constructor() {
        this.vertical = 0;
        this.horizontal = 0;
    }
    supported_match() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') === -1 &&
            !(/iPad|iPhone|iPod/.test(navigator.platform));
    }
    supported() {
        const criteria = () => {
            let result;
            try {
                if (sessionStorage.getItem('blur-supported') === "true") {
                    return sessionStorage.getItem('blur-supported') === "true";
                }
                result = this.supported_match();
                sessionStorage.setItem('blur-supported', result ? "true" : "false");
            }
            catch (e) {
                result = this.supported_match();
            }
            return result;
        };
        try {
            sessionStorage.clear();
        }
        catch (e) { }
        return criteria();
    }
    async setBlurFilter() {
        properties.set({
            "--blur-url": `url('#${this.generatedId}-filter')`
        }, this.element);
    }
    componentDidLoad() {
        if (this.supported()) {
            this.generatedId = this.element.id || this.generateId();
            setTimeout(() => {
                this.setBlurFilter();
            }, 10);
        }
    }
    generateId() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return `blur-${getRandomInt(0, 1000)}`;
    }
    render() {
        return h(Host, { id: this.element.id || this.generatedId },
            h("slot", null),
            this.supported() && h("svg", { class: "blur-svg" },
                h("defs", null,
                    h("filter", { id: this.generatedId + "-filter" },
                        h("feGaussianBlur", { id: this.generatedId + "-gaussian", in: "SourceGraphic", stdDeviation: `${this.horizontal},${this.vertical}` })))));
    }
    static get is() { return "stellar-blur"; }
    static get originalStyleUrls() { return {
        "$": ["blur.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blur.css"]
    }; }
    static get properties() { return {
        "vertical": {
            "type": "number",
            "mutable": true,
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
            "attribute": "vertical",
            "reflect": true,
            "defaultValue": "0"
        },
        "horizontal": {
            "type": "number",
            "mutable": true,
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
            "attribute": "horizontal",
            "reflect": true,
            "defaultValue": "0"
        }
    }; }
    static get states() { return {
        "generatedId": {}
    }; }
    static get methods() { return {
        "setBlurFilter": {
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
