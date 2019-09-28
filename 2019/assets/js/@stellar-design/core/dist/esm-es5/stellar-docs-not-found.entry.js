import { r as registerInstance, h } from './core-36452501.js';
var DocsNotFound = /** @class */ (function () {
    function DocsNotFound(hostRef) {
        registerInstance(this, hostRef);
    }
    DocsNotFound.prototype.render = function () {
        return (h("div", { class: 'app-profile' }, h("h1", null, "404")));
    };
    Object.defineProperty(DocsNotFound, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return DocsNotFound;
}());
export { DocsNotFound as stellar_docs_not_found };
