import { r as registerInstance, h } from './core-36452501.js';
var DocsHome = /** @class */ (function () {
    function DocsHome(hostRef) {
        registerInstance(this, hostRef);
    }
    DocsHome.prototype.render = function () {
        return (h("div", null, h("stellar-docs-header", null), h("stellar-layout", { size: "large", type: "sidebar" }, h("aside", null, h("stellar-docs-navigation", null)), h("main", null, h("h1", null, "Home!")))));
    };
    return DocsHome;
}());
export { DocsHome as stellar_docs_home };
