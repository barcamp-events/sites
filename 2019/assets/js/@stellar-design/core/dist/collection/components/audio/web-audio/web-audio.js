import '../web-audio-debugger/web-audio-debugger';
import { BufferLoader } from '../bufferloader';
import { delay } from '../helpers';
import webmidi from 'webmidi';
import { asyncForEach } from '../../../utils';
export class WebAudio {
    constructor() {
        this.name = "web_audio";
        this.prepared = false;
        this.midi = false;
        this.sources = [];
        this.keys = {};
    }
    async source(name) {
        if (this.sources.length === 0) {
            await this.connect_the_world();
        }
        return this.sources[name];
    }
    async get_context() {
        return this.context;
    }
    async is_prepared() {
        return this.prepared;
    }
    async stop() {
        return await asyncForEach(this.sources, async (source) => {
            await source.stop();
        });
    }
    /******************
     * Private behavior
     **/
    componentDidLoad() {
        this.connect_debugger();
    }
    async connect_the_world() {
        this.connect_context();
        this.gain = this.context.createGain();
        await this.connect_visualizers();
        await this.connect_sources();
        await this.connect_midi();
        this.prepared = true;
        await delay(500);
        return true;
    }
    connect_context() {
        // @ts-ignore
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        ;
        this.log("Connected to this.context");
    }
    async connect_sources() {
        await this.build_sources();
    }
    async build_sources() {
        this.log("Building sources");
        this._sources = Array.from(this.element.querySelectorAll('web-audio-source'));
        this.externalFiles = [];
        await asyncForEach(this._sources, async (source, index) => {
            // @ts-ignore
            this.log(`(${index}) Preparing ${source.name}`);
            // @ts-ignore
            this.sources[source.name] = source;
            // @ts-ignore
            let bufferLoader = new BufferLoader(this.context, [source.src], async (bufferList) => {
                await this.cache_sources(bufferList, source);
            });
            await bufferLoader.load();
        });
    }
    async cache_sources(bufferList, source) {
        await asyncForEach(bufferList, async (item) => {
            this.log(`Caching ${source.name}`);
            if (this.midi) {
                this.log(`Assigned ${source.name} to midi key ${source.midikey}, channel ${source.midichannel}`);
                if (this.keys[source.midichannel] == undefined) {
                    this.keys[source.midichannel] = [];
                }
                this.keys[source.midichannel][source.midikey] = source;
            }
            this._currentSource = source;
            await this._currentSource.assignBuffer(this, item);
            this.log(`Source ${source.name} is ready`);
        });
        this._currentSource = null;
    }
    async connect_visualizers() {
        await delay(20);
        // @ts-ignore
        this.visualizers = Array.from(document.querySelectorAll(`web-audio-visualizer[for="${this.name}"]`));
        if (this.visualizers) {
            this.log(`Attaching visualizers`);
            await asyncForEach(this.visualizers, async (visualizer, index) => {
                if (index === 0) {
                    visualizer = await visualizer.connect(this.context, this.context.destination);
                }
                else {
                    visualizer = await visualizer.connect(this.context, this.previousVisualizer.analyser);
                }
                this.previousVisualizer = visualizer;
            });
        }
        else {
            this.log(`No visualizers for ${this.name}`);
        }
        if (this.visualizers.length >= 1) {
            await this.gain.connect(this.previousVisualizer.analyser);
        }
        else {
            await this.gain.connect(this.context.destination);
        }
    }
    connect_debugger() {
        this.debugger = document.querySelector(`web-audio-debugger[for="${this.name}"]`);
        this.log("Connected debugger");
    }
    log(string) {
        if (this.debugger) {
            this.debugger.addHistory(string);
        }
    }
    connect_midi() {
        if (this.midi) {
            webmidi.enable((err) => {
                if (err) {
                    this.log("Midi couldn't be enabled." + err);
                }
                else {
                    this.log("Midi is enabled");
                }
                var input = webmidi.inputs[0];
                if (input) {
                    input.addListener('noteon', 'all', (e) => {
                        this.log(`KEY: Channel: ${e.channel}, Note: ${e.note.number}, Name: ${e.note.name}, Oct: ${e.note.octave}`);
                        if (this.keys[e.channel]) {
                            this.keys[e.channel][e.note.number].gain().value = (e.data[2] / 175);
                            this.keys[e.channel][e.note.number].play();
                        }
                    });
                    input.addListener('pitchbend', 'all', (e) => {
                        this.log(`PITCH: Channel: ${e.channel}, Value: ${e.value}`);
                    });
                    // Listen to control change message on all channels
                    input.addListener('controlchange', 'all', (e) => {
                        this.log(`CTRL: Channel: ${e.channel}, controller: ${e.controller.number}, Value: ${e.value}`);
                        var event = new CustomEvent('midi-controller-update', { detail: e });
                        document.dispatchEvent(event);
                    });
                    this.log("Listeners added for notes, pitch bend, and controllers.");
                }
            });
        }
    }
    static get is() { return "web-audio"; }
    static get properties() { return {
        "name": {
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
            "attribute": "name",
            "reflect": false,
            "defaultValue": "\"web_audio\""
        },
        "autoplay": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Boolean",
                "resolved": "Boolean",
                "references": {
                    "Boolean": {
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
        "midi": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Boolean",
                "resolved": "Boolean",
                "references": {
                    "Boolean": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "debugger": {},
        "prepared": {},
        "context": {},
        "gain": {},
        "sources": {},
        "_sources": {},
        "_currentSource": {},
        "keys": {},
        "externalFiles": {},
        "visualizers": {},
        "previousVisualizer": {},
        "visualizerNodes": {}
    }; }
    static get methods() { return {
        "source": {
            "complexType": {
                "signature": "(name: any) => Promise<any>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
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
        },
        "get_context": {
            "complexType": {
                "signature": "() => Promise<AudioContext>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "AudioContext": {
                        "location": "global"
                    }
                },
                "return": "Promise<AudioContext>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "is_prepared": {
            "complexType": {
                "signature": "() => Promise<Boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "Boolean": {
                        "location": "global"
                    }
                },
                "return": "Promise<Boolean>"
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
        "connect_the_world": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
}
