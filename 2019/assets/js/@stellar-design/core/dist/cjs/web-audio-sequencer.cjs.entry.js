'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

const WebAudioSequencer = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.name = "web_audio_sequencer";
        this.autoplay = false;
        this.taps = 4;
        this.context = async () => {
            // @ts-ignore
            return await document.querySelector('web-audio').get_context();
        };
        this.noteTime = 0.0;
        this.currentTap = 0;
        this.totalPlayTime = 0.0;
        this.custom = async () => { };
    }
    componentDidLoad() {
        if (this.autoplay) {
            this.play();
        }
    }
    async schedule() {
        var currentTime = (await this.context()).currentTime;
        // The sequence starts at startTime, so normalize currentTime so that it's 0 at the start of the sequence.
        currentTime -= this.startTime;
        while (this.noteTime < currentTime + 0.005) {
            try {
                await this.custom();
                this.totalPlayTime = this.noteTime + this.startTime;
                if (this.currentTap === 0) {
                    this.iterations++;
                }
                this.advance();
            }
            catch (e) {
                console.error(e);
            }
        }
        this.timer = setTimeout(async () => {
            await this.schedule();
        }, 0);
    }
    advance() {
        // Setting tempo to 60 BPM just for now
        var secondsPerBeat = 60 / this.tempo;
        this.currentTap++;
        if (this.currentTap == this.taps) {
            this.currentTap = 0;
        }
        // 0.25 because each square is a 16th note
        this.noteTime += 0.25 * secondsPerBeat;
    }
    async play() {
        if (!(await this.context())) {
            // @ts-ignore
            await document.querySelector('web-audio').connect_the_world();
        }
        this.iterations = 0;
        this.startTime = (await this.context()).currentTime + 0.005 || 0.005;
        await this.schedule();
    }
    async stop() {
        this.iterations = 0;
        this.totalPlayTime = 0;
        this.startTime = null;
        this.currentTap = 0;
        (await this.context()).stop();
        clearTimeout(this.timer);
    }
    render() {
        return [
            core.h("button", { class: "play", onClick: () => { this.play(); } }, "Play"),
            core.h("button", { class: "stop", onClick: () => { this.stop(); } }, "Stop")
        ];
    }
};

exports.web_audio_sequencer = WebAudioSequencer;
