import { h } from "@stencil/core";
import { blurringEase } from "../../../utils";
import Tunnel from '../../theme';
export class ToggleOption {
    constructor() {
        this.type = "checkbox";
        this.checked = false;
        this.checkedDefault = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.for = "";
        this.default = "";
        this.selectedCopy = "Selected!";
        this._type = "checkbox";
        this.focused = false;
        this.blur = 0;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 250,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
            },
        });
    }
    componentWillLoad() {
        this.updateRealType();
    }
    componentDidLoad() {
        this.input = this.element.querySelector('input.input');
        if (this.checkedDefault) {
            this.checked = this.checkedDefault;
            this.changeToggle.emit({ element: this.element, value: this.value, checked: this.checked });
        }
    }
    updateRealType() {
        if (this.type === "radio-block") {
            this._type = "radio";
        }
        else if (this.type === "checkbox-block") {
            this._type = "checkbox";
        }
        else {
            this._type = this.type;
        }
    }
    async confirm() {
        if (this.input.checked !== this.checked) {
            this.checked = this.input.checked;
        }
    }
    async updateSelected(value) {
        this.input.checked = value;
        this.onToggleChange();
    }
    onToggleChange() {
        this.checked = this.input.checked;
        this.ease.start();
        this.changeToggle.emit({ element: this.element, value: this.checked ? this.value : undefined, checked: this.checked });
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
    }
    onClick() {
        this.input.checked = !this.input.checked;
        this.onToggleChange();
    }
    onKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            this.input.checked = !this.input.checked;
            this.onToggleChange();
        }
    }
    renderCheckbox() {
        if (this.type === "checkbox" || this.type === "radio") {
            return (h("div", { class: this.focused ? "box focused" : "box" },
                h("div", { class: this.checked ? "indicator active" : "indicator" }, this.type === "checkbox" && h("stellar-asset", { name: "checkmark" }))));
        }
    }
    renderRadioBlock() {
        if (this.type === "radio-block") {
            return (h("div", { class: "wrapper" },
                h("div", { class: this.focused ? "box focused" : "box" },
                    h("div", { class: this.checked ? "indicator active" : "indicator" })),
                h("div", { class: "block-content" },
                    h("slot", null))));
        }
    }
    renderCheckBlock() {
        if (this.type === "checkbox-block") {
            return (h("div", { class: "wrapper" },
                h("div", { class: this.focused ? "box focused" : "box" },
                    h("div", { class: this.checked ? "indicator active" : "indicator" },
                        h("stellar-asset", { name: "checkmark", block: true }))),
                h("div", { class: "block-content" },
                    h("slot", null))));
        }
    }
    render() {
        // @ts-ignore
        return h("button", { type: "button", onClick: () => this.onClick(), onKeyDown: e => this.onKeyDown(e) },
            h("input", { type: "hidden", name: `${this.for}[${this.name}]`, value: this.default }),
            h("input", { class: "input", type: this._type, id: `${this.for}_${this.name}_${this.value}`, name: `${this.for}[${this.name}]`, checked: this.checked, value: this.value, required: this.required, onChange: (e) => { e.stopPropagation(); e.preventDefault(); }, onKeyDown: e => this.onKeyDown(e) }),
            this.renderCheckbox(),
            ["radio", "checkbox"].indexOf(this.type) !== -1 && h("p", null,
                h("slot", null)),
            this.renderRadioBlock(),
            this.renderCheckBlock(),
            ["radio", "checkbox"].indexOf(this.type) === -1 &&
                h("stellar-blur", { horizontal: this.blur, class: this.checked ? "status active" : "status" },
                    h("stellar-tag", { size: "small", color: "theme-base5" }, this.selectedCopy)),
            this.tooltip && h("stellar-tooltip", { align: "bottom-left" }, this.tooltip));
    }
    static get is() { return "stellar-toggle-option"; }
    static get originalStyleUrls() { return {
        "$": ["toggle-option.css"]
    }; }
    static get styleUrls() { return {
        "$": ["toggle-option.css"]
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
            "reflect": true,
            "defaultValue": "\"checkbox\""
        },
        "checked": {
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
            "attribute": "checked",
            "reflect": true,
            "defaultValue": "false"
        },
        "checkedDefault": {
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
            "attribute": "checked-default",
            "reflect": false,
            "defaultValue": "false"
        },
        "single": {
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
            "attribute": "single",
            "reflect": true
        },
        "icon": {
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
            "attribute": "icon",
            "reflect": true
        },
        "tooltip": {
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
            "attribute": "tooltip",
            "reflect": false
        },
        "disabled": {
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
            "attribute": "disabled",
            "reflect": true
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
        },
        "for": {
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
            "attribute": "for",
            "reflect": false,
            "defaultValue": "\"\""
        },
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
        },
        "default": {
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
            "attribute": "default",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "value": {
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
            "attribute": "value",
            "reflect": false
        },
        "required": {
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
            "attribute": "required",
            "reflect": false
        },
        "inline": {
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
            "attribute": "inline",
            "reflect": false
        },
        "size": {
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
            "attribute": "size",
            "reflect": false
        },
        "selectedCopy": {
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
            "attribute": "selected-copy",
            "reflect": false,
            "defaultValue": "\"Selected!\""
        }
    }; }
    static get states() { return {
        "input": {},
        "_type": {},
        "focused": {},
        "blur": {},
        "ease": {}
    }; }
    static get events() { return [{
            "method": "changeToggle",
            "name": "changeToggle",
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
    static get methods() { return {
        "confirm": {
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
        },
        "updateSelected": {
            "complexType": {
                "signature": "(value: boolean) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
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
Tunnel.injectProps(ToggleOption, ['dark']);
