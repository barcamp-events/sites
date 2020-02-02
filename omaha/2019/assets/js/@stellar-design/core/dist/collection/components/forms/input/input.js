import { h } from "@stencil/core";
import { shouldBeAnInput, hasIncrements, hasValue, isDatePicker, Validator, Tokenfield } from "./lib";
import { zxcvbn, TinyDatePicker, moment } from '../../../utils';
import Tunnel from '../../theme';
export class Input {
    constructor() {
        /**
         * The kind of element that the Input should be rendered as
         */
        this.type = "text";
        /**
         * The pre-set value to pass to the input element
         */
        this.requirements = false;
        this.color = "theme";
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.placeholder = "Enter a value";
        this.readonly = false;
        this.autofocus = false;
        this.focused = false;
        this.spellcheck = true;
        this.maxlength = 1000;
        this.cols = 30;
        this.rows = 5;
        this.wrap = "soft";
        this.dateType = "month";
        this.step = 1;
        // Files
        this.multipleFileCaption = '{count} files';
        this.replace_placeholder = "Replace file";
        this.files = [];
        this.multiple = false;
        this.droppable = false;
        // Validation
        this.required = false;
        this.novalidate = false;
        this.icon = false;
    }
    componentWillLoad() {
        if (this.default) {
            this.value = this.default;
        }
        if (this.match) {
            this.__match = document.querySelector(`stellar-input${this.match}`);
            if (!this.__match) {
                console.error(`Uh oh! Couldn't find element in DOM matching stellar-input${this.match}`);
            }
        }
        this.checkForIcon();
        if (this.type === "file") {
            this._prepareFileLabels();
        }
        this.validator = new Validator(this);
        if (this.type === "password" && this.value) {
            this.getStrongLevel();
        }
        this.generatedId = this.generateId();
    }
    componentDidLoad() {
        this.input = this.element.shadowRoot.querySelector('.input');
        if (this.type === "tags") {
            this.tokenField = new Tokenfield({
                el: this.input,
                delimiters: [","],
                addItemsOnPaste: true
            });
            this.tokenField.setItems(this.value);
        }
        if (this.is_date_type) {
            this.datepicker = TinyDatePicker(this.input, {
                type: this.dateType,
                mode: 'dp-below',
                format: (date) => { return moment(date).format(this.dateFormat); },
                parse: (date) => { return date ? moment(date).toDate() : moment().toDate(); }
            });
            this.datepicker.on('select', (_, dp) => {
                this.value = moment(dp.state.selectedDate).format(this.dateFormat);
            });
        }
    }
    get dateFormat() {
        if (this.dateType === "day") {
            return 'YYYY-MM-DD';
        }
        else if (this.dateType === "month") {
            return 'YYYY-MM';
        }
        else if (this.dateType === "year") {
            return 'YYYY';
        }
    }
    get visualDateFormat() {
        if (this.dateType === "day") {
            return 'MMMM D, YYYY';
        }
        else if (this.dateType === "month") {
            return 'MMMM, YYYY';
        }
        else if (this.dateType === "year") {
            return 'YYYY';
        }
    }
    async getDatePicker() {
        return this.datepicker;
    }
    get is_date_type() {
        return ["month", "date"].includes(this.type);
    }
    handleValueChange() {
        this.update.emit(this.value);
    }
    handleChange() {
        if (this.type === "file") {
            this.updateFilesArray();
            this.updateFileLabel();
        }
        this.update.emit(this.value);
    }
    handleFocus() {
        this.focused = true;
        this.focusing.emit({});
    }
    handleBlur() {
        this.focused = false;
        this.validate();
        this.bluring.emit({});
    }
    handleInput() {
        if (this.type === "textarea") {
            this.input.style.height = "1px";
            this.input.style.height = `${this.input.scrollHeight + 2}px`;
        }
        if (this.type !== "file") {
            if (this.type === "tags") {
                this.value = this.tokenField.getItems();
            }
            else {
                this.value = this.input.value;
            }
        }
        if (this.type === "password") {
            this.getStrongLevel();
        }
    }
    handleIncrement(event) {
        event.preventDefault();
        if (this.is_date_type) {
            // @ts-ignore
            this.value = moment(this.value).add(1, `${this.dateType}s`).format(this.dateFormat);
            this.datepicker.close();
        }
        else {
            this.input.stepUp();
            this.value = this.input.value;
        }
    }
    handleDecrement(event) {
        event.preventDefault();
        if (this.is_date_type) {
            // @ts-ignore
            this.value = moment(this.value).subtract(1, `${this.dateType}s`).format(this.dateFormat);
            this.datepicker.close();
        }
        else {
            this.input.stepDown();
            this.value = this.input.value;
        }
    }
    handleKeyDownIncrement(event) {
        if (event.keyCode === 13 || event.keyCode === 38) {
            event.preventDefault();
            if (this.is_date_type) {
                // @ts-ignore
                this.value = moment(this.value).add(1, `${this.dateType}s`).format(this.dateFormat);
                this.datepicker.close();
            }
            else {
                this.input.stepUp();
                this.value = this.input.value;
            }
        }
    }
    handleKeyDownDecrement(event) {
        if (event.keyCode === 13 || event.keyCode === 40) {
            event.preventDefault();
            if (this.is_date_type) {
                // @ts-ignore
                this.value = moment(this.value).subtract(1, `${this.dateType}s`).format(this.dateFormat);
                this.datepicker.close();
            }
            else {
                this.input.stepDown();
                this.value = this.input.value;
            }
        }
    }
    handleReset(event) {
        event.preventDefault();
        this.resetValue();
    }
    handleKeyDownEnter(event) {
        if (event.keyCode === 13) {
            const form = this.element.closest('stellar-form');
            form.submit_form();
        }
    }
    handleInputKeyDown(event) {
        this.handleKeyDownEnter(event);
    }
    handleKeyDownReset(event) {
        if (event.keyCode === 13) {
            this.resetValue();
        }
    }
    checkForIcon() {
        var element = this.element.querySelector('*[slot="icon"]');
        if (element) {
            this.icon = true;
        }
    }
    _prepareFileLabels() {
        if (this.type === "file" && this.multiple) {
            this.replace_placeholder = (this.replace_placeholder === "Replace file") ? "Replace files" : this.replace_placeholder;
        }
        this.placeholder = (!this.value) ? this.placeholder : this.replace_placeholder;
    }
    updateFileLabel() {
        var fileName = '';
        if (this.files && this.files.length > 1) {
            fileName = this.multipleFileCaption.replace('{count}', this.files.length.toString());
        }
        else {
            fileName = this.input.value.split('\\').pop();
        }
        if (fileName) {
            this._fileLabel = fileName;
        }
        else {
            this._fileLabel = undefined;
        }
        this.value = this.input.value;
        this._prepareFileLabels();
        this.validate();
    }
    updateFilesArray() {
        var files = [];
        if (this.type === "file" && this.multiple) {
            Array.from(this.input.files).forEach((file) => {
                var item = {
                    'name': file.name,
                    'size': file.size
                };
                files.push(item);
            });
        }
        else {
            files = this.input.files[0];
        }
        this.files = files;
    }
    generateId() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return `input-${getRandomInt(0, 1000)}`;
    }
    async getId() {
        return this.generatedId;
    }
    async val() {
        return this.value;
    }
    async getStrength() {
        return this.strength;
    }
    async setStrength(value) {
        this.level = value;
    }
    async invalid(message, valid, level) {
        if (message) {
            this.status = { errors: [{ message: `${message}` }], valid: valid, level: level, value: this.value, name: this.name };
            this.level = level;
        }
        else {
            this.status = undefined;
        }
    }
    async validate() {
        if (this.novalidate) {
            return await this.validator.validate(this);
        }
        else {
            this.status = await this.validator.validate(this);
            return this.status;
        }
    }
    getStrongLevel() {
        const result = zxcvbn(this.value);
        this.strength = result;
        this.level = result.score;
        if (this.value.length === 0) {
            this.level = -1;
        }
    }
    resetValue() {
        this.__previousValue = this.value;
        this.value = undefined;
        this.input.focus();
    }
    handleKeyDown(event) {
        if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
            if (this.value === "") {
                this.value = this.__previousValue;
            }
        }
    }
    validateDarkColor() {
        const hexcolor = this.value;
        var r = parseInt(hexcolor.substr(1, 2), 16);
        var g = parseInt(hexcolor.substr(3, 2), 16);
        var b = parseInt(hexcolor.substr(4, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        // Return new color if to dark, else return the original
        return (yiq > 150);
    }
    renderLabel() {
        if (this.label) {
            return (h("stellar-label", { for: this.generatedId, size: this.size }, this.label));
        }
    }
    renderColorPicker() {
        if (this.type === "color") {
            return (h("copy-wrap", { class: "color-picker", align: "center", "data-invert": this.validateDarkColor() },
                h("stellar-label", { for: this.generatedId, size: this.size }, this.value)));
        }
    }
    renderSearch() {
        if (this.type === "search") {
            return (h("stellar-asset", { name: "search", class: "search", block: true }));
        }
    }
    renderIncrements() {
        if (hasIncrements(this.type)) {
            return (h("div", { class: "incrementing" },
                h("a", { href: "#", onClick: (event) => this.handleIncrement(event), onKeyDown: (event) => this.handleKeyDownIncrement(event), onFocus: () => { this.handleFocus(); }, onBlur: () => { this.handleBlur(); } },
                    h("stellar-asset", { name: "arrow-up", block: true })),
                h("a", { href: "#", onClick: (event) => this.handleDecrement(event), onKeyDown: (event) => this.handleKeyDownDecrement(event), onFocus: () => { this.handleFocus(); }, onBlur: () => { this.handleBlur(); } },
                    h("stellar-asset", { name: "arrow-down", block: true }))));
        }
    }
    renderPasswordStrength() {
        if (this.type === "password") {
            return this.renderPasswordStrengthSmile();
        }
    }
    renderPasswordStrengthSmile() {
        if (this.level === 5 || this.level === 4 || this.level === 3) {
            return h("stellar-asset", { class: "smile", name: "happy", "data-level": this.level });
        }
        else if (this.level === 2 || this.level === 1 || this.level === 0) {
            return h("stellar-asset", { class: "smile", name: "sad", "data-level": this.level });
        }
        else {
            return h("stellar-asset", { class: "smile", name: "sad", "data-level": "-1" });
        }
    }
    renderSearchClearButton() {
        if (this.type === "search" && hasValue(this.value)) {
            return (h("stellar-asset", { name: "close", class: "close", onClick: (event) => this.handleReset(event), onKeyDown: (event) => this.handleKeyDownReset(event), tabindex: "0", title: "Reset", block: true }));
        }
    }
    renderDatePicker() {
        if (isDatePicker(this.type)) {
            return (h("div", { class: "relative" },
                h("div", { class: "fake-input absolute" }, moment(this.value).format(this.visualDateFormat)),
                h("input", { class: "input", id: this.generatedId, type: "text", value: this.value, name: this.name, placeholder: this.placeholder, required: this.required, maxlength: this.maxlength, autofocus: this.autofocus, readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, autocomplete: this.autocomplete || this.type, onInput: () => this.handleInput(), onChange: () => this.handleChange(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur(), onKeyDown: (event) => { this.handleKeyDownIncrement(event); this.handleKeyDownDecrement(event); } })));
        }
    }
    renderInput() {
        if (shouldBeAnInput(this.type)) {
            return (h("input", { class: "input", id: this.generatedId, type: this.type, value: this.value, name: this.name, placeholder: this.placeholder, required: this.required, maxlength: this.maxlength, autofocus: this.autofocus, readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, autocomplete: this.autocomplete || this.type, onInput: () => this.handleInput(), onChange: () => this.handleChange(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur(), onKeyDown: (event) => { this.handleInputKeyDown(event); } }));
        }
    }
    renderTextArea() {
        if (this.type === "textarea") {
            return (h("textarea", { class: "input", id: this.generatedId, placeholder: this.placeholder, name: this.name, cols: this.cols, maxlength: this.maxlength, rows: this.rows, disabled: this.disabled, readonly: this.readonly, autofocus: this.autofocus, spellcheck: this.spellcheck, required: this.required, onInput: () => this.handleInput(), onChange: () => this.handleChange(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur() }, this.value));
        }
    }
    renderFileUpload() {
        if (this.type === "file") {
            return (h("div", { class: "file-wrapper" },
                h("div", { class: "upload-card" },
                    h("section", null,
                        h("input", { class: "input", id: this.generatedId, type: this.type, name: this.name, placeholder: this.placeholder, required: this.required, maxlength: this.maxlength, autofocus: this.autofocus, readonly: this.readonly, disabled: this.disabled, onClick: (e) => { e.stopPropagation(); }, onInput: () => this.handleInput(), onChange: () => this.handleChange(), multiple: this.multiple, accept: this.accept, onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur() }),
                        this._fileLabel && h("h3", null, this._fileLabel),
                        h("h4", null,
                            h("stellar-asset", { name: this._fileLabel ? "create" : "add-circle", class: "" }),
                            this.placeholder),
                        this.renderMultipleFileUploads()))));
        }
    }
    renderMultipleFileUploads() {
        if (this.multiple && this.files && this.files.length > 1) {
            return (h("ul", { class: "file-list" }, this.files.map((file) => h("li", null,
                h("p", null,
                    file.name,
                    " | ",
                    h("stellar-unit", { value: file.size }))))));
        }
    }
    renderErrors() {
        if (this.status && this.status.errors && this.status.errors.length !== 0) {
            return (h("stellar-label", { size: this.size, class: "validation" },
                h("span", null, this.status.errors[this.status.errors.length - 1].message)));
        }
    }
    render() {
        return (h("div", { class: "wrapper" },
            h("label", null,
                this.renderLabel(),
                h("div", { class: "content" },
                    h("div", { class: "icon" },
                        h("slot", { name: "icon" })),
                    this.renderDatePicker(),
                    this.renderColorPicker(),
                    this.renderSearch(),
                    this.renderInput(),
                    this.renderTextArea(),
                    this.renderFileUpload(),
                    this.renderIncrements(),
                    this.renderSearchClearButton(),
                    this.renderPasswordStrength(),
                    this.tooltip && h("stellar-tooltip", { align: "bottom-left" }, this.tooltip)),
                this.description && h("stellar-label", { size: "small", underneath: true }, this.description)),
            this.renderErrors()));
    }
    static get is() { return "stellar-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["input.css"]
    }; }
    static get styleUrls() { return {
        "$": ["input.css"]
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
                "text": "The kind of element that the Input should be rendered as"
            },
            "attribute": "type",
            "reflect": true,
            "defaultValue": "\"text\""
        },
        "name": {
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
                "text": "The name of the input element"
            },
            "attribute": "name",
            "reflect": true
        },
        "value": {
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
                "text": "The pre-set value to pass to the input element"
            },
            "attribute": "value",
            "reflect": false
        },
        "default": {
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
                "text": "The pre-set value to pass to the input element"
            },
            "attribute": "default",
            "reflect": true
        },
        "requirements": {
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
                "text": "The pre-set value to pass to the input element"
            },
            "attribute": "requirements",
            "reflect": true,
            "defaultValue": "false"
        },
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
        "color": {
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
            "attribute": "color",
            "reflect": false,
            "defaultValue": "\"theme\""
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
            "reflect": true
        },
        "description": {
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
            "attribute": "description",
            "reflect": false
        },
        "tooltip": {
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
            "attribute": "tooltip",
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
            "reflect": true,
            "defaultValue": "\"Enter a value\""
        },
        "autocomplete": {
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
            "attribute": "autocomplete",
            "reflect": false
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
            "reflect": false
        },
        "readonly": {
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
            "attribute": "readonly",
            "reflect": false,
            "defaultValue": "false"
        },
        "autofocus": {
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
            "attribute": "autofocus",
            "reflect": false,
            "defaultValue": "false"
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
            "reflect": true,
            "defaultValue": "false"
        },
        "spellcheck": {
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
            "attribute": "spellcheck",
            "reflect": false,
            "defaultValue": "true"
        },
        "maxlength": {
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
            "attribute": "maxlength",
            "reflect": false,
            "defaultValue": "1000"
        },
        "cols": {
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
            "attribute": "cols",
            "reflect": false,
            "defaultValue": "30"
        },
        "rows": {
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
            "attribute": "rows",
            "reflect": false,
            "defaultValue": "5"
        },
        "wrap": {
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
            "attribute": "wrap",
            "reflect": false,
            "defaultValue": "\"soft\""
        },
        "dateType": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"month\"|\"year\"|\"day\"",
                "resolved": "\"day\" | \"month\" | \"year\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "date-type",
            "reflect": false,
            "defaultValue": "\"month\""
        },
        "min": {
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
            "attribute": "min",
            "reflect": false
        },
        "max": {
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
            "attribute": "max",
            "reflect": false
        },
        "step": {
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
            "attribute": "step",
            "reflect": false,
            "defaultValue": "1"
        },
        "multipleFileCaption": {
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
            "attribute": "multiple-file-caption",
            "reflect": false,
            "defaultValue": "'{count} files'"
        },
        "replace_placeholder": {
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
            "attribute": "replace_placeholder",
            "reflect": false,
            "defaultValue": "\"Replace file\""
        },
        "files": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "Array<any>",
                "resolved": "any[]",
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
            "defaultValue": "[]"
        },
        "multiple": {
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
            "attribute": "multiple",
            "reflect": false,
            "defaultValue": "false"
        },
        "droppable": {
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
            "attribute": "droppable",
            "reflect": false,
            "defaultValue": "false"
        },
        "accept": {
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
            "attribute": "accept",
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
            "reflect": false,
            "defaultValue": "false"
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
            "reflect": false,
            "defaultValue": "false"
        },
        "validates": {
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
            "attribute": "validates",
            "reflect": false
        },
        "match": {
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
            "attribute": "match",
            "reflect": false
        },
        "tokenField": {
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
            "attribute": "token-field",
            "reflect": false
        },
        "icon": {
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
            "attribute": "icon",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "input": {},
        "__previousValue": {},
        "datepicker": {},
        "_multipleFileUploadsLabel": {},
        "_fileLabel": {},
        "__match": {},
        "status": {},
        "validator": {},
        "level": {},
        "strength": {},
        "generatedId": {}
    }; }
    static get events() { return [{
            "method": "update",
            "name": "update",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Public: Updated event"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "focusing",
            "name": "focusing",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Public: Focus event"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "bluring",
            "name": "bluring",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Public: Blur event"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "getDatePicker": {
            "complexType": {
                "signature": "() => Promise<any>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<any>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "getId": {
            "complexType": {
                "signature": "() => Promise<string>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<string>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "val": {
            "complexType": {
                "signature": "() => Promise<any>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<any>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "getStrength": {
            "complexType": {
                "signature": "() => Promise<object>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<object>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "setStrength": {
            "complexType": {
                "signature": "(value: number) => Promise<void>",
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
        },
        "invalid": {
            "complexType": {
                "signature": "(message: string | boolean, valid?: boolean, level?: number) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }, {
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
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "handleValueChange"
        }]; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "handleKeyDown",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
Tunnel.injectProps(Input, ['dark']);
