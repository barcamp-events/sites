import { h } from "@stencil/core";
import { bars, wave, circle, bars2 } from './visualizations';
import { colors } from '../../../utils';
import hexToHsl from 'hex-to-hsl';
export class WebAudioVisualizer {
    constructor() {
        this.for = "web_audio";
        this.type = "wave";
        this.smoothing = 0.7;
        this.size = 1024;
        this.color = "white";
        this.width = 1024;
        this.height = 1024;
        this.clearBackground = () => {
            this.canvasCTX.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.canvasCTX.fillStyle = "transparent";
            this.canvasCTX.fillRect(0, 0, this.canvas.width, this.canvas.height);
        };
    }
    componentWillLoad() {
        this.handleColorChange();
    }
    componentDidLoad() {
        this.canvas = this.element.shadowRoot.querySelector('canvas');
    }
    handleColorChange() {
        if (["white", "black", "black-alt"].includes(this.color)) {
            this._color = hexToHsl(colors[this.color]);
        }
        else {
            this._color = hexToHsl(colors[this.color][5]);
        }
    }
    async connect(context, destination) {
        this.context = context;
        this.analyser = this.context.createAnalyser();
        if (destination) {
            this.analyser.connect(destination);
        }
        this.freqs = new Uint8Array(this.analyser.frequencyBinCount);
        this.times = new Uint8Array(this.analyser.frequencyBinCount);
        this.canvasCTX = this.canvas.getContext('2d');
        requestAnimationFrame(this.draw.bind(this));
        return this;
    }
    draw() {
        this.analyser.smoothingTimeConstant = this.smoothing;
        this.analyser.fftSize = this.size;
        // Get the frequency data from the currently playing music
        this.analyser.getByteFrequencyData(this.freqs);
        this.analyser.getByteTimeDomainData(this.times);
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.clearBackground();
        if (this.type === "wave") {
            wave(this);
        }
        else if (this.type === "bars") {
            bars(this);
        }
        else if (this.type === "bars2") {
            bars2(this);
        }
        else if (this.type === "circle") {
            circle(this);
        }
        requestAnimationFrame(this.draw.bind(this));
    }
    getFrequencyValue(freq) {
        var nyquist = this.context.sampleRate / 2;
        var index = Math.round(freq / nyquist * this.freqs.length);
        return this.freqs[index];
    }
    render() {
        return (h("canvas", { id: "canvas" }));
    }
    static get is() { return "web-audio-visualizer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["web-audio-visualizer.css"]
    }; }
    static get styleUrls() { return {
        "$": ["web-audio-visualizer.css"]
    }; }
    static get properties() { return {
        "for": {
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
            "attribute": "for",
            "reflect": true,
            "defaultValue": "\"web_audio\""
        },
        "type": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string|\"wave\"|\"bars\"|\"circle\"|\"bars2\"",
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
            "reflect": true,
            "defaultValue": "\"wave\""
        },
        "smoothing": {
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
            "attribute": "smoothing",
            "reflect": false,
            "defaultValue": "0.7"
        },
        "size": {
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
            "attribute": "size",
            "reflect": false,
            "defaultValue": "1024"
        },
        "color": {
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
            "attribute": "color",
            "reflect": false,
            "defaultValue": "\"white\""
        },
        "width": {
            "type": "number",
            "mutable": true,
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
            "defaultValue": "1024"
        },
        "height": {
            "type": "number",
            "mutable": true,
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
            "defaultValue": "1024"
        },
        "analyser": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "AnalyserNode",
                "resolved": "AnalyserNode",
                "references": {
                    "AnalyserNode": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "renderer": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "AnalyserNode",
                "resolved": "AnalyserNode",
                "references": {
                    "AnalyserNode": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "_color": {
            "type": "any",
            "mutable": true,
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
            "attribute": "_color",
            "reflect": false
        }
    }; }
    static get states() { return {
        "canvas": {},
        "canvasCTX": {},
        "freqs": {},
        "times": {},
        "context": {},
        "vertex": {},
        "vertexShader": {},
        "fragment": {},
        "fragShader": {},
        "fragTime": {},
        "fragSpectrumArray": {},
        "fragSpectrum": {},
        "_bufferLength": {},
        "_dataArray": {}
    }; }
    static get methods() { return {
        "connect": {
            "complexType": {
                "signature": "(context: AudioContext, destination?: any) => Promise<this>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "AudioContext": {
                        "location": "global"
                    }
                },
                "return": "Promise<this>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "color",
            "methodName": "handleColorChange"
        }]; }
}
