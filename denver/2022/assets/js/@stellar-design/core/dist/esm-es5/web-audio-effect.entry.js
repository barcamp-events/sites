var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, g as getElement } from './core-36452501.js';
import { a as assert } from './helpers-8cea7ddc.js';
var buildBiquadFilterNode = function (context, effectWC) {
    var biquadFilter = context.createBiquadFilter();
    biquadFilter.type = effectWC.method;
    biquadFilter.gain.value = 1.0;
    responsiveTo(biquadFilter, effectWC);
    return biquadFilter;
};
var buildDelayNode = function (context, effectWC) {
    var delay = context.createDelay(5.0);
    delay.delayTime.value = 3.0;
    responsiveTo(delay, effectWC);
    return delay;
};
var buildReverbNode = function (context, effectWC) {
    return __awaiter(this, void 0, void 0, function () {
        var convolver, source, buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    convolver = context.createConvolver();
                    source = effectWC._use;
                    return [4 /*yield*/, source.getBuffer()];
                case 1:
                    buffer = _a.sent();
                    if (buffer) {
                        convolver.buffer = buffer;
                    }
                    // responsiveTo(convolver, effectWC)
                    return [2 /*return*/, convolver];
            }
        });
    });
};
// Private
var responsiveTo = function (effect, effectWC) {
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
var handleMouseMove = function (event) {
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
var getMousePosition = function () {
    if (window["mousePos"]) {
        var event = new CustomEvent('mouse-update', { detail: window["mousePos"] });
        document.dispatchEvent(event);
    }
};
var biquadResponsiveToMidi = function (effect, effectWC) {
    document.addEventListener('midi-controller-update', function (e) {
        if (effectWC.midicontroller === e.detail.controller.number) {
            effect.frequency.value = ((e.detail.value + 1) / 128) * 3000;
        }
    });
};
var biquadResponsiveToMouse = function (effect, effectWC) {
    document.addEventListener('mouse-update', function (e) {
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
var WebAudioEffect = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.method = "lowshelf";
        this.value = 1.0;
        this.responds = null;
        this.midicontroller = 0;
        this.axis = "x";
    }
    class_1.prototype.attachEffect = function (context, source) {
        return __awaiter(this, void 0, void 0, function () {
            var webaudio, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.context = context;
                        this.source = source;
                        return [4 /*yield*/, source.webAudio()];
                    case 1:
                        webaudio = _b.sent();
                        this._use = webaudio.querySelector("web-audio-source[name=" + this.use + "]");
                        if (!assert(this.type, "\"" + this.type + "\" is not a valid effect - Routing around to masterGain.\"")) return [3 /*break*/, 6];
                        if (!(this.type === "panner")) return [3 /*break*/, 2];
                        ;
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(this.type === "listener")) return [3 /*break*/, 3];
                        ;
                        return [3 /*break*/, 6];
                    case 3:
                        if (!(this.type === "reverb")) return [3 /*break*/, 5];
                        // make a ConvolverNode
                        _a = this;
                        return [4 /*yield*/, buildReverbNode(this.context, this)];
                    case 4:
                        // make a ConvolverNode
                        _a.effect = _b.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        if (this.type === "filter") {
                            // make a BiquadFilterNode
                            this.effect = buildBiquadFilterNode(this.context, this);
                        }
                        else if (this.type === "delay") {
                            // make a DelayNode
                            this.effect = buildDelayNode(this.context, this);
                        }
                        _b.label = 6;
                    case 6: return [2 /*return*/, this.effect];
                }
            });
        });
    };
    class_1.prototype.effects = function () {
        return ["panner", "listener", "reverb", "delay", "compression", "distortion", "filter"];
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { WebAudioEffect as web_audio_effect };
