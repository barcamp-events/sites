import { r as registerInstance, h } from './core-36452501.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './dependencies-3d33bc09.js';

const DocsComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        const tag = this.match.params.name;
        this.data = await this.loader.getAllForTag(tag);
    }
    async componentDidUpdate() {
        const tag = this.match.params.name;
        this.data = await this.loader.getAllForTag(tag);
    }
    renderUsage() {
        return (h("div", null, h("stellar-tabs", { name: "stellar-code-examples" }, this.data.documentation && this.data.documentation.usage && Object.keys(this.data.documentation.usage).map((name, index) => {
            return (h("stellar-tab", { name: `#${this.data.tag}-${name}`, open: index === 0 }, name));
        }), h("stellar-tab", null)), this.data.documentation && this.data.documentation.usage && Object.keys(this.data.documentation.usage).map((name, index) => {
            return (h("stellar-content", { for: "stellar-code-examples", id: `${this.data.tag}-${name}`, open: index === 0 }, h("stellar-code", { codeString: this.data.documentation.usage[name], preview: true })));
        })));
    }
    render() {
        if (this.match && this.match.params.name && this.data) {
            return (h("div", null, h("stellar-docs-header", null), h("stellar-layout", { size: "large", type: "sidebar", align: "top" }, h("aside", null, h("stellar-docs-navigation", null)), h("main", { class: "min-vh-100" }, h("stellar-markdown", { codeString: this.data.documentation && this.data.documentation.readme || "Readme to come..." }), h("stellar-tabs", { name: "stellar-docs", block: true }, h("stellar-tab", { name: "design" }, "Design"), h("stellar-tab", { name: "code", open: true }, "Code"), h("stellar-tab", { name: "details" }, "Details")), h("stellar-content", { for: "stellar-docs", id: "details" }, h("stellar-layout", { size: "flush" }, h("stellar-markdown", { src: `/components/${this.data.tag}/readme.md` }))), h("stellar-content", { for: "stellar-docs", id: "design" }, h("stellar-layout", { size: "flush" }, h("h1", null, "Design"))), h("stellar-content", { for: "stellar-docs", id: "code", open: true }, h("stellar-layout", { size: "flush", align: "top" }, h("article", null, this.renderUsage())), h("stellar-layout", { size: "flush", align: "top" }, h("aside", null, h("stellar-card", { padding: "none" }, h("div", null, h("p", { class: "fw6 fs7 pa3 tc" }, "Bundles"), h("hr", { class: "mv0" }), h("stellar-accordion", { tight: true }, h("stellar-item", { slot: "label" }, "Uses ", this.data.stats && this.data.stats.dependencies && this.data.stats.dependencies.length || "0"), this.data.stats && this.data.stats.dependencies && this.data.stats.dependencies.map(component => h("stellar-item", { type: "a", href: `/component/${component}`, route: true }, component))), h("stellar-accordion", { tight: true }, h("stellar-item", { slot: "label" }, "Used by ", this.data.stats && this.data.stats.dependencyOf && this.data.stats.dependencyOf.length || "0"), this.data.stats && this.data.stats.dependencyOf && this.data.stats.dependencyOf.map(component => h("stellar-item", { type: "a", href: `/component/${component}`, route: true }, component))))))))))));
        }
    }
};
Tunnel.injectProps(DocsComponent, ['loader', 'ready']);

export { DocsComponent as stellar_docs_component };
