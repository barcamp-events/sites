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
import { r as registerInstance, h, g as getElement } from './core-36452501.js';
import { d as delay } from './index-9d3b27e3.js';
import './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
import { e as ezClipboard } from './index-306bff69.js';
import { g as get_interview_lines, u as update_interview_lines } from './helpers-f7050e71.js';
var Interview = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
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
    class_1.prototype.componentWillLoad = function () {
        properties.set({
            "--width": this.width + "px",
            "--height": this.height + "px",
            "--aspectRatio": this.aspectRatio + "%"
        }, this.element);
    };
    class_1.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.interviewLines) {
                    this.interviewLines = get_interview_lines(this.element);
                }
                update_interview_lines(this.interviewLines, this.cache, this.time);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.handleUpdate = function (event) {
        this.current = Math.abs(Math.round(event.detail.time * 1000));
        this.duration = Math.round(event.detail.duration * 1000);
        update_interview_lines(this.interviewLines, this.cache, this.time);
    };
    Object.defineProperty(class_1.prototype, "time", {
        get: function () {
            return this.current;
        },
        enumerable: true,
        configurable: true
    });
    class_1.prototype.attachContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, duration;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.loaded) return [3 /*break*/, 6];
                        this.loading = true;
                        return [4 /*yield*/, this.audio.connect_the_world()];
                    case 1:
                        _b.sent();
                        if (!!this.audio_source) return [3 /*break*/, 4];
                        _a = this;
                        return [4 /*yield*/, this.audio.source("interview")];
                    case 2:
                        _a.audio_source = _b.sent();
                        return [4 /*yield*/, this.audio_source.prepare()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [4 /*yield*/, this.audio_source.getDuration()];
                    case 5:
                        duration = _b.sent();
                        this.duration = Math.round(duration * 1000);
                        this.loaded = true;
                        this.loading = false;
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.in = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, delay(1000)];
                    case 1:
                        _b.sent();
                        this.visible = true;
                        return [4 /*yield*/, delay(100)];
                    case 2:
                        _b.sent();
                        this.audio = this.element.querySelector('web-audio');
                        _a = this;
                        return [4 /*yield*/, this.audio.source("interview")];
                    case 3:
                        _a.audio_source = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.out = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.pause();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.play = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.audio) return [3 /*break*/, 2];
                        if (!this.audio_source) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.audio_source.play()];
                    case 1:
                        _a.sent();
                        this.playing = this.audio_source.playing;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.skipTo = function (time) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.audio) return [3 /*break*/, 2];
                        if (!this.audio_source) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.audio_source.skipTo(time)];
                    case 1:
                        _a.sent();
                        this.playing = this.audio_source.playing;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.pause = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.audio) return [3 /*break*/, 2];
                        if (!this.audio_source) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.audio_source.pause()];
                    case 1:
                        _a.sent();
                        this.playing = this.audio_source.playing;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.audio) return [3 /*break*/, 2];
                        if (!this.audio_source) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.audio_source.toggle()];
                    case 1:
                        _a.sent();
                        this.playing = this.audio_source.playing;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.handleClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.attachContext()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.toggle()];
                    case 2:
                        _a.sent();
                        if (!(this.current === this.duration)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.skipTo(0)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.handleCurrentClick = function () {
        ezClipboard.copyPlain(this.current);
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "card", onDblClick: function () { _this.handleClick(); } }, !this.visible && h("div", null, h("skeleton-img", { width: this.width, height: this.height, loading: true }), h("div", { style: { "display": "none" } }, h("slot", null))), this.visible && h("section", null, h("slot", null), h("div", { class: "transcript" }, h("slot", { name: "transcript" })), h("web-audio", { name: "interview-" + this.randomId }, h("web-audio-source", { src: this.src, name: "interview" })), h("web-audio-visualizer", { for: "interview-" + this.randomId, type: this.visualization, width: this.width, height: this.height, color: this.color }), h("button", { class: this.loading ? "loading button" : (this.playing ? "playing button" : "button"), onClick: function () { _this.handleClick(); } }, h("stellar-asset", { name: this.loading ? "sync" : (this.playing ? "pause" : "play"), class: this.loading ? "animation-spin" : "" })), h("h3", null, h("stellar-unit", { class: "current", value: this.current, from: "ms", to: "s", onClick: function () { _this.handleCurrentClick(); } })), h("h3", null, h("stellar-unit", { class: "duration", value: this.duration, from: "ms", to: "s" })), h("stellar-progress", { value: this.current, max: this.duration, noease: true, blurable: false, slender: true, editable: true, onUpdate: function (e) { _this.skipTo(e.detail.value); } })), h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) })));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "stellar-interview{--width:800px;--height:800px;display:block}stellar-interview div.card{position:relative;display:block;width:auto;height:auto;margin:auto;overflow:hidden}stellar-interview div.card section{height:inherit;display:block;position:relative;padding-top:0!important}stellar-interview web-audio-visualizer{position:absolute;top:auto;left:0;right:0;bottom:0;width:100%;height:60%;pointer-events:none;z-index:2}stellar-interview web-audio-visualizer[type=circle]{height:100%}stellar-interview web-audio-visualizer[type=bars2]{width:80%;left:10%;right:10%}stellar-interview stellar-360-image,stellar-interview stellar-360-video,stellar-interview stellar-image,stellar-interview stellar-video{--gradient:radial-gradient(circle at 30% 107%,var(--theme-base5) 0%,var(--theme-base8) 5%,var(--theme-complement8) 45%,var(--theme-complement5) 60%,var(--theme-base5) 90%);position:relative;z-index:1;display:block}stellar-interview stellar-progress{position:absolute;top:0;left:0;width:100%;z-index:9}stellar-interview stellar-progress .progress{border:0}stellar-interview h3{color:#fff}stellar-interview stellar-unit{position:absolute;bottom:1rem;z-index:2;color:#fff!important;font-weight:700}stellar-interview stellar-unit.current{left:1rem}stellar-interview stellar-unit.duration{right:1rem}stellar-interview .transcript{position:absolute;bottom:0;width:70%;left:15%;z-index:5;pointer-events:none}stellar-interview .button{position:absolute;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;width:9rem;height:9rem;top:50%;right:50%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);border-radius:100%;padding:0;border:0;z-index:3;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:4;outline:0;cursor:pointer;padding-left:1rem;mix-blend-mode:soft-light}stellar-interview .button:focus,stellar-interview .button:hover{-webkit-transform:translate(50%,-50%) scale(1.1);transform:translate(50%,-50%) scale(1.1);mix-blend-mode:hard-light}stellar-interview .button stellar-asset{font-size:7rem;margin:auto;display:block}stellar-interview .button.loading{padding:0}stellar-interview .button.playing{width:2.8rem;height:2.8rem;top:2.2rem;right:1.8rem;padding:0;background:transparent;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s}stellar-interview .button.playing stellar-asset{font-size:2.8rem}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { Interview as stellar_interview };
