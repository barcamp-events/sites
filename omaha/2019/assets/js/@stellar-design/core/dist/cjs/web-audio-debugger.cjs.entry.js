'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

const WebAudioDebugger = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.history = [];
        this.count = 50;
    }
    async addHistory(string) {
        let our_history = [
            string,
            ...this.history
        ];
        if (our_history.length > this.count) {
            this.history = our_history.slice(1, this.count);
        }
        else {
            this.history = our_history;
        }
    }
    render() {
        return (core.h("div", null, this.history.map((log) => core.h("div", null, core.h("p", null, log)))));
    }
    static get style() { return "web-audio-debugger{display:block;position:fixed;top:0;right:0;width:160px;height:300px;overflow:auto;text-align:right;padding:1rem;border:2px solid #000}web-audio-debugger p{font-size:12px;margin:0 0 1em 0}"; }
};

exports.web_audio_debugger = WebAudioDebugger;
