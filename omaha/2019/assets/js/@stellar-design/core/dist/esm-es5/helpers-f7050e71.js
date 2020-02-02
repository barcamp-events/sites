var prefixedTransformProp = function () {
    var el = document.createElement('div');
    var vendors = ['Webkit', 'webkit', 'Moz', 'moz', 'ms', 'o'];
    if (el.style.transform != null) {
        return 'transform';
    }
    for (var v in vendors) {
        var prop = vendors[v] + "Transform";
        if (typeof el.style[prop] !== 'undefined') {
            return prop;
        }
    }
};
var difference = function (a, b) { return Math.abs(a - b); };
var limit = function (min, max, value) { return Math.max(Math.min(value, max), min); };
var interval = function (start, end, current) { return difference(start, current) / difference(start, end); };
var interpolate = function (start, end, progress) { var p = difference(start, end) * progress; return start > end ? start - p : start + p; };
var get_interview_lines = function (element) {
    var els = Array.from(element.querySelectorAll('.line'));
    var interviewLines = els.map(function (el) {
        var offset = 0;
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
            updates["opacity"] = {
                end: opacityEnd,
                start: opacityStart
            };
        }
        if (!isNaN(translateXStart) && !isNaN(translateXEnd)) {
            updates["translateX"] = {
                end: translateXEnd,
                start: translateXStart
            };
        }
        if (!isNaN(translateYStart) && !isNaN(translateYEnd)) {
            updates["translateY"] = {
                end: translateYEnd,
                start: translateYStart
            };
        }
        if (!isNaN(scaleStart) && !isNaN(scaleEnd)) {
            updates["scale"] = {
                end: scaleEnd,
                start: scaleStart
            };
        }
        if (typeof end === 'undefined' || typeof start === 'undefined' || Object.keys(updates).length === 0) {
            return null;
        }
        return { el: el, end: end, offset: offset, start: start, updates: updates };
    }).filter(function (x) { return x; });
    return interviewLines;
};
var update_interview_lines = function (lines, cache, time) {
    var transformProp = prefixedTransformProp();
    var y = time;
    lines.map(function (_a) {
        var el = _a.el, end = _a.end, offset = _a.offset, start = _a.start, updates = _a.updates;
        var s = offset + start;
        var e = offset + end;
        var state = cache.get(el);
        if ((y >= s && y <= e) || (state !== 'before' && y < s) || (state !== 'after' && y > e)) {
            var translateX = 0;
            var translateY = 0;
            var scale = 1;
            var current = limit(s, e, y);
            var i = interval(s, e, current);
            if (updates.opacity) {
                var _b = updates.opacity, end_1 = _b.end, start_1 = _b.start;
                var opacity = interpolate(start_1, end_1, i).toFixed(2);
                el.style.opacity = opacity;
            }
            if (updates.translateX) {
                var _c = updates.translateX, end_2 = _c.end, start_2 = _c.start;
                translateX = parseInt(interpolate(start_2, end_2, i), 10);
            }
            if (updates.translateY) {
                var _d = updates.translateY, end_3 = _d.end, start_3 = _d.start;
                translateY = parseInt(interpolate(start_3, end_3, i), 10);
            }
            if (updates.scale) {
                var _e = updates.scale, end_4 = _e.end, start_4 = _e.start;
                scale = interpolate(start_4, end_4, i).toFixed(2);
            }
            el.style[transformProp] =
                "translate3d(" + translateX + "px, " + translateY + "px, 0) scale(" + scale + ")";
            if (y < s) {
                cache.set(el, 'before');
            }
            else if (y > e) {
                cache.set(el, 'after');
            }
            else {
                cache.set(el, 'during');
            }
        }
    });
};
export { get_interview_lines as g, update_interview_lines as u };
