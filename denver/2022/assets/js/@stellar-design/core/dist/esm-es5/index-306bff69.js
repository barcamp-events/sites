var ezClipboard = {}, getStatusObject = function (a, b) {
    if (a === void 0) { a = !1; }
    if (b === void 0) { b = null; }
    return ({ success: a, value: b });
};
ezClipboard.__setupTextArea__ = function (a) {
    if (a === void 0) { a = ''; }
    var b = document.createElement('textarea');
    return b.value = a, b.style.position = 'fixed', b.style.top = 0, b.style.right = 0, b.style.width = 0, b.style.height = 0, document.body.appendChild(b), b;
}, ezClipboard.copyPlain = function (a, b) {
    if (a === void 0) { a = ''; }
    if (b === void 0) { b = function () { }; }
    var c = !1, d = null;
    var e = ezClipboard.__setupTextArea__(a);
    e.select();
    try {
        c = document.execCommand('copy'), d = getStatusObject(c, a);
    }
    catch (a) {
        d = getStatusObject();
    }
    return document.body.removeChild(e), b(d), d;
}, ezClipboard.copyFromElement = function (a, b) {
    if (a === void 0) { a = null; }
    if (b === void 0) { b = function () { }; }
    var c = !1, d = null;
    a.select();
    try {
        c = document.execCommand('copy'), d = getStatusObject(c, a);
    }
    catch (b) {
        d = getStatusObject(c, a);
    }
};
export { ezClipboard as e };
