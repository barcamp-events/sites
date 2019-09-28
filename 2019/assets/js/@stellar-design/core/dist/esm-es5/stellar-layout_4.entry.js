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
import { c as createCommonjsModule, a as commonjsGlobal, b as commonjsRequire } from './_commonjsHelpers-ae1b5db5.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-e9450bee.js';
import { d as delay } from './index-94a07eae.js';
import { e as eqjs } from './eq.min-aaf72f1b.js';
var Layout = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.size = "medium";
        this.padding = "medium";
        this.align = "baseline";
        this.content = "baseline";
    }
    class_1.prototype.componentWillLoad = function () {
        var navs = Array.from(this.element.querySelectorAll('*[slot="nav"]'));
        this.hasNav = navs.length > 0;
        eqjs.definePts(this.element, {
            "tiny": 320,
            "small": 480,
            "medium": 640,
            "large": 800,
            "massive": 1024,
        });
        this.refresh();
    };
    class_1.prototype.componentDidLoad = function () {
        this.refresh();
    };
    class_1.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resizeEvent;
            return __generator(this, function (_a) {
                resizeEvent = window.document.createEvent('UIEvents');
                resizeEvent.initEvent('resize', true, false);
                window.dispatchEvent(resizeEvent);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        return (h("div", { class: "layout" }, h("slot", null), h("slot", { name: "nav" })));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;position:relative;font-family:inherit;--grid-gap:3rem;--padding:4rem;--layout:1fr;--tiny:420px;--small:700px;--medium:1024px;--large:1200px;--width:95%}:host .layout{display:grid;grid-gap:var(--grid-gap,3rem);margin:0 auto;padding:var(--padding) 0;width:var(--width);max-width:var(--medium);min-height:0;min-width:0;grid-template-columns:var(--layout)}:host .layout>*{min-width:0}:host([size=tiny]) .layout{max-width:var(--tiny)}:host([size=small]) .layout{max-width:var(--small)}:host([size=medium]) .layout{max-width:var(--medium)}:host([size=large]) .layout{max-width:var(--large)}:host([size=full]) .layout{max-width:100%}:host([size=flush]) .layout{max-width:100%;width:100%}:host([padding=none]){--padding:0}:host([padding=tiny]){--padding:0.5rem}:host([padding=small]){--padding:1rem}:host([padding=medium]){--padding:2rem}:host([padding=large]){--padding:4rem}:host([align=top]) .layout{-ms-flex-align:start;align-items:flex-start}:host([align=center]) .layout{-ms-flex-align:center;align-items:center}:host([align=baseline]) .layout{-ms-flex-align:baseline;align-items:baseline}:host([type=supporting-content-right]) ::slotted(aside){-ms-flex-order:1;order:1}:host ::slotted(*){min-width:0}:host([has-nav]) .layout{padding-bottom:0}:host ::slotted([slot=nav]){margin-top:var(--padding)}\@media (min-width:700px){:host([type=one-third]){--layout:2fr 1fr}:host([type=one-third-right]){--layout:1fr 2fr}:host([type=sidebar-right]){--layout:3fr 1fr}:host([type=sidebar]){--layout:1fr 3fr}:host([type=half]){--layout:1fr 1fr}:host([type=supporting-content]){--layout:6fr 4fr}:host([type=supporting-content-right]){--layout:4fr 6fr}:host([type=split-screen]){--layout:1fr 1fr}:host([type=supporting-content-right]) ::slotted(aside){-ms-flex-order:-1;order:-1}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var rellax = createCommonjsModule(function (module) {
    // ------------------------------------------
    // Rellax.js
    // Buttery smooth parallax library
    // Copyright (c) 2016 Moe Amaya (@moeamaya)
    // MIT license
    //
    // Thanks to Paraxify.js and Jaime Cabllero
    // for parallax concepts
    // ------------------------------------------
    (function (root, factory) {
        if (module.exports) {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like environments that support module.exports,
            // like Node.
            module.exports = factory();
        }
        else {
            // Browser globals (root is window)
            root.Rellax = factory();
        }
    }(typeof window !== "undefined" ? window : commonjsGlobal, function () {
        var Rellax = function (el, options) {
            var self = Object.create(Rellax.prototype);
            var posY = 0;
            var screenY = 0;
            var posX = 0;
            var screenX = 0;
            var blocks = [];
            var pause = true;
            // check what requestAnimationFrame to use, and if
            // it's not supported, use the onscroll event
            var loop = window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                function (callback) { return setTimeout(callback, 1000 / 60); };
            // store the id for later use
            var loopId = null;
            // Test via a getter in the options object to see if the passive property is accessed
            var supportsPassive = false;
            try {
                var opts = Object.defineProperty({}, 'passive', {
                    get: function () {
                        supportsPassive = true;
                    }
                });
                window.addEventListener("testPassive", null, opts);
                window.removeEventListener("testPassive", null, opts);
            }
            catch (e) { }
            // check what cancelAnimation method to use
            var clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;
            // check which transform property to use
            var transformProp = window.transformProp || (function () {
                var testEl = document.createElement('div');
                if (testEl.style.transform === null) {
                    var vendors = ['Webkit', 'Moz', 'ms'];
                    for (var vendor in vendors) {
                        if (testEl.style[vendors[vendor] + 'Transform'] !== undefined) {
                            return vendors[vendor] + 'Transform';
                        }
                    }
                }
                return 'transform';
            })();
            // Default Settings
            self.options = {
                speed: -2,
                center: false,
                wrapper: null,
                relativeToWrapper: false,
                round: true,
                vertical: true,
                horizontal: false,
                callback: function () { },
            };
            // User defined options (might have more in the future)
            if (options) {
                Object.keys(options).forEach(function (key) {
                    self.options[key] = options[key];
                });
            }
            // By default, rellax class
            if (!el) {
                el = '.rellax';
            }
            // check if el is a className or a node
            var elements = typeof el === 'string' ? document.querySelectorAll(el) : [el];
            // Now query selector
            if (elements.length > 0) {
                self.elems = elements;
            }
            // The elements don't exist
            else {
                console.warn("Rellax: The elements you're trying to select don't exist.");
                return;
            }
            // Has a wrapper and it exists
            if (self.options.wrapper) {
                if (!self.options.wrapper.nodeType) {
                    var wrapper = document.querySelector(self.options.wrapper);
                    if (wrapper) {
                        self.options.wrapper = wrapper;
                    }
                    else {
                        console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                        return;
                    }
                }
            }
            // Get and cache initial position of all elements
            var cacheBlocks = function () {
                for (var i = 0; i < self.elems.length; i++) {
                    var block = createBlock(self.elems[i]);
                    blocks.push(block);
                }
            };
            // Let's kick this script off
            // Build array for cached element values
            var init = function () {
                for (var i = 0; i < blocks.length; i++) {
                    self.elems[i].style.cssText = blocks[i].style;
                }
                blocks = [];
                screenY = window.innerHeight;
                screenX = window.innerWidth;
                setPosition();
                cacheBlocks();
                animate();
                // If paused, unpause and set listener for window resizing events
                if (pause) {
                    window.addEventListener('resize', init);
                    pause = false;
                    // Start the loop
                    update();
                }
            };
            // We want to cache the parallax blocks'
            // values: base, top, height, speed
            // el: is dom object, return: el cache values
            var createBlock = function (el) {
                var dataPercentage = el.getAttribute('data-rellax-percentage');
                var dataSpeed = el.getAttribute('data-rellax-speed');
                var dataZindex = el.getAttribute('data-rellax-zindex') || 0;
                var dataMin = el.getAttribute('data-rellax-min');
                var dataMax = el.getAttribute('data-rellax-max');
                // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
                // ensures elements are positioned based on HTML layout.
                //
                // If the element has the percentage attribute, the posY and posX needs to be
                // the current scroll position's value, so that the elements are still positioned based on HTML layout
                var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
                // If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.
                if (self.options.relativeToWrapper) {
                    var scrollPosY = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
                    wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
                }
                var posY = self.options.vertical ? (dataPercentage || self.options.center ? wrapperPosY : 0) : 0;
                var posX = self.options.horizontal ? (dataPercentage || self.options.center ? self.options.wrapper ? self.options.wrapper.scrollLeft : (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft) : 0) : 0;
                var blockTop = posY + el.getBoundingClientRect().top;
                var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;
                var blockLeft = posX + el.getBoundingClientRect().left;
                var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;
                // apparently parallax equation everyone uses
                var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);
                var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);
                if (self.options.center) {
                    percentageX = 0.5;
                    percentageY = 0.5;
                }
                // Optional individual block speed as data attr, otherwise global speed
                var speed = dataSpeed ? dataSpeed : self.options.speed;
                var bases = updatePosition(percentageX, percentageY, speed);
                // ~~Store non-translate3d transforms~~
                // Store inline styles and extract transforms
                var style = el.style.cssText;
                var transform = '';
                // Check if there's an inline styled transform
                var searchResult = /transform\s*:/i.exec(style);
                if (searchResult) {
                    // Get the index of the transform
                    var index = searchResult.index;
                    // Trim the style to the transform point and get the following semi-colon index
                    var trimmedStyle = style.slice(index);
                    var delimiter = trimmedStyle.indexOf(';');
                    // Remove "transform" string and save the attribute
                    if (delimiter) {
                        transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g, '');
                    }
                    else {
                        transform = " " + trimmedStyle.slice(11).replace(/\s/g, '');
                    }
                }
                return {
                    baseX: bases.x,
                    baseY: bases.y,
                    top: blockTop,
                    left: blockLeft,
                    height: blockHeight,
                    width: blockWidth,
                    speed: speed,
                    style: style,
                    transform: transform,
                    zindex: dataZindex,
                    min: dataMin,
                    max: dataMax
                };
            };
            // set scroll position (posY, posX)
            // side effect method is not ideal, but okay for now
            // returns true if the scroll changed, false if nothing happened
            var setPosition = function () {
                var oldY = posY;
                var oldX = posX;
                posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
                posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
                // If option relativeToWrapper is true, use relative wrapper value instead.
                if (self.options.relativeToWrapper) {
                    var scrollPosY = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
                    posY = scrollPosY - self.options.wrapper.offsetTop;
                }
                if (oldY != posY && self.options.vertical) {
                    // scroll changed, return true
                    return true;
                }
                if (oldX != posX && self.options.horizontal) {
                    // scroll changed, return true
                    return true;
                }
                // scroll did not change
                return false;
            };
            // Ahh a pure function, gets new transform value
            // based on scrollPosition and speed
            // Allow for decimal pixel values
            var updatePosition = function (percentageX, percentageY, speed) {
                var result = {};
                var valueX = (speed * (100 * (1 - percentageX)));
                var valueY = (speed * (100 * (1 - percentageY)));
                result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
                result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;
                return result;
            };
            // Remove event listeners and loop again
            var deferredUpdate = function () {
                window.removeEventListener('resize', deferredUpdate);
                window.removeEventListener('orientationchange', deferredUpdate);
                (self.options.wrapper ? self.options.wrapper : window).removeEventListener('scroll', deferredUpdate);
                (self.options.wrapper ? self.options.wrapper : document).removeEventListener('touchmove', deferredUpdate);
                // loop again
                loopId = loop(update);
            };
            // Loop
            var update = function () {
                if (setPosition() && pause === false) {
                    animate();
                    // loop again
                    loopId = loop(update);
                }
                else {
                    loopId = null;
                    // Don't animate until we get a position updating event
                    window.addEventListener('resize', deferredUpdate);
                    window.addEventListener('orientationchange', deferredUpdate);
                    (self.options.wrapper ? self.options.wrapper : window).addEventListener('scroll', deferredUpdate, supportsPassive ? { passive: true } : false);
                    (self.options.wrapper ? self.options.wrapper : document).addEventListener('touchmove', deferredUpdate, supportsPassive ? { passive: true } : false);
                }
            };
            // Transform3d on parallax element
            var animate = function () {
                var positions;
                for (var i = 0; i < self.elems.length; i++) {
                    var percentageY = ((posY - blocks[i].top + screenY) / (blocks[i].height + screenY));
                    var percentageX = ((posX - blocks[i].left + screenX) / (blocks[i].width + screenX));
                    // Subtracting initialize value, so element stays in same spot as HTML
                    positions = updatePosition(percentageX, percentageY, blocks[i].speed); // - blocks[i].baseX;
                    var positionY = positions.y - blocks[i].baseY;
                    var positionX = positions.x - blocks[i].baseX;
                    // The next two "if" blocks go like this:
                    // Check if a limit is defined (first "min", then "max");
                    // Check if we need to change the Y or the X
                    // (Currently working only if just one of the axes is enabled)
                    // Then, check if the new position is inside the allowed limit
                    // If so, use new position. If not, set position to limit.
                    // Check if a min limit is defined
                    if (blocks[i].min !== null) {
                        if (self.options.vertical && !self.options.horizontal) {
                            positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;
                        }
                        if (self.options.horizontal && !self.options.vertical) {
                            positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;
                        }
                    }
                    // Check if a max limit is defined
                    if (blocks[i].max !== null) {
                        if (self.options.vertical && !self.options.horizontal) {
                            positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
                        }
                        if (self.options.horizontal && !self.options.vertical) {
                            positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
                        }
                    }
                    var zindex = blocks[i].zindex;
                    // Move that element
                    // (Set the new translation and append initial inline transforms.)
                    var translate = 'translate3d(' + (self.options.horizontal ? positionX : '0') + 'px,' + (self.options.vertical ? positionY : '0') + 'px,' + zindex + 'px) ' + blocks[i].transform;
                    self.elems[i].style[transformProp] = translate;
                }
                self.options.callback(positions);
            };
            self.destroy = function () {
                for (var i = 0; i < self.elems.length; i++) {
                    self.elems[i].style.cssText = blocks[i].style;
                }
                // Remove resize event listener if not pause, and pause
                if (!pause) {
                    window.removeEventListener('resize', init);
                    pause = true;
                }
                // Clear the animation loop to prevent possible memory leak
                clearLoop(loopId);
                loopId = null;
            };
            // Init
            init();
            // Allow to recalculate the initial values whenever we want
            self.refresh = init;
            return self;
        };
        return Rellax;
    }));
});
var Parallax = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.horizontal = false;
        this.center = false;
    }
    class_2.prototype.componentWillLoad = function () {
        this.relax = new rellax('stellar-parallax-section', {
            center: this.center,
            horizontal: this.horizontal
        });
    };
    class_2.prototype.componentDidLoad = function () {
        this.reload();
    };
    class_2.prototype.reload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.relax.refresh();
                return [2 /*return*/];
            });
        });
    };
    class_2.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return "stellar-parallax{display:block;height:100%;position:relative}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var ParallaxSection = /** @class */ (function () {
    function ParallaxSection(hostRef) {
        registerInstance(this, hostRef);
        this.speed = 1;
        this.percentage = 0.5;
        this.layer = 1;
    }
    ParallaxSection.prototype.componentWillLoad = function () {
        this.element.setAttribute("data-rellax-speed", this.speed.toString());
        if (this.percentage) {
            this.element.setAttribute("data-rellax-percentage", this.percentage.toString());
        }
        this.element.setAttribute("data-rellax-zindex", this.layer.toString());
    };
    ParallaxSection.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(ParallaxSection.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParallaxSection, "style", {
        get: function () { return "stellar-parallax-section{display:block;position:absolute;width:100%;height:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}"; },
        enumerable: true,
        configurable: true
    });
    return ParallaxSection;
}());
var pluralize = createCommonjsModule(function (module, exports) {
    /* global define */
    (function (root, pluralize) {
        /* istanbul ignore else */
        if (typeof commonjsRequire === 'function' && 'object' === 'object' && 'object' === 'object') {
            // Node.
            module.exports = pluralize();
        }
        else {
            // Browser global.
            root.pluralize = pluralize();
        }
    })(commonjsGlobal, function () {
        // Rule storage - pluralize and singularize need to be run sequentially,
        // while other rules can be optimized using an object for instant lookups.
        var pluralRules = [];
        var singularRules = [];
        var uncountables = {};
        var irregularPlurals = {};
        var irregularSingles = {};
        /**
         * Sanitize a pluralization rule to a usable regular expression.
         *
         * @param  {(RegExp|string)} rule
         * @return {RegExp}
         */
        function sanitizeRule(rule) {
            if (typeof rule === 'string') {
                return new RegExp('^' + rule + '$', 'i');
            }
            return rule;
        }
        /**
         * Pass in a word token to produce a function that can replicate the case on
         * another word.
         *
         * @param  {string}   word
         * @param  {string}   token
         * @return {Function}
         */
        function restoreCase(word, token) {
            // Tokens are an exact match.
            if (word === token)
                return token;
            // Lower cased words. E.g. "hello".
            if (word === word.toLowerCase())
                return token.toLowerCase();
            // Upper cased words. E.g. "WHISKY".
            if (word === word.toUpperCase())
                return token.toUpperCase();
            // Title cased words. E.g. "Title".
            if (word[0] === word[0].toUpperCase()) {
                return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
            }
            // Lower cased words. E.g. "test".
            return token.toLowerCase();
        }
        /**
         * Interpolate a regexp string.
         *
         * @param  {string} str
         * @param  {Array}  args
         * @return {string}
         */
        function interpolate(str, args) {
            return str.replace(/\$(\d{1,2})/g, function (match, index) {
                return args[index] || '';
            });
        }
        /**
         * Replace a word using a rule.
         *
         * @param  {string} word
         * @param  {Array}  rule
         * @return {string}
         */
        function replace(word, rule) {
            return word.replace(rule[0], function (match, index) {
                var result = interpolate(rule[1], arguments);
                if (match === '') {
                    return restoreCase(word[index - 1], result);
                }
                return restoreCase(match, result);
            });
        }
        /**
         * Sanitize a word by passing in the word and sanitization rules.
         *
         * @param  {string}   token
         * @param  {string}   word
         * @param  {Array}    rules
         * @return {string}
         */
        function sanitizeWord(token, word, rules) {
            // Empty string or doesn't need fixing.
            if (!token.length || uncountables.hasOwnProperty(token)) {
                return word;
            }
            var len = rules.length;
            // Iterate over the sanitization rules and use the first one to match.
            while (len--) {
                var rule = rules[len];
                if (rule[0].test(word))
                    return replace(word, rule);
            }
            return word;
        }
        /**
         * Replace a word with the updated word.
         *
         * @param  {Object}   replaceMap
         * @param  {Object}   keepMap
         * @param  {Array}    rules
         * @return {Function}
         */
        function replaceWord(replaceMap, keepMap, rules) {
            return function (word) {
                // Get the correct token and case restoration functions.
                var token = word.toLowerCase();
                // Check against the keep object map.
                if (keepMap.hasOwnProperty(token)) {
                    return restoreCase(word, token);
                }
                // Check against the replacement map for a direct word replacement.
                if (replaceMap.hasOwnProperty(token)) {
                    return restoreCase(word, replaceMap[token]);
                }
                // Run all the rules against the word.
                return sanitizeWord(token, word, rules);
            };
        }
        /**
         * Check if a word is part of the map.
         */
        function checkWord(replaceMap, keepMap, rules, bool) {
            return function (word) {
                var token = word.toLowerCase();
                if (keepMap.hasOwnProperty(token))
                    return true;
                if (replaceMap.hasOwnProperty(token))
                    return false;
                return sanitizeWord(token, token, rules) === token;
            };
        }
        /**
         * Pluralize or singularize a word based on the passed in count.
         *
         * @param  {string}  word      The word to pluralize
         * @param  {number}  count     How many of the word exist
         * @param  {boolean} inclusive Whether to prefix with the number (e.g. 3 ducks)
         * @return {string}
         */
        function pluralize(word, count, inclusive) {
            var pluralized = count === 1
                ? pluralize.singular(word) : pluralize.plural(word);
            return (inclusive ? count + ' ' : '') + pluralized;
        }
        /**
         * Pluralize a word.
         *
         * @type {Function}
         */
        pluralize.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);
        /**
         * Check if a word is plural.
         *
         * @type {Function}
         */
        pluralize.isPlural = checkWord(irregularSingles, irregularPlurals, pluralRules);
        /**
         * Singularize a word.
         *
         * @type {Function}
         */
        pluralize.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);
        /**
         * Check if a word is singular.
         *
         * @type {Function}
         */
        pluralize.isSingular = checkWord(irregularPlurals, irregularSingles, singularRules);
        /**
         * Add a pluralization rule to the collection.
         *
         * @param {(string|RegExp)} rule
         * @param {string}          replacement
         */
        pluralize.addPluralRule = function (rule, replacement) {
            pluralRules.push([sanitizeRule(rule), replacement]);
        };
        /**
         * Add a singularization rule to the collection.
         *
         * @param {(string|RegExp)} rule
         * @param {string}          replacement
         */
        pluralize.addSingularRule = function (rule, replacement) {
            singularRules.push([sanitizeRule(rule), replacement]);
        };
        /**
         * Add an uncountable word rule.
         *
         * @param {(string|RegExp)} word
         */
        pluralize.addUncountableRule = function (word) {
            if (typeof word === 'string') {
                uncountables[word.toLowerCase()] = true;
                return;
            }
            // Set singular and plural references for the word.
            pluralize.addPluralRule(word, '$0');
            pluralize.addSingularRule(word, '$0');
        };
        /**
         * Add an irregular word definition.
         *
         * @param {string} single
         * @param {string} plural
         */
        pluralize.addIrregularRule = function (single, plural) {
            plural = plural.toLowerCase();
            single = single.toLowerCase();
            irregularSingles[single] = plural;
            irregularPlurals[plural] = single;
        };
        /**
         * Irregular rules.
         */
        [
            // Pronouns.
            ['I', 'we'],
            ['me', 'us'],
            ['he', 'they'],
            ['she', 'they'],
            ['them', 'them'],
            ['myself', 'ourselves'],
            ['yourself', 'yourselves'],
            ['itself', 'themselves'],
            ['herself', 'themselves'],
            ['himself', 'themselves'],
            ['themself', 'themselves'],
            ['is', 'are'],
            ['was', 'were'],
            ['has', 'have'],
            ['this', 'these'],
            ['that', 'those'],
            // Words ending in with a consonant and `o`.
            ['echo', 'echoes'],
            ['dingo', 'dingoes'],
            ['volcano', 'volcanoes'],
            ['tornado', 'tornadoes'],
            ['torpedo', 'torpedoes'],
            // Ends with `us`.
            ['genus', 'genera'],
            ['viscus', 'viscera'],
            // Ends with `ma`.
            ['stigma', 'stigmata'],
            ['stoma', 'stomata'],
            ['dogma', 'dogmata'],
            ['lemma', 'lemmata'],
            ['schema', 'schemata'],
            ['anathema', 'anathemata'],
            // Other irregular rules.
            ['ox', 'oxen'],
            ['axe', 'axes'],
            ['die', 'dice'],
            ['yes', 'yeses'],
            ['foot', 'feet'],
            ['eave', 'eaves'],
            ['goose', 'geese'],
            ['tooth', 'teeth'],
            ['quiz', 'quizzes'],
            ['human', 'humans'],
            ['proof', 'proofs'],
            ['carve', 'carves'],
            ['valve', 'valves'],
            ['looey', 'looies'],
            ['thief', 'thieves'],
            ['groove', 'grooves'],
            ['pickaxe', 'pickaxes'],
            ['passerby', 'passersby']
        ].forEach(function (rule) {
            return pluralize.addIrregularRule(rule[0], rule[1]);
        });
        /**
         * Pluralization rules.
         */
        [
            [/s?$/i, 's'],
            [/[^\u0000-\u007F]$/i, '$0'],
            [/([^aeiou]ese)$/i, '$1'],
            [/(ax|test)is$/i, '$1es'],
            [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
            [/(e[mn]u)s?$/i, '$1s'],
            [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
            [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
            [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
            [/(seraph|cherub)(?:im)?$/i, '$1im'],
            [/(her|at|gr)o$/i, '$1oes'],
            [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
            [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
            [/sis$/i, 'ses'],
            [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
            [/([^aeiouy]|qu)y$/i, '$1ies'],
            [/([^ch][ieo][ln])ey$/i, '$1ies'],
            [/(x|ch|ss|sh|zz)$/i, '$1es'],
            [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
            [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
            [/(pe)(?:rson|ople)$/i, '$1ople'],
            [/(child)(?:ren)?$/i, '$1ren'],
            [/eaux$/i, '$0'],
            [/m[ae]n$/i, 'men'],
            ['thou', 'you']
        ].forEach(function (rule) {
            return pluralize.addPluralRule(rule[0], rule[1]);
        });
        /**
         * Singularization rules.
         */
        [
            [/s$/i, ''],
            [/(ss)$/i, '$1'],
            [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
            [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
            [/ies$/i, 'y'],
            [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
            [/\b(mon|smil)ies$/i, '$1ey'],
            [/\b((?:tit)?m|l)ice$/i, '$1ouse'],
            [/(seraph|cherub)im$/i, '$1'],
            [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, '$1'],
            [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, '$1sis'],
            [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
            [/(test)(?:is|es)$/i, '$1is'],
            [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
            [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
            [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
            [/(alumn|alg|vertebr)ae$/i, '$1a'],
            [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
            [/(matr|append)ices$/i, '$1ix'],
            [/(pe)(rson|ople)$/i, '$1rson'],
            [/(child)ren$/i, '$1'],
            [/(eau)x?$/i, '$1'],
            [/men$/i, 'man']
        ].forEach(function (rule) {
            return pluralize.addSingularRule(rule[0], rule[1]);
        });
        /**
         * Uncountable rules.
         */
        [
            // Singular words with no plurals.
            'adulthood',
            'advice',
            'agenda',
            'aid',
            'aircraft',
            'alcohol',
            'ammo',
            'analytics',
            'anime',
            'athletics',
            'audio',
            'bison',
            'blood',
            'bream',
            'buffalo',
            'butter',
            'carp',
            'cash',
            'chassis',
            'chess',
            'clothing',
            'cod',
            'commerce',
            'cooperation',
            'corps',
            'debris',
            'diabetes',
            'digestion',
            'elk',
            'energy',
            'equipment',
            'excretion',
            'expertise',
            'firmware',
            'flounder',
            'fun',
            'gallows',
            'garbage',
            'graffiti',
            'hardware',
            'headquarters',
            'health',
            'herpes',
            'highjinks',
            'homework',
            'housework',
            'information',
            'jeans',
            'justice',
            'kudos',
            'labour',
            'literature',
            'machinery',
            'mackerel',
            'mail',
            'media',
            'mews',
            'moose',
            'music',
            'mud',
            'manga',
            'news',
            'only',
            'personnel',
            'pike',
            'plankton',
            'pliers',
            'police',
            'pollution',
            'premises',
            'rain',
            'research',
            'rice',
            'salmon',
            'scissors',
            'series',
            'sewage',
            'shambles',
            'shrimp',
            'software',
            'species',
            'staff',
            'swine',
            'tennis',
            'traffic',
            'transportation',
            'trout',
            'tuna',
            'wealth',
            'welfare',
            'whiting',
            'wildebeest',
            'wildlife',
            'you',
            /pok[eé]mon$/i,
            // Regexes.
            /[^aeiou]ese$/i,
            /deer$/i,
            /fish$/i,
            /measles$/i,
            /o[iu]s$/i,
            /pox$/i,
            /sheep$/i
        ].forEach(pluralize.addUncountableRule);
        return pluralize;
    });
});
var Select = /** @class */ (function () {
    function class_3(hostRef) {
        registerInstance(this, hostRef);
        this.name = "select";
        this.placeholder = "Choose something...";
        this.required = false;
        this.open = false;
        this.verbiage = "selection";
        this.valueLabel = undefined;
        this.loading = false;
        this.fit = false;
        this.wrap = false;
        this.resize = false;
        this.autoSelectFirst = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.blur = 0;
        this.clear_confirm = false;
        this.update = createEvent(this, "update", 7);
    }
    class_3.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.multiple) {
                            this.value = [];
                        }
                        return [4 /*yield*/, this.option_elements()];
                    case 1:
                        options = _a.sent();
                        // @ts-ignore
                        options.forEach(function (element) {
                            element.selectable = true;
                            element.fit = _this.fit;
                            element.wrap = _this.wrap;
                            if (_this.multiple) {
                                element.multiple = true;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.listen_to_values();
                this.titleItem = this.element.shadowRoot.querySelector('stellar-item[select-title]');
                if (this.default) {
                    if (typeof this.default === "object" && this.default.constructor.name === "Array") {
                        this.default.forEach(function (value) {
                            // @ts-ignore
                            _this.element.querySelector("stellar-item[value=\"" + value + "\"]").select_item({ selected: true });
                        });
                    }
                    else {
                        // @ts-ignore
                        this.element.querySelector("stellar-item[value=\"" + this.default + "\"]").select_item({ selected: true });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.clearValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.clear_confirm) return [3 /*break*/, 3];
                        return [4 /*yield*/, delay(100)];
                    case 1:
                        _a.sent();
                        this.clear_confirm = false;
                        this.value = [];
                        return [4 /*yield*/, this.option_elements()];
                    case 2:
                        options = _a.sent();
                        Array.from(options).forEach(function (element) {
                            element.selected = false;
                        });
                        this.update.emit(this.value);
                        return [3 /*break*/, 4];
                    case 3:
                        this.clear_confirm = true;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.update_values = function () {
        return __awaiter(this, void 0, void 0, function () {
            var option_elements, values_1, options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.multiple) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.option_elements()];
                    case 1:
                        option_elements = _a.sent();
                        values_1 = [];
                        // @ts-ignore
                        option_elements.forEach(function (option) {
                            if (!option.multiple) {
                                option.multiple = true;
                            }
                            if (option.selected) {
                                values_1.push(option.value);
                            }
                        });
                        this.value = values_1;
                        this.update.emit(this.value);
                        this.updateLanguage();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.option_elements()];
                    case 3:
                        options = _a.sent();
                        if (this.value.length === 0 && this.autoSelectFirst) {
                            this.element.querySelector('stellar-item').select_item({ selected: true });
                        }
                        Array.from(options).forEach(function (el) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        if (!el.selected) return [3 /*break*/, 2];
                                        _b = (_a = this.titleItem).apply;
                                        return [4 /*yield*/, el.data()];
                                    case 1:
                                        _b.apply(_a, [_c.sent()]);
                                        this.value = el.value;
                                        this.update.emit(this.value);
                                        this.updateLanguage();
                                        _c.label = 2;
                                    case 2:
                                        if (el.selectTitle) {
                                            this.value = el.value;
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.handleOpenChange = function () {
        // @ts-ignore
        this.element.shadowRoot.querySelector('button.select-title').focus();
    };
    class_3.prototype.handleMultipleChange = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.option_elements()];
                    case 1:
                        options = _a.sent();
                        // @ts-ignore
                        options.forEach(function (element) {
                            element.multiple = value;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.mountedHandler = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, option_elements, values_2, options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = event.detail;
                        if (!this.multiple) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.option_elements()];
                    case 1:
                        option_elements = _a.sent();
                        values_2 = [];
                        // @ts-ignore
                        option_elements.forEach(function (option) {
                            option.selectable = true;
                            if (_this.value && _this.value.includes(option.value) && !data.element.selected) {
                                option.selected = true;
                            }
                            if (option.selected) {
                                values_2.push(option.value);
                            }
                        });
                        this.value = values_2;
                        return [3 /*break*/, 4];
                    case 2:
                        this.value = data.element.selected ? data.element.value : this.value;
                        if (!this.value) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.option_elements()];
                    case 3:
                        options = _a.sent();
                        // @ts-ignore
                        options.forEach(function (element) {
                            element.selectable = true;
                            if (_this.value === element.value) {
                                element.selected = true;
                            }
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.selectionChangedHandler = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, option_elements, values_3, options, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        data = event.detail;
                        if (!this.multiple) return [3 /*break*/, 2];
                        data.selected = !data.selected;
                        return [4 /*yield*/, this.option_elements()];
                    case 1:
                        option_elements = _c.sent();
                        values_3 = [];
                        // @ts-ignore
                        option_elements.forEach(function (option) {
                            if (_this.value && _this.value.includes(option.value) && data.value !== option.value) {
                                option.selected = true;
                            }
                            if (option.selected) {
                                values_3.push(option.value);
                            }
                        });
                        this.value = values_3;
                        this.update.emit(this.value);
                        return [3 /*break*/, 5];
                    case 2:
                        if (!!data.element.selectTitle) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.option_elements()];
                    case 3:
                        options = _c.sent();
                        // @ts-ignore
                        options.forEach(function (element) {
                            element.selected = false;
                        });
                        data.selected = true;
                        this.value = data.value;
                        this.update.emit(this.value);
                        _b = (_a = this.titleItem).apply;
                        return [4 /*yield*/, data.data()];
                    case 4:
                        _b.apply(_a, [_c.sent()]);
                        setTimeout(function () {
                            _this.open = false;
                        }, 200);
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.selectedFocusChangedHandler = function () {
        this.focused = true;
    };
    class_3.prototype.selectedBlurChangedHandler = function () {
        this.focused = false;
    };
    class_3.prototype.handleTitleFocus = function () {
        this.focused = true;
    };
    class_3.prototype.handleTitleBlur = function () {
        this.focused = false;
    };
    class_3.prototype.handleNotClick = function (e) {
        if (e.target !== this.element && !this.element.contains(e.target)) {
            if (this.open) {
                this.open = false;
            }
        }
    };
    class_3.prototype.handleEscapeKey = function (event) {
        if (event.key === "space" && this.open) {
            this.open = false;
        }
    };
    class_3.prototype.handleArrowKeys = function (ev) {
        if (ev.keyCode === 40 || ev.keyCode === 38) {
            if (this.open) {
                ev.preventDefault();
                ev.stopPropagation();
                if (ev.keyCode === 40) {
                    this.focusNextOption();
                }
                else {
                    this.focusPreviousOption();
                }
            }
        }
    };
    class_3.prototype.updateLanguage = function () {
        var language;
        var details;
        if (typeof this.value === "object") {
            if (this.value.length === 0) {
                details = pluralize(this.verbiage, this.value.length);
                if (this.placeholderInverted) {
                    language = "All " + details + " selected";
                }
                else {
                    language = "No " + details + " selected";
                }
            }
            else {
                details = pluralize(this.verbiage, this.value.length, true);
                language = details + " selected";
            }
        }
        else if (typeof this.value === "string") {
            language = this.valueLabel || this.value.toString() || "Select " + (this.verbiageAn ? "an" : "a") + " " + this.verbiage;
        }
        else {
            language = this.valueLabel || this.value;
        }
        this.language = language;
    };
    class_3.prototype.validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = {
                            name: "" + this.name,
                            value: this.value,
                            valid: true,
                            errors: [],
                        };
                        this.updateLanguage();
                        if (!!this.novalidate) return [3 /*break*/, 2];
                        // @ts-ignore
                        if (!this.value) {
                            status.valid = false;
                            status.errors.push({ message: 'This field is required.' });
                        }
                        return [4 /*yield*/, this.options()];
                    case 1:
                        options = _a.sent();
                        // @ts-ignore
                        if (!options.includes(this.value)) {
                            status.valid = false;
                            status.errors.push({ message: "\"" + this.value + "\" isn't a valid option." });
                        }
                        _a.label = 2;
                    case 2:
                        this.status = status;
                        return [2 /*return*/, this.status];
                }
            });
        });
    };
    class_3.prototype.listen_to_values = function () {
        var _this = this;
        var targetNode = this.element;
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            type: true
        };
        var callback = function () {
            _this.update_values();
        };
        this.observer = new MutationObserver(callback);
        this.observer.observe(targetNode, config);
    };
    class_3.prototype.option_elements = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.querySelectorAll('stellar-item:not([select-title])')];
            });
        });
    };
    class_3.prototype.options = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elements, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.option_elements()];
                    case 1:
                        elements = _a.sent();
                        options = [];
                        // @ts-ignore
                        elements.forEach(function (option) {
                            options.push(option.value);
                        });
                        return [2 /*return*/, options];
                }
            });
        });
    };
    class_3.prototype.focusPaths = function () {
        return __awaiter(this, void 0, void 0, function () {
            var current, next, previous, elements, first;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        current = undefined;
                        next = undefined;
                        previous = undefined;
                        return [4 /*yield*/, this.options()];
                    case 1:
                        elements = _a.sent();
                        // @ts-ignore
                        elements.forEach(function (element, index) {
                            // @ts-ignore
                            if (element.hasFocus()) {
                                previous = elements[index - 1];
                                current = element;
                                next = elements[index + 1];
                            }
                        });
                        if (!current) {
                            first = elements[0];
                            this.focusElement(first);
                            current = first;
                        }
                        return [2 /*return*/, { previous: previous, current: current, next: next }];
                }
            });
        });
    };
    class_3.prototype.focusFirstItem = function () {
        //@ts-ignore
        this.element.querySelector('.select-list stellar-item:first-of-type').focus();
    };
    class_3.prototype.focusElement = function (element) {
        element.focus();
    };
    class_3.prototype.focusNextOption = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elements;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.focusPaths()];
                    case 1:
                        elements = _a.sent();
                        if (elements.next) {
                            this.focusElement(elements.next);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.focusPreviousOption = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elements;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.focusPaths()];
                    case 1:
                        elements = _a.sent();
                        if (elements.previous) {
                            this.focusElement(elements.previous);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.closeOthers = function () {
        var _this = this;
        var selects = document.querySelectorAll('stellar-select[open]');
        Array.from(selects).forEach(function (s) {
            if (s !== _this.element) {
                s.open = false;
            }
        });
    };
    class_3.prototype.handleTitleClick = function () {
        this.closeOthers();
        this.open = !this.open;
    };
    class_3.prototype.renderLabel = function () {
        var _this = this;
        if (this.label) {
            return h("div", { class: "label-wrapper" }, h("stellar-label", { size: this.size, onClick: function () { _this.focusFirstItem(); } }, this.label), this.renderEmptyButton());
        }
    };
    class_3.prototype.renderErrors = function () {
        if (this.status && this.status.errors && this.status.errors.length !== 0) {
            return (h("p", { class: "validation" }, this.status.errors.map(function (error) { return h("span", null, error.message); })));
        }
    };
    class_3.prototype.renderEmptyButton = function () {
        var _this = this;
        return this.multiple && this.value && this.value.length > 0 && h("stellar-button", { class: "clear-button", tag: "button", size: this.size, ghost: true, onClick: function (e) { e.stopPropagation(); _this.clearValue(); } }, h("stellar-asset", { name: "close" }), this.clear_confirm ? "Clear " + this.value.length + " selections?" : "Clear");
    };
    class_3.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "wrapper" }, this.renderLabel(), h("div", { class: "select" }, this.loading && h("div", { class: "loading" }, h("stellar-asset", { name: "loading-spin" }), " ", h("p", null, "One sec...")), h("button", { type: "button", class: "select-title", onClick: function () { return _this.handleTitleClick(); }, onFocus: function () { return _this.handleTitleFocus(); }, onBlur: function () { return _this.handleTitleBlur(); } }, h("stellar-item", { fit: true, wrap: true, "select-title": true, type: "button", value: this.value ? this.value.toString() : "", tabindex: "-1", selectable: false, label: this.language, innerHTML: this.language }), h("stellar-asset", { name: "arrow-down" }), this.name && h("input", { type: "text", tabindex: "-1", value: this.value, name: this.name.toString(), required: this.required })), this.tooltip && h("stellar-tooltip", { align: "bottom-left", onClick: function () { return _this.handleTitleClick(); } }, this.tooltip), h("stellar-blur", { vertical: this.blur, class: "select-list" }, h("div", { class: "select-list-header" }, h("slot", { name: "header" })), h("div", { class: "select-list-body" }, h("slot", null)), this.footer && h("div", { class: "select-list-footer" }, h("slot", { name: "footer" })))), h("stellar-label", { size: "small", underneath: true }, this.description), !this.novalidate && this.renderErrors()));
    };
    Object.defineProperty(class_3.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "watchers", {
        get: function () {
            return {
                "open": ["handleOpenChange"],
                "multiple": ["handleMultipleChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "style", {
        get: function () { return ":host{--color:var(--black);--border-radius:0.3rem;--item-size:5rem;--background:var(--white);--border-color:var(--gray2);-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;font-family:inherit;position:relative}:host(:not(.hydrated)){display:none}:host ::slotted(stellar-item),:host stellar-item{--item-size:5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}:host ::-moz-selection{background:var(--theme-base2)!important}:host ::selection{background:var(--theme-base2)!important}:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:inherit}:host .select{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column}:host .select-title{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;border:1px solid var(--border-color);border-radius:var(--border-radius);padding:0;width:100%;overflow:hidden;line-height:1.4;color:var(--color);font-weight:500;background:var(--background)}:host([focused]) .select-title,:host .select-title:focus,:host .wrapper:hover .select-title{border-color:var(--theme-base5);-webkit-box-shadow:0 0 0 1px var(--theme-base5);box-shadow:0 0 0 1px var(--theme-base5)}:host .select-title stellar-item{background:var(--background)!important;color:var(--color)!important}:host .select-title input{display:none}:host .select .loading{position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;border-radius:var(--border-radius);height:calc(100% + 2px);width:calc(100% + 2px);z-index:10;display:grid;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;grid-template-columns:auto auto;grid-gap:1rem;color:var(--theme-base7);background:#fff;-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.0625s;animation-duration:.0625s;-webkit-animation-fill-mode:both;animation-fill-mode:both}:host([dark]) .select .loading{background:var(--theme-base9);color:var(--theme-base5)}:host .select .loading stellar-asset{font-size:1.6rem}:host .select-title stellar-asset{position:absolute;right:2rem;-webkit-transition:-webkit-transform .1s var(--ease) 0s;transition:-webkit-transform .1s var(--ease) 0s;transition:transform .1s var(--ease) 0s;transition:transform .1s var(--ease) 0s,-webkit-transform .1s var(--ease) 0s;font-size:1.6rem;color:var(--theme-base5);background:transparent;border:0}:host .select-title .button stellar-asset{display:none}:host([open]) .select-title stellar-asset{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host .select-list{display:-ms-flexbox;display:flex;position:relative;top:0;left:0;-ms-flex-direction:column;flex-direction:column;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transition:opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;transition:opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;transition:transform .2s var(--ease) .35s,opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s;transition:transform .2s var(--ease) .35s,opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;opacity:0;z-index:3;background:var(--background);width:100%;max-height:0;overflow-x:hidden;overflow-y:hidden;color:var(--theme-base5);border:1px solid var(--border-color);pointer-events:none;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.15);box-shadow:0 1px 2px rgba(0,0,0,.15);border-radius:var(--border-radius)}:host([resize]) .select-list{resize:both}:host([resize]) .select-list:after{content:\"\";display:block;height:.5rem!important;max-height:.5rem!important;min-height:.5rem!important;width:100%;bottom:0;left:0;right:0;position:-webkit-sticky;position:sticky}:host .select-list ::slotted(stellar-item){color:var(--color);border-bottom:1px solid var(--border-color)}:host .select-list ::slotted(stellar-item:last-child){border-bottom:none}:host .label-wrapper{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host .label-wrapper stellar-label{margin-bottom:var(--ms-1);height:var(--ms0);line-height:1.4}:host .select-list-footer{-ms-flex-order:3;order:3;height:4rem;border-top:1px solid var(--theme-base5)}stellar-input .validation{margin-bottom:0;color:var(--red5);font-size:var(--complementing-font-size);font-weight:500}stellar-input .validation span{display:block;padding:1.4rem 0;line-height:1.4}stellar-input .validation span+span{border-top:1px solid var(--border-color)}:host([open]) .select-list,:host .select-list:focus-within{-webkit-transition:opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;transition:opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;transition:transform .2s var(--ease) 0ms,opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms;transition:transform .2s var(--ease) 0ms,opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;opacity:1;pointer-events:auto;max-height:calc(var(--item-size) * 6.2);overflow-y:auto}:host([size=tiny]) .label-wrapper stellar-label{margin-bottom:var(--ms-2);height:var(--ms-1)}:host([size=tiny]) .select-title stellar-asset{right:1rem}:host([size=tiny]),:host([size=tiny]) ::slotted(stellar-item),:host([size=tiny]) stellar-item{--font-size:var(--ms-2)}:host([size=small]) .label-wrapper stellar-label{margin-bottom:var(--ms-2);height:var(--ms0)}:host([size=small]) .select-title stellar-asset{right:1rem}:host([size=small]) .label{font-size:.75rem}:host([size=small]),:host([size=small]) ::slotted(stellar-item),:host([size=small]) stellar-item{--font-size:var(--ms-1)}:host .select-title{height:var(--item-size)}:host .select-title stellar-asset{right:1rem}:host,:host ::slotted(stellar-item),:host stellar-item{--font-size:var(--ms0);--item-size:calc(var(--font-size) * 3)}:host([size=medium]) .label-wrapper stellar-label{margin-bottom:var(--ms0);height:var(--ms1)}:host([size=medium]) .select-title stellar-asset{right:1rem}:host([size=medium]) .label{font-size:.75rem}:host([size=medium]),:host([size=medium]) ::slotted(stellar-item),:host([size=medium]) stellar-item{--font-size:var(--ms1)}:host([size=large]) .label-wrapper stellar-label{margin-bottom:var(--ms-2);height:var(--ms3)}:host([size=large]) .select-title stellar-asset{right:1rem}:host([size=large]) .label{font-size:.75rem}:host([size=large]),:host([size=large]) ::slotted(stellar-item),:host([size=large]) stellar-item{--font-size:var(--ms2)}:host([overlay]) .select-list{position:absolute;top:calc(var(--item-size) - 1px)}:host stellar-tooltip{cursor:pointer}:host stellar-item stellar-tooltip{display:none}:host .clear-button{--color:var(--red5);--active-color:var(--red7);-ms-flex-item-align:baseline;align-self:baseline}:host([dark]){--background:var(--black-alt);--color:var(--white);--border-color:var(--gray9)}\@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}\@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
Tunnel.injectProps(Select, ['dark']);
export { Layout as stellar_layout, Parallax as stellar_parallax, ParallaxSection as stellar_parallax_section, Select as stellar_select };
