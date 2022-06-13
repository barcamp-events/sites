import { h } from "@stencil/core";
import Tunnel from '../dependencies';
export class DocsNavigation {
    renderItem(tag_name) {
        const name = tag_name.replace("stellar-", "");
        return h("stellar-item", { fit: true, wrap: true, type: "stencil-route-link", route: true, href: `/component/${tag_name}` },
            name,
            h("small", { class: "db theme-base5" }, `<${tag_name}>`));
    }
    render() {
        return this.ready && h("stellar-card", { padding: "tiny" },
            h("div", null,
                h("stellar-item", { type: "stencil-route-link", route: true, href: "/" }, "Home"),
                h("stellar-accordion", { tight: true },
                    h("stellar-item", { type: "button", slot: "label" }, "Introduction"),
                    h("stellar-item", { type: "stencil-route-link", route: true, href: "/design-principles" }, "Design Principles"),
                    h("stellar-item", { type: "stencil-route-link", route: true, href: "/installation" }, "Installation"),
                    h("stellar-item", { type: "stencil-route-link", route: true, href: "/tutorial" }, "Tutorial"),
                    h("stellar-item", { type: "stencil-route-link", route: true, href: "/deploying" }, "Deploying"),
                    h("stellar-item", { type: "stencil-route-link", route: true, href: "/browser-support" }, "Browser Support")),
                h("stellar-accordion", { tight: true },
                    h("stellar-item", { slot: "label" },
                        "Components ",
                        h("stellar-tag", { size: "small", color: "theme-complement8", class: "self-end maa mr0", pill: true }, this.loader.components.length)),
                    this.loader.components.map((component) => this.renderItem(component)))));
    }
    static get is() { return "stellar-docs-navigation"; }
    static get properties() { return {
        "loader": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "loader",
            "reflect": false
        },
        "collection": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "collection",
            "reflect": false
        },
        "documentation": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "documentation",
            "reflect": false
        },
        "ready": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "ready",
            "reflect": false
        }
    }; }
}
Tunnel.injectProps(DocsNavigation, ['loader', 'collection', 'documentation', 'ready']);
