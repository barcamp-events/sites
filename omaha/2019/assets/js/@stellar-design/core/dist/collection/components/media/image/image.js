import { h } from "@stencil/core";
import { delay, properties, mediumZoom } from '../../../utils';
import { ColorThief } from './vendor/colorThief.js';
export class Picture {
    constructor() {
        this.type = "picture";
        this.nozoom = false;
        this.bg = "auto";
        this.alt = "";
        this.sources = [];
        this.active = false;
    }
    componentWillLoad() {
        this.prepareSources();
        this.setBG();
        this.updateAspectRatio();
    }
    componentDidLoad() {
        this.figure = this.element.shadowRoot.querySelector('figure');
    }
    mountZoom() {
        let zoomable = this.element.shadowRoot.querySelector('img');
        this.zoom = mediumZoom(zoomable, {
            background: `${this.bg}`,
            scrollOffset: 1,
            margin: 30
        });
    }
    handlePosterChange() {
        this.setBG();
    }
    handleActive() {
        this.setBackgroundImage();
    }
    async medium() {
        return this.zoom;
    }
    async in() {
        this.active = true;
        if (!this.nozoom) {
            await delay(200);
            this.mountZoom();
        }
    }
    getPictureColor() {
        const img = new Image(80, 80);
        img.addEventListener('load', () => {
            const cf = new ColorThief();
            this.palette = cf.getColor(img);
            properties.set({
                "--background-color": `rgb(${this.palette[0]}, ${this.palette[1]}, ${this.palette[2]})`
            }, this.element);
            this.bg = `rgb(${this.palette[0]}, ${this.palette[1]}, ${this.palette[2]})`;
            if (this.zoom) {
                this.zoom.update({
                    background: this.bg
                });
            }
        }, false);
        img.src = this.poster;
        img.crossOrigin = "Anonymous";
    }
    setBG() {
        if (this.bg === "auto") {
            this.getPictureColor();
        }
        else {
            properties.set({
                "--background-color": `${this.bg}`
            }, this.element);
        }
    }
    prepareSources() {
        const sources = this.element.querySelectorAll("source");
        let sourcesArray = [];
        [].forEach.call(sources, (source) => {
            sourcesArray = [...sourcesArray, source];
            source.hidden = true;
        });
        this.sources = sourcesArray;
        this.poster = this.poster ? this.poster : this.sources[this.sources.length - 1].srcset;
        this.large = this.sources[0].srcset;
        this.setBackgroundImage();
    }
    setBackgroundImage() {
        properties.set({
            "--background-image": `url('${this.active ? this.large : this.poster}')`
        }, this.element);
    }
    updateAspectRatio() {
        this.aspectRatio = (this.height / this.width) * 100;
        properties.set({
            "--aspect-ratio": `${this.aspectRatio}%`,
            "--width": `${this.width}px`,
            "--height": `${this.height}px`,
        }, this.element);
    }
    renderPicture() {
        if (this.active) {
            return [
                this.sources.map((source) => h("source", { srcSet: source.srcset, media: source.media ? source.media : false })),
                h("img", { src: this.large, class: "final_image", alt: this.alt })
            ];
        }
    }
    render() {
        if (this.type === "picture") {
            return h("figure", { itemtype: "http://schema.org/ImageObject", class: this.active ? 'loaded' : '', onClick: () => { this.zoom && this.zoom.open(); } },
                h("div", { class: "overlay" }),
                h("picture", null, this.renderPicture()),
                h("div", { class: "placeholder", style: { "background-image": `url(${this.poster})` } }),
                h("stellar-intersection", { element: this.element, in: this.in.bind(this) }));
        }
        else {
            return h("stellar-intersection", { element: this.element, in: this.in.bind(this) });
        }
    }
    static get is() { return "stellar-image"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["image.css"]
    }; }
    static get styleUrls() { return {
        "$": ["image.css"]
    }; }
    static get assetsDirs() { return ["./vendor"]; }
    static get properties() { return {
        "poster": {
            "type": "string",
            "mutable": true,
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
            "attribute": "poster",
            "reflect": false
        },
        "large": {
            "type": "string",
            "mutable": true,
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
            "attribute": "large",
            "reflect": false
        },
        "type": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"background\"|\"picture\"",
                "resolved": "\"background\" | \"picture\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": true,
            "defaultValue": "\"picture\""
        },
        "width": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "width",
            "reflect": false
        },
        "height": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "height",
            "reflect": false
        },
        "nozoom": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "nozoom",
            "reflect": true,
            "defaultValue": "false"
        },
        "bg": {
            "type": "string",
            "mutable": true,
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
            "attribute": "bg",
            "reflect": false,
            "defaultValue": "\"auto\""
        },
        "alt": {
            "type": "string",
            "mutable": true,
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
            "attribute": "alt",
            "reflect": false,
            "defaultValue": "\"\""
        }
    }; }
    static get states() { return {
        "aspectRatio": {},
        "sources": {},
        "active": {},
        "figure": {},
        "zoom": {},
        "palette": {}
    }; }
    static get methods() { return {
        "medium": {
            "complexType": {
                "signature": "() => Promise<any>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<any>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "poster",
            "methodName": "handlePosterChange"
        }, {
            "propName": "active",
            "methodName": "handleActive"
        }]; }
}
