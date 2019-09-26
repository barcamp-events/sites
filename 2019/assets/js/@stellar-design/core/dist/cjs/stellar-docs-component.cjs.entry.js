'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
require('./index-9d31ce96.js');
const dependencies = require('./dependencies-ee24c770.js');

const DocsComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        return (core.h("div", null, core.h("stellar-tabs", { name: "stellar-code-examples" }, this.data.documentation && this.data.documentation.usage && Object.keys(this.data.documentation.usage).map((name, index) => {
            return (core.h("stellar-tab", { name: `#${this.data.tag}-${name}`, open: index === 0 }, name));
        }), core.h("stellar-tab", null)), this.data.documentation && this.data.documentation.usage && Object.keys(this.data.documentation.usage).map((name, index) => {
            return (core.h("stellar-content", { for: "stellar-code-examples", id: `${this.data.tag}-${name}`, open: index === 0 }, core.h("stellar-code", { codeString: this.data.documentation.usage[name], preview: true })));
        })));
    }
    render() {
        if (this.match && this.match.params.name && this.data) {
            return (core.h("div", null, core.h("stellar-docs-header", null), core.h("stellar-layout", { size: "large", type: "sidebar", align: "top" }, core.h("aside", null, core.h("stellar-docs-navigation", null)), core.h("main", { class: "min-vh-100" }, core.h("stellar-markdown", { codeString: this.data.documentation && this.data.documentation.readme || "Readme to come..." }), core.h("stellar-tabs", { name: "stellar-docs", block: true }, core.h("stellar-tab", { name: "design" }, "Design"), core.h("stellar-tab", { name: "code", open: true }, "Code"), core.h("stellar-tab", { name: "details" }, "Details")), core.h("stellar-content", { for: "stellar-docs", id: "details" }, core.h("stellar-layout", { size: "flush" }, core.h("stellar-markdown", { src: `/components/${this.data.tag}/readme.md` }))), core.h("stellar-content", { for: "stellar-docs", id: "design" }, core.h("stellar-layout", { size: "flush" }, core.h("h1", null, "Design"))), core.h("stellar-content", { for: "stellar-docs", id: "code", open: true }, core.h("stellar-layout", { size: "flush", align: "top" }, core.h("article", null, this.renderUsage())), core.h("stellar-layout", { size: "flush", align: "top" }, core.h("aside", null, core.h("stellar-card", { padding: "none" }, core.h("div", null, core.h("p", { class: "fw6 fs7 pa3 tc" }, "Bundles"), core.h("hr", { class: "mv0" }), core.h("stellar-accordion", { tight: true }, core.h("stellar-item", { slot: "label" }, "Uses ", this.data.stats && this.data.stats.dependencies && this.data.stats.dependencies.length || "0"), this.data.stats && this.data.stats.dependencies && this.data.stats.dependencies.map(component => core.h("stellar-item", { type: "a", href: `/component/${component}`, route: true }, component))), core.h("stellar-accordion", { tight: true }, core.h("stellar-item", { slot: "label" }, "Used by ", this.data.stats && this.data.stats.dependencyOf && this.data.stats.dependencyOf.length || "0"), this.data.stats && this.data.stats.dependencyOf && this.data.stats.dependencyOf.map(component => core.h("stellar-item", { type: "a", href: `/component/${component}`, route: true }, component))))))))))));
        }
    }
};
dependencies.Tunnel.injectProps(DocsComponent, ['loader', 'ready']);

exports.stellar_docs_component = DocsComponent;
