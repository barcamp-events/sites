import { h } from "@stencil/core";
import ezClipboard from 'ez-clipboard';
import properties from 'css-custom-properties';
import { get_interview_lines, update_interview_lines } from './helpers';
import { delay } from '../../../utils';
export class Interview {
    constructor() {
        this.randomId = Math.floor(Math.random() * 6) + 1;
        this.color = "white";
        this.playing = false;
        this.width = 800;
        this.height = 800;
        this.aspectRatio = 100;
        this.visualization = "bars2";
        this.loaded = false;
        this.loading = false;
        this.visible = false;
        this.duration = 0;
        this.current = 0;
        this.cache = new WeakMap();
    }
    componentWillLoad() {
        properties.set({
            "--width": `${this.width}px`,
            "--height": `${this.height}px`,
            "--aspectRatio": `${this.aspectRatio}%`
        }, this.element);
    }
    async componentDidLoad() {
        if (!this.interviewLines) {
            this.interviewLines = get_interview_lines(this.element);
        }
        update_interview_lines(this.interviewLines, this.cache, this.time);
    }
    handleUpdate(event) {
        this.current = Math.abs(Math.round(event.detail.time * 1000));
        this.duration = Math.round(event.detail.duration * 1000);
        update_interview_lines(this.interviewLines, this.cache, this.time);
    }
    get time() {
        return this.current;
    }
    async attachContext() {
        if (!this.loaded) {
            this.loading = true;
            await this.audio.connect_the_world();
            if (!this.audio_source) {
                this.audio_source = await this.audio.source("interview");
                await this.audio_source.prepare();
            }
            const duration = await this.audio_source.getDuration();
            this.duration = Math.round(duration * 1000);
            this.loaded = true;
            this.loading = false;
        }
    }
    async in() {
        await delay(1000);
        this.visible = true;
        await delay(100);
        this.audio = this.element.querySelector('web-audio');
        this.audio_source = await this.audio.source("interview");
    }
    async out() {
        this.pause();
    }
    async play() {
        if (this.audio) {
            if (this.audio_source) {
                await this.audio_source.play();
                this.playing = this.audio_source.playing;
            }
        }
    }
    async skipTo(time) {
        if (this.audio) {
            if (this.audio_source) {
                await this.audio_source.skipTo(time);
                this.playing = this.audio_source.playing;
            }
        }
    }
    async pause() {
        if (this.audio) {
            if (this.audio_source) {
                await this.audio_source.pause();
                this.playing = this.audio_source.playing;
            }
        }
    }
    async toggle() {
        if (this.audio) {
            if (this.audio_source) {
                await this.audio_source.toggle();
                this.playing = this.audio_source.playing;
            }
        }
    }
    async handleClick() {
        await this.attachContext();
        await this.toggle();
        if (this.current === this.duration) {
            await this.skipTo(0);
        }
    }
    handleCurrentClick() {
        ezClipboard.copyPlain(this.current);
    }
    render() {
        return (h("div", { class: "card", onDblClick: () => { this.handleClick(); } },
            !this.visible && h("div", null,
                h("skeleton-img", { width: this.width, height: this.height, loading: true }),
                h("div", { style: { "display": "none" } },
                    h("slot", null))),
            this.visible && h("section", null,
                h("slot", null),
                h("div", { class: "transcript" },
                    h("slot", { name: "transcript" })),
                h("web-audio", { name: `interview-${this.randomId}` },
                    h("web-audio-source", { src: this.src, name: "interview" })),
                h("web-audio-visualizer", { for: `interview-${this.randomId}`, type: this.visualization, width: this.width, height: this.height, color: this.color }),
                h("button", { class: this.loading ? "loading button" : (this.playing ? "playing button" : "button"), onClick: () => { this.handleClick(); } },
                    h("stellar-asset", { name: this.loading ? "sync" : (this.playing ? "pause" : "play"), class: this.loading ? "animation-spin" : "" })),
                h("h3", null,
                    h("stellar-unit", { class: "current", value: this.current, from: "ms", to: "s", onClick: () => { this.handleCurrentClick(); } })),
                h("h3", null,
                    h("stellar-unit", { class: "duration", value: this.duration, from: "ms", to: "s" })),
                h("stellar-progress", { value: this.current, max: this.duration, noease: true, blurable: false, slender: true, editable: true, onUpdate: (e) => { this.skipTo(e.detail.value); } })),
            h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) })));
    }
    static get is() { return "stellar-interview"; }
    static get originalStyleUrls() { return {
        "$": ["interview.css"]
    }; }
    static get styleUrls() { return {
        "$": ["interview.css"]
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
            "reflect": false
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
        "playing": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "playing",
            "reflect": false,
            "defaultValue": "false"
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
            "reflect": false,
            "defaultValue": "800"
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
            "reflect": false,
            "defaultValue": "800"
        },
        "aspectRatio": {
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
            "attribute": "aspect-ratio",
            "reflect": false,
            "defaultValue": "100"
        },
        "visualization": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"circle\"|\"bars\"|\"wave\"|\"bars2\"",
                "resolved": "\"bars\" | \"bars2\" | \"circle\" | \"wave\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "visualization",
            "reflect": false,
            "defaultValue": "\"bars2\""
        }
    }; }
    static get states() { return {
        "randomId": {},
        "audio": {},
        "audio_source": {},
        "loaded": {},
        "loading": {},
        "visible": {},
        "updateFunc": {},
        "duration": {},
        "current": {},
        "interviewLines": {}
    }; }
    static get methods() { return {
        "play": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "skipTo": {
            "complexType": {
                "signature": "(time: number) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "pause": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "toggle": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "update",
            "method": "handleUpdate",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
