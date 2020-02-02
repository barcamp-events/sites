import { c as createCommonjsModule, u as unwrapExports, a as commonjsGlobal } from './_commonjsHelpers-ae1b5db5.js';
import './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';

// Color system made via: https://palx.jxnblk.com/e5405c
const colors = {
    "base": "#26B0C7",
    "white": "#ffffff",
    "black": "#2d2d2d",
    "black-alt": "#242424",
    "gray": [
        "#faf9f9",
        "#f0ecec",
        "#e5dfdf",
        "#dad0d0",
        "#cec0c0",
        "#c0afaf",
        "#ae9b9b",
        "#958585",
        "#766969",
        "#453d3d"
    ],
    "red": [
        "#ffeded",
        "#ffd9db",
        "#ffc3c5",
        "#ffa9ac",
        "#ff888d",
        "#ff595f",
        "#e65055",
        "#ca464b",
        "#a73a3e",
        "#78292c"
    ],
    "orange": [
        "#feefe6",
        "#fddfcb",
        "#fbccad",
        "#fab78a",
        "#f99e61",
        "#f77d2b",
        "#df7126",
        "#c36322",
        "#a2521c",
        "#743a14"
    ],
    "yellow": [
        "#fffeea",
        "#fffdd4",
        "#fffcbb",
        "#fffba0",
        "#fffa7f",
        "#fff959",
        "#e7e150",
        "#cbc646",
        "#a9a53b",
        "#7b782b"
    ],
    "lime": [
        "#f5ffea",
        "#eaffd3",
        "#dfffba",
        "#d2ff9f",
        "#c3ff7f",
        "#b2ff59",
        "#a1e750",
        "#8dcb46",
        "#76a93b",
        "#557b2a"
    ],
    "green": [
        "#edffed",
        "#daffd9",
        "#c5ffc2",
        "#abffa8",
        "#8cff87",
        "#45AD45",
        "#56e750",
        "#4bcb46",
        "#3fa93b",
        "#2d7b2a"
    ],
    "teal": [
        "#ecfff5",
        "#d8ffea",
        "#c1ffde",
        "#a6ffcf",
        "#86ffbe",
        "#59ffa6",
        "#50e796",
        "#46cb84",
        "#3ba96e",
        "#2a7b50"
    ],
    "cyan": [
        "#e5f5f8",
        "#c9ebf1",
        "#a9e0e9",
        "#86d4df",
        "#5bc5d4",
        "#26b2c7",
        "#22a0b3",
        "#1e8d9d",
        "#187482",
        "#11545d"
    ],
    "blue": [
        "#eaf5ff",
        "#d3eaff",
        "#badfff",
        "#9ed2ff",
        "#7ec3ff",
        "#59b2ff",
        "#50a0e6",
        "#468dca",
        "#3a75a7",
        "#2a5478"
    ],
    "indigo": [
        "#f0ecfb",
        "#e0d8f6",
        "#cec2f1",
        "#baa7ec",
        "#a086e4",
        "#7c59db",
        "#6f50c5",
        "#6145ac",
        "#50398d",
        "#382863"
    ],
    "violet": [
        "#f5ecff",
        "#ead8ff",
        "#dec1ff",
        "#cfa7ff",
        "#be86ff",
        "#a659ff",
        "#9550e6",
        "#8346c9",
        "#6c3aa6",
        "#4c2976"
    ],
    "fuschia": [
        "#feedff",
        "#fdd9ff",
        "#fcc3ff",
        "#fba9ff",
        "#fa88ff",
        "#f959ff",
        "#e150e6",
        "#c546ca",
        "#a33aa7",
        "#762a78"
    ],
    "pink": [
        "#fdedf3",
        "#fcdae7",
        "#fbc4d9",
        "#f9aac9",
        "#f78bb5",
        "#f5619a",
        "#dd578b",
        "#c24c7a",
        "#a03f65",
        "#732d48"
    ]
};

var assertString_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    var invalidType;

    if (input === null) {
      invalidType = 'null';
    } else {
      invalidType = _typeof(input);

      if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name')) {
        invalidType = input.constructor.name;
      } else {
        invalidType = "a ".concat(invalidType);
      }
    }

    throw new TypeError("Expected string but received ".concat(invalidType, "."));
  }
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(assertString_1);

var isHexColor_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexColor;

var _assertString = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

function isHexColor(str) {
  (0, _assertString.default)(str);
  return hexcolor.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isHexColor_1);

var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var delay = function delay() {
  var ms = arguments.length <= 0 || arguments[0] === undefined ? 1000 : arguments[0];

  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};

exports.default = delay;
});

const delay = unwrapExports(dist);

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

var Sister;

/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
Sister = function () {
    var sister = {},
        events = {};

    /**
     * @name handler
     * @function
     * @param {Object} data Event data.
     */

    /**
     * @param {String} name Event name.
     * @param {handler} handler
     * @return {listener}
     */
    sister.on = function (name, handler) {
        var listener = {name: name, handler: handler};
        events[name] = events[name] || [];
        events[name].unshift(listener);
        return listener;
    };

    /**
     * @param {listener}
     */
    sister.off = function (listener) {
        var index = events[listener.name].indexOf(listener);

        if (index !== -1) {
            events[listener.name].splice(index, 1);
        }
    };

    /**
     * @param {String} name Event name.
     * @param {Object} data Event data.
     */
    sister.trigger = function (name, data) {
        var listeners = events[name],
            i;

        if (listeners) {
            i = listeners.length;
            while (i--) {
                listeners[i].handler(data);
            }
        }
    };

    return sister;
};

var sister = Sister;

const Linear = (time, beginningValue, changeValue, duration) => {
  return beginningValue + (changeValue * (time / duration));
};

const calculateValue = (startValue, endValue, ease, duration, progress) => {
  /**
   * TODO: Setup CSS support for basic unit support. - @ryan
   */

  if (duration === 0) {
    return endValue;
  }

  if (typeof startValue === 'string' || typeof endValue === 'string') {
    const [start, unit] = CSS_UNIT.match(startValue);
    const [end] = CSS_UNIT.match(endValue);
  }

  const diff = startValue > endValue
    ? -(startValue - endValue)
    : endValue - startValue;

  const value = ease(
    duration * progress,
    startValue,
    diff,
    duration
  );

  return startValue > endValue
    ? Math.max(endValue, Math.min(startValue, value))
    : Math.max(startValue, Math.min(endValue, value));
};

const updateValue = (ref) => {
  if (ref.startValue instanceof Object) {
    const nextValue = {};
    Object.keys(ref.startValue).forEach((key) => {
      nextValue[key] = calculateValue(
        ref.startValue[key],
        ref.endValue[key],
        ref.ease,
        ref.duration,
        ref.progress
      );
    });

    ref.value = nextValue;
    return;
  }

  ref.value = calculateValue(
    ref.startValue,
    ref.endValue,
    ref.ease,
    ref.duration,
    ref.progress
  );
};

class Tween {
  constructor({start, end, duration = 1000, ease = Linear, delay = 0}) {
    const emitter = new sister();
    this.on = emitter.on;
    this.off = emitter.off;
    this.trigger = emitter.trigger;

    this.value = this.startValue = start;
    this.endValue = end;
    this.duration = duration;
    this.ease = ease;
    this.delay = delay;
    this.active = false;
    this.complete = false;

    this.progress = 0;
    this.endTime = null;
  }

  start() {
    this.endTime = Date.now() + (this.duration * (1 - this.progress));

    this.trigger('start', {
      start: this.start,
      end: this.end,
      duration: this.duration,
      progress: this.progress,
      ease: this.ease,
      value: this.value,
    });

    this.animationFrame = requestAnimationFrame(this.tick.bind(this));
    this.active = true;
    this.complete = false;

    return this;
  }

  stop() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }

    this.progress = this.progress + ((this.endTime - Date.now()) / this.duration);
    this.endTime = null;
    this.active = false;

    updateValue(this);

    this.trigger('stop', {
      start: this.start,
      end: this.end,
      duration: this.duration,
      progress: this.progress,
      ease: this.ease,
      value: this.value,
    });

    return this;
  }

  tick() {
    this.progress = Math.max(0, Math.min(1, 1 - ((this.endTime - Date.now()) / this.duration)));

    updateValue(this);

    const tickResponse = {
      start: this.startValue,
      end: this.endValue,
      duration: this.duration,
      progress: this.progress,
      ease: this.ease,
      value: this.value,
    };

    this.trigger('tick', tickResponse);

    if (this.progress === 1 || this.duration === 0) {
      this.active = false;
      this.complete = true;
      return this.trigger('complete', tickResponse);
    }

    this.animationFrame = requestAnimationFrame(this.tick.bind(this));
  }
}

const In = (time, beginningValue, changeValue, duration) => {
  let s = 1.70158;
  return changeValue * (time /= duration) * time * ((s + 1) * time - s) + beginningValue;
};

const Out = (time, beginningValue, changeValue, duration) => {
  let s = 1.70158;
  return changeValue * ((time = time / duration - 1) * time * ((s + 1) * time + s) + 1) + beginningValue;
};

const InOut = (time, beginningValue, changeValue, duration) => {
  let s = 1.70158; 
  if ((time /= duration / 2) < 1) {
    return changeValue / 2 * (time * time * (((s *= (1.525)) + 1) * time - s)) + beginningValue;
  }

  return changeValue / 2 * ((time -= 2) * time * (((s *= (1.525)) + 1) * time + s) + 2) + beginningValue;
};

const Back = {
  In,
  Out,
  InOut,
};

const Out$1 = (time, beginningValue, changeValue, duration) => {
  if ((time /= duration) < (1 / 2.75)) {
    return changeValue * (7.5625 * time * time) + beginningValue;
  }

  if (time < (2 / 2.75)) {
    return changeValue * (7.5625 * (time -= (1.5 / 2.75)) * time + .75) + beginningValue;
  }

  if (time < (2.5/2.75)) {
    return changeValue * (7.5625 * (time -= (2.25 / 2.75)) * time + .9375) + beginningValue;
  }

  return changeValue * (7.5625 * (time -= (2.625 / 2.75)) * time + .984375) + beginningValue;
};

const In$1 = (time, beginningValue, changeValue, duration) => {
  return changeValue - bounceEaseOut(duration - time, 0, changeValue, duration) + beginningValue;
};

const InOut$1 = (time, beginningValue, changeValue, duration) => {
  if (time < duration / 2) {
    return In$1(time * 2, 0, changeValue, duration) * .5 + beginningValue;
  }

  return Out$1(time * 2 - duration, 0, changeValue, duration) * .5 + changeValue * .5 + beginningValue;
};

const Bounce = {
  In: In$1,
  Out: Out$1,
  InOut: InOut$1,
};

const In$2 = (time, beginningValue, changeValue, duration) => {
  return -changeValue * (Math.sqrt(1 - (time /= duration) * time) - 1) + beginningValue;
};

const Out$2 = (time, beginningValue, changeValue, duration) => {
  return changeValue * Math.sqrt(1 - (time = time / duration - 1) * time) + beginningValue;
};

const InOut$2 = (time, beginningValue, changeValue, duration) => {
  if ((time /= duration / 2) < 1) {
    return -changeValue / 2 * (Math.sqrt(1 - time * time) - 1) + beginningValue;
  }

  return changeValue / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + beginningValue;
};

const Circ = {
  In: In$2,
  Out: Out$2,
  InOut: InOut$2,
};

const In$3 = (time, beginningValue, changeValue, duration) => {
  return changeValue * (time /= duration) * time * time + beginningValue;
};

const Out$3 = (time, beginningValue, changeValue, duration) => {
  return changeValue * ((time = time / duration - 1) * time * time + 1) + beginningValue;
};

const InOut$3 = (time, beginningValue, changeValue, duration) => {
  if ((time /= duration / 2) < 1) {
    return changeValue / 2 * time * time * time + beginningValue;
  }

  return changeValue / 2 * ((time -= 2) * time * time + 2) + beginningValue;
};

const Cubic = {
  In: In$3,
  Out: Out$3,
  InOut: InOut$3,
};

const In$4 = (time, beginningValue, changeValue, duration) => {
  let s = 1.70158;
  let p = 0;
  let a = changeValue;

  if (time === 0) {
    return beginningValue;
  }

  if ((time /= duration) === 1) {
    return beginningValue + changeValue;
  }

  if (!p) {
    p = duration * .3;
  }

  if (a < Math.abs(changeValue)) {
    a = changeValue;
    s = p / 4;
  }
  else {
    s = p / (2 * Math.PI) * Math.asin(changeValue / a);
  }

  return -(a * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s) *(2 * Math.PI) / p)) + beginningValue;
};

const Out$4 = (time, beginningValue, changeValue, duration) => {
  let s = 1.70158;
  let p = 0;
  let a = changeValue;

  if (time === 0) {
    return beginningValue;
  }

  if ((time /= duration) === 1) {
    return beginningValue + changeValue;
  }

  if (!p) {
    p = duration * .3;
  }

  if (a < Math.abs(changeValue)) {
    a = changeValue;
    s = p / 4;
  }
  else {
    s = p / (2 * Math.PI) * Math.asin(changeValue / a);
  }

  return a * Math.pow(2,-10 * time) * Math.sin((time * duration - s) * (2 * Math.PI) / p) + changeValue + beginningValue;
};

const InOut$4 = (time, beginningValue, changeValue, duration) => {
  let s = 1.70158;
  let p = 0;
  let a = changeValue;

  if (time === 0) {
    return beginningValue;
  }

  if ((time /= duration / 2) === 2) {
    return beginningValue + changeValue;
  }

  if (!p) {
    p = duration * (.3 * 1.5);
  }

  if (a < Math.abs(changeValue)) {
    a = changeValue;
    s = p / 4;
  }
  else {
    s = p / (2 * Math.PI) * Math.asin(changeValue / a);
  }

  if (time < 1) {
    return -.5 * (a * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s) * (2 * Math.PI) / p)) + beginningValue;
  }

  return a * Math.pow(2, -10 * (time -= 1)) * Math.sin((time * duration - s) * (2 * Math.PI) / p) * .5 + changeValue + beginningValue;
};

const Elastic = {
  In: In$4,
  Out: Out$4,
  InOut: InOut$4,
};

const In$5 = (time, beginningValue, changeValue, duration) => {
  return (time === 0)
    ? beginningValue
    : changeValue * Math.pow(2, 10 * (time / duration - 1)) + beginningValue;
};

const Out$5 = (time, beginningValue, changeValue, duration) => {
  return (time === duration)
    ? beginningValue + changeValue
    : changeValue * (-Math.pow(2, -10 * time / duration) + 1) + beginningValue;
};

const InOut$5 = (time, beginningValue, changeValue, duration) => {
  if (time === 0) {
    return beginningValue;
  }

  if (time === duration) {
    return beginningValue + changeValue;
  }

  if ((time /= duration / 2) < 1) {
    return changeValue / 2 * Math.pow(2, 10 * (time - 1)) + beginningValue;
  }

  return changeValue / 2 * (-Math.pow(2, -10 * --time) + 2) + beginningValue;
};

const Expo = {
  In: In$5,
  Out: Out$5,
  InOut: InOut$5,
};

const In$6 = (time, beginningValue, changeValue, duration) => {
  return changeValue * (time /= duration) * time + beginningValue;
};

const Out$6 = (time, beginningValue, changeValue, duration) => {
  return -changeValue * (time /= duration) * (time - 2) + beginningValue;
};

const InOut$6 = (time, beginningValue, changeValue, duration) => {
  if ((time /= duration / 2) < 1) {
    return changeValue / 2 * time * time + beginningValue;
  }

  return -changeValue / 2 * ((--time) * (time - 2) - 1) + beginningValue;
};

const Quad = {
  In: In$6,
  Out: Out$6,
  InOut: InOut$6,
};

const In$7 = (time, beginningValue, changeValue, duration) => {
  return changeValue * (time /= duration) * time * time * time + beginningValue;
};

const Out$7 = (time, beginningValue, changeValue, duration) => {
  return -changeValue * ((time = time / duration - 1) * time * time * time - 1) + beginningValue;
};

const InOut$7 = (time, beginningValue, changeValue, duration) => {
  if ((time /= duration / 2) < 1) {
    return changeValue / 2 * time * time * time * time + beginningValue;
  }

  return -changeValue / 2 * ((time -= 2) * time * time * time - 2) + beginningValue;
};

const Quart = {
  In: In$7,
  Out: Out$7,
  InOut: InOut$7,
};

const In$8 = (time, beginningValue, changeValue, duration) => {
  return changeValue * (time /= duration) * time * time * time * time + beginningValue;
};

const Out$8 = (time, beginningValue, changeValue, duration) => {
  return changeValue * ((time = time / duration - 1) * time * time * time * time + 1) + beginningValue;
};

const InOut$8 = (time, beginningValue, changeValue, duration) => {
  if ((time /= duration / 2) < 1) {
    return changeValue / 2 * time * time * time * time * time + beginningValue;
  }

  return changeValue / 2 * ((time -= 2) * time * time * time * time + 2) + beginningValue;
};

const Quint = {
  In: In$8,
  Out: Out$8,
  InOut: InOut$8,
};

const In$9 = (time, beginningValue, changeValue, duration) => {
  return -changeValue * Math.cos(time / duration * (Math.PI / 2)) + changeValue + beginningValue;
};

const Out$9 = (time, beginningValue, changeValue, duration) => {
  return changeValue * Math.sin(time / duration * (Math.PI / 2)) + beginningValue;
};

const InOut$9 = (time, beginningValue, changeValue, duration) => {
  return -changeValue / 2 * (Math.cos(Math.PI * time / duration) - 1) + beginningValue;
};

const Sine = {
  In: In$9,
  Out: Out$9,
  InOut: InOut$9,
};

const Easing = {
  Back,
  Bounce,
  Circ,
  Cubic,
  Elastic,
  Expo,
  Linear,
  Quad,
  Quart,
  Quint,
  Sine,
};

function focusWithin(document, opts) {
  const className = Object(opts).className;
  const attr = Object(opts).attr || 'focus-within';
  const force = Object(opts).force;
  const lastElements = [];

  try {
    document.querySelector(':focus-within');

    if (!force) {
      return initialize;
    }
  } catch (ignoredError) {
    /* do nothing and continue */
  }

  function onfocuschange() {
    let lastElement;

    while (lastElement = lastElements.pop()) {
      if (attr) {
        lastElement.removeAttribute(attr);
      }

      if (className) {
        lastElement.classList.remove(className);
      }
    }

    let activeElement = document.activeElement; // only add focus if it has not been added and is not the document element

    if (!/^(#document|HTML|BODY)$/.test(Object(activeElement).nodeName)) {
      while (activeElement && activeElement.nodeType === 1) {
        if (attr) {
          activeElement.setAttribute(attr, '');
        }

        if (className) {
          activeElement.classList.add(className);
        }

        lastElements.push(activeElement);
        activeElement = activeElement.parentNode;
      }
    }
  }

  function initialize() {
    document.addEventListener('focus', onfocuschange, true);
    document.addEventListener('blur', onfocuschange, true);
  }
  /**
  * Callback wrapper for check loaded state
  */

  /* eslint-disable */


  !function load() {
    if (/m/.test(document.readyState)) {
      document.removeEventListener('readystatechange', load) | initialize();
    } else {
      document.addEventListener('readystatechange', load);
    }
  }();
  /* eslint-enable */

  return initialize;
}

var parentNodeSelector = function (element, parentselector) {
    if ( !parentselector && 'string' === typeof element ) {
        parentselector = element;
        element = this;
    }
    var selectors = parentselector.split(/(?=[#\.])/),
        tagname = selectors.shift();

    return parentNodeUp(element)

    function parentNodeUp (et) {
        return (tagname.toLowerCase() === et.tagName.toLowerCase()) && selectorMatchAll(selectors)
            ? et: parentNodeUp(et.parentNode)

        function selectorMatchAll(selectors) {
            if ( 0 === selectors.length ) { return true }
            return selectors.reduce(function (lastselectormatched, selector) {
                return !lastselectormatched || !selectorMatch(selector)? false: true
            }, true) // start with lastselectormatched is true

            function selectorMatch(selector) {
                var selectorparts = selector.split(/^([#\.])/).splice(1);
                var selregex = new RegExp('\\b' + selectorparts[1] + '\\b', 'i');
                switch ( selectorparts[0] ) {
                    case '#': return selectorparts[1].toLowerCase() === et.id.toLowerCase()
                        break
                    case '.': return et.className.match(selregex)
                        break
                }
            }
        }
    }
};

var umd = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	 module.exports = factory() ;
}(commonjsGlobal, function () {
	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {}
	}

	function cloneUnlessOtherwiseSpecified(value, options) {
		return (options.clone !== false && options.isMergeableObject(value))
			? deepmerge(emptyTarget(value), value, options)
			: value
	}

	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options)
		})
	}

	function getMergeFunction(key, options) {
		if (!options.customMerge) {
			return deepmerge
		}
		var customMerge = options.customMerge(key);
		return typeof customMerge === 'function' ? customMerge : deepmerge
	}

	function getEnumerableOwnPropertySymbols(target) {
		return Object.getOwnPropertySymbols
			? Object.getOwnPropertySymbols(target).filter(function(symbol) {
				return target.propertyIsEnumerable(symbol)
			})
			: []
	}

	function getKeys(target) {
		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
	}

	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) {
			getKeys(target).forEach(function(key) {
				destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
			});
		}
		getKeys(source).forEach(function(key) {
			if (!options.isMergeableObject(source[key]) || !target[key]) {
				destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
			} else {
				destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			}
		});
		return destination
	}

	function deepmerge(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;

		var sourceIsArray = Array.isArray(source);
		var targetIsArray = Array.isArray(target);
		var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

		if (!sourceAndTargetTypesMatch) {
			return cloneUnlessOtherwiseSpecified(source, options)
		} else if (sourceIsArray) {
			return options.arrayMerge(target, source, options)
		} else {
			return mergeObject(target, source, options)
		}
	}

	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) {
			throw new Error('first argument should be an array')
		}

		return array.reduce(function(prev, next) {
			return deepmerge(prev, next, options)
		}, {})
	};

	var deepmerge_1 = deepmerge;

	return deepmerge_1;

}));
});

var tinyDatePicker = createCommonjsModule(function (module, exports) {
(function (global, factory) {
   module.exports = factory() ;
}(commonjsGlobal, (function () {
  /**
   * @file A generic set of mutation-free date functions.
   */

  /**
   * now returns the current date without any time values
   *
   * @returns {Date}
   */
  function now() {
    var dt = new Date();
    dt.setHours(0, 0, 0, 0);
    return dt;
  }

  /**
   * dateEq compares two dates
   *
   * @param {Date} date1 the first date
   * @param {Date} date2 the second date
   * @returns {boolean}
   */
  function datesEq(date1, date2) {
    return (date1 && date1.toDateString()) === (date2 && date2.toDateString());
  }

  /**
   * shiftDay shifts the specified date by n days
   *
   * @param {Date} dt
   * @param {number} n
   * @returns {Date}
   */
  function shiftDay(dt, n) {
    dt = new Date(dt);
    dt.setDate(dt.getDate() + n);
    return dt;
  }

  /**
   * shiftMonth shifts the specified date by a specified number of months
   *
   * @param {Date} dt
   * @param {number} n
   * @param {boolean} wrap optional, if true, does not change year
   *                       value, defaults to false
   * @returns {Date}
   */
  function shiftMonth(dt, n, wrap) {
    dt = new Date(dt);

    var dayOfMonth = dt.getDate();
    var month = dt.getMonth() + n;

    dt.setDate(1);
    dt.setMonth(wrap ? (12 + month) % 12 : month);
    dt.setDate(dayOfMonth);

    // If dayOfMonth = 31, but the target month only has 30 or 29 or whatever...
    // head back to the max of the target month
    if (dt.getDate() < dayOfMonth) {
      dt.setDate(0);
    }

    return dt;
  }

  /**
   * shiftYear shifts the specified date by n years
   *
   * @param {Date} dt
   * @param {number} n
   * @returns {Date}
   */
  function shiftYear(dt, n) {
    dt = new Date(dt);
    dt.setFullYear(dt.getFullYear() + n);
    return dt;
  }

  /**
   * setYear changes the specified date to the specified year
   *
   * @param {Date} dt
   * @param {number} year
   */
  function setYear(dt, year) {
    dt = new Date(dt);
    dt.setFullYear(year);
    return dt;
  }

  /**
   * setMonth changes the specified date to the specified month
   *
   * @param {Date} dt
   * @param {number} month
   */
  function setMonth(dt, month) {
    return shiftMonth(dt, month - dt.getMonth());
  }

  /**
   * dateOrParse creates a function which, given a date or string, returns a date
   *
   * @param {function} parse the function used to parse strings
   * @returns {function}
   */
  function dateOrParse(parse) {
    return function (dt) {
      return dropTime(typeof dt === 'string' ? parse(dt) : dt);
    };
  }

  /**
   * constrainDate returns dt or min/max depending on whether dt is out of bounds (inclusive)
   *
   * @export
   * @param {Date} dt
   * @param {Date} min
   * @param {Date} max
   * @returns {Date}
   */
  function constrainDate(dt, min, max) {
    return (dt < min) ? min :
           (dt > max) ? max :
           dt;
  }

  function dropTime(dt) {
    dt = new Date(dt);
    dt.setHours(0, 0, 0, 0);
    return dt;
  }

  /**
   * @file Utility functions for function manipulation.
   */

  /**
   * bufferFn buffers calls to fn so they only happen every ms milliseconds
   *
   * @param {number} ms number of milliseconds
   * @param {function} fn the function to be buffered
   * @returns {function}
   */
  function bufferFn(ms, fn) {
    var timeout = undefined;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(fn, ms);
    };
  }

  /**
   * noop is a function which does nothing at all.
   */
  function noop() { }

  /**
   * copy properties from object o2 to object o1.
   *
   * @params {Object} o1
   * @params {Object} o2
   * @returns {Object}
   */
  function cp() {
    var args = arguments;
    var o1 = args[0];
    for (var i = 1; i < args.length; ++i) {
      var o2 = args[i] || {};
      for (var key in o2) {
        o1[key] = o2[key];
      }
    }
    return o1;
  }

  /**
   * @file Responsible for sanitizing and creating date picker options.
   */

  var english = {
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    today: 'Today',
    clear: 'Clear',
    close: 'Close',
  };

  /**
   * DatePickerOptions constructs a new date picker options object, overriding
   * default values with any values specified in opts.
   *
   * @param {DatePickerOptions} opts
   * @returns {DatePickerOptions}
   */
  function DatePickerOptions(opts) {
    opts = opts || {};
    opts = cp(defaults(), opts);
    var parse = dateOrParse(opts.parse);
    opts.lang = cp(english, opts.lang);
    opts.parse = parse;
    opts.inRange = makeInRangeFn(opts);
    opts.min = parse(opts.min || shiftYear(now(), -100));
    opts.max = parse(opts.max || shiftYear(now(), 100));
    opts.hilightedDate = opts.parse(opts.hilightedDate);

    return opts;
  }

  function defaults() {
    return {
      lang: english,

      // Possible values: dp-modal, dp-below, dp-permanent
      mode: 'dp-modal',

      // The date to hilight initially if the date picker has no
      // initial value.
      hilightedDate: now(),

      format: function (dt) {
        return (dt.getMonth() + 1) + '/' + dt.getDate() + '/' + dt.getFullYear();
      },

      parse: function (str) {
        var date = new Date(str);
        return isNaN(date) ? now() : date;
      },

      dateClass: function () { },

      inRange: function () {
        return true;
      }
    };
  }

  function makeInRangeFn(opts) {
    var inRange = opts.inRange; // Cache this version, and return a variant

    return function (dt, dp) {
      return inRange(dt, dp) && opts.min <= dt && opts.max >= dt;
    };
  }

  /**
   * @file Helper functions for dealing with dom elements.
   */

  var Key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    enter: 13,
    esc: 27,
  };

  /**
   * on attaches an event handler to the specified element, and returns an
   * off function which can be used to remove the handler.
   *
   * @param {string} evt the name of the event to handle
   * @param {HTMLElement} el the element to attach to
   * @param {function} handler the event handler
   * @returns {function} the off function
   */
  function on(evt, el, handler) {
    el.addEventListener(evt, handler, true);

    return function () {
      el.removeEventListener(evt, handler, true);
    };
  }

  var CustomEvent = shimCustomEvent();

  function shimCustomEvent() {
    var CustomEvent = window.CustomEvent;

    if (typeof CustomEvent !== 'function') {
      CustomEvent = function (event, params) {
        params = params || {bubbles: false, cancelable: false, detail: undefined};
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      };

      CustomEvent.prototype = window.Event.prototype;
    }

    return CustomEvent;
  }

  /**
   * @file Manages the calendar / day-picker view.
   */

  var dayPicker = {
    onKeyDown: keyDown,
    onClick: {
      'dp-day': selectDay,
      'dp-next': gotoNextMonth,
      'dp-prev': gotoPrevMonth,
      'dp-today': selectToday,
      'dp-clear': clear,
      'dp-close': close,
      'dp-cal-month': showMonthPicker,
      'dp-cal-year': showYearPicker,
    },
    render: render
  };

  /**
   * view renders the calendar (day picker) as an HTML string.
   *
   * @param {DatePickerContext} context the date picker being rendered
   * @returns {string}
   */
  function render(dp) {
    var opts = dp.opts;
    var lang = opts.lang;
    var state = dp.state;
    var dayNames = lang.days;
    var dayOffset = opts.dayOffset || 0;
    var selectedDate = state.selectedDate;
    var hilightedDate = state.hilightedDate;
    var hilightedMonth = hilightedDate.getMonth();
    var today = now().getTime();

    return (
      '<div class="dp-cal">' +
        '<header class="dp-cal-header">' +
          '<button tabindex="-1" type="button" class="dp-prev">Prev</button>' +
          '<button tabindex="-1" type="button" class="dp-cal-month">' +
            lang.months[hilightedMonth] +
          '</button>' +
          '<button tabindex="-1" type="button" class="dp-cal-year">' +
            hilightedDate.getFullYear() +
          '</button>' +
          '<button tabindex="-1" type="button" class="dp-next">Next</button>' +
        '</header>' +
        '<div class="dp-days">' +
          dayNames.map(function (name, i) {
            return (
              '<span class="dp-col-header">' + dayNames[(i + dayOffset) % dayNames.length] + '</span>'
            );
          }).join('') +
          mapDays(hilightedDate, dayOffset, function (date) {
            var isNotInMonth = date.getMonth() !== hilightedMonth;
            var isDisabled = !opts.inRange(date);
            var isToday = date.getTime() === today;
            var className = 'dp-day';
            className += (isNotInMonth ? ' dp-edge-day' : '');
            className += (datesEq(date, hilightedDate) ? ' dp-current' : '');
            className += (datesEq(date, selectedDate) ? ' dp-selected' : '');
            className += (isDisabled ? ' dp-day-disabled' : '');
            className += (isToday ? ' dp-day-today' : '');
            className += ' ' + opts.dateClass(date, dp);

            return (
              '<button tabindex="-1" type="button" class="' + className + '" data-date="' + date.getTime() + '">' +
                date.getDate() +
              '</button>'
            );
          }) +
        '</div>' +
        '<footer class="dp-cal-footer">' +
          '<button tabindex="-1" type="button" class="dp-today">' + lang.today + '</button>' +
          '<button tabindex="-1" type="button" class="dp-clear">' + lang.clear + '</button>' +
          '<button tabindex="-1" type="button" class="dp-close">' + lang.close + '</button>' +
        '</footer>' +
      '</div>'
    );
  }

  /**
   * keyDown handles the key down event for the day-picker
   *
   * @param {Event} e
   * @param {DatePickerContext} dp
   */
  function keyDown(e, dp) {
    var key = e.keyCode;
    var shiftBy =
      (key === Key.left) ? -1 :
      (key === Key.right) ? 1 :
      (key === Key.up) ? -7 :
      (key === Key.down) ? 7 :
      0;

    if (key === Key.esc) {
      dp.close();
    } else if (shiftBy) {
      e.preventDefault();
      dp.setState({
        hilightedDate: shiftDay(dp.state.hilightedDate, shiftBy)
      });
    }
  }

  function selectToday(e, dp) {
    dp.setState({
      selectedDate: now(),
    });
  }

  function clear(e, dp) {
    dp.setState({
      selectedDate: null,
    });
  }

  function close(e, dp) {
    dp.close();
  }

  function showMonthPicker(e, dp) {
    dp.setState({
      view: 'month'
    });
  }

  function showYearPicker(e, dp) {
    dp.setState({
      view: 'year'
    });
  }

  function gotoNextMonth(e, dp) {
    var hilightedDate = dp.state.hilightedDate;
    dp.setState({
      hilightedDate: shiftMonth(hilightedDate, 1)
    });
  }

  function gotoPrevMonth(e, dp) {
    var hilightedDate = dp.state.hilightedDate;
    dp.setState({
      hilightedDate: shiftMonth(hilightedDate, -1)
    });
  }

  function selectDay(e, dp) {
    dp.setState({
      selectedDate: new Date(parseInt(e.target.getAttribute('data-date'))),
    });
  }

  function mapDays(currentDate, dayOffset, fn) {
    var result = '';
    var iter = new Date(currentDate);
    iter.setDate(1);
    iter.setDate(1 - iter.getDay() + dayOffset);

    // If we are showing monday as the 1st of the week,
    // and the monday is the 2nd of the month, the sunday won't
    // show, so we need to shift backwards
    if (dayOffset && iter.getDate() === dayOffset + 1) {
      iter.setDate(dayOffset - 6);
    }

    // We are going to have 6 weeks always displayed to keep a consistent
    // calendar size
    for (var day = 0; day < (6 * 7); ++day) {
      result += fn(iter);
      iter.setDate(iter.getDate() + 1);
    }

    return result;
  }

  /**
   * @file Manages the month-picker view.
   */

  var monthPicker = {
    onKeyDown: keyDown$1,
    onClick: {
      'dp-month': onChooseMonth
    },
    render: render$1
  };

  function onChooseMonth(e, dp) {
    dp.setState({
      hilightedDate: setMonth(dp.state.hilightedDate, parseInt(e.target.getAttribute('data-month'))),
      view: 'day',
    });
  }

  /**
   * render renders the month picker as an HTML string
   *
   * @param {DatePickerContext} dp the date picker context
   * @returns {string}
   */
  function render$1(dp) {
    var opts = dp.opts;
    var lang = opts.lang;
    var months = lang.months;
    var currentDate = dp.state.hilightedDate;
    var currentMonth = currentDate.getMonth();

    return (
      '<div class="dp-months">' +
        months.map(function (month, i) {
          var className = 'dp-month';
          className += (currentMonth === i ? ' dp-current' : '');

          return (
            '<button tabindex="-1" type="button" class="' + className + '" data-month="' + i + '">' +
              month +
            '</button>'
          );
        }).join('') +
      '</div>'
    );
  }

  /**
   * keyDown handles keydown events that occur in the month picker
   *
   * @param {Event} e
  * @param {DatePickerContext} dp
   */
  function keyDown$1(e, dp) {
    var key = e.keyCode;
    var shiftBy =
      (key === Key.left) ? -1 :
      (key === Key.right) ? 1 :
      (key === Key.up) ? -3 :
      (key === Key.down) ? 3 :
      0;

    if (key === Key.esc) {
      dp.setState({
        view: 'day',
      });
    } else if (shiftBy) {
      e.preventDefault();
      dp.setState({
        hilightedDate: shiftMonth(dp.state.hilightedDate, shiftBy, true)
      });
    }
  }

  /**
   * @file Manages the year-picker view.
   */

  var yearPicker = {
    render: render$2,
    onKeyDown: keyDown$2,
    onClick: {
      'dp-year': onChooseYear
    },
  };

  /**
   * view renders the year picker as an HTML string.
   *
   * @param {DatePickerContext} dp the date picker context
   * @returns {string}
   */
  function render$2(dp) {
    var state = dp.state;
    var currentYear = state.hilightedDate.getFullYear();
    var selectedYear = state.selectedDate.getFullYear();

    return (
      '<div class="dp-years">' +
        mapYears(dp, function (year) {
          var className = 'dp-year';
          className += (year === currentYear ? ' dp-current' : '');
          className += (year === selectedYear ? ' dp-selected' : '');

          return (
            '<button tabindex="-1" type="button" class="' + className + '" data-year="' + year + '">' +
              year +
            '</button>'
          );
        }) +
      '</div>'
    );
  }

  function onChooseYear(e, dp) {
    dp.setState({
      hilightedDate: setYear(dp.state.hilightedDate, parseInt(e.target.getAttribute('data-year'))),
      view: 'day',
    });
  }

  function keyDown$2(e, dp) {
    var key = e.keyCode;
    var opts = dp.opts;
    var shiftBy =
      (key === Key.left || key === Key.up) ? 1 :
      (key === Key.right || key === Key.down) ? -1 :
      0;

    if (key === Key.esc) {
      dp.setState({
        view: 'day',
      });
    } else if (shiftBy) {
      e.preventDefault();
      var shiftedYear = shiftYear(dp.state.hilightedDate, shiftBy);

      dp.setState({
        hilightedDate: constrainDate(shiftedYear, opts.min, opts.max),
      });
    }
  }

  function mapYears(dp, fn) {
    var result = '';
    var max = dp.opts.max.getFullYear();

    for (var i = max; i >= dp.opts.min.getFullYear(); --i) {
      result += fn(i);
    }

    return result;
  }

  /**
   * @file Defines the base date picker behavior, overridden by various modes.
   */

  var views = {
    day: dayPicker,
    year: yearPicker,
    month: monthPicker
  };

  function BaseMode(input, emit, opts) {
    var detatchInputEvents; // A function that detaches all events from the input
    var closing = false; // A hack to prevent calendar from re-opening when closing.
    var selectedDate; // The currently selected date
    var dp = {
      // The root DOM element for the date picker, initialized on first open.
      el: undefined,
      opts: opts,
      shouldFocusOnBlur: true,
      shouldFocusOnRender: true,
      state: initialState(),
      adjustPosition: noop,
      containerHTML: '<div class="dp"></div>',

      attachToDom: function () {
        document.body.appendChild(dp.el);
      },

      updateInput: function (selectedDate) {
        var e = new CustomEvent('change', {bubbles: true});
        e.simulated = true;
        input.value = selectedDate ? opts.format(selectedDate) : '';
        input.dispatchEvent(e);
      },

      computeSelectedDate: function () {
        return opts.parse(input.value);
      },

      currentView: function() {
        return views[dp.state.view];
      },

      open: function () {
        if (closing) {
          return;
        }

        if (!dp.el) {
          dp.el = createContainerElement(opts, dp.containerHTML);
          attachContainerEvents(dp);
        }

        selectedDate = constrainDate(dp.computeSelectedDate(), opts.min, opts.max);
        dp.state.hilightedDate = selectedDate || opts.hilightedDate;
        dp.state.view = 'day';

        dp.attachToDom();
        dp.render();

        emit('open');
      },

      isVisible: function () {
        return !!dp.el && !!dp.el.parentNode;
      },

      hasFocus: function () {
        var focused = document.activeElement;
        return dp.el &&
          dp.el.contains(focused) &&
          focused.className.indexOf('dp-focuser') < 0;
      },

      shouldHide: function () {
        return dp.isVisible();
      },

      close: function (becauseOfBlur) {
        var el = dp.el;

        if (!dp.isVisible()) {
          return;
        }

        if (el) {
          var parent = el.parentNode;
          parent && parent.removeChild(el);
        }

        closing = true;

        if (becauseOfBlur && dp.shouldFocusOnBlur) {
          focusInput(input);
        }

        // When we close, the input often gains refocus, which
        // can then launch the date picker again, so we buffer
        // a bit and don't show the date picker within N ms of closing
        setTimeout(function() {
          closing = false;
        }, 100);

        emit('close');
      },

      destroy: function () {
        dp.close();
        detatchInputEvents();
      },

      render: function () {
        if (!dp.el || !dp.el.firstChild) {
          return;
        }

        var hadFocus = dp.hasFocus();
        var html = dp.currentView().render(dp);
        html && (dp.el.firstChild.innerHTML = html);

        dp.adjustPosition();

        if (hadFocus || dp.shouldFocusOnRender) {
          focusCurrent(dp);
        }
      },

      // Conceptually similar to setState in React, updates
      // the view state and re-renders.
      setState: function (state) {
        for (var key in state) {
          dp.state[key] = state[key];
        }

        emit('statechange');
        dp.render();
      },
    };

    detatchInputEvents = attachInputEvents(input, dp);

    // Builds the initial view state
    // selectedDate is a special case and causes changes to hilightedDate
    // hilightedDate is set on open, so remains undefined initially
    // view is the current view (day, month, year)
    function initialState() {
      return {
        get selectedDate() {
          return selectedDate;
        },
        set selectedDate(dt) {
          if (dt && !opts.inRange(dt)) {
            return;
          }

          if (dt) {
            selectedDate = new Date(dt);
            dp.state.hilightedDate = selectedDate;
          } else {
            selectedDate = dt;
          }

          dp.updateInput(selectedDate);
          emit('select');
          dp.close();
        },
        view: 'day',
      };
    }

    return dp;
  }

  function createContainerElement(opts, containerHTML) {
    var el = document.createElement('div');

    el.className = opts.mode;
    el.innerHTML = containerHTML;

    return el;
  }

  function attachInputEvents(input, dp) {
    var bufferShow = bufferFn(5, function () {
      if (dp.shouldHide()) {
        dp.close();
      } else {
        dp.open();
      }
    });

    var off = [
      on('blur', input, bufferFn(150, function () {
        if (!dp.hasFocus()) {
          dp.close(true);
        }
      })),

      on('mousedown', input, function () {
        if (input === document.activeElement) {
          bufferShow();
        }
      }),

      on('focus', input, bufferShow),

      on('input', input, function (e) {
        var date = dp.opts.parse(e.target.value);
        isNaN(date) || dp.setState({
          hilightedDate: date
        });
      }),
    ];

    // Unregister all events that were registered above.
    return function() {
      off.forEach(function (f) {
        f();
      });
    };
  }

  function focusCurrent(dp) {
    var current = dp.el.querySelector('.dp-current');
    return current && current.focus();
  }

  function attachContainerEvents(dp) {
    var el = dp.el;
    var calEl = el.querySelector('.dp');

    // Hack to get iOS to show active CSS states
    el.ontouchstart = noop;

    function onClick(e) {
      e.target.className.split(' ').forEach(function(evt) {
        var handler = dp.currentView().onClick[evt];
        handler && handler(e, dp);
      });
    }

    // The calender fires a blur event *every* time we redraw
    // this means we need to buffer the blur event to see if
    // it still has no focus after redrawing, and only then
    // do we return focus to the input. A possible other approach
    // would be to set context.redrawing = true on redraw and
    // set it to false in the blur event.
    on('blur', calEl, bufferFn(150, function () {
      if (!dp.hasFocus()) {
        dp.close(true);
      }
    }));

    on('keydown', el, function (e) {
      if (e.keyCode === Key.enter) {
        onClick(e);
      } else {
        dp.currentView().onKeyDown(e, dp);
      }
    });

    // If the user clicks in non-focusable space, but
    // still within the date picker, we don't want to
    // hide, so we need to hack some things...
    on('mousedown', calEl, function (e) {
      e.target.focus && e.target.focus(); // IE hack
      if (document.activeElement !== e.target) {
        e.preventDefault();
        focusCurrent(dp);
      }
    });

    on('click', el, onClick);
  }

  function focusInput(input) {
    // When the modal closes, we need to focus the original input so the
    // user can continue tabbing from where they left off.
    input.focus();

    // iOS zonks out if we don't blur the input, so...
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      input.blur();
    }
  }

  /**
   * @file Defines the modal date picker behavior.
   */

  function ModalMode(input, emit, opts) {
    var dp = BaseMode(input, emit, opts);

    // In modal mode, users really shouldn't be able to type in
    // the input, as all input is done via the calendar.
    input.readonly = true;

    // In modal mode, we need to know when the user has tabbed
    // off the end of the calendar, and set focus to the original
    // input. To do this, we add a special element to the DOM.
    // When the user tabs off the bottom of the calendar, they
    // will tab onto this element.
    dp.containerHTML += '<a href="#" class="dp-focuser">.</a>';

    return dp;
  }

  /**
   * @file Defines the dropdown date picker behavior.
   */

  function DropdownMode(input, emit, opts) {
    var dp = BaseMode(input, emit, opts);

    dp.shouldFocusOnBlur = false;

    Object.defineProperty(dp, 'shouldFocusOnRender', {
      get: function() {
        return input !== document.activeElement;
      }
    });

    dp.adjustPosition = function () {
      autoPosition(input, dp);
    };

    return dp;
  }

  function autoPosition(input, dp) {
    var inputPos = input.getBoundingClientRect();
    var win = window;

    adjustCalY(dp, inputPos, win);
    adjustCalX(dp, inputPos, win);

    dp.el.style.visibility = '';
  }

  function adjustCalX(dp, inputPos, win) {
    var cal = dp.el;
    var scrollLeft = win.pageXOffset;
    var inputLeft = inputPos.left + scrollLeft;
    var maxRight = win.innerWidth + scrollLeft;
    var offsetWidth = cal.offsetWidth;
    var calRight = inputLeft + offsetWidth;
    var shiftedLeft = maxRight - offsetWidth;
    var left = calRight > maxRight && shiftedLeft > 0 ? shiftedLeft : inputLeft;

    cal.style.left = left + 'px';
  }

  function adjustCalY(dp, inputPos, win) {
    var cal = dp.el;
    var scrollTop = win.pageYOffset;
    var inputTop = scrollTop + inputPos.top;
    var calHeight = cal.offsetHeight;
    var belowTop = inputTop + inputPos.height + 8;
    var aboveTop = inputTop - calHeight - 8;
    var isAbove = (aboveTop > 0 && belowTop + calHeight > scrollTop + win.innerHeight);
    var top = isAbove ? aboveTop : belowTop;

    if (cal.classList) {
      cal.classList.toggle('dp-is-above', isAbove);
      cal.classList.toggle('dp-is-below', !isAbove);
    }
    cal.style.top = top + 'px';
  }

  /**
   * @file Defines the permanent date picker behavior.
   */

  function PermanentMode(root, emit, opts) {
    var dp = BaseMode(root, emit, opts);

    dp.close = noop;
    dp.destroy = noop;
    dp.updateInput = noop;
    dp.shouldFocusOnRender = opts.shouldFocusOnRender;

    dp.computeSelectedDate = function () {
      return opts.hilightedDate;
    };

    dp.attachToDom = function () {
      root.appendChild(dp.el);
    };

    dp.open();

    return dp;
  }

  /**
   * @file Defines the various date picker modes (modal, dropdown, permanent)
   */

  function Mode(input, emit, opts) {
    input = input && input.tagName ? input : document.querySelector(input);

    if (opts.mode === 'dp-modal') {
      return ModalMode(input, emit, opts);
    }

    if (opts.mode === 'dp-below') {
      return DropdownMode(input, emit, opts);
    }

    if (opts.mode === 'dp-permanent') {
      return PermanentMode(input, emit, opts);
    }
  }

  /**
   * @file Defines simple event emitter behavior.
   */

  /**
   * Emitter constructs a new emitter object which has on/off methods.
   *
   * @returns {EventEmitter}
   */
  function Emitter() {
    var handlers = {};

    function onOne(name, handler) {
      (handlers[name] = (handlers[name] || [])).push(handler);
    }

    function onMany(fns) {
      for (var name in fns) {
        onOne(name, fns[name]);
      }
    }

    return {
      on: function (name, handler) {
        if (handler) {
          onOne(name, handler);
        } else {
          onMany(name);
        }

        return this;
      },

      emit: function (name, arg) {
        (handlers[name] || []).forEach(function (handler) {
          handler(name, arg);
        });
      },

      off: function (name, handler) {
        if (!name) {
          handlers = {};
        } else if (!handler) {
          handlers[name] = [];
        } else {
          handlers[name] = (handlers[name] || []).filter(function (h) {
            return h !== handler;
          });
        }

        return this;
      }
    };
  }

  /**
   * @file The root date picker file, defines public exports for the library.
   */

  /**
  * The date picker language configuration
  * @typedef {Object} LangOptions
  * @property {Array.<string>} [days] - Days of the week
  * @property {Array.<string>} [months] - Months of the year
  * @property {string} today - The label for the 'today' button
  * @property {string} close - The label for the 'close' button
  * @property {string} clear - The label for the 'clear' button
  */

  /**
  * The configuration options for a date picker.
  *
  * @typedef {Object} DatePickerOptions
  * @property {LangOptions} [lang] - Configures the label text, defaults to English
  * @property {('dp-modal'|'dp-below'|'dp-permanent')} [mode] - The date picker mode, defaults to 'dp-modal'
  * @property {(string|Date)} [hilightedDate] - The date to hilight if no date is selected
  * @property {function(string|Date):Date} [parse] - Parses a date, the complement of the "format" function
  * @property {function(Date):string} [format] - Formats a date for displaying to user
  * @property {function(Date):string} [dateClass] - Associates a custom CSS class with a date
  * @property {function(Date):boolean} [inRange] - Indicates whether or not a date is selectable
  * @property {(string|Date)} [min] - The minimum selectable date (inclusive, default 100 years ago)
  * @property {(string|Date)} [max] - The maximum selectable date (inclusive, default 100 years from now)
  */

  /**
  * The state values for the date picker
  *
  * @typedef {Object} DatePickerState
  * @property {string} view - The current view 'day' | 'month' | 'year'
  * @property {Date} selectedDate - The date which has been selected by the user
  * @property {Date} hilightedDate - The date which is currently hilighted / active
  */

  /**
  * An instance of TinyDatePicker
  *
  * @typedef {Object} DatePicker
  * @property {DatePickerState} state - The values currently displayed.
  * @property {function} on - Adds an event handler
  * @property {function} off - Removes an event handler
  * @property {function} setState - Changes the current state of the date picker
  * @property {function} open - Opens the date picker
  * @property {function} close - Closes the date picker
  * @property {function} destroy - Destroys the date picker (removing all handlers from the input, too)
  */

  /**
   * TinyDatePicker constructs a new date picker for the specified input
   *
   * @param {HTMLElement | string} input The input or CSS selector associated with the datepicker
   * @param {DatePickerOptions} opts The options for initializing the date picker
   * @returns {DatePicker}
   */
  function TinyDatePicker(input, opts) {
    var emitter = Emitter();
    var options = DatePickerOptions(opts);
    var mode = Mode(input, emit, options);
    var me = {
      get state() {
        return mode.state;
      },
      on: emitter.on,
      off: emitter.off,
      setState: mode.setState,
      open: mode.open,
      close: mode.close,
      destroy: mode.destroy,
    };

    function emit(evt) {
      emitter.emit(evt, me);
    }

    return me;
  }

  return TinyDatePicker;

})));
});

/*! medium-zoom 1.0.4 | MIT License | https://github.com/francoischalifour/medium-zoom */var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},isSupported=function(a){return 'IMG'===a.tagName},isNodeList=function(a){return NodeList.prototype.isPrototypeOf(a)},isNode=function(a){return a&&1===a.nodeType},isSvg=function(a){var b=a.currentSrc||a.src;return '.svg'===b.substr(-4).toLowerCase()},getImagesFromSelector=function(a){try{return Array.isArray(a)?a.filter(isSupported):isNodeList(a)?[].slice.call(a).filter(isSupported):isNode(a)?[a].filter(isSupported):'string'==typeof a?[].slice.call(document.querySelectorAll(a)).filter(isSupported):[]}catch(a){throw new TypeError('The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom')}},createOverlay=function(a){var b=document.createElement('div');return b.classList.add('medium-zoom-overlay'),b.style.background=a,b},cloneTarget=function(a){var b=a.getBoundingClientRect(),c=b.top,d=b.left,e=b.width,f=b.height,g=a.cloneNode(),h=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,i=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return g.removeAttribute('id'),g.style.position='absolute',g.style.top=c+h+'px',g.style.left=d+i+'px',g.style.width=e+'px',g.style.height=f+'px',g.style.transform='',g},createCustomEvent=function(a,b){var c=_extends({bubbles:!1,cancelable:!1,detail:void 0},b);if('function'==typeof window.CustomEvent)return new CustomEvent(a,c);var d=document.createEvent('CustomEvent');return d.initCustomEvent(a,c.bubbles,c.cancelable,c.detail),d},mediumZoom=function a(b){var c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},d=window.Promise||function(a){function b(){}a(b,b);},e=function(a){var b=a.target;return b===x?void n():void(-1===r.indexOf(b)||o({target:b}))},f=function(){if(!t&&w.original){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(u-a)>v.scrollOffset&&setTimeout(n,150);}},g=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a;if(a.background&&(x.style.background=a.background),a.container&&a.container instanceof Object&&(b.container=_extends({},v.container,a.container)),a.template){var c=isNode(a.template)?a.template:document.querySelector(a.template);b.template=c;}return v=_extends({},v,b),r.forEach(function(a){a.dispatchEvent(createCustomEvent('medium-zoom:update',{detail:{zoom:y}}));}),y},h=function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a(_extends({},v,b))},i=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];var d=b.reduce(function(a,b){return [].concat(a,getImagesFromSelector(b))},[]);return d.filter(function(a){return -1===r.indexOf(a)}).forEach(function(a){r.push(a),a.classList.add('medium-zoom-image');}),s.forEach(function(a){var b=a.type,c=a.listener,e=a.options;d.forEach(function(a){a.addEventListener(b,c,e);});}),y},j=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];w.zoomed&&n();var d=0<b.length?b.reduce(function(a,b){return [].concat(a,getImagesFromSelector(b))},[]):r;return d.forEach(function(a){a.classList.remove('medium-zoom-image'),a.dispatchEvent(createCustomEvent('medium-zoom:detach',{detail:{zoom:y}}));}),r=r.filter(function(a){return -1===d.indexOf(a)}),y},k=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return r.forEach(function(d){d.addEventListener('medium-zoom:'+a,b,c);}),s.push({type:'medium-zoom:'+a,listener:b,options:c}),y},l=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return r.forEach(function(d){d.removeEventListener('medium-zoom:'+a,b,c);}),s=s.filter(function(c){return c.type!=='medium-zoom:'+a||c.listener.toString()!==b.toString()}),y},m=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.target,c=function(){var a=Math.min,b={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},c=void 0,d=void 0;if(v.container)if(v.container instanceof Object)b=_extends({},b,v.container),c=b.width-b.left-b.right-2*v.margin,d=b.height-b.top-b.bottom-2*v.margin;else{var e=isNode(v.container)?v.container:document.querySelector(v.container),f=e.getBoundingClientRect(),g=f.width,h=f.height,i=f.left,j=f.top;b=_extends({},b,{width:g,height:h,left:i,top:j});}c=c||b.width-2*v.margin,d=d||b.height-2*v.margin;var k=w.zoomedHd||w.original,l=isSvg(k)?c:k.naturalWidth||c,m=isSvg(k)?d:k.naturalHeight||d,n=k.getBoundingClientRect(),o=n.top,p=n.left,q=n.width,r=n.height,s=a(l,c)/q,t=a(m,d)/r,u=a(s,t),x=(-p+(c-q)/2+v.margin+b.left)/u,y=(-o+(d-r)/2+v.margin+b.top)/u,z='scale('+u+') translate3d('+x+'px, '+y+'px, 0)';w.zoomed.style.transform=z,w.zoomedHd&&(w.zoomedHd.style.transform=z);};return new d(function(a){if(b&&-1===r.indexOf(b))return void a(y);if(w.zoomed)return void a(y);if(b)w.original=b;else if(0<r.length){var d=r;w.original=d[0];}else return void a(y);if(w.original.dispatchEvent(createCustomEvent('medium-zoom:open',{detail:{zoom:y}})),u=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,t=!0,w.zoomed=cloneTarget(w.original),document.body.appendChild(x),v.template){var e=isNode(v.template)?v.template:document.querySelector(v.template);w.template=document.createElement('div'),w.template.appendChild(e.content.cloneNode(!0)),document.body.appendChild(w.template);}if(document.body.appendChild(w.zoomed),window.requestAnimationFrame(function(){document.body.classList.add('medium-zoom--opened');}),w.original.classList.add('medium-zoom-image--hidden'),w.zoomed.classList.add('medium-zoom-image--opened'),w.zoomed.addEventListener('click',n),w.zoomed.addEventListener('transitionend',function b(){t=!1,w.zoomed.removeEventListener('transitionend',b),w.original.dispatchEvent(createCustomEvent('medium-zoom:opened',{detail:{zoom:y}})),a(y);}),w.original.getAttribute('data-zoom-src')){w.zoomedHd=w.zoomed.cloneNode(),w.zoomedHd.removeAttribute('srcset'),w.zoomedHd.removeAttribute('sizes'),w.zoomedHd.src=w.zoomed.getAttribute('data-zoom-src'),w.zoomedHd.onerror=function(){clearInterval(f),console.warn('Unable to reach the zoom image target '+w.zoomedHd.src),w.zoomedHd=null,c();};var f=setInterval(function(){w.zoomedHd.complete&&(clearInterval(f),w.zoomedHd.classList.add('medium-zoom-image--opened'),w.zoomedHd.addEventListener('click',n),document.body.appendChild(w.zoomedHd),c());},10);}else if(w.original.hasAttribute('srcset')){w.zoomedHd=w.zoomed.cloneNode(),w.zoomedHd.removeAttribute('sizes');var g=w.zoomedHd.addEventListener('load',function(){w.zoomedHd.removeEventListener('load',g),w.zoomedHd.classList.add('medium-zoom-image--opened'),w.zoomedHd.addEventListener('click',n),document.body.appendChild(w.zoomedHd),c();});}else c();})},n=function(){return new d(function(a){if(t||!w.original)return void a(y);t=!0,document.body.classList.remove('medium-zoom--opened'),w.zoomed.style.transform='',w.zoomedHd&&(w.zoomedHd.style.transform=''),w.template&&(w.template.style.transition='opacity 150ms',w.template.style.opacity=0),w.original.dispatchEvent(createCustomEvent('medium-zoom:close',{detail:{zoom:y}})),w.zoomed.addEventListener('transitionend',function b(){w.original.classList.remove('medium-zoom-image--hidden'),document.body.removeChild(w.zoomed),w.zoomedHd&&document.body.removeChild(w.zoomedHd),document.body.removeChild(x),w.zoomed.classList.remove('medium-zoom-image--opened'),w.template&&document.body.removeChild(w.template),t=!1,w.zoomed.removeEventListener('transitionend',b),w.original.dispatchEvent(createCustomEvent('medium-zoom:closed',{detail:{zoom:y}})),w.original=null,w.zoomed=null,w.zoomedHd=null,w.template=null,a(y);});})},o=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.target;return w.original?n():m({target:b})},p=function(){return v},q=function(){return r},r=[],s=[],t=!1,u=0,v=c,w={original:null,zoomed:null,zoomedHd:null,template:null};'[object Object]'===Object.prototype.toString.call(b)?v=b:(b||'string'==typeof b)&&i(b),v=_extends({margin:0,background:'#fff',scrollOffset:40,container:null,template:null},v);var x=createOverlay(v.background);document.addEventListener('click',e),document.addEventListener('keyup',function(a){27===(a.keyCode||a.which)&&n();}),document.addEventListener('scroll',f),window.addEventListener('resize',n);var y={open:m,close:n,toggle:o,update:g,clone:h,attach:i,detach:j,on:k,off:l,getOptions:p,getImages:q,getZoomedImage:function(){return w.original}};return y};function styleInject(a,b){void 0===b&&(b={});var c=b.insertAt;if(a&&'undefined'!=typeof document){var d=document.head||document.getElementsByTagName('head')[0],e=document.createElement('style');e.type='text/css','top'===c?d.firstChild?d.insertBefore(e,d.firstChild):d.appendChild(e):d.appendChild(e),e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a));}}styleInject('.medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}');

const blurringEase = (args) => {
    const ease = {
        "Linear": Easing.Linear,
        "Back.In": Easing.Back.In,
        "Back.Out": Easing.Back.Out,
        "Back.InOut": Easing.Back.InOut,
        "Bounce.In": Easing.Bounce.In,
        "Bounce.Out": Easing.Bounce.Out,
        "Bounce.InOut": Easing.Bounce.InOut,
        "Circ.In": Easing.Circ.In,
        "Circ.Out": Easing.Circ.Out,
        "Circ.InOut": Easing.Circ.InOut,
        "Cubic.In": Easing.Cubic.In,
        "Cubic.Out": Easing.Cubic.Out,
        "Cubic.InOut": Easing.Cubic.InOut,
        "Elastic.In": Easing.Elastic.In,
        "Elastic.Out": Easing.Elastic.Out,
        "Elastic.InOut": Easing.Elastic.InOut,
        "Quad.In": Easing.Quad.In,
        "Quad.Out": Easing.Quad.Out,
        "Quad.InOut": Easing.Quad.InOut,
        "Quart.In": Easing.Quart.In,
        "Quart.Out": Easing.Quart.Out,
        "Quart.InOut": Easing.Quart.InOut,
        "Quint.In": Easing.Quint.In,
        "Quint.Out": Easing.Quint.Out,
        "Quint.InOut": Easing.Quint.InOut,
        "Sine.In": Easing.Sine.In,
        "Sine.Out": Easing.Sine.Out,
        "Sine.InOut": Easing.Sine.InOut,
    };
    const tweenForward = new Tween({
        start: args.start || 0,
        end: args.end || 10,
        duration: (args.duration || 350) / 2,
        ease: ease[args.ease || "Circ.InOut"],
        delay: args.delay || 0
    });
    const tweenBackward = new Tween({
        start: args.end || 10,
        end: args.start || 0,
        duration: (args.duration || 350) / 2,
        ease: ease[args.ease || "Circ.InOut"],
        delay: args.delay || 0
    });
    tweenForward.on('tick', (cb_args) => {
        args.tick(cb_args);
    });
    tweenForward.on('complete', () => {
        tweenBackward.start();
        tweenForward.progress = 0;
    });
    tweenBackward.on('tick', (cb_args) => {
        args.tick(cb_args);
    });
    tweenBackward.on('complete', (cb_args) => {
        args.complete(cb_args);
        tweenBackward.progress = 0;
    });
    return tweenForward;
};
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
var shuffle = function (array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};
String.prototype['format'] = function () {
    var formatted = this;
    for (var arg in arguments) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};
const asyncForEach = async function (array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};
function convert(s, val) {
    var names = s.replace(/^\w+/, "$&]").replace(/]$/, "").split("][");
    var result = {};
    var obj = result;
    var last;
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        if (typeof last !== "undefined") {
            obj[last] = name === "" ? [] : {};
            obj = obj[last];
        }
        last = name === "" ? 0 : name;
    }
    obj[last] = val;
    return result;
}
function form2js(data) {
    let object = {};
    data.forEach(item => {
        if (item.name && item.value && item.value !== "") {
            let result = convert(item.name, item.value);
            object = umd.all([object, result]);
        }
    });
    return object;
}
const asTime = function (float) {
    var sec_num = float;
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    var count = (minutes + ":" + seconds).split('.');
    return count[0];
};
const leadingZeroIndex = function (index) {
    var s = index + "";
    while (s.length < 2)
        s = "0" + s;
    return s;
};
const relPathAsAbs = function (sRelPath) {
    var nUpLn, sDir = "", sPath = location.pathname.replace(/[^\/]*$/, sRelPath.replace(/(\/|^)(?:\.?\/+)+/g, "$1"));
    for (var nEnd, nStart = 0; nEnd = sPath.indexOf("/../", nStart), nEnd > -1; nStart = nEnd + nUpLn) {
        nUpLn = /^\/(?:\.\.\/)*/.exec(sPath.slice(nEnd))[0].length;
        sDir = (sDir + sPath.substring(nStart, nEnd)).replace(new RegExp("(?:\\\/+[^\\\/]*){0," + ((nUpLn - 1) / 3) + "}$"), "/");
    }
    return sDir + sPath.substr(nStart);
};

export { index as R, tinyDatePicker as T, asyncForEach as a, blurringEase as b, colors as c, delay as d, asTime as e, focusWithin as f, form2js as g, umd as h, assertString_1 as i, isHexColor_1 as j, leadingZeroIndex as l, mediumZoom as m, parentNodeSelector as p, relPathAsAbs as r, shuffle as s, titleCase as t };
