import { r as registerInstance, g as getElement } from './core-36452501.js';
import { a as assert } from './helpers-8cea7ddc.js';

const buildBiquadFilterNode = function (context, effectWC) {
    const biquadFilter = context.createBiquadFilter();
    biquadFilter.type = effectWC.method;
    biquadFilter.gain.value = 1.0;
    responsiveTo(biquadFilter, effectWC);
    return biquadFilter;
};
const buildDelayNode = function (context, effectWC) {
    const delay = context.createDelay(5.0);
    delay.delayTime.value = 3.0;
    responsiveTo(delay, effectWC);
    return delay;
};
const buildReverbNode = async function (context, effectWC) {
    const convolver = context.createConvolver();
    var source = effectWC._use;
    const buffer = await source.getBuffer();
    if (buffer) {
        convolver.buffer = buffer;
    }
    // responsiveTo(convolver, effectWC)
    return convolver;
};
// Private
const responsiveTo = function (effect, effectWC) {
    if (effectWC.midicontroller !== false) {
        biquadResponsiveToMidi(effect, effectWC);
    }
    else if (effectWC.responds === "mouse") {
        biquadResponsiveToMouse(effect, effectWC);
    }
    else {
        effect.frequency.value = effectWC.value;
    }
};
const handleMouseMove = function (event) {
    var eventDoc, doc, body;
    event = event || window.event; // IE-ism
    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;
        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop || body && body.scrollTop || 0) -
            (doc && doc.clientTop || body && body.clientTop || 0);
    }
    return {
        toTop: event.pageY,
        toRight: (window.innerWidth - event.pageX),
        toBottom: (window.innerHeight - event.pageY),
        toLeft: event.pageX,
    };
};
const getMousePosition = function () {
    if (window["mousePos"]) {
        var event = new CustomEvent('mouse-update', { detail: window["mousePos"] });
        document.dispatchEvent(event);
    }
};
const biquadResponsiveToMidi = function (effect, effectWC) {
    document.addEventListener('midi-controller-update', (e) => {
        if (effectWC.midicontroller === e.detail.controller.number) {
            effect.frequency.value = ((e.detail.value + 1) / 128) * 3000;
        }
    });
};
const biquadResponsiveToMouse = function (effect, effectWC) {
    document.addEventListener('mouse-update', (e) => {
        if (effectWC.axis === "x") {
            effect.frequency.value = (e.detail.toLeft * 1.5) || 1000;
        }
        else if (effectWC.axis === "x-reverse") {
            effect.frequency.value = (e.detail.toRight * 1.5) || 1000;
        }
        else if (effectWC.axis === "y") {
            effect.frequency.value = (e.detail.toTop * 1.5) || 1000;
        }
        else if (effectWC.axis === "y-reverse") {
            effect.frequency.value = (e.detail.toBottom * 1.5) || 1000;
        }
        else if (effectWC.axis === "bi") {
            effect.frequency.value = ((e.detail.toRight + e.detail.toTop)) || 1000;
        }
        else if (effectWC.axis === "bi-reverse") {
            effect.frequency.value = ((e.detail.toLeft + e.detail.toRight)) || 1000;
        }
    }, false);
    (function () {
        if (!window["mouseInitialized"]) {
            window["mouseInitialized"] = true;
            document.onmousemove = handleMouseMove;
            setInterval(getMousePosition, 100); // setInterval repeats every X ms
        }
    })();
};

const WebAudioEffect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.method = "lowshelf";
        this.value = 1.0;
        this.responds = null;
        this.midicontroller = 0;
        this.axis = "x";
    }
    async attachEffect(context, source) {
        this.context = context;
        this.source = source;
        const webaudio = await source.webAudio();
        this._use = webaudio.querySelector(`web-audio-source[name=${this.use}]`);
        if (assert(this.type, `"${this.type}" is not a valid effect - Routing around to masterGain."`)) {
            if (this.type === "panner") ;
            else if (this.type === "listener") ;
            else if (this.type === "reverb") {
                // make a ConvolverNode
                this.effect = await buildReverbNode(this.context, this);
            }
            else if (this.type === "filter") {
                // make a BiquadFilterNode
                this.effect = buildBiquadFilterNode(this.context, this);
            }
            else if (this.type === "delay") {
                // make a DelayNode
                this.effect = buildDelayNode(this.context, this);
            }
        }
        return this.effect;
    }
    effects() {
        return ["panner", "listener", "reverb", "delay", "compression", "distortion", "filter"];
    }
    get element() { return getElement(this); }
};

export { WebAudioEffect as web_audio_effect };
