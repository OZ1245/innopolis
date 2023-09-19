"use strict";(self["webpackChunkinnopolis"]=self["webpackChunkinnopolis"]||[]).push([[822],{688:function(t,e,n){n.d(e,{Z:function(){return _}});var a=n(252),o=n(963),r=n(577),i=n(262),l={class:"data-table"},u={class:"data-table__table"},d={key:0},c={key:0,class:"data-table__th"},s={key:1,class:"data-table__th"},h={key:1},f={key:0,class:"data-table__td"},w=["onUpdate:modelValue","disabled","onChange"],k={key:1,class:"data-table__td data-table__td--buttons"},v={class:"data-table__footer"},p=(0,a.aZ)({__name:"DataTable",props:{header:{default:function(){return[]}},body:{default:function(){return[]}},showCheckboxColumn:{type:Boolean,default:!1},showButtonsColumn:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!1}},emits:["select-row","select-all-rows"],setup:function(t,e){var n=e.emit,p=t,m=(0,i.iH)(!1),_=function(){n("select-all-rows",{data:p.body,checked:m.value})},b=function(t,e){n("select-row",{data:e,checked:t.target.checked})};return function(t,e){return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("table",u,[p.header.length?((0,a.wg)(),(0,a.iD)("thead",d,[(0,a._)("tr",null,[p.showCheckboxColumn?((0,a.wg)(),(0,a.iD)("th",c,[(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=function(t){return m.value=t}),onChange:_},null,544),[[o.e8,m.value]])])):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.header,(function(t,e){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("th",{key:"th-".concat(e),class:"data-table__th"},(0,r.zw)(t.title),1)),[[o.F8,!t.hidden]])})),128)),p.showButtonsColumn?((0,a.wg)(),(0,a.iD)("th",s)):(0,a.kq)("",!0)])])):(0,a.kq)("",!0),p.body.length?((0,a.wg)(),(0,a.iD)("tbody",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.body,(function(e,n){return(0,a.wg)(),(0,a.iD)("tr",{key:"tr-".concat(n)},[p.showCheckboxColumn?((0,a.wg)(),(0,a.iD)("td",f,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":function(t){return e.checked=t},type:"checkbox",disabled:e.disabled,onChange:function(t){return b(t,e)}},null,40,w),[[o.e8,e.checked]])])):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.data,(function(t,e){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("td",{key:"td-".concat(e),class:"data-table__td"},(0,r.zw)(t),1)),[[o.F8,!p.header.find((function(t){return t.alias===e.toString()&&t.hidden}))]])})),128)),p.showButtonsColumn?((0,a.wg)(),(0,a.iD)("td",k,[(0,a.WI)(t.$slots,"buttons",{item:e,index:n})])):(0,a.kq)("",!0)])})),128))])):(0,a.kq)("",!0)]),(0,a.wy)((0,a._)("div",v,[(0,a.WI)(t.$slots,"footer")],512),[[o.F8,p.showFooter]])])}}});const m=p;var _=m},5:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(252),o=n(577),r=["type"],i=(0,a.aZ)({__name:"TheButton",props:{type:{default:"button"},primary:{type:Boolean,default:!1},second:{type:Boolean,default:!1},danger:{type:Boolean,default:!1}},emits:["click"],setup:function(t,e){var n=e.emit,i=t,l=(0,a.Fl)((function(){var t="";return i.primary&&(t+=" button--primary"),i.second&&(t+=" button--second"),i.danger&&(t+=" button--danger"),t}));return function(t,e){return(0,a.wg)(),(0,a.iD)("button",{type:i.type,class:(0,o.C_)(["button",l.value]),onClick:e[0]||(e[0]=function(t){return n("click")})},[(0,a.WI)(t.$slots,"default")],10,r)}}});const l=i;var u=l},822:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var a=n(252),o=n(262),r=n(907),i=n(201),l=n(688),u=n(5),d=n(425),c=n(81),s={class:"character-view"},h=(0,a.aZ)({__name:"CharacterView",setup:function(t){var e=(0,r.oR)(),n=(0,i.yj)(),h=(0,o.iH)(!0),f=(0,o.iH)([{alias:"id",hidden:!0},{title:"Name",alias:"name"},{title:"Height",alias:"height"},{title:"Mass",alias:"mass"},{title:"Hair color",alias:"hair_color"}]),w=(0,o.iH)([]),k=function(){var t=e.state.favorite.map((function(t){return t.id}));w.value[0]=t.includes(w.value[0].data.id)?{data:w.value[0].data,checked:!1,disabled:!0}:{data:w.value[0].data,checked:w.value[0].checked,disabled:!1}},v=function(t){e.dispatch("addFavorite",[t]),k()},p=function(t){e.dispatch("removeFavorite",[t.id]),k()};return e.dispatch("fetchPeopleById",+n.params.id).then((function(t){h.value=!1,console.log("result:",t);var e=t.url.split("/");w.value=[{data:{id:+e[e.length-2],name:t.name,height:t.height,mass:t.mass,hair_color:t.hair_color}}],k()})),function(t,e){var n=(0,a.up)("router-link"),r=(0,a.Q2)("loading");return(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("nav",null,[(0,a.Wm)(n,{to:{name:"Home"}},{default:(0,a.w5)((function(){return[(0,a.Uk)("Home")]})),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(n,{to:{name:"Peoples"}},{default:(0,a.w5)((function(){return[(0,a.Uk)("Peoples")]})),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(n,{to:{name:"Favorite"}},{default:(0,a.w5)((function(){return[(0,a.Uk)("Favorite")]})),_:1})]),(0,a.Wm)(l.Z,{header:f.value,body:w.value,"show-buttons-column":!0,class:"character-view__table"},{buttons:(0,a.w5)((function(t){var e=t.item;return[e.disabled?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(u.Z,{key:0,primary:"",onClick:function(t){return v(e.data)}},{default:(0,a.w5)((function(){return[(0,a.Wm)((0,o.SU)(d.Z),{class:"character-view__icon"}),(0,a.Uk)(" Add ")]})),_:2},1032,["onClick"])),e.disabled?((0,a.wg)(),(0,a.j4)(u.Z,{key:1,danger:"",onClick:function(t){return p(e.data)}},{default:(0,a.w5)((function(){return[(0,a.Wm)((0,o.SU)(c.Z),{class:"character-view__icon"}),(0,a.Uk)(" Remove ")]})),_:2},1032,["onClick"])):(0,a.kq)("",!0)]})),_:1},8,["header","body"])])),[[r,(0,o.SU)(h)]])}}});const f=h;var w=f},425:function(t,e,n){n.d(e,{Z:function(){return o}});var a=n(252);function o(t,e){return(0,a.wg)(),(0,a.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})])}},81:function(t,e,n){n.d(e,{Z:function(){return o}});var a=n(252);function o(t,e){return(0,a.wg)(),(0,a.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}}}]);
//# sourceMappingURL=822.f8083a1b.js.map