'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
require('./index-9d31ce96.js');
const theme = require('./theme-6129a8c3.js');
const matchPath = require('./match-path-1773ac12.js');
const domUtils = require('./dom-utils-fb324327.js');
const activeRouter = require('./active-router-01ecb4e6.js');
const helpers = require('./helpers-b5e6d570.js');
const _commonjsHelpers = require('./_commonjsHelpers-3fc1f64e.js');
const index$1 = require('./index-5a80c644.js');
require('./css-custom-properties.min-d46e7f9d.js');
require('./main-6214461c.js');
require('./moment-fd045425.js');
const index$2 = require('./index-1978083c.js');

const ContextConsumer = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.context = {};
        this.renderer = () => null;
    }
    connectedCallback() {
        if (this.subscribe != null) {
            this.unsubscribe = this.subscribe(this.el, 'context');
        }
    }
    disconnectedCallback() {
        if (this.unsubscribe != null) {
            this.unsubscribe();
        }
    }
    render() {
        return this.renderer(Object.assign({}, this.context));
    }
    get el() { return core.getElement(this); }
};

const Asset = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.name = "person";
        this.language = "ios-";
        this.block = false;
    }
    componentWillLoad() {
        this.ariaLabel = this.name
            .replace('ios-', '')
            .replace('md-', '')
            .replace(/\-/g, ' ');
    }
    render() {
        return (core.h("div", { class: "icon-wrap" }, core.h("stellar-icon", { src: this.src, name: this.name, ariaLabel: this.ariaLabel, "aria-label": this.ariaLabel })));
    }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;-webkit-transform-origin:.5em .5em;transform-origin:.5em .5em}:host .icon-wrap{display:-ms-flexbox;display:flex}"; }
};

const Button = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * Allows the button to render for different tags.
         */
        this.tag = "link";
        /**
         * Sets accessibility options on the buttons
         */
        this.label = 'Submit';
        /**
         * Sets the name on the button if the button is an input. Allows the button to act as an item in a form.
         */
        this.name = '';
        /**
         * Sets the value on the button if the button is an input.
         */
        this.value = '';
        /**
         * Sets the href on the anchor tag if the button is a link.
         */
        this.href = '#';
        /**
         * Sets the target on the anchor tag if the button is a link.
         */
        this.target = '_self';
        /**
         * Sets the button or link as a button with only an icon.
         */
        this.icon = false;
        /**
         * Sets the button or link as an active state.
         */
        this.active = false;
        /**
         * Sets the button or link as disabled and not-interactable.
         */
        this.disabled = false;
        /**
         * Sets the button or link to provide the affordance of a dangerous action.
         */
        this.danger = false;
        /**
         * Sets the button or link to render as a pill.
         */
        this.pill = false;
        /**
         * Sets the button or link to render at full width to the parent.
         */
        this.block = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.outline = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.invert = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.contrast = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        /**
         * Sets the button or link as processing when clicked.
         */
        this.processable = false;
        this.processing = false;
        this.ghost = false;
    }
    componentWillLoad() {
        this.icon = this.element.querySelectorAll('stellar-asset').length > 0;
    }
    async click() {
        if (this.processable) {
            this.processing = true;
        }
        if (this.for) {
            const target = this.for.split(":");
            if (target[0] === "modal") {
                // @ts-ignore
                const modal = document.querySelector(`stellar-modal[name="${target[1]}"]`);
                modal.open();
            }
        }
        if (this.tag === "submit") {
            // @ts-ignore
            this.element.closest('stellar-form').submit_form();
        }
        if (this.tag === "link") {
            window.location.href = this.href;
        }
        return true;
    }
    renderSVG() {
        return (core.h("stellar-asset", { src: "Loading", color: "white" }));
    }
    renderButton() {
        return (core.h("button", { type: "button", class: "button", title: this.label, disabled: this.disabled, onClick: () => { this.click(); } }, core.h("div", { class: "content" }, core.h("slot", null, "Submit")), this.processing && core.h("div", { class: "processing" }, this.renderSVG())));
    }
    renderSubmit() {
        return (core.h("button", { type: "submit", class: "button", title: this.label, disabled: this.disabled, name: this.name, value: this.value, onClick: () => { this.click(); } }, core.h("div", { class: "content" }, core.h("slot", null, "Submit")), this.processing && core.h("div", { class: "processing" }, this.renderSVG())));
    }
    renderLink() {
        return (core.h("a", { href: this.href, target: this.target, class: "button", "data-disabled": this.disabled, title: this.label, onClick: () => { this.click(); } }, core.h("div", { class: "content" }, core.h("slot", null, "Submit")), this.processing && core.h("div", { class: "processing" }, this.renderSVG())));
    }
    renderAppLink() {
        return (core.h("stencil-route-link", { url: this.href, anchorClass: "button", "data-disabled": this.disabled, title: this.label, onClick: () => { this.click(); } }, core.h("div", { class: "content" }, core.h("slot", null, "Submit")), this.processing && core.h("div", { class: "processing" }, this.renderSVG())));
    }
    renderSpan() {
        return (core.h("span", { class: "button", title: this.label, "data-disabled": this.disabled, "aria-label": `Button ${this.label} ${this.element.textContent}`, tabIndex: 0, onClick: () => { this.click(); } }, core.h("div", { class: "content" }, core.h("slot", null, "Submit")), this.processing && core.h("div", { class: "processing" }, this.renderSVG())));
    }
    render() {
        return [
            this.tag === "button" && this.renderButton(),
            this.tag === "submit" && this.renderSubmit(),
            this.tag === "link" && this.renderLink(),
            this.tag === "route-link" && this.renderAppLink(),
            this.tag === "span" && this.renderSpan()
        ];
    }
    get element() { return core.getElement(this); }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-moz-appearance:none!important;appearance:none!important;-webkit-appearance:none!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:var(--wrap-display,inline-block);font-family:var(--font-heading);text-align:center;vertical-align:baseline;-ms-flex-item-align:center;align-self:center;--width:auto;--height:auto;--padding-vertical:var(--ms0);--padding-horizontal:var(--ms2);--padding:var(--padding-vertical) var(--padding-horizontal);--background:var(--theme-base5);--color:var(--white);--active-background:var(--theme-base7);--active-color:var(--white);--active-border:none;--border:none;--border-radius:0;--font-size:var(--ms0);--text-decoration:none}:host([outline]){--background:transparent;--border:2px solid currentColor;--active-background:var(--theme-base0);--active-border:2px solid currentColor}:host([ghost]),:host([outline]){--color:var(--theme-base5);--active-color:var(--theme-base7)}:host([ghost]){--padding-vertical:0;--padding-horizontal:0;--background:none;--border:none;--active-background:none;--active-border:none}:host([outline][invert]){--background:transparent;--border:2px solid currentColor;--active-background:var(--theme-base0);--active-border:2px solid currentColor}:host([ghost][invert]){--background:none;--active-background:none}:host([ghost][invert]),:host([invert]){--color:var(--theme-base2);--border:none;--active-color:var(--theme-base5);--active-border:none}:host([invert]){--background:var(--white);--active-background:var(--theme-base0)}:host([contrast]){--background:var(--theme-base7);--color:var(--white);--border:none;--active-background:var(--theme-base9);--active-color:var(--theme-base0);--active-border:none}:host([pill]){--border-radius:1000px}:host([size=tiny]){--font-size:var(--ms-2)}:host([size=small]){--font-size:var(--ms-1)}:host([size=medium]){--font-size:var(--ms1)}:host([size=large]){--font-size:var(--ms2)}:host([padding=tiny]){--padding-vertical:var(--ms-2);--padding-horizontal:var(--ms0)}:host([padding=small]){--padding-vertical:var(--ms-1);--padding-horizontal:var(--ms1)}:host([padding=medium]){--padding-vertical:var(--ms1);--padding-horizontal:var(--ms3)}:host([padding=large]){--padding-vertical:var(--ms2);--padding-horizontal:var(--ms4)}:host(:active){-webkit-transform:scale(.925);transform:scale(.925)}:host(.h-auto){--height:100%;--padding-vertical:0}:host .button{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;outline:0;border:var(--border);background:var(--background);padding:var(--padding);width:var(--width);height:var(--height);vertical-align:bottom;-webkit-text-decoration:var(--text-decoration);text-decoration:var(--text-decoration);line-height:1;letter-spacing:var(--letter-spacing,.0275em);white-space:nowrap;color:var(--color);font-family:inherit;font-size:var(--font-size);font-weight:600;border-radius:var(--border-radius,0)}:host a.button,:host span.button{width:auto}:host .button:focus,:host .button:hover{border:var(--active-border);background-color:var(--active-background);color:var(--active-color)}:host .button .content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host([block]),:host([block]) .button{display:block;width:100%}:host ::slotted(*){line-height:1!important;font-family:inherit}:host([icon]) .button .content{display:inline-grid;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;grid-template-columns:auto auto;grid-gap:.1em}:host ::slotted(img),:host ::slotted(stellar-asset){display:inline-block;float:none;width:1em;height:1em;font-size:1.75em;margin:calc(var(--padding-vertical) * -.5) 0 calc(var(--padding-vertical) * -.5) calc(var(--padding-vertical) * -.5)}:host([ghost]) ::slotted(img),:host([ghost]) ::slotted(stellar-asset){font-size:1.65em}:host ::slotted(img[align=left]),:host ::slotted(stellar-asset[align=left]){-ms-flex-order:-1;order:-1;margin-right:var(--ms-7)}:host ::slotted(img[align=right]),:host ::slotted(stellar-asset[align=right]){-ms-flex-order:2;order:2;margin-left:var(--ms-7)}:host([dark]){--background:var(--theme-base7);--active-color:var(--white);--active-border:none}:host([dark]),:host([dark][outline]){--color:var(--white);--active-background:var(--theme-base9)}:host([dark][outline]){--background:transparent;--border:2px solid var(--theme-base5);--active-color:var(--theme-base0);--active-border:2px solid var(--theme-base9)}:host([dark][ghost]){--padding:0.05em 0 0.125em;--background:none;--color:var(--theme-base5);--border:none;--active-background:none;--active-color:var(--theme-base7);--active-border:none}"; }
};
theme.Tunnel.injectProps(Button, ['dark']);

let CACHED_MAP;
const getIconMap = () => {
    if (!CACHED_MAP) {
        const win = window;
        win.Ionicons = win.Ionicons || {};
        CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
    }
    return CACHED_MAP;
};
const getUrl = (i) => {
    let url = getSrc(i.src);
    if (url) {
        return url;
    }
    url = getName(i.name, i.icon, i.mode, i.ios, i.md);
    if (url) {
        return getNamedUrl(url);
    }
    if (i.icon) {
        url = getSrc(i.icon);
        if (url) {
            return url;
        }
        url = getSrc(i.icon[i.mode]);
        if (url) {
            return url;
        }
    }
    return null;
};
const getNamedUrl = (name) => {
    const url = getIconMap().get(name);
    if (url) {
        return url;
    }
    return core.getAssetPath(`svg/${name}.svg`);
};
const getName = (name, icon, mode, ios, md) => {
    // default to "md" if somehow the mode wasn't set
    mode = (mode && mode.toLowerCase()) === 'ios' ? 'ios' : 'md';
    // if an icon was passed in using the ios or md attributes
    // set the iconName to whatever was passed in
    if (ios && mode === 'ios') {
        name = ios.toLowerCase();
    }
    else if (md && mode === 'md') {
        name = md.toLowerCase();
    }
    else {
        if (!name && icon && !isSrc(icon)) {
            name = icon;
        }
        if (isStr(name)) {
            name = name.toLowerCase();
            if (!/^md-|^ios-|^logo-/.test(name)) {
                // this does not have one of the defaults
                // so lets auto add in the mode prefix for them
                name = mode + '-' + name;
            }
        }
    }
    if (!isStr(name) || name.trim() === '') {
        return null;
    }
    // only allow alpha characters and dash
    const invalidChars = name.replace(/[a-z]|-|\d/gi, '');
    if (invalidChars !== '') {
        return null;
    }
    return name;
};
const getSrc = (src) => {
    if (isStr(src)) {
        src = src.trim();
        if (isSrc(src)) {
            return src;
        }
    }
    return null;
};
const isSrc = (str) => {
    return str.length > 0 && /(\/|\.)/.test(str);
};
const isStr = (val) => typeof val === 'string';

const validateContent = (svgContent) => {
    if (svgContent) {
        const div = document.createElement('div');
        div.innerHTML = svgContent;
        // setup this way to ensure it works on our buddy IE
        for (let i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
                div.removeChild(div.childNodes[i]);
            }
        }
        // must only have 1 root element
        const svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
            svgElm.setAttribute('class', 's-ion-icon');
            // root element must be an svg
            // lets double check we've got valid elements
            // do not allow scripts
            if (isValid(svgElm)) {
                return div.innerHTML;
            }
        }
    }
    return '';
};
const isValid = (elm) => {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (let i = 0; i < elm.attributes.length; i++) {
            const val = elm.attributes[i].value;
            if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }
        for (let i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
};

const requests = new Map();
const getSvgContent = (url) => {
    // see if we already have a request for this url
    let req = requests.get(url);
    if (!req) {
        // we don't already have a request
        req = fetch(url).then(rsp => {
            if (rsp.status <= 299) {
                return rsp.text();
            }
            return Promise.resolve(null);
        }).then(svgContent => validateContent(svgContent));
        // cache for the same requests
        requests.set(url, req);
    }
    return req;
};

const Icon = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.mode = getStellarMode(this);
        this.isVisible = false;
        /**
         * If enabled, stellar-icon will be loaded lazily when it's visible in the viewport.
         * Default, `false`.
         */
        this.lazy = false;
    }
    connectedCallback() {
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.el, '50px', () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }
    disconnectedCallback() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    waitUntilVisible(el, rootMargin, cb) {
        if ( this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
            const io = this.io = new window.IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    io.disconnect();
                    this.io = undefined;
                    cb();
                }
            }, { rootMargin });
            io.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    }
    loadIcon() {
        if ( this.isVisible) {
            const url = getUrl(this);
            if (url) {
                getSvgContent(url)
                    .then(svgContent => this.svgContent = svgContent);
            }
        }
        if (!this.ariaLabel) {
            const label = getName(this.name, this.icon, this.mode, this.ios, this.md);
            // user did not provide a label
            // come up with the label based on the icon name
            if (label) {
                this.ariaLabel = label
                    .replace('ios-', '')
                    .replace('md-', '')
                    .replace(/\-/g, ' ');
            }
        }
    }
    render() {
        const mode = this.mode || 'ios';
        const flipRtl = this.flipRtl || (this.ariaLabel && this.ariaLabel.indexOf('arrow') > -1 && this.flipRtl !== false);
        return (core.h(core.Host, { role: "img", class: {
                [mode]: true,
                [`icon-${this.size}`]: !!this.size,
                'flip-rtl': !!flipRtl && this.el.ownerDocument.dir === 'rtl'
            } }, (( this.svgContent)
            ? core.h("div", { class: "icon-inner", innerHTML: this.svgContent })
            : core.h("div", { class: "icon-inner" }))));
    }
    static get assetsDirs() { return ["svg"]; }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "name": ["loadIcon"],
        "src": ["loadIcon"],
        "icon": ["loadIcon"]
    }; }
    static get style() { return "stellar-icon{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}stellar-icon .icon-inner,stellar-icon svg{display:block;height:100%;width:100%}stellar-asset.flip-rtl .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}"; }
};
const getStellarMode = (ref) => {
    return core.getMode(ref) || document.documentElement.getAttribute('mode') || 'ios';
};

const getUrl$1 = (url, root) => {
    // Don't allow double slashes
    if (url.charAt(0) == '/' && root.charAt(root.length - 1) == '/') {
        return root.slice(0, root.length - 1) + url;
    }
    return root + url;
};
const RouteLink = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.unsubscribe = () => { return; };
        this.activeClass = 'link-active';
        this.exact = false;
        this.strict = true;
        /**
          *  Custom tag to use instead of an anchor
          */
        this.custom = 'a';
        this.match = null;
    }
    componentWillLoad() {
        this.computeMatch();
    }
    // Identify if the current route is a match.
    computeMatch() {
        if (this.location) {
            this.match = matchPath.matchPath(this.location.pathname, {
                path: this.urlMatch || this.url,
                exact: this.exact,
                strict: this.strict
            });
        }
    }
    handleClick(e) {
        if (domUtils.isModifiedEvent(e) || !this.history || !this.url || !this.root) {
            return;
        }
        e.preventDefault();
        return this.history.push(getUrl$1(this.url, this.root));
    }
    // Get the URL for this route link without the root from the router
    render() {
        let anchorAttributes = {
            class: {
                [this.activeClass]: this.match !== null,
            },
            onClick: this.handleClick.bind(this)
        };
        if (this.anchorClass) {
            anchorAttributes.class[this.anchorClass] = true;
        }
        if (this.custom === 'a') {
            anchorAttributes = Object.assign({}, anchorAttributes, { href: this.url, title: this.anchorTitle, role: this.anchorRole, tabindex: this.anchorTabIndex, 'aria-haspopup': this.ariaHaspopup, id: this.anchorId, 'aria-posinset': this.ariaPosinset, 'aria-setsize': this.ariaSetsize, 'aria-label': this.ariaLabel });
        }
        return (core.h(this.custom, Object.assign({}, anchorAttributes), core.h("slot", null)));
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "location": ["computeMatch"]
    }; }
};
activeRouter.ActiveRouter.injectProps(RouteLink, [
    'history',
    'location',
    'root'
]);

class BufferLoader {
    constructor(context, urlList, callback) {
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
}

var webmidi_min = _commonjsHelpers.createCommonjsModule(function (module) {
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


!function(scope){function WebMidi(){if(WebMidi.prototype._singleton)throw new Error("WebMidi is a singleton, it cannot be instantiated directly.");(WebMidi.prototype._singleton=this)._inputs=[],this._outputs=[],this._userHandlers={},this._stateChangeQueue=[],this._processingStateChange=!1,this._midiInterfaceEvents=["connected","disconnected"],this._nrpnBuffer=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],this._nrpnEventsEnabled=!0,this._nrpnTypes=["entry","increment","decrement"],this._notes=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],this._semitones={C:0,D:2,E:4,F:5,G:7,A:9,B:11},Object.defineProperties(this,{MIDI_SYSTEM_MESSAGES:{value:{sysex:240,timecode:241,songposition:242,songselect:243,tuningrequest:246,sysexend:247,clock:248,start:250,continue:251,stop:252,activesensing:254,reset:255,midimessage:0,unknownsystemmessage:-1},writable:!1,enumerable:!0,configurable:!1},MIDI_CHANNEL_MESSAGES:{value:{noteoff:8,noteon:9,keyaftertouch:10,controlchange:11,channelmode:11,nrpn:11,programchange:12,channelaftertouch:13,pitchbend:14},writable:!1,enumerable:!0,configurable:!1},MIDI_REGISTERED_PARAMETER:{value:{pitchbendrange:[0,0],channelfinetuning:[0,1],channelcoarsetuning:[0,2],tuningprogram:[0,3],tuningbank:[0,4],modulationrange:[0,5],azimuthangle:[61,0],elevationangle:[61,1],gain:[61,2],distanceratio:[61,3],maximumdistance:[61,4],maximumdistancegain:[61,5],referencedistanceratio:[61,6],panspreadangle:[61,7],rollangle:[61,8]},writable:!1,enumerable:!0,configurable:!1},MIDI_CONTROL_CHANGE_MESSAGES:{value:{bankselectcoarse:0,modulationwheelcoarse:1,breathcontrollercoarse:2,footcontrollercoarse:4,portamentotimecoarse:5,dataentrycoarse:6,volumecoarse:7,balancecoarse:8,pancoarse:10,expressioncoarse:11,effectcontrol1coarse:12,effectcontrol2coarse:13,generalpurposeslider1:16,generalpurposeslider2:17,generalpurposeslider3:18,generalpurposeslider4:19,bankselectfine:32,modulationwheelfine:33,breathcontrollerfine:34,footcontrollerfine:36,portamentotimefine:37,dataentryfine:38,volumefine:39,balancefine:40,panfine:42,expressionfine:43,effectcontrol1fine:44,effectcontrol2fine:45,holdpedal:64,portamento:65,sustenutopedal:66,softpedal:67,legatopedal:68,hold2pedal:69,soundvariation:70,resonance:71,soundreleasetime:72,soundattacktime:73,brightness:74,soundcontrol6:75,soundcontrol7:76,soundcontrol8:77,soundcontrol9:78,soundcontrol10:79,generalpurposebutton1:80,generalpurposebutton2:81,generalpurposebutton3:82,generalpurposebutton4:83,reverblevel:91,tremololevel:92,choruslevel:93,celestelevel:94,phaserlevel:95,databuttonincrement:96,databuttondecrement:97,nonregisteredparametercoarse:98,nonregisteredparameterfine:99,registeredparametercoarse:100,registeredparameterfine:101},writable:!1,enumerable:!0,configurable:!1},MIDI_NRPN_MESSAGES:{value:{entrymsb:6,entrylsb:38,increment:96,decrement:97,paramlsb:98,parammsb:99,nullactiveparameter:127},writable:!1,enumerable:!0,configurable:!1},MIDI_CHANNEL_MODE_MESSAGES:{value:{allsoundoff:120,resetallcontrollers:121,localcontrol:122,allnotesoff:123,omnimodeoff:124,omnimodeon:125,monomodeon:126,polymodeon:127},writable:!1,enumerable:!0,configurable:!1},octaveOffset:{value:0,writable:!0,enumerable:!0,configurable:!1}}),Object.defineProperties(this,{supported:{enumerable:!0,get:function(){return "requestMIDIAccess"in navigator}},enabled:{enumerable:!0,get:function(){return void 0!==this.interface}.bind(this)},inputs:{enumerable:!0,get:function(){return this._inputs}.bind(this)},outputs:{enumerable:!0,get:function(){return this._outputs}.bind(this)},sysexEnabled:{enumerable:!0,get:function(){return !(!this.interface||!this.interface.sysexEnabled)}.bind(this)},nrpnEventsEnabled:{enumerable:!0,get:function(){return !!this._nrpnEventsEnabled}.bind(this),set:function(enabled){return this._nrpnEventsEnabled=enabled,this._nrpnEventsEnabled}},nrpnTypes:{enumerable:!0,get:function(){return this._nrpnTypes}.bind(this)},time:{enumerable:!0,get:function(){return performance.now()}}});}var wm=new WebMidi;function Input(midiInput){var that=this;this._userHandlers={channel:{},system:{}},this._midiInput=midiInput,Object.defineProperties(this,{connection:{enumerable:!0,get:function(){return that._midiInput.connection}},id:{enumerable:!0,get:function(){return that._midiInput.id}},manufacturer:{enumerable:!0,get:function(){return that._midiInput.manufacturer}},name:{enumerable:!0,get:function(){return that._midiInput.name}},state:{enumerable:!0,get:function(){return that._midiInput.state}},type:{enumerable:!0,get:function(){return that._midiInput.type}}}),this._initializeUserHandlers(),this._midiInput.onmidimessage=this._onMidiMessage.bind(this);}function Output(midiOutput){var that=this;this._midiOutput=midiOutput,Object.defineProperties(this,{connection:{enumerable:!0,get:function(){return that._midiOutput.connection}},id:{enumerable:!0,get:function(){return that._midiOutput.id}},manufacturer:{enumerable:!0,get:function(){return that._midiOutput.manufacturer}},name:{enumerable:!0,get:function(){return that._midiOutput.name}},state:{enumerable:!0,get:function(){return that._midiOutput.state}},type:{enumerable:!0,get:function(){return that._midiOutput.type}}});}WebMidi.prototype.enable=function(callback,sysex){this.enabled||(this.supported?navigator.requestMIDIAccess({sysex:sysex}).then(function(midiAccess){var promiseTimeout,events=[],promises=[];this.interface=midiAccess,this._resetInterfaceUserHandlers(),this.interface.onstatechange=function(e){events.push(e);};for(var inputs=midiAccess.inputs.values(),input=inputs.next();input&&!input.done;input=inputs.next())promises.push(input.value.open());for(var outputs=midiAccess.outputs.values(),output=outputs.next();output&&!output.done;output=outputs.next())promises.push(output.value.open());function onPortsOpen(){clearTimeout(promiseTimeout),this._updateInputsAndOutputs(),this.interface.onstatechange=this._onInterfaceStateChange.bind(this),"function"==typeof callback&&callback.call(this),events.forEach(function(event){this._onInterfaceStateChange(event);}.bind(this));}promiseTimeout=setTimeout(onPortsOpen.bind(this),200),Promise&&Promise.all(promises).catch(function(err){}).then(onPortsOpen.bind(this));}.bind(this),function(err){"function"==typeof callback&&callback.call(this,err);}.bind(this)):"function"==typeof callback&&callback(new Error("The Web MIDI API is not supported by your browser.")));},WebMidi.prototype.disable=function(){if(!this.supported)throw new Error("The Web MIDI API is not supported by your browser.");this.interface&&(this.interface.onstatechange=void 0),this.interface=void 0,this._inputs=[],this._outputs=[],this._nrpnEventsEnabled=!0,this._resetInterfaceUserHandlers();},WebMidi.prototype.addListener=function(type,listener){if(!this.enabled)throw new Error("WebMidi must be enabled before adding event listeners.");if("function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(!(0<=this._midiInterfaceEvents.indexOf(type)))throw new TypeError("The specified event type is not supported.");return this._userHandlers[type].push(listener),this},WebMidi.prototype.hasListener=function(type,listener){if(!this.enabled)throw new Error("WebMidi must be enabled before checking event listeners.");if("function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(!(0<=this._midiInterfaceEvents.indexOf(type)))throw new TypeError("The specified event type is not supported.");for(var o=0;o<this._userHandlers[type].length;o++)if(this._userHandlers[type][o]===listener)return !0;return !1},WebMidi.prototype.removeListener=function(type,listener){if(!this.enabled)throw new Error("WebMidi must be enabled before removing event listeners.");if(void 0!==listener&&"function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(0<=this._midiInterfaceEvents.indexOf(type))if(listener)for(var o=0;o<this._userHandlers[type].length;o++)this._userHandlers[type][o]===listener&&this._userHandlers[type].splice(o,1);else this._userHandlers[type]=[];else{if(void 0!==type)throw new TypeError("The specified event type is not supported.");this._resetInterfaceUserHandlers();}return this},WebMidi.prototype.toMIDIChannels=function(channel){var channels;if("all"===channel||void 0===channel)channels=["all"];else{if("none"===channel)return channels=[];channels=Array.isArray(channel)?channel:[channel];}return -1<channels.indexOf("all")&&(channels=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),channels.map(function(ch){return parseInt(ch)}).filter(function(ch){return 1<=ch&&ch<=16})},WebMidi.prototype.getInputById=function(id){if(!this.enabled)throw new Error("WebMidi is not enabled.");id=String(id);for(var i=0;i<this.inputs.length;i++)if(this.inputs[i].id===id)return this.inputs[i];return !1},WebMidi.prototype.getOutputById=function(id){if(!this.enabled)throw new Error("WebMidi is not enabled.");id=String(id);for(var i=0;i<this.outputs.length;i++)if(this.outputs[i].id===id)return this.outputs[i];return !1},WebMidi.prototype.getInputByName=function(name){if(!this.enabled)throw new Error("WebMidi is not enabled.");for(var i=0;i<this.inputs.length;i++)if(~this.inputs[i].name.indexOf(name))return this.inputs[i];return !1},WebMidi.prototype.getOctave=function(number){if(null!=number&&0<=number&&number<=127)return Math.floor(Math.floor(number)/12-1)+Math.floor(wm.octaveOffset)},WebMidi.prototype.getOutputByName=function(name){if(!this.enabled)throw new Error("WebMidi is not enabled.");for(var i=0;i<this.outputs.length;i++)if(~this.outputs[i].name.indexOf(name))return this.outputs[i];return !1},WebMidi.prototype.guessNoteNumber=function(input){var output=!1;if(input&&input.toFixed&&0<=input&&input<=127?output=Math.round(input):0<=parseInt(input)&&parseInt(input)<=127?output=parseInt(input):("string"==typeof input||input instanceof String)&&(output=this.noteNameToNumber(input)),!1===output)throw new Error("Invalid input value ("+input+").");return output},WebMidi.prototype.noteNameToNumber=function(name){"string"!=typeof name&&(name="");var matches=name.match(/([CDEFGAB])(#{0,2}|b{0,2})(-?\d+)/i);if(!matches)throw new RangeError("Invalid note name.");var semitones=wm._semitones[matches[1].toUpperCase()],result=12*(parseInt(matches[3])+1-Math.floor(wm.octaveOffset))+semitones;if(-1<matches[2].toLowerCase().indexOf("b")?result-=matches[2].length:-1<matches[2].toLowerCase().indexOf("#")&&(result+=matches[2].length),result<0||127<result)throw new RangeError("Invalid note name or note outside valid range.");return result},WebMidi.prototype._updateInputsAndOutputs=function(){this._updateInputs(),this._updateOutputs();},WebMidi.prototype._updateInputs=function(){for(var i=0;i<this._inputs.length;i++){for(var remove=!0,updated=this.interface.inputs.values(),input=updated.next();input&&!input.done;input=updated.next())if(this._inputs[i]._midiInput===input.value){remove=!1;break}remove&&this._inputs.splice(i,1);}this.interface&&this.interface.inputs.forEach(function(nInput){for(var add=!0,j=0;j<this._inputs.length;j++)this._inputs[j]._midiInput===nInput&&(add=!1);add&&this._inputs.push(new Input(nInput));}.bind(this));},WebMidi.prototype._updateOutputs=function(){for(var i=0;i<this._outputs.length;i++){for(var remove=!0,updated=this.interface.outputs.values(),output=updated.next();output&&!output.done;output=updated.next())if(this._outputs[i]._midiOutput===output.value){remove=!1;break}remove&&this._outputs.splice(i,1);}this.interface&&this.interface.outputs.forEach(function(nOutput){for(var add=!0,j=0;j<this._outputs.length;j++)this._outputs[j]._midiOutput===nOutput&&(add=!1);add&&this._outputs.push(new Output(nOutput));}.bind(this));},WebMidi.prototype._onInterfaceStateChange=function(e){this._updateInputsAndOutputs();var event={timestamp:e.timeStamp,type:e.port.state};this.interface&&"connected"===e.port.state?"output"===e.port.type?event.port=this.getOutputById(e.port.id):"input"===e.port.type&&(event.port=this.getInputById(e.port.id)):event.port={connection:"closed",id:e.port.id,manufacturer:e.port.manufacturer,name:e.port.name,state:e.port.state,type:e.port.type},this._userHandlers[e.port.state].forEach(function(handler){handler(event);});},WebMidi.prototype._resetInterfaceUserHandlers=function(){for(var i=0;i<this._midiInterfaceEvents.length;i++)this._userHandlers[this._midiInterfaceEvents[i]]=[];},Input.prototype.on=Input.prototype.addListener=function(type,channel,listener){var that=this;if(void 0===channel&&(channel="all"),Array.isArray(channel)||(channel=[channel]),channel.forEach(function(item){if("all"!==item&&!(1<=item&&item<=16))throw new RangeError("The 'channel' parameter is invalid.")}),"function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(void 0!==wm.MIDI_SYSTEM_MESSAGES[type])this._userHandlers.system[type]||(this._userHandlers.system[type]=[]),this._userHandlers.system[type].push(listener);else{if(void 0===wm.MIDI_CHANNEL_MESSAGES[type])throw new TypeError("The specified event type is not supported.");if(-1<channel.indexOf("all")){channel=[];for(var j=1;j<=16;j++)channel.push(j);}this._userHandlers.channel[type]||(this._userHandlers.channel[type]=[]),channel.forEach(function(ch){that._userHandlers.channel[type][ch]||(that._userHandlers.channel[type][ch]=[]),that._userHandlers.channel[type][ch].push(listener);});}return this},Input.prototype.hasListener=function(type,channel,listener){var that=this;if("function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(void 0===channel&&(channel="all"),channel.constructor!==Array&&(channel=[channel]),void 0!==wm.MIDI_SYSTEM_MESSAGES[type]){for(var o=0;o<this._userHandlers.system[type].length;o++)if(this._userHandlers.system[type][o]===listener)return !0}else if(void 0!==wm.MIDI_CHANNEL_MESSAGES[type]){if(-1<channel.indexOf("all")){channel=[];for(var j=1;j<=16;j++)channel.push(j);}return !!this._userHandlers.channel[type]&&channel.every(function(chNum){var listeners=that._userHandlers.channel[type][chNum];return listeners&&-1<listeners.indexOf(listener)})}return !1},Input.prototype.removeListener=function(type,channel,listener){var that=this;if(void 0!==listener&&"function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(void 0===channel&&(channel="all"),channel.constructor!==Array&&(channel=[channel]),void 0!==wm.MIDI_SYSTEM_MESSAGES[type])if(void 0===listener)this._userHandlers.system[type]=[];else for(var o=0;o<this._userHandlers.system[type].length;o++)this._userHandlers.system[type][o]===listener&&this._userHandlers.system[type].splice(o,1);else if(void 0!==wm.MIDI_CHANNEL_MESSAGES[type]){if(-1<channel.indexOf("all")){channel=[];for(var j=1;j<=16;j++)channel.push(j);}if(!this._userHandlers.channel[type])return this;channel.forEach(function(chNum){var listeners=that._userHandlers.channel[type][chNum];if(listeners)if(void 0===listener)that._userHandlers.channel[type][chNum]=[];else for(var l=0;l<listeners.length;l++)listeners[l]===listener&&listeners.splice(l,1);});}else{if(void 0!==type)throw new TypeError("The specified event type is not supported.");this._initializeUserHandlers();}return this},Input.prototype._initializeUserHandlers=function(){for(var prop1 in wm.MIDI_CHANNEL_MESSAGES)wm.MIDI_CHANNEL_MESSAGES.hasOwnProperty(prop1)&&(this._userHandlers.channel[prop1]={});for(var prop2 in wm.MIDI_SYSTEM_MESSAGES)wm.MIDI_SYSTEM_MESSAGES.hasOwnProperty(prop2)&&(this._userHandlers.system[prop2]=[]);},Input.prototype._onMidiMessage=function(e){if(0<this._userHandlers.system.midimessage.length){var event={target:this,data:e.data,timestamp:e.timeStamp,type:"midimessage"};this._userHandlers.system.midimessage.forEach(function(callback){callback(event);});}e.data[0]<240?(this._parseChannelEvent(e),this._parseNrpnEvent(e)):e.data[0]<=255&&this._parseSystemEvent(e);},Input.prototype._parseNrpnEvent=function(e){var data1,data2,command=e.data[0]>>4,channelBufferIndex=15&e.data[0],channel=1+channelBufferIndex;if(1<e.data.length&&(data1=e.data[1],data2=2<e.data.length?e.data[2]:void 0),wm.nrpnEventsEnabled&&command===wm.MIDI_CHANNEL_MESSAGES.controlchange&&(data1>=wm.MIDI_NRPN_MESSAGES.increment&&data1<=wm.MIDI_NRPN_MESSAGES.parammsb||data1===wm.MIDI_NRPN_MESSAGES.entrymsb||data1===wm.MIDI_NRPN_MESSAGES.entrylsb)){var ccEvent={target:this,type:"controlchange",data:e.data,timestamp:e.timeStamp,channel:channel,controller:{number:data1,name:this.getCcNameByNumber(data1)},value:data2};if(ccEvent.controller.number===wm.MIDI_NRPN_MESSAGES.parammsb&&ccEvent.value!=wm.MIDI_NRPN_MESSAGES.nullactiveparameter)wm._nrpnBuffer[channelBufferIndex]=[],wm._nrpnBuffer[channelBufferIndex][0]=ccEvent;else if(1===wm._nrpnBuffer[channelBufferIndex].length&&ccEvent.controller.number===wm.MIDI_NRPN_MESSAGES.paramlsb)wm._nrpnBuffer[channelBufferIndex].push(ccEvent);else if(2!==wm._nrpnBuffer[channelBufferIndex].length||ccEvent.controller.number!==wm.MIDI_NRPN_MESSAGES.increment&&ccEvent.controller.number!==wm.MIDI_NRPN_MESSAGES.decrement&&ccEvent.controller.number!==wm.MIDI_NRPN_MESSAGES.entrymsb)if(3===wm._nrpnBuffer[channelBufferIndex].length&&wm._nrpnBuffer[channelBufferIndex][2].number===wm.MIDI_NRPN_MESSAGES.entrymsb&&ccEvent.controller.number===wm.MIDI_NRPN_MESSAGES.entrylsb)wm._nrpnBuffer[channelBufferIndex].push(ccEvent);else if(3<=wm._nrpnBuffer[channelBufferIndex].length&&wm._nrpnBuffer[channelBufferIndex].length<=4&&ccEvent.controller.number===wm.MIDI_NRPN_MESSAGES.parammsb&&ccEvent.value===wm.MIDI_NRPN_MESSAGES.nullactiveparameter)wm._nrpnBuffer[channelBufferIndex].push(ccEvent);else if(4<=wm._nrpnBuffer[channelBufferIndex].length&&wm._nrpnBuffer[channelBufferIndex].length<=5&&ccEvent.controller.number===wm.MIDI_NRPN_MESSAGES.paramlsb&&ccEvent.value===wm.MIDI_NRPN_MESSAGES.nullactiveparameter){wm._nrpnBuffer[channelBufferIndex].push(ccEvent);var rawData=[];wm._nrpnBuffer[channelBufferIndex].forEach(function(ev){rawData.push(ev.data);});var nrpnNumber=wm._nrpnBuffer[channelBufferIndex][0].value<<7|wm._nrpnBuffer[channelBufferIndex][1].value,nrpnValue=wm._nrpnBuffer[channelBufferIndex][2].value;6===wm._nrpnBuffer[channelBufferIndex].length&&(nrpnValue=wm._nrpnBuffer[channelBufferIndex][2].value<<7|wm._nrpnBuffer[channelBufferIndex][3].value);var nrpnControllerType="";switch(wm._nrpnBuffer[channelBufferIndex][2].controller.number){case wm.MIDI_NRPN_MESSAGES.entrymsb:nrpnControllerType=wm._nrpnTypes[0];break;case wm.MIDI_NRPN_MESSAGES.increment:nrpnControllerType=wm._nrpnTypes[1];break;case wm.MIDI_NRPN_MESSAGES.decrement:nrpnControllerType=wm._nrpnTypes[2];break;default:throw new Error("The NPRN type was unidentifiable.")}var nrpnEvent={timestamp:ccEvent.timestamp,channel:ccEvent.channel,type:"nrpn",data:rawData,controller:{number:nrpnNumber,type:nrpnControllerType,name:"Non-Registered Parameter "+nrpnNumber},value:nrpnValue};wm._nrpnBuffer[channelBufferIndex]=[],this._userHandlers.channel[nrpnEvent.type]&&this._userHandlers.channel[nrpnEvent.type][nrpnEvent.channel]&&this._userHandlers.channel[nrpnEvent.type][nrpnEvent.channel].forEach(function(callback){callback(nrpnEvent);});}else wm._nrpnBuffer[channelBufferIndex]=[];else wm._nrpnBuffer[channelBufferIndex].push(ccEvent);}},Input.prototype._parseChannelEvent=function(e){var data1,data2,command=e.data[0]>>4,channel=1+(15&e.data[0]);1<e.data.length&&(data1=e.data[1],data2=2<e.data.length?e.data[2]:void 0);var event={target:this,data:e.data,timestamp:e.timeStamp,channel:channel};command===wm.MIDI_CHANNEL_MESSAGES.noteoff||command===wm.MIDI_CHANNEL_MESSAGES.noteon&&0===data2?(event.type="noteoff",event.note={number:data1,name:wm._notes[data1%12],octave:wm.getOctave(data1)},event.velocity=data2/127,event.rawVelocity=data2):command===wm.MIDI_CHANNEL_MESSAGES.noteon?(event.type="noteon",event.note={number:data1,name:wm._notes[data1%12],octave:wm.getOctave(data1)},event.velocity=data2/127,event.rawVelocity=data2):command===wm.MIDI_CHANNEL_MESSAGES.keyaftertouch?(event.type="keyaftertouch",event.note={number:data1,name:wm._notes[data1%12],octave:wm.getOctave(data1)},event.value=data2/127):command===wm.MIDI_CHANNEL_MESSAGES.controlchange&&0<=data1&&data1<=119?(event.type="controlchange",event.controller={number:data1,name:this.getCcNameByNumber(data1)},event.value=data2):command===wm.MIDI_CHANNEL_MESSAGES.channelmode&&120<=data1&&data1<=127?(event.type="channelmode",event.controller={number:data1,name:this.getChannelModeByNumber(data1)},event.value=data2):command===wm.MIDI_CHANNEL_MESSAGES.programchange?(event.type="programchange",event.value=data1):command===wm.MIDI_CHANNEL_MESSAGES.channelaftertouch?(event.type="channelaftertouch",event.value=data1/127):command===wm.MIDI_CHANNEL_MESSAGES.pitchbend?(event.type="pitchbend",event.value=((data2<<7)+data1-8192)/8192):event.type="unknownchannelmessage",this._userHandlers.channel[event.type]&&this._userHandlers.channel[event.type][channel]&&this._userHandlers.channel[event.type][channel].forEach(function(callback){callback(event);});},Input.prototype.getCcNameByNumber=function(number){if(!(0<=(number=Math.floor(number))&&number<=119))throw new RangeError("The control change number must be between 0 and 119.");for(var cc in wm.MIDI_CONTROL_CHANGE_MESSAGES)if(wm.MIDI_CONTROL_CHANGE_MESSAGES.hasOwnProperty(cc)&&number===wm.MIDI_CONTROL_CHANGE_MESSAGES[cc])return cc},Input.prototype.getChannelModeByNumber=function(number){if(!(120<=(number=Math.floor(number))&&status<=127))throw new RangeError("The control change number must be between 120 and 127.");for(var cm in wm.MIDI_CHANNEL_MODE_MESSAGES)if(wm.MIDI_CHANNEL_MODE_MESSAGES.hasOwnProperty(cm)&&number===wm.MIDI_CHANNEL_MODE_MESSAGES[cm])return cm},Input.prototype._parseSystemEvent=function(e){var command=e.data[0],event={target:this,data:e.data,timestamp:e.timeStamp};command===wm.MIDI_SYSTEM_MESSAGES.sysex?event.type="sysex":command===wm.MIDI_SYSTEM_MESSAGES.timecode?event.type="timecode":command===wm.MIDI_SYSTEM_MESSAGES.songposition?event.type="songposition":command===wm.MIDI_SYSTEM_MESSAGES.songselect?(event.type="songselect",event.song=e.data[1]):command===wm.MIDI_SYSTEM_MESSAGES.tuningrequest?event.type="tuningrequest":command===wm.MIDI_SYSTEM_MESSAGES.clock?event.type="clock":command===wm.MIDI_SYSTEM_MESSAGES.start?event.type="start":command===wm.MIDI_SYSTEM_MESSAGES.continue?event.type="continue":command===wm.MIDI_SYSTEM_MESSAGES.stop?event.type="stop":command===wm.MIDI_SYSTEM_MESSAGES.activesensing?event.type="activesensing":command===wm.MIDI_SYSTEM_MESSAGES.reset?event.type="reset":event.type="unknownsystemmessage",this._userHandlers.system[event.type]&&this._userHandlers.system[event.type].forEach(function(callback){callback(event);});},Output.prototype.send=function(status,data,timestamp){if(!(128<=status&&status<=255))throw new RangeError("The status byte must be an integer between 128 (0x80) and 255 (0xFF).");void 0===data&&(data=[]),Array.isArray(data)||(data=[data]);var message=[];return data.forEach(function(item){var parsed=Math.floor(item);if(!(0<=parsed&&parsed<=255))throw new RangeError("Data bytes must be integers between 0 (0x00) and 255 (0xFF).");message.push(parsed);}),this._midiOutput.send([status].concat(message),parseFloat(timestamp)||0),this},Output.prototype.sendSysex=function(manufacturer,data,options){if(!wm.sysexEnabled)throw new Error("Sysex message support must first be activated.");return options=options||{},manufacturer=[].concat(manufacturer),data.forEach(function(item){if(item<0||127<item)throw new RangeError("The data bytes of a sysex message must be integers between 0 (0x00) and 127 (0x7F).")}),data=manufacturer.concat(data,wm.MIDI_SYSTEM_MESSAGES.sysexend),this.send(wm.MIDI_SYSTEM_MESSAGES.sysex,data,this._parseTimeParameter(options.time)),this},Output.prototype.sendTimecodeQuarterFrame=function(value,options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.timecode,value,this._parseTimeParameter(options.time)),this},Output.prototype.sendSongPosition=function(value,options){options=options||{};var msb=(value=Math.floor(value)||0)>>7&127,lsb=127&value;return this.send(wm.MIDI_SYSTEM_MESSAGES.songposition,[msb,lsb],this._parseTimeParameter(options.time)),this},Output.prototype.sendSongSelect=function(value,options){if(options=options||{},!(0<=(value=Math.floor(value))&&value<=127))throw new RangeError("The song number must be between 0 and 127.");return this.send(wm.MIDI_SYSTEM_MESSAGES.songselect,[value],this._parseTimeParameter(options.time)),this},Output.prototype.sendTuningRequest=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.tuningrequest,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendClock=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.clock,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendStart=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.start,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendContinue=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.continue,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendStop=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.stop,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendActiveSensing=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.activesensing,[],this._parseTimeParameter(options.time)),this},Output.prototype.sendReset=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.reset,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.stopNote=function(note,channel,options){if("all"===note)return this.sendChannelMode("allnotesoff",0,channel,options);var nVelocity=64;return (options=options||{}).rawVelocity?!isNaN(options.velocity)&&0<=options.velocity&&options.velocity<=127&&(nVelocity=options.velocity):!isNaN(options.velocity)&&0<=options.velocity&&options.velocity<=1&&(nVelocity=127*options.velocity),this._convertNoteToArray(note).forEach(function(item){wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.noteoff<<4)+(ch-1),[item,Math.round(nVelocity)],this._parseTimeParameter(options.time));}.bind(this));}.bind(this)),this},Output.prototype.playNote=function(note,channel,options){var time,nVelocity=64;if((options=options||{}).rawVelocity?!isNaN(options.velocity)&&0<=options.velocity&&options.velocity<=127&&(nVelocity=options.velocity):!isNaN(options.velocity)&&0<=options.velocity&&options.velocity<=1&&(nVelocity=127*options.velocity),time=this._parseTimeParameter(options.time),this._convertNoteToArray(note).forEach(function(item){wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.noteon<<4)+(ch-1),[item,Math.round(nVelocity)],time);}.bind(this));}.bind(this)),!isNaN(options.duration)){options.duration<=0&&(options.duration=0);var nRelease=64;options.rawVelocity?!isNaN(options.release)&&0<=options.release&&options.release<=127&&(nRelease=options.release):!isNaN(options.release)&&0<=options.release&&options.release<=1&&(nRelease=127*options.release),this._convertNoteToArray(note).forEach(function(item){wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.noteoff<<4)+(ch-1),[item,Math.round(nRelease)],(time||wm.time)+options.duration);}.bind(this));}.bind(this));}return this},Output.prototype.sendKeyAftertouch=function(note,channel,pressure,options){var that=this;if(options=options||{},channel<1||16<channel)throw new RangeError("The channel must be between 1 and 16.");(isNaN(pressure)||pressure<0||1<pressure)&&(pressure=.5);var nPressure=Math.round(127*pressure);return this._convertNoteToArray(note).forEach(function(item){wm.toMIDIChannels(channel).forEach(function(ch){that.send((wm.MIDI_CHANNEL_MESSAGES.keyaftertouch<<4)+(ch-1),[item,nPressure],that._parseTimeParameter(options.time));});}),this},Output.prototype.sendControlChange=function(controller,value,channel,options){if(options=options||{},"string"==typeof controller){if(void 0===(controller=wm.MIDI_CONTROL_CHANGE_MESSAGES[controller]))throw new TypeError("Invalid controller name.")}else if(!(0<=(controller=Math.floor(controller))&&controller<=119))throw new RangeError("Controller numbers must be between 0 and 119.");if(!(0<=(value=Math.floor(value)||0)&&value<=127))throw new RangeError("Controller value must be between 0 and 127.");return wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.controlchange<<4)+(ch-1),[controller,value],this._parseTimeParameter(options.time));}.bind(this)),this},Output.prototype._selectRegisteredParameter=function(parameter,channel,time){var that=this;if(parameter[0]=Math.floor(parameter[0]),!(0<=parameter[0]&&parameter[0]<=127))throw new RangeError("The control65 value must be between 0 and 127");if(parameter[1]=Math.floor(parameter[1]),!(0<=parameter[1]&&parameter[1]<=127))throw new RangeError("The control64 value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(){that.sendControlChange(101,parameter[0],channel,{time:time}),that.sendControlChange(100,parameter[1],channel,{time:time});}),this},Output.prototype._selectNonRegisteredParameter=function(parameter,channel,time){var that=this;if(parameter[0]=Math.floor(parameter[0]),!(0<=parameter[0]&&parameter[0]<=127))throw new RangeError("The control63 value must be between 0 and 127");if(parameter[1]=Math.floor(parameter[1]),!(0<=parameter[1]&&parameter[1]<=127))throw new RangeError("The control62 value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(){that.sendControlChange(99,parameter[0],channel,{time:time}),that.sendControlChange(98,parameter[1],channel,{time:time});}),this},Output.prototype._setCurrentRegisteredParameter=function(data,channel,time){var that=this;if((data=[].concat(data))[0]=Math.floor(data[0]),!(0<=data[0]&&data[0]<=127))throw new RangeError("The msb value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(){that.sendControlChange(6,data[0],channel,{time:time});}),data[1]=Math.floor(data[1]),0<=data[1]&&data[1]<=127&&wm.toMIDIChannels(channel).forEach(function(){that.sendControlChange(38,data[1],channel,{time:time});}),this},Output.prototype._deselectRegisteredParameter=function(channel,time){var that=this;return wm.toMIDIChannels(channel).forEach(function(){that.sendControlChange(101,127,channel,{time:time}),that.sendControlChange(100,127,channel,{time:time});}),this},Output.prototype.setRegisteredParameter=function(parameter,data,channel,options){var that=this;if(options=options||{},!Array.isArray(parameter)){if(!wm.MIDI_REGISTERED_PARAMETER[parameter])throw new Error("The specified parameter is not available.");parameter=wm.MIDI_REGISTERED_PARAMETER[parameter];}return wm.toMIDIChannels(channel).forEach(function(){that._selectRegisteredParameter(parameter,channel,options.time),that._setCurrentRegisteredParameter(data,channel,options.time),that._deselectRegisteredParameter(channel,options.time);}),this},Output.prototype.setNonRegisteredParameter=function(parameter,data,channel,options){var that=this;if(options=options||{},!(0<=parameter[0]&&parameter[0]<=127&&0<=parameter[1]&&parameter[1]<=127))throw new Error("Position 0 and 1 of the 2-position parameter array must both be between 0 and 127.");return data=[].concat(data),wm.toMIDIChannels(channel).forEach(function(){that._selectNonRegisteredParameter(parameter,channel,options.time),that._setCurrentRegisteredParameter(data,channel,options.time),that._deselectRegisteredParameter(channel,options.time);}),this},Output.prototype.incrementRegisteredParameter=function(parameter,channel,options){var that=this;if(options=options||{},!Array.isArray(parameter)){if(!wm.MIDI_REGISTERED_PARAMETER[parameter])throw new Error("The specified parameter is not available.");parameter=wm.MIDI_REGISTERED_PARAMETER[parameter];}return wm.toMIDIChannels(channel).forEach(function(){that._selectRegisteredParameter(parameter,channel,options.time),that.sendControlChange(96,0,channel,{time:options.time}),that._deselectRegisteredParameter(channel,options.time);}),this},Output.prototype.decrementRegisteredParameter=function(parameter,channel,options){if(options=options||{},!Array.isArray(parameter)){if(!wm.MIDI_REGISTERED_PARAMETER[parameter])throw new TypeError("The specified parameter is not available.");parameter=wm.MIDI_REGISTERED_PARAMETER[parameter];}return wm.toMIDIChannels(channel).forEach(function(){this._selectRegisteredParameter(parameter,channel,options.time),this.sendControlChange(97,0,channel,{time:options.time}),this._deselectRegisteredParameter(channel,options.time);}.bind(this)),this},Output.prototype.setPitchBendRange=function(semitones,cents,channel,options){var that=this;if(options=options||{},!(0<=(semitones=Math.floor(semitones)||0)&&semitones<=127))throw new RangeError("The semitones value must be between 0 and 127");if(!(0<=(cents=Math.floor(cents)||0)&&cents<=127))throw new RangeError("The cents value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(){that.setRegisteredParameter("pitchbendrange",[semitones,cents],channel,{time:options.time});}),this},Output.prototype.setModulationRange=function(semitones,cents,channel,options){var that=this;if(options=options||{},!(0<=(semitones=Math.floor(semitones)||0)&&semitones<=127))throw new RangeError("The semitones value must be between 0 and 127");if(!(0<=(cents=Math.floor(cents)||0)&&cents<=127))throw new RangeError("The cents value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(){that.setRegisteredParameter("modulationrange",[semitones,cents],channel,{time:options.time});}),this},Output.prototype.setMasterTuning=function(value,channel,options){var that=this;if(options=options||{},(value=parseFloat(value)||0)<=-65||64<=value)throw new RangeError("The value must be a decimal number larger than -65 and smaller than 64.");var coarse=Math.floor(value)+64,fine=value-Math.floor(value),msb=(fine=Math.round((fine+1)/2*16383))>>7&127,lsb=127&fine;return wm.toMIDIChannels(channel).forEach(function(){that.setRegisteredParameter("channelcoarsetuning",coarse,channel,{time:options.time}),that.setRegisteredParameter("channelfinetuning",[msb,lsb],channel,{time:options.time});}),this},Output.prototype.setTuningProgram=function(value,channel,options){var that=this;if(options=options||{},!(0<=(value=Math.floor(value))&&value<=127))throw new RangeError("The program value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(){that.setRegisteredParameter("tuningprogram",value,channel,{time:options.time});}),this},Output.prototype.setTuningBank=function(value,channel,options){var that=this;if(options=options||{},!(0<=(value=Math.floor(value)||0)&&value<=127))throw new RangeError("The bank value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(){that.setRegisteredParameter("tuningbank",value,channel,{time:options.time});}),this},Output.prototype.sendChannelMode=function(command,value,channel,options){if(options=options||{},"string"==typeof command){if(!(command=wm.MIDI_CHANNEL_MODE_MESSAGES[command]))throw new TypeError("Invalid channel mode message name.")}else if(!(120<=(command=Math.floor(command))&&command<=127))throw new RangeError("Channel mode numerical identifiers must be between 120 and 127.");if((value=Math.floor(value)||0)<0||127<value)throw new RangeError("Value must be an integer between 0 and 127.");return wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.channelmode<<4)+(ch-1),[command,value],this._parseTimeParameter(options.time));}.bind(this)),this},Output.prototype.sendProgramChange=function(program,channel,options){var that=this;if(options=options||{},program=Math.floor(program),isNaN(program)||program<0||127<program)throw new RangeError("Program numbers must be between 0 and 127.");return wm.toMIDIChannels(channel).forEach(function(ch){that.send((wm.MIDI_CHANNEL_MESSAGES.programchange<<4)+(ch-1),[program],that._parseTimeParameter(options.time));}),this},Output.prototype.sendChannelAftertouch=function(pressure,channel,options){var that=this;options=options||{},pressure=parseFloat(pressure),(isNaN(pressure)||pressure<0||1<pressure)&&(pressure=.5);var nPressure=Math.round(127*pressure);return wm.toMIDIChannels(channel).forEach(function(ch){that.send((wm.MIDI_CHANNEL_MESSAGES.channelaftertouch<<4)+(ch-1),[nPressure],that._parseTimeParameter(options.time));}),this},Output.prototype.sendPitchBend=function(bend,channel,options){var that=this;if(options=options||{},isNaN(bend)||bend<-1||1<bend)throw new RangeError("Pitch bend value must be between -1 and 1.");var nLevel=Math.round((bend+1)/2*16383),msb=nLevel>>7&127,lsb=127&nLevel;return wm.toMIDIChannels(channel).forEach(function(ch){that.send((wm.MIDI_CHANNEL_MESSAGES.pitchbend<<4)+(ch-1),[lsb,msb],that._parseTimeParameter(options.time));}),this},Output.prototype._parseTimeParameter=function(time){var value,parsed=parseFloat(time);return "string"==typeof time&&"+"===time.substring(0,1)?parsed&&0<parsed&&(value=wm.time+parsed):parsed>wm.time&&(value=parsed),value},Output.prototype._convertNoteToArray=function(note){var notes=[];return Array.isArray(note)||(note=[note]),note.forEach(function(item){notes.push(wm.guessNoteNumber(item));}),notes},module.exports?module.exports=wm:scope.WebMidi||(scope.WebMidi=wm);}(_commonjsHelpers.commonjsGlobal);
});

const WebAudio = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.name = "web_audio";
        this.prepared = false;
        this.midi = false;
        this.sources = [];
        this.keys = {};
    }
    async source(name) {
        if (this.sources.length === 0) {
            await this.connect_the_world();
        }
        return this.sources[name];
    }
    async get_context() {
        return this.context;
    }
    async is_prepared() {
        return this.prepared;
    }
    async stop() {
        return await index$1.asyncForEach(this.sources, async (source) => {
            await source.stop();
        });
    }
    /******************
     * Private behavior
     **/
    componentDidLoad() {
        this.connect_debugger();
    }
    async connect_the_world() {
        this.connect_context();
        this.gain = this.context.createGain();
        await this.connect_visualizers();
        await this.connect_sources();
        await this.connect_midi();
        this.prepared = true;
        await helpers.delay(500);
        return true;
    }
    connect_context() {
        // @ts-ignore
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        this.log("Connected to this.context");
    }
    async connect_sources() {
        await this.build_sources();
    }
    async build_sources() {
        this.log("Building sources");
        this._sources = Array.from(this.element.querySelectorAll('web-audio-source'));
        this.externalFiles = [];
        await index$1.asyncForEach(this._sources, async (source, index) => {
            // @ts-ignore
            this.log(`(${index}) Preparing ${source.name}`);
            // @ts-ignore
            this.sources[source.name] = source;
            // @ts-ignore
            let bufferLoader = new BufferLoader(this.context, [source.src], async (bufferList) => {
                await this.cache_sources(bufferList, source);
            });
            await bufferLoader.load();
        });
    }
    async cache_sources(bufferList, source) {
        await index$1.asyncForEach(bufferList, async (item) => {
            this.log(`Caching ${source.name}`);
            if (this.midi) {
                this.log(`Assigned ${source.name} to midi key ${source.midikey}, channel ${source.midichannel}`);
                if (this.keys[source.midichannel] == undefined) {
                    this.keys[source.midichannel] = [];
                }
                this.keys[source.midichannel][source.midikey] = source;
            }
            this._currentSource = source;
            await this._currentSource.assignBuffer(this, item);
            this.log(`Source ${source.name} is ready`);
        });
        this._currentSource = null;
    }
    async connect_visualizers() {
        await helpers.delay(20);
        // @ts-ignore
        this.visualizers = Array.from(document.querySelectorAll(`web-audio-visualizer[for="${this.name}"]`));
        if (this.visualizers) {
            this.log(`Attaching visualizers`);
            await index$1.asyncForEach(this.visualizers, async (visualizer, index) => {
                if (index === 0) {
                    visualizer = await visualizer.connect(this.context, this.context.destination);
                }
                else {
                    visualizer = await visualizer.connect(this.context, this.previousVisualizer.analyser);
                }
                this.previousVisualizer = visualizer;
            });
        }
        else {
            this.log(`No visualizers for ${this.name}`);
        }
        if (this.visualizers.length >= 1) {
            await this.gain.connect(this.previousVisualizer.analyser);
        }
        else {
            await this.gain.connect(this.context.destination);
        }
    }
    connect_debugger() {
        this.debugger = document.querySelector(`web-audio-debugger[for="${this.name}"]`);
        this.log("Connected debugger");
    }
    log(string) {
        if (this.debugger) {
            this.debugger.addHistory(string);
        }
    }
    connect_midi() {
        if (this.midi) {
            webmidi_min.enable((err) => {
                if (err) {
                    this.log("Midi couldn't be enabled." + err);
                }
                else {
                    this.log("Midi is enabled");
                }
                var input = webmidi_min.inputs[0];
                if (input) {
                    input.addListener('noteon', 'all', (e) => {
                        this.log(`KEY: Channel: ${e.channel}, Note: ${e.note.number}, Name: ${e.note.name}, Oct: ${e.note.octave}`);
                        if (this.keys[e.channel]) {
                            this.keys[e.channel][e.note.number].gain().value = (e.data[2] / 175);
                            this.keys[e.channel][e.note.number].play();
                        }
                    });
                    input.addListener('pitchbend', 'all', (e) => {
                        this.log(`PITCH: Channel: ${e.channel}, Value: ${e.value}`);
                    });
                    // Listen to control change message on all channels
                    input.addListener('controlchange', 'all', (e) => {
                        this.log(`CTRL: Channel: ${e.channel}, controller: ${e.controller.number}, Value: ${e.value}`);
                        var event = new CustomEvent('midi-controller-update', { detail: e });
                        document.dispatchEvent(event);
                    });
                    this.log("Listeners added for notes, pitch bend, and controllers.");
                }
            });
        }
    }
    get element() { return core.getElement(this); }
};

const WebAudioSequencer = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.name = "web_audio_sequencer";
        this.autoplay = false;
        this.taps = 4;
        this.context = async () => {
            // @ts-ignore
            return await document.querySelector('web-audio').get_context();
        };
        this.noteTime = 0.0;
        this.currentTap = 0;
        this.totalPlayTime = 0.0;
        this.custom = async () => { };
    }
    componentDidLoad() {
        if (this.autoplay) {
            this.play();
        }
    }
    async schedule() {
        var currentTime = (await this.context()).currentTime;
        // The sequence starts at startTime, so normalize currentTime so that it's 0 at the start of the sequence.
        currentTime -= this.startTime;
        while (this.noteTime < currentTime + 0.005) {
            try {
                await this.custom();
                this.totalPlayTime = this.noteTime + this.startTime;
                if (this.currentTap === 0) {
                    this.iterations++;
                }
                this.advance();
            }
            catch (e) {
                console.error(e);
            }
        }
        this.timer = setTimeout(async () => {
            await this.schedule();
        }, 0);
    }
    advance() {
        // Setting tempo to 60 BPM just for now
        var secondsPerBeat = 60 / this.tempo;
        this.currentTap++;
        if (this.currentTap == this.taps) {
            this.currentTap = 0;
        }
        // 0.25 because each square is a 16th note
        this.noteTime += 0.25 * secondsPerBeat;
    }
    async play() {
        if (!(await this.context())) {
            // @ts-ignore
            await document.querySelector('web-audio').connect_the_world();
        }
        this.iterations = 0;
        this.startTime = (await this.context()).currentTime + 0.005 || 0.005;
        await this.schedule();
    }
    async stop() {
        this.iterations = 0;
        this.totalPlayTime = 0;
        this.startTime = null;
        this.currentTap = 0;
        this.noteTime = 0;
        clearTimeout(this.timer);
    }
};

const WebAudioSource = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.inert = false;
        this.midikey = 0;
        this.midichannel = 1;
        this.prepared = false;
        this.status = "paused";
        this.effectsvolume = 100;
        this.effects = [];
        this.instances = [];
        this.duration = 0.0;
        this.startTime = 0.0;
        this.pausedTime = 0.0;
        this.elapsedTime = 0.0;
        this.playing = false;
        this.update = core.createEvent(this, "update", 7);
    }
    async getBuffer() {
        return this.buffer;
    }
    async webAudio() {
        return this.webAudioWrapper;
    }
    async gain(place = "wet") {
        if (place === "wet") {
            return this.wetGain;
        }
        else if (place === "dry") {
            return this.dryGain;
        }
        else if (place === "channel") {
            return this.channelGain;
        }
    }
    async getDuration() {
        return this.duration;
    }
    currentTime() {
        let current = 0;
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
    }
    ;
    async prepare() {
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
    }
    async play() {
        if (!this.inert) {
            await this.prepare();
            if (this.source) {
                this.source.start(0, this.pausedTime);
                this.startTime = this.context.currentTime - this.pausedTime;
                this.pausedTime = 0;
                this.playing = true;
                this.tick();
                index$2.raf(() => { this.tick(); });
            }
        }
        else {
            throw "Cannot play inert media.";
        }
    }
    async skipTo(time) {
        await this.stop();
        this.pausedTime = time / 1000;
        await this.play();
    }
    async pause() {
        this.elapsedTime = this.context.currentTime - this.startTime;
        await this.stop();
        this.pausedTime = this.elapsedTime;
        this.playing = false;
    }
    async toggle() {
        if (this.playing) {
            await this.pause();
        }
        else {
            await this.play();
        }
    }
    async stop() {
        if (this.source) {
            await this.source.disconnect();
            await this.source.stop();
        }
        this.source = null;
        this.pausedTime = 0;
        this.startTime = 0;
        this.playing = false;
    }
    tick() {
        this.update.emit({
            time: this.currentTime(),
            duration: this.duration
        });
        if (this.source) {
            index$2.raf(() => { this.tick(); });
        }
    }
    async assignBuffer(webAudio, buffer) {
        this.webAudioWrapper = webAudio.element;
        this.context = webAudio.context;
        this.buffer = buffer;
        if (!this.inert) {
            this.masterGain = webAudio.gain;
            this.channelGain = this.context.createGain();
            await this.prepareEffects();
            if (Object.keys(this.effects).length > 0) {
                // Make the source and gain
                this.wetGain = this.context.createGain();
                let previous = "";
                Object.keys(this.effects).reverse().forEach((element, index) => {
                    if (index === 0) {
                        this.wetGain.connect(this.effects[element]);
                    }
                    else {
                        this.effects[previous].connect(this.effects[element]);
                    }
                    previous = element;
                });
                this.effects[previous].connect(this.channelGain);
            }
            this.dryGain = this.context.createGain();
            this.dryGain.connect(this.channelGain);
            this.channelGain.connect(this.masterGain);
        }
    }
    async prepareEffects() {
        if (this.element.parentElement.nodeName !== "WEB-AUDIO") {
            let element = this.element.parentElement;
            while (element.nodeName !== "WEB-AUDIO") {
                this.effects[element.getAttribute("name")] = await element.attachEffect(this.context, this.element);
                element = element.parentElement;
            }
        }
    }
    get element() { return core.getElement(this); }
};

const bars = (arg) => {
    // Draw the frequency domain chart.
    for (var i = 0; i < arg.analyser.frequencyBinCount; i++) {
        var value = arg.freqs[i];
        var percent = value / 256;
        var height = (arg.height * percent) * 0.75;
        var offset = arg.height - height + 25;
        var barWidth = (arg.width / arg.analyser.frequencyBinCount) + 24;
        arg.canvasCTX.fillStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${percent * 100}%)`;
        arg.canvasCTX.fillRect(i * barWidth, offset, barWidth, height);
    }
};

var BAR_PAD = 4;
var BAR_WIDTH = 4;
var MAX_BARS = 70;
const bars2 = (arg) => {
    const values = arg.freqs;
    const canvas = arg.canvas;
    const ctx = arg.canvasCTX;
    var len = values.length - (~~(values.length / MAX_BARS) * 50);
    var normFac = arg.size;
    var maxValue = normFac;
    var istep = ~~(len / MAX_BARS);
    var step = canvas.width / MAX_BARS;
    var x = BAR_WIDTH;
    var height = (canvas.height - (BAR_PAD * 2));
    for (var i = 0; i < len; i += istep) {
        var v = (values[i] / maxValue);
        var h = v * height;
        var y = height / 2 - h / 2;
        ctx.beginPath();
        ctx.shadowColor = "rgba(24, 24, 24, 0.25)";
        ctx.shadowBlur = 8;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 2;
        ctx.strokeStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${arg._color[2]}%)`;
        ctx.lineWidth = BAR_WIDTH;
        ctx.lineCap = 'round';
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + h);
        ctx.stroke();
        x += step;
    }
};

/**
 *
 * Sound Math stuff
 *
 * Based on https://codepen.io/prakhar625/pen/zddKRj?editors=0010s
 *
*/
function avg(arr) {
    const total = arr.reduce((sum, b) => (sum + b));
    return (total / arr.length);
}

const RENDERED_OBJECTS = {
    BAR: {
        maxHeight: 250
    },
    CIRCLE: {
        radius: 100,
        width: 15
    }
};
const circle = (arg) => {
    const bufferLength = arg.analyser.frequencyBinCount;
    const avgBuffer = avg(arg.freqs);
    const lineWidth = avgBuffer < RENDERED_OBJECTS.CIRCLE.width ? RENDERED_OBJECTS.CIRCLE.width : avgBuffer;
    let rotation = 0;
    let cx = arg.width / 2;
    let cy = arg.height / 2;
    const rectLength = RENDERED_OBJECTS.CIRCLE.radius * 2 * Math.PI;
    let barWidth = (rectLength / bufferLength);
    arg.canvasCTX.beginPath();
    arg.canvasCTX.arc(cx, cy, RENDERED_OBJECTS.CIRCLE.radius, 0, Math.PI * 2);
    arg.canvasCTX.lineWidth = lineWidth;
    arg.canvasCTX.strokeStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${arg._color[2]}%)`;
    arg.canvasCTX.closePath();
    arg.canvasCTX.stroke();
    arg.canvasCTX.save();
    arg.canvasCTX.translate(cx, cy);
    for (var i = 0; i < arg.analyser.frequencyBinCount; i++) {
        const barHeight = arg.freqs[i];
        const fixedBarHeight = barHeight > RENDERED_OBJECTS.BAR.maxHeight ? RENDERED_OBJECTS.BAR.maxHeight : barHeight;
        arg.canvasCTX.rotate(rotation);
        arg.canvasCTX.fillStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${arg._color[2]}%)`;
        arg.canvasCTX.fillRect(RENDERED_OBJECTS.CIRCLE.radius + 100, (barWidth * -1) / 2, fixedBarHeight, barWidth);
        rotation = (rotation / (bufferLength + barWidth)) % 360 + 1;
    }
};

const wave = (arg) => {
    for (var i = 0; i < arg.analyser.frequencyBinCount; i++) {
        var value = arg.times[i];
        var percent = value / 512;
        var height = (arg.height * percent) * 1.25;
        var offset = arg.height - height;
        var barWidth = arg.width / arg.analyser.frequencyBinCount + 16;
        arg.canvasCTX.fillStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${arg._color[2]}%)`;
        arg.canvasCTX.fillRect(i * barWidth, offset, 24, 24);
    }
};

var rgbToHsl = _commonjsHelpers.createCommonjsModule(function (module) {
(function() {
  module.exports = function(r, g, b) {
    var d, h, l, max, min, s;
    r /= 255;
    g /= 255;
    b /= 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    h = 0;
    s = 0;
    l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
      }
      h /= 6;
    }
    h = Math.ceil(h * 360);
    s = (Math.ceil(s * 100)) + "%";
    l = (Math.ceil(l * 100)) + "%";
    return [h, s, l];
  };

}).call(_commonjsHelpers.commonjsGlobal);
});

var hexToRgb = function hexToRgb (hex) {

  if (hex.charAt && hex.charAt(0) === '#') {
    hex = removeHash(hex);
  }

  if (hex.length === 3) {
    hex = expand(hex);
  }

  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return [r, g, b]
};

function removeHash (hex) {

  var arr = hex.split('');
  arr.shift();
  return arr.join('')
}

function expand (hex) {

  return hex
    .split('')
    .reduce(function (accum, value) {

      return accum.concat([value, value])
    }, [])
    .join('')
}

var hexToHsl = function (hex) {
	var hsl = rgbToHsl.apply(rgbToHsl, hexToRgb(hex));
	return [hsl[0], parseInt(hsl[1], 10), parseInt(hsl[2], 10)];
};

const WebAudioVisualizer = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.for = "web_audio";
        this.type = "wave";
        this.smoothing = 0.7;
        this.size = 1024;
        this.color = "white";
        this.width = 1024;
        this.height = 1024;
        this.clearBackground = () => {
            this.canvasCTX.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.canvasCTX.fillStyle = "transparent";
            this.canvasCTX.fillRect(0, 0, this.canvas.width, this.canvas.height);
        };
    }
    componentWillLoad() {
        this.handleColorChange();
    }
    componentDidLoad() {
        this.canvas = this.element.shadowRoot.querySelector('canvas');
    }
    handleColorChange() {
        if (["white", "black", "black-alt"].includes(this.color)) {
            this._color = hexToHsl(index$1.colors[this.color]);
        }
        else {
            this._color = hexToHsl(index$1.colors[this.color][5]);
        }
    }
    async connect(context, destination) {
        this.context = context;
        this.analyser = this.context.createAnalyser();
        if (destination) {
            this.analyser.connect(destination);
        }
        this.freqs = new Uint8Array(this.analyser.frequencyBinCount);
        this.times = new Uint8Array(this.analyser.frequencyBinCount);
        this.canvasCTX = this.canvas.getContext('2d');
        requestAnimationFrame(this.draw.bind(this));
        return this;
    }
    draw() {
        this.analyser.smoothingTimeConstant = this.smoothing;
        this.analyser.fftSize = this.size;
        // Get the frequency data from the currently playing music
        this.analyser.getByteFrequencyData(this.freqs);
        this.analyser.getByteTimeDomainData(this.times);
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.clearBackground();
        if (this.type === "wave") {
            wave(this);
        }
        else if (this.type === "bars") {
            bars(this);
        }
        else if (this.type === "bars2") {
            bars2(this);
        }
        else if (this.type === "circle") {
            circle(this);
        }
        requestAnimationFrame(this.draw.bind(this));
    }
    getFrequencyValue(freq) {
        var nyquist = this.context.sampleRate / 2;
        var index = Math.round(freq / nyquist * this.freqs.length);
        return this.freqs[index];
    }
    render() {
        return (core.h("canvas", { id: "canvas" }));
    }
    get element() { return core.getElement(this); }
    static get watchers() { return {
        "color": ["handleColorChange"]
    }; }
    static get style() { return ":host,:host canvas{display:block}:host canvas{width:100%;height:100%}"; }
};

exports.context_consumer = ContextConsumer;
exports.stellar_asset = Asset;
exports.stellar_button = Button;
exports.stellar_icon = Icon;
exports.stencil_route_link = RouteLink;
exports.web_audio = WebAudio;
exports.web_audio_sequencer = WebAudioSequencer;
exports.web_audio_source = WebAudioSource;
exports.web_audio_visualizer = WebAudioVisualizer;
