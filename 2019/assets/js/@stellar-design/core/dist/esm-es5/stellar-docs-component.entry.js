var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h } from './core-8f5ef0c7.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './dependencies-7c159378.js';
var DocsComponent = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tag, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tag = this.match.params.name;
                        _a = this;
                        return [4 /*yield*/, this.loader.getAllForTag(tag)];
                    case 1:
                        _a.data = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentDidUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tag, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tag = this.match.params.name;
                        _a = this;
                        return [4 /*yield*/, this.loader.getAllForTag(tag)];
                    case 1:
                        _a.data = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.renderUsage = function () {
        var _this = this;
        return (h("div", null, h("stellar-tabs", { name: "stellar-code-examples" }, this.data.documentation && this.data.documentation.usage && Object.keys(this.data.documentation.usage).map(function (name, index) {
            return (h("stellar-tab", { name: "#" + _this.data.tag + "-" + name, open: index === 0 }, name));
        }), h("stellar-tab", null)), this.data.documentation && this.data.documentation.usage && Object.keys(this.data.documentation.usage).map(function (name, index) {
            return (h("stellar-content", { for: "stellar-code-examples", id: _this.data.tag + "-" + name, open: index === 0 }, h("stellar-code", { codeString: _this.data.documentation.usage[name], preview: true })));
        })));
    };
    class_1.prototype.render = function () {
        if (this.match && this.match.params.name && this.data) {
            return (h("div", null, h("stellar-docs-header", null), h("stellar-layout", { size: "large", type: "sidebar", align: "top" }, h("aside", null, h("stellar-docs-navigation", null)), h("main", { class: "min-vh-100" }, h("stellar-markdown", { codeString: this.data.documentation && this.data.documentation.readme || "Readme to come..." }), h("stellar-tabs", { name: "stellar-docs", block: true }, h("stellar-tab", { name: "design" }, "Design"), h("stellar-tab", { name: "code", open: true }, "Code"), h("stellar-tab", { name: "details" }, "Details")), h("stellar-content", { for: "stellar-docs", id: "details" }, h("stellar-layout", { size: "flush" }, h("stellar-markdown", { src: "/components/" + this.data.tag + "/readme.md" }))), h("stellar-content", { for: "stellar-docs", id: "design" }, h("stellar-layout", { size: "flush" }, h("h1", null, "Design"))), h("stellar-content", { for: "stellar-docs", id: "code", open: true }, h("stellar-layout", { size: "flush", align: "top" }, h("article", null, this.renderUsage())), h("stellar-layout", { size: "flush", align: "top" }, h("aside", null, h("stellar-card", { padding: "none" }, h("div", null, h("p", { class: "fw6 fs7 pa3 tc" }, "Bundles"), h("hr", { class: "mv0" }), h("stellar-accordion", { tight: true }, h("stellar-item", { slot: "label" }, "Uses ", this.data.stats && this.data.stats.dependencies && this.data.stats.dependencies.length || "0"), this.data.stats && this.data.stats.dependencies && this.data.stats.dependencies.map(function (component) { return h("stellar-item", { type: "a", href: "/component/" + component, route: true }, component); })), h("stellar-accordion", { tight: true }, h("stellar-item", { slot: "label" }, "Used by ", this.data.stats && this.data.stats.dependencyOf && this.data.stats.dependencyOf.length || "0"), this.data.stats && this.data.stats.dependencyOf && this.data.stats.dependencyOf.map(function (component) { return h("stellar-item", { type: "a", href: "/component/" + component, route: true }, component); })))))))))));
        }
    };
    return class_1;
}());
Tunnel.injectProps(DocsComponent, ['loader', 'ready']);
export { DocsComponent as stellar_docs_component };
