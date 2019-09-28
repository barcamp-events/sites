import { r as registerInstance, h } from './core-8f5ef0c7.js';

const DocsHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("stellar-docs-header", null), h("stellar-layout", { size: "large", type: "sidebar" }, h("aside", null, h("stellar-docs-navigation", null)), h("main", null, h("h1", null, "Home!")))));
    }
};

export { DocsHome as stellar_docs_home };
