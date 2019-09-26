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
import { r as registerInstance, h, g as getElement } from './core-36452501.js';
import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-ae1b5db5.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-e9450bee.js';
import { e as ezClipboard } from './index-306bff69.js';
var prism = createCommonjsModule(function (module) {
    /* **********************************************
         Begin prism-core.js
    ********************************************** */
    var _self = (typeof window !== 'undefined')
        ? window // if in browser
        : ((typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
            ? self // if in worker
            : {} // if in node js
        );
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     * MIT license http://www.opensource.org/licenses/mit-license.php/
     * @author Lea Verou http://lea.verou.me
     */
    var Prism = (function (_self) {
        // Private helper vars
        var lang = /\blang(?:uage)?-([\w-]+)\b/i;
        var uniqueId = 0;
        var _ = {
            manual: _self.Prism && _self.Prism.manual,
            disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
            util: {
                encode: function (tokens) {
                    if (tokens instanceof Token) {
                        return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
                    }
                    else if (Array.isArray(tokens)) {
                        return tokens.map(_.util.encode);
                    }
                    else {
                        return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                    }
                },
                type: function (o) {
                    return Object.prototype.toString.call(o).slice(8, -1);
                },
                objId: function (obj) {
                    if (!obj['__id']) {
                        Object.defineProperty(obj, '__id', { value: ++uniqueId });
                    }
                    return obj['__id'];
                },
                // Deep clone a language definition (e.g. to extend it)
                clone: function deepClone(o, visited) {
                    var clone, id, type = _.util.type(o);
                    visited = visited || {};
                    switch (type) {
                        case 'Object':
                            id = _.util.objId(o);
                            if (visited[id]) {
                                return visited[id];
                            }
                            clone = {};
                            visited[id] = clone;
                            for (var key in o) {
                                if (o.hasOwnProperty(key)) {
                                    clone[key] = deepClone(o[key], visited);
                                }
                            }
                            return clone;
                        case 'Array':
                            id = _.util.objId(o);
                            if (visited[id]) {
                                return visited[id];
                            }
                            clone = [];
                            visited[id] = clone;
                            o.forEach(function (v, i) {
                                clone[i] = deepClone(v, visited);
                            });
                            return clone;
                        default:
                            return o;
                    }
                }
            },
            languages: {
                extend: function (id, redef) {
                    var lang = _.util.clone(_.languages[id]);
                    for (var key in redef) {
                        lang[key] = redef[key];
                    }
                    return lang;
                },
                /**
                 * Insert a token before another token in a language literal
                 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
                 * we cannot just provide an object, we need an object and a key.
                 * @param inside The key (or language id) of the parent
                 * @param before The key to insert before.
                 * @param insert Object with the key/value pairs to insert
                 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
                 */
                insertBefore: function (inside, before, insert, root) {
                    root = root || _.languages;
                    var grammar = root[inside];
                    var ret = {};
                    for (var token in grammar) {
                        if (grammar.hasOwnProperty(token)) {
                            if (token == before) {
                                for (var newToken in insert) {
                                    if (insert.hasOwnProperty(newToken)) {
                                        ret[newToken] = insert[newToken];
                                    }
                                }
                            }
                            // Do not insert token which also occur in insert. See #1525
                            if (!insert.hasOwnProperty(token)) {
                                ret[token] = grammar[token];
                            }
                        }
                    }
                    var old = root[inside];
                    root[inside] = ret;
                    // Update references in other language definitions
                    _.languages.DFS(_.languages, function (key, value) {
                        if (value === old && key != inside) {
                            this[key] = ret;
                        }
                    });
                    return ret;
                },
                // Traverse a language definition with Depth First Search
                DFS: function DFS(o, callback, type, visited) {
                    visited = visited || {};
                    var objId = _.util.objId;
                    for (var i in o) {
                        if (o.hasOwnProperty(i)) {
                            callback.call(o, i, o[i], type || i);
                            var property = o[i], propertyType = _.util.type(property);
                            if (propertyType === 'Object' && !visited[objId(property)]) {
                                visited[objId(property)] = true;
                                DFS(property, callback, null, visited);
                            }
                            else if (propertyType === 'Array' && !visited[objId(property)]) {
                                visited[objId(property)] = true;
                                DFS(property, callback, i, visited);
                            }
                        }
                    }
                }
            },
            plugins: {},
            highlightAll: function (async, callback) {
                _.highlightAllUnder(document, async, callback);
            },
            highlightAllUnder: function (container, async, callback) {
                var env = {
                    callback: callback,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                _.hooks.run('before-highlightall', env);
                var elements = container.querySelectorAll(env.selector);
                for (var i = 0, element; element = elements[i++];) {
                    _.highlightElement(element, async === true, env.callback);
                }
            },
            highlightElement: function (element, async, callback) {
                // Find language
                var language = 'none', grammar, parent = element;
                while (parent && !lang.test(parent.className)) {
                    parent = parent.parentNode;
                }
                if (parent) {
                    language = (parent.className.match(lang) || [, 'none'])[1].toLowerCase();
                    grammar = _.languages[language];
                }
                // Set language on the element, if not present
                element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
                if (element.parentNode) {
                    // Set language on the parent, for styling
                    parent = element.parentNode;
                    if (/pre/i.test(parent.nodeName)) {
                        parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
                    }
                }
                var code = element.textContent;
                var env = {
                    element: element,
                    language: language,
                    grammar: grammar,
                    code: code
                };
                var insertHighlightedCode = function (highlightedCode) {
                    env.highlightedCode = highlightedCode;
                    _.hooks.run('before-insert', env);
                    env.element.innerHTML = env.highlightedCode;
                    _.hooks.run('after-highlight', env);
                    _.hooks.run('complete', env);
                    callback && callback.call(env.element);
                };
                _.hooks.run('before-sanity-check', env);
                if (!env.code) {
                    _.hooks.run('complete', env);
                    return;
                }
                _.hooks.run('before-highlight', env);
                if (!env.grammar) {
                    insertHighlightedCode(_.util.encode(env.code));
                    return;
                }
                if (async && _self.Worker) {
                    var worker = new Worker(_.filename);
                    worker.onmessage = function (evt) {
                        insertHighlightedCode(evt.data);
                    };
                    worker.postMessage(JSON.stringify({
                        language: env.language,
                        code: env.code,
                        immediateClose: true
                    }));
                }
                else {
                    insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
                }
            },
            highlight: function (text, grammar, language) {
                var env = {
                    code: text,
                    grammar: grammar,
                    language: language
                };
                _.hooks.run('before-tokenize', env);
                env.tokens = _.tokenize(env.code, env.grammar);
                _.hooks.run('after-tokenize', env);
                return Token.stringify(_.util.encode(env.tokens), env.language);
            },
            matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
                for (var token in grammar) {
                    if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                        continue;
                    }
                    if (token == target) {
                        return;
                    }
                    var patterns = grammar[token];
                    patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];
                    for (var j = 0; j < patterns.length; ++j) {
                        var pattern = patterns[j], inside = pattern.inside, lookbehind = !!pattern.lookbehind, greedy = !!pattern.greedy, lookbehindLength = 0, alias = pattern.alias;
                        if (greedy && !pattern.pattern.global) {
                            // Without the global flag, lastIndex won't work
                            var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
                            pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
                        }
                        pattern = pattern.pattern || pattern;
                        // Don’t cache length as it changes during the loop
                        for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
                            var str = strarr[i];
                            if (strarr.length > text.length) {
                                // Something went terribly wrong, ABORT, ABORT!
                                return;
                            }
                            if (str instanceof Token) {
                                continue;
                            }
                            if (greedy && i != strarr.length - 1) {
                                pattern.lastIndex = pos;
                                var match = pattern.exec(text);
                                if (!match) {
                                    break;
                                }
                                var from = match.index + (lookbehind ? match[1].length : 0), to = match.index + match[0].length, k = i, p = pos;
                                for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
                                    p += strarr[k].length;
                                    // Move the index i to the element in strarr that is closest to from
                                    if (from >= p) {
                                        ++i;
                                        pos = p;
                                    }
                                }
                                // If strarr[i] is a Token, then the match starts inside another Token, which is invalid
                                if (strarr[i] instanceof Token) {
                                    continue;
                                }
                                // Number of tokens to delete and replace with the new match
                                delNum = k - i;
                                str = text.slice(pos, p);
                                match.index -= pos;
                            }
                            else {
                                pattern.lastIndex = 0;
                                var match = pattern.exec(str), delNum = 1;
                            }
                            if (!match) {
                                if (oneshot) {
                                    break;
                                }
                                continue;
                            }
                            if (lookbehind) {
                                lookbehindLength = match[1] ? match[1].length : 0;
                            }
                            var from = match.index + lookbehindLength, match = match[0].slice(lookbehindLength), to = from + match.length, before = str.slice(0, from), after = str.slice(to);
                            var args = [i, delNum];
                            if (before) {
                                ++i;
                                pos += before.length;
                                args.push(before);
                            }
                            var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
                            args.push(wrapped);
                            if (after) {
                                args.push(after);
                            }
                            Array.prototype.splice.apply(strarr, args);
                            if (delNum != 1)
                                _.matchGrammar(text, strarr, grammar, i, pos, true, token);
                            if (oneshot)
                                break;
                        }
                    }
                }
            },
            tokenize: function (text, grammar) {
                var strarr = [text];
                var rest = grammar.rest;
                if (rest) {
                    for (var token in rest) {
                        grammar[token] = rest[token];
                    }
                    delete grammar.rest;
                }
                _.matchGrammar(text, strarr, grammar, 0, 0, false);
                return strarr;
            },
            hooks: {
                all: {},
                add: function (name, callback) {
                    var hooks = _.hooks.all;
                    hooks[name] = hooks[name] || [];
                    hooks[name].push(callback);
                },
                run: function (name, env) {
                    var callbacks = _.hooks.all[name];
                    if (!callbacks || !callbacks.length) {
                        return;
                    }
                    for (var i = 0, callback; callback = callbacks[i++];) {
                        callback(env);
                    }
                }
            },
            Token: Token
        };
        _self.Prism = _;
        function Token(type, content, alias, matchedStr, greedy) {
            this.type = type;
            this.content = content;
            this.alias = alias;
            // Copy of the full string this token was created from
            this.length = (matchedStr || "").length | 0;
            this.greedy = !!greedy;
        }
        Token.stringify = function (o, language) {
            if (typeof o == 'string') {
                return o;
            }
            if (Array.isArray(o)) {
                return o.map(function (element) {
                    return Token.stringify(element, language);
                }).join('');
            }
            var env = {
                type: o.type,
                content: Token.stringify(o.content, language),
                tag: 'span',
                classes: ['token', o.type],
                attributes: {},
                language: language
            };
            if (o.alias) {
                var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
                Array.prototype.push.apply(env.classes, aliases);
            }
            _.hooks.run('wrap', env);
            var attributes = Object.keys(env.attributes).map(function (name) {
                return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
            }).join(' ');
            return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
        };
        if (!_self.document) {
            if (!_self.addEventListener) {
                // in Node.js
                return _;
            }
            if (!_.disableWorkerMessageHandler) {
                // In worker
                _self.addEventListener('message', function (evt) {
                    var message = JSON.parse(evt.data), lang = message.language, code = message.code, immediateClose = message.immediateClose;
                    _self.postMessage(_.highlight(code, _.languages[lang], lang));
                    if (immediateClose) {
                        _self.close();
                    }
                }, false);
            }
            return _;
        }
        //Get current script and highlight
        var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        if (script) {
            _.filename = script.src;
            if (!_.manual && !script.hasAttribute('data-manual')) {
                if (document.readyState !== "loading") {
                    if (window.requestAnimationFrame) {
                        window.requestAnimationFrame(_.highlightAll);
                    }
                    else {
                        window.setTimeout(_.highlightAll, 16);
                    }
                }
                else {
                    document.addEventListener('DOMContentLoaded', _.highlightAll);
                }
            }
        }
        return _;
    })(_self);
    if (module.exports) {
        module.exports = Prism;
    }
    // hack for components to work correctly in node.js
    if (typeof commonjsGlobal !== 'undefined') {
        commonjsGlobal.Prism = Prism;
    }
    /* **********************************************
         Begin prism-markup.js
    ********************************************** */
    Prism.languages.markup = {
        'comment': /<!--[\s\S]*?-->/,
        'prolog': /<\?[\s\S]+?\?>/,
        'doctype': /<!DOCTYPE[\s\S]+?>/i,
        'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
        'tag': {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
            greedy: true,
            inside: {
                'tag': {
                    pattern: /^<\/?[^\s>\/]+/i,
                    inside: {
                        'punctuation': /^<\/?/,
                        'namespace': /^[^\s>\/:]+:/
                    }
                },
                'attr-value': {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                    inside: {
                        'punctuation': [
                            /^=/,
                            {
                                pattern: /^(\s*)["']|["']$/,
                                lookbehind: true
                            }
                        ]
                    }
                },
                'punctuation': /\/?>/,
                'attr-name': {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        'namespace': /^[^\s>\/:]+:/
                    }
                }
            }
        },
        'entity': /&#?[\da-z]{1,8};/i
    };
    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
        Prism.languages.markup['entity'];
    // Plugin to make entity title show the real entity, idea by Roman Komarov
    Prism.hooks.add('wrap', function (env) {
        if (env.type === 'entity') {
            env.attributes['title'] = env.content.replace(/&amp;/, '&');
        }
    });
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
        /**
         * Adds an inlined language to markup.
         *
         * An example of an inlined language is CSS with `<style>` tags.
         *
         * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addInlined('style', 'css');
         */
        value: function addInlined(tagName, lang) {
            var includedCdataInside = {};
            includedCdataInside['language-' + lang] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: true,
                inside: Prism.languages[lang]
            };
            includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
            var inside = {
                'included-cdata': {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: includedCdataInside
                }
            };
            inside['language-' + lang] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[lang]
            };
            var def = {};
            def[tagName] = {
                pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
                lookbehind: true,
                greedy: true,
                inside: inside
            };
            Prism.languages.insertBefore('markup', 'cdata', def);
        }
    });
    Prism.languages.xml = Prism.languages.extend('markup', {});
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    /* **********************************************
         Begin prism-css.js
    ********************************************** */
    (function (Prism) {
        var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
        Prism.languages.css = {
            'comment': /\/\*[\s\S]*?\*\//,
            'atrule': {
                pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
                inside: {
                    'rule': /@[\w-]+/
                    // See rest below
                }
            },
            'url': {
                pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
                inside: {
                    'function': /^url/i,
                    'punctuation': /^\(|\)$/
                }
            },
            'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
            'string': {
                pattern: string,
                greedy: true
            },
            'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            'important': /!important\b/i,
            'function': /[-a-z0-9]+(?=\()/i,
            'punctuation': /[(){};:,]/
        };
        Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
        var markup = Prism.languages.markup;
        if (markup) {
            markup.tag.addInlined('style', 'css');
            Prism.languages.insertBefore('inside', 'attr-value', {
                'style-attr': {
                    pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                    inside: {
                        'attr-name': {
                            pattern: /^\s*style/i,
                            inside: markup.tag.inside
                        },
                        'punctuation': /^\s*=\s*['"]|['"]\s*$/,
                        'attr-value': {
                            pattern: /.+/i,
                            inside: Prism.languages.css
                        }
                    },
                    alias: 'language-css'
                }
            }, markup.tag);
        }
    }(Prism));
    /* **********************************************
         Begin prism-clike.js
    ********************************************** */
    Prism.languages.clike = {
        'comment': [
            {
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: true
            },
            {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: true,
                greedy: true
            }
        ],
        'string': {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: true
        },
        'class-name': {
            pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: true,
            inside: {
                punctuation: /[.\\]/
            }
        },
        'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        'boolean': /\b(?:true|false)\b/,
        'function': /\w+(?=\()/,
        'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
        'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
        'punctuation': /[{}[\];(),.:]/
    };
    /* **********************************************
         Begin prism-javascript.js
    ********************************************** */
    Prism.languages.javascript = Prism.languages.extend('clike', {
        'class-name': [
            Prism.languages.clike['class-name'],
            {
                pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
                lookbehind: true
            }
        ],
        'keyword': [
            {
                pattern: /((?:^|})\s*)(?:catch|finally)\b/,
                lookbehind: true
            },
            {
                pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: true
            },
        ],
        'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
        // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
        'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
    });
    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    Prism.languages.insertBefore('javascript', 'keyword', {
        'regex': {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
            lookbehind: true,
            greedy: true
        },
        // This must be declared before keyword because we use "function" inside the look-forward
        'function-variable': {
            pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
            alias: 'function'
        },
        'parameter': [
            {
                pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
                lookbehind: true,
                inside: Prism.languages.javascript
            },
            {
                pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
                inside: Prism.languages.javascript
            },
            {
                pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
                lookbehind: true,
                inside: Prism.languages.javascript
            },
            {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
                lookbehind: true,
                inside: Prism.languages.javascript
            }
        ],
        'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism.languages.insertBefore('javascript', 'string', {
        'template-string': {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: true,
            inside: {
                'template-punctuation': {
                    pattern: /^`|`$/,
                    alias: 'string'
                },
                'interpolation': {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                    lookbehind: true,
                    inside: {
                        'interpolation-punctuation': {
                            pattern: /^\${|}$/,
                            alias: 'punctuation'
                        },
                        rest: Prism.languages.javascript
                    }
                },
                'string': /[\s\S]+/
            }
        }
    });
    if (Prism.languages.markup) {
        Prism.languages.markup.tag.addInlined('script', 'javascript');
    }
    Prism.languages.js = Prism.languages.javascript;
    /* **********************************************
         Begin prism-file-highlight.js
    ********************************************** */
    (function () {
        if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
            return;
        }
        /**
         * @param {Element} [container=document]
         */
        self.Prism.fileHighlight = function (container) {
            container = container || document;
            var Extensions = {
                'js': 'javascript',
                'py': 'python',
                'rb': 'ruby',
                'ps1': 'powershell',
                'psm1': 'powershell',
                'sh': 'bash',
                'bat': 'batch',
                'h': 'c',
                'tex': 'latex'
            };
            Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
                // ignore if already loaded
                if (pre.hasAttribute('data-src-loaded')) {
                    return;
                }
                // load current
                var src = pre.getAttribute('data-src');
                var language, parent = pre;
                var lang = /\blang(?:uage)?-([\w-]+)\b/i;
                while (parent && !lang.test(parent.className)) {
                    parent = parent.parentNode;
                }
                if (parent) {
                    language = (pre.className.match(lang) || [, ''])[1];
                }
                if (!language) {
                    var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
                    language = Extensions[extension] || extension;
                }
                var code = document.createElement('code');
                code.className = 'language-' + language;
                pre.textContent = '';
                code.textContent = 'Loading…';
                pre.appendChild(code);
                var xhr = new XMLHttpRequest();
                xhr.open('GET', src, true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status < 400 && xhr.responseText) {
                            code.textContent = xhr.responseText;
                            Prism.highlightElement(code);
                            // mark as loaded
                            pre.setAttribute('data-src-loaded', '');
                        }
                        else if (xhr.status >= 400) {
                            code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
                        }
                        else {
                            code.textContent = '✖ Error: File does not exist or is empty';
                        }
                    }
                };
                xhr.send(null);
            });
            if (Prism.plugins.toolbar) {
                Prism.plugins.toolbar.registerButton('download-file', function (env) {
                    var pre = env.element.parentNode;
                    if (!pre || !/pre/i.test(pre.nodeName) || !pre.hasAttribute('data-src') || !pre.hasAttribute('data-download-link')) {
                        return;
                    }
                    var src = pre.getAttribute('data-src');
                    var a = document.createElement('a');
                    a.textContent = pre.getAttribute('data-download-link-label') || 'Download';
                    a.setAttribute('download', '');
                    a.href = src;
                    return a;
                });
            }
        };
        document.addEventListener('DOMContentLoaded', function () {
            // execute inside handler, for dropping Event as argument
            self.Prism.fileHighlight();
        });
    })();
});
(function () {
    if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
    }
    /**
     * Plugin name which is used as a class name for <pre> which is activating the plugin
     * @type {String}
     */
    var PLUGIN_NAME = 'line-numbers';
    /**
     * Regular expression used for determining line breaks
     * @type {RegExp}
     */
    var NEW_LINE_EXP = /\n(?!$)/g;
    /**
     * Resizes line numbers spans according to height of line of code
     * @param {Element} element <pre> element
     */
    var _resizeElement = function (element) {
        var codeStyles = getStyles(element);
        var whiteSpace = codeStyles['white-space'];
        if (whiteSpace === 'pre-wrap' || whiteSpace === 'pre-line') {
            var codeElement = element.querySelector('code');
            var lineNumbersWrapper = element.querySelector('.line-numbers-rows');
            var lineNumberSizer = element.querySelector('.line-numbers-sizer');
            var codeLines = codeElement.textContent.split(NEW_LINE_EXP);
            if (!lineNumberSizer) {
                lineNumberSizer = document.createElement('span');
                lineNumberSizer.className = 'line-numbers-sizer';
                codeElement.appendChild(lineNumberSizer);
            }
            lineNumberSizer.style.display = 'block';
            codeLines.forEach(function (line, lineNumber) {
                lineNumberSizer.textContent = line || '\n';
                var lineSize = lineNumberSizer.getBoundingClientRect().height;
                lineNumbersWrapper.children[lineNumber].style.height = lineSize + 'px';
            });
            lineNumberSizer.textContent = '';
            lineNumberSizer.style.display = 'none';
        }
    };
    /**
     * Returns style declarations for the element
     * @param {Element} element
     */
    var getStyles = function (element) {
        if (!element) {
            return null;
        }
        return window.getComputedStyle ? getComputedStyle(element) : (element.currentStyle || null);
    };
    window.addEventListener('resize', function () {
        Array.prototype.forEach.call(document.querySelectorAll('pre.' + PLUGIN_NAME), _resizeElement);
    });
    Prism.hooks.add('complete', function (env) {
        if (!env.code) {
            return;
        }
        var code = env.element;
        var pre = code.parentNode;
        // works only for <code> wrapped inside <pre> (not inline)
        if (!pre || !/pre/i.test(pre.nodeName)) {
            return;
        }
        // Abort if line numbers already exists
        if (code.querySelector('.line-numbers-rows')) {
            return;
        }
        var addLineNumbers = false;
        var lineNumbersRegex = /(?:^|\s)line-numbers(?:\s|$)/;
        for (var element = code; element; element = element.parentNode) {
            if (lineNumbersRegex.test(element.className)) {
                addLineNumbers = true;
                break;
            }
        }
        // only add line numbers if <code> or one of its ancestors has the `line-numbers` class
        if (!addLineNumbers) {
            return;
        }
        // Remove the class 'line-numbers' from the <code>
        code.className = code.className.replace(lineNumbersRegex, ' ');
        // Add the class 'line-numbers' to the <pre>
        if (!lineNumbersRegex.test(pre.className)) {
            pre.className += ' line-numbers';
        }
        var match = env.code.match(NEW_LINE_EXP);
        var linesNum = match ? match.length + 1 : 1;
        var lineNumbersWrapper;
        var lines = new Array(linesNum + 1).join('<span></span>');
        lineNumbersWrapper = document.createElement('span');
        lineNumbersWrapper.setAttribute('aria-hidden', 'true');
        lineNumbersWrapper.className = 'line-numbers-rows';
        lineNumbersWrapper.innerHTML = lines;
        if (pre.hasAttribute('data-start')) {
            pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1);
        }
        env.element.appendChild(lineNumbersWrapper);
        _resizeElement(pre);
        Prism.hooks.run('line-numbers', env);
    });
    Prism.hooks.add('line-numbers', function (env) {
        env.plugins = env.plugins || {};
        env.plugins.lineNumbers = true;
    });
    /**
     * Global exports
     */
    Prism.plugins.lineNumbers = {
        /**
         * Get node for provided line number
         * @param {Element} element pre element
         * @param {Number} number line number
         * @return {Element|undefined}
         */
        getLine: function (element, number) {
            if (element.tagName !== 'PRE' || !element.classList.contains(PLUGIN_NAME)) {
                return;
            }
            var lineNumberRows = element.querySelector('.line-numbers-rows');
            var lineNumberStart = parseInt(element.getAttribute('data-start'), 10) || 1;
            var lineNumberEnd = lineNumberStart + (lineNumberRows.children.length - 1);
            if (number < lineNumberStart) {
                number = lineNumberStart;
            }
            if (number > lineNumberEnd) {
                number = lineNumberEnd;
            }
            var lineIndex = number - lineNumberStart;
            return lineNumberRows.children[lineIndex];
        }
    };
}());
var prismNormalizeWhitespace = createCommonjsModule(function (module) {
    (function () {
        var assign = Object.assign || function (obj1, obj2) {
            for (var name in obj2) {
                if (obj2.hasOwnProperty(name))
                    obj1[name] = obj2[name];
            }
            return obj1;
        };
        function NormalizeWhitespace(defaults) {
            this.defaults = assign({}, defaults);
        }
        function toCamelCase(value) {
            return value.replace(/-(\w)/g, function (match, firstChar) {
                return firstChar.toUpperCase();
            });
        }
        function tabLen(str) {
            var res = 0;
            for (var i = 0; i < str.length; ++i) {
                if (str.charCodeAt(i) == '\t'.charCodeAt(0))
                    res += 3;
            }
            return str.length + res;
        }
        NormalizeWhitespace.prototype = {
            setDefaults: function (defaults) {
                this.defaults = assign(this.defaults, defaults);
            },
            normalize: function (input, settings) {
                settings = assign(this.defaults, settings);
                for (var name in settings) {
                    var methodName = toCamelCase(name);
                    if (name !== "normalize" && methodName !== 'setDefaults' &&
                        settings[name] && this[methodName]) {
                        input = this[methodName].call(this, input, settings[name]);
                    }
                }
                return input;
            },
            /*
             * Normalization methods
             */
            leftTrim: function (input) {
                return input.replace(/^\s+/, '');
            },
            rightTrim: function (input) {
                return input.replace(/\s+$/, '');
            },
            tabsToSpaces: function (input, spaces) {
                spaces = spaces | 0 || 4;
                return input.replace(/\t/g, new Array(++spaces).join(' '));
            },
            spacesToTabs: function (input, spaces) {
                spaces = spaces | 0 || 4;
                return input.replace(RegExp(' {' + spaces + '}', 'g'), '\t');
            },
            removeTrailing: function (input) {
                return input.replace(/\s*?$/gm, '');
            },
            // Support for deprecated plugin remove-initial-line-feed
            removeInitialLineFeed: function (input) {
                return input.replace(/^(?:\r?\n|\r)/, '');
            },
            removeIndent: function (input) {
                var indents = input.match(/^[^\S\n\r]*(?=\S)/gm);
                if (!indents || !indents[0].length)
                    return input;
                indents.sort(function (a, b) { return a.length - b.length; });
                if (!indents[0].length)
                    return input;
                return input.replace(RegExp('^' + indents[0], 'gm'), '');
            },
            indent: function (input, tabs) {
                return input.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++tabs).join('\t') + '$&');
            },
            breakLines: function (input, characters) {
                characters = (characters === true) ? 80 : characters | 0 || 80;
                var lines = input.split('\n');
                for (var i = 0; i < lines.length; ++i) {
                    if (tabLen(lines[i]) <= characters)
                        continue;
                    var line = lines[i].split(/(\s+)/g), len = 0;
                    for (var j = 0; j < line.length; ++j) {
                        var tl = tabLen(line[j]);
                        len += tl;
                        if (len > characters) {
                            line[j] = '\n' + line[j];
                            len = tl;
                        }
                    }
                    lines[i] = line.join('');
                }
                return lines.join('\n');
            }
        };
        // Support node modules
        if (module.exports) {
            module.exports = NormalizeWhitespace;
        }
        // Exit if prism is not loaded
        if (typeof Prism === 'undefined') {
            return;
        }
        Prism.plugins.NormalizeWhitespace = new NormalizeWhitespace({
            'remove-trailing': true,
            'remove-indent': true,
            'left-trim': true,
            'right-trim': true,
        });
        Prism.hooks.add('before-sanity-check', function (env) {
            var Normalizer = Prism.plugins.NormalizeWhitespace;
            // Check settings
            if (env.settings && env.settings['whitespace-normalization'] === false) {
                return;
            }
            // Simple mode if there is no env.element
            if ((!env.element || !env.element.parentNode) && env.code) {
                env.code = Normalizer.normalize(env.code, env.settings);
                return;
            }
            // Normal mode
            var pre = env.element.parentNode;
            var clsReg = /(?:^|\s)no-whitespace-normalization(?:\s|$)/;
            if (!env.code || !pre || pre.nodeName.toLowerCase() !== 'pre' ||
                clsReg.test(pre.className) || clsReg.test(env.element.className))
                return;
            var children = pre.childNodes, before = '', after = '', codeFound = false;
            // Move surrounding whitespace from the <pre> tag into the <code> tag
            for (var i = 0; i < children.length; ++i) {
                var node = children[i];
                if (node == env.element) {
                    codeFound = true;
                }
                else if (node.nodeName === "#text") {
                    if (codeFound) {
                        after += node.nodeValue;
                    }
                    else {
                        before += node.nodeValue;
                    }
                    pre.removeChild(node);
                    --i;
                }
            }
            if (!env.element.children.length || !Prism.plugins.KeepMarkup) {
                env.code = before + env.code + after;
                env.code = Normalizer.normalize(env.code, env.settings);
            }
            else {
                // Preserve markup for keep-markup plugin
                var html = before + env.element.innerHTML + after;
                env.element.innerHTML = Normalizer.normalize(html, env.settings);
                env.code = env.element.textContent;
            }
        });
    }());
});
Prism.languages.typescript = Prism.languages.extend('javascript', {
    // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
    'keyword': /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
    'builtin': /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
Prism.languages.ts = Prism.languages.typescript;
(function (Prism) {
    // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
    // + LC_ALL, RANDOM, REPLY, SECONDS.
    // + make sure PS1..4 are here as they are not always set,
    // - some useless things.
    var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
    var insideString = {
        'environment': {
            pattern: RegExp("\\$" + envVars),
            alias: 'constant'
        },
        'variable': [
            // [0]: Arithmetic Environment
            {
                pattern: /\$?\(\([\s\S]+?\)\)/,
                greedy: true,
                inside: {
                    // If there is a $ sign at the beginning highlight $(( and )) as variable
                    'variable': [
                        {
                            pattern: /(^\$\(\([\s\S]+)\)\)/,
                            lookbehind: true
                        },
                        /^\$\(\(/
                    ],
                    'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                    // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
                    'operator': /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                    // If there is no $ sign at the beginning highlight (( and )) as punctuation
                    'punctuation': /\(\(?|\)\)?|,|;/
                }
            },
            // [1]: Command Substitution
            {
                pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                greedy: true,
                inside: {
                    'variable': /^\$\(|^`|\)$|`$/
                }
            },
            // [2]: Brace expansion
            {
                pattern: /\$\{[^}]+\}/,
                greedy: true,
                inside: {
                    'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    'punctuation': /[\[\]]/,
                    'environment': {
                        pattern: RegExp("(\\{)" + envVars),
                        lookbehind: true,
                        alias: 'constant'
                    }
                }
            },
            /\$(?:\w+|[#?*!@$])/
        ],
        // Escape sequences from echo and printf's manuals, and escaped quotes.
        'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
    };
    Prism.languages.bash = {
        'shebang': {
            pattern: /^#!\s*\/.*/,
            alias: 'important'
        },
        'comment': {
            pattern: /(^|[^"{\\$])#.*/,
            lookbehind: true
        },
        'function-name': [
            // a) function foo {
            // b) foo() {
            // c) function foo() {
            // but not “foo {”
            {
                // a) and c)
                pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: true,
                alias: 'function'
            },
            {
                // b)
                pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
                alias: 'function'
            }
        ],
        // Highlight variable names as variables in for and select beginnings.
        'for-or-select': {
            pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
            alias: 'variable',
            lookbehind: true
        },
        // Highlight variable names as variables in the left-hand part
        // of assignments (“=” and “+=”).
        'assign-left': {
            pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
            inside: {
                'environment': {
                    pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
                    lookbehind: true,
                    alias: 'constant'
                }
            },
            alias: 'variable',
            lookbehind: true
        },
        'string': [
            // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
            {
                pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,
                lookbehind: true,
                greedy: true,
                inside: insideString
            },
            // Here-document with quotes around the tag
            // → No expansion (so no “inside”).
            {
                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,
                lookbehind: true,
                greedy: true
            },
            // “Normal” string
            {
                pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
                greedy: true,
                inside: insideString
            }
        ],
        'environment': {
            pattern: RegExp("\\$?" + envVars),
            alias: 'constant'
        },
        'variable': insideString.variable,
        'function': {
            pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
            lookbehind: true
        },
        'keyword': {
            pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
            lookbehind: true
        },
        // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        'builtin': {
            pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
            lookbehind: true,
            // Alias added to make those easier to distinguish from strings.
            alias: 'class-name'
        },
        'boolean': {
            pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
            lookbehind: true
        },
        'file-descriptor': {
            pattern: /\B&\d\b/,
            alias: 'important'
        },
        'operator': {
            // Lots of redirections here, but not just that.
            pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
            inside: {
                'file-descriptor': {
                    pattern: /^\d/,
                    alias: 'important'
                }
            }
        },
        'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        'number': {
            pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
            lookbehind: true
        }
    };
    /* Patterns in command substitution. */
    var toBeCopied = [
        'comment',
        'function-name',
        'for-or-select',
        'assign-left',
        'string',
        'environment',
        'function',
        'keyword',
        'builtin',
        'boolean',
        'file-descriptor',
        'operator',
        'punctuation',
        'number'
    ];
    var inside = insideString.variable[1].inside;
    for (var i = 0; i < toBeCopied.length; i++) {
        inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
    }
    Prism.languages.shell = Prism.languages.bash;
})(Prism);
var Code = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.language = "html";
        this.simple = false;
        this.copy = true;
        this.copied = false;
        this.expanded = false;
        this.expandable = false;
        this.randomName = Math.round((Math.random() * 10000));
        this.preview = true;
        this.feature = false;
        this.dark = false;
    }
    class_1.prototype.componentWillLoad = function () {
        this.getCode();
    };
    class_1.prototype.componentDidLoad = function () {
        var _this = this;
        this.highlight();
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function () {
                _this.getCode();
            });
        });
        observer.observe(this.element, { attributes: true, childList: true, subtree: true });
    };
    class_1.prototype.componentWillUpdate = function () {
        this.getCode();
    };
    class_1.prototype.componentDidUpdate = function () {
        this.highlight();
    };
    class_1.prototype.handleCodeStringUpdate = function () {
        this.getCode();
    };
    class_1.prototype.replaceAll = function (str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    };
    class_1.prototype.highlight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var block;
            return __generator(this, function (_a) {
                block = this.element.querySelector('code');
                prism.highlightElement(block, false);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.result = function () {
        return __awaiter(this, void 0, void 0, function () {
            function htmlDecode(input) {
                var doc = new DOMParser().parseFromString(input, "text/html");
                return doc.documentElement.textContent;
            }
            return __generator(this, function (_a) {
                return [2 /*return*/, htmlDecode(this.code)];
            });
        });
    };
    class_1.prototype.clipboard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var copyText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.result()];
                    case 1:
                        copyText = _a.sent();
                        ezClipboard.copyPlain(copyText);
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.setCode = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.code = code;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.getCode = function () {
        if (this.codeString) {
            this.raw = this.codeString;
            this.code = this.codeString.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
        }
        else {
            var code = this.element.querySelector('template');
            if (code) {
                var language = Array.from(code.classList).filter(function (s) { return s.includes('language-'); });
                if (language.length === 1) {
                    this.language = language[0].substr(9);
                }
                if (!code.innerHTML) {
                    code = Array.from(code.children).map(function (node) {
                        return node.outerHTML;
                    }).join();
                }
                else {
                    code = code.innerHTML;
                }
                this.raw = code;
                this.code = code.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
            }
        }
    };
    class_1.prototype.renderPreview = function () {
        return h("section", { class: "preview flush" }, h("div", { class: "result", innerHTML: this.raw }));
    };
    class_1.prototype.renderCode = function () {
        return h("pre", { "aria-label": "The " + this.language + " code", tabindex: 0 }, h("code", { class: "language-" + this.language, innerHTML: this.code }), h("div", { class: "hidden" }, h("slot", null, h("template", null, h("p", null, "There's no code here!")))));
    };
    class_1.prototype.render = function () {
        if (this.simple) {
            return this.renderCode();
        }
        else {
            return h("stellar-card", { shadow: "light", padding: "small" }, this.feature && h("header", null, h("slot", { name: "feature" }), h("slot", { name: "property" })), this.preview && this.renderPreview(), h("footer", { class: "code" }, this.renderCode()));
        }
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "codeString": ["handleCodeStringUpdate"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "stellar-code,stellar-code *,stellar-code :after,stellar-code :before{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-code ::-webkit-scrollbar{-webkit-appearance:none;cursor:pointer;width:6px;height:6px}stellar-code ::-webkit-scrollbar-track{background:transparent;mix-blend-mode:hard-light;background:var(--theme-base0,var(--gray0))}stellar-code ::-webkit-scrollbar-thumb{cursor:pointer;display:block;background:var(--theme-base7,var(--gray7))}stellar-code ::-webkit-scrollbar-thumb:window-inactive{background:transparent}stellar-code ::-webkit-scrollbar-thumb:hover{cursor:pointer;background:var(--theme-base5,var(--gray5))}stellar-code{display:block;width:100%;background:var(--gray0);letter-spacing:0}stellar-code,stellar-code .preview{overflow:auto}stellar-code stellar-card{--background:var(--white)}stellar-code[simple]{padding:1rem}stellar-code header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}stellar-code footer{width:100%;overflow:auto;background:var(--gray0)}stellar-code .hidden{display:none}stellar-code pre{margin:0;padding:0;line-height:2;-moz-tab-size:4;-o-tab-size:4;tab-size:4;word-break:break-word;white-space:pre-wrap;color:var(--gray1);font-size:1rem;font-weight:400}stellar-code code[class*=language-],stellar-code pre[class*=language-]{background:none;text-align:left;text-shadow:0 1px var(--gray1);line-height:1.5rem;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;word-break:normal;word-wrap:normal;word-spacing:normal;white-space:pre;color:var(--gray9);font-family:Hack,monospace;font-size:1rem;width:0}stellar-code code{display:block}stellar-code span{font-size:1rem}stellar-code pre>.token{display:inline-block}stellar-code pre .token{line-height:1.5rem!important;font-family:Hack,monospace;font-size:1rem!important}stellar-code pre .token.cdata,stellar-code pre .token.comment,stellar-code pre .token.doctype,stellar-code pre .token.prolog,stellar-code pre .token.punctuation{color:var(--gray7)}stellar-code pre .namespace{opacity:.7}stellar-code pre .token.boolean,stellar-code pre .token.constant,stellar-code pre .token.deleted,stellar-code pre .token.number,stellar-code pre .token.property,stellar-code pre .token.symbol,stellar-code pre .token.tag{color:var(--cyan5)}stellar-code pre .token.attr-name,stellar-code pre .token.builtin,stellar-code pre .token.char,stellar-code pre .token.inserted,stellar-code pre .token.selector,stellar-code pre .token.string{color:var(--green5)}stellar-code pre.language-css .token.string,stellar-code pre.style .token.string,stellar-code pre .token.entity,stellar-code pre .token.operator,stellar-code pre .token.url{color:var(--yellow5);font-family:Hack,monospace}stellar-code pre .token.atrule,stellar-code pre .token.attr-value,stellar-code pre .token.keyword{color:var(--cyan5)}stellar-code pre .token.function{color:var(--blue5)}stellar-code pre .token.important,stellar-code pre .token.regex,stellar-code pre .token.variable{color:var(--red5)}stellar-code pre .token.bold,stellar-code pre .token.important{font-weight:700}stellar-code pre .token.italic{font-style:italic}stellar-code pre .token.entity{cursor:help}stellar-code pre.show-line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}stellar-code pre.show-line-numbers>code{position:relative;white-space:inherit}stellar-code pre.show-line-numbers .line-numbers-rows{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute;top:.125em;left:-3.8em;border-right:1px solid var(--gray8);width:3em;line-height:1.5rem;letter-spacing:-1px;font-size:1rem}stellar-code pre.show-line-numbers .line-numbers-rows>span{pointer-events:none;display:block;counter-increment:linenumber;line-height:1.5rem;font-size:1rem}stellar-code pre.show-line-numbers .line-numbers-rows>span:before{content:counter(linenumber);display:block;padding-right:.8em;text-align:right;line-height:1.5rem;color:var(--gray8);font-size:1rem}stellar-code .token.cr,stellar-code .token.lf,stellar-code .token.space,stellar-code .token.tab:not(:empty){display:inline;position:relative}stellar-code .token.cr:before,stellar-code .token.lf:before,stellar-code .token.space:before,stellar-code .token.tab:not(:empty):before{position:absolute;color:var(--gray8)}stellar-code pre.show-invisibles .token.tab:not(:empty):before{content:\"────\"}stellar-code pre.show-invisibles .token.cr:before{content:\"␍\"}stellar-code pre.show-invisibles .token.crlf:before{content:\"␍␊\"}stellar-code pre.show-invisibles .token.lf:before{content:\"␊\"}stellar-code pre.show-invisibles .token.space:before{content:\"·\"}stellar-code[dark],stellar-code[dark] footer{background:var(--gray9)}stellar-code[dark] stellar-card{--background:var(--black)}stellar-code[dark] code[class*=language-],stellar-code[dark] pre[class*=language-]{color:var(--gray1);text-shadow:0 1px var(--gray9)}stellar-code[dark] pre .token.cdata,stellar-code[dark] pre .token.comment,stellar-code[dark] pre .token.doctype,stellar-code[dark] pre .token.prolog,stellar-code[dark] pre .token.punctuation{color:var(--gray5)}stellar-code[dark] pre .token.boolean,stellar-code[dark] pre .token.constant,stellar-code[dark] pre .token.deleted,stellar-code[dark] pre .token.number,stellar-code[dark] pre .token.property,stellar-code[dark] pre .token.symbol,stellar-code[dark] pre .token.tag{color:var(--cyan5)}stellar-code[dark] pre .token.attr-name,stellar-code[dark] pre .token.builtin,stellar-code[dark] pre .token.char,stellar-code[dark] pre .token.inserted,stellar-code[dark] pre .token.selector,stellar-code[dark] pre .token.string{color:var(--green5)}stellar-code[dark] pre.language-css .token.string,stellar-code[dark] pre.style .token.string,stellar-code[dark] pre .token.entity,stellar-code[dark] pre .token.operator,stellar-code[dark] pre .token.url{color:var(--yellow5);font-family:Hack,monospace}stellar-code[dark] pre .token.atrule,stellar-code[dark] pre .token.attr-value,stellar-code[dark] pre .token.keyword{color:var(--cyan5)}stellar-code[dark] pre .token.function{color:var(--blue5)}stellar-code[dark] pre .token.important,stellar-code[dark] pre .token.regex,stellar-code[dark] pre .token.variable{color:var(--red5)}stellar-code[dark] .token.cr:before,stellar-code[dark] .token.lf:before,stellar-code[dark] .token.space:before,stellar-code[dark] .token.tab:not(:empty):before,stellar-code[dark] pre.show-line-numbers .line-numbers-rows,stellar-code[dark] pre.show-line-numbers .line-numbers-rows>span:before{color:var(--gray2)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Tunnel.injectProps(Code, ['dark']);
export { Code as stellar_code };
