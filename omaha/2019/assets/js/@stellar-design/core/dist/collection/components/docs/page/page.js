import { h } from "@stencil/core";
export class DocsPage {
    render() {
        if (this.match && this.match.params.name) {
            return (h("div", null,
                h("stellar-docs-header", null),
                h("stellar-layout", { size: "large", type: "sidebar", align: "top" },
                    h("aside", null,
                        h("stellar-docs-navigation", null)),
                    h("main", null,
                        h("stellar-markdown", { src: `/build/data/markdown/${this.match.params.name}.md` })))));
        }
    }
    static get is() { return "stellar-docs-page"; }
    static get properties() { return {
        "match": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "MatchResults",
                "resolved": "MatchResults",
                "references": {
                    "MatchResults": {
                        "location": "import",
                        "path": "@stencil/router"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
}
