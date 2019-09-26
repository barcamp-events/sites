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
import { r as registerInstance, h, g as getElement, e as createEvent } from './core-36452501.js';
import { b as blurringEase, c as colors } from './index-9d3b27e3.js';
import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-e9450bee.js';
var SkeletonImg = /** @class */ (function () {
    function SkeletonImg(hostRef) {
        registerInstance(this, hostRef);
        this.width = 600;
        this.height = 300;
        this.block = false;
        this.loading = false;
        this.icon = false;
    }
    SkeletonImg.prototype.componentWillLoad = function () {
        if (this.block)
            ;
        else {
            properties.set({
                '--width': this.width + "px",
                '--height': this.height + "px"
            }, this.element);
        }
    };
    SkeletonImg.prototype.in = function () {
        this.element.classList.add('visible');
    };
    SkeletonImg.prototype.out = function () {
        this.element.classList.remove('visible');
    };
    SkeletonImg.prototype.render = function () {
        return [
            this.loading && this.icon && h("stellar-asset", { name: "spinning-bubbles", color: "gray25" }),
            h("svg", { width: this.width, height: this.height }, h("rect", { width: this.width, height: this.height })),
            h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) })
        ];
    };
    Object.defineProperty(SkeletonImg.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkeletonImg, "style", {
        get: function () { return "skeleton-img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;display:block;position:relative;margin-bottom:1rem;border-radius:4px;overflow:hidden;max-width:var(--width);max-height:var(--height)}skeleton-img svg{display:block;width:100%;height:auto;overflow:hidden}skeleton-img svg rect{fill:var(--theme-base5)}skeleton-img[loading]{position:relative}skeleton-img[loading]:before{content:\"\";display:block;position:absolute;top:0;right:0;bottom:0;left:-100%;background-color:var(--theme-base5);background-image:linear-gradient(45deg,var(--theme-base5),var(--theme-base5) 20%,var(--theme-base3) 40%,var(--theme-base4) 61%,var(--theme-base5) 80%,var(--theme-base5));width:300%;height:100%;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}skeleton-img[loading].visible:before{-webkit-animation:shimmer 1.25s linear 0s infinite forwards;animation:shimmer 1.25s linear 0s infinite forwards}skeleton-img stellar-asset{position:absolute;top:50%;right:50%;bottom:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:var(--icon-width);height:var(--icon-height)}\@-webkit-keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}to{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}\@keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}to{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}"; },
        enumerable: true,
        configurable: true
    });
    return SkeletonImg;
}());
var Progress = /** @class */ (function () {
    function Progress(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * Renders if this element is slender or not
         */
        this.slender = false;
        /**
         * Sets the maximum cap for steps in the progress bar
         */
        this.max = 100;
        /**
         * Sets the maximum cap for steps in the progress bar
         */
        this.indeterminate = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        /**
         * Allows the progress bar to be clicked on, to help the user to navigate through the progressing content.
         */
        this.editable = false;
        /**
         * eliminates the easing in the css so you can apply value updates without jitter.
         */
        this.noease = false;
        /**
         * eliminates the easing in the css so you can apply value updates without jitter.
         */
        this.rounded = false;
        /**
         * Sets the value of the progress bar
         */
        this.value = 0;
        /**
         * Sets the value of the progress bar
         */
        this.secondary = 0;
        this.blurable = true;
        this.wrapper = "stellar-blur";
        this.blur = 0;
        this.ease = blurringEase({
            end: 20,
            start: -1,
            duration: 200,
            tick: function (args) {
                _this.blur = args.value;
            },
            complete: function () {
                _this.blur = 0;
                _this.ease.stop();
            },
        });
        this.update = createEvent(this, "update", 7);
    }
    Progress.prototype.componentWillLoad = function () {
        if (!this.blurable) {
            this.wrapper = "div";
        }
    };
    Progress.prototype.observeValue = function () {
        if (!this.indeterminate && this.blurable) {
            this.ease.start();
        }
    };
    Progress.prototype.handleClick = function (e) {
        if (this.editable) {
            var bounding = this.element.getBoundingClientRect();
            var widthClicked = e.pageX - bounding.left;
            var totalWidth = bounding.width;
            var calc = (widthClicked / totalWidth * this.max);
            var rounded = Math.round(calc * 1e2) / 1e2;
            if (this.rounded) {
                rounded = Math.ceil(rounded);
            }
            this.value = rounded;
            this.update.emit({
                value: this.value
            });
        }
    };
    Progress.prototype.progress = function (secondary) {
        if (secondary) {
            var progress = (this.secondary / this.max) * 100;
            progress = progress < 100 ? progress : 100;
            progress = progress > 0 ? progress : 0;
            return progress;
        }
        else {
            var progress = (this.value / this.max) * 100;
            progress = progress < 100 ? progress : 100;
            progress = progress > 0 ? progress : 0;
            return progress;
        }
    };
    Progress.prototype.render = function () {
        var _this = this;
        if (this.indeterminate) {
            return h("svg", { viewBox: "0 0 100 100" }, h("circle", { cx: "50", cy: "50", r: "20", "stroke-width": "4", fill: "none", "stroke-linecap": "round" }));
        }
        // @ts-ignore
        return (h(this.wrapper, { class: "progress", horizontal: this.blur, onClick: function (e) { _this.handleClick(e); } }, h("div", { class: "status", style: { transform: "translate(" + this.progress() + "%, 0)" } }), this.secondary ? h("div", { class: "secondary", style: { transform: "translate(" + this.progress(true) + "%, 0)" } }) : ""));
    };
    Object.defineProperty(Progress.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Progress, "watchers", {
        get: function () {
            return {
                "value": ["observeValue"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Progress, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;position:relative;overflow:hidden;--border-radius:0.3rem;--time:124;--negative-time:-124}:host .blur-content{display:block;height:100%}:host([editable]){cursor:pointer}:host .progress{display:block;position:relative;-webkit-transition:all .25s var(--ease) 0ms;transition:all .25s var(--ease) 0ms;background:var(--gray0);width:100%;height:.6rem;border-radius:var(--border-radius);overflow:hidden}:host([editable]:hover) .progress{height:2.4rem}:host .secondary,:host .status{position:absolute;top:0;right:0;bottom:0;left:-100%;-webkit-transition:all .35s var(--ease,ease-in-out) 0ms;transition:all .35s var(--ease,ease-in-out) 0ms;background:var(--theme-base5,var(--gray5));width:100%;z-index:2}:host .secondary{background:var(--theme-base3,var(--gray3));z-index:1}:host([slender]) .progress{border:0;height:.2rem}:host([slender][editable]:hover) .progress{height:.4rem}:host([noease]) .progress,:host([noease]) .secondary,:host([noease]) .status{-webkit-transition:none!important;transition:none!important}:host([indeterminate]){height:100px;width:100px}:host([indeterminate]) svg{-webkit-transform:rotate(0deg);transform:rotate(0deg);stroke:var(--theme-base5);-webkit-animation:rotate var(--ease) 9.2s infinite;animation:rotate var(--ease) 9.2s infinite}:host([indeterminate]) circle{stroke-dasharray:var(--time);stroke-dashoffset:var(--time);-webkit-animation:load var(--ease) 2.3s infinite;animation:load var(--ease) 2.3s infinite}:host([dark]) .progress{background:var(--theme-base9)}:host([dark]) .secondary{background:var(--theme-base7,var(--gray7));z-index:1}:host([dark]) circle{-webkit-animation:load-dark var(--ease) 2.3s infinite;animation:load-dark var(--ease) 2.3s infinite}\@-webkit-keyframes load{0%{stroke:var(--theme-complement7)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}to{stroke-dashoffset:var(--negative-time);stroke:var(--theme-base3)}}\@keyframes load{0%{stroke:var(--theme-complement7)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}to{stroke-dashoffset:var(--negative-time);stroke:var(--theme-base3)}}\@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes load-dark{0%{stroke:var(--theme-complement5)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}75%{stroke:var(--theme-base7)}to{stroke-dashoffset:var(--negative-time);stroke:var(--theme-complement7)}}\@keyframes load-dark{0%{stroke:var(--theme-complement5)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}75%{stroke:var(--theme-base7)}to{stroke-dashoffset:var(--negative-time);stroke:var(--theme-complement7)}}"; },
        enumerable: true,
        configurable: true
    });
    return Progress;
}());
Tunnel.injectProps(Progress, ['dark']);
var bars = function (arg) {
    // Draw the frequency domain chart.
    for (var i = 0; i < arg.analyser.frequencyBinCount; i++) {
        var value = arg.freqs[i];
        var percent = value / 256;
        var height = (arg.height * percent) * 0.75;
        var offset = arg.height - height + 25;
        var barWidth = (arg.width / arg.analyser.frequencyBinCount) + 24;
        arg.canvasCTX.fillStyle = "hsl(" + arg._color[0] + ", " + arg._color[1] + "%, " + percent * 100 + "%)";
        arg.canvasCTX.fillRect(i * barWidth, offset, barWidth, height);
    }
};
var BAR_PAD = 4;
var BAR_WIDTH = 4;
var MAX_BARS = 70;
var bars2 = function (arg) {
    var values = arg.freqs;
    var canvas = arg.canvas;
    var ctx = arg.canvasCTX;
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
        ctx.strokeStyle = "hsl(" + arg._color[0] + ", " + arg._color[1] + "%, " + arg._color[2] + "%)";
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
    var total = arr.reduce(function (sum, b) { return (sum + b); });
    return (total / arr.length);
}
var RENDERED_OBJECTS = {
    BAR: {
        maxHeight: 250
    },
    CIRCLE: {
        radius: 100,
        width: 15
    }
};
var circle = function (arg) {
    var bufferLength = arg.analyser.frequencyBinCount;
    var avgBuffer = avg(arg.freqs);
    var lineWidth = avgBuffer < RENDERED_OBJECTS.CIRCLE.width ? RENDERED_OBJECTS.CIRCLE.width : avgBuffer;
    var rotation = 0;
    var cx = arg.width / 2;
    var cy = arg.height / 2;
    var rectLength = RENDERED_OBJECTS.CIRCLE.radius * 2 * Math.PI;
    var barWidth = (rectLength / bufferLength);
    arg.canvasCTX.beginPath();
    arg.canvasCTX.arc(cx, cy, RENDERED_OBJECTS.CIRCLE.radius, 0, Math.PI * 2);
    arg.canvasCTX.lineWidth = lineWidth;
    arg.canvasCTX.strokeStyle = "hsl(" + arg._color[0] + ", " + arg._color[1] + "%, " + arg._color[2] + "%)";
    arg.canvasCTX.closePath();
    arg.canvasCTX.stroke();
    arg.canvasCTX.save();
    arg.canvasCTX.translate(cx, cy);
    for (var i = 0; i < arg.analyser.frequencyBinCount; i++) {
        var barHeight = arg.freqs[i];
        var fixedBarHeight = barHeight > RENDERED_OBJECTS.BAR.maxHeight ? RENDERED_OBJECTS.BAR.maxHeight : barHeight;
        arg.canvasCTX.rotate(rotation);
        arg.canvasCTX.fillStyle = "hsl(" + arg._color[0] + ", " + arg._color[1] + "%, " + arg._color[2] + "%)";
        arg.canvasCTX.fillRect(RENDERED_OBJECTS.CIRCLE.radius + 100, (barWidth * -1) / 2, fixedBarHeight, barWidth);
        rotation = (rotation / (bufferLength + barWidth)) % 360 + 1;
    }
};
var wave = function (arg) {
    for (var i = 0; i < arg.analyser.frequencyBinCount; i++) {
        var value = arg.times[i];
        var percent = value / 512;
        var height = (arg.height * percent) * 1.25;
        var offset = arg.height - height;
        var barWidth = arg.width / arg.analyser.frequencyBinCount + 16;
        arg.canvasCTX.fillStyle = "hsl(" + arg._color[0] + ", " + arg._color[1] + "%, " + arg._color[2] + "%)";
        arg.canvasCTX.fillRect(i * barWidth, offset, 24, 24);
    }
};
var rgbToHsl = createCommonjsModule(function (module) {
    (function () {
        module.exports = function (r, g, b) {
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
            }
            else {
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
    }).call(commonjsGlobal);
});
var hexToRgb = function hexToRgb(hex) {
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
    return [r, g, b];
};
function removeHash(hex) {
    var arr = hex.split('');
    arr.shift();
    return arr.join('');
}
function expand(hex) {
    return hex
        .split('')
        .reduce(function (accum, value) {
        return accum.concat([value, value]);
    }, [])
        .join('');
}
var hexToHsl = function (hex) {
    var hsl = rgbToHsl.apply(rgbToHsl, hexToRgb(hex));
    return [hsl[0], parseInt(hsl[1], 10), parseInt(hsl[2], 10)];
};
var WebAudioVisualizer = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.for = "web_audio";
        this.type = "wave";
        this.smoothing = 0.7;
        this.size = 1024;
        this.color = "white";
        this.width = 1024;
        this.height = 1024;
        this.clearBackground = function () {
            _this.canvasCTX.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
            _this.canvasCTX.fillStyle = "transparent";
            _this.canvasCTX.fillRect(0, 0, _this.canvas.width, _this.canvas.height);
        };
    }
    class_1.prototype.componentWillLoad = function () {
        this.handleColorChange();
    };
    class_1.prototype.componentDidLoad = function () {
        this.canvas = this.element.shadowRoot.querySelector('canvas');
    };
    class_1.prototype.handleColorChange = function () {
        if (["white", "black", "black-alt"].includes(this.color)) {
            this._color = hexToHsl(colors[this.color]);
        }
        else {
            this._color = hexToHsl(colors[this.color][5]);
        }
    };
    class_1.prototype.connect = function (context, destination) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.context = context;
                this.analyser = this.context.createAnalyser();
                if (destination) {
                    this.analyser.connect(destination);
                }
                this.freqs = new Uint8Array(this.analyser.frequencyBinCount);
                this.times = new Uint8Array(this.analyser.frequencyBinCount);
                this.canvasCTX = this.canvas.getContext('2d');
                requestAnimationFrame(this.draw.bind(this));
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.draw = function () {
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
    };
    class_1.prototype.getFrequencyValue = function (freq) {
        var nyquist = this.context.sampleRate / 2;
        var index = Math.round(freq / nyquist * this.freqs.length);
        return this.freqs[index];
    };
    class_1.prototype.render = function () {
        return (h("canvas", { id: "canvas" }));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "color": ["handleColorChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host,:host canvas{display:block}:host canvas{width:100%;height:100%}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { SkeletonImg as skeleton_img, Progress as stellar_progress, WebAudioVisualizer as web_audio_visualizer };
