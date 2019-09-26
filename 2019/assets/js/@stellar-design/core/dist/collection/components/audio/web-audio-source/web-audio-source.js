import raf from 'raf';
export class WebAudioSource {
    constructor() {
        this.inert = false;
        this.midikey = 0;
        this.midichannel = 1;
        this.prepared = false;
        this.status = "paused";
        this.effectsvolume = 100;
        this.effects = [];
        this.duration = 0.0;
        this.startTime = 0.0;
        this.pausedTime = 0.0;
        this.elapsedTime = 0.0;
        this.playing = false;
    }
    async getBuffer() {
        return this.buffer;
    }
    async webAudio() {
        return this.webAudioWrapper;
    }
    async gain(place = "wet") {
        if (place === "wet") {
            return this.wetGain;
        }
        else if (place === "dry") {
            return this.dryGain;
        }
        else if (place === "channel") {
            return this.channelGain;
        }
    }
    async getDuration() {
        return this.duration;
    }
    currentTime() {
        let current = 0;
        if (this.pausedTime) {
            current = this.pausedTime;
        }
        else {
            if (this.startTime) {
                current = this.context.currentTime - this.startTime;
            }
        }
        if (current >= this.duration) {
            current = this.duration;
        }
        return current;
    }
    ;
    async prepare() {
        if (!this.inert && this.context) {
            this.source = this.context.createBufferSource();
            this.source.buffer = this.buffer;
            if (this.wetGain) {
                this.wetGain.gain.value = this.effectsvolume / 100;
                this.dryGain.gain.value = Math.abs((this.effectsvolume - 100) / 100);
            }
            else {
                this.dryGain.gain.value = 1;
            }
            if (this.wetGain) {
                this.source.connect(this.wetGain);
            }
            this.source.connect(this.dryGain);
            this.duration = this.source.buffer.duration;
            this.prepared = true;
        }
    }
    async play() {
        if (!this.inert) {
            await this.prepare();
            if (this.source) {
                this.source.start(0, this.pausedTime);
                this.startTime = this.context.currentTime - this.pausedTime;
                this.pausedTime = 0;
                this.playing = true;
                this.tick();
                raf(() => { this.tick(); });
            }
        }
        else {
            throw "Cannot play inert media.";
        }
    }
    async skipTo(time) {
        await this.stop();
        this.pausedTime = time / 1000;
        await this.play();
    }
    async pause() {
        this.elapsedTime = this.context.currentTime - this.startTime;
        await this.stop();
        this.pausedTime = this.elapsedTime;
        this.playing = false;
    }
    async toggle() {
        if (this.playing) {
            this.pause();
        }
        else {
            this.play();
        }
    }
    async stop() {
        if (this.source) {
            this.source.disconnect();
            this.source.stop();
        }
        this.source = null;
        this.pausedTime = 0;
        this.startTime = 0;
        this.playing = false;
    }
    tick() {
        this.update.emit({
            time: this.currentTime(),
            duration: this.duration
        });
        if (this.source) {
            raf(() => { this.tick(); });
        }
    }
    async assignBuffer(webAudio, buffer) {
        this.webAudioWrapper = webAudio.element;
        this.context = webAudio.context;
        this.buffer = buffer;
        if (!this.inert) {
            this.masterGain = webAudio.gain;
            this.channelGain = this.context.createGain();
            await this.prepareEffects();
            if (Object.keys(this.effects).length > 0) {
                // Make the source and gain
                this.wetGain = this.context.createGain();
                let previous = "";
                Object.keys(this.effects).reverse().forEach((element, index) => {
                    if (index === 0) {
                        this.wetGain.connect(this.effects[element]);
                    }
                    else {
                        this.effects[previous].connect(this.effects[element]);
                    }
                    previous = element;
                });
                this.effects[previous].connect(this.channelGain);
            }
            this.dryGain = this.context.createGain();
            this.dryGain.connect(this.channelGain);
            this.channelGain.connect(this.masterGain);
        }
    }
    async prepareEffects() {
        if (this.element.parentElement.nodeName !== "WEB-AUDIO") {
            let element = this.element.parentElement;
            while (element.nodeName !== "WEB-AUDIO") {
                this.effects[element.getAttribute("name")] = await element.attachEffect(this.context, this.element);
                element = element.parentElement;
            }
        }
    }
    static get is() { return "web-audio-source"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "src": {
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
            "attribute": "src",
            "reflect": true
        },
        "name": {
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
            "attribute": "name",
            "reflect": true
        },
        "inert": {
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
            "attribute": "inert",
            "reflect": false,
            "defaultValue": "false"
        },
        "midikey": {
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
            "attribute": "midikey",
            "reflect": true,
            "defaultValue": "0"
        },
        "midichannel": {
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
            "attribute": "midichannel",
            "reflect": true,
            "defaultValue": "1"
        },
        "prepared": {
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
            "attribute": "prepared",
            "reflect": false,
            "defaultValue": "false"
        },
        "effectsvolume": {
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
            "attribute": "effectsvolume",
            "reflect": true,
            "defaultValue": "100"
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
        }
    }; }
    static get states() { return {
        "webAudioWrapper": {},
        "status": {},
        "context": {},
        "masterGain": {},
        "wetGain": {},
        "dryGain": {},
        "channelGain": {},
        "effects": {},
        "source": {},
        "buffer": {},
        "entry": {},
        "duration": {},
        "startTime": {},
        "pausedTime": {},
        "elapsedTime": {}
    }; }
    static get events() { return [{
            "method": "update",
            "name": "update",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "getBuffer": {
            "complexType": {
                "signature": "() => Promise<AudioBuffer>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "AudioBuffer": {
                        "location": "global"
                    }
                },
                "return": "Promise<AudioBuffer>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "webAudio": {
            "complexType": {
                "signature": "() => Promise<HTMLElement>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<HTMLElement>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "gain": {
            "complexType": {
                "signature": "(place?: string) => Promise<GainNode>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "GainNode": {
                        "location": "global"
                    }
                },
                "return": "Promise<GainNode>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "getDuration": {
            "complexType": {
                "signature": "() => Promise<number>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<number>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "prepare": {
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
                "signature": "(time: any) => Promise<void>",
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
        },
        "stop": {
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
        "assignBuffer": {
            "complexType": {
                "signature": "(webAudio: any, buffer: any) => Promise<void>",
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
}
