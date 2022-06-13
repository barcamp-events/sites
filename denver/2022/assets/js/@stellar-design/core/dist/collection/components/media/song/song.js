import { h } from "@stencil/core";
import { leadingZeroIndex, relPathAsAbs } from "../../../utils";
import './vendor/jsmediatags.min.js';
import smallIndexedDb from 'small-indexeddb';
export class Song {
    constructor() {
        this._index = 0;
    }
    get url() {
        if (this.src.startsWith('http')) {
            return this.src;
        }
        else if (this.src.startsWith('.')) {
            return window.location.origin + relPathAsAbs(this.src);
        }
        else {
            return window.location.origin + this.src;
        }
    }
    async componentWillLoad() {
        this.player = this.element.closest('stellar-playlist');
        if (this.player.load) {
            this.load();
        }
        this.player.addEventListener('load_songs', () => {
            this.load();
        });
    }
    componentDidLoad() {
    }
    songChangedHandler() {
        this.songChanged.emit(this._index);
    }
    updateDetails(details) {
        this.title = details.title;
        this.album = details.album;
        this.genre = details.genre;
        this.artist = details.artist;
        this.picture = details.picture;
    }
    async load() {
        const transaction = await smallIndexedDb('songs');
        const details = await transaction('readonly', store => store.get(this.src));
        if (!details) {
            window["jsmediatags"].read(this.url, {
                onSuccess: async (tag) => {
                    var itemToSave = {
                        title: tag.tags.title,
                        album: tag.tags.album,
                        genre: tag.tags.genre,
                        artist: tag.tags.artist,
                        picture: tag.tags.picture
                    };
                    if (tag.tags.picture) {
                        var base64String = "";
                        for (var i = 0; i < tag.tags.picture.data.length; i++) {
                            base64String += String.fromCharCode(tag.tags.picture.data[i]);
                        }
                        var base64 = "data:image/jpeg;base64," + window.btoa(base64String);
                        itemToSave.picture = base64;
                        await transaction('readwrite', store => store.put(base64, itemToSave.album + "_picture"));
                    }
                    else {
                        itemToSave.picture = undefined;
                    }
                    await transaction('readwrite', store => store.put(JSON.stringify(itemToSave), this.src));
                    this.updateDetails(itemToSave);
                },
                onError: (error) => {
                    console.error(error);
                    this.error = error;
                }
            });
        }
        else {
            var songDetails = JSON.parse(details);
            const picture = await transaction('readonly', store => store.get(songDetails.album + "_picture"));
            songDetails.picture = picture;
            this.updateDetails(songDetails);
        }
        this.loaded.emit({ el: this.element });
    }
    async details() {
        return {
            'title': this.title,
            'album': this.album,
            'genre': this.genre,
            'artist': this.artist,
            'picture': this.picture
        };
    }
    async preload() {
        var audio = new Audio();
        audio.src = this.src;
        audio.preload = "auto";
        audio.volume = 1;
    }
    async play() {
        if (!this.playing) {
            this.songChangedHandler();
            this.playing = true;
            this.player.prepare(this.element);
            this.player.play();
        }
    }
    async switching() {
        this.playing = false;
    }
    async getIndex() {
        return this._index;
    }
    async setIndex(value) {
        this._index = value;
    }
    render() {
        return (h("button", { onClick: () => this.play() },
            h("span", { class: "index" },
                !this.playing && leadingZeroIndex(this._index),
                this.playing && h("stellar-asset", { name: "play" })),
            h("div", { class: "tracklisting" },
                this.artwork && h("img", { src: this.picture, class: "preview-image" }),
                h("h2", null,
                    h("span", null, this.title || "Loading..."),
                    " / ",
                    this.artist || "Loading...")),
            h("img", { src: this.picture, class: "backdrop" })));
    }
    static get is() { return "stellar-song"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["song.css"]
    }; }
    static get styleUrls() { return {
        "$": ["song.css"]
    }; }
    static get assetsDirs() { return ["./vendor"]; }
    static get properties() { return {
        "src": {
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
            "attribute": "src",
            "reflect": false
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
            "reflect": true
        },
        "artwork": {
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
            "attribute": "artwork",
            "reflect": false
        }
    }; }
    static get states() { return {
        "_index": {},
        "player": {},
        "title": {},
        "album": {},
        "artist": {},
        "genre": {},
        "picture": {},
        "error": {}
    }; }
    static get events() { return [{
            "method": "songChanged",
            "name": "songChanged",
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
        }, {
            "method": "loaded",
            "name": "loaded",
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
        "load": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "SongInterface": {
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
        "details": {
            "complexType": {
                "signature": "() => Promise<{ 'title': string; 'album': string; 'genre': string; 'artist': string; 'picture': string; }>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<{ 'title': string; 'album': string; 'genre': string; 'artist': string; 'picture': string; }>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "preload": {
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
        "play": {
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
        "switching": {
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
        "getIndex": {
            "complexType": {
                "signature": "() => Promise<number>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<number>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "setIndex": {
            "complexType": {
                "signature": "(value: any) => Promise<void>",
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
        }
    }; }
    static get elementRef() { return "element"; }
}
