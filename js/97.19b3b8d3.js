"use strict";(self["webpackChunkinnopolis"]=self["webpackChunkinnopolis"]||[]).push([[97],{744:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[a,o]of t)n[a]=o;return n}},688:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(252),o=n(963),l=n(577),i=n(262),u={class:"data-table"},r={class:"data-table__table"},s={key:0},d={key:0,class:"data-table__th"},c={key:1,class:"data-table__th"},p={key:1},v={key:0,class:"data-table__td"},f=["onUpdate:modelValue","disabled","onChange"],h={key:1,class:"data-table__td data-table__td--buttons"},_={class:"data-table__footer"},w=(0,a.aZ)({__name:"DataTable",props:{header:{default:function(){return[]}},body:{default:function(){return[]}},showCheckboxColumn:{type:Boolean,default:!1},showButtonsColumn:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!1}},emits:["select-row","select-all-rows"],setup:function(e,t){var n=t.emit,w=e,g=(0,i.iH)(!1),m=function(){n("select-all-rows",{data:w.body,checked:g.value})},k=function(e,t){n("select-row",{data:t,checked:e.target.checked})};return function(e,t){return(0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("table",r,[w.header.length?((0,a.wg)(),(0,a.iD)("thead",s,[(0,a._)("tr",null,[w.showCheckboxColumn?((0,a.wg)(),(0,a.iD)("th",d,[(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=function(e){return g.value=e}),onChange:m},null,544),[[o.e8,g.value]])])):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.header,(function(e,t){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("th",{key:"th-".concat(t),class:"data-table__th"},(0,l.zw)(e.title),1)),[[o.F8,!e.hidden]])})),128)),w.showButtonsColumn?((0,a.wg)(),(0,a.iD)("th",c)):(0,a.kq)("",!0)])])):(0,a.kq)("",!0),w.body.length?((0,a.wg)(),(0,a.iD)("tbody",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.body,(function(t,n){return(0,a.wg)(),(0,a.iD)("tr",{key:"tr-".concat(n)},[w.showCheckboxColumn?((0,a.wg)(),(0,a.iD)("td",v,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":function(e){return t.checked=e},type:"checkbox",disabled:t.disabled,onChange:function(e){return k(e,t)}},null,40,f),[[o.e8,t.checked]])])):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.data,(function(e,t){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("td",{key:"td-".concat(t),class:"data-table__td"},(0,l.zw)(e),1)),[[o.F8,!w.header.find((function(e){return e.alias===t.toString()&&e.hidden}))]])})),128)),w.showButtonsColumn?((0,a.wg)(),(0,a.iD)("td",h,[(0,a.WI)(e.$slots,"buttons",{item:t,index:n})])):(0,a.kq)("",!0)])})),128))])):(0,a.kq)("",!0)]),(0,a.wy)((0,a._)("div",_,[(0,a.WI)(e.$slots,"footer")],512),[[o.F8,w.showFooter]])])}}});const g=w;var m=g},5:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(252),o=n(577),l=["type"],i=(0,a.aZ)({__name:"TheButton",props:{type:{default:"button"},primary:{type:Boolean,default:!1},second:{type:Boolean,default:!1},danger:{type:Boolean,default:!1}},emits:["click"],setup:function(e,t){var n=t.emit,i=e,u=(0,a.Fl)((function(){var e="";return i.primary&&(e+=" button--primary"),i.second&&(e+=" button--second"),i.danger&&(e+=" button--danger"),e}));return function(e,t){return(0,a.wg)(),(0,a.iD)("button",{type:i.type,class:(0,o.C_)(["button",u.value]),onClick:t[0]||(t[0]=function(e){return n("click")})},[(0,a.WI)(e.$slots,"default")],10,l)}}});const u=i;var r=u},97:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var a=n(582),o=n(252),l=n(262),i=n(907),u=n(688),r=n(577);function s(e,t){return(0,o.wg)(),(0,o.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})])}function d(e,t){return(0,o.wg)(),(0,o.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})])}function c(e,t){return(0,o.wg)(),(0,o.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})])}function p(e,t){return(0,o.wg)(),(0,o.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"})])}var v={class:"paginator"},f={class:"paginator__wrap"},h={class:"paginator__item"},_=["disabled"],w={class:"paginator__item"},g=["disabled"],m={class:"paginator__item"},k={class:"paginator__active"},b={class:"paginator__item"},y=["disabled"],C={class:"paginator__item"},U=["title","disabled"],D=(0,o.aZ)({__name:"ThePaginator",props:{modelValue:{default:1},pages:{default:1}},emits:["change","update:modelValue"],setup:function(e,t){var n=t.emit,a=e,u=(0,i.oR)(),D=(0,l.iH)(null);(0,o.bv)((function(){D.value=a.modelValue,u.dispatch("setPage",D.value)}));var x=function(){u.dispatch("setPage",D.value),n("change",D.value),n("update:modelValue",D.value)},S=function(){a.modelValue>1&&(D.value=1,x())},V=function(){a.modelValue>1&&(D.value--,x())},H=function(){a.modelValue<a.pages&&(D.value++,x())},B=function(){a.modelValue<a.pages&&(D.value=a.pages,x())};return function(e,t){return(0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("ul",f,[(0,o._)("li",h,[(0,o._)("button",{title:"First page",class:"paginator__button paginator__button--first",disabled:1===(0,l.SU)(D),onClick:S},[(0,o.Wm)((0,l.SU)(s),{class:"paginator__icon"})],8,_)]),(0,o._)("li",w,[(0,o._)("button",{title:"Previos page",class:"paginator__button paginator__button--prev",disabled:1===(0,l.SU)(D),onClick:V},[(0,o.Wm)((0,l.SU)(d),{class:"paginator__icon"})],8,g)]),(0,o._)("li",m,[(0,o._)("span",k,(0,r.zw)((0,l.SU)(D)),1)]),(0,o._)("li",b,[(0,o._)("button",{title:"Next page",class:"paginator__button paginator__button--next",disabled:(0,l.SU)(D)===e.pages,onClick:H},[(0,o.Wm)((0,l.SU)(c),{class:"paginator__icon"})],8,y)]),(0,o._)("li",C,[(0,o._)("button",{title:"Last page (".concat(e.pages,")"),class:"paginator__button paginator__button--last",disabled:(0,l.SU)(D)===e.pages,onClick:B},[(0,o.Wm)((0,l.SU)(p),{class:"paginator__icon"})],8,U)])])])}}}),x=n(744);const S=(0,x.Z)(D,[["__scopeId","data-v-c05e9218"]]);var V=S,H=n(5),B=n(963),W={class:"input-search"},Z={class:"input-search__dropdown"},F=(0,o.aZ)({__name:"InputSearch",props:{modelValue:{default:null},result:{default:function(){return[]}},loading:{type:Boolean,default:!1}},emits:["update:modelValue","search"],setup:function(e,t){var n=t.emit,a=e,i=(0,l.iH)(""),u=function(e){n("update:modelValue",e.target.value)},s=function(e){i.value=e.target.value,n("search",i.value)};return function(e,t){var n=(0,o.up)("router-link"),l=(0,o.Q2)("loading");return(0,o.wg)(),(0,o.iD)("div",W,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.value=e}),type:"text",class:"input-search__field",onInput:u,onKeyup:s},null,544),[[B.nr,i.value]]),(0,o.wy)(((0,o.wg)(),(0,o.iD)("ul",Z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.result,(function(e,t){return(0,o.wg)(),(0,o.iD)("li",{key:"item-".concat(t),class:"input-search__item"},[(0,o.Wm)(n,{to:{name:"People",params:{id:e.value}},class:"input-search__link"},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,r.zw)(e.title),1)]})),_:2},1032,["to"])])})),128))])),[[l,a.loading],[B.F8,a.result.length]])])}}});const q=F;var M=q,P=n(425),j=n(81);function L(e,t){return(0,o.wg)(),(0,o.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})])}var I={class:"people-view"},R=(0,o.aZ)({__name:"PeopleView",setup:function(e){var t=(0,i.oR)(),n=(0,l.iH)(!0),r=(0,l.iH)(null),s=(0,l.iH)(1),d=(0,l.iH)(1),c=(0,l.XI)([]),p=(0,l.iH)(!1),v=(0,l.iH)(""),f=(0,l.iH)([]),h=(0,l.iH)([{alias:"id",hidden:!0},{title:"Name",alias:"name"},{title:"Height",alias:"height"},{title:"Mass",alias:"mass"},{title:"Hair color",alias:"hair_color"}]),_=(0,l.iH)([]),w=(0,o.Fl)((function(){var e;return Math.ceil(+(null===(e=r.value)||void 0===e?void 0:e.count)/d.value)||1})),g=((0,o.Fl)((function(){return t.state.favorite||[]})),(0,o.Fl)((function(){var e;return(null===(e=_.value)||void 0===e?void 0:e.some((function(e){return e.checked&&!e.disabled})))||!1}))),m=function(e){n.value=!0,t.dispatch("fetchPeople",e).then((function(e){var t,o,l,i;n.value=!1,r.value=e,c.value=e.results.map((function(e){var t=e.url.split("/");return(0,a.pi)((0,a.pi)({},e),{id:+t[t.length-2]})})),_.value=c.value.map((function(e){return{data:{id:e.id,name:e.name,height:e.height,mass:e.mass,hair_color:e.hair_color},checked:!1}})),e.next?(i=new URL(e.next),l=+i.searchParams.get("page"),s.value=l--):(i=new URL(e.previous),l=+i.searchParams.get("page"),s.value=l++),d.value=(null===(o=null===(t=e.value)||void 0===t?void 0:t.results)||void 0===o?void 0:o.length)||1,D()}))},k=function(e){m(e)},b=function(e){var t=e.data,n=e.checked;_.value=n?t.map((function(e){return(0,a.pi)((0,a.pi)({},e),{checked:!0})})):t.map((function(e){return(0,a.pi)((0,a.pi)({},e),{checked:!!e.disabled&&e.checked})}))},y=function(e){_.value.reduce((function(t,n){return n.data.id===e.data.id?(0,a.ev)((0,a.ev)([],t,!0),[e],!1):t}),[])},C=function(e){void 0===e&&(e=null);var n=[];e?n=[e]:_.value.map((function(e){e.checked&&(n=(0,a.ev)((0,a.ev)([],n,!0),[e.data],!1))})),t.dispatch("addFavorite",n),D()},U=function(e){t.dispatch("removeFavorite",[e.id]),D()},D=function(){var e=t.state.favorite.map((function(e){return e.id}));_.value=_.value.reduce((function(t,n){return e.includes(n.data.id)?(0,a.ev)((0,a.ev)([],t,!0),[{data:n.data,checked:!1,disabled:!0}],!1):(0,a.ev)((0,a.ev)([],t,!0),[{data:n.data,checked:n.checked,disabled:!1}],!1)}),[])},x=function(){p.value=!0,t.dispatch("searchPeople",v.value).then((function(e){p.value=!1,f.value=e.results.map((function(e){var t=e.url.split("/");return{title:e.name,value:+t[t.length-2]}}))}))};return m(1),function(e,t){var a=(0,o.up)("router-link"),i=(0,o.Q2)("loading");return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",I,[(0,o._)("nav",null,[(0,o.Wm)(a,{to:{name:"Home"}},{default:(0,o.w5)((function(){return[(0,o.Uk)("Home")]})),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(a,{to:{name:"Favorite"}},{default:(0,o.w5)((function(){return[(0,o.Uk)("Favorite")]})),_:1})]),(0,o.Wm)(M,{modelValue:(0,l.SU)(v),"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,l.dq)(v)?v.value=e:v=e}),result:(0,l.SU)(f),loading:(0,l.SU)(p),onSearch:x},null,8,["modelValue","result","loading"]),(0,o.Wm)(u.Z,{header:h.value,body:_.value,"show-checkbox-column":!0,"show-buttons-column":!0,"show-footer":g.value,class:"people-view__table",onSelectAllRows:b,onSelectRow:y},{buttons:(0,o.w5)((function(e){var t=e.item;return[t.disabled?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(H.Z,{key:0,primary:"",onClick:function(e){return C(t.data)}},{default:(0,o.w5)((function(){return[(0,o.Wm)((0,l.SU)(P.Z),{class:"people-view__star"}),(0,o.Uk)(" Add ")]})),_:2},1032,["onClick"])),t.disabled?((0,o.wg)(),(0,o.j4)(H.Z,{key:1,danger:"",onClick:function(e){return U(t.data)}},{default:(0,o.w5)((function(){return[(0,o.Wm)((0,l.SU)(j.Z),{class:"people-view__star"}),(0,o.Uk)(" Remove ")]})),_:2},1032,["onClick"])):(0,o.kq)("",!0)]})),footer:(0,o.w5)((function(){return[(0,o.Wm)(H.Z,{primary:"",onClick:C},{default:(0,o.w5)((function(){return[(0,o.Wm)((0,l.SU)(L),{class:"people-view__star"}),(0,o.Uk)(" Add to Favorite ")]})),_:1})]})),_:1},8,["header","body","show-footer"]),(0,o.Wm)(V,{modelValue:(0,l.SU)(s),"onUpdate:modelValue":t[1]||(t[1]=function(e){return(0,l.dq)(s)?s.value=e:s=e}),pages:w.value,onChange:k},null,8,["modelValue","pages"])])),[[i,(0,l.SU)(n)]])}}});const z=R;var K=z},425:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(252);function o(e,t){return(0,a.wg)(),(0,a.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})])}},81:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(252);function o(e,t){return(0,a.wg)(),(0,a.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}}}]);
//# sourceMappingURL=97.19b3b8d3.js.map