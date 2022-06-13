var __awaiter=this&&this.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function o(e){try{l(r["throw"](e))}catch(e){i(e)}}function l(e){e.done?n(e.value):a(e.value).then(s,o)}l((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e];a=0}finally{r=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-94e3dad1.system.js","./p-c4dffc26.system.js","./p-69f4f799.system.js","./p-752b9e3e.system.js","./p-b5ec2b74.system.js"],(function(e){"use strict";var t,n,r,a,i,s,o;return{setters:[function(e){t=e.r;n=e.h;r=e.g},function(){},function(e){a=e.T},function(e){i=e.c;s=e.a},function(e){o=e.e}],execute:function(){var l=i((function(e){var t=typeof window!=="undefined"?window:typeof WorkerGlobalScope!=="undefined"&&self instanceof WorkerGlobalScope?self:{};var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i;var n=0;var r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){if(e instanceof a){return new a(e.type,r.util.encode(e.content),e.alias)}else if(Array.isArray(e)){return e.map(r.util.encode)}else{return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")}},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){if(!e["__id"]){Object.defineProperty(e,"__id",{value:++n})}return e["__id"]},clone:function e(t,n){var a,i,s=r.util.type(t);n=n||{};switch(s){case"Object":i=r.util.objId(t);if(n[i]){return n[i]}a={};n[i]=a;for(var o in t){if(t.hasOwnProperty(o)){a[o]=e(t[o],n)}}return a;case"Array":i=r.util.objId(t);if(n[i]){return n[i]}a=[];n[i]=a;t.forEach((function(t,r){a[r]=e(t,n)}));return a;default:return t}}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t){n[a]=t[a]}return n},insertBefore:function(e,t,n,a){a=a||r.languages;var i=a[e];var s={};for(var o in i){if(i.hasOwnProperty(o)){if(o==t){for(var l in n){if(n.hasOwnProperty(l)){s[l]=n[l]}}}if(!n.hasOwnProperty(o)){s[o]=i[o]}}}var u=a[e];a[e]=s;r.languages.DFS(r.languages,(function(t,n){if(n===u&&t!=e){this[t]=s}}));return s},DFS:function e(t,n,a,i){i=i||{};var s=r.util.objId;for(var o in t){if(t.hasOwnProperty(o)){n.call(t,o,t[o],a||o);var l=t[o],u=r.util.type(l);if(u==="Object"&&!i[s(l)]){i[s(l)]=true;e(l,n,null,i)}else if(u==="Array"&&!i[s(l)]){i[s(l)]=true;e(l,n,o,i)}}}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a);var i=e.querySelectorAll(a.selector);for(var s=0,o;o=i[s++];){r.highlightElement(o,t===true,a.callback)}},highlightElement:function(n,a,i){var s="none",o,l=n;while(l&&!t.test(l.className)){l=l.parentNode}if(l){s=(l.className.match(t)||[,"none"])[1].toLowerCase();o=r.languages[s]}n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;if(n.parentNode){l=n.parentNode;if(/pre/i.test(l.nodeName)){l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s}}var u=n.textContent;var c={element:n,language:s,grammar:o,code:u};var d=function(e){c.highlightedCode=e;r.hooks.run("before-insert",c);c.element.innerHTML=c.highlightedCode;r.hooks.run("after-highlight",c);r.hooks.run("complete",c);i&&i.call(c.element)};r.hooks.run("before-sanity-check",c);if(!c.code){r.hooks.run("complete",c);return}r.hooks.run("before-highlight",c);if(!c.grammar){d(r.util.encode(c.code));return}if(a&&e.Worker){var p=new Worker(r.filename);p.onmessage=function(e){d(e.data)};p.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:true}))}else{d(r.highlight(c.code,c.grammar,c.language))}},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};r.hooks.run("before-tokenize",i);i.tokens=r.tokenize(i.code,i.grammar);r.hooks.run("after-tokenize",i);return a.stringify(r.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,i,s,o,l){for(var u in n){if(!n.hasOwnProperty(u)||!n[u]){continue}if(u==l){return}var c=n[u];c=r.util.type(c)==="Array"?c:[c];for(var d=0;d<c.length;++d){var p=c[d],f=p.inside,g=!!p.lookbehind,h=!!p.greedy,m=0,b=p.alias;if(h&&!p.pattern.global){var v=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,v+"g")}p=p.pattern||p;for(var y=i,S=s;y<t.length;S+=t[y].length,++y){var w=t[y];if(t.length>e.length){return}if(w instanceof a){continue}if(h&&y!=t.length-1){p.lastIndex=S;var A=p.exec(e);if(!A){break}var k=A.index+(g?A[1].length:0),E=A.index+A[0].length,_=y,F=S;for(var T=t.length;_<T&&(F<E||!t[_].type&&!t[_-1].greedy);++_){F+=t[_].length;if(k>=F){++y;S=F}}if(t[y]instanceof a){continue}x=_-y;w=e.slice(S,F);A.index-=S}else{p.lastIndex=0;var A=p.exec(w),x=1}if(!A){if(o){break}continue}if(g){m=A[1]?A[1].length:0}var k=A.index+m,A=A[0].slice(m),E=k+A.length,N=w.slice(0,k),P=w.slice(E);var O=[y,x];if(N){++y;S+=N.length;O.push(N)}var C=new a(u,f?r.tokenize(A,f):A,b,A,h);O.push(C);if(P){O.push(P)}Array.prototype.splice.apply(t,O);if(x!=1)r.matchGrammar(e,t,n,y,S,true,u);if(o)break}}}},tokenize:function(e,t){var n=[e];var a=t.rest;if(a){for(var i in a){t[i]=a[i]}delete t.rest}r.matchGrammar(e,n,t,0,0,false);return n},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[];n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(!n||!n.length){return}for(var a=0,i;i=n[a++];){i(t)}}},Token:a};e.Prism=r;function a(e,t,n,r,a){this.type=e;this.content=t;this.alias=n;this.length=(r||"").length|0;this.greedy=!!a}a.stringify=function(e,t){if(typeof e=="string"){return e}if(Array.isArray(e)){return e.map((function(e){return a.stringify(e,t)})).join("")}var n={type:e.type,content:a.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,i)}r.hooks.run("wrap",n);var s=Object.keys(n.attributes).map((function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(s?" "+s:"")+">"+n.content+"</"+n.tag+">"};if(!e.document){if(!e.addEventListener){return r}if(!r.disableWorkerMessageHandler){e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,i=n.code,s=n.immediateClose;e.postMessage(r.highlight(i,r.languages[a],a));if(s){e.close()}}),false)}return r}var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();if(i){r.filename=i.src;if(!r.manual&&!i.hasAttribute("data-manual")){if(document.readyState!=="loading"){if(window.requestAnimationFrame){window.requestAnimationFrame(r.highlightAll)}else{window.setTimeout(r.highlightAll,16)}}else{document.addEventListener("DOMContentLoaded",r.highlightAll)}}}return r}(t);if(e.exports){e.exports=n}if(typeof s!=="undefined"){s.Prism=n}n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:true,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:true}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i};n.languages.markup["tag"].inside["attr-value"].inside["entity"]=n.languages.markup["entity"];n.hooks.add("wrap",(function(e){if(e.type==="entity"){e.attributes["title"]=e.content.replace(/&amp;/,"&")}}));Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function e(t,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:true,inside:n.languages[r]};a["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};i["language-"+r]={pattern:/[\s\S]+/,inside:n.languages[r]};var s={};s[t]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,t),"i"),lookbehind:true,greedy:true,inside:i};n.languages.insertBefore("markup","cdata",s)}});n.languages.xml=n.languages.extend("markup",{});n.languages.html=n.languages.markup;n.languages.mathml=n.languages.markup;n.languages.svg=n.languages.markup;(function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:true},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/};e.languages.css["atrule"].inside.rest=e.languages.css;var n=e.languages.markup;if(n){n.tag.addInlined("style","css");e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag)}})(n);n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:true},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:true,greedy:true}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:true},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:true,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:true}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:true},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:true}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/});n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:true,greedy:true},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:true,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:true,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:true,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:true,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:true,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}});if(n.languages.markup){n.languages.markup.tag.addInlined("script","javascript")}n.languages.js=n.languages.javascript;(function(){if(typeof self==="undefined"||!self.Prism||!self.document||!document.querySelector){return}self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(e.hasAttribute("data-src-loaded")){return}var r=e.getAttribute("data-src");var a,i=e;var s=/\blang(?:uage)?-([\w-]+)\b/i;while(i&&!s.test(i.className)){i=i.parentNode}if(i){a=(e.className.match(s)||[,""])[1]}if(!a){var o=(r.match(/\.(\w+)$/)||[,""])[1];a=t[o]||o}var l=document.createElement("code");l.className="language-"+a;e.textContent="";l.textContent="Loading…";e.appendChild(l);var u=new XMLHttpRequest;u.open("GET",r,true);u.onreadystatechange=function(){if(u.readyState==4){if(u.status<400&&u.responseText){l.textContent=u.responseText;n.highlightElement(l);e.setAttribute("data-src-loaded","")}else if(u.status>=400){l.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText}else{l.textContent="✖ Error: File does not exist or is empty"}}};u.send(null)}));if(n.plugins.toolbar){n.plugins.toolbar.registerButton("download-file",(function(e){var t=e.element.parentNode;if(!t||!/pre/i.test(t.nodeName)||!t.hasAttribute("data-src")||!t.hasAttribute("data-download-link")){return}var n=t.getAttribute("data-src");var r=document.createElement("a");r.textContent=t.getAttribute("data-download-link-label")||"Download";r.setAttribute("download","");r.href=n;return r}))}};document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()}))})()}));(function(){if(typeof self==="undefined"||!self.Prism||!self.document){return}var e="line-numbers";var t=/\n(?!$)/g;var n=function(e){var n=r(e);var a=n["white-space"];if(a==="pre-wrap"||a==="pre-line"){var i=e.querySelector("code");var s=e.querySelector(".line-numbers-rows");var o=e.querySelector(".line-numbers-sizer");var l=i.textContent.split(t);if(!o){o=document.createElement("span");o.className="line-numbers-sizer";i.appendChild(o)}o.style.display="block";l.forEach((function(e,t){o.textContent=e||"\n";var n=o.getBoundingClientRect().height;s.children[t].style.height=n+"px"}));o.textContent="";o.style.display="none"}};var r=function(e){if(!e){return null}return window.getComputedStyle?getComputedStyle(e):e.currentStyle||null};window.addEventListener("resize",(function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+e),n)}));Prism.hooks.add("complete",(function(e){if(!e.code){return}var r=e.element;var a=r.parentNode;if(!a||!/pre/i.test(a.nodeName)){return}if(r.querySelector(".line-numbers-rows")){return}var i=false;var s=/(?:^|\s)line-numbers(?:\s|$)/;for(var o=r;o;o=o.parentNode){if(s.test(o.className)){i=true;break}}if(!i){return}r.className=r.className.replace(s," ");if(!s.test(a.className)){a.className+=" line-numbers"}var l=e.code.match(t);var u=l?l.length+1:1;var c;var d=new Array(u+1).join("<span></span>");c=document.createElement("span");c.setAttribute("aria-hidden","true");c.className="line-numbers-rows";c.innerHTML=d;if(a.hasAttribute("data-start")){a.style.counterReset="linenumber "+(parseInt(a.getAttribute("data-start"),10)-1)}e.element.appendChild(c);n(a);Prism.hooks.run("line-numbers",e)}));Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{};e.plugins.lineNumbers=true}));Prism.plugins.lineNumbers={getLine:function(t,n){if(t.tagName!=="PRE"||!t.classList.contains(e)){return}var r=t.querySelector(".line-numbers-rows");var a=parseInt(t.getAttribute("data-start"),10)||1;var i=a+(r.children.length-1);if(n<a){n=a}if(n>i){n=i}var s=n-a;return r.children[s]}}})();var u=i((function(e){(function(){var t=Object.assign||function(e,t){for(var n in t){if(t.hasOwnProperty(n))e[n]=t[n]}return e};function n(e){this.defaults=t({},e)}function r(e){return e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))}function a(e){var t=0;for(var n=0;n<e.length;++n){if(e.charCodeAt(n)=="\t".charCodeAt(0))t+=3}return e.length+t}n.prototype={setDefaults:function(e){this.defaults=t(this.defaults,e)},normalize:function(e,n){n=t(this.defaults,n);for(var a in n){var i=r(a);if(a!=="normalize"&&i!=="setDefaults"&&n[a]&&this[i]){e=this[i].call(this,e,n[a])}}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){t=t|0||4;return e.replace(/\t/g,new Array(++t).join(" "))},spacesToTabs:function(e,t){t=t|0||4;return e.replace(RegExp(" {"+t+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);if(!t||!t[0].length)return e;t.sort((function(e,t){return e.length-t.length}));if(!t[0].length)return e;return e.replace(RegExp("^"+t[0],"gm"),"")},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++t).join("\t")+"$&")},breakLines:function(e,t){t=t===true?80:t|0||80;var n=e.split("\n");for(var r=0;r<n.length;++r){if(a(n[r])<=t)continue;var i=n[r].split(/(\s+)/g),s=0;for(var o=0;o<i.length;++o){var l=a(i[o]);s+=l;if(s>t){i[o]="\n"+i[o];s=l}}n[r]=i.join("")}return n.join("\n")}};if(e.exports){e.exports=n}if(typeof Prism==="undefined"){return}Prism.plugins.NormalizeWhitespace=new n({"remove-trailing":true,"remove-indent":true,"left-trim":true,"right-trim":true});Prism.hooks.add("before-sanity-check",(function(e){var t=Prism.plugins.NormalizeWhitespace;if(e.settings&&e.settings["whitespace-normalization"]===false){return}if((!e.element||!e.element.parentNode)&&e.code){e.code=t.normalize(e.code,e.settings);return}var n=e.element.parentNode;var r=/(?:^|\s)no-whitespace-normalization(?:\s|$)/;if(!e.code||!n||n.nodeName.toLowerCase()!=="pre"||r.test(n.className)||r.test(e.element.className))return;var a=n.childNodes,i="",s="",o=false;for(var l=0;l<a.length;++l){var u=a[l];if(u==e.element){o=true}else if(u.nodeName==="#text"){if(o){s+=u.nodeValue}else{i+=u.nodeValue}n.removeChild(u);--l}}if(!e.element.children.length||!Prism.plugins.KeepMarkup){e.code=i+e.code+s;e.code=t.normalize(e.code,e.settings)}else{var c=i+e.element.innerHTML+s;e.element.innerHTML=t.normalize(c,e.settings);e.code=e.element.textContent}}))})()}));Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/});Prism.languages.ts=Prism.languages.typescript;(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";var n={environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:true,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:true},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:true,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:true,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:true,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:true},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:true,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:true},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:true,alias:"constant"}},alias:"variable",lookbehind:true},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,lookbehind:true,greedy:true,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,lookbehind:true,greedy:true},{pattern:/(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,greedy:true,inside:n}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:true},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:true},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:true,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:true},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:true}};var r=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"];var a=n.variable[1].inside;for(var i=0;i<r.length;i++){a[r[i]]=e.languages.bash[r[i]]}e.languages.shell=e.languages.bash})(Prism);var c=e("stellar_code",function(){function e(e){t(this,e);this.language="html";this.simple=false;this.copy=true;this.copied=false;this.expanded=false;this.expandable=false;this.randomName=Math.round(Math.random()*1e4);this.preview=true;this.feature=false;this.dark=false}e.prototype.componentWillLoad=function(){this.getCode()};e.prototype.componentDidLoad=function(){var e=this;this.highlight();var t=new MutationObserver((function(t){t.forEach((function(){e.getCode()}))}));t.observe(this.element,{attributes:true,childList:true,subtree:true})};e.prototype.componentWillUpdate=function(){this.getCode()};e.prototype.componentDidUpdate=function(){this.highlight()};e.prototype.handleCodeStringUpdate=function(){this.getCode()};e.prototype.replaceAll=function(e,t,n){return e.replace(new RegExp(t,"g"),n)};e.prototype.highlight=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e=this.element.querySelector("code");l.highlightElement(e,false);return[2]}))}))};e.prototype.result=function(){return __awaiter(this,void 0,void 0,(function(){function e(e){var t=(new DOMParser).parseFromString(e,"text/html");return t.documentElement.textContent}return __generator(this,(function(t){return[2,e(this.code)]}))}))};e.prototype.clipboard=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:return[4,this.result()];case 1:e=t.sent();o.copyPlain(e);return[2]}}))}))};e.prototype.setCode=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.code=e;return[2]}))}))};e.prototype.getCode=function(){if(this.codeString){this.raw=this.codeString;this.code=this.codeString.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}else{var e=this.element.querySelector("template");if(e){var t=Array.from(e.classList).filter((function(e){return e.includes("language-")}));if(t.length===1){this.language=t[0].substr(9)}if(!e.innerHTML){e=Array.from(e.children).map((function(e){return e.outerHTML})).join()}else{e=e.innerHTML}this.raw=e;this.code=e.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}}};e.prototype.renderPreview=function(){return n("section",{class:"preview flush"},n("div",{class:"result",innerHTML:this.raw}))};e.prototype.renderCode=function(){return n("pre",{"aria-label":"The "+this.language+" code",tabindex:0},n("code",{class:"language-"+this.language,innerHTML:this.code}),n("div",{class:"hidden"},n("slot",null,n("template",null,n("p",null,"There's no code here!")))))};e.prototype.render=function(){if(this.simple){return this.renderCode()}else{return n("stellar-card",{shadow:"light",padding:"small"},this.feature&&n("header",null,n("slot",{name:"feature"}),n("slot",{name:"property"})),this.preview&&this.renderPreview(),n("footer",{class:"code"},this.renderCode()))}};Object.defineProperty(e.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{codeString:["handleCodeStringUpdate"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"stellar-code,stellar-code *,stellar-code :after,stellar-code :before{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-code ::-webkit-scrollbar{-webkit-appearance:none;cursor:pointer;width:6px;height:6px}stellar-code ::-webkit-scrollbar-track{background:transparent;mix-blend-mode:hard-light;background:var(--theme-base0,var(--gray0))}stellar-code ::-webkit-scrollbar-thumb{cursor:pointer;display:block;background:var(--theme-base7,var(--gray7))}stellar-code ::-webkit-scrollbar-thumb:window-inactive{background:transparent}stellar-code ::-webkit-scrollbar-thumb:hover{cursor:pointer;background:var(--theme-base5,var(--gray5))}stellar-code{display:block;width:100%;background:var(--gray0);letter-spacing:0}stellar-code,stellar-code .preview{overflow:auto}stellar-code stellar-card{--background:var(--white)}stellar-code[simple]{padding:1rem}stellar-code header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}stellar-code footer{width:100%;overflow:auto;background:var(--gray0)}stellar-code .hidden{display:none}stellar-code pre{margin:0;padding:0;line-height:2;-moz-tab-size:4;-o-tab-size:4;tab-size:4;word-break:break-word;white-space:pre-wrap;color:var(--gray1);font-size:1rem;font-weight:400}stellar-code code[class*=language-],stellar-code pre[class*=language-]{background:none;text-align:left;text-shadow:0 1px var(--gray1);line-height:1.5rem;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;word-break:normal;word-wrap:normal;word-spacing:normal;white-space:pre;color:var(--gray9);font-family:Hack,monospace;font-size:1rem;width:0}stellar-code code{display:block}stellar-code span{font-size:1rem}stellar-code pre>.token{display:inline-block}stellar-code pre .token{line-height:1.5rem!important;font-family:Hack,monospace;font-size:1rem!important}stellar-code pre .token.cdata,stellar-code pre .token.comment,stellar-code pre .token.doctype,stellar-code pre .token.prolog,stellar-code pre .token.punctuation{color:var(--gray7)}stellar-code pre .namespace{opacity:.7}stellar-code pre .token.boolean,stellar-code pre .token.constant,stellar-code pre .token.deleted,stellar-code pre .token.number,stellar-code pre .token.property,stellar-code pre .token.symbol,stellar-code pre .token.tag{color:var(--cyan5)}stellar-code pre .token.attr-name,stellar-code pre .token.builtin,stellar-code pre .token.char,stellar-code pre .token.inserted,stellar-code pre .token.selector,stellar-code pre .token.string{color:var(--green5)}stellar-code pre.language-css .token.string,stellar-code pre.style .token.string,stellar-code pre .token.entity,stellar-code pre .token.operator,stellar-code pre .token.url{color:var(--yellow5);font-family:Hack,monospace}stellar-code pre .token.atrule,stellar-code pre .token.attr-value,stellar-code pre .token.keyword{color:var(--cyan5)}stellar-code pre .token.function{color:var(--blue5)}stellar-code pre .token.important,stellar-code pre .token.regex,stellar-code pre .token.variable{color:var(--red5)}stellar-code pre .token.bold,stellar-code pre .token.important{font-weight:700}stellar-code pre .token.italic{font-style:italic}stellar-code pre .token.entity{cursor:help}stellar-code pre.show-line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}stellar-code pre.show-line-numbers>code{position:relative;white-space:inherit}stellar-code pre.show-line-numbers .line-numbers-rows{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute;top:.125em;left:-3.8em;border-right:1px solid var(--gray8);width:3em;line-height:1.5rem;letter-spacing:-1px;font-size:1rem}stellar-code pre.show-line-numbers .line-numbers-rows>span{pointer-events:none;display:block;counter-increment:linenumber;line-height:1.5rem;font-size:1rem}stellar-code pre.show-line-numbers .line-numbers-rows>span:before{content:counter(linenumber);display:block;padding-right:.8em;text-align:right;line-height:1.5rem;color:var(--gray8);font-size:1rem}stellar-code .token.cr,stellar-code .token.lf,stellar-code .token.space,stellar-code .token.tab:not(:empty){display:inline;position:relative}stellar-code .token.cr:before,stellar-code .token.lf:before,stellar-code .token.space:before,stellar-code .token.tab:not(:empty):before{position:absolute;color:var(--gray8)}stellar-code pre.show-invisibles .token.tab:not(:empty):before{content:\"────\"}stellar-code pre.show-invisibles .token.cr:before{content:\"␍\"}stellar-code pre.show-invisibles .token.crlf:before{content:\"␍␊\"}stellar-code pre.show-invisibles .token.lf:before{content:\"␊\"}stellar-code pre.show-invisibles .token.space:before{content:\"·\"}stellar-code[dark],stellar-code[dark] footer{background:var(--gray9)}stellar-code[dark] stellar-card{--background:var(--black)}stellar-code[dark] code[class*=language-],stellar-code[dark] pre[class*=language-]{color:var(--gray1);text-shadow:0 1px var(--gray9)}stellar-code[dark] pre .token.cdata,stellar-code[dark] pre .token.comment,stellar-code[dark] pre .token.doctype,stellar-code[dark] pre .token.prolog,stellar-code[dark] pre .token.punctuation{color:var(--gray5)}stellar-code[dark] pre .token.boolean,stellar-code[dark] pre .token.constant,stellar-code[dark] pre .token.deleted,stellar-code[dark] pre .token.number,stellar-code[dark] pre .token.property,stellar-code[dark] pre .token.symbol,stellar-code[dark] pre .token.tag{color:var(--cyan5)}stellar-code[dark] pre .token.attr-name,stellar-code[dark] pre .token.builtin,stellar-code[dark] pre .token.char,stellar-code[dark] pre .token.inserted,stellar-code[dark] pre .token.selector,stellar-code[dark] pre .token.string{color:var(--green5)}stellar-code[dark] pre.language-css .token.string,stellar-code[dark] pre.style .token.string,stellar-code[dark] pre .token.entity,stellar-code[dark] pre .token.operator,stellar-code[dark] pre .token.url{color:var(--yellow5);font-family:Hack,monospace}stellar-code[dark] pre .token.atrule,stellar-code[dark] pre .token.attr-value,stellar-code[dark] pre .token.keyword{color:var(--cyan5)}stellar-code[dark] pre .token.function{color:var(--blue5)}stellar-code[dark] pre .token.important,stellar-code[dark] pre .token.regex,stellar-code[dark] pre .token.variable{color:var(--red5)}stellar-code[dark] .token.cr:before,stellar-code[dark] .token.lf:before,stellar-code[dark] .token.space:before,stellar-code[dark] .token.tab:not(:empty):before,stellar-code[dark] pre.show-line-numbers .line-numbers-rows,stellar-code[dark] pre.show-line-numbers .line-numbers-rows>span:before{color:var(--gray2)}"},enumerable:true,configurable:true});return e}());a.injectProps(c,["dark"])}}}));