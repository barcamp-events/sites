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
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-e9450bee.js';
import './_commonjsHelpers-ae1b5db5.js';
import { e as asTime } from './index-5afdd7fa.js';
import './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
var Playlist = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.visualizationColor = "gray";
        this.visualizationType = "bars";
        this.autoplay = false;
        this.playlist = "show";
        this.name = "Playlist";
        this.remember = true;
        this.artwork = false;
        this.view = "playlist";
        this.playing = false;
        this.load = false;
        this.loading = false;
        this.dark = false;
        this.current = 0;
        this.currentTrack = {
            title: 'Loading...',
            artist: 'One sec...',
            picture: undefined
        };
        this.progress_value = 0;
        this.load_songs = createEvent(this, "load_songs", 7);
    }
    class_1.prototype.componentWillLoad = function () {
        this.loadFromStorage();
    };
    class_1.prototype.componentDidLoad = function () {
        this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
        this.audio = this.element.shadowRoot.querySelector('audio');
        this.progress = this.element.shadowRoot.querySelector('progress');
        this.playlistItems = this.element.querySelectorAll('stellar-song');
        this.currentPlaylistItem = this.element.querySelector('stellar-song[playing]');
        var allSongs = Array.from(this.playlistItems);
        allSongs.forEach(function (element, index) {
            element.setIndex(index);
        });
        if (this.audio) {
            this.audio.volume = .70;
        }
        var playing = this.element.querySelector('stellar-song[playing]') || this.element.querySelector('stellar-song');
        playing.playing = true;
        this.prepare(playing);
        if (this.autoplay) {
            this.play();
        }
        if (this.remember) {
            this.loadFromStorage();
        }
        this.handleUpdates();
        this.handleProgressClick();
    };
    class_1.prototype.cycleVisualizations = function () {
        // this.view === "art" ? "circle" : "bars";
        if (this.visualizationType === "circle") {
            this.visualizationType = "bars";
        }
        else if (this.visualizationType === "bars") {
            this.visualizationType = "bars2";
        }
        else if (this.visualizationType === "bars2") {
            this.visualizationType = "wave";
        }
        else if (this.visualizationType === "wave") {
            this.visualizationType = "circle";
        }
    };
    class_1.prototype.handleProgressClick = function () {
        var _this = this;
        this.progress.addEventListener('click', function (e) {
            var x = e.offsetX;
            var clickedValue = x / _this.progress.offsetWidth;
            _this.audio.currentTime = clickedValue * _this.audio.duration;
        });
    };
    class_1.prototype.handleUpdates = function () {
        var _this = this;
        this.audio.addEventListener("update", function () {
            _this.currentTime = asTime(parseFloat(_this.audio.currentTime.toString()).toFixed(10));
            _this.duration = asTime(parseFloat(_this.audio.duration.toString()).toFixed(10));
            var value = (_this.audio.currentTime !== 0 && _this.audio.duration !== 0) ? ((_this.audio.currentTime / _this.audio.duration) * 100) : 0;
            _this.progress_value = value;
        });
        this.audio.addEventListener('ended', this.next.bind(this));
    };
    class_1.prototype.handleKeydown = function (event) {
        if (event.key === "space") {
            this.pause();
        }
        else if (event.key === "left") {
            this.previous();
        }
        else if (event.key === "right") {
            this.next();
        }
    };
    class_1.prototype.handleSongLoaded = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var el;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        el = event.detail.el;
                        if (!el.playing) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.prepare(el)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.play(true)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.loadFromStorage = function () {
        var playlist = localStorage.getItem('playlist');
        if (playlist === "show" || playlist === "hide") {
            this.playlist = playlist;
        }
    };
    class_1.prototype.prepare = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.currentPlaylistItem) {
                            this.currentPlaylistItem.switching();
                        }
                        this.currentTrack = {
                            title: 'Loading...',
                            artist: 'One sec...',
                            picture: undefined
                        };
                        this.currentPlaylistItem = element;
                        this.audio.src = this.currentPlaylistItem.src;
                        return [4 /*yield*/, this.audio.load()];
                    case 1:
                        _c.sent();
                        _a = this;
                        return [4 /*yield*/, this.currentPlaylistItem.getIndex()];
                    case 2:
                        _a.current = _c.sent();
                        this.currentPlaylistItem.playing = true;
                        _b = this;
                        return [4 /*yield*/, this.currentPlaylistItem.details()];
                    case 3:
                        _b.currentTrack = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.play = function (skipDefault) {
        if (skipDefault === void 0) { skipDefault = false; }
        return __awaiter(this, void 0, void 0, function () {
            var context, src, waanalyser, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!skipDefault) {
                            this.currentTrack = {
                                title: 'Loading...',
                                artist: 'One sec...',
                                picture: undefined
                            };
                        }
                        this.loading = true;
                        this.playing = true;
                        return [4 /*yield*/, this.audio.play()];
                    case 1:
                        _b.sent();
                        if (!!this.context) return [3 /*break*/, 3];
                        context = new (window.AudioContext || window.webkitAudioContext)();
                        src = context.createMediaElementSource(this.audio);
                        return [4 /*yield*/, this.visualizer.connect(context)];
                    case 2:
                        waanalyser = _b.sent();
                        src.connect(waanalyser.analyser);
                        waanalyser.analyser.connect(context.destination);
                        this.context = context;
                        _b.label = 3;
                    case 3:
                        _a = this;
                        return [4 /*yield*/, this.currentPlaylistItem.details()];
                    case 4:
                        _a.currentTrack = _b.sent();
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.pause = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.audio.paused) return [3 /*break*/, 2];
                        this.playing = false;
                        return [4 /*yield*/, this.audio.pause()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        this.playing = true;
                        return [4 /*yield*/, this.audio.play()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var song;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        song = this.element.querySelector('stellar-song[playing]');
                        if (this.current === this.playlistItems.length - 1) {
                            song = this.element.querySelector('stellar-song:first-child');
                        }
                        else {
                            song = song.nextElementSibling;
                        }
                        return [4 /*yield*/, song.play()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.previous = function () {
        return __awaiter(this, void 0, void 0, function () {
            var song;
            return __generator(this, function (_a) {
                song = this.element.querySelector('stellar-song[playing]');
                song.removeAttribute('playing');
                if (this.current === 0) {
                    song = this.element.querySelector('stellar-song:last-child');
                }
                else {
                    song = song.previousElementSibling;
                }
                song.setAttribute('playing', true);
                song.play();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.togglePlaylist = function () {
        if (this.playlist === "show") {
            this.playlist = "hide";
        }
        else {
            this.playlist = "show";
        }
        localStorage.setItem('playlist', this.playlist);
    };
    class_1.prototype.toggleAlbumArtView = function () {
        if (this.view === "playlist") {
            this.view = "art";
        }
        else {
            this.view = "playlist";
        }
    };
    class_1.prototype.handlePlay = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.load) {
                    this.load = true;
                    this.load_songs.emit({});
                }
                this.pause();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("div", { id: "player" }, h("div", { class: "playlist-title" }, h("h6", null, this.name), h("button", { class: "playlist", onClick: function () { return _this.togglePlaylist(); } }, h("h6", { class: "list" }, h("stellar-asset", { name: "musical-notes" }), "list")), h("button", { class: "switch-view", onClick: function () { return _this.toggleAlbumArtView(); }, "data-playing": this.playing }, h("h6", { class: "list" }, (this.view === "art")
            ? h("stellar-asset", { name: "albums" })
            : h("stellar-asset", { name: "radio" }), (this.view === "art")
            ? "Art"
            : "Player")), h("stellar-color-picker", { val: this.visualizationColor, notransparent: true, onUpdate: function (e) { _this.visualizationColor = e.detail; } })), h("div", { class: "playlist-playing" }, h("button", { onClick: function () { _this.handlePlay(); }, class: "toggle-button", "data-playing": this.playing }, (this.playing)
            ? h("stellar-asset", { name: "pause" })
            : h("stellar-asset", { name: "play" })), !this.load && h("stellar-button", { tag: "button", size: "tiny", onClick: function () { _this.load = true; _this.load_songs.emit({}); } }, "Load ", this.name || "this playlist"), this.load && h("div", { class: "playlist-playing-details" }, h("h2", null, this.currentTrack.title || 'Loading...'), h("h3", null, this.currentTrack.artist || 'One Sec...')), this.load &&
            h("div", { class: "playlist-playing-image" }, this.loading && h("stellar-progress", { indeterminate: true }), !this.loading && (this.currentTrack.picture !== undefined) && h("img", { src: this.currentTrack.picture, onClick: function () { return _this.toggleAlbumArtView(); } })), (!this.load && this.currentTrack.picture === undefined) && h("skeleton-img", { width: 1024, height: 1024, block: true, loading: true }), h("web-audio-visualizer", { type: this.visualizationType, color: this.visualizationColor, onClick: function () { _this.cycleVisualizations(); }, width: 1024, height: this.view === "art" ? 1024 : 256 }), h("div", { class: "playlist-progress " + (this.load ? "load" : "noload") }, h("h6", { id: "currentTime" }, this.currentTime), h("h6", { id: "totalTime" }, this.duration), h("progress", { id: "progress", max: "100", value: this.progress_value }))), h("div", { id: "controls", class: "controls" }, h("button", { onClick: function () { return _this.previous(); }, class: "button previous" }, h("stellar-asset", { name: "skip-backward" })), h("button", { onClick: function () { return _this.next(); }, class: "button next" }, h("stellar-asset", { name: "skip-forward" }))), h("audio", { id: "playlist-audio", preload: "auto", tabindex: "0", controls: true }, h("source", { id: "source", type: "audio/mp3" })), h("div", { id: "playlist", class: "playlist-list " + this.playlist }, this.load && h("slot", null))));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host,:host *{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-one:var(--theme-base1);--color-two:var(--theme-base9);--color-three:var(--theme-base5);--color-four:var(--theme-base7);--color-bg:var(--theme-base0);--color-bg-active:var(--theme-base1);--color-bg-playing:var(--theme-base2);--color-line:var(--theme-base1)}:host([dark]){--color-one:var(--theme-base9);--color-two:var(--theme-base1);--color-three:var(--theme-base7);--color-four:var(--theme-base2);--color-bg:var(--black-alt);--color-bg-active:var(--theme-base8);--color-bg-playing:var(--theme-base8);--color-line:var(--black)}:host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--color-bg);max-width:650px;width:100%;margin:0 auto}:host button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;outline:0;border:0;cursor:pointer}:host button.playlist{margin:0 .5rem 0 auto}:host button.switch-view{margin:0 .5rem 0 0}:host audio{display:none}:host #player{position:relative}:host stellar-color-picker{z-index:99}:host web-audio-visualizer{height:0;margin-top:1rem;opacity:0;-webkit-transition:all .25s var(--ease) 0s;transition:all .25s var(--ease) 0s;width:100%}:host([playing]) web-audio-visualizer{opacity:1;height:10rem}:host h6{font-size:.75rem;margin:0;text-transform:uppercase;color:var(--color-two);letter-spacing:.23em;z-index:1}:host h6.list{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host h6.list stellar-asset{margin-right:.5rem}:host .playlist-playing,:host .playlist-playing-details,:host .playlist-progress,:host .playlist-title{-webkit-transition:all .1875s ease-in-out 0s;transition:all .1875s ease-in-out 0s}:host .playlist-playing-image{-webkit-transition:all .25s ease-in-out 0s;transition:all .25s ease-in-out 0s}:host .playlist-title{background:var(--color-one);height:3rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem 1rem}:host .playlist-playing-details{margin-right:30px}:host .playlist-playing{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;padding:2rem 1rem 3rem;position:relative}:host .playlist-playing h2,:host .playlist-playing h3{font-weight:400;margin:0}:host .playlist-playing h2{color:var(--color-two);font-weight:700;font-size:17px;overflow:hidden;width:100%}:host .playlist-playing h3{color:var(--color-four);font-size:16px;overflow:hidden;width:100%}:host .playlist-progress{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:baseline;align-items:baseline;-ms-flex-pack:justify;justify-content:space-between;width:100%;padding:0 15px 15px;z-index:5;bottom:0;left:0;-webkit-transition:all .1s ease 0s;transition:all .1s ease 0s;opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);max-height:0}:host .playlist-progress.load{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);max-height:100px}:host .playlist-progress progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;height:3px;bottom:0;left:0;width:100%;-webkit-transition:all 75ms ease-in-out .25s;transition:all 75ms ease-in-out .25s;cursor:pointer;z-index:2}:host .playlist-progress progress:hover{-webkit-transition:all 75ms ease-in-out 0s;transition:all 75ms ease-in-out 0s;height:16px;bottom:-8px}:host .playlist-progress progress[value]::-moz-progress-bar{background-color:var(--color-line)}:host .playlist-progress progress[value]::-webkit-progress-bar{background-color:var(--color-line)}:host .playlist-progress progress[value]::-webkit-progress-value{background-color:var(--color-three)}:host .playlist-list{max-height:24rem;overflow:auto;-webkit-transition:all .2s ease 0s;transition:all .2s ease 0s}:host .playlist-list.hide{max-height:0}:host .controls{display:-ms-flexbox;display:flex;display:none;margin:1em 0}:host .controls .button{font-size:2rem;width:50%;-ms-flex:12 6 200px;flex:12 6 200px}:host .controls .button stellar-asset{display:inline-block}:host .playlist-playing-image{margin:auto 0 auto auto;width:5rem;-ms-flex:0 0 5rem;flex:0 0 5rem;height:5rem;cursor:pointer}:host .playlist-playing-image img{width:100%;background:#fff;border-radius:3px;height:auto;-webkit-box-shadow:0 3px 3px 0 hsla(0,0%,91%,.6);box-shadow:0 3px 3px 0 hsla(0,0%,91%,.6)}:host .playlist-playing .toggle-button{padding:0;margin-right:2rem;width:3rem;height:3rem;padding:14px;border-radius:100%;background:var(--color-three);color:#fff;position:relative}:host .playlist-playing .toggle-button stellar-asset{font-size:2rem;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}:host .playlist-playing .toggle-button stellar-asset[name=play]{-webkit-transform:translate(-43%,-50%);transform:translate(-43%,-50%)}:host .playlist-playing .toggle-button[data-playing=false]{padding:14px 12px 14px 16px}:host .st0{fill:var(--color-three)}:host .st1{fill:#fff}:host skeleton-img{display:none}:host([view=art]) .playlist-playing{position:relative;margin:0;padding:0;overflow:hidden}:host([view=art]) web-audio-visualizer{height:100%;position:absolute;bottom:0;z-index:2;-webkit-transition:all 0s var(--ease) 0s;transition:all 0s var(--ease) 0s}:host([view=art]) .playlist-playing .toggle-button{display:none}:host([view=art]) .playlist-playing .playlist-playing-details{position:absolute;bottom:0;width:100%;padding:2rem;background:var(--color-one);left:0;right:0;text-align:center;mix-blend-mode:hard-light;margin:0;-webkit-transform:translateY(100%);transform:translateY(100%);z-index:3}:host([view=art]:hover) .playlist-playing-details{-webkit-transform:translateY(0);transform:translateY(0)}:host([view=art]) .playlist-progress{padding:0 15px 0}:host([view=art]) .playlist-progress h6{display:none}:host([view=art]) .playlist-playing stellar-button{position:absolute;left:50%;top:50%;z-index:3;-webkit-transform:translate(-50%,-50%)!important;transform:translate(-50%,-50%)!important}:host([view=art]) .playlist-playing-image,:host([view=art]) skeleton-img{display:block;width:100%;margin:0 auto;-ms-flex:none;flex:none;height:0;padding-bottom:100%}:host([view=art]) .playlist-playing-image:focus,:host([view=art]) .playlist-playing-image:hover{-webkit-transform:scale(1.025);transform:scale(1.025);cursor:pointer}:host([view=art]) .playlist-playing-image img{width:100%}:host([view=art]) .controls{display:none}:host([dark]) .playlist-playing-image img{-webkit-box-shadow:0 3px 3px 0 rgba(24,24,24,.6);box-shadow:0 3px 3px 0 rgba(24,24,24,.6)}:host([dark]) web-audio-visualizer{-webkit-filter:hue-rotate(180deg) invert(80%);filter:hue-rotate(180deg) invert(80%)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Tunnel.injectProps(Playlist, ['dark']);
export { Playlist as stellar_playlist };
