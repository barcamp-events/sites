import { h } from "@stencil/core";
import { asTime } from '../../../utils';
import Tunnel from '../../theme';
export class Playlist {
    constructor() {
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
            this.currentTime = asTime(parseFloat(this.audio.currentTime.toString()).toFixed(10));
            this.duration = asTime(parseFloat(this.audio.duration.toString()).toFixed(10));
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
            ;
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
        return (h("div", { id: "player" },
            h("div", { class: "playlist-title" },
                h("h6", null, this.name),
                h("button", { class: "playlist", onClick: () => this.togglePlaylist() },
                    h("h6", { class: "list" },
                        h("stellar-asset", { name: "musical-notes" }),
                        "list")),
                h("button", { class: "switch-view", onClick: () => this.toggleAlbumArtView(), "data-playing": this.playing },
                    h("h6", { class: "list" },
                        (this.view === "art")
                            ? h("stellar-asset", { name: "albums" })
                            : h("stellar-asset", { name: "radio" }),
                        (this.view === "art")
                            ? "Art"
                            : "Player")),
                h("stellar-color-picker", { val: this.visualizationColor, notransparent: true, onUpdate: (e) => { this.visualizationColor = e.detail; } })),
            h("div", { class: "playlist-playing" },
                h("button", { onClick: () => { this.handlePlay(); }, class: "toggle-button", "data-playing": this.playing }, (this.playing)
                    ? h("stellar-asset", { name: "pause" })
                    : h("stellar-asset", { name: "play" })),
                !this.load && h("stellar-button", { tag: "button", size: "tiny", onClick: () => { this.load = true; this.load_songs.emit({}); } },
                    "Load ",
                    this.name || "this playlist"),
                this.load && h("div", { class: "playlist-playing-details" },
                    h("h2", null, this.currentTrack.title || 'Loading...'),
                    h("h3", null, this.currentTrack.artist || 'One Sec...')),
                this.load &&
                    h("div", { class: "playlist-playing-image" },
                        this.loading && h("stellar-progress", { indeterminate: true }),
                        !this.loading && (this.currentTrack.picture !== undefined) && h("img", { src: this.currentTrack.picture, onClick: () => this.toggleAlbumArtView() })),
                (!this.load && this.currentTrack.picture === undefined) && h("skeleton-img", { width: 1024, height: 1024, block: true, loading: true }),
                h("web-audio-visualizer", { type: this.visualizationType, color: this.visualizationColor, onClick: () => { this.cycleVisualizations(); }, width: 1024, height: this.view === "art" ? 1024 : 256 }),
                h("div", { class: `playlist-progress ${this.load ? "load" : "noload"}` },
                    h("h6", { id: "currentTime" }, this.currentTime),
                    h("h6", { id: "totalTime" }, this.duration),
                    h("progress", { id: "progress", max: "100", value: this.progress_value }))),
            h("div", { id: "controls", class: "controls" },
                h("button", { onClick: () => this.previous(), class: "button previous" },
                    h("stellar-asset", { name: "skip-backward" })),
                h("button", { onClick: () => this.next(), class: "button next" },
                    h("stellar-asset", { name: "skip-forward" }))),
            h("audio", { id: "playlist-audio", preload: "auto", tabindex: "0", controls: true },
                h("source", { id: "source", type: "audio/mp3" })),
            h("div", { id: "playlist", class: `playlist-list ${this.playlist}` }, this.load && h("slot", null))));
    }
    static get is() { return "stellar-playlist"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["playlist.css"]
    }; }
    static get styleUrls() { return {
        "$": ["playlist.css"]
    }; }
    static get properties() { return {
        "visualizationColor": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "visualization-color",
            "reflect": true,
            "defaultValue": "\"gray\""
        },
        "visualizationType": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"bars\"|\"bars2\"|\"wave\"|\"circle\"",
                "resolved": "\"bars\" | \"bars2\" | \"circle\" | \"wave\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "visualization-type",
            "reflect": true,
            "defaultValue": "\"bars\""
        },
        "autoplay": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "autoplay",
            "reflect": false,
            "defaultValue": "false"
        },
        "playlist": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"show\"|\"hide\"",
                "resolved": "\"hide\" | \"show\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "playlist",
            "reflect": true,
            "defaultValue": "\"show\""
        },
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "\"Playlist\""
        },
        "remember": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "remember",
            "reflect": false,
            "defaultValue": "true"
        },
        "artwork": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "artwork",
            "reflect": true,
            "defaultValue": "false"
        },
        "view": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"playlist\"|\"art\"",
                "resolved": "\"art\" | \"playlist\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "view",
            "reflect": true,
            "defaultValue": "\"playlist\""
        },
        "playing": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "playing",
            "reflect": true,
            "defaultValue": "false"
        },
        "load": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "load",
            "reflect": true,
            "defaultValue": "false"
        },
        "loading": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "loading",
            "reflect": true,
            "defaultValue": "false"
        },
        "dark": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "dark",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "current": {},
        "currentTrack": {},
        "currentTime": {},
        "duration": {},
        "visualizer": {},
        "audio": {},
        "progress": {},
        "progress_value": {},
        "playlistItems": {},
        "currentPlaylistItem": {},
        "context": {}
    }; }
    static get events() { return [{
            "method": "load_songs",
            "name": "load_songs",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "prepare": {
            "complexType": {
                "signature": "(element: any) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "play": {
            "complexType": {
                "signature": "(skipDefault?: boolean) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "pause": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "next": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "previous": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "handleKeydown",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "loaded",
            "method": "handleSongLoaded",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
Tunnel.injectProps(Playlist, ['dark']);
