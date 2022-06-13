import { h } from "@stencil/core";
import showdown from 'showdown';
export class Markdown {
    constructor() {
        this.flavor = "vanilla";
        this.editable = false;
        this.showdown = new showdown.Converter();
    }
    componentWillLoad() {
        this.showdown.setFlavor(this.flavor);
        this.showdown.setOption('omitExtraWLInCodeBlocks', true);
        this.showdown.setOption('ghCompatibleHeaderId', true);
        this.showdown.setOption('tables', true);
        this.showdown.setOption('tablesHeaderId', true);
        this.showdown.setOption('tasklists', true);
        this.showdown.setOption('emoji', true);
        this.convert();
    }
    onCodeStringChange() {
        this.convert();
    }
    onSrcChange() {
        this.convert();
    }
    convert() {
        if (this.src) {
            this.fetchMarkdown();
        }
        else if (this.codeString) {
            this.raw = this.codeString;
            this.convertMarkdown();
        }
        else {
            this.getMarkdown();
            this.convertMarkdown();
        }
    }
    getMarkdown() {
        const raw = this.element.querySelector('template').innerHTML;
        this.raw = raw.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    }
    convertMarkdown() {
        let converted = this.showdown.makeHtml(this.raw);
        converted = this.replaceAll(converted, "<pre><code>", "<stellar-code><template>");
        converted = this.replaceAll(converted, "</pre></code>", "</template></stellar-code>");
        this.converted = converted;
    }
    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
    async fetchMarkdown() {
        const response = await fetch(this.src);
        const text = await response.text();
        this.raw = text;
        this.convertMarkdown();
    }
    render() {
        if (this.editable) {
            return h("stellar-card", null,
                h("section", null,
                    h("copy-wrap", { full: true, class: "wrap" },
                        h("div", { innerHTML: this.converted }))),
                h("footer", { class: "bg-theme-base0" },
                    h("stellar-input", { type: "textarea", default: this.codeString, onUpdate: (e) => { this.codeString = e.detail; this.convert(); } })));
        }
        else {
            return h("copy-wrap", { full: true, class: "wrap" },
                h("div", { innerHTML: this.converted }));
        }
    }
    static get is() { return "stellar-markdown"; }
    static get originalStyleUrls() { return {
        "$": ["markdown.css"]
    }; }
    static get styleUrls() { return {
        "$": ["markdown.css"]
    }; }
    static get properties() { return {
        "src": {
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
                "tags": [{
                        "text": "string",
                        "name": "type"
                    }, {
                        "text": "Markdown",
                        "name": "memberof"
                    }],
                "text": "Used to reference an external markdown file"
            },
            "attribute": "src",
            "reflect": false
        },
        "codeString": {
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
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }, {
                        "text": "Markdown",
                        "name": "memberof"
                    }],
                "text": "Used to set"
            },
            "attribute": "code-string",
            "reflect": false
        },
        "flavor": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"github\"|\"original\"|\"vanilla\"",
                "resolved": "\"github\" | \"original\" | \"vanilla\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "flavor",
            "reflect": false,
            "defaultValue": "\"vanilla\""
        },
        "editable": {
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
            "attribute": "editable",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "converted": {},
        "raw": {},
        "showdown": {}
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "codeString",
            "methodName": "onCodeStringChange"
        }, {
            "propName": "src",
            "methodName": "onSrcChange"
        }]; }
}
