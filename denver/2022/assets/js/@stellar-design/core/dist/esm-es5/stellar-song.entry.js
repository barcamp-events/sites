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
import { r as relPathAsAbs, l as leadingZeroIndex } from './index-5afdd7fa.js';
import './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
(function (y) { "object" === typeof exports && "undefined" !== typeof module ? module.exports = y() : "function" === typeof define && define.amd ? define([], y) : ("undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : this).jsmediatags = y(); })(function () {
    return function f(p, q, m) {
        function l(c, a) {
            if (!q[c]) {
                if (!p[c]) {
                    var b = "function" == typeof require && require;
                    if (!a && b)
                        return b(c, !0);
                    if (e)
                        return e(c, !0);
                    a = Error("Cannot find module '" + c + "'");
                    throw a.code = "MODULE_NOT_FOUND", a;
                }
                a = q[c] =
                    { exports: {} };
                p[c][0].call(a.exports, function (a) { var b = p[c][1][a]; return l(b ? b : a); }, a, a.exports, f, p, q, m);
            }
            return q[c].exports;
        }
        for (var e = "function" == typeof require && require, d = 0; d < m.length; d++)
            l(m[d]);
        return l;
    }({ 1: [function (f, p, q) { }, {}], 2: [function (f, p, q) { p.exports = XMLHttpRequest; }, {}], 3: [function (f, p, q) {
                function m(e, d) {
                    if ("function" !== typeof d && null !== d)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof d);
                    e.prototype = Object.create(d && d.prototype, { constructor: { value: e,
                            enumerable: !1, writable: !0, configurable: !0 } });
                    d && (Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : e.__proto__ = d);
                }
                var l = function () { function e(d, c) { for (var a = 0; a < c.length; a++) {
                    var b = c[a];
                    b.enumerable = b.enumerable || !1;
                    b.configurable = !0;
                    "value" in b && (b.writable = !0);
                    Object.defineProperty(d, b.key, b);
                } } return function (d, c, a) { c && e(d.prototype, c); a && e(d, a); return d; }; }();
                f = function (e) {
                    function d(c) {
                        if (!(this instanceof d))
                            throw new TypeError("Cannot call a class as a function");
                        var a = (d.__proto__ || Object.getPrototypeOf(d)).call(this);
                        if (!this)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        a = !a || "object" !== typeof a && "function" !== typeof a ? this : a;
                        a._array = c;
                        a._size = c.length;
                        a._isInitialized = !0;
                        return a;
                    }
                    m(d, e);
                    l(d, [{ key: "init", value: function (c) { setTimeout(c.onSuccess, 0); } }, { key: "loadRange", value: function (c, a) { setTimeout(a.onSuccess, 0); } }, { key: "getByteAt", value: function (c) { if (c >= this._array.length)
                                throw Error("Offset " + c + " hasn't been loaded yet."); return this._array[c]; } }], [{ key: "canReadFile", value: function (c) {
                                return Array.isArray(c) ||
                                    "function" === typeof Buffer && Buffer.isBuffer(c);
                            } }]);
                    return d;
                }(f("./MediaFileReader"));
                p.exports = f;
            }, { "./MediaFileReader": 11 }], 4: [function (f, p, q) {
                function m(d, c) { if ("function" !== typeof c && null !== c)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof c); d.prototype = Object.create(c && c.prototype, { constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 } }); c && (Object.setPrototypeOf ? Object.setPrototypeOf(d, c) : d.__proto__ = c); }
                var l = function () {
                    function d(c, a) {
                        for (var b = 0; b < a.length; b++) {
                            var d = a[b];
                            d.enumerable = d.enumerable || !1;
                            d.configurable = !0;
                            "value" in d && (d.writable = !0);
                            Object.defineProperty(c, d.key, d);
                        }
                    }
                    return function (c, a, b) { a && d(c.prototype, a); b && d(c, b); return c; };
                }(), e = f("./ChunkedFileData");
                f = function (d) {
                    function c(a) {
                        if (!(this instanceof c))
                            throw new TypeError("Cannot call a class as a function");
                        var b = (c.__proto__ || Object.getPrototypeOf(c)).call(this);
                        if (!this)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        b = !b || "object" !==
                            typeof b && "function" !== typeof b ? this : b;
                        b._blob = a;
                        b._fileData = new e;
                        return b;
                    }
                    m(c, d);
                    l(c, [{ key: "_init", value: function (a) { this._size = this._blob.size; setTimeout(a.onSuccess, 1); } }, { key: "loadRange", value: function (a, b) {
                                var d = this, h = (this._blob.slice || this._blob.mozSlice || this._blob.webkitSlice).call(this._blob, a[0], a[1] + 1), c = new FileReader;
                                c.onloadend = function (h) { h = new Uint8Array(c.result); d._fileData.addData(a[0], h); b.onSuccess(); };
                                c.onerror = c.onabort = function (a) { if (b.onError)
                                    b.onError({ type: "blob", info: c.error }); };
                                c.readAsArrayBuffer(h);
                            } }, { key: "getByteAt", value: function (a) { return this._fileData.getByteAt(a); } }], [{ key: "canReadFile", value: function (a) { return "undefined" !== typeof Blob && a instanceof Blob || "undefined" !== typeof File && a instanceof File; } }]);
                    return c;
                }(f("./MediaFileReader"));
                p.exports = f;
            }, { "./ChunkedFileData": 5, "./MediaFileReader": 11 }], 5: [function (f, p, q) {
                var m = function () {
                    function f(e, d) {
                        for (var c = 0; c < d.length; c++) {
                            var a = d[c];
                            a.enumerable = a.enumerable || !1;
                            a.configurable = !0;
                            "value" in a && (a.writable = !0);
                            Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function (e, d, c) { d && f(e.prototype, d); c && f(e, c); return e; };
                }();
                f = function () {
                    function f() { if (!(this instanceof f))
                        throw new TypeError("Cannot call a class as a function"); this._fileData = []; }
                    m(f, null, [{ key: "NOT_FOUND", get: function () { return -1; } }]);
                    m(f, [{ key: "addData", value: function (e, d) {
                                var c = e + d.length - 1, a = this._getChunkRange(e, c);
                                if (-1 === a.startIx)
                                    this._fileData.splice(a.insertIx || 0, 0, { offset: e, data: d });
                                else {
                                    var b = this._fileData[a.startIx], g = this._fileData[a.endIx];
                                    c = c < g.offset + g.data.length -
                                        1;
                                    var h = { offset: Math.min(e, b.offset), data: d };
                                    e > b.offset && (e = this._sliceData(b.data, 0, e - b.offset), h.data = this._concatData(e, d));
                                    c && (e = this._sliceData(h.data, 0, g.offset - h.offset), h.data = this._concatData(e, g.data));
                                    this._fileData.splice(a.startIx, a.endIx - a.startIx + 1, h);
                                }
                            } }, { key: "_concatData", value: function (e, d) { if ("undefined" !== typeof ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(e)) {
                                var c = new e.constructor(e.length + d.length);
                                c.set(e, 0);
                                c.set(d, e.length);
                                return c;
                            } return e.concat(d); } }, { key: "_sliceData",
                            value: function (e, d, c) { return e.slice ? e.slice(d, c) : e.subarray(d, c); } }, { key: "_getChunkRange", value: function (e, d) { for (var c, a, b = -1, g = -1, h = 0, k = 0; k < this._fileData.length; k++, h = k) {
                                a = this._fileData[k].offset;
                                c = a + this._fileData[k].data.length;
                                if (d < a - 1)
                                    break;
                                if (e <= c + 1 && d >= a - 1) {
                                    b = k;
                                    break;
                                }
                            } if (-1 === b)
                                return { startIx: -1, endIx: -1, insertIx: h }; for (k = b; k < this._fileData.length && !(a = this._fileData[k].offset, c = a + this._fileData[k].data.length, d >= a - 1 && (g = k), d <= c + 1); k++)
                                ; -1 === g && (g = b); return { startIx: b, endIx: g }; } }, { key: "hasDataRange",
                            value: function (e, d) { for (var c = 0; c < this._fileData.length; c++) {
                                var a = this._fileData[c];
                                if (d < a.offset)
                                    break;
                                if (e >= a.offset && d < a.offset + a.data.length)
                                    return !0;
                            } return !1; } }, { key: "getByteAt", value: function (e) { for (var d, c = 0; c < this._fileData.length; c++) {
                                var a = this._fileData[c].offset, b = a + this._fileData[c].data.length - 1;
                                if (e >= a && e <= b) {
                                    d = this._fileData[c];
                                    break;
                                }
                            } if (d)
                                return d.data[e - d.offset]; throw Error("Offset " + e + " hasn't been loaded yet."); } }]);
                    return f;
                }();
                p.exports = f;
            }, {}], 6: [function (f, p, q) {
                function m(a, b) { if ("function" !== typeof b && null !== b)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }); b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b); }
                var l = function () {
                    function a(a, c) { for (var b = 0; b < c.length; b++) {
                        var d = c[b];
                        d.enumerable = d.enumerable || !1;
                        d.configurable = !0;
                        "value" in d && (d.writable = !0);
                        Object.defineProperty(a, d.key, d);
                    } }
                    return function (b, d, h) { d && a(b.prototype, d); h && a(b, h); return b; };
                }(), e = [4, 132], d = [6, 134], c = "Other;32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. label side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(";");
                f = function (a) {
                    function b() {
                        if (!(this instanceof
                            b))
                            throw new TypeError("Cannot call a class as a function");
                        var a = (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments);
                        if (!this)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !a || "object" !== typeof a && "function" !== typeof a ? this : a;
                    }
                    m(b, a);
                    l(b, [{ key: "_loadData", value: function (a, b) { var h = this; a.loadRange([4, 7], { onSuccess: function () { h._loadBlock(a, 4, b); } }); } }, { key: "_loadBlock", value: function (a, b, c) {
                                var h = this, g = a.getByteAt(b), k = a.getInteger24At(b + 1, !0);
                                if (-1 !== e.indexOf(g)) {
                                    var n = b + 4;
                                    a.loadRange([n, n + k], { onSuccess: function () { h._commentOffset = n; h._nextBlock(a, b, g, k, c); } });
                                }
                                else
                                    -1 !== d.indexOf(g) ? (n = b + 4, a.loadRange([n, n + k], { onSuccess: function () { h._pictureOffset = n; h._nextBlock(a, b, g, k, c); } })) : h._nextBlock(a, b, g, k, c);
                            } }, { key: "_nextBlock", value: function (a, b, d, c, e) {
                                var h = this;
                                if (127 < d)
                                    if (h._commentOffset)
                                        e.onSuccess();
                                    else
                                        e.onError({ type: "loadData", info: "Comment block could not be found." });
                                else
                                    a.loadRange([b + 4 + c, b + 4 + 4 + c], { onSuccess: function () {
                                            h._loadBlock(a, b + 4 + c, e);
                                        } });
                            } }, { key: "_parseData", value: function (a, b) {
                                var h = a.getLongAt(this._commentOffset, !1) + (this._commentOffset + 4);
                                b = a.getLongAt(h, !1);
                                h += 4;
                                for (var d, g, e, n, x, f, t = 0; t < b; t++) {
                                    var w = a.getLongAt(h, !1), l = a.getStringWithCharsetAt(h + 4, w, "utf-8").toString(), m = l.indexOf("=");
                                    l = [l.slice(0, m), l.slice(m + 1)];
                                    switch (l[0]) {
                                        case "TITLE":
                                            d = l[1];
                                            break;
                                        case "ARTIST":
                                            g = l[1];
                                            break;
                                        case "ALBUM":
                                            e = l[1];
                                            break;
                                        case "TRACKNUMBER":
                                            n = l[1];
                                            break;
                                        case "GENRE": x = l[1];
                                    }
                                    h += 4 + w;
                                }
                                this._pictureOffset && (f = a.getLongAt(this._pictureOffset, !0), b = this._pictureOffset + 4, h = a.getLongAt(b, !0), t = b + 4, b = a.getStringAt(t, h), h = t + h, t = a.getLongAt(h, !0), w = h + 4, h = a.getStringWithCharsetAt(w, t, "utf-8").toString(), t = w + t + 16, w = a.getLongAt(t, !0), a = a.getBytesAt(t + 4, w, !0), f = { format: b, type: c[f], description: h, data: a });
                                return { type: "FLAC", version: "1", tags: { title: d, artist: g, album: e, track: n, genre: x, picture: f } };
                            } }], [{ key: "getTagIdentifierByteRange", value: function () { return { offset: 0, length: 4 }; } }, { key: "canReadTagFormat", value: function (a) {
                                return "fLaC" === String.fromCharCode.apply(String, a.slice(0, 4));
                            } }]);
                    return b;
                }(f("./MediaTagReader"));
                p.exports = f;
            }, { "./MediaTagReader": 12 }], 7: [function (f, p, q) {
                function m(d, c) { if ("function" !== typeof c && null !== c)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof c); d.prototype = Object.create(c && c.prototype, { constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 } }); c && (Object.setPrototypeOf ? Object.setPrototypeOf(d, c) : d.__proto__ = c); }
                var l = function () {
                    function d(d, a) {
                        for (var b = 0; b < a.length; b++) {
                            var c = a[b];
                            c.enumerable =
                                c.enumerable || !1;
                            c.configurable = !0;
                            "value" in c && (c.writable = !0);
                            Object.defineProperty(d, c.key, c);
                        }
                    }
                    return function (c, a, b) { a && d(c.prototype, a); b && d(c, b); return c; };
                }();
                q = f("./MediaTagReader");
                f("./MediaFileReader");
                f = function (d) {
                    function c() {
                        if (!(this instanceof c))
                            throw new TypeError("Cannot call a class as a function");
                        var a = (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments);
                        if (!this)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !a || "object" !==
                            typeof a && "function" !== typeof a ? this : a;
                    }
                    m(c, d);
                    l(c, [{ key: "_loadData", value: function (a, b) { var d = a.getSize(); a.loadRange([d - 128, d - 1], b); } }, { key: "_parseData", value: function (a, b) {
                                var d = a.getSize() - 128, h = a.getStringWithCharsetAt(d + 3, 30).toString(), c = a.getStringWithCharsetAt(d + 33, 30).toString(), r = a.getStringWithCharsetAt(d + 63, 30).toString(), u = a.getStringWithCharsetAt(d + 93, 4).toString();
                                var f = a.getByteAt(d + 97 + 28);
                                b = a.getByteAt(d + 97 + 29);
                                if (0 == f && 0 != b) {
                                    var n = "1.1";
                                    f = a.getStringWithCharsetAt(d + 97, 28).toString();
                                }
                                else
                                    n =
                                        "1.0", f = a.getStringWithCharsetAt(d + 97, 30).toString(), b = 0;
                                a = a.getByteAt(d + 97 + 30);
                                a = { type: "ID3", version: n, tags: { title: h, artist: c, album: r, year: u, comment: f, genre: 255 > a ? e[a] : "" } };
                                b && (a.tags.track = b);
                                return a;
                            } }], [{ key: "getTagIdentifierByteRange", value: function () { return { offset: -128, length: 128 }; } }, { key: "canReadTagFormat", value: function (a) { return "TAG" === String.fromCharCode.apply(String, a.slice(0, 3)); } }]);
                    return c;
                }(q);
                var e = "Blues;Classic Rock;Country;Dance;Disco;Funk;Grunge;Hip-Hop;Jazz;Metal;New Age;Oldies;Other;Pop;R&B;Rap;Reggae;Rock;Techno;Industrial;Alternative;Ska;Death Metal;Pranks;Soundtrack;Euro-Techno;Ambient;Trip-Hop;Vocal;Jazz+Funk;Fusion;Trance;Classical;Instrumental;Acid;House;Game;Sound Clip;Gospel;Noise;AlternRock;Bass;Soul;Punk;Space;Meditative;Instrumental Pop;Instrumental Rock;Ethnic;Gothic;Darkwave;Techno-Industrial;Electronic;Pop-Folk;Eurodance;Dream;Southern Rock;Comedy;Cult;Gangsta;Top 40;Christian Rap;Pop/Funk;Jungle;Native American;Cabaret;New Wave;Psychadelic;Rave;Showtunes;Trailer;Lo-Fi;Tribal;Acid Punk;Acid Jazz;Polka;Retro;Musical;Rock & Roll;Hard Rock;Folk;Folk-Rock;National Folk;Swing;Fast Fusion;Bebob;Latin;Revival;Celtic;Bluegrass;Avantgarde;Gothic Rock;Progressive Rock;Psychedelic Rock;Symphonic Rock;Slow Rock;Big Band;Chorus;Easy Listening;Acoustic;Humour;Speech;Chanson;Opera;Chamber Music;Sonata;Symphony;Booty Bass;Primus;Porn Groove;Satire;Slow Jam;Club;Tango;Samba;Folklore;Ballad;Power Ballad;Rhythmic Soul;Freestyle;Duet;Punk Rock;Drum Solo;Acapella;Euro-House;Dance Hall".split(";");
                p.exports = f;
            }, { "./MediaFileReader": 11, "./MediaTagReader": 12 }], 8: [function (f, p, q) {
                function m(a) { switch (a) {
                    case 0:
                        a = "iso-8859-1";
                        break;
                    case 1:
                        a = "utf-16";
                        break;
                    case 2:
                        a = "utf-16be";
                        break;
                    case 3:
                        a = "utf-8";
                        break;
                    default: a = "iso-8859-1";
                } return a; }
                function l(a, b, d, c) { c = d.getStringWithCharsetAt(a + 1, b - 1, c); a = d.getStringWithCharsetAt(a + 1 + c.bytesReadCount, b - 1 - c.bytesReadCount); return { user_description: c.toString(), data: a.toString() }; }
                var e = function () {
                    function a(a, b) {
                        for (var d = 0; d < b.length; d++) {
                            var c = b[d];
                            c.enumerable =
                                c.enumerable || !1;
                            c.configurable = !0;
                            "value" in c && (c.writable = !0);
                            Object.defineProperty(a, c.key, c);
                        }
                    }
                    return function (b, d, c) { d && a(b.prototype, d); c && a(b, c); return b; };
                }();
                f("./MediaFileReader");
                var d = f("./StringUtils"), c = f("./ArrayFileReader"), a = { BUF: "Recommended buffer size", CNT: "Play counter", COM: "Comments", CRA: "Audio encryption", CRM: "Encrypted meta frame", ETC: "Event timing codes", EQU: "Equalization", GEO: "General encapsulated object", IPL: "Involved people list", LNK: "Linked information", MCI: "Music CD Identifier",
                    MLL: "MPEG location lookup table", PIC: "Attached picture", POP: "Popularimeter", REV: "Reverb", RVA: "Relative volume adjustment", SLT: "Synchronized lyric/text", STC: "Synced tempo codes", TAL: "Album/Movie/Show title", TBP: "BPM (Beats Per Minute)", TCM: "Composer", TCO: "Content type", TCR: "Copyright message", TDA: "Date", TDY: "Playlist delay", TEN: "Encoded by", TFT: "File type", TIM: "Time", TKE: "Initial key", TLA: "Language(s)", TLE: "Length", TMT: "Media type", TOA: "Original artist(s)/performer(s)", TOF: "Original filename", TOL: "Original Lyricist(s)/text writer(s)",
                    TOR: "Original release year", TOT: "Original album/Movie/Show title", TP1: "Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group", TP2: "Band/Orchestra/Accompaniment", TP3: "Conductor/Performer refinement", TP4: "Interpreted, remixed, or otherwise modified by", TPA: "Part of a set", TPB: "Publisher", TRC: "ISRC (International Standard Recording Code)", TRD: "Recording dates", TRK: "Track number/Position in set", TSI: "Size", TSS: "Software/hardware and settings used for encoding", TT1: "Content group description", TT2: "Title/Songname/Content description",
                    TT3: "Subtitle/Description refinement", TXT: "Lyricist/text writer", TXX: "User defined text information frame", TYE: "Year", UFI: "Unique file identifier", ULT: "Unsychronized lyric/text transcription", WAF: "Official audio file webpage", WAR: "Official artist/performer webpage", WAS: "Official audio source webpage", WCM: "Commercial information", WCP: "Copyright/Legal information", WPB: "Publishers official webpage", WXX: "User defined URL link frame", AENC: "Audio encryption", APIC: "Attached picture", ASPI: "Audio seek point index",
                    CHAP: "Chapter", CTOC: "Table of contents", COMM: "Comments", COMR: "Commercial frame", ENCR: "Encryption method registration", EQU2: "Equalisation (2)", EQUA: "Equalization", ETCO: "Event timing codes", GEOB: "General encapsulated object", GRID: "Group identification registration", IPLS: "Involved people list", LINK: "Linked information", MCDI: "Music CD identifier", MLLT: "MPEG location lookup table", OWNE: "Ownership frame", PRIV: "Private frame", PCNT: "Play counter", POPM: "Popularimeter", POSS: "Position synchronisation frame",
                    RBUF: "Recommended buffer size", RVA2: "Relative volume adjustment (2)", RVAD: "Relative volume adjustment", RVRB: "Reverb", SEEK: "Seek frame", SYLT: "Synchronized lyric/text", SYTC: "Synchronized tempo codes", TALB: "Album/Movie/Show title", TBPM: "BPM (beats per minute)", TCOM: "Composer", TCON: "Content type", TCOP: "Copyright message", TDAT: "Date", TDLY: "Playlist delay", TDRC: "Recording time", TDRL: "Release time", TDTG: "Tagging time", TENC: "Encoded by", TEXT: "Lyricist/Text writer", TFLT: "File type", TIME: "Time", TIPL: "Involved people list",
                    TIT1: "Content group description", TIT2: "Title/songname/content description", TIT3: "Subtitle/Description refinement", TKEY: "Initial key", TLAN: "Language(s)", TLEN: "Length", TMCL: "Musician credits list", TMED: "Media type", TMOO: "Mood", TOAL: "Original album/movie/show title", TOFN: "Original filename", TOLY: "Original lyricist(s)/text writer(s)", TOPE: "Original artist(s)/performer(s)", TORY: "Original release year", TOWN: "File owner/licensee", TPE1: "Lead performer(s)/Soloist(s)", TPE2: "Band/orchestra/accompaniment", TPE3: "Conductor/performer refinement",
                    TPE4: "Interpreted, remixed, or otherwise modified by", TPOS: "Part of a set", TPRO: "Produced notice", TPUB: "Publisher", TRCK: "Track number/Position in set", TRDA: "Recording dates", TRSN: "Internet radio station name", TRSO: "Internet radio station owner", TSOA: "Album sort order", TSOP: "Performer sort order", TSOT: "Title sort order", TSIZ: "Size", TSRC: "ISRC (international standard recording code)", TSSE: "Software/Hardware and settings used for encoding", TSST: "Set subtitle", TYER: "Year", TXXX: "User defined text information frame",
                    UFID: "Unique file identifier", USER: "Terms of use", USLT: "Unsychronized lyric/text transcription", WCOM: "Commercial information", WCOP: "Copyright/Legal information", WOAF: "Official audio file webpage", WOAR: "Official artist/performer webpage", WOAS: "Official audio source webpage", WORS: "Official internet radio station homepage", WPAY: "Payment", WPUB: "Publishers official webpage", WXXX: "User defined URL link frame" };
                f = function () {
                    function d() {
                        if (!(this instanceof d))
                            throw new TypeError("Cannot call a class as a function");
                    }
                    e(d, null, [{ key: "getFrameReaderFunction", value: function (a) { return a in b ? b[a] : "T" === a[0] ? b["T*"] : "W" === a[0] ? b["W*"] : null; } }, { key: "readFrames", value: function (a, b, c, h, g) {
                                for (var k = {}, e = this._getFrameHeaderSize(h); a < b - e;) {
                                    var r = this._readFrameHeader(c, a, h), n = r.id;
                                    if (!n)
                                        break;
                                    var f = r.flags, u = r.size, v = a + r.headerSize, l = c;
                                    a += r.headerSize + r.size;
                                    if (!g || -1 !== g.indexOf(n)) {
                                        if ("MP3e" === n || "\x00MP3" === n || "\x00\x00MP" === n || " MP3" === n)
                                            break;
                                        f && f.format.unsynchronisation && (l = this.getUnsyncFileReader(l, v, u), v = 0, u =
                                            l.getSize());
                                        f && f.format.data_length_indicator && (v += 4, u -= 4);
                                        f = (r = d.getFrameReaderFunction(n)) ? r.apply(this, [v, u, l, f, h]) : null;
                                        v = this._getFrameDescription(n);
                                        u = { id: n, size: u, description: v, data: f };
                                        n in k ? (k[n].id && (k[n] = [k[n]]), k[n].push(u)) : k[n] = u;
                                    }
                                }
                                return k;
                            } }, { key: "_getFrameHeaderSize", value: function (a) { a = a.major; return 2 == a ? 6 : 3 == a || 4 == a ? 10 : 0; } }, { key: "_readFrameHeader", value: function (a, b, d) {
                                var c = d.major, h = null;
                                d = this._getFrameHeaderSize(d);
                                switch (c) {
                                    case 2:
                                        var g = a.getStringAt(b, 3);
                                        var k = a.getInteger24At(b +
                                            3, !0);
                                        break;
                                    case 3:
                                        g = a.getStringAt(b, 4);
                                        k = a.getLongAt(b + 4, !0);
                                        break;
                                    case 4: g = a.getStringAt(b, 4), k = a.getSynchsafeInteger32At(b + 4);
                                }
                                if (g == String.fromCharCode(0, 0, 0) || g == String.fromCharCode(0, 0, 0, 0))
                                    g = "";
                                g && 2 < c && (h = this._readFrameFlags(a, b + 8));
                                return { id: g || "", size: k || 0, headerSize: d || 0, flags: h };
                            } }, { key: "_readFrameFlags", value: function (a, b) {
                                return { message: { tag_alter_preservation: a.isBitSetAt(b, 6), file_alter_preservation: a.isBitSetAt(b, 5), read_only: a.isBitSetAt(b, 4) }, format: { grouping_identity: a.isBitSetAt(b +
                                            1, 7), compression: a.isBitSetAt(b + 1, 3), encryption: a.isBitSetAt(b + 1, 2), unsynchronisation: a.isBitSetAt(b + 1, 1), data_length_indicator: a.isBitSetAt(b + 1, 0) } };
                            } }, { key: "_getFrameDescription", value: function (b) { return b in a ? a[b] : "Unknown"; } }, { key: "getUnsyncFileReader", value: function (a, b, d) { a = a.getBytesAt(b, d); for (b = 0; b < a.length - 1; b++)
                                255 === a[b] && 0 === a[b + 1] && a.splice(b + 1, 1); return new c(a); } }]);
                    return d;
                }();
                var b = { APIC: function (a, b, d, c, e) {
                        c = a;
                        var h = m(d.getByteAt(a));
                        switch (e && e.major) {
                            case 2:
                                e = d.getStringAt(a + 1, 3);
                                a += 4;
                                break;
                            case 3:
                            case 4:
                                e = d.getStringWithCharsetAt(a + 1, b - 1);
                                a += 1 + e.bytesReadCount;
                                break;
                            default: throw Error("Couldn't read ID3v2 major version.");
                        }
                        var k = d.getByteAt(a);
                        k = g[k];
                        h = d.getStringWithCharsetAt(a + 1, b - (a - c) - 1, h);
                        a += 1 + h.bytesReadCount;
                        return { format: e.toString(), type: k, description: h.toString(), data: d.getBytesAt(a, c + b - a) };
                    }, CHAP: function (a, b, c, g, e) {
                        g = a;
                        var h = {}, k = d.readNullTerminatedString(c.getBytesAt(a, b));
                        h.id = k.toString();
                        a += k.bytesReadCount;
                        h.startTime = c.getLongAt(a, !0);
                        a += 4;
                        h.endTime =
                            c.getLongAt(a, !0);
                        a += 4;
                        h.startOffset = c.getLongAt(a, !0);
                        a += 4;
                        h.endOffset = c.getLongAt(a, !0);
                        a += 4;
                        h.subFrames = this.readFrames(a, a + (b - (a - g)), c, e);
                        return h;
                    }, CTOC: function (a, b, c, g, e) {
                        g = a;
                        var h = { childElementIds: [], id: void 0, topLevel: void 0, ordered: void 0, entryCount: void 0, subFrames: void 0 }, k = d.readNullTerminatedString(c.getBytesAt(a, b));
                        h.id = k.toString();
                        a += k.bytesReadCount;
                        h.topLevel = c.isBitSetAt(a, 1);
                        h.ordered = c.isBitSetAt(a, 0);
                        a++;
                        h.entryCount = c.getByteAt(a);
                        a++;
                        for (k = 0; k < h.entryCount; k++) {
                            var f = d.readNullTerminatedString(c.getBytesAt(a, b - (a - g)));
                            h.childElementIds.push(f.toString());
                            a += f.bytesReadCount;
                        }
                        h.subFrames = this.readFrames(a, a + (b - (a - g)), c, e);
                        return h;
                    }, COMM: function (a, b, c, d, g) { var h = a, e = m(c.getByteAt(a)); d = c.getStringAt(a + 1, 3); g = c.getStringWithCharsetAt(a + 4, b - 4, e); a += 4 + g.bytesReadCount; a = c.getStringWithCharsetAt(a, h + b - a, e); return { language: d, short_description: g.toString(), text: a.toString() }; } };
                b.COM = b.COMM;
                b.PIC = function (a, c, d, g, e) { return b.APIC(a, c, d, g, e); };
                b.PCNT = function (a, b, c, d, g) { return c.getLongAt(a, !1); };
                b.CNT = b.PCNT;
                b["T*"] =
                    function (a, b, c, d, g) { d = m(c.getByteAt(a)); return c.getStringWithCharsetAt(a + 1, b - 1, d).toString(); };
                b.TXXX = function (a, b, c, d, g) { d = m(c.getByteAt(a)); return l(a, b, c, d); };
                b.WXXX = function (a, b, c, d, g) { if (0 === b)
                    return null; d = m(c.getByteAt(a)); return l(a, b, c, d); };
                b["W*"] = function (a, b, c, d, g) { return 0 === b ? null : c.getStringWithCharsetAt(a, b, "iso-8859-1").toString(); };
                b.TCON = function (a, c, d, g) { return b["T*"].apply(this, arguments).replace(/^\(\d+\)/, ""); };
                b.TCO = b.TCON;
                b.USLT = function (a, b, c, d, g) {
                    var h = a, e = m(c.getByteAt(a));
                    d = c.getStringAt(a + 1, 3);
                    g = c.getStringWithCharsetAt(a + 4, b - 4, e);
                    a += 4 + g.bytesReadCount;
                    a = c.getStringWithCharsetAt(a, h + b - a, e);
                    return { language: d, descriptor: g.toString(), lyrics: a.toString() };
                };
                b.ULT = b.USLT;
                b.UFID = function (a, b, c, g, e) { g = d.readNullTerminatedString(c.getBytesAt(a, b)); a += g.bytesReadCount; a = c.getBytesAt(a, b - g.bytesReadCount); return { ownerIdentifier: g.toString(), identifier: a }; };
                var g = "Other;32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. label side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(";");
                p.exports = f;
            }, { "./ArrayFileReader": 3, "./MediaFileReader": 11, "./StringUtils": 13 }], 9: [function (f, p, q) {
                function m(c, a) { if ("function" !== typeof a && null !== a)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof a); c.prototype = Object.create(a && a.prototype, { constructor: { value: c, enumerable: !1, writable: !0, configurable: !0 } }); a && (Object.setPrototypeOf ? Object.setPrototypeOf(c, a) : c.__proto__ = a); }
                var l = function () {
                    function c(a, b) {
                        for (var c = 0; c < b.length; c++) {
                            var d = b[c];
                            d.enumerable = d.enumerable ||
                                !1;
                            d.configurable = !0;
                            "value" in d && (d.writable = !0);
                            Object.defineProperty(a, d.key, d);
                        }
                    }
                    return function (a, b, d) { b && c(a.prototype, b); d && c(a, d); return a; };
                }();
                q = f("./MediaTagReader");
                f("./MediaFileReader");
                var e = f("./ID3v2FrameReader");
                f = function (c) {
                    function a() {
                        if (!(this instanceof a))
                            throw new TypeError("Cannot call a class as a function");
                        var b = (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments);
                        if (!this)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !b ||
                            "object" !== typeof b && "function" !== typeof b ? this : b;
                    }
                    m(a, c);
                    l(a, [{ key: "_loadData", value: function (a, c) { a.loadRange([6, 9], { onSuccess: function () { a.loadRange([0, 10 + a.getSynchsafeInteger32At(6) - 1], c); }, onError: c.onError }); } }, { key: "_parseData", value: function (a, c) {
                                var b, g = 0, f = a.getByteAt(g + 3);
                                if (4 < f)
                                    return { type: "ID3", version: ">2.4", tags: {} };
                                var l = a.getByteAt(g + 4), m = a.isBitSetAt(g + 5, 7), n = a.isBitSetAt(g + 5, 6), x = a.isBitSetAt(g + 5, 5), p = a.getSynchsafeInteger32At(g + 6);
                                g += 10;
                                if (n)
                                    if (4 === f) {
                                        var t = a.getSynchsafeInteger32At(g);
                                        g += t;
                                    }
                                    else
                                        t = a.getLongAt(g, !0), g += t + 4;
                                t = { type: "ID3", version: "2." + f + "." + l, major: f, revision: l, flags: { unsynchronisation: m, extended_header: n, experimental_indicator: x, footer_present: !1 }, size: p, tags: {} };
                                c && (b = this._expandShortcutTags(c));
                                c = p + 10;
                                t.flags.unsynchronisation && (a = e.getUnsyncFileReader(a, g, p), g = 0, c = a.getSize());
                                a = e.readFrames(g, c, a, t, b);
                                for (var q in d)
                                    d.hasOwnProperty(q) && (b = this._getFrameData(a, d[q])) && (t.tags[q] = b);
                                for (var z in a)
                                    a.hasOwnProperty(z) && (t.tags[z] = a[z]);
                                return t;
                            } }, { key: "_getFrameData",
                            value: function (a, c) { for (var b = 0, d; d = c[b]; b++)
                                if (d in a)
                                    return a = a[d] instanceof Array ? a[d][0] : a[d], a.data; } }, { key: "getShortcuts", value: function () { return d; } }], [{ key: "getTagIdentifierByteRange", value: function () { return { offset: 0, length: 10 }; } }, { key: "canReadTagFormat", value: function (a) { return "ID3" === String.fromCharCode.apply(String, a.slice(0, 3)); } }]);
                    return a;
                }(q);
                var d = { title: ["TIT2", "TT2"], artist: ["TPE1", "TP1"], album: ["TALB", "TAL"], year: ["TYER", "TYE"], comment: ["COMM", "COM"], track: ["TRCK", "TRK"], genre: ["TCON",
                        "TCO"], picture: ["APIC", "PIC"], lyrics: ["USLT", "ULT"] };
                p.exports = f;
            }, { "./ID3v2FrameReader": 8, "./MediaFileReader": 11, "./MediaTagReader": 12 }], 10: [function (f, p, q) {
                function m(a, b) { if ("function" !== typeof b && null !== b)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }); b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b); }
                var l = function () {
                    function a(a, c) { for (var b = 0; b < c.length; b++) {
                        var d = c[b];
                        d.enumerable = d.enumerable || !1;
                        d.configurable = !0;
                        "value" in d && (d.writable = !0);
                        Object.defineProperty(a, d.key, d);
                    } }
                    return function (b, c, d) { c && a(b.prototype, c); d && a(b, d); return b; };
                }();
                q = f("./MediaTagReader");
                f("./MediaFileReader");
                f = function (a) {
                    function b() {
                        if (!(this instanceof b))
                            throw new TypeError("Cannot call a class as a function");
                        var a = (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments);
                        if (!this)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !a || "object" !== typeof a && "function" !== typeof a ? this : a;
                    }
                    m(b, a);
                    l(b, [{ key: "_loadData", value: function (a, b) { var c = this; a.loadRange([0, 16], { onSuccess: function () { c._loadAtom(a, 0, "", b); }, onError: b.onError }); } }, { key: "_loadAtom", value: function (a, b, c, d) {
                                if (b >= a.getSize())
                                    d.onSuccess();
                                else {
                                    var g = this, e = a.getLongAt(b, !0);
                                    if (0 == e || isNaN(e))
                                        d.onSuccess();
                                    else {
                                        var h = a.getStringAt(b + 4, 4);
                                        if (this._isContainerAtom(h)) {
                                            "meta" == h && (b += 4);
                                            var f = (c ? c + "." : "") + h;
                                            "moov.udta.meta.ilst" === f ? a.loadRange([b, b + e], d) : a.loadRange([b +
                                                    8, b + 8 + 8], { onSuccess: function () { g._loadAtom(a, b + 8, f, d); }, onError: d.onError });
                                        }
                                        else
                                            a.loadRange([b + e, b + e + 8], { onSuccess: function () { g._loadAtom(a, b + e, c, d); }, onError: d.onError });
                                    }
                                }
                            } }, { key: "_isContainerAtom", value: function (a) { return 0 <= ["moov", "udta", "meta", "ilst"].indexOf(a); } }, { key: "_canReadAtom", value: function (a) { return "----" !== a; } }, { key: "_parseData", value: function (a, b) {
                                var d = {};
                                b = this._expandShortcutTags(b);
                                this._readAtom(d, a, 0, a.getSize(), b);
                                for (var e in c)
                                    c.hasOwnProperty(e) && (b = d[c[e]]) && (d[e] = "track" ===
                                        e ? b.data.track : b.data);
                                return { type: "MP4", ftyp: a.getStringAt(8, 4), version: a.getLongAt(12, !0), tags: d };
                            } }, { key: "_readAtom", value: function (a, b, d, c, e, f, n) { n = void 0 === n ? "" : n + "  "; for (var g = d; g < d + c;) {
                                var h = b.getLongAt(g, !0);
                                if (0 == h)
                                    break;
                                var k = b.getStringAt(g + 4, 4);
                                if (this._isContainerAtom(k)) {
                                    "meta" == k && (g += 4);
                                    this._readAtom(a, b, g + 8, h - 8, e, (f ? f + "." : "") + k, n);
                                    break;
                                }
                                (!e || 0 <= e.indexOf(k)) && "moov.udta.meta.ilst" === f && this._canReadAtom(k) && (a[k] = this._readMetadataAtom(b, g));
                                g += h;
                            } } }, { key: "_readMetadataAtom", value: function (a, b) {
                                var c = a.getLongAt(b, !0), g = a.getStringAt(b + 4, 4), h = a.getInteger24At(b + 16 + 1, !0);
                                h = e[h];
                                if ("trkn" == g)
                                    var f = { track: a.getByteAt(b + 16 + 11), total: a.getByteAt(b + 16 + 13) };
                                else if ("disk" == g)
                                    f = { disk: a.getByteAt(b + 16 + 11), total: a.getByteAt(b + 16 + 13) };
                                else {
                                    b += 24;
                                    var n = c - 24;
                                    "covr" === g && "uint8" === h && (h = "jpeg");
                                    switch (h) {
                                        case "text":
                                            f = a.getStringWithCharsetAt(b, n, "utf-8").toString();
                                            break;
                                        case "uint8":
                                            f = a.getShortAt(b, !1);
                                            break;
                                        case "int":
                                        case "uint":
                                            f = ("int" == h ? 1 == n ? a.getSByteAt : 2 == n ? a.getSShortAt : 4 == n ? a.getSLongAt :
                                                a.getLongAt : 1 == n ? a.getByteAt : 2 == n ? a.getShortAt : a.getLongAt).call(a, b + (8 == n ? 4 : 0), !0);
                                            break;
                                        case "jpeg":
                                        case "png": f = { format: "image/" + h, data: a.getBytesAt(b, n) };
                                    }
                                }
                                return { id: g, size: c, description: d[g] || "Unknown", data: f };
                            } }, { key: "getShortcuts", value: function () { return c; } }], [{ key: "getTagIdentifierByteRange", value: function () { return { offset: 0, length: 16 }; } }, { key: "canReadTagFormat", value: function (a) { return "ftyp" === String.fromCharCode.apply(String, a.slice(4, 8)); } }]);
                    return b;
                }(q);
                var e = { 0: "uint8", 1: "text", 13: "jpeg",
                    14: "png", 21: "int", 22: "uint" }, d = { "\u00a9alb": "Album", "\u00a9ART": "Artist", aART: "Album Artist", "\u00a9day": "Release Date", "\u00a9nam": "Title", "\u00a9gen": "Genre", gnre: "Genre", trkn: "Track Number", "\u00a9wrt": "Composer", "\u00a9too": "Encoding Tool", "\u00a9enc": "Encoded By", cprt: "Copyright", covr: "Cover Art", "\u00a9grp": "Grouping", keyw: "Keywords", "\u00a9lyr": "Lyrics", "\u00a9cmt": "Comment", tmpo: "Tempo", cpil: "Compilation", disk: "Disc Number", tvsh: "TV Show Name", tven: "TV Episode ID", tvsn: "TV Season", tves: "TV Episode",
                    tvnn: "TV Network", desc: "Description", ldes: "Long Description", sonm: "Sort Name", soar: "Sort Artist", soaa: "Sort Album", soco: "Sort Composer", sosn: "Sort Show", purd: "Purchase Date", pcst: "Podcast", purl: "Podcast URL", catg: "Category", hdvd: "HD Video", stik: "Media Type", rtng: "Content Rating", pgap: "Gapless Playback", apID: "Purchase Account", sfID: "Country Code", atID: "Artist ID", cnID: "Catalog ID", plID: "Collection ID", geID: "Genre ID", "xid ": "Vendor Information", flvr: "Codec Flavor" }, c = { title: "\u00a9nam", artist: "\u00a9ART",
                    album: "\u00a9alb", year: "\u00a9day", comment: "\u00a9cmt", track: "trkn", genre: "\u00a9gen", picture: "covr", lyrics: "\u00a9lyr" };
                p.exports = f;
            }, { "./MediaFileReader": 11, "./MediaTagReader": 12 }], 11: [function (f, p, q) {
                var m = function () { function e(d, c) { for (var a = 0; a < c.length; a++) {
                    var b = c[a];
                    b.enumerable = b.enumerable || !1;
                    b.configurable = !0;
                    "value" in b && (b.writable = !0);
                    Object.defineProperty(d, b.key, b);
                } } return function (d, c, a) { c && e(d.prototype, c); a && e(d, a); return d; }; }(), l = f("./StringUtils");
                f = function () {
                    function e(d) {
                        if (!(this instanceof
                            e))
                            throw new TypeError("Cannot call a class as a function");
                        this._isInitialized = !1;
                        this._size = 0;
                    }
                    m(e, [{ key: "init", value: function (d) { var c = this; if (this._isInitialized)
                                setTimeout(d.onSuccess, 1);
                            else
                                return this._init({ onSuccess: function () { c._isInitialized = !0; d.onSuccess(); }, onError: d.onError }); } }, { key: "_init", value: function (d) { throw Error("Must implement init function"); } }, { key: "loadRange", value: function (d, c) { throw Error("Must implement loadRange function"); } }, { key: "getSize", value: function () {
                                if (!this._isInitialized)
                                    throw Error("init() must be called first.");
                                return this._size;
                            } }, { key: "getByteAt", value: function (d) { throw Error("Must implement getByteAt function"); } }, { key: "getBytesAt", value: function (d, c) { for (var a = Array(c), b = 0; b < c; b++)
                                a[b] = this.getByteAt(d + b); return a; } }, { key: "isBitSetAt", value: function (d, c) { return 0 != (this.getByteAt(d) & 1 << c); } }, { key: "getSByteAt", value: function (d) { d = this.getByteAt(d); return 127 < d ? d - 256 : d; } }, { key: "getShortAt", value: function (d, c) {
                                d = c ? (this.getByteAt(d) << 8) + this.getByteAt(d + 1) : (this.getByteAt(d + 1) << 8) + this.getByteAt(d);
                                0 > d && (d +=
                                    65536);
                                return d;
                            } }, { key: "getSShortAt", value: function (d, c) { d = this.getShortAt(d, c); return 32767 < d ? d - 65536 : d; } }, { key: "getLongAt", value: function (d, c) { var a = this.getByteAt(d), b = this.getByteAt(d + 1), e = this.getByteAt(d + 2); d = this.getByteAt(d + 3); c = c ? (((a << 8) + b << 8) + e << 8) + d : (((d << 8) + e << 8) + b << 8) + a; 0 > c && (c += 4294967296); return c; } }, { key: "getSLongAt", value: function (d, c) { d = this.getLongAt(d, c); return 2147483647 < d ? d - 4294967296 : d; } }, { key: "getInteger24At", value: function (d, c) {
                                var a = this.getByteAt(d), b = this.getByteAt(d + 1);
                                d = this.getByteAt(d + 2);
                                c = c ? ((a << 8) + b << 8) + d : ((d << 8) + b << 8) + a;
                                0 > c && (c += 16777216);
                                return c;
                            } }, { key: "getStringAt", value: function (d, c) { for (var a = [], b = d, e = 0; b < d + c; b++, e++)
                                a[e] = String.fromCharCode(this.getByteAt(b)); return a.join(""); } }, { key: "getStringWithCharsetAt", value: function (d, c, a) { d = this.getBytesAt(d, c); switch ((a || "").toLowerCase()) {
                                case "utf-16":
                                case "utf-16le":
                                case "utf-16be":
                                    a = l.readUTF16String(d, "utf-16be" === a);
                                    break;
                                case "utf-8":
                                    a = l.readUTF8String(d);
                                    break;
                                default: a = l.readNullTerminatedString(d);
                            } return a; } },
                        { key: "getCharAt", value: function (d) { return String.fromCharCode(this.getByteAt(d)); } }, { key: "getSynchsafeInteger32At", value: function (d) { var c = this.getByteAt(d), a = this.getByteAt(d + 1), b = this.getByteAt(d + 2); return this.getByteAt(d + 3) & 127 | (b & 127) << 7 | (a & 127) << 14 | (c & 127) << 21; } }], [{ key: "canReadFile", value: function (d) { throw Error("Must implement canReadFile function"); } }]);
                    return e;
                }();
                p.exports = f;
            }, { "./StringUtils": 13 }], 12: [function (f, p, q) {
                var m = function () {
                    function f(e, d) {
                        for (var c = 0; c < d.length; c++) {
                            var a = d[c];
                            a.enumerable = a.enumerable || !1;
                            a.configurable = !0;
                            "value" in a && (a.writable = !0);
                            Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function (e, d, c) { d && f(e.prototype, d); c && f(e, c); return e; };
                }();
                f("./MediaFileReader");
                f = function () {
                    function f(e) { if (!(this instanceof f))
                        throw new TypeError("Cannot call a class as a function"); this._mediaFileReader = e; this._tags = null; }
                    m(f, [{ key: "setTagsToRead", value: function (e) { this._tags = e; return this; } }, { key: "read", value: function (e) {
                                var d = this;
                                this._mediaFileReader.init({ onSuccess: function () {
                                        d._loadData(d._mediaFileReader, { onSuccess: function () { try {
                                                var c = d._parseData(d._mediaFileReader, d._tags);
                                            }
                                            catch (a) {
                                                if (e.onError) {
                                                    e.onError({ type: "parseData", info: a.message });
                                                    return;
                                                }
                                            } e.onSuccess(c); }, onError: e.onError });
                                    }, onError: e.onError });
                            } }, { key: "getShortcuts", value: function () { return {}; } }, { key: "_loadData", value: function (e, d) { throw Error("Must implement _loadData function"); } }, { key: "_parseData", value: function (e, d) { throw Error("Must implement _parseData function"); } }, { key: "_expandShortcutTags", value: function (e) {
                                if (!e)
                                    return null;
                                for (var d = [], c = this.getShortcuts(), a = 0, b; b = e[a]; a++)
                                    d = d.concat(c[b] || [b]);
                                return d;
                            } }], [{ key: "getTagIdentifierByteRange", value: function () { throw Error("Must implement"); } }, { key: "canReadTagFormat", value: function (e) { throw Error("Must implement"); } }]);
                    return f;
                }();
                p.exports = f;
            }, { "./MediaFileReader": 11 }], 13: [function (f, p, q) {
                var m = function () {
                    function e(d, c) { for (var a = 0; a < c.length; a++) {
                        var b = c[a];
                        b.enumerable = b.enumerable || !1;
                        b.configurable = !0;
                        "value" in b && (b.writable = !0);
                        Object.defineProperty(d, b.key, b);
                    } }
                    return function (d, c, a) { c && e(d.prototype, c); a && e(d, a); return d; };
                }(), l = function () { function e(d, c) { if (!(this instanceof e))
                    throw new TypeError("Cannot call a class as a function"); this._value = d; this.bytesReadCount = c; this.length = d.length; } m(e, [{ key: "toString", value: function () { return this._value; } }]); return e; }();
                p.exports = { readUTF16String: function (e, d, c) {
                        var a = 0, b = 1, g = 0;
                        c = Math.min(c || e.length, e.length);
                        254 == e[0] && 255 == e[1] ? (d = !0, a = 2) : 255 == e[0] && 254 == e[1] && (d = !1, a = 2);
                        d && (b = 0, g = 1);
                        d = [];
                        for (var h = 0; a < c; h++) {
                            var f = e[a + b], m = (f <<
                                8) + e[a + g];
                            a += 2;
                            if (0 == m)
                                break;
                            else
                                216 > f || 224 <= f ? d[h] = String.fromCharCode(m) : (f = (e[a + b] << 8) + e[a + g], a += 2, d[h] = String.fromCharCode(m, f));
                        }
                        return new l(d.join(""), a);
                    }, readUTF8String: function (e, d) {
                        var c = 0;
                        d = Math.min(d || e.length, e.length);
                        239 == e[0] && 187 == e[1] && 191 == e[2] && (c = 3);
                        for (var a = [], b = 0; c < d; b++) {
                            var g = e[c++];
                            if (0 == g)
                                break;
                            else if (128 > g)
                                a[b] = String.fromCharCode(g);
                            else if (194 <= g && 224 > g) {
                                var h = e[c++];
                                a[b] = String.fromCharCode(((g & 31) << 6) + (h & 63));
                            }
                            else if (224 <= g && 240 > g) {
                                h = e[c++];
                                var f = e[c++];
                                a[b] = String.fromCharCode(((g &
                                    255) << 12) + ((h & 63) << 6) + (f & 63));
                            }
                            else if (240 <= g && 245 > g) {
                                h = e[c++];
                                f = e[c++];
                                var m = e[c++];
                                f = ((g & 7) << 18) + ((h & 63) << 12) + ((f & 63) << 6) + (m & 63) - 65536;
                                a[b] = String.fromCharCode((f >> 10) + 55296, (f & 1023) + 56320);
                            }
                        }
                        return new l(a.join(""), c);
                    }, readNullTerminatedString: function (e, d) { var c = []; d = d || e.length; for (var a = 0; a < d;) {
                        var b = e[a++];
                        if (0 == b)
                            break;
                        c[a - 1] = String.fromCharCode(b);
                    } return new l(c.join(""), a); } };
            }, {}], 14: [function (f, p, q) {
                function m(d, c) {
                    if ("function" !== typeof c && null !== c)
                        throw new TypeError("Super expression must either be null or a function, not " +
                            typeof c);
                    d.prototype = Object.create(c && c.prototype, { constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 } });
                    c && (Object.setPrototypeOf ? Object.setPrototypeOf(d, c) : d.__proto__ = c);
                }
                var l = function () { function d(d, a) { for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    c.enumerable = c.enumerable || !1;
                    c.configurable = !0;
                    "value" in c && (c.writable = !0);
                    Object.defineProperty(d, c.key, c);
                } } return function (c, a, b) { a && d(c.prototype, a); b && d(c, b); return c; }; }(), e = f("./ChunkedFileData");
                q = function (d) {
                    function c(a) {
                        if (!(this instanceof
                            c))
                            throw new TypeError("Cannot call a class as a function");
                        var b = (c.__proto__ || Object.getPrototypeOf(c)).call(this);
                        if (!this)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        b = !b || "object" !== typeof b && "function" !== typeof b ? this : b;
                        b._url = a;
                        b._fileData = new e;
                        return b;
                    }
                    m(c, d);
                    l(c, [{ key: "_init", value: function (a) { c._config.avoidHeadRequests ? this._fetchSizeWithGetRequest(a) : this._fetchSizeWithHeadRequest(a); } }, { key: "_fetchSizeWithHeadRequest", value: function (a) {
                                var b = this;
                                this._makeXHRRequest("HEAD", null, { onSuccess: function (c) { (c = b._parseContentLength(c)) ? (b._size = c, a.onSuccess()) : b._fetchSizeWithGetRequest(a); }, onError: a.onError });
                            } }, { key: "_fetchSizeWithGetRequest", value: function (a) {
                                var b = this, c = this._roundRangeToChunkMultiple([0, 0]);
                                this._makeXHRRequest("GET", c, { onSuccess: function (c) {
                                        var d = b._parseContentRange(c);
                                        c = b._getXhrResponseContent(c);
                                        if (d) {
                                            if (null == d.instanceLength) {
                                                b._fetchEntireFile(a);
                                                return;
                                            }
                                            b._size = d.instanceLength;
                                        }
                                        else
                                            b._size = c.length;
                                        b._fileData.addData(0, c);
                                        a.onSuccess();
                                    }, onError: a.onError });
                            } }, { key: "_fetchEntireFile", value: function (a) { var b = this; this._makeXHRRequest("GET", null, { onSuccess: function (c) { c = b._getXhrResponseContent(c); b._size = c.length; b._fileData.addData(0, c); a.onSuccess(); }, onError: a.onError }); } }, { key: "_getXhrResponseContent", value: function (a) { return a.responseBody || a.responseText || ""; } }, { key: "_parseContentLength", value: function (a) { a = this._getResponseHeader(a, "Content-Length"); return null == a ? a : parseInt(a, 10); } }, { key: "_parseContentRange", value: function (a) {
                                if (a =
                                    this._getResponseHeader(a, "Content-Range")) {
                                    var b = a.match(/bytes (\d+)-(\d+)\/(?:(\d+)|\*)/i);
                                    if (!b)
                                        throw Error("FIXME: Unknown Content-Range syntax: " + a);
                                    return { firstBytePosition: parseInt(b[1], 10), lastBytePosition: parseInt(b[2], 10), instanceLength: b[3] ? parseInt(b[3], 10) : null };
                                }
                                return null;
                            } }, { key: "loadRange", value: function (a, b) {
                                var c = this;
                                c._fileData.hasDataRange(a[0], Math.min(c._size, a[1])) ? setTimeout(b.onSuccess, 1) : (a = this._roundRangeToChunkMultiple(a), a[1] = Math.min(c._size, a[1]), this._makeXHRRequest("GET", a, { onSuccess: function (d) { d = c._getXhrResponseContent(d); c._fileData.addData(a[0], d); b.onSuccess(); }, onError: b.onError }));
                            } }, { key: "_roundRangeToChunkMultiple", value: function (a) { return [a[0], a[0] + 1024 * Math.ceil((a[1] - a[0] + 1) / 1024) - 1]; } }, { key: "_makeXHRRequest", value: function (a, b, d) {
                                var e = this._createXHRObject();
                                e.open(a, this._url);
                                var f = function () { if (200 === e.status || 206 === e.status)
                                    d.onSuccess(e);
                                else if (d.onError)
                                    d.onError({ type: "xhr", info: "Unexpected HTTP status " + e.status + ".", xhr: e }); e = null; };
                                "undefined" !==
                                    typeof e.onload ? (e.onload = f, e.onerror = function () { if (d.onError)
                                    d.onError({ type: "xhr", info: "Generic XHR error, check xhr object.", xhr: e }); }) : e.onreadystatechange = function () { 4 === e.readyState && f(); };
                                c._config.timeoutInSec && (e.timeout = 1E3 * c._config.timeoutInSec, e.ontimeout = function () { if (d.onError)
                                    d.onError({ type: "xhr", info: "Timeout after " + e.timeout / 1E3 + "s. Use jsmediatags.Config.setXhrTimeout to override.", xhr: e }); });
                                e.overrideMimeType("text/plain; charset=x-user-defined");
                                b && this._setRequestHeader(e, "Range", "bytes=" + b[0] + "-" + b[1]);
                                this._setRequestHeader(e, "If-Modified-Since", "Sat, 01 Jan 1970 00:00:00 GMT");
                                e.send(null);
                            } }, { key: "_setRequestHeader", value: function (a, b, d) { 0 > c._config.disallowedXhrHeaders.indexOf(b.toLowerCase()) && a.setRequestHeader(b, d); } }, { key: "_hasResponseHeader", value: function (a, b) { a = a.getAllResponseHeaders(); if (!a)
                                return !1; a = a.split("\r\n"); for (var c = [], d = 0; d < a.length; d++)
                                c[d] = a[d].split(":")[0].toLowerCase(); return 0 <= c.indexOf(b.toLowerCase()); } }, { key: "_getResponseHeader", value: function (a, b) { return this._hasResponseHeader(a, b) ? a.getResponseHeader(b) : null; } }, { key: "getByteAt", value: function (a) { return this._fileData.getByteAt(a).charCodeAt(0) & 255; } }, { key: "_isWebWorker", value: function () { return "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope; } }, { key: "_createXHRObject", value: function () {
                                if ("undefined" === typeof window && !this._isWebWorker())
                                    return new (f("xhr2").XMLHttpRequest);
                                if ("undefined" !== typeof XMLHttpRequest)
                                    return new XMLHttpRequest;
                                throw Error("XMLHttpRequest is not supported");
                            } }], [{ key: "canReadFile", value: function (a) { return "string" === typeof a && /^[a-z]+:\/\//i.test(a); } }, { key: "setConfig", value: function (a) { for (var b in a)
                                a.hasOwnProperty(b) && (this._config[b] = a[b]); a = this._config.disallowedXhrHeaders; for (b = 0; b < a.length; b++)
                                a[b] = a[b].toLowerCase(); } }]);
                    return c;
                }(f("./MediaFileReader"));
                q._config = { avoidHeadRequests: !1, disallowedXhrHeaders: [], timeoutInSec: 30 };
                p.exports = q;
            }, { "./ChunkedFileData": 5, "./MediaFileReader": 11, xhr2: 2 }], 15: [function (f, p, q) {
                function m(a, b) {
                    if (!(a instanceof
                        b))
                        throw new TypeError("Cannot call a class as a function");
                }
                function l(a, b) { var c = 0 > a.offset && (-a.offset > b || 0 < a.offset + a.length); return !(0 <= a.offset && a.offset + a.length >= b || c); }
                var e = function () { function a(a, b) { for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1;
                    d.configurable = !0;
                    "value" in d && (d.writable = !0);
                    Object.defineProperty(a, d.key, d);
                } } return function (b, c, d) { c && a(b.prototype, c); d && a(b, d); return b; }; }();
                f("./MediaFileReader");
                q = f("./NodeFileReader");
                var d = f("./XhrFileReader"), c = f("./BlobFileReader"), a = f("./ArrayFileReader");
                f("./MediaTagReader");
                var b = f("./ID3v1TagReader"), g = f("./ID3v2TagReader"), h = f("./MP4TagReader");
                f = f("./FLACTagReader");
                var k = [], r = [], u = function () {
                    function a(b) { m(this, a); this._file = b; }
                    e(a, [{ key: "setTagsToRead", value: function (a) { this._tagsToRead = a; return this; } }, { key: "setFileReader", value: function (a) { this._fileReader = a; return this; } }, { key: "setTagReader", value: function (a) { this._tagReader = a; return this; } }, { key: "read", value: function (a) {
                                var b = new (this._getFileReader())(this._file), c = this;
                                b.init({ onSuccess: function () { c._getTagReader(b, { onSuccess: function (d) { (new d(b)).setTagsToRead(c._tagsToRead).read(a); }, onError: a.onError }); }, onError: a.onError });
                            } }, { key: "_getFileReader", value: function () { return this._fileReader ? this._fileReader : this._findFileReader(); } }, { key: "_findFileReader", value: function () { for (var a = 0; a < k.length; a++)
                                if (k[a].canReadFile(this._file))
                                    return k[a]; throw Error("No suitable file reader found for " + this._file); } }, { key: "_getTagReader", value: function (a, b) {
                                if (this._tagReader) {
                                    var c = this._tagReader;
                                    setTimeout(function () { b.onSuccess(c); }, 1);
                                }
                                else
                                    this._findTagReader(a, b);
                            } }, { key: "_findTagReader", value: function (a, b) {
                                for (var c = [], d = [], e = a.getSize(), f = 0; f < r.length; f++) {
                                    var g = r[f].getTagIdentifierByteRange();
                                    l(g, e) && (0 <= g.offset && g.offset < e / 2 || 0 > g.offset && g.offset < -e / 2 ? c.push(r[f]) : d.push(r[f]));
                                }
                                var h = !1;
                                f = { onSuccess: function () {
                                        if (h) {
                                            for (var c = 0; c < r.length; c++) {
                                                var d = r[c].getTagIdentifierByteRange();
                                                if (l(d, e)) {
                                                    try {
                                                        var f = a.getBytesAt(0 <= d.offset ? d.offset : d.offset + e, d.length);
                                                    }
                                                    catch (A) {
                                                        if (b.onError)
                                                            b.onError({ type: "fileReader",
                                                                info: A.message });
                                                        return;
                                                    }
                                                    if (r[c].canReadTagFormat(f)) {
                                                        b.onSuccess(r[c]);
                                                        return;
                                                    }
                                                }
                                            }
                                            if (b.onError)
                                                b.onError({ type: "tagFormat", info: "No suitable tag reader found" });
                                        }
                                        else
                                            h = !0;
                                    }, onError: b.onError };
                                this._loadTagIdentifierRanges(a, c, f);
                                this._loadTagIdentifierRanges(a, d, f);
                            } }, { key: "_loadTagIdentifierRanges", value: function (a, b, c) {
                                if (0 === b.length)
                                    setTimeout(c.onSuccess, 1);
                                else {
                                    for (var d = [Number.MAX_VALUE, 0], e = a.getSize(), f = 0; f < b.length; f++) {
                                        var g = b[f].getTagIdentifierByteRange(), h = 0 <= g.offset ? g.offset : g.offset +
                                            e;
                                        g = h + g.length - 1;
                                        d[0] = Math.min(h, d[0]);
                                        d[1] = Math.max(g, d[1]);
                                    }
                                    a.loadRange(d, c);
                                }
                            } }]);
                    return a;
                }(), v = function () {
                    function a() { m(this, a); }
                    e(a, null, [{ key: "addFileReader", value: function (b) { k.push(b); return a; } }, { key: "addTagReader", value: function (b) { r.push(b); return a; } }, { key: "removeTagReader", value: function (b) { b = r.indexOf(b); 0 <= b && r.splice(b, 1); return a; } }, { key: "EXPERIMENTAL_avoidHeadRequests", value: function () { d.setConfig({ avoidHeadRequests: !0 }); } }, { key: "setDisallowedXhrHeaders", value: function (a) { d.setConfig({ disallowedXhrHeaders: a }); } },
                        { key: "setXhrTimeoutInSec", value: function (a) { d.setConfig({ timeoutInSec: a }); } }]);
                    return a;
                }();
                v.addFileReader(d).addFileReader(c).addFileReader(a).addTagReader(g).addTagReader(b).addTagReader(h).addTagReader(f);
                "undefined" === typeof process || process.browser || v.addFileReader(q);
                p.exports = { read: function (a, b) { (new u(a)).read(b); }, Reader: u, Config: v };
            }, { "./ArrayFileReader": 3, "./BlobFileReader": 4, "./FLACTagReader": 6, "./ID3v1TagReader": 7, "./ID3v2TagReader": 9, "./MP4TagReader": 10, "./MediaFileReader": 11, "./MediaTagReader": 12,
                "./NodeFileReader": 1, "./XhrFileReader": 14 }] }, {}, [15])(15);
});
var pDefer = function () {
    var ret = {};
    ret.promise = new Promise(function (resolve, reject) {
        ret.resolve = resolve;
        ret.reject = reject;
    });
    return ret;
};
var version = 1;
function getTransactionFunction(databaseName) {
    var storeName = databaseName;
    return new Promise(function (resolve, reject) {
        var openRequest = window.indexedDB.open(databaseName, version);
        openRequest.onupgradeneeded = function () { return openRequest.result.createObjectStore(storeName); };
        openRequest.onblocked = function () { return reject(new Error("onblocked")); };
        openRequest.onerror = function () { return reject(openRequest.error); };
        openRequest.onsuccess = function () {
            var db = openRequest.result;
            resolve(function (transactionType, fn) { return runQueriesInTransaction({ db: db, storeName: storeName, transactionType: transactionType, fn: fn }); });
        };
    });
}
function runQueriesInTransaction(_a) {
    var db = _a.db, storeName = _a.storeName, transactionType = _a.transactionType, fn = _a.fn;
    return new Promise(function (resolve, reject) {
        var transaction = db.transaction(storeName, transactionType);
        var store = transaction.objectStore(storeName);
        var requests = fn(store);
        var resultsPromise = Array.isArray(requests)
            ? Promise.all(requests.map(promisifyRequest))
            : promisifyRequest(requests);
        transaction.onerror = function () { return reject(transaction.error); };
        transaction.oncomplete = function () { return resolve(resultsPromise); };
    });
}
function promisifyRequest(request) {
    var deferred = pDefer();
    request.onerror = function (err) {
        // prevent global error throw https://bugzilla.mozilla.org/show_bug.cgi?id=872873
        if (typeof err.preventDefault === "function") {
            err.preventDefault();
        }
        deferred.reject(request.error);
    };
    request.onsuccess = function () { return deferred.resolve(request.result); };
    return deferred.promise;
}
var Song = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this._index = 0;
        this.songChanged = createEvent(this, "songChanged", 7);
        this.loaded = createEvent(this, "loaded", 7);
    }
    Object.defineProperty(class_1.prototype, "url", {
        get: function () {
            if (this.src.startsWith('http')) {
                return this.src;
            }
            else if (this.src.startsWith('.')) {
                return window.location.origin + relPathAsAbs(this.src);
            }
            else {
                return window.location.origin + this.src;
            }
        },
        enumerable: true,
        configurable: true
    });
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.player = this.element.closest('stellar-playlist');
                if (this.player.load) {
                    this.load();
                }
                this.player.addEventListener('load_songs', function () {
                    _this.load();
                });
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.componentDidLoad = function () {
    };
    class_1.prototype.songChangedHandler = function () {
        this.songChanged.emit(this._index);
    };
    class_1.prototype.updateDetails = function (details) {
        this.title = details.title;
        this.album = details.album;
        this.genre = details.genre;
        this.artist = details.artist;
        this.picture = details.picture;
    };
    class_1.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var transaction, details, songDetails, picture;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getTransactionFunction('songs')];
                    case 1:
                        transaction = _a.sent();
                        return [4 /*yield*/, transaction('readonly', function (store) { return store.get(_this.src); })];
                    case 2:
                        details = _a.sent();
                        if (!!details) return [3 /*break*/, 3];
                        window["jsmediatags"].read(this.url, {
                            onSuccess: function (tag) { return __awaiter(_this, void 0, void 0, function () {
                                var itemToSave, base64String, i, base64;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            itemToSave = {
                                                title: tag.tags.title,
                                                album: tag.tags.album,
                                                genre: tag.tags.genre,
                                                artist: tag.tags.artist,
                                                picture: tag.tags.picture
                                            };
                                            if (!tag.tags.picture) return [3 /*break*/, 2];
                                            base64String = "";
                                            for (i = 0; i < tag.tags.picture.data.length; i++) {
                                                base64String += String.fromCharCode(tag.tags.picture.data[i]);
                                            }
                                            base64 = "data:image/jpeg;base64," + window.btoa(base64String);
                                            itemToSave.picture = base64;
                                            return [4 /*yield*/, transaction('readwrite', function (store) { return store.put(base64, itemToSave.album + "_picture"); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            itemToSave.picture = undefined;
                                            _a.label = 3;
                                        case 3: return [4 /*yield*/, transaction('readwrite', function (store) { return store.put(JSON.stringify(itemToSave), _this.src); })];
                                        case 4:
                                            _a.sent();
                                            this.updateDetails(itemToSave);
                                            return [2 /*return*/];
                                    }
                                });
                            }); },
                            onError: function (error) {
                                console.error(error);
                                _this.error = error;
                            }
                        });
                        return [3 /*break*/, 5];
                    case 3:
                        songDetails = JSON.parse(details);
                        return [4 /*yield*/, transaction('readonly', function (store) { return store.get(songDetails.album + "_picture"); })];
                    case 4:
                        picture = _a.sent();
                        songDetails.picture = picture;
                        this.updateDetails(songDetails);
                        _a.label = 5;
                    case 5:
                        this.loaded.emit({ el: this.element });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.details = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        'title': this.title,
                        'album': this.album,
                        'genre': this.genre,
                        'artist': this.artist,
                        'picture': this.picture
                    }];
            });
        });
    };
    class_1.prototype.preload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var audio;
            return __generator(this, function (_a) {
                audio = new Audio();
                audio.src = this.src;
                audio.preload = "auto";
                audio.volume = 1;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.play = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.playing) {
                    this.songChangedHandler();
                    this.playing = true;
                    this.player.prepare(this.element);
                    this.player.play();
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.switching = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.playing = false;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.getIndex = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._index];
            });
        });
    };
    class_1.prototype.setIndex = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._index = value;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("button", { onClick: function () { return _this.play(); } }, h("span", { class: "index" }, !this.playing && leadingZeroIndex(this._index), this.playing && h("stellar-asset", { name: "play" })), h("div", { class: "tracklisting" }, this.artwork && h("img", { src: this.picture, class: "preview-image" }), h("h2", null, h("span", null, this.title || "Loading..."), " / ", this.artist || "Loading...")), h("img", { src: this.picture, class: "backdrop" })));
    };
    Object.defineProperty(class_1, "assetsDirs", {
        get: function () { return ["./vendor"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{display:block;width:100%;-ms-flex:0 0 100%;flex:0 0 100%}:host button{background:none;width:100%;border:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;padding:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;position:relative;overflow:hidden;border-top:1px solid var(--color-line)}:host button:focus,:host button:hover{background:var(--color-bg-active)}:host([playing]) button{background:var(--color-bg-playing)!important}:host .index{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:45px;width:55px;-ms-flex:0 0 55px;flex:0 0 55px;border-right:1px solid var(--color-line);font-size:.75rem;margin:0;margin-right:20px;text-transform:uppercase;color:var(--color-two);letter-spacing:.23em;z-index:1;font-weight:900}:host([playing]) .index{font-size:1.5rem}:host img.preview-image{width:2rem;height:2rem;display:inline-block;margin-right:10px;-webkit-transition:all .15s ease-in-out 0s;transition:all .15s ease-in-out 0s;-webkit-filter:grayscale(100%);filter:grayscale(100%);padding:0;background:#fff;border-radius:4px;z-index:1}:host([playing]) img.preview-image{-webkit-filter:grayscale(0);filter:grayscale(0)}:host h2{z-index:1;color:var(--color-four);font-size:14px;font-weight:400;margin:0;line-height:1;margin-top:-3px;white-space:nowrap}:host h2 span{color:var(--color-two)}:host .tracklisting{overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;height:46px}:host .tracklisting:after{content:\"\";display:block;width:30px;height:30px;-ms-flex:0 0 30px;flex:0 0 30px}:host img.backdrop{position:absolute;width:100%;-webkit-filter:blur(20px) grayscale(75%);filter:blur(20px) grayscale(75%);opacity:.15;z-index:0;mix-blend-mode:color}:host button[data-playing=true] img.preview-image{width:30px;height:30px;-webkit-filter:grayscale(0);filter:grayscale(0)}:host button[data-playing=true] img.backdrop{opacity:1}:host button[data-playing=true] .index,:host button[data-playing=true] h2 span{color:var(--color-three)!important}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { Song as stellar_song };
