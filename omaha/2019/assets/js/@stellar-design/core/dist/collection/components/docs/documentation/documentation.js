import { h } from "@stencil/core";
import { Dependencies } from '../loadDependencies';
import Tunnel from '../dependencies';
export class DocumentationRoot {
    constructor() {
        this.ready = false;
    }
    async componentWillLoad() {
        const loader = Dependencies.get();
        loader.package_link = this.package_link;
        loader.collection_link = this.collection_link;
        loader.documentation_link = this.documentation_link;
        loader.coverage_link = this.coverage_link;
        loader.stats_link = this.stats_link;
        await loader.perform();
        this.package = loader.package;
        this.collection = loader.collection;
        this.documentation = loader.documentation;
        this.coverage = loader.coverage;
        this.stats = loader.stats;
        this.loader = loader;
        this.ready = true;
    }
    render() {
        const tunnelState = {
            ready: this.ready,
            package: this.package,
            collection: this.collection,
            documentation: this.documentation,
            coverage: this.coverage,
            loader: this.loader,
            stats: this.stats
        };
        return (h(Tunnel.Provider, { state: tunnelState },
            h("stencil-router", null,
                h("stencil-route-switch", { scrollTopOffset: 0 },
                    h("stencil-route", { url: '/component/:name', component: 'stellar-docs-component' }),
                    h("stencil-route", { url: '/:name', component: 'stellar-docs-page', exact: true }),
                    h("stencil-route", { url: '/', component: 'stellar-docs-home', exact: true }),
                    h("stencil-route", { component: "stellar-docs-not-found" })))));
    }
    static get is() { return "stellar-documentation"; }
    static get originalStyleUrls() { return {
        "$": ["documentation.css"]
    }; }
    static get styleUrls() { return {
        "$": ["documentation.css"]
    }; }
    static get properties() { return {
        "package_link": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "package_link",
            "reflect": false
        },
        "collection_link": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "collection_link",
            "reflect": false
        },
        "documentation_link": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "documentation_link",
            "reflect": false
        },
        "coverage_link": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "coverage_link",
            "reflect": false
        },
        "stats_link": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "stats_link",
            "reflect": false
        }
    }; }
    static get states() { return {
        "ready": {},
        "package": {},
        "collection": {},
        "documentation": {},
        "coverage": {},
        "stats": {},
        "loader": {}
    }; }
}
