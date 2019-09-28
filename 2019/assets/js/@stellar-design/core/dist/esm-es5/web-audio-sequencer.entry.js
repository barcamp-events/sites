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
import { r as registerInstance, h } from './core-36452501.js';
var WebAudioSequencer = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.name = "web_audio_sequencer";
        this.autoplay = false;
        this.taps = 4;
        this.context = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, document.querySelector('web-audio').get_context()];
                    case 1: 
                    // @ts-ignore
                    return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.noteTime = 0.0;
        this.currentTap = 0;
        this.totalPlayTime = 0.0;
        this.custom = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
    }
    class_1.prototype.componentDidLoad = function () {
        if (this.autoplay) {
            this.play();
        }
    };
    class_1.prototype.schedule = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentTime, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.context()];
                    case 1:
                        currentTime = (_a.sent()).currentTime;
                        // The sequence starts at startTime, so normalize currentTime so that it's 0 at the start of the sequence.
                        currentTime -= this.startTime;
                        _a.label = 2;
                    case 2:
                        if (!(this.noteTime < currentTime + 0.005)) return [3 /*break*/, 7];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.custom()];
                    case 4:
                        _a.sent();
                        this.totalPlayTime = this.noteTime + this.startTime;
                        if (this.currentTap === 0) {
                            this.iterations++;
                        }
                        this.advance();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 2];
                    case 7:
                        this.timer = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.schedule()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 0);
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.advance = function () {
        // Setting tempo to 60 BPM just for now
        var secondsPerBeat = 60 / this.tempo;
        this.currentTap++;
        if (this.currentTap == this.taps) {
            this.currentTap = 0;
        }
        // 0.25 because each square is a 16th note
        this.noteTime += 0.25 * secondsPerBeat;
    };
    class_1.prototype.play = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.context()];
                    case 1:
                        if (!!(_b.sent())) return [3 /*break*/, 3];
                        // @ts-ignore
                        return [4 /*yield*/, document.querySelector('web-audio').connect_the_world()];
                    case 2:
                        // @ts-ignore
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        this.iterations = 0;
                        _a = this;
                        return [4 /*yield*/, this.context()];
                    case 4:
                        _a.startTime = (_b.sent()).currentTime + 0.005 || 0.005;
                        return [4 /*yield*/, this.schedule()];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.iterations = 0;
                        this.totalPlayTime = 0;
                        this.startTime = null;
                        this.currentTap = 0;
                        return [4 /*yield*/, this.context()];
                    case 1:
                        (_a.sent()).stop();
                        clearTimeout(this.timer);
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return [
            h("button", { class: "play", onClick: function () { _this.play(); } }, "Play"),
            h("button", { class: "stop", onClick: function () { _this.stop(); } }, "Stop")
        ];
    };
    return class_1;
}());
export { WebAudioSequencer as web_audio_sequencer };
