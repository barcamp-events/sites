import { r as registerInstance, h } from './core-8f5ef0c7.js';

const DocsPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        if (this.match && this.match.params.name) {
            return (h("div", null, h("stellar-docs-header", null), h("stellar-layout", { size: "large", type: "sidebar", align: "top" }, h("aside", null, h("stellar-docs-navigation", null)), h("main", null, h("stellar-markdown", { src: `/build/data/markdown/${this.match.params.name}.md` })))));
        }
    }
};

export { DocsPage as stellar_docs_page };
