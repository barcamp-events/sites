System.register(["./p-752b9e3e.system.js"],(function(e){"use strict";var n,t;return{setters:[function(e){n=e.c;t=e.a}],execute:function(){var r=n((function(e){(function(){var n,t,r,a,c,o;if(typeof performance!=="undefined"&&performance!==null&&performance.now){e.exports=function(){return performance.now()}}else if(typeof process!=="undefined"&&process!==null&&process.hrtime){e.exports=function(){return(n()-c)/1e6};t=process.hrtime;n=function(){var e;e=t();return e[0]*1e9+e[1]};a=n();o=process.uptime()*1e9;c=a-o}else if(Date.now){e.exports=function(){return Date.now()-r};r=Date.now()}else{e.exports=function(){return(new Date).getTime()-r};r=(new Date).getTime()}}).call(t)}));var a=typeof window==="undefined"?t:window,c=["moz","webkit"],o="AnimationFrame",i=a["request"+o],u=a["cancel"+o]||a["cancelRequest"+o];for(var f=0;!i&&f<c.length;f++){i=a[c[f]+"Request"+o];u=a[c[f]+"Cancel"+o]||a[c[f]+"CancelRequest"+o]}if(!i||!u){var l=0,s=0,p=[],m=1e3/60;i=function(e){if(p.length===0){var n=r(),t=Math.max(0,m-(n-l));l=t+n;setTimeout((function(){var e=p.slice(0);p.length=0;for(var n=0;n<e.length;n++){if(!e[n].cancelled){try{e[n].callback(l)}catch(e){setTimeout((function(){throw e}),0)}}}}),Math.round(t))}p.push({handle:++s,callback:e,cancelled:false});return s};u=function(e){for(var n=0;n<p.length;n++){if(p[n].handle===e){p[n].cancelled=true}}}}var d=e("a",(function(e){return i.call(a,e)}));var h=function(){u.apply(a,arguments)};var v=function(e){if(!e){e=a}e.requestAnimationFrame=i;e.cancelAnimationFrame=u};e("r",d);d.cancel=h;d.polyfill=v}}}));