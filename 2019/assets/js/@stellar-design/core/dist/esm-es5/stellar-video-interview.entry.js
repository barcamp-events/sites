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
import { r as registerInstance, h, g as getElement } from './core-8f5ef0c7.js';
import { d as delay } from './index-9d3b27e3.js';
import './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
import { e as ezClipboard } from './index-306bff69.js';
import { g as get_interview_lines, u as update_interview_lines } from './helpers-f7050e71.js';
var VideoInterview = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.color = "white";
        this.width = 800;
        this.height = 800;
        this.aspectRatio = 100;
        this.visualization = "bars2";
        this.randomId = Math.floor(Math.random() * 6) + 1;
        this.loaded = false;
        this.loading = false;
        this.seekable = false;
        this.duration = 0;
        this.current = 0;
        this.visible = false;
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
                this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
                this.video = this.element.shadowRoot.querySelector('stellar-video');
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.handleUpdate = function (event) {
        console.log(event);
        this.playing = event.detail.playing;
        this.current = Math.abs(Math.round(event.detail.currentTime * 1000));
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
            var src, waanalyser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.context) return [3 /*break*/, 3];
                        // @ts-ignore
                        this.context = new (window.AudioContext || window.webkitAudioContext)();
                        src = this.context.createMediaElementSource(this.video.video_tag);
                        if (!this.visualizer) {
                            this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
                        }
                        return [4 /*yield*/, this.visualizer.connect(this.context)];
                    case 1:
                        waanalyser = _a.sent();
                        return [4 /*yield*/, src.connect(waanalyser.analyser)];
                    case 2:
                        _a.sent();
                        waanalyser.analyser.connect(this.context.destination);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.in = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, delay(1000)];
                    case 1:
                        _a.sent();
                        this.visible = true;
                        return [4 /*yield*/, delay(100)];
                    case 2:
                        _a.sent();
                        this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
                        this.video = this.element.shadowRoot.querySelector('stellar-video');
                        this.video.addEventListener('canplaythrough', function () {
                            _this.seekable = true;
                        });
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
                        if (!this.video) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.video.play()];
                    case 1:
                        _a.sent();
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
                        if (!this.video) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.video.skipTo(time)];
                    case 1:
                        _a.sent();
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
                        if (!this.video) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.video.pause()];
                    case 1:
                        _a.sent();
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
                        this.attachContext();
                        if (!this.video) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.video.toggle()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.handleClick = function () {
        this.toggle();
        if (this.current === this.duration) {
            this.skipTo(0);
        }
    };
    class_1.prototype.handleCurrentClick = function () {
        ezClipboard.copyPlain(this.current);
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "card", onDblClick: function () { _this.handleClick(); } }, h("skeleton-img", { width: this.width, height: this.height, loading: true }), this.visible && h("section", null, h("stellar-video", { controls: false, playsinline: true, trackInView: false, onUpdate: function (e) { _this.handleUpdate(e); } }, h("source", { src: this.src })), h("div", { class: "transcript" }, h("slot", null)), this.video && h("web-audio-visualizer", { for: "interview-" + this.randomId, type: this.visualization, width: 2048, height: 1024, color: this.color }), h("button", { class: this.loading ? "loading button" : (this.playing ? "playing button" : "button"), onClick: function () { _this.handleClick(); } }, h("stellar-asset", { name: this.loading ? "sync" : (this.playing ? "pause" : "play"), class: this.loading ? "animation-spin" : "" })), h("h3", null, h("stellar-unit", { class: "current", value: this.current, from: "ms", to: "s", onClick: function () { _this.handleCurrentClick(); } })), h("h3", null, h("stellar-unit", { class: "duration", value: this.duration, from: "ms", to: "s" })), this.seekable && h("stellar-progress", { value: this.current, max: this.duration, noease: true, blurable: false, slender: true, editable: true, onUpdate: function (e) { _this.skipTo(e.detail.value); } })), h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) })));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{--width:800px;--height:800px;display:block;position:relative}:host skeleton-img{margin:0;max-width:none;max-height:none}:host div.card{position:relative;display:block;width:auto;height:auto;margin:auto;overflow:hidden}:host div.card section{height:inherit;display:block;position:absolute;height:100%;top:0;right:0;left:0;padding-top:0!important}:host web-audio-visualizer{position:absolute;top:auto;left:0;right:0;bottom:0;width:100%;height:60%;pointer-events:none;z-index:2}:host web-audio-visualizer[type=circle]{height:100%}:host web-audio-visualizer[type=bars2]{width:80%;left:10%;right:10%}:host stellar-360-image,:host stellar-360-video,:host stellar-image,:host stellar-video{--gradient:radial-gradient(circle at 30% 107%,var(--theme-base5) 0%,var(--theme-base8) 5%,var(--theme-complement8) 45%,var(--theme-complement5) 60%,var(--theme-base5) 90%);position:relative;z-index:1;display:block}:host stellar-progress{position:absolute;top:0;left:0;width:100%;z-index:9;--border-radius:0}:host stellar-progress .progress{border:0}:host h3{color:#fff;margin:0}:host stellar-unit{position:absolute;bottom:1rem;z-index:4;color:#fff!important;font-weight:700}:host stellar-unit.current{left:1rem}:host stellar-unit.duration{right:1rem}:host .transcript{position:absolute;bottom:0;width:70%;left:15%;z-index:5;pointer-events:none}:host .button{position:absolute;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;width:9rem;height:9rem;top:50%;right:50%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);border-radius:100%;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:4;outline:0;cursor:pointer;padding-left:1rem;mix-blend-mode:soft-light}:host .button:focus,:host .button:hover{-webkit-transform:translate(50%,-50%) scale(1.1);transform:translate(50%,-50%) scale(1.1);mix-blend-mode:hard-light}:host .button stellar-asset{font-size:7rem;margin:auto;display:block}:host .button.loading{padding:0}:host .button.playing{width:2.8rem;height:2.8rem;top:2.2rem;right:1.8rem;padding:0;background:transparent;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s}:host .button.playing stellar-asset{font-size:2.8rem}:host:after{content:\"\";display:block;width:100%;height:8rem;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.65)));background:linear-gradient(180deg,transparent 0,rgba(0,0,0,.65));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#00000000\",endColorstr=\"#a6000000\",GradientType=0);position:absolute;z-index:2;bottom:0;left:0;right:0}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { VideoInterview as stellar_video_interview };
