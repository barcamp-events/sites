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
import { r as registerInstance, h, g as getElement, f as getContext } from './core-36452501.js';
import './index-9ff8bd5c.js';
import { A as ActiveRouter } from './active-router-7be22857.js';
import { m as matchPath, a as matchesAreEqual, s as stripTrailingSlash, b as addLeadingSlash, c as createLocation, d as createKey, h as hasBasename, e as stripBasename, f as createPath, g as stripLeadingSlash, l as locationsAreEqual } from './match-path-fd602b4d.js';
import { s as storageAvailable, a as supportsHistory, b as supportsPopStateOnHashChange, g as getConfirmation, i as isExtraneousPopstateEvent, c as supportsGoWithoutReloadUsingHash } from './dom-utils-780e0208.js';
var Route = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.group = null;
        this.match = null;
        this.componentProps = {};
        this.exact = false;
        this.scrollOnNextRender = false;
        this.previousMatch = null;
    }
    // Identify if the current route is a match.
    class_1.prototype.computeMatch = function (newLocation) {
        var isGrouped = this.group != null || (this.el.parentElement != null && this.el.parentElement.tagName.toLowerCase() === 'stencil-route-switch');
        if (!newLocation || isGrouped) {
            return;
        }
        this.previousMatch = this.match;
        return this.match = matchPath(newLocation.pathname, {
            path: this.url,
            exact: this.exact,
            strict: true
        });
    };
    class_1.prototype.loadCompleted = function () {
        return __awaiter(this, void 0, void 0, function () {
            var routeViewOptions;
            return __generator(this, function (_a) {
                routeViewOptions = {};
                if (this.history && this.history.location.hash) {
                    routeViewOptions = {
                        scrollToId: this.history.location.hash.substr(1)
                    };
                }
                else if (this.scrollTopOffset) {
                    routeViewOptions = {
                        scrollTopOffset: this.scrollTopOffset
                    };
                }
                // After all children have completed then tell switch
                // the provided callback will get executed after this route is in view
                if (typeof this.componentUpdated === 'function') {
                    this.componentUpdated(routeViewOptions);
                    // If this is an independent route and it matches then routes have updated.
                    // If the only change to location is a hash change then do not scroll.
                }
                else if (this.match && !matchesAreEqual(this.match, this.previousMatch) && this.routeViewsUpdated) {
                    this.routeViewsUpdated(routeViewOptions);
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.componentDidUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCompleted()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCompleted()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        // If there is no activeRouter then do not render
        // Check if this route is in the matching URL (for example, a parent route)
        if (!this.match || !this.history) {
            return null;
        }
        // component props defined in route
        // the history api
        // current match data including params
        var childProps = Object.assign({}, this.componentProps, { history: this.history, match: this.match });
        // If there is a routerRender defined then use
        // that and pass the component and component props with it.
        if (this.routeRender) {
            return this.routeRender(Object.assign({}, childProps, { component: this.component }));
        }
        if (this.component) {
            var ChildComponent = this.component;
            return (h(ChildComponent, Object.assign({}, childProps)));
        }
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "location": ["computeMatch"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "stencil-route.inactive{display:none}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
ActiveRouter.injectProps(Route, [
    'location',
    'history',
    'historyType',
    'routeViewsUpdated'
]);
var getUniqueId = function () {
    return ((Math.random() * 10e16).toString().match(/.{4}/g) || []).join('-');
};
var getMatch = function (pathname, url, exact) {
    return matchPath(pathname, {
        path: url,
        exact: exact,
        strict: true
    });
};
var isHTMLStencilRouteElement = function (elm) {
    return elm.tagName === 'STENCIL-ROUTE';
};
var RouteSwitch = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.group = getUniqueId();
        this.subscribers = [];
        this.queue = getContext(this, "queue");
    }
    class_2.prototype.componentWillLoad = function () {
        if (this.location != null) {
            this.regenerateSubscribers(this.location);
        }
    };
    class_2.prototype.regenerateSubscribers = function (newLocation) {
        return __awaiter(this, void 0, void 0, function () {
            var newActiveIndex, activeChild;
            var _this = this;
            return __generator(this, function (_a) {
                if (newLocation == null) {
                    return [2 /*return*/];
                }
                newActiveIndex = -1;
                this.subscribers = Array.prototype.slice.call(this.el.children)
                    .filter(isHTMLStencilRouteElement)
                    .map(function (childElement, index) {
                    var match = getMatch(newLocation.pathname, childElement.url, childElement.exact);
                    if (match && newActiveIndex === -1) {
                        newActiveIndex = index;
                    }
                    return {
                        el: childElement,
                        match: match
                    };
                });
                if (newActiveIndex === -1) {
                    return [2 /*return*/];
                }
                // Check if this actually changes which child is active
                // then just pass the new match down if the active route isn't changing.
                if (this.activeIndex === newActiveIndex) {
                    this.subscribers[newActiveIndex].el.match = this.subscribers[newActiveIndex].match;
                    return [2 /*return*/];
                }
                this.activeIndex = newActiveIndex;
                activeChild = this.subscribers[this.activeIndex];
                if (this.scrollTopOffset) {
                    activeChild.el.scrollTopOffset = this.scrollTopOffset;
                }
                activeChild.el.group = this.group;
                activeChild.el.match = activeChild.match;
                activeChild.el.componentUpdated = function (routeViewUpdatedOptions) {
                    // After the new active route has completed then update visibility of routes
                    _this.queue.write(function () {
                        _this.subscribers.forEach(function (child, index) {
                            child.el.componentUpdated = undefined;
                            if (index === _this.activeIndex) {
                                return child.el.style.display = '';
                            }
                            if (_this.scrollTopOffset) {
                                child.el.scrollTopOffset = _this.scrollTopOffset;
                            }
                            child.el.group = _this.group;
                            child.el.match = null;
                            child.el.style.display = 'none';
                        });
                    });
                    if (_this.routeViewsUpdated) {
                        _this.routeViewsUpdated(Object.assign({ scrollTopOffset: _this.scrollTopOffset }, routeViewUpdatedOptions));
                    }
                };
                return [2 /*return*/];
            });
        });
    };
    class_2.prototype.render = function () {
        return (h("slot", null));
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "watchers", {
        get: function () {
            return {
                "location": ["regenerateSubscribers"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
ActiveRouter.injectProps(RouteSwitch, [
    'location',
    'routeViewsUpdated'
]);
var warning = function (value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (!value) {
        console.warn.apply(console, args);
    }
};
// Adapted from the https://github.com/ReactTraining/history and converted to TypeScript
var createTransitionManager = function () {
    var prompt;
    var listeners = [];
    var setPrompt = function (nextPrompt) {
        warning(prompt == null, 'A history supports only one prompt at a time');
        prompt = nextPrompt;
        return function () {
            if (prompt === nextPrompt) {
                prompt = null;
            }
        };
    };
    var confirmTransitionTo = function (location, action, getUserConfirmation, callback) {
        // TODO: If another transition starts while we're still confirming
        // the previous one, we may end up in a weird state. Figure out the
        // best way to handle this.
        if (prompt != null) {
            var result = typeof prompt === 'function' ? prompt(location, action) : prompt;
            if (typeof result === 'string') {
                if (typeof getUserConfirmation === 'function') {
                    getUserConfirmation(result, callback);
                }
                else {
                    warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
                    callback(true);
                }
            }
            else {
                // Return false from a transition hook to cancel the transition.
                callback(result !== false);
            }
        }
        else {
            callback(true);
        }
    };
    var appendListener = function (fn) {
        var isActive = true;
        var listener = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (isActive) {
                fn.apply(void 0, args);
            }
        };
        listeners.push(listener);
        return function () {
            isActive = false;
            listeners = listeners.filter(function (item) { return item !== listener; });
        };
    };
    var notifyListeners = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        listeners.forEach(function (listener) { return listener.apply(void 0, args); });
    };
    return {
        setPrompt: setPrompt,
        confirmTransitionTo: confirmTransitionTo,
        appendListener: appendListener,
        notifyListeners: notifyListeners
    };
};
var createScrollHistory = function (win, applicationScrollKey) {
    if (applicationScrollKey === void 0) { applicationScrollKey = 'scrollPositions'; }
    var scrollPositions = new Map();
    var set = function (key, value) {
        scrollPositions.set(key, value);
        if (storageAvailable(win, 'sessionStorage')) {
            var arrayData_1 = [];
            scrollPositions.forEach(function (value, key) {
                arrayData_1.push([key, value]);
            });
            win.sessionStorage.setItem('scrollPositions', JSON.stringify(arrayData_1));
        }
    };
    var get = function (key) {
        return scrollPositions.get(key);
    };
    var has = function (key) {
        return scrollPositions.has(key);
    };
    var capture = function (key) {
        set(key, [win.scrollX, win.scrollY]);
    };
    if (storageAvailable(win, 'sessionStorage')) {
        var scrollData = win.sessionStorage.getItem(applicationScrollKey);
        scrollPositions = scrollData ?
            new Map(JSON.parse(scrollData)) :
            scrollPositions;
    }
    if ('scrollRestoration' in win.history) {
        history.scrollRestoration = 'manual';
    }
    return {
        set: set,
        get: get,
        has: has,
        capture: capture
    };
};
// Adapted from the https://github.com/ReactTraining/history and converted to TypeScript
var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function (win, props) {
    if (props === void 0) { props = {}; }
    var forceNextPop = false;
    var globalHistory = win.history;
    var globalLocation = win.location;
    var globalNavigator = win.navigator;
    var canUseHistory = supportsHistory(win);
    var needsHashChangeListener = !supportsPopStateOnHashChange(globalNavigator);
    var scrollHistory = createScrollHistory(win);
    var forceRefresh = (props.forceRefresh != null) ? props.forceRefresh : false;
    var getUserConfirmation = (props.getUserConfirmation != null) ? props.getUserConfirmation : getConfirmation;
    var keyLength = (props.keyLength != null) ? props.keyLength : 6;
    var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
    var getHistoryState = function () {
        try {
            return win.history.state || {};
        }
        catch (e) {
            // IE 11 sometimes throws when accessing window.history.state
            // See https://github.com/ReactTraining/history/pull/289
            return {};
        }
    };
    var getDOMLocation = function (historyState) {
        historyState = historyState || {};
        var key = historyState.key, state = historyState.state;
        var pathname = globalLocation.pathname, search = globalLocation.search, hash = globalLocation.hash;
        var path = pathname + search + hash;
        warning((!basename || hasBasename(path, basename)), 'You are attempting to use a basename on a page whose URL path does not begin ' +
            'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
        if (basename) {
            path = stripBasename(path, basename);
        }
        return createLocation(path, state, key || createKey(keyLength));
    };
    var transitionManager = createTransitionManager();
    var setState = function (nextState) {
        // Capture location for the view before changing history.
        scrollHistory.capture(history.location.key);
        Object.assign(history, nextState);
        // Set scroll position based on its previous storage value
        history.location.scrollPosition = scrollHistory.get(history.location.key);
        history.length = globalHistory.length;
        transitionManager.notifyListeners(history.location, history.action);
    };
    var handlePopState = function (event) {
        // Ignore extraneous popstate events in WebKit.
        if (!isExtraneousPopstateEvent(globalNavigator, event)) {
            handlePop(getDOMLocation(event.state));
        }
    };
    var handleHashChange = function () {
        handlePop(getDOMLocation(getHistoryState()));
    };
    var handlePop = function (location) {
        if (forceNextPop) {
            forceNextPop = false;
            setState();
        }
        else {
            var action_1 = 'POP';
            transitionManager.confirmTransitionTo(location, action_1, getUserConfirmation, function (ok) {
                if (ok) {
                    setState({ action: action_1, location: location });
                }
                else {
                    revertPop(location);
                }
            });
        }
    };
    var revertPop = function (fromLocation) {
        var toLocation = history.location;
        // TODO: We could probably make this more reliable by
        // keeping a list of keys we've seen in sessionStorage.
        // Instead, we just default to 0 for keys we don't know.
        var toIndex = allKeys.indexOf(toLocation.key);
        var fromIndex = allKeys.indexOf(fromLocation.key);
        if (toIndex === -1) {
            toIndex = 0;
        }
        if (fromIndex === -1) {
            fromIndex = 0;
        }
        var delta = toIndex - fromIndex;
        if (delta) {
            forceNextPop = true;
            go(delta);
        }
    };
    var initialLocation = getDOMLocation(getHistoryState());
    var allKeys = [initialLocation.key];
    var listenerCount = 0;
    var isBlocked = false;
    // Public interface
    var createHref = function (location) {
        return basename + createPath(location);
    };
    var push = function (path, state) {
        warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' +
            'argument is a location-like object that already has state; it is ignored');
        var action = 'PUSH';
        var location = createLocation(path, state, createKey(keyLength), history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
            if (!ok) {
                return;
            }
            var href = createHref(location);
            var key = location.key, state = location.state;
            if (canUseHistory) {
                globalHistory.pushState({ key: key, state: state }, '', href);
                if (forceRefresh) {
                    globalLocation.href = href;
                }
                else {
                    var prevIndex = allKeys.indexOf(history.location.key);
                    var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
                    nextKeys.push(location.key);
                    allKeys = nextKeys;
                    setState({ action: action, location: location });
                }
            }
            else {
                warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
                globalLocation.href = href;
            }
        });
    };
    var replace = function (path, state) {
        warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' +
            'argument is a location-like object that already has state; it is ignored');
        var action = 'REPLACE';
        var location = createLocation(path, state, createKey(keyLength), history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
            if (!ok) {
                return;
            }
            var href = createHref(location);
            var key = location.key, state = location.state;
            if (canUseHistory) {
                globalHistory.replaceState({ key: key, state: state }, '', href);
                if (forceRefresh) {
                    globalLocation.replace(href);
                }
                else {
                    var prevIndex = allKeys.indexOf(history.location.key);
                    if (prevIndex !== -1) {
                        allKeys[prevIndex] = location.key;
                    }
                    setState({ action: action, location: location });
                }
            }
            else {
                warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
                globalLocation.replace(href);
            }
        });
    };
    var go = function (n) {
        globalHistory.go(n);
    };
    var goBack = function () { return go(-1); };
    var goForward = function () { return go(1); };
    var checkDOMListeners = function (delta) {
        listenerCount += delta;
        if (listenerCount === 1) {
            win.addEventListener(PopStateEvent, handlePopState);
            if (needsHashChangeListener) {
                win.addEventListener(HashChangeEvent, handleHashChange);
            }
        }
        else if (listenerCount === 0) {
            win.removeEventListener(PopStateEvent, handlePopState);
            if (needsHashChangeListener) {
                win.removeEventListener(HashChangeEvent, handleHashChange);
            }
        }
    };
    var block = function (prompt) {
        if (prompt === void 0) { prompt = ''; }
        var unblock = transitionManager.setPrompt(prompt);
        if (!isBlocked) {
            checkDOMListeners(1);
            isBlocked = true;
        }
        return function () {
            if (isBlocked) {
                isBlocked = false;
                checkDOMListeners(-1);
            }
            return unblock();
        };
    };
    var listen = function (listener) {
        var unlisten = transitionManager.appendListener(listener);
        checkDOMListeners(1);
        return function () {
            checkDOMListeners(-1);
            unlisten();
        };
    };
    var history = {
        length: globalHistory.length,
        action: 'POP',
        location: initialLocation,
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        goBack: goBack,
        goForward: goForward,
        block: block,
        listen: listen,
        win: win
    };
    return history;
};
// Adapted from the https://github.com/ReactTraining/history and converted to TypeScript
var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
    hashbang: {
        encodePath: function (path) { return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path); },
        decodePath: function (path) { return path.charAt(0) === '!' ? path.substr(1) : path; }
    },
    noslash: {
        encodePath: stripLeadingSlash,
        decodePath: addLeadingSlash
    },
    slash: {
        encodePath: addLeadingSlash,
        decodePath: addLeadingSlash
    }
};
var createHashHistory = function (win, props) {
    if (props === void 0) { props = {}; }
    var forceNextPop = false;
    var ignorePath = null;
    var listenerCount = 0;
    var isBlocked = false;
    var globalLocation = win.location;
    var globalHistory = win.history;
    var canGoWithoutReload = supportsGoWithoutReloadUsingHash(win.navigator);
    var keyLength = (props.keyLength != null) ? props.keyLength : 6;
    var _a = props.getUserConfirmation, getUserConfirmation = _a === void 0 ? getConfirmation : _a, _b = props.hashType, hashType = _b === void 0 ? 'slash' : _b;
    var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
    var _c = HashPathCoders[hashType], encodePath = _c.encodePath, decodePath = _c.decodePath;
    var getHashPath = function () {
        // We can't use window.location.hash here because it's not
        // consistent across browsers - Firefox will pre-decode it!
        var href = globalLocation.href;
        var hashIndex = href.indexOf('#');
        return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
    };
    var pushHashPath = function (path) { return (globalLocation.hash = path); };
    var replaceHashPath = function (path) {
        var hashIndex = globalLocation.href.indexOf('#');
        globalLocation.replace(globalLocation.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
    };
    var getDOMLocation = function () {
        var path = decodePath(getHashPath());
        warning((!basename || hasBasename(path, basename)), 'You are attempting to use a basename on a page whose URL path does not begin ' +
            'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
        if (basename) {
            path = stripBasename(path, basename);
        }
        return createLocation(path, undefined, createKey(keyLength));
    };
    var transitionManager = createTransitionManager();
    var setState = function (nextState) {
        Object.assign(history, nextState);
        history.length = globalHistory.length;
        transitionManager.notifyListeners(history.location, history.action);
    };
    var handleHashChange = function () {
        var path = getHashPath();
        var encodedPath = encodePath(path);
        if (path !== encodedPath) {
            // Ensure we always have a properly-encoded hash.
            replaceHashPath(encodedPath);
        }
        else {
            var location = getDOMLocation();
            var prevLocation = history.location;
            if (!forceNextPop && locationsAreEqual(prevLocation, location)) {
                return; // A hashchange doesn't always == location change.
            }
            if (ignorePath === createPath(location)) {
                return; // Ignore this change; we already setState in push/replace.
            }
            ignorePath = null;
            handlePop(location);
        }
    };
    var handlePop = function (location) {
        if (forceNextPop) {
            forceNextPop = false;
            setState();
        }
        else {
            var action_2 = 'POP';
            transitionManager.confirmTransitionTo(location, action_2, getUserConfirmation, function (ok) {
                if (ok) {
                    setState({ action: action_2, location: location });
                }
                else {
                    revertPop(location);
                }
            });
        }
    };
    var revertPop = function (fromLocation) {
        var toLocation = history.location;
        // TODO: We could probably make this more reliable by
        // keeping a list of paths we've seen in sessionStorage.
        // Instead, we just default to 0 for paths we don't know.
        var toIndex = allPaths.lastIndexOf(createPath(toLocation));
        var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
        if (toIndex === -1) {
            toIndex = 0;
        }
        if (fromIndex === -1) {
            fromIndex = 0;
        }
        var delta = toIndex - fromIndex;
        if (delta) {
            forceNextPop = true;
            go(delta);
        }
    };
    // Ensure the hash is encoded properly before doing anything else.
    var path = getHashPath();
    var encodedPath = encodePath(path);
    if (path !== encodedPath) {
        replaceHashPath(encodedPath);
    }
    var initialLocation = getDOMLocation();
    var allPaths = [createPath(initialLocation)];
    // Public interface
    var createHref = function (location) { return ('#' + encodePath(basename + createPath(location))); };
    var push = function (path, state) {
        warning(state === undefined, 'Hash history cannot push state; it is ignored');
        var action = 'PUSH';
        var location = createLocation(path, undefined, createKey(keyLength), history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
            if (!ok) {
                return;
            }
            var path = createPath(location);
            var encodedPath = encodePath(basename + path);
            var hashChanged = getHashPath() !== encodedPath;
            if (hashChanged) {
                // We cannot tell if a hashchange was caused by a PUSH, so we'd
                // rather setState here and ignore the hashchange. The caveat here
                // is that other hash histories in the page will consider it a POP.
                ignorePath = path;
                pushHashPath(encodedPath);
                var prevIndex = allPaths.lastIndexOf(createPath(history.location));
                var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
                nextPaths.push(path);
                allPaths = nextPaths;
                setState({ action: action, location: location });
            }
            else {
                warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
                setState();
            }
        });
    };
    var replace = function (path, state) {
        warning(state === undefined, 'Hash history cannot replace state; it is ignored');
        var action = 'REPLACE';
        var location = createLocation(path, undefined, createKey(keyLength), history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
            if (!ok) {
                return;
            }
            var path = createPath(location);
            var encodedPath = encodePath(basename + path);
            var hashChanged = getHashPath() !== encodedPath;
            if (hashChanged) {
                // We cannot tell if a hashchange was caused by a REPLACE, so we'd
                // rather setState here and ignore the hashchange. The caveat here
                // is that other hash histories in the page will consider it a POP.
                ignorePath = path;
                replaceHashPath(encodedPath);
            }
            var prevIndex = allPaths.indexOf(createPath(history.location));
            if (prevIndex !== -1) {
                allPaths[prevIndex] = path;
            }
            setState({ action: action, location: location });
        });
    };
    var go = function (n) {
        warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
        globalHistory.go(n);
    };
    var goBack = function () { return go(-1); };
    var goForward = function () { return go(1); };
    var checkDOMListeners = function (win, delta) {
        listenerCount += delta;
        if (listenerCount === 1) {
            win.addEventListener(HashChangeEvent$1, handleHashChange);
        }
        else if (listenerCount === 0) {
            win.removeEventListener(HashChangeEvent$1, handleHashChange);
        }
    };
    var block = function (prompt) {
        if (prompt === void 0) { prompt = ''; }
        var unblock = transitionManager.setPrompt(prompt);
        if (!isBlocked) {
            checkDOMListeners(win, 1);
            isBlocked = true;
        }
        return function () {
            if (isBlocked) {
                isBlocked = false;
                checkDOMListeners(win, -1);
            }
            return unblock();
        };
    };
    var listen = function (listener) {
        var unlisten = transitionManager.appendListener(listener);
        checkDOMListeners(win, 1);
        return function () {
            checkDOMListeners(win, -1);
            unlisten();
        };
    };
    var history = {
        length: globalHistory.length,
        action: 'POP',
        location: initialLocation,
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        goBack: goBack,
        goForward: goForward,
        block: block,
        listen: listen,
        win: win
    };
    return history;
};
var getLocation = function (location, root) {
    // Remove the root URL if found at beginning of string
    var pathname = location.pathname.indexOf(root) == 0 ?
        '/' + location.pathname.slice(root.length) :
        location.pathname;
    return Object.assign({}, location, { pathname: pathname });
};
var HISTORIES = {
    'browser': createBrowserHistory,
    'hash': createHashHistory
};
var Router = /** @class */ (function () {
    function Router(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.root = '/';
        this.historyType = 'browser';
        // A suffix to append to the page title whenever
        // it's updated through RouteTitle
        this.titleSuffix = '';
        this.routeViewsUpdated = function (options) {
            if (options === void 0) { options = {}; }
            if (_this.history && options.scrollToId && _this.historyType === 'browser') {
                var elm = _this.history.win.document.getElementById(options.scrollToId);
                if (elm) {
                    return elm.scrollIntoView();
                }
            }
            _this.scrollTo(options.scrollTopOffset || _this.scrollTopOffset);
        };
        this.isServer = getContext(this, "isServer");
        this.queue = getContext(this, "queue");
    }
    Router.prototype.componentWillLoad = function () {
        var _this = this;
        this.history = HISTORIES[this.historyType](this.el.ownerDocument.defaultView);
        this.history.listen(function (location) {
            location = getLocation(location, _this.root);
            _this.location = location;
        });
        this.location = getLocation(this.history.location, this.root);
    };
    Router.prototype.scrollTo = function (scrollToLocation) {
        var history = this.history;
        if (scrollToLocation == null || this.isServer || !history) {
            return;
        }
        if (history.action === 'POP' && Array.isArray(history.location.scrollPosition)) {
            return this.queue.write(function () {
                if (history && history.location && Array.isArray(history.location.scrollPosition)) {
                    history.win.scrollTo(history.location.scrollPosition[0], history.location.scrollPosition[1]);
                }
            });
        }
        // okay, the frame has passed. Go ahead and render now
        return this.queue.write(function () {
            history.win.scrollTo(0, scrollToLocation);
        });
    };
    Router.prototype.render = function () {
        if (!this.location || !this.history) {
            return;
        }
        var state = {
            historyType: this.historyType,
            location: this.location,
            titleSuffix: this.titleSuffix,
            root: this.root,
            history: this.history,
            routeViewsUpdated: this.routeViewsUpdated
        };
        return (h(ActiveRouter.Provider, { state: state }, h("slot", null)));
    };
    Object.defineProperty(Router.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Router;
}());
export { Route as stencil_route, RouteSwitch as stencil_route_switch, Router as stencil_router };
