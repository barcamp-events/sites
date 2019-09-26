'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
const index = require('./index-5a80c644.js');
require('./_commonjsHelpers-3fc1f64e.js');
require('./css-custom-properties.min-d46e7f9d.js');
require('./main-6214461c.js');
require('./moment-fd045425.js');
require('./index-9d31ce96.js');
const theme = require('./theme-f448164e.js');

const Playlist = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        this.load_songs = core.createEvent(this, "load_songs", 7);
    }
    componentWillLoad() {
        this.loadFromStorage();
    }
    componentDidLoad() {
        this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
        this.audio = this.element.shadowRoot.querySelector('audio');
        this.progress = this.element.shadowRoot.querySelector('progress');
        this.playlistItems = this.element.querySelectorAll('stellar-song');
        this.currentPlaylistItem = this.element.querySelector('stellar-song[playing]');
        var allSongs = Array.from(this.playlistItems);
        allSongs.forEach((element, index) => {
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
    }
    cycleVisualizations() {
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
    }
    handleProgressClick() {
        this.progress.addEventListener('click', (e) => {
            var x = e.offsetX;
            var clickedValue = x / this.progress.offsetWidth;
            this.audio.currentTime = clickedValue * this.audio.duration;
        });
    }
    handleUpdates() {
        this.audio.addEventListener("update", () => {
            this.currentTime = index.asTime(parseFloat(this.audio.currentTime.toString()).toFixed(10));
            this.duration = index.asTime(parseFloat(this.audio.duration.toString()).toFixed(10));
            const value = (this.audio.currentTime !== 0 && this.audio.duration !== 0) ? ((this.audio.currentTime / this.audio.duration) * 100) : 0;
            this.progress_value = value;
        });
        this.audio.addEventListener('ended', this.next.bind(this));
    }
    handleKeydown(event) {
        if (event.key === "space") {
            this.pause();
        }
        else if (event.key === "left") {
            this.previous();
        }
        else if (event.key === "right") {
            this.next();
        }
    }
    async handleSongLoaded(event) {
        const el = event.detail.el;
        if (el.playing) {
            await this.prepare(el);
            await this.play(true);
        }
    }
    loadFromStorage() {
        var playlist = localStorage.getItem('playlist');
        if (playlist === "show" || playlist === "hide") {
            this.playlist = playlist;
        }
    }
    async prepare(element) {
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
        await this.audio.load();
        this.current = await this.currentPlaylistItem.getIndex();
        this.currentPlaylistItem.playing = true;
        this.currentTrack = await this.currentPlaylistItem.details();
    }
    async play(skipDefault = false) {
        if (!skipDefault) {
            this.currentTrack = {
                title: 'Loading...',
                artist: 'One sec...',
                picture: undefined
            };
        }
        this.loading = true;
        this.playing = true;
        await this.audio.play();
        if (!this.context) {
            // @ts-ignore
            const context = new (window.AudioContext || window.webkitAudioContext)();
            const src = context.createMediaElementSource(this.audio);
            const waanalyser = await this.visualizer.connect(context);
            src.connect(waanalyser.analyser);
            waanalyser.analyser.connect(context.destination);
            this.context = context;
        }
        this.currentTrack = await this.currentPlaylistItem.details();
        this.loading = false;
    }
    async pause() {
        if (!this.audio.paused) {
            this.playing = false;
            await this.audio.pause();
        }
        else {
            this.playing = true;
            await this.audio.play();
        }
    }
    async next() {
        var song;
        song = this.element.querySelector('stellar-song[playing]');
        if (this.current === this.playlistItems.length - 1) {
            song = this.element.querySelector('stellar-song:first-child');
        }
        else {
            song = song.nextElementSibling;
        }
        await song.play();
    }
    async previous() {
        var song;
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
    }
    togglePlaylist() {
        if (this.playlist === "show") {
            this.playlist = "hide";
        }
        else {
            this.playlist = "show";
        }
        localStorage.setItem('playlist', this.playlist);
    }
    toggleAlbumArtView() {
        if (this.view === "playlist") {
            this.view = "art";
        }
        else {
            this.view = "playlist";
        }
    }
    async handlePlay() {
        if (!this.load) {
            this.load = true;
            this.load_songs.emit({});
        }
        this.pause();
    }
    render() {
        return (core.h("div", { id: "player" }, core.h("div", { class: "playlist-title" }, core.h("h6", null, this.name), core.h("button", { class: "playlist", onClick: () => this.togglePlaylist() }, core.h("h6", { class: "list" }, core.h("stellar-asset", { name: "musical-notes" }), "list")), core.h("button", { class: "switch-view", onClick: () => this.toggleAlbumArtView(), "data-playing": this.playing }, core.h("h6", { class: "list" }, (this.view === "art")
            ? core.h("stellar-asset", { name: "albums" })
            : core.h("stellar-asset", { name: "radio" }), (this.view === "art")
            ? "Art"
            : "Player")), core.h("stellar-color-picker", { val: this.visualizationColor, notransparent: true, onUpdate: (e) => { this.visualizationColor = e.detail; } })), core.h("div", { class: "playlist-playing" }, core.h("button", { onClick: () => { this.handlePlay(); }, class: "toggle-button", "data-playing": this.playing }, (this.playing)
            ? core.h("stellar-asset", { name: "pause" })
            : core.h("stellar-asset", { name: "play" })), !this.load && core.h("stellar-button", { tag: "button", size: "tiny", onClick: () => { this.load = true; this.load_songs.emit({}); } }, "Load ", this.name || "this playlist"), this.load && core.h("div", { class: "playlist-playing-details" }, core.h("h2", null, this.currentTrack.title || 'Loading...'), core.h("h3", null, this.currentTrack.artist || 'One Sec...')), this.load &&
            core.h("div", { class: "playlist-playing-image" }, this.loading && core.h("stellar-progress", { indeterminate: true }), !this.loading && (this.currentTrack.picture !== undefined) && core.h("img", { src: this.currentTrack.picture, onClick: () => this.toggleAlbumArtView() })), (!this.load && this.currentTrack.picture === undefined) && core.h("skeleton-img", { width: 1024, height: 1024, block: true, loading: true }), core.h("web-audio-visualizer", { type: this.visualizationType, color: this.visualizationColor, onClick: () => { this.cycleVisualizations(); }, width: 1024, height: this.view === "art" ? 1024 : 256 }), core.h("div", { class: `playlist-progress ${this.load ? "load" : "noload"}` }, core.h("h6", { id: "currentTime" }, this.currentTime), core.h("h6", { id: "totalTime" }, this.duration), core.h("progress", { id: "progress", max: "100", value: this.progress_value }))), core.h("div", { id: "controls", class: "controls" }, core.h("button", { onClick: () => this.previous(), class: "button previous" }, core.h("stellar-asset", { name: "skip-backward" })), core.h("button", { onClick: () => this.next(), class: "button next" }, core.h("stellar-asset", { name: "skip-forward" }))), core.h("audio", { id: "playlist-audio", preload: "auto", tabindex: "0", controls: true }, core.h("source", { id: "source", type: "audio/mp3" })), core.h("div", { id: "playlist", class: `playlist-list ${this.playlist}` }, this.load && core.h("slot", null))));
    }
    get element() { return core.getElement(this); }
    static get style() { return ":host,:host *{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-one:var(--theme-base1);--color-two:var(--theme-base9);--color-three:var(--theme-base5);--color-four:var(--theme-base7);--color-bg:var(--theme-base0);--color-bg-active:var(--theme-base1);--color-bg-playing:var(--theme-base2);--color-line:var(--theme-base1)}:host([dark]){--color-one:var(--theme-base9);--color-two:var(--theme-base1);--color-three:var(--theme-base7);--color-four:var(--theme-base2);--color-bg:var(--black-alt);--color-bg-active:var(--theme-base8);--color-bg-playing:var(--theme-base8);--color-line:var(--black)}:host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--color-bg);max-width:650px;width:100%;margin:0 auto}:host button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;outline:0;border:0;cursor:pointer}:host button.playlist{margin:0 .5rem 0 auto}:host button.switch-view{margin:0 .5rem 0 0}:host audio{display:none}:host #player{position:relative}:host stellar-color-picker{z-index:99}:host web-audio-visualizer{height:0;margin-top:1rem;opacity:0;-webkit-transition:all .25s var(--ease) 0s;transition:all .25s var(--ease) 0s;width:100%}:host([playing]) web-audio-visualizer{opacity:1;height:10rem}:host h6{font-size:.75rem;margin:0;text-transform:uppercase;color:var(--color-two);letter-spacing:.23em;z-index:1}:host h6.list{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host h6.list stellar-asset{margin-right:.5rem}:host .playlist-playing,:host .playlist-playing-details,:host .playlist-progress,:host .playlist-title{-webkit-transition:all .1875s ease-in-out 0s;transition:all .1875s ease-in-out 0s}:host .playlist-playing-image{-webkit-transition:all .25s ease-in-out 0s;transition:all .25s ease-in-out 0s}:host .playlist-title{background:var(--color-one);height:3rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem 1rem}:host .playlist-playing-details{margin-right:30px}:host .playlist-playing{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;padding:2rem 1rem 3rem;position:relative}:host .playlist-playing h2,:host .playlist-playing h3{font-weight:400;margin:0}:host .playlist-playing h2{color:var(--color-two);font-weight:700;font-size:17px;overflow:hidden;width:100%}:host .playlist-playing h3{color:var(--color-four);font-size:16px;overflow:hidden;width:100%}:host .playlist-progress{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:baseline;align-items:baseline;-ms-flex-pack:justify;justify-content:space-between;width:100%;padding:0 15px 15px;z-index:5;bottom:0;left:0;-webkit-transition:all .1s ease 0s;transition:all .1s ease 0s;opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);max-height:0}:host .playlist-progress.load{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);max-height:100px}:host .playlist-progress progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;height:3px;bottom:0;left:0;width:100%;-webkit-transition:all 75ms ease-in-out .25s;transition:all 75ms ease-in-out .25s;cursor:pointer;z-index:2}:host .playlist-progress progress:hover{-webkit-transition:all 75ms ease-in-out 0s;transition:all 75ms ease-in-out 0s;height:16px;bottom:-8px}:host .playlist-progress progress[value]::-moz-progress-bar{background-color:var(--color-line)}:host .playlist-progress progress[value]::-webkit-progress-bar{background-color:var(--color-line)}:host .playlist-progress progress[value]::-webkit-progress-value{background-color:var(--color-three)}:host .playlist-list{max-height:24rem;overflow:auto;-webkit-transition:all .2s ease 0s;transition:all .2s ease 0s}:host .playlist-list.hide{max-height:0}:host .controls{display:-ms-flexbox;display:flex;display:none;margin:1em 0}:host .controls .button{font-size:2rem;width:50%;-ms-flex:12 6 200px;flex:12 6 200px}:host .controls .button stellar-asset{display:inline-block}:host .playlist-playing-image{margin:auto 0 auto auto;width:5rem;-ms-flex:0 0 5rem;flex:0 0 5rem;height:5rem;cursor:pointer}:host .playlist-playing-image img{width:100%;background:#fff;border-radius:3px;height:auto;-webkit-box-shadow:0 3px 3px 0 hsla(0,0%,91%,.6);box-shadow:0 3px 3px 0 hsla(0,0%,91%,.6)}:host .playlist-playing .toggle-button{padding:0;margin-right:2rem;width:3rem;height:3rem;padding:14px;border-radius:100%;background:var(--color-three);color:#fff;position:relative}:host .playlist-playing .toggle-button stellar-asset{font-size:2rem;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}:host .playlist-playing .toggle-button stellar-asset[name=play]{-webkit-transform:translate(-43%,-50%);transform:translate(-43%,-50%)}:host .playlist-playing .toggle-button[data-playing=false]{padding:14px 12px 14px 16px}:host .st0{fill:var(--color-three)}:host .st1{fill:#fff}:host skeleton-img{display:none}:host([view=art]) .playlist-playing{position:relative;margin:0;padding:0;overflow:hidden}:host([view=art]) web-audio-visualizer{height:100%;position:absolute;bottom:0;z-index:2;-webkit-transition:all 0s var(--ease) 0s;transition:all 0s var(--ease) 0s}:host([view=art]) .playlist-playing .toggle-button{display:none}:host([view=art]) .playlist-playing .playlist-playing-details{position:absolute;bottom:0;width:100%;padding:2rem;background:var(--color-one);left:0;right:0;text-align:center;mix-blend-mode:hard-light;margin:0;-webkit-transform:translateY(100%);transform:translateY(100%);z-index:3}:host([view=art]:hover) .playlist-playing-details{-webkit-transform:translateY(0);transform:translateY(0)}:host([view=art]) .playlist-progress{padding:0 15px 0}:host([view=art]) .playlist-progress h6{display:none}:host([view=art]) .playlist-playing stellar-button{position:absolute;left:50%;top:50%;z-index:3;-webkit-transform:translate(-50%,-50%)!important;transform:translate(-50%,-50%)!important}:host([view=art]) .playlist-playing-image,:host([view=art]) skeleton-img{display:block;width:100%;margin:0 auto;-ms-flex:none;flex:none;height:0;padding-bottom:100%}:host([view=art]) .playlist-playing-image:focus,:host([view=art]) .playlist-playing-image:hover{-webkit-transform:scale(1.025);transform:scale(1.025);cursor:pointer}:host([view=art]) .playlist-playing-image img{width:100%}:host([view=art]) .controls{display:none}:host([dark]) .playlist-playing-image img{-webkit-box-shadow:0 3px 3px 0 rgba(24,24,24,.6);box-shadow:0 3px 3px 0 rgba(24,24,24,.6)}:host([dark]) web-audio-visualizer{-webkit-filter:hue-rotate(180deg) invert(80%);filter:hue-rotate(180deg) invert(80%)}"; }
};
theme.Tunnel.injectProps(Playlist, ['dark']);

exports.stellar_playlist = Playlist;
