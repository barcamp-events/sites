import { r as registerInstance, h } from './core-36452501.js';
var DocsPage = /** @class */ (function () {
    function DocsPage(hostRef) {
        registerInstance(this, hostRef);
    }
    DocsPage.prototype.render = function () {
        if (this.match && this.match.params.name) {
            return (h("div", null, h("stellar-docs-header", null), h("stellar-layout", { size: "large", type: "sidebar", align: "top" }, h("aside", null, h("stellar-docs-navigation", null)), h("main", null, h("stellar-markdown", { src: "/build/data/markdown/" + this.match.params.name + ".md" })))));
        }
    };
    return DocsPage;
}());
export { DocsPage as stellar_docs_page };
