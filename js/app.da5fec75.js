(function(){"use strict";var e={476:function(e,t,n){var r=n(963),o=n(252),i=n(907),a=(0,o.aZ)({__name:"App",setup:function(e){var t=(0,i.oR)();return t.dispatch("initFavorite"),function(e,t){var n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}}});const c=a;var u=c,s=n(201),f=[{path:"/",name:"Home",component:function(){return n.e(861).then(n.bind(n,861))}},{path:"/peoples/",name:"Peoples",component:function(){return n.e(97).then(n.bind(n,97))}},{path:"/peoples/:id",name:"People",component:function(){return n.e(822).then(n.bind(n,822))}},{path:"/favorite/",name:"Favorite",component:function(){return n.e(13).then(n.bind(n,13))}}],l=(0,s.p7)({history:(0,s.r5)("/innopolis/"),routes:f}),d=l,h=n(582),p="https://swapi.dev/api/people",v=function(e){return(0,h.mG)(void 0,void 0,Promise,(function(){return(0,h.Jh)(this,(function(t){switch(t.label){case 0:return[4,fetch("".concat(p,"?").concat(new URLSearchParams({page:e.toString()})),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return(0,h.mG)(void 0,void 0,void 0,(function(){return(0,h.Jh)(this,(function(t){switch(t.label){case 0:return[4,e.json()];case 1:return[2,t.sent()]}}))}))}))];case 1:return[2,t.sent()]}}))}))},m=function(e){return(0,h.mG)(void 0,void 0,Promise,(function(){return(0,h.Jh)(this,(function(t){switch(t.label){case 0:return[4,fetch("".concat(p,"/").concat(e),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return(0,h.mG)(void 0,void 0,void 0,(function(){return(0,h.Jh)(this,(function(t){switch(t.label){case 0:return[4,e.json()];case 1:return[2,t.sent()]}}))}))}))];case 1:return[2,t.sent()]}}))}))},g=function(e){return(0,h.mG)(void 0,void 0,Promise,(function(){return(0,h.Jh)(this,(function(t){switch(t.label){case 0:return[4,fetch("".concat(p,"?").concat(new URLSearchParams({search:e.toString()})),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return(0,h.mG)(void 0,void 0,void 0,(function(){return(0,h.Jh)(this,(function(t){switch(t.label){case 0:return[4,e.json()];case 1:return[2,t.sent()]}}))}))}))];case 1:return[2,t.sent()]}}))}))},b={fetchPeople:v,fetchPeopleById:m,searchPeople:g},y=function(e,t,n){var r=(0,h.ev)([],e,!0);return r.forEach((function(e,o){"undefined"!==typeof n?e[n]===t&&r.splice(o,1):e===t&&r.splice(o,1)})),r},E=(0,i.MT)({state:{favorite:[],page:1},getters:{},mutations:{SET_FAVORITE_CHARACTER:function(e,t){e.favorite=Array.from(new Set((0,h.ev)((0,h.ev)([],e.favorite,!0),[t],!1)))},REMOVE_FAVORITE_CHARACTER:function(e,t){e.favorite=y(e.favorite,t,"id")},SET_PAGE:function(e,t){e.page=t}},actions:{initFavorite:function(e){var t=e.commit,n=localStorage.getItem("swCharacters");if(n){var r=JSON.parse(n);r.map((function(e){t("SET_FAVORITE_CHARACTER",e)}))}},fetchPeople:function(e,t){return(0,h.mG)(this,void 0,Promise,(function(){return(0,h.Jh)(this,(function(e){switch(e.label){case 0:return[4,b.fetchPeople(t).then((function(e){return e}))];case 1:return[2,e.sent()]}}))}))},fetchPeopleById:function(e,t){return(0,h.mG)(this,void 0,Promise,(function(){return(0,h.Jh)(this,(function(e){switch(e.label){case 0:return[4,b.fetchPeopleById(t).then((function(e){return e}))];case 1:return[2,e.sent()]}}))}))},searchPeople:function(e,t){return(0,h.mG)(this,void 0,Promise,(function(){return(0,h.Jh)(this,(function(e){switch(e.label){case 0:return[4,b.searchPeople(t).then((function(e){return e}))];case 1:return[2,e.sent()]}}))}))},addFavorite:function(e,t){var n=e.commit,r=e.state;t.map((function(e){n("SET_FAVORITE_CHARACTER",e)})),localStorage.removeItem("swCharacters"),localStorage.setItem("swCharacters",JSON.stringify(r.favorite))},removeFavorite:function(e,t){var n=e.commit,r=e.state;t.map((function(e){n("REMOVE_FAVORITE_CHARACTER",e)})),localStorage.removeItem("swCharacters"),localStorage.setItem("swCharacters",JSON.stringify(r.favorite))},setPage:function(e,t){var n=e.commit;n("SET_PAGE",t)}},modules:{}}),w={install:function(e){var t=document.createElement("div");t.classList.add("_backdrop"),e.directive("loading",{created:function(e){e.classList.add("_loading"),e.appendChild(t)},updated:function(e,n){var r=n.value,o=n.oldValue;r!==o&&(r?(e.classList.add("_loading"),e.appendChild(t)):setTimeout((function(){var t=e.querySelector("._backdrop");t&&e.removeChild(t),e.classList.remove("_loading")}),1e3))}})}};(0,r.ri)(u).use(E).use(d).use(w).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{13:"72827d57",97:"19b3b8d3",822:"f8083a1b",861:"69b8d2d1"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{13:"b0cf4d7e",97:"47a063b2",822:"9d0001f5"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="innopolis:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var c,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){c=l;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=r),e[r]=[o];var d=function(t,n){c.onerror=c.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/innopolis/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,i.parentNode&&i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),c=n.p+a;if(t(a,c))return o();e(r,c,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={13:1,97:1,822:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),c=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],c=r[1],u=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var f=u(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkinnopolis"]=self["webpackChunkinnopolis"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(476)}));r=n.O(r)})();
//# sourceMappingURL=app.da5fec75.js.map