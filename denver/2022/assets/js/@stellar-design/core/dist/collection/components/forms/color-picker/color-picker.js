import { h } from "@stencil/core";
import { colors } from '../../../utils';
import properties from 'css-custom-properties';
import Tunnel from '../../theme';
export class ColorPicker {
    constructor() {
        this.val = "none";
        this.notransparent = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
    }
    componentWillLoad() {
        this.options = Object.keys(colors).filter((color) => {
            // @ts-ignore
            return !["base", "white", "black", "black-alt"].includes(color);
        });
        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }
    valueUpdatedHandler(val) {
        this.update.emit(val);
        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }
    updateValue(color) {
        this.val = color;
    }
    render() {
        return h("div", { class: "wrap" },
            this.options.map(option => h("button", { type: "button", value: option, class: option, style: { "background": `var(--${option}5)` }, onClick: () => { this.updateValue(option); } })),
            !this.notransparent && h("button", { type: "button", value: "none", class: "none", style: { "background": `var(--white)` }, onClick: () => { this.updateValue("none"); } }),
            h("div", { class: "placeholder" }));
    }
    static get is() { return "stellar-color-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["color-picker.css"]
    }; }
    static get styleUrls() { return {
        "$": ["color-picker.css"]
    }; }
    static get properties() { return {
        "val": {
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
            "attribute": "val",
            "reflect": true,
            "defaultValue": "\"none\""
        },
        "notransparent": {
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
            "attribute": "notransparent",
            "reflect": false,
            "defaultValue": "false"
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
                "text": "Sets the button or link as an outlined button."
            },
            "attribute": "dark",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "options": {}
    }; }
    static get events() { return [{
            "method": "update",
            "name": "update",
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
    static get watchers() { return [{
            "propName": "val",
            "methodName": "valueUpdatedHandler"
        }]; }
}
Tunnel.injectProps(ColorPicker, ['dark']);
