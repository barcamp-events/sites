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
import { r as registerInstance, e as createEvent, h, g as getElement } from './core-36452501.js';
import './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
var Video = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.trackInView = true;
        this.preload = "auto";
        this.autoplay = false;
        this.muted = false;
        this.playsinline = false;
        this.controls = true;
        this.playing = false;
        this.duration = 0.0;
        this.startTime = 0.0;
        this.pausedTime = 0.0;
        this.currentTime = 0.0;
        this.update = createEvent(this, "update", 7);
        this.played = createEvent(this, "played", 7);
        this.paused = createEvent(this, "paused", 7);
        this.loaded = createEvent(this, "loaded", 7);
    }
    class_1.prototype.componentDidLoad = function () {
        var _this = this;
        this.video_tag = this.element.querySelector('video');
        this.video_tag.onplay = function () {
            _this.playing = true;
            _this.played.emit(_this.eventData);
            _this.update.emit(_this.eventData);
        };
        this.video_tag.onpause = function () {
            _this.playing = false;
            _this.pausedTime = _this.video_tag.currentTime;
            _this.paused.emit(_this.eventData);
            _this.update.emit(_this.eventData);
        };
        this.video_tag.onloadedmetadata = function () {
            _this.setDimensions();
            _this.duration = _this.video_tag.duration;
            _this.loaded.emit(_this.eventData);
        };
    };
    Object.defineProperty(class_1.prototype, "eventData", {
        get: function () {
            return {
                playing: this.playing,
                currentTime: this.currentTime,
                pausedTime: this.pausedTime,
                startTime: this.startTime,
                duration: this.duration,
            };
        },
        enumerable: true,
        configurable: true
    });
    class_1.prototype.startInterval = function () {
        var _this = this;
        if (this.playing) {
            this.interval = setInterval(function () {
                _this.currentTime = _this.video_tag.currentTime;
                _this.update.emit(_this.eventData);
            }, 30);
        }
        else {
            clearInterval(this.interval);
        }
    };
    class_1.prototype.setDimensions = function () {
        this.width = (!this.width) ? this.video_tag.videoWidth : this.width;
        this.height = (!this.height) ? this.video_tag.videoHeight : this.height;
        properties.set({
            "--width": "" + this.width,
            "--height": "" + this.height,
            "--aspect-ratio": this.height / this.width * 100 + "%"
        }, this.element);
    };
    class_1.prototype.in = function () {
        if (this.autoplay) {
            this.video_tag.play();
        }
    };
    class_1.prototype.out = function () {
        this.video_tag.currentTime = 0;
        this.video_tag.pause();
    };
    class_1.prototype.getDuration = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.video_tag.duration];
            });
        });
    };
    class_1.prototype.play = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.video_tag.play();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.pause = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.video_tag.pause();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.video_tag.paused) {
                    this.play();
                }
                else {
                    this.pause();
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.skipTo(0);
                this.video_tag.pause();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.skipTo = function (time) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pause()];
                    case 1:
                        _a.sent();
                        this.video_tag.currentTime = (time * 1000);
                        return [4 /*yield*/, this.play()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        return (h("video", { preload: this.preload, width: this.width, height: this.height, autoplay: this.autoplay, muted: this.muted, playsinline: this.playsinline, poster: this.poster, controls: this.controls }, h("slot", null), h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) })));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "playing": ["startInterval"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "stellar-video{display:block;width:100%;height:0;position:relative;overflow:hidden;padding-bottom:var(--aspect-ratio)}stellar-video:after,stellar-video video{width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0}stellar-video:after{content:\"\";display:block;pointer-events:none;z-index:2;mix-blend-mode:color}stellar-video[overlay]:after{background:linear-gradient(35deg,var(--theme-complement5),var(--theme-base5) 40%,var(--theme-complement5));mix-blend-mode:color}\@media not all and (min-resolution:.001dpcm){\@media{stellar-video[overlay]:after{mix-blend-mode:hard-light;opacity:.5}}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { Video as stellar_video };
