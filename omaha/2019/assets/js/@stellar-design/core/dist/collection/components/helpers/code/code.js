import { h } from "@stencil/core";
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import ezClipboard from 'ez-clipboard';
import Tunnel from '../../theme';
export class Code {
    constructor() {
        this.language = "html";
        this.simple = false;
        this.copy = true;
        this.copied = false;
        this.expanded = false;
        this.expandable = false;
        this.randomName = Math.round((Math.random() * 10000));
        this.preview = true;
        this.feature = false;
        this.dark = false;
    }
    componentWillLoad() {
        this.getCode();
    }
    componentDidLoad() {
        this.highlight();
        var observer = new MutationObserver((mutations) => {
            mutations.forEach(() => {
                this.getCode();
            });
        });
        observer.observe(this.element, { attributes: true, childList: true, subtree: true });
    }
    componentWillUpdate() {
        this.getCode();
    }
    componentDidUpdate() {
        this.highlight();
    }
    handleCodeStringUpdate() {
        this.getCode();
    }
    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
    async highlight() {
        var block = this.element.querySelector('code');
        Prism.highlightElement(block, false);
    }
    async result() {
        function htmlDecode(input) {
            var doc = new DOMParser().parseFromString(input, "text/html");
            return doc.documentElement.textContent;
        }
        return htmlDecode(this.code);
    }
    async clipboard() {
        const copyText = await this.result();
        ezClipboard.copyPlain(copyText);
    }
    async setCode(code) {
        this.code = code;
    }
    getCode() {
        if (this.codeString) {
            this.raw = this.codeString;
            this.code = this.codeString.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
        }
        else {
            let code = this.element.querySelector('template');
            if (code) {
                const language = Array.from(code.classList).filter((s) => s.includes('language-'));
                if (language.length === 1) {
                    this.language = language[0].substr(9);
                }
                if (!code.innerHTML) {
                    code = Array.from(code.children).map((node) => {
                        return node.outerHTML;
                    }).join();
                }
                else {
                    code = code.innerHTML;
                }
                this.raw = code;
                this.code = code.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
            }
        }
    }
    renderPreview() {
        return h("section", { class: "preview flush" },
            h("div", { class: "result", innerHTML: this.raw }));
    }
    renderCode() {
        return h("pre", { "aria-label": `The ${this.language} code`, tabindex: 0 },
            h("code", { class: `language-${this.language}`, innerHTML: this.code }),
            h("div", { class: "hidden" },
                h("slot", null,
                    h("template", null,
                        h("p", null, "There's no code here!")))));
    }
    render() {
        if (this.simple) {
            return this.renderCode();
        }
        else {
            return h("stellar-card", { shadow: "light", padding: "small" },
                this.feature && h("header", null,
                    h("slot", { name: "feature" }),
                    h("slot", { name: "property" })),
                this.preview && this.renderPreview(),
                h("footer", { class: "code" }, this.renderCode()));
        }
    }
    static get is() { return "stellar-code"; }
    static get originalStyleUrls() { return {
        "$": ["code.css"]
    }; }
    static get styleUrls() { return {
        "$": ["code.css"]
    }; }
    static get properties() { return {
        "language": {
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
            "attribute": "language",
            "reflect": true,
            "defaultValue": "\"html\""
        },
        "simple": {
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
            "attribute": "simple",
            "reflect": false,
            "defaultValue": "false"
        },
        "codeString": {
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
            "attribute": "code-string",
            "reflect": false
        },
        "copy": {
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
            "attribute": "copy",
            "reflect": false,
            "defaultValue": "true"
        },
        "expanded": {
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
            "attribute": "expanded",
            "reflect": false,
            "defaultValue": "false"
        },
        "expandable": {
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
            "attribute": "expandable",
            "reflect": false,
            "defaultValue": "false"
        },
        "preview": {
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
            "attribute": "preview",
            "reflect": false,
            "defaultValue": "true"
        },
        "feature": {
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
            "attribute": "feature",
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
                "text": ""
            },
            "attribute": "dark",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "copied": {},
        "randomName": {},
        "observer": {},
        "code": {},
        "raw": {}
    }; }
    static get methods() { return {
        "highlight": {
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
        "result": {
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
        "clipboard": {
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
        "setCode": {
            "complexType": {
                "signature": "(code: any) => Promise<void>",
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
    static get watchers() { return [{
            "propName": "codeString",
            "methodName": "handleCodeStringUpdate"
        }]; }
}
Tunnel.injectProps(Code, ['dark']);
