export class WebAudioVisualizerShader {
    render() {
        return '';
    }
    static get is() { return "web-audio-visualizer-shader"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "type": {
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
            "attribute": "type",
            "reflect": false
        }
    }; }
}
