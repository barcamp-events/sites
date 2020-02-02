import { h } from "@stencil/core";
import Tunnel from '../dependencies';
export class DocsComponent {
    async componentWillLoad() {
        const tag = this.match.params.name;
        this.data = await this.loader.getAllForTag(tag);
    }
    async componentDidUpdate() {
        const tag = this.match.params.name;
        this.data = await this.loader.getAllForTag(tag);
    }
    renderUsage() {
        return (h("div", null,
            h("stellar-tabs", { name: "stellar-code-examples" },
                this.data.documentation && this.data.documentation.usage && Object.keys(this.data.documentation.usage).map((name, index) => {
                    return (h("stellar-tab", { name: `#${this.data.tag}-${name}`, open: index === 0 }, name));
                }),
                h("stellar-tab", null)),
            this.data.documentation && this.data.documentation.usage && Object.keys(this.data.documentation.usage).map((name, index) => {
                return (h("stellar-content", { for: "stellar-code-examples", id: `${this.data.tag}-${name}`, open: index === 0 },
                    h("stellar-code", { codeString: this.data.documentation.usage[name], preview: true })));
            })));
    }
    render() {
        if (this.match && this.match.params.name && this.data) {
            return (h("div", null,
                h("stellar-docs-header", null),
                h("stellar-layout", { size: "large", type: "sidebar", align: "top" },
                    h("aside", null,
                        h("stellar-docs-navigation", null)),
                    h("main", { class: "min-vh-100" },
                        h("stellar-markdown", { codeString: this.data.documentation && this.data.documentation.readme || "Readme to come..." }),
                        h("stellar-tabs", { name: "stellar-docs", block: true },
                            h("stellar-tab", { name: "design" }, "Design"),
                            h("stellar-tab", { name: "code", open: true }, "Code"),
                            h("stellar-tab", { name: "details" }, "Details")),
                        h("stellar-content", { for: "stellar-docs", id: "details" },
                            h("stellar-layout", { size: "flush" },
                                h("stellar-markdown", { src: `/components/${this.data.tag}/readme.md` }))),
                        h("stellar-content", { for: "stellar-docs", id: "design" },
                            h("stellar-layout", { size: "flush" },
                                h("h1", null, "Design"))),
                        h("stellar-content", { for: "stellar-docs", id: "code", open: true },
                            h("stellar-layout", { size: "flush", align: "top" },
                                h("article", null, this.renderUsage())),
                            h("stellar-layout", { size: "flush", align: "top" },
                                h("aside", null,
                                    h("stellar-card", { padding: "none" },
                                        h("div", null,
                                            h("p", { class: "fw6 fs7 pa3 tc" }, "Bundles"),
                                            h("hr", { class: "mv0" }),
                                            h("stellar-accordion", { tight: true },
                                                h("stellar-item", { slot: "label" },
                                                    "Uses ",
                                                    this.data.stats && this.data.stats.dependencies && this.data.stats.dependencies.length || "0"),
                                                this.data.stats && this.data.stats.dependencies && this.data.stats.dependencies.map(component => h("stellar-item", { type: "a", href: `/component/${component}`, route: true }, component))),
                                            h("stellar-accordion", { tight: true },
                                                h("stellar-item", { slot: "label" },
                                                    "Used by ",
                                                    this.data.stats && this.data.stats.dependencyOf && this.data.stats.dependencyOf.length || "0"),
                                                this.data.stats && this.data.stats.dependencyOf && this.data.stats.dependencyOf.map(component => h("stellar-item", { type: "a", href: `/component/${component}`, route: true }, component))))))))))));
        }
    }
    static get is() { return "stellar-docs-component"; }
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
        },
        "ready": {
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
            "attribute": "ready",
            "reflect": false
        },
        "loader": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Load",
                "resolved": "Load",
                "references": {
                    "Load": {
                        "location": "import",
                        "path": "../loadDependencies"
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
    static get states() { return {
        "data": {}
    }; }
}
Tunnel.injectProps(DocsComponent, ['loader', 'ready']);
