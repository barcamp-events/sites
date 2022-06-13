'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

const DocsPage = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        if (this.match && this.match.params.name) {
            return (core.h("div", null, core.h("stellar-docs-header", null), core.h("stellar-layout", { size: "large", type: "sidebar", align: "top" }, core.h("aside", null, core.h("stellar-docs-navigation", null)), core.h("main", null, core.h("stellar-markdown", { src: `/build/data/markdown/${this.match.params.name}.md` })))));
        }
    }
};

exports.stellar_docs_page = DocsPage;
