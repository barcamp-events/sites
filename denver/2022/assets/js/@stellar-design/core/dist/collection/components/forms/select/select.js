import { h } from "@stencil/core";
import delay from 'await-delay';
import Pluralize from 'pluralize';
import Tunnel from '../../theme';
export class Select {
    constructor() {
        this.name = "select";
        this.placeholder = "Choose something...";
        this.required = false;
        this.open = false;
        this.verbiage = "selection";
        this.valueLabel = undefined;
        this.loading = false;
        this.fit = false;
        this.wrap = false;
        this.resize = false;
        this.autoSelectFirst = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.blur = 0;
        this.clear_confirm = false;
    }
    async componentWillLoad() {
        if (this.multiple) {
            this.value = [];
        }
        const options = await this.option_elements();
        // @ts-ignore
        options.forEach((element) => {
            element.selectable = true;
            element.fit = this.fit;
            element.wrap = this.wrap;
            if (this.multiple) {
                element.multiple = true;
            }
        });
    }
    async componentDidLoad() {
        this.listen_to_values();
        this.titleItem = this.element.shadowRoot.querySelector('stellar-item[select-title]');
        if (this.default) {
            if (typeof this.default === "object" && this.default.constructor.name === "Array") {
                this.default.forEach((value) => {
                    // @ts-ignore
                    this.element.querySelector(`stellar-item[value="${value}"]`).select_item({ selected: true });
                });
            }
            else {
                // @ts-ignore
                this.element.querySelector(`stellar-item[value="${this.default}"]`).select_item({ selected: true });
            }
        }
    }
    async clearValue() {
        if (this.clear_confirm) {
            await delay(100);
            this.clear_confirm = false;
            this.value = [];
            const options = await this.option_elements();
            Array.from(options).forEach((element) => {
                element.selected = false;
            });
            this.update.emit(this.value);
        }
        else {
            this.clear_confirm = true;
        }
    }
    async update_values() {
        if (this.multiple) {
            const option_elements = await this.option_elements();
            let values = [];
            // @ts-ignore
            option_elements.forEach((option) => {
                if (!option.multiple) {
                    option.multiple = true;
                }
                if (option.selected) {
                    values.push(option.value);
                }
            });
            this.value = values;
            this.update.emit(this.value);
            this.updateLanguage();
        }
        else {
            const options = await this.option_elements();
            if (this.value.length === 0 && this.autoSelectFirst) {
                this.element.querySelector('stellar-item').select_item({ selected: true });
            }
            Array.from(options).forEach(async (el) => {
                if (el.selected) {
                    this.titleItem.apply(await el.data());
                    this.value = el.value;
                    this.update.emit(this.value);
                    this.updateLanguage();
                }
                if (el.selectTitle) {
                    this.value = el.value;
                }
            });
        }
    }
    handleOpenChange() {
        // @ts-ignore
        this.element.shadowRoot.querySelector('button.select-title').focus();
    }
    async handleMultipleChange(value) {
        const options = await this.option_elements();
        // @ts-ignore
        options.forEach((element) => {
            element.multiple = value;
        });
    }
    async mountedHandler(event) {
        const data = event.detail;
        if (this.multiple) {
            const option_elements = await this.option_elements();
            let values = [];
            // @ts-ignore
            option_elements.forEach((option) => {
                option.selectable = true;
                if (this.value && this.value.includes(option.value) && !data.element.selected) {
                    option.selected = true;
                }
                if (option.selected) {
                    values.push(option.value);
                }
            });
            this.value = values;
        }
        else {
            this.value = data.element.selected ? data.element.value : this.value;
            if (this.value) {
                const options = await this.option_elements();
                // @ts-ignore
                options.forEach((element) => {
                    element.selectable = true;
                    if (this.value === element.value) {
                        element.selected = true;
                    }
                });
            }
        }
    }
    async selectionChangedHandler(event) {
        const data = event.detail;
        if (this.multiple) {
            data.selected = !data.selected;
            const option_elements = await this.option_elements();
            let values = [];
            // @ts-ignore
            option_elements.forEach((option) => {
                if (this.value && this.value.includes(option.value) && data.value !== option.value) {
                    option.selected = true;
                }
                if (option.selected) {
                    values.push(option.value);
                }
            });
            this.value = values;
            this.update.emit(this.value);
        }
        else {
            if (!data.element.selectTitle) {
                const options = await this.option_elements();
                // @ts-ignore
                options.forEach((element) => {
                    element.selected = false;
                });
                data.selected = true;
                this.value = data.value;
                this.update.emit(this.value);
                this.titleItem.apply(await data.data());
                setTimeout(() => {
                    this.open = false;
                }, 200);
            }
        }
    }
    selectedFocusChangedHandler() {
        this.focused = true;
    }
    selectedBlurChangedHandler() {
        this.focused = false;
    }
    handleTitleFocus() {
        this.focused = true;
    }
    handleTitleBlur() {
        this.focused = false;
    }
    handleNotClick(e) {
        if (e.target !== this.element && !this.element.contains(e.target)) {
            if (this.open) {
                this.open = false;
            }
        }
    }
    handleEscapeKey(event) {
        if (event.key === "space" && this.open) {
            this.open = false;
        }
    }
    handleArrowKeys(ev) {
        if (ev.keyCode === 40 || ev.keyCode === 38) {
            if (this.open) {
                ev.preventDefault();
                ev.stopPropagation();
                if (ev.keyCode === 40) {
                    this.focusNextOption();
                }
                else {
                    this.focusPreviousOption();
                }
            }
        }
    }
    updateLanguage() {
        let language;
        let details;
        if (typeof this.value === "object") {
            if (this.value.length === 0) {
                details = Pluralize(this.verbiage, this.value.length);
                if (this.placeholderInverted) {
                    language = `All ${details} selected`;
                }
                else {
                    language = `No ${details} selected`;
                }
            }
            else {
                details = Pluralize(this.verbiage, this.value.length, true);
                language = `${details} selected`;
            }
        }
        else if (typeof this.value === "string") {
            language = this.valueLabel || this.value.toString() || `Select ${this.verbiageAn ? "an" : "a"} ${this.verbiage}`;
        }
        else {
            language = this.valueLabel || this.value;
        }
        this.language = language;
    }
    async validate() {
        const status = {
            name: `${this.name}`,
            value: this.value,
            valid: true,
            errors: [],
        };
        this.updateLanguage();
        if (!this.novalidate) {
            // @ts-ignore
            if (!this.value) {
                status.valid = false;
                status.errors.push({ message: 'This field is required.' });
            }
            const options = await this.options();
            // @ts-ignore
            if (!options.includes(this.value)) {
                status.valid = false;
                status.errors.push({ message: `"${this.value}" isn't a valid option.` });
            }
        }
        this.status = status;
        return this.status;
    }
    listen_to_values() {
        var targetNode = this.element;
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            type: true
        };
        var callback = () => {
            this.update_values();
        };
        this.observer = new MutationObserver(callback);
        this.observer.observe(targetNode, config);
    }
    async option_elements() {
        return this.element.querySelectorAll('stellar-item:not([select-title])');
    }
    async options() {
        const elements = await this.option_elements();
        const options = [];
        // @ts-ignore
        elements.forEach((option) => {
            options.push(option.value);
        });
        return options;
    }
    async focusPaths() {
        let current = undefined;
        let next = undefined;
        let previous = undefined;
        const elements = await this.options();
        // @ts-ignore
        elements.forEach((element, index) => {
            // @ts-ignore
            if (element.hasFocus()) {
                previous = elements[index - 1];
                current = element;
                next = elements[index + 1];
            }
        });
        if (!current) {
            var first = elements[0];
            this.focusElement(first);
            current = first;
        }
        return { previous, current, next };
    }
    focusFirstItem() {
        //@ts-ignore
        this.element.querySelector('.select-list stellar-item:first-of-type').focus();
    }
    focusElement(element) {
        element.focus();
    }
    async focusNextOption() {
        const elements = await this.focusPaths();
        if (elements.next) {
            this.focusElement(elements.next);
        }
    }
    async focusPreviousOption() {
        const elements = await this.focusPaths();
        if (elements.previous) {
            this.focusElement(elements.previous);
        }
    }
    closeOthers() {
        const selects = document.querySelectorAll('stellar-select[open]');
        Array.from(selects).forEach((s) => {
            if (s !== this.element) {
                s.open = false;
            }
        });
    }
    handleTitleClick() {
        this.closeOthers();
        this.open = !this.open;
    }
    renderLabel() {
        if (this.label) {
            return h("div", { class: "label-wrapper" },
                h("stellar-label", { size: this.size, onClick: () => { this.focusFirstItem(); } }, this.label),
                this.renderEmptyButton());
        }
    }
    renderErrors() {
        if (this.status && this.status.errors && this.status.errors.length !== 0) {
            return (h("p", { class: "validation" }, this.status.errors.map(error => h("span", null, error.message))));
        }
    }
    renderEmptyButton() {
        return this.multiple && this.value && this.value.length > 0 && h("stellar-button", { class: "clear-button", tag: "button", size: this.size, ghost: true, onClick: (e) => { e.stopPropagation(); this.clearValue(); } },
            h("stellar-asset", { name: "close" }),
            this.clear_confirm ? `Clear ${this.value.length} selections?` : `Clear`);
    }
    render() {
        return (h("div", { class: "wrapper" },
            this.renderLabel(),
            h("div", { class: "select" },
                this.loading && h("div", { class: "loading" },
                    h("stellar-asset", { name: "loading-spin" }),
                    " ",
                    h("p", null, "One sec...")),
                h("button", { type: "button", class: "select-title", onClick: () => this.handleTitleClick(), onFocus: () => this.handleTitleFocus(), onBlur: () => this.handleTitleBlur() },
                    h("stellar-item", { fit: true, wrap: true, "select-title": true, type: "button", value: this.value ? this.value.toString() : "", tabindex: "-1", selectable: false, label: this.language, innerHTML: this.language }),
                    h("stellar-asset", { name: "arrow-down" }),
                    this.name && h("input", { type: "text", tabindex: "-1", value: this.value, name: this.name.toString(), required: this.required })),
                this.tooltip && h("stellar-tooltip", { align: "bottom-left", onClick: () => this.handleTitleClick() }, this.tooltip),
                h("stellar-blur", { vertical: this.blur, class: "select-list" },
                    h("div", { class: "select-list-header" },
                        h("slot", { name: "header" })),
                    h("div", { class: "select-list-body" },
                        h("slot", null)),
                    this.footer && h("div", { class: "select-list-footer" },
                        h("slot", { name: "footer" })))),
            h("stellar-label", { size: "small", underneath: true }, this.description),
            !this.novalidate && this.renderErrors()));
    }
    static get is() { return "stellar-select"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["select.css"]
    }; }
    static get styleUrls() { return {
        "$": ["select.css"]
    }; }
    static get properties() { return {
        "name": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "string|boolean",
                "resolved": "boolean | string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": true,
            "defaultValue": "\"select\""
        },
        "label": {
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
            "attribute": "label",
            "reflect": false
        },
        "placeholder": {
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
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "\"Choose something...\""
        },
        "description": {
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
            "attribute": "description",
            "reflect": false
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
        "inline": {
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
            "attribute": "inline",
            "reflect": true
        },
        "multiple": {
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
            "attribute": "multiple",
            "reflect": true
        },
        "other": {
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
            "attribute": "other",
            "reflect": false
        },
        "placeholderInverted": {
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
            "attribute": "placeholder-inverted",
            "reflect": false
        },
        "size": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"tiny\"|\"small\"|\"medium\"|\"large\"",
                "resolved": "\"large\" | \"medium\" | \"small\" | \"tiny\"",
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
            "reflect": false,
            "defaultValue": "false"
        },
        "processing": {
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
            "attribute": "processing",
            "reflect": false
        },
        "focused": {
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
            "attribute": "focused",
            "reflect": true
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
        "footer": {
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
            "attribute": "footer",
            "reflect": false
        },
        "novalidate": {
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
            "attribute": "novalidate",
            "reflect": false
        },
        "verbiage": {
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
            "attribute": "verbiage",
            "reflect": false,
            "defaultValue": "\"selection\""
        },
        "verbiageAn": {
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
            "attribute": "verbiage-an",
            "reflect": false
        },
        "overlay": {
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
            "attribute": "overlay",
            "reflect": true
        },
        "value": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "Array<string>|string",
                "resolved": "string | string[]",
                "references": {
                    "Array": {
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
            "attribute": "value",
            "reflect": true
        },
        "valueLabel": {
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
            "attribute": "value-label",
            "reflect": false,
            "defaultValue": "undefined"
        },
        "default": {
            "type": "any",
            "mutable": false,
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
            "attribute": "default",
            "reflect": false
        },
        "loading": {
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
            "attribute": "loading",
            "reflect": true,
            "defaultValue": "false"
        },
        "fit": {
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
            "attribute": "fit",
            "reflect": true,
            "defaultValue": "false"
        },
        "wrap": {
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
            "attribute": "wrap",
            "reflect": true,
            "defaultValue": "false"
        },
        "resize": {
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
            "attribute": "resize",
            "reflect": true,
            "defaultValue": "false"
        },
        "autoSelectFirst": {
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
            "attribute": "auto-select-first",
            "reflect": true,
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
        "titleItem": {},
        "status": {},
        "blur": {},
        "observer": {},
        "language": {},
        "clear_confirm": {}
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
    static get methods() { return {
        "update_values": {
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
        "validate": {
            "complexType": {
                "signature": "() => Promise<FormResult>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "FormResult": {
                        "location": "global"
                    }
                },
                "return": "Promise<FormResult>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "option_elements": {
            "complexType": {
                "signature": "() => Promise<NodeListOf<any>>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "NodeListOf": {
                        "location": "global"
                    },
                    "HTMLStellarItemElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<NodeListOf<any>>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "options": {
            "complexType": {
                "signature": "() => Promise<string[]>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "Array": {
                        "location": "global"
                    },
                    "HTMLStellarItemElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<string[]>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "open",
            "methodName": "handleOpenChange"
        }, {
            "propName": "multiple",
            "methodName": "handleMultipleChange"
        }]; }
    static get listeners() { return [{
            "name": "mounted",
            "method": "mountedHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "selectionChanged",
            "method": "selectionChangedHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "focusChanged",
            "method": "selectedFocusChangedHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "blurChanged",
            "method": "selectedBlurChangedHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "click",
            "method": "handleNotClick",
            "target": "window",
            "capture": false,
            "passive": false
        }, {
            "name": "keydown",
            "method": "handleEscapeKey",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "keydown",
            "method": "handleArrowKeys",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
Tunnel.injectProps(Select, ['dark']);
