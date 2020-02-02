import { h } from "@stencil/core";
import * as Kaleidoscope from "kaleidoscopejs";
export class Video360 {
    constructor() {
        this.width = 1280;
        this.height = 720;
    }
    componentDidLoad() {
        this.video = this.element.querySelector(".video");
        this.viewer = new Kaleidoscope.Video({
            source: this.src,
            container: this.video,
            width: this.width,
            height: this.height,
            autoplay: true,
            muted: true,
            loop: true
        });
        this.viewer.render();
        this.viewer.play();
    }
    render() {
        return [
            h("div", { class: "video" }),
            h("div", { class: "overlay" })
        ];
    }
    static get is() { return "stellar-360-video"; }
    static get originalStyleUrls() { return {
        "$": ["360-video.css"]
    }; }
    static get styleUrls() { return {
        "$": ["360-video.css"]
    }; }
    static get properties() { return {
        "src": {
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
            "attribute": "src",
            "reflect": true
        },
        "poster": {
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
            "attribute": "poster",
            "reflect": true
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
            "reflect": true,
            "defaultValue": "1280"
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
            "reflect": true,
            "defaultValue": "720"
        }
    }; }
    static get states() { return {
        "viewer": {},
        "video": {}
    }; }
    static get elementRef() { return "element"; }
}
