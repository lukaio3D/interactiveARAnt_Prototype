(()=>{"use strict";var e,t={6276:(e,t,n)=>{var r=n(4084),a=n(7448),o=n(740);class i{constructor(){this.createScene=async(e,t)=>{const n=new o.Z58(e);var r=new o.SCQ("camera1",new o.Pq0(0,5,-10),n);return r.setTarget(o.Pq0.Zero()),r.attachControl(t,!0),new o.g4z("light1",new o.Pq0(0,1,0),n).intensity=.7,o.PeD.CreateSphere("sphere1",{segments:16,diameter:2},n).position.y=1,n.createDefaultEnvironment(),await n.createDefaultXRExperienceAsync({}),n}}}(async()=>{const e=new i,t=location.search.split("engine=")[1]?.split("&")[0]||"webgl";await Promise.all(e.preTasks||[]);const o=document.getElementById("renderCanvas");let s;if("webgpu"===t)if(await a.$.IsSupportedAsync){await Promise.resolve().then(n.bind(n,9018));const e=s=new a.$(o,{adaptToDeviceRatio:!0,antialias:!0});await e.initAsync(),s=e}else s=new r.N(o,!0);else s=new r.N(o,!0);const c=await e.createScene(s,o);window.scene=c,s.runRenderLoop((function(){c.render()})),window.addEventListener("resize",(function(){s.resize()}))})().then((()=>{}))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(p=0;p<e.length;p++){for(var[n,a,o]=e[p],s=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(p--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[n,a,o]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,s,c]=n,l=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(c)var p=c(r)}for(t&&t(n);l<i.length;l++)o=i[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(p)},n=self.webpackChunkbabylonjs_typescript_webpack_template=self.webpackChunkbabylonjs_typescript_webpack_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[91,678,402,454],(()=>r(6276)));a=r.O(a)})();
//# sourceMappingURL=main.js.map