import { r as registerInstance } from './core-36452501.js';
import { c as createCommonjsModule, u as unwrapExports } from './_commonjsHelpers-ae1b5db5.js';
import { a as raf_1 } from './index-4577fd7b.js';

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _raf2 = _interopRequireDefault(raf_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var cache = new WeakMap();

var difference = function difference(a, b) {
  return Math.abs(a - b);
};

var elements = function elements(className) {
  var els = [].concat(_toConsumableArray(document.querySelectorAll('.' + className)));

  return els.map(function (el) {
    var relative = el.dataset.relative === 'true';
    var offset = relative ? elY(el) : 0;
    var end = parseInt(el.dataset.end, 10);
    var start = parseInt(el.dataset.start, 10);
    var opacityStart = parseFloat(el.dataset.opacityStart);
    var opacityEnd = parseFloat(el.dataset.opacityEnd);
    var translateXStart = parseInt(el.dataset.translatexStart, 10);
    var translateXEnd = parseInt(el.dataset.translatexEnd, 10);
    var translateYStart = parseInt(el.dataset.translateyStart, 10);
    var translateYEnd = parseInt(el.dataset.translateyEnd, 10);
    var scaleStart = parseFloat(el.dataset.scaleStart);
    var scaleEnd = parseFloat(el.dataset.scaleEnd);
    var updates = {};

    if (!isNaN(opacityStart) && !isNaN(opacityEnd)) {
      updates.opacity = {
        end: opacityEnd,
        start: opacityStart
      };
    }

    if (!isNaN(translateXStart) && !isNaN(translateXEnd)) {
      updates.translateX = {
        end: translateXEnd,
        start: translateXStart
      };
    }

    if (!isNaN(translateYStart) && !isNaN(translateYEnd)) {
      updates.translateY = {
        end: translateYEnd,
        start: translateYStart
      };
    }

    if (!isNaN(scaleStart) && !isNaN(scaleEnd)) {
      updates.scale = {
        end: scaleEnd,
        start: scaleStart
      };
    }

    if (typeof end === 'undefined' || typeof start === 'undefined' || Object.keys(updates) === 0) {
      return null;
    }

    return { el: el, end: end, offset: offset, relative: relative, start: start, updates: updates };
  }).filter(function (x) {
    return x;
  });
};

var elY = function elY(el) {
  return scrollY() + el.getBoundingClientRect().top;
};

var init = function init() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$className = _ref.className,
      className = _ref$className === undefined ? 'js-parallaxis' : _ref$className;

  var els = elements(className);

  if (els.length) {
    var updateFunc = update(els);
    updateOffsetsOnResize(els);
    updateFunc();
    window.addEventListener('scroll', function () {
      return (0, _raf2.default)(updateFunc);
    });
  }
};

var interpolate = function interpolate(start, end, progress) {
  var p = difference(start, end) * progress;
  return start > end ? start - p : start + p;
};

var interval = function interval(start, end, current) {
  return difference(start, current) / difference(start, end);
};

var limit = function limit(min, max, value) {
  return Math.max(Math.min(value, max), min);
};

var prefixedTransformProp = function prefixedTransformProp() {
  var el = document.createElement('div');
  var vendors = ['Webkit', 'webkit', 'Moz', 'moz', 'ms', 'o'];

  if (el.style.transform != null) {
    return 'transform';
  }

  for (var v in vendors) {
    var prop = vendors[v] + 'Transform';

    if (typeof el.style[prop] !== 'undefined') {
      return prop;
    }
  }
};

var scrollY = function scrollY() {
  return parseInt(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, 10);
};

var update = function update(els) {
  var transformProp = prefixedTransformProp();

  return function () {
    var y = scrollY();

    els.map(function (_ref2) {
      var el = _ref2.el,
          end = _ref2.end,
          offset = _ref2.offset,
          start = _ref2.start,
          updates = _ref2.updates;

      var s = offset + start;
      var e = offset + end;
      var state = cache.get(el);

      if (y >= s && y <= e || state !== 'before' && y < s || state !== 'after' && y > e) {
        var translateX = 0;
        var translateY = 0;
        var scale = 1;

        var current = limit(s, e, y);
        var i = interval(s, e, current);

        if (updates.opacity) {
          var _updates$opacity = updates.opacity,
              _end = _updates$opacity.end,
              _start = _updates$opacity.start;

          var opacity = interpolate(_start, _end, i).toFixed(2);
          el.style.opacity = opacity;
        }

        if (updates.translateX) {
          var _updates$translateX = updates.translateX,
              _end2 = _updates$translateX.end,
              _start2 = _updates$translateX.start;

          translateX = parseInt(interpolate(_start2, _end2, i), 10);
        }

        if (updates.translateY) {
          var _updates$translateY = updates.translateY,
              _end3 = _updates$translateY.end,
              _start3 = _updates$translateY.start;

          translateY = parseInt(interpolate(_start3, _end3, i), 10);
        }

        if (updates.scale) {
          var _updates$scale = updates.scale,
              _end4 = _updates$scale.end,
              _start4 = _updates$scale.start;

          scale = interpolate(_start4, _end4, i).toFixed(2);
        }

        el.style[transformProp] = 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0) scale(' + scale + ')';

        if (y < s) {
          cache.set(el, 'before');
        } else if (y > e) {
          cache.set(el, 'after');
        } else {
          cache.set(el, 'during');
        }
      }
    });
  };
};

var updateOffsetsOnResize = function updateOffsetsOnResize(els) {
  var updateOffsets = function updateOffsets() {
    return els.map(function (x) {
      if (x.relative) {
        x.offset = elY(x.el);
      }
    });
  };

  var d = void 0;

  window.addEventListener('resize', function () {
    window.clearTimeout(d);
    d = window.setTimeout(updateOffsets, 50);
  });
};

exports.default = init;
});

const parallaxis = unwrapExports(lib);

const Story = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.target = "story";
    }
    componentWillLoad() {
        parallaxis({ className: this.target });
    }
};

export { Story as stellar_story };
