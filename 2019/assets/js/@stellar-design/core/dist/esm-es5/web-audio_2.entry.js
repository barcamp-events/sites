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
import { r as registerInstance, g as getElement, c as createEvent } from './core-8f5ef0c7.js';
import { e as asyncForEach } from './index-9d3b27e3.js';
import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-ae1b5db5.js';
import './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
import { a as raf } from './index-ef1c2b01.js';
import { d as delay } from './helpers-8cea7ddc.js';
var BufferLoader = /** @class */ (function () {
    function BufferLoader(context, urlList, callback) {
        this.loadBuffer = function (url, index) {
            // Load buffer asynchronously
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.responseType = "arraybuffer";
            var loader = this;
            request.onload = function () {
                // Asynchronously decode the audio file data in request.response
                loader.context.decodeAudioData(request.response, function (buffer) {
                    if (!buffer) {
                        alert('error decoding file data: ' + url);
                        return;
                    }
                    loader.bufferList[index] = buffer;
                    if (++loader.loadCount == loader.urlList.length)
                        loader.onload(loader.bufferList);
                }, function (error) {
                    console.error('decodeAudioData error', error);
                });
            };
            request.onerror = function () {
                alert('BufferLoader: XHR error');
            };
            request.send();
        };
        this.load = function () {
            for (var i = 0; i < this.urlList.length; ++i) {
                this.loadBuffer(this.urlList[i], i);
            }
        };
        this.context = context;
        this.urlList = urlList;
        this.onload = callback;
        this.bufferList = new Array();
        this.loadCount = 0;
    }
    return BufferLoader;
}());
var webmidi_min = createCommonjsModule(function (module) {
    /*
    
    WebMidi v2.5.1
    
    WebMidi.js helps you tame the Web MIDI API. Send and receive MIDI messages with ease. Control instruments with user-friendly functions (playNote, sendPitchBend, etc.). React to MIDI input with simple event listeners (noteon, pitchbend, controlchange, etc.).
    https://github.com/djipco/webmidi
    
    
    The MIT License (MIT)
    
    Copyright (c) 2015-2019, Jean-Philippe Côté
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
    associated documentation files (the "Software"), to deal in the Software without restriction,
    including without limitation the rights to use, copy, modify, merge, publish, distribute,
    sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial
    portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
    NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
    OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    */
    !function (scope) { function WebMidi() { if (WebMidi.prototype._singleton)
        throw new Error("WebMidi is a singleton, it cannot be instantiated directly."); (WebMidi.prototype._singleton = this)._inputs = [], this._outputs = [], this._userHandlers = {}, this._stateChangeQueue = [], this._processingStateChange = !1, this._midiInterfaceEvents = ["connected", "disconnected"], this._nrpnBuffer = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], this._nrpnEventsEnabled = !0, this._nrpnTypes = ["entry", "increment", "decrement"], this._notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"], this._semitones = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }, Object.defineProperties(this, { MIDI_SYSTEM_MESSAGES: { value: { sysex: 240, timecode: 241, songposition: 242, songselect: 243, tuningrequest: 246, sysexend: 247, clock: 248, start: 250, continue: 251, stop: 252, activesensing: 254, reset: 255, midimessage: 0, unknownsystemmessage: -1 }, writable: !1, enumerable: !0, configurable: !1 }, MIDI_CHANNEL_MESSAGES: { value: { noteoff: 8, noteon: 9, keyaftertouch: 10, controlchange: 11, channelmode: 11, nrpn: 11, programchange: 12, channelaftertouch: 13, pitchbend: 14 }, writable: !1, enumerable: !0, configurable: !1 }, MIDI_REGISTERED_PARAMETER: { value: { pitchbendrange: [0, 0], channelfinetuning: [0, 1], channelcoarsetuning: [0, 2], tuningprogram: [0, 3], tuningbank: [0, 4], modulationrange: [0, 5], azimuthangle: [61, 0], elevationangle: [61, 1], gain: [61, 2], distanceratio: [61, 3], maximumdistance: [61, 4], maximumdistancegain: [61, 5], referencedistanceratio: [61, 6], panspreadangle: [61, 7], rollangle: [61, 8] }, writable: !1, enumerable: !0, configurable: !1 }, MIDI_CONTROL_CHANGE_MESSAGES: { value: { bankselectcoarse: 0, modulationwheelcoarse: 1, breathcontrollercoarse: 2, footcontrollercoarse: 4, portamentotimecoarse: 5, dataentrycoarse: 6, volumecoarse: 7, balancecoarse: 8, pancoarse: 10, expressioncoarse: 11, effectcontrol1coarse: 12, effectcontrol2coarse: 13, generalpurposeslider1: 16, generalpurposeslider2: 17, generalpurposeslider3: 18, generalpurposeslider4: 19, bankselectfine: 32, modulationwheelfine: 33, breathcontrollerfine: 34, footcontrollerfine: 36, portamentotimefine: 37, dataentryfine: 38, volumefine: 39, balancefine: 40, panfine: 42, expressionfine: 43, effectcontrol1fine: 44, effectcontrol2fine: 45, holdpedal: 64, portamento: 65, sustenutopedal: 66, softpedal: 67, legatopedal: 68, hold2pedal: 69, soundvariation: 70, resonance: 71, soundreleasetime: 72, soundattacktime: 73, brightness: 74, soundcontrol6: 75, soundcontrol7: 76, soundcontrol8: 77, soundcontrol9: 78, soundcontrol10: 79, generalpurposebutton1: 80, generalpurposebutton2: 81, generalpurposebutton3: 82, generalpurposebutton4: 83, reverblevel: 91, tremololevel: 92, choruslevel: 93, celestelevel: 94, phaserlevel: 95, databuttonincrement: 96, databuttondecrement: 97, nonregisteredparametercoarse: 98, nonregisteredparameterfine: 99, registeredparametercoarse: 100, registeredparameterfine: 101 }, writable: !1, enumerable: !0, configurable: !1 }, MIDI_NRPN_MESSAGES: { value: { entrymsb: 6, entrylsb: 38, increment: 96, decrement: 97, paramlsb: 98, parammsb: 99, nullactiveparameter: 127 }, writable: !1, enumerable: !0, configurable: !1 }, MIDI_CHANNEL_MODE_MESSAGES: { value: { allsoundoff: 120, resetallcontrollers: 121, localcontrol: 122, allnotesoff: 123, omnimodeoff: 124, omnimodeon: 125, monomodeon: 126, polymodeon: 127 }, writable: !1, enumerable: !0, configurable: !1 }, octaveOffset: { value: 0, writable: !0, enumerable: !0, configurable: !1 } }), Object.defineProperties(this, { supported: { enumerable: !0, get: function () { return "requestMIDIAccess" in navigator; } }, enabled: { enumerable: !0, get: function () { return void 0 !== this.interface; }.bind(this) }, inputs: { enumerable: !0, get: function () { return this._inputs; }.bind(this) }, outputs: { enumerable: !0, get: function () { return this._outputs; }.bind(this) }, sysexEnabled: { enumerable: !0, get: function () { return !(!this.interface || !this.interface.sysexEnabled); }.bind(this) }, nrpnEventsEnabled: { enumerable: !0, get: function () { return !!this._nrpnEventsEnabled; }.bind(this), set: function (enabled) { return this._nrpnEventsEnabled = enabled, this._nrpnEventsEnabled; } }, nrpnTypes: { enumerable: !0, get: function () { return this._nrpnTypes; }.bind(this) }, time: { enumerable: !0, get: function () { return performance.now(); } } }); } var wm = new WebMidi; function Input(midiInput) { var that = this; this._userHandlers = { channel: {}, system: {} }, this._midiInput = midiInput, Object.defineProperties(this, { connection: { enumerable: !0, get: function () { return that._midiInput.connection; } }, id: { enumerable: !0, get: function () { return that._midiInput.id; } }, manufacturer: { enumerable: !0, get: function () { return that._midiInput.manufacturer; } }, name: { enumerable: !0, get: function () { return that._midiInput.name; } }, state: { enumerable: !0, get: function () { return that._midiInput.state; } }, type: { enumerable: !0, get: function () { return that._midiInput.type; } } }), this._initializeUserHandlers(), this._midiInput.onmidimessage = this._onMidiMessage.bind(this); } function Output(midiOutput) { var that = this; this._midiOutput = midiOutput, Object.defineProperties(this, { connection: { enumerable: !0, get: function () { return that._midiOutput.connection; } }, id: { enumerable: !0, get: function () { return that._midiOutput.id; } }, manufacturer: { enumerable: !0, get: function () { return that._midiOutput.manufacturer; } }, name: { enumerable: !0, get: function () { return that._midiOutput.name; } }, state: { enumerable: !0, get: function () { return that._midiOutput.state; } }, type: { enumerable: !0, get: function () { return that._midiOutput.type; } } }); } WebMidi.prototype.enable = function (callback, sysex) { this.enabled || (this.supported ? navigator.requestMIDIAccess({ sysex: sysex }).then(function (midiAccess) { var promiseTimeout, events = [], promises = []; this.interface = midiAccess, this._resetInterfaceUserHandlers(), this.interface.onstatechange = function (e) { events.push(e); }; for (var inputs = midiAccess.inputs.values(), input = inputs.next(); input && !input.done; input = inputs.next())
        promises.push(input.value.open()); for (var outputs = midiAccess.outputs.values(), output = outputs.next(); output && !output.done; output = outputs.next())
        promises.push(output.value.open()); function onPortsOpen() { clearTimeout(promiseTimeout), this._updateInputsAndOutputs(), this.interface.onstatechange = this._onInterfaceStateChange.bind(this), "function" == typeof callback && callback.call(this), events.forEach(function (event) { this._onInterfaceStateChange(event); }.bind(this)); } promiseTimeout = setTimeout(onPortsOpen.bind(this), 200), Promise && Promise.all(promises).catch(function (err) { }).then(onPortsOpen.bind(this)); }.bind(this), function (err) { "function" == typeof callback && callback.call(this, err); }.bind(this)) : "function" == typeof callback && callback(new Error("The Web MIDI API is not supported by your browser."))); }, WebMidi.prototype.disable = function () { if (!this.supported)
        throw new Error("The Web MIDI API is not supported by your browser."); this.interface && (this.interface.onstatechange = void 0), this.interface = void 0, this._inputs = [], this._outputs = [], this._nrpnEventsEnabled = !0, this._resetInterfaceUserHandlers(); }, WebMidi.prototype.addListener = function (type, listener) { if (!this.enabled)
        throw new Error("WebMidi must be enabled before adding event listeners."); if ("function" != typeof listener)
        throw new TypeError("The 'listener' parameter must be a function."); if (!(0 <= this._midiInterfaceEvents.indexOf(type)))
        throw new TypeError("The specified event type is not supported."); return this._userHandlers[type].push(listener), this; }, WebMidi.prototype.hasListener = function (type, listener) { if (!this.enabled)
        throw new Error("WebMidi must be enabled before checking event listeners."); if ("function" != typeof listener)
        throw new TypeError("The 'listener' parameter must be a function."); if (!(0 <= this._midiInterfaceEvents.indexOf(type)))
        throw new TypeError("The specified event type is not supported."); for (var o = 0; o < this._userHandlers[type].length; o++)
        if (this._userHandlers[type][o] === listener)
            return !0; return !1; }, WebMidi.prototype.removeListener = function (type, listener) { if (!this.enabled)
        throw new Error("WebMidi must be enabled before removing event listeners."); if (void 0 !== listener && "function" != typeof listener)
        throw new TypeError("The 'listener' parameter must be a function."); if (0 <= this._midiInterfaceEvents.indexOf(type))
        if (listener)
            for (var o = 0; o < this._userHandlers[type].length; o++)
                this._userHandlers[type][o] === listener && this._userHandlers[type].splice(o, 1);
        else
            this._userHandlers[type] = [];
    else {
        if (void 0 !== type)
            throw new TypeError("The specified event type is not supported.");
        this._resetInterfaceUserHandlers();
    } return this; }, WebMidi.prototype.toMIDIChannels = function (channel) { var channels; if ("all" === channel || void 0 === channel)
        channels = ["all"];
    else {
        if ("none" === channel)
            return channels = [];
        channels = Array.isArray(channel) ? channel : [channel];
    } return -1 < channels.indexOf("all") && (channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), channels.map(function (ch) { return parseInt(ch); }).filter(function (ch) { return 1 <= ch && ch <= 16; }); }, WebMidi.prototype.getInputById = function (id) { if (!this.enabled)
        throw new Error("WebMidi is not enabled."); id = String(id); for (var i = 0; i < this.inputs.length; i++)
        if (this.inputs[i].id === id)
            return this.inputs[i]; return !1; }, WebMidi.prototype.getOutputById = function (id) { if (!this.enabled)
        throw new Error("WebMidi is not enabled."); id = String(id); for (var i = 0; i < this.outputs.length; i++)
        if (this.outputs[i].id === id)
            return this.outputs[i]; return !1; }, WebMidi.prototype.getInputByName = function (name) { if (!this.enabled)
        throw new Error("WebMidi is not enabled."); for (var i = 0; i < this.inputs.length; i++)
        if (~this.inputs[i].name.indexOf(name))
            return this.inputs[i]; return !1; }, WebMidi.prototype.getOctave = function (number) { if (null != number && 0 <= number && number <= 127)
        return Math.floor(Math.floor(number) / 12 - 1) + Math.floor(wm.octaveOffset); }, WebMidi.prototype.getOutputByName = function (name) { if (!this.enabled)
        throw new Error("WebMidi is not enabled."); for (var i = 0; i < this.outputs.length; i++)
        if (~this.outputs[i].name.indexOf(name))
            return this.outputs[i]; return !1; }, WebMidi.prototype.guessNoteNumber = function (input) { var output = !1; if (input && input.toFixed && 0 <= input && input <= 127 ? output = Math.round(input) : 0 <= parseInt(input) && parseInt(input) <= 127 ? output = parseInt(input) : ("string" == typeof input || input instanceof String) && (output = this.noteNameToNumber(input)), !1 === output)
        throw new Error("Invalid input value (" + input + ")."); return output; }, WebMidi.prototype.noteNameToNumber = function (name) { "string" != typeof name && (name = ""); var matches = name.match(/([CDEFGAB])(#{0,2}|b{0,2})(-?\d+)/i); if (!matches)
        throw new RangeError("Invalid note name."); var semitones = wm._semitones[matches[1].toUpperCase()], result = 12 * (parseInt(matches[3]) + 1 - Math.floor(wm.octaveOffset)) + semitones; if (-1 < matches[2].toLowerCase().indexOf("b") ? result -= matches[2].length : -1 < matches[2].toLowerCase().indexOf("#") && (result += matches[2].length), result < 0 || 127 < result)
        throw new RangeError("Invalid note name or note outside valid range."); return result; }, WebMidi.prototype._updateInputsAndOutputs = function () { this._updateInputs(), this._updateOutputs(); }, WebMidi.prototype._updateInputs = function () { for (var i = 0; i < this._inputs.length; i++) {
        for (var remove = !0, updated = this.interface.inputs.values(), input = updated.next(); input && !input.done; input = updated.next())
            if (this._inputs[i]._midiInput === input.value) {
                remove = !1;
                break;
            }
        remove && this._inputs.splice(i, 1);
    } this.interface && this.interface.inputs.forEach(function (nInput) { for (var add = !0, j = 0; j < this._inputs.length; j++)
        this._inputs[j]._midiInput === nInput && (add = !1); add && this._inputs.push(new Input(nInput)); }.bind(this)); }, WebMidi.prototype._updateOutputs = function () { for (var i = 0; i < this._outputs.length; i++) {
        for (var remove = !0, updated = this.interface.outputs.values(), output = updated.next(); output && !output.done; output = updated.next())
            if (this._outputs[i]._midiOutput === output.value) {
                remove = !1;
                break;
            }
        remove && this._outputs.splice(i, 1);
    } this.interface && this.interface.outputs.forEach(function (nOutput) { for (var add = !0, j = 0; j < this._outputs.length; j++)
        this._outputs[j]._midiOutput === nOutput && (add = !1); add && this._outputs.push(new Output(nOutput)); }.bind(this)); }, WebMidi.prototype._onInterfaceStateChange = function (e) { this._updateInputsAndOutputs(); var event = { timestamp: e.timeStamp, type: e.port.state }; this.interface && "connected" === e.port.state ? "output" === e.port.type ? event.port = this.getOutputById(e.port.id) : "input" === e.port.type && (event.port = this.getInputById(e.port.id)) : event.port = { connection: "closed", id: e.port.id, manufacturer: e.port.manufacturer, name: e.port.name, state: e.port.state, type: e.port.type }, this._userHandlers[e.port.state].forEach(function (handler) { handler(event); }); }, WebMidi.prototype._resetInterfaceUserHandlers = function () { for (var i = 0; i < this._midiInterfaceEvents.length; i++)
        this._userHandlers[this._midiInterfaceEvents[i]] = []; }, Input.prototype.on = Input.prototype.addListener = function (type, channel, listener) { var that = this; if (void 0 === channel && (channel = "all"), Array.isArray(channel) || (channel = [channel]), channel.forEach(function (item) { if ("all" !== item && !(1 <= item && item <= 16))
        throw new RangeError("The 'channel' parameter is invalid."); }), "function" != typeof listener)
        throw new TypeError("The 'listener' parameter must be a function."); if (void 0 !== wm.MIDI_SYSTEM_MESSAGES[type])
        this._userHandlers.system[type] || (this._userHandlers.system[type] = []), this._userHandlers.system[type].push(listener);
    else {
        if (void 0 === wm.MIDI_CHANNEL_MESSAGES[type])
            throw new TypeError("The specified event type is not supported.");
        if (-1 < channel.indexOf("all")) {
            channel = [];
            for (var j = 1; j <= 16; j++)
                channel.push(j);
        }
        this._userHandlers.channel[type] || (this._userHandlers.channel[type] = []), channel.forEach(function (ch) { that._userHandlers.channel[type][ch] || (that._userHandlers.channel[type][ch] = []), that._userHandlers.channel[type][ch].push(listener); });
    } return this; }, Input.prototype.hasListener = function (type, channel, listener) { var that = this; if ("function" != typeof listener)
        throw new TypeError("The 'listener' parameter must be a function."); if (void 0 === channel && (channel = "all"), channel.constructor !== Array && (channel = [channel]), void 0 !== wm.MIDI_SYSTEM_MESSAGES[type]) {
        for (var o = 0; o < this._userHandlers.system[type].length; o++)
            if (this._userHandlers.system[type][o] === listener)
                return !0;
    }
    else if (void 0 !== wm.MIDI_CHANNEL_MESSAGES[type]) {
        if (-1 < channel.indexOf("all")) {
            channel = [];
            for (var j = 1; j <= 16; j++)
                channel.push(j);
        }
        return !!this._userHandlers.channel[type] && channel.every(function (chNum) { var listeners = that._userHandlers.channel[type][chNum]; return listeners && -1 < listeners.indexOf(listener); });
    } return !1; }, Input.prototype.removeListener = function (type, channel, listener) { var that = this; if (void 0 !== listener && "function" != typeof listener)
        throw new TypeError("The 'listener' parameter must be a function."); if (void 0 === channel && (channel = "all"), channel.constructor !== Array && (channel = [channel]), void 0 !== wm.MIDI_SYSTEM_MESSAGES[type])
        if (void 0 === listener)
            this._userHandlers.system[type] = [];
        else
            for (var o = 0; o < this._userHandlers.system[type].length; o++)
                this._userHandlers.system[type][o] === listener && this._userHandlers.system[type].splice(o, 1);
    else if (void 0 !== wm.MIDI_CHANNEL_MESSAGES[type]) {
        if (-1 < channel.indexOf("all")) {
            channel = [];
            for (var j = 1; j <= 16; j++)
                channel.push(j);
        }
        if (!this._userHandlers.channel[type])
            return this;
        channel.forEach(function (chNum) { var listeners = that._userHandlers.channel[type][chNum]; if (listeners)
            if (void 0 === listener)
                that._userHandlers.channel[type][chNum] = [];
            else
                for (var l = 0; l < listeners.length; l++)
                    listeners[l] === listener && listeners.splice(l, 1); });
    }
    else {
        if (void 0 !== type)
            throw new TypeError("The specified event type is not supported.");
        this._initializeUserHandlers();
    } return this; }, Input.prototype._initializeUserHandlers = function () { for (var prop1 in wm.MIDI_CHANNEL_MESSAGES)
        wm.MIDI_CHANNEL_MESSAGES.hasOwnProperty(prop1) && (this._userHandlers.channel[prop1] = {}); for (var prop2 in wm.MIDI_SYSTEM_MESSAGES)
        wm.MIDI_SYSTEM_MESSAGES.hasOwnProperty(prop2) && (this._userHandlers.system[prop2] = []); }, Input.prototype._onMidiMessage = function (e) { if (0 < this._userHandlers.system.midimessage.length) {
        var event = { target: this, data: e.data, timestamp: e.timeStamp, type: "midimessage" };
        this._userHandlers.system.midimessage.forEach(function (callback) { callback(event); });
    } e.data[0] < 240 ? (this._parseChannelEvent(e), this._parseNrpnEvent(e)) : e.data[0] <= 255 && this._parseSystemEvent(e); }, Input.prototype._parseNrpnEvent = function (e) { var data1, data2, command = e.data[0] >> 4, channelBufferIndex = 15 & e.data[0], channel = 1 + channelBufferIndex; if (1 < e.data.length && (data1 = e.data[1], data2 = 2 < e.data.length ? e.data[2] : void 0), wm.nrpnEventsEnabled && command === wm.MIDI_CHANNEL_MESSAGES.controlchange && (data1 >= wm.MIDI_NRPN_MESSAGES.increment && data1 <= wm.MIDI_NRPN_MESSAGES.parammsb || data1 === wm.MIDI_NRPN_MESSAGES.entrymsb || data1 === wm.MIDI_NRPN_MESSAGES.entrylsb)) {
        var ccEvent = { target: this, type: "controlchange", data: e.data, timestamp: e.timeStamp, channel: channel, controller: { number: data1, name: this.getCcNameByNumber(data1) }, value: data2 };
        if (ccEvent.controller.number === wm.MIDI_NRPN_MESSAGES.parammsb && ccEvent.value != wm.MIDI_NRPN_MESSAGES.nullactiveparameter)
            wm._nrpnBuffer[channelBufferIndex] = [], wm._nrpnBuffer[channelBufferIndex][0] = ccEvent;
        else if (1 === wm._nrpnBuffer[channelBufferIndex].length && ccEvent.controller.number === wm.MIDI_NRPN_MESSAGES.paramlsb)
            wm._nrpnBuffer[channelBufferIndex].push(ccEvent);
        else if (2 !== wm._nrpnBuffer[channelBufferIndex].length || ccEvent.controller.number !== wm.MIDI_NRPN_MESSAGES.increment && ccEvent.controller.number !== wm.MIDI_NRPN_MESSAGES.decrement && ccEvent.controller.number !== wm.MIDI_NRPN_MESSAGES.entrymsb)
            if (3 === wm._nrpnBuffer[channelBufferIndex].length && wm._nrpnBuffer[channelBufferIndex][2].number === wm.MIDI_NRPN_MESSAGES.entrymsb && ccEvent.controller.number === wm.MIDI_NRPN_MESSAGES.entrylsb)
                wm._nrpnBuffer[channelBufferIndex].push(ccEvent);
            else if (3 <= wm._nrpnBuffer[channelBufferIndex].length && wm._nrpnBuffer[channelBufferIndex].length <= 4 && ccEvent.controller.number === wm.MIDI_NRPN_MESSAGES.parammsb && ccEvent.value === wm.MIDI_NRPN_MESSAGES.nullactiveparameter)
                wm._nrpnBuffer[channelBufferIndex].push(ccEvent);
            else if (4 <= wm._nrpnBuffer[channelBufferIndex].length && wm._nrpnBuffer[channelBufferIndex].length <= 5 && ccEvent.controller.number === wm.MIDI_NRPN_MESSAGES.paramlsb && ccEvent.value === wm.MIDI_NRPN_MESSAGES.nullactiveparameter) {
                wm._nrpnBuffer[channelBufferIndex].push(ccEvent);
                var rawData = [];
                wm._nrpnBuffer[channelBufferIndex].forEach(function (ev) { rawData.push(ev.data); });
                var nrpnNumber = wm._nrpnBuffer[channelBufferIndex][0].value << 7 | wm._nrpnBuffer[channelBufferIndex][1].value, nrpnValue = wm._nrpnBuffer[channelBufferIndex][2].value;
                6 === wm._nrpnBuffer[channelBufferIndex].length && (nrpnValue = wm._nrpnBuffer[channelBufferIndex][2].value << 7 | wm._nrpnBuffer[channelBufferIndex][3].value);
                var nrpnControllerType = "";
                switch (wm._nrpnBuffer[channelBufferIndex][2].controller.number) {
                    case wm.MIDI_NRPN_MESSAGES.entrymsb:
                        nrpnControllerType = wm._nrpnTypes[0];
                        break;
                    case wm.MIDI_NRPN_MESSAGES.increment:
                        nrpnControllerType = wm._nrpnTypes[1];
                        break;
                    case wm.MIDI_NRPN_MESSAGES.decrement:
                        nrpnControllerType = wm._nrpnTypes[2];
                        break;
                    default: throw new Error("The NPRN type was unidentifiable.");
                }
                var nrpnEvent = { timestamp: ccEvent.timestamp, channel: ccEvent.channel, type: "nrpn", data: rawData, controller: { number: nrpnNumber, type: nrpnControllerType, name: "Non-Registered Parameter " + nrpnNumber }, value: nrpnValue };
                wm._nrpnBuffer[channelBufferIndex] = [], this._userHandlers.channel[nrpnEvent.type] && this._userHandlers.channel[nrpnEvent.type][nrpnEvent.channel] && this._userHandlers.channel[nrpnEvent.type][nrpnEvent.channel].forEach(function (callback) { callback(nrpnEvent); });
            }
            else
                wm._nrpnBuffer[channelBufferIndex] = [];
        else
            wm._nrpnBuffer[channelBufferIndex].push(ccEvent);
    } }, Input.prototype._parseChannelEvent = function (e) { var data1, data2, command = e.data[0] >> 4, channel = 1 + (15 & e.data[0]); 1 < e.data.length && (data1 = e.data[1], data2 = 2 < e.data.length ? e.data[2] : void 0); var event = { target: this, data: e.data, timestamp: e.timeStamp, channel: channel }; command === wm.MIDI_CHANNEL_MESSAGES.noteoff || command === wm.MIDI_CHANNEL_MESSAGES.noteon && 0 === data2 ? (event.type = "noteoff", event.note = { number: data1, name: wm._notes[data1 % 12], octave: wm.getOctave(data1) }, event.velocity = data2 / 127, event.rawVelocity = data2) : command === wm.MIDI_CHANNEL_MESSAGES.noteon ? (event.type = "noteon", event.note = { number: data1, name: wm._notes[data1 % 12], octave: wm.getOctave(data1) }, event.velocity = data2 / 127, event.rawVelocity = data2) : command === wm.MIDI_CHANNEL_MESSAGES.keyaftertouch ? (event.type = "keyaftertouch", event.note = { number: data1, name: wm._notes[data1 % 12], octave: wm.getOctave(data1) }, event.value = data2 / 127) : command === wm.MIDI_CHANNEL_MESSAGES.controlchange && 0 <= data1 && data1 <= 119 ? (event.type = "controlchange", event.controller = { number: data1, name: this.getCcNameByNumber(data1) }, event.value = data2) : command === wm.MIDI_CHANNEL_MESSAGES.channelmode && 120 <= data1 && data1 <= 127 ? (event.type = "channelmode", event.controller = { number: data1, name: this.getChannelModeByNumber(data1) }, event.value = data2) : command === wm.MIDI_CHANNEL_MESSAGES.programchange ? (event.type = "programchange", event.value = data1) : command === wm.MIDI_CHANNEL_MESSAGES.channelaftertouch ? (event.type = "channelaftertouch", event.value = data1 / 127) : command === wm.MIDI_CHANNEL_MESSAGES.pitchbend ? (event.type = "pitchbend", event.value = ((data2 << 7) + data1 - 8192) / 8192) : event.type = "unknownchannelmessage", this._userHandlers.channel[event.type] && this._userHandlers.channel[event.type][channel] && this._userHandlers.channel[event.type][channel].forEach(function (callback) { callback(event); }); }, Input.prototype.getCcNameByNumber = function (number) { if (!(0 <= (number = Math.floor(number)) && number <= 119))
        throw new RangeError("The control change number must be between 0 and 119."); for (var cc in wm.MIDI_CONTROL_CHANGE_MESSAGES)
        if (wm.MIDI_CONTROL_CHANGE_MESSAGES.hasOwnProperty(cc) && number === wm.MIDI_CONTROL_CHANGE_MESSAGES[cc])
            return cc; }, Input.prototype.getChannelModeByNumber = function (number) { if (!(120 <= (number = Math.floor(number)) && status <= 127))
        throw new RangeError("The control change number must be between 120 and 127."); for (var cm in wm.MIDI_CHANNEL_MODE_MESSAGES)
        if (wm.MIDI_CHANNEL_MODE_MESSAGES.hasOwnProperty(cm) && number === wm.MIDI_CHANNEL_MODE_MESSAGES[cm])
            return cm; }, Input.prototype._parseSystemEvent = function (e) { var command = e.data[0], event = { target: this, data: e.data, timestamp: e.timeStamp }; command === wm.MIDI_SYSTEM_MESSAGES.sysex ? event.type = "sysex" : command === wm.MIDI_SYSTEM_MESSAGES.timecode ? event.type = "timecode" : command === wm.MIDI_SYSTEM_MESSAGES.songposition ? event.type = "songposition" : command === wm.MIDI_SYSTEM_MESSAGES.songselect ? (event.type = "songselect", event.song = e.data[1]) : command === wm.MIDI_SYSTEM_MESSAGES.tuningrequest ? event.type = "tuningrequest" : command === wm.MIDI_SYSTEM_MESSAGES.clock ? event.type = "clock" : command === wm.MIDI_SYSTEM_MESSAGES.start ? event.type = "start" : command === wm.MIDI_SYSTEM_MESSAGES.continue ? event.type = "continue" : command === wm.MIDI_SYSTEM_MESSAGES.stop ? event.type = "stop" : command === wm.MIDI_SYSTEM_MESSAGES.activesensing ? event.type = "activesensing" : command === wm.MIDI_SYSTEM_MESSAGES.reset ? event.type = "reset" : event.type = "unknownsystemmessage", this._userHandlers.system[event.type] && this._userHandlers.system[event.type].forEach(function (callback) { callback(event); }); }, Output.prototype.send = function (status, data, timestamp) { if (!(128 <= status && status <= 255))
        throw new RangeError("The status byte must be an integer between 128 (0x80) and 255 (0xFF)."); void 0 === data && (data = []), Array.isArray(data) || (data = [data]); var message = []; return data.forEach(function (item) { var parsed = Math.floor(item); if (!(0 <= parsed && parsed <= 255))
        throw new RangeError("Data bytes must be integers between 0 (0x00) and 255 (0xFF)."); message.push(parsed); }), this._midiOutput.send([status].concat(message), parseFloat(timestamp) || 0), this; }, Output.prototype.sendSysex = function (manufacturer, data, options) { if (!wm.sysexEnabled)
        throw new Error("Sysex message support must first be activated."); return options = options || {}, manufacturer = [].concat(manufacturer), data.forEach(function (item) { if (item < 0 || 127 < item)
        throw new RangeError("The data bytes of a sysex message must be integers between 0 (0x00) and 127 (0x7F)."); }), data = manufacturer.concat(data, wm.MIDI_SYSTEM_MESSAGES.sysexend), this.send(wm.MIDI_SYSTEM_MESSAGES.sysex, data, this._parseTimeParameter(options.time)), this; }, Output.prototype.sendTimecodeQuarterFrame = function (value, options) { return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.timecode, value, this._parseTimeParameter(options.time)), this; }, Output.prototype.sendSongPosition = function (value, options) { options = options || {}; var msb = (value = Math.floor(value) || 0) >> 7 & 127, lsb = 127 & value; return this.send(wm.MIDI_SYSTEM_MESSAGES.songposition, [msb, lsb], this._parseTimeParameter(options.time)), this; }, Output.prototype.sendSongSelect = function (value, options) { if (options = options || {}, !(0 <= (value = Math.floor(value)) && value <= 127))
        throw new RangeError("The song number must be between 0 and 127."); return this.send(wm.MIDI_SYSTEM_MESSAGES.songselect, [value], this._parseTimeParameter(options.time)), this; }, Output.prototype.sendTuningRequest = function (options) { return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.tuningrequest, void 0, this._parseTimeParameter(options.time)), this; }, Output.prototype.sendClock = function (options) { return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.clock, void 0, this._parseTimeParameter(options.time)), this; }, Output.prototype.sendStart = function (options) { return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.start, void 0, this._parseTimeParameter(options.time)), this; }, Output.prototype.sendContinue = function (options) { return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.continue, void 0, this._parseTimeParameter(options.time)), this; }, Output.prototype.sendStop = function (options) { return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.stop, void 0, this._parseTimeParameter(options.time)), this; }, Output.prototype.sendActiveSensing = function (options) { return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.activesensing, [], this._parseTimeParameter(options.time)), this; }, Output.prototype.sendReset = function (options) { return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.reset, void 0, this._parseTimeParameter(options.time)), this; }, Output.prototype.stopNote = function (note, channel, options) { if ("all" === note)
        return this.sendChannelMode("allnotesoff", 0, channel, options); var nVelocity = 64; return (options = options || {}).rawVelocity ? !isNaN(options.velocity) && 0 <= options.velocity && options.velocity <= 127 && (nVelocity = options.velocity) : !isNaN(options.velocity) && 0 <= options.velocity && options.velocity <= 1 && (nVelocity = 127 * options.velocity), this._convertNoteToArray(note).forEach(function (item) { wm.toMIDIChannels(channel).forEach(function (ch) { this.send((wm.MIDI_CHANNEL_MESSAGES.noteoff << 4) + (ch - 1), [item, Math.round(nVelocity)], this._parseTimeParameter(options.time)); }.bind(this)); }.bind(this)), this; }, Output.prototype.playNote = function (note, channel, options) { var time, nVelocity = 64; if ((options = options || {}).rawVelocity ? !isNaN(options.velocity) && 0 <= options.velocity && options.velocity <= 127 && (nVelocity = options.velocity) : !isNaN(options.velocity) && 0 <= options.velocity && options.velocity <= 1 && (nVelocity = 127 * options.velocity), time = this._parseTimeParameter(options.time), this._convertNoteToArray(note).forEach(function (item) { wm.toMIDIChannels(channel).forEach(function (ch) { this.send((wm.MIDI_CHANNEL_MESSAGES.noteon << 4) + (ch - 1), [item, Math.round(nVelocity)], time); }.bind(this)); }.bind(this)), !isNaN(options.duration)) {
        options.duration <= 0 && (options.duration = 0);
        var nRelease = 64;
        options.rawVelocity ? !isNaN(options.release) && 0 <= options.release && options.release <= 127 && (nRelease = options.release) : !isNaN(options.release) && 0 <= options.release && options.release <= 1 && (nRelease = 127 * options.release), this._convertNoteToArray(note).forEach(function (item) { wm.toMIDIChannels(channel).forEach(function (ch) { this.send((wm.MIDI_CHANNEL_MESSAGES.noteoff << 4) + (ch - 1), [item, Math.round(nRelease)], (time || wm.time) + options.duration); }.bind(this)); }.bind(this));
    } return this; }, Output.prototype.sendKeyAftertouch = function (note, channel, pressure, options) { var that = this; if (options = options || {}, channel < 1 || 16 < channel)
        throw new RangeError("The channel must be between 1 and 16."); (isNaN(pressure) || pressure < 0 || 1 < pressure) && (pressure = .5); var nPressure = Math.round(127 * pressure); return this._convertNoteToArray(note).forEach(function (item) { wm.toMIDIChannels(channel).forEach(function (ch) { that.send((wm.MIDI_CHANNEL_MESSAGES.keyaftertouch << 4) + (ch - 1), [item, nPressure], that._parseTimeParameter(options.time)); }); }), this; }, Output.prototype.sendControlChange = function (controller, value, channel, options) { if (options = options || {}, "string" == typeof controller) {
        if (void 0 === (controller = wm.MIDI_CONTROL_CHANGE_MESSAGES[controller]))
            throw new TypeError("Invalid controller name.");
    }
    else if (!(0 <= (controller = Math.floor(controller)) && controller <= 119))
        throw new RangeError("Controller numbers must be between 0 and 119."); if (!(0 <= (value = Math.floor(value) || 0) && value <= 127))
        throw new RangeError("Controller value must be between 0 and 127."); return wm.toMIDIChannels(channel).forEach(function (ch) { this.send((wm.MIDI_CHANNEL_MESSAGES.controlchange << 4) + (ch - 1), [controller, value], this._parseTimeParameter(options.time)); }.bind(this)), this; }, Output.prototype._selectRegisteredParameter = function (parameter, channel, time) { var that = this; if (parameter[0] = Math.floor(parameter[0]), !(0 <= parameter[0] && parameter[0] <= 127))
        throw new RangeError("The control65 value must be between 0 and 127"); if (parameter[1] = Math.floor(parameter[1]), !(0 <= parameter[1] && parameter[1] <= 127))
        throw new RangeError("The control64 value must be between 0 and 127"); return wm.toMIDIChannels(channel).forEach(function () { that.sendControlChange(101, parameter[0], channel, { time: time }), that.sendControlChange(100, parameter[1], channel, { time: time }); }), this; }, Output.prototype._selectNonRegisteredParameter = function (parameter, channel, time) { var that = this; if (parameter[0] = Math.floor(parameter[0]), !(0 <= parameter[0] && parameter[0] <= 127))
        throw new RangeError("The control63 value must be between 0 and 127"); if (parameter[1] = Math.floor(parameter[1]), !(0 <= parameter[1] && parameter[1] <= 127))
        throw new RangeError("The control62 value must be between 0 and 127"); return wm.toMIDIChannels(channel).forEach(function () { that.sendControlChange(99, parameter[0], channel, { time: time }), that.sendControlChange(98, parameter[1], channel, { time: time }); }), this; }, Output.prototype._setCurrentRegisteredParameter = function (data, channel, time) { var that = this; if ((data = [].concat(data))[0] = Math.floor(data[0]), !(0 <= data[0] && data[0] <= 127))
        throw new RangeError("The msb value must be between 0 and 127"); return wm.toMIDIChannels(channel).forEach(function () { that.sendControlChange(6, data[0], channel, { time: time }); }), data[1] = Math.floor(data[1]), 0 <= data[1] && data[1] <= 127 && wm.toMIDIChannels(channel).forEach(function () { that.sendControlChange(38, data[1], channel, { time: time }); }), this; }, Output.prototype._deselectRegisteredParameter = function (channel, time) { var that = this; return wm.toMIDIChannels(channel).forEach(function () { that.sendControlChange(101, 127, channel, { time: time }), that.sendControlChange(100, 127, channel, { time: time }); }), this; }, Output.prototype.setRegisteredParameter = function (parameter, data, channel, options) { var that = this; if (options = options || {}, !Array.isArray(parameter)) {
        if (!wm.MIDI_REGISTERED_PARAMETER[parameter])
            throw new Error("The specified parameter is not available.");
        parameter = wm.MIDI_REGISTERED_PARAMETER[parameter];
    } return wm.toMIDIChannels(channel).forEach(function () { that._selectRegisteredParameter(parameter, channel, options.time), that._setCurrentRegisteredParameter(data, channel, options.time), that._deselectRegisteredParameter(channel, options.time); }), this; }, Output.prototype.setNonRegisteredParameter = function (parameter, data, channel, options) { var that = this; if (options = options || {}, !(0 <= parameter[0] && parameter[0] <= 127 && 0 <= parameter[1] && parameter[1] <= 127))
        throw new Error("Position 0 and 1 of the 2-position parameter array must both be between 0 and 127."); return data = [].concat(data), wm.toMIDIChannels(channel).forEach(function () { that._selectNonRegisteredParameter(parameter, channel, options.time), that._setCurrentRegisteredParameter(data, channel, options.time), that._deselectRegisteredParameter(channel, options.time); }), this; }, Output.prototype.incrementRegisteredParameter = function (parameter, channel, options) { var that = this; if (options = options || {}, !Array.isArray(parameter)) {
        if (!wm.MIDI_REGISTERED_PARAMETER[parameter])
            throw new Error("The specified parameter is not available.");
        parameter = wm.MIDI_REGISTERED_PARAMETER[parameter];
    } return wm.toMIDIChannels(channel).forEach(function () { that._selectRegisteredParameter(parameter, channel, options.time), that.sendControlChange(96, 0, channel, { time: options.time }), that._deselectRegisteredParameter(channel, options.time); }), this; }, Output.prototype.decrementRegisteredParameter = function (parameter, channel, options) { if (options = options || {}, !Array.isArray(parameter)) {
        if (!wm.MIDI_REGISTERED_PARAMETER[parameter])
            throw new TypeError("The specified parameter is not available.");
        parameter = wm.MIDI_REGISTERED_PARAMETER[parameter];
    } return wm.toMIDIChannels(channel).forEach(function () { this._selectRegisteredParameter(parameter, channel, options.time), this.sendControlChange(97, 0, channel, { time: options.time }), this._deselectRegisteredParameter(channel, options.time); }.bind(this)), this; }, Output.prototype.setPitchBendRange = function (semitones, cents, channel, options) { var that = this; if (options = options || {}, !(0 <= (semitones = Math.floor(semitones) || 0) && semitones <= 127))
        throw new RangeError("The semitones value must be between 0 and 127"); if (!(0 <= (cents = Math.floor(cents) || 0) && cents <= 127))
        throw new RangeError("The cents value must be between 0 and 127"); return wm.toMIDIChannels(channel).forEach(function () { that.setRegisteredParameter("pitchbendrange", [semitones, cents], channel, { time: options.time }); }), this; }, Output.prototype.setModulationRange = function (semitones, cents, channel, options) { var that = this; if (options = options || {}, !(0 <= (semitones = Math.floor(semitones) || 0) && semitones <= 127))
        throw new RangeError("The semitones value must be between 0 and 127"); if (!(0 <= (cents = Math.floor(cents) || 0) && cents <= 127))
        throw new RangeError("The cents value must be between 0 and 127"); return wm.toMIDIChannels(channel).forEach(function () { that.setRegisteredParameter("modulationrange", [semitones, cents], channel, { time: options.time }); }), this; }, Output.prototype.setMasterTuning = function (value, channel, options) { var that = this; if (options = options || {}, (value = parseFloat(value) || 0) <= -65 || 64 <= value)
        throw new RangeError("The value must be a decimal number larger than -65 and smaller than 64."); var coarse = Math.floor(value) + 64, fine = value - Math.floor(value), msb = (fine = Math.round((fine + 1) / 2 * 16383)) >> 7 & 127, lsb = 127 & fine; return wm.toMIDIChannels(channel).forEach(function () { that.setRegisteredParameter("channelcoarsetuning", coarse, channel, { time: options.time }), that.setRegisteredParameter("channelfinetuning", [msb, lsb], channel, { time: options.time }); }), this; }, Output.prototype.setTuningProgram = function (value, channel, options) { var that = this; if (options = options || {}, !(0 <= (value = Math.floor(value)) && value <= 127))
        throw new RangeError("The program value must be between 0 and 127"); return wm.toMIDIChannels(channel).forEach(function () { that.setRegisteredParameter("tuningprogram", value, channel, { time: options.time }); }), this; }, Output.prototype.setTuningBank = function (value, channel, options) { var that = this; if (options = options || {}, !(0 <= (value = Math.floor(value) || 0) && value <= 127))
        throw new RangeError("The bank value must be between 0 and 127"); return wm.toMIDIChannels(channel).forEach(function () { that.setRegisteredParameter("tuningbank", value, channel, { time: options.time }); }), this; }, Output.prototype.sendChannelMode = function (command, value, channel, options) { if (options = options || {}, "string" == typeof command) {
        if (!(command = wm.MIDI_CHANNEL_MODE_MESSAGES[command]))
            throw new TypeError("Invalid channel mode message name.");
    }
    else if (!(120 <= (command = Math.floor(command)) && command <= 127))
        throw new RangeError("Channel mode numerical identifiers must be between 120 and 127."); if ((value = Math.floor(value) || 0) < 0 || 127 < value)
        throw new RangeError("Value must be an integer between 0 and 127."); return wm.toMIDIChannels(channel).forEach(function (ch) { this.send((wm.MIDI_CHANNEL_MESSAGES.channelmode << 4) + (ch - 1), [command, value], this._parseTimeParameter(options.time)); }.bind(this)), this; }, Output.prototype.sendProgramChange = function (program, channel, options) { var that = this; if (options = options || {}, program = Math.floor(program), isNaN(program) || program < 0 || 127 < program)
        throw new RangeError("Program numbers must be between 0 and 127."); return wm.toMIDIChannels(channel).forEach(function (ch) { that.send((wm.MIDI_CHANNEL_MESSAGES.programchange << 4) + (ch - 1), [program], that._parseTimeParameter(options.time)); }), this; }, Output.prototype.sendChannelAftertouch = function (pressure, channel, options) { var that = this; options = options || {}, pressure = parseFloat(pressure), (isNaN(pressure) || pressure < 0 || 1 < pressure) && (pressure = .5); var nPressure = Math.round(127 * pressure); return wm.toMIDIChannels(channel).forEach(function (ch) { that.send((wm.MIDI_CHANNEL_MESSAGES.channelaftertouch << 4) + (ch - 1), [nPressure], that._parseTimeParameter(options.time)); }), this; }, Output.prototype.sendPitchBend = function (bend, channel, options) { var that = this; if (options = options || {}, isNaN(bend) || bend < -1 || 1 < bend)
        throw new RangeError("Pitch bend value must be between -1 and 1."); var nLevel = Math.round((bend + 1) / 2 * 16383), msb = nLevel >> 7 & 127, lsb = 127 & nLevel; return wm.toMIDIChannels(channel).forEach(function (ch) { that.send((wm.MIDI_CHANNEL_MESSAGES.pitchbend << 4) + (ch - 1), [lsb, msb], that._parseTimeParameter(options.time)); }), this; }, Output.prototype._parseTimeParameter = function (time) { var value, parsed = parseFloat(time); return "string" == typeof time && "+" === time.substring(0, 1) ? parsed && 0 < parsed && (value = wm.time + parsed) : parsed > wm.time && (value = parsed), value; }, Output.prototype._convertNoteToArray = function (note) { var notes = []; return Array.isArray(note) || (note = [note]), note.forEach(function (item) { notes.push(wm.guessNoteNumber(item)); }), notes; }, module.exports ? module.exports = wm : scope.WebMidi || (scope.WebMidi = wm); }(commonjsGlobal);
});
var WebAudio = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.name = "web_audio";
        this.prepared = false;
        this.midi = false;
        this.sources = [];
        this.keys = {};
    }
    class_1.prototype.source = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.sources.length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connect_the_world()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.sources[name]];
                }
            });
        });
    };
    class_1.prototype.get_context = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.context];
            });
        });
    };
    class_1.prototype.is_prepared = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prepared];
            });
        });
    };
    /******************
     * Private behavior
     **/
    class_1.prototype.componentDidLoad = function () {
        this.connect_debugger();
    };
    class_1.prototype.connect_the_world = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.connect_context();
                        this.gain = this.context.createGain();
                        return [4 /*yield*/, this.connect_visualizers()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.connect_sources()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.connect_midi()];
                    case 3:
                        _a.sent();
                        this.prepared = true;
                        return [4 /*yield*/, delay(500)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    class_1.prototype.connect_context = function () {
        // @ts-ignore
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        this.log("Connected to this.context");
    };
    class_1.prototype.connect_sources = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.build_sources()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.build_sources = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.log("Building sources");
                        this._sources = Array.from(this.element.querySelectorAll('web-audio-source'));
                        this.externalFiles = [];
                        return [4 /*yield*/, asyncForEach(this._sources, function (source, index) { return __awaiter(_this, void 0, void 0, function () {
                                var bufferLoader;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            // @ts-ignore
                                            this.log("(" + index + ") Preparing " + source.name);
                                            // @ts-ignore
                                            this.sources[source.name] = source;
                                            bufferLoader = new BufferLoader(this.context, [source.src], function (bufferList) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.cache_sources(bufferList, source)];
                                                        case 1:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); });
                                            return [4 /*yield*/, bufferLoader.load()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.cache_sources = function (bufferList, source) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, asyncForEach(bufferList, function (item) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.log("Caching " + source.name);
                                        if (this.midi) {
                                            this.log("Assigned " + source.name + " to midi key " + source.midikey + ", channel " + source.midichannel);
                                            if (this.keys[source.midichannel] == undefined) {
                                                this.keys[source.midichannel] = [];
                                            }
                                            this.keys[source.midichannel][source.midikey] = source;
                                        }
                                        this._currentSource = source;
                                        return [4 /*yield*/, this._currentSource.assignBuffer(this, item)];
                                    case 1:
                                        _a.sent();
                                        this.log("Source " + source.name + " is ready");
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        this._currentSource = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.connect_visualizers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, delay(20)];
                    case 1:
                        _a.sent();
                        // @ts-ignore
                        this.visualizers = Array.from(document.querySelectorAll("web-audio-visualizer[for=\"" + this.name + "\"]"));
                        if (!this.visualizers) return [3 /*break*/, 3];
                        this.log("Attaching visualizers");
                        return [4 /*yield*/, asyncForEach(this.visualizers, function (visualizer, index) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(index === 0)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, visualizer.connect(this.context, this.context.destination)];
                                        case 1:
                                            visualizer = _a.sent();
                                            return [3 /*break*/, 4];
                                        case 2: return [4 /*yield*/, visualizer.connect(this.context, this.previousVisualizer.analyser)];
                                        case 3:
                                            visualizer = _a.sent();
                                            _a.label = 4;
                                        case 4:
                                            this.previousVisualizer = visualizer;
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.log("No visualizers for " + this.name);
                        _a.label = 4;
                    case 4:
                        if (!(this.visualizers.length >= 1)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.gain.connect(this.previousVisualizer.analyser)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.gain.connect(this.context.destination)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.connect_debugger = function () {
        this.debugger = document.querySelector("web-audio-debugger[for=\"" + this.name + "\"]");
        this.log("Connected debugger");
    };
    class_1.prototype.log = function (string) {
        if (this.debugger) {
            this.debugger.addHistory(string);
        }
    };
    class_1.prototype.connect_midi = function () {
        var _this = this;
        if (this.midi) {
            webmidi_min.enable(function (err) {
                if (err) {
                    _this.log("Midi couldn't be enabled." + err);
                }
                else {
                    _this.log("Midi is enabled");
                }
                var input = webmidi_min.inputs[0];
                if (input) {
                    input.addListener('noteon', 'all', function (e) {
                        _this.log("KEY: Channel: " + e.channel + ", Note: " + e.note.number + ", Name: " + e.note.name + ", Oct: " + e.note.octave);
                        if (_this.keys[e.channel]) {
                            _this.keys[e.channel][e.note.number].gain().value = (e.data[2] / 175);
                            _this.keys[e.channel][e.note.number].play();
                        }
                    });
                    input.addListener('pitchbend', 'all', function (e) {
                        _this.log("PITCH: Channel: " + e.channel + ", Value: " + e.value);
                    });
                    // Listen to control change message on all channels
                    input.addListener('controlchange', 'all', function (e) {
                        _this.log("CTRL: Channel: " + e.channel + ", controller: " + e.controller.number + ", Value: " + e.value);
                        var event = new CustomEvent('midi-controller-update', { detail: e });
                        document.dispatchEvent(event);
                    });
                    _this.log("Listeners added for notes, pitch bend, and controllers.");
                }
            });
        }
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var WebAudioSource = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
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
        this.update = createEvent(this, "update", 7);
    }
    class_2.prototype.getBuffer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.buffer];
            });
        });
    };
    class_2.prototype.webAudio = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.webAudioWrapper];
            });
        });
    };
    class_2.prototype.gain = function (place) {
        if (place === void 0) { place = "wet"; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (place === "wet") {
                    return [2 /*return*/, this.wetGain];
                }
                else if (place === "dry") {
                    return [2 /*return*/, this.dryGain];
                }
                else if (place === "channel") {
                    return [2 /*return*/, this.channelGain];
                }
                return [2 /*return*/];
            });
        });
    };
    class_2.prototype.getDuration = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.duration];
            });
        });
    };
    class_2.prototype.currentTime = function () {
        var current = 0;
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
    };
    ;
    class_2.prototype.prepare = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
                return [2 /*return*/];
            });
        });
    };
    class_2.prototype.play = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.inert) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.prepare()];
                    case 1:
                        _a.sent();
                        if (this.source) {
                            this.source.start(0, this.pausedTime);
                            this.startTime = this.context.currentTime - this.pausedTime;
                            this.pausedTime = 0;
                            this.playing = true;
                            this.tick();
                            raf(function () { _this.tick(); });
                        }
                        return [3 /*break*/, 3];
                    case 2: throw "Cannot play inert media.";
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.skipTo = function (time) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stop()];
                    case 1:
                        _a.sent();
                        this.pausedTime = time / 1000;
                        return [4 /*yield*/, this.play()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.pause = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.elapsedTime = this.context.currentTime - this.startTime;
                        return [4 /*yield*/, this.stop()];
                    case 1:
                        _a.sent();
                        this.pausedTime = this.elapsedTime;
                        this.playing = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.playing) {
                    this.pause();
                }
                else {
                    this.play();
                }
                return [2 /*return*/];
            });
        });
    };
    class_2.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.source) {
                    this.source.disconnect();
                    this.source.stop();
                }
                this.source = null;
                this.pausedTime = 0;
                this.startTime = 0;
                this.playing = false;
                return [2 /*return*/];
            });
        });
    };
    class_2.prototype.tick = function () {
        var _this = this;
        this.update.emit({
            time: this.currentTime(),
            duration: this.duration
        });
        if (this.source) {
            raf(function () { _this.tick(); });
        }
    };
    class_2.prototype.assignBuffer = function (webAudio, buffer) {
        return __awaiter(this, void 0, void 0, function () {
            var previous_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.webAudioWrapper = webAudio.element;
                        this.context = webAudio.context;
                        this.buffer = buffer;
                        if (!!this.inert) return [3 /*break*/, 2];
                        this.masterGain = webAudio.gain;
                        this.channelGain = this.context.createGain();
                        return [4 /*yield*/, this.prepareEffects()];
                    case 1:
                        _a.sent();
                        if (Object.keys(this.effects).length > 0) {
                            // Make the source and gain
                            this.wetGain = this.context.createGain();
                            previous_1 = "";
                            Object.keys(this.effects).reverse().forEach(function (element, index) {
                                if (index === 0) {
                                    _this.wetGain.connect(_this.effects[element]);
                                }
                                else {
                                    _this.effects[previous_1].connect(_this.effects[element]);
                                }
                                previous_1 = element;
                            });
                            this.effects[previous_1].connect(this.channelGain);
                        }
                        this.dryGain = this.context.createGain();
                        this.dryGain.connect(this.channelGain);
                        this.channelGain.connect(this.masterGain);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.prepareEffects = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.element.parentElement.nodeName !== "WEB-AUDIO")) return [3 /*break*/, 3];
                        element = this.element.parentElement;
                        _c.label = 1;
                    case 1:
                        if (!(element.nodeName !== "WEB-AUDIO")) return [3 /*break*/, 3];
                        _a = this.effects;
                        _b = element.getAttribute("name");
                        return [4 /*yield*/, element.attachEffect(this.context, this.element)];
                    case 2:
                        _a[_b] = _c.sent();
                        element = element.parentElement;
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(class_2.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
export { WebAudio as web_audio, WebAudioSource as web_audio_source };
