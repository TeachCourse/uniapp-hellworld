(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/add/add"],{4515:function(t,n,e){"use strict";e.r(n);var o=e("82a5"),a=e("acbc");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("e263");var c,i=e("f0c5"),r=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=r.exports},"82a5":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var o={tuiIcon:function(){return e.e("components/thorui/tui-icon/tui-icon").then(e.bind(null,"cca7"))},tTable:function(){return e.e("components/t-table/t-table").then(e.bind(null,"53ba"))},tuiCalendar:function(){return Promise.all([e.e("common/vendor"),e.e("components/thorui/tui-calendar/tui-calendar")]).then(e.bind(null,"346e"))}},a=function(){var t=this,n=t.$createElement;t._self._c},u=[]},"8ecf":function(t,n,e){},"9ac2":function(t,n,e){"use strict";(function(t){e("2886");o(e("66fd"));var n=o(e("4515"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},acbc:function(t,n,e){"use strict";e.r(n);var o=e("e18a"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=a.a},e18a:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){e.e("components/t-table/t-table").then(function(){return resolve(e("53ba"))}.bind(null,e)).catch(e.oe)},a=function(){e.e("components/t-table/t-th").then(function(){return resolve(e("314f"))}.bind(null,e)).catch(e.oe)},u=function(){e.e("components/t-table/t-tr").then(function(){return resolve(e("8833"))}.bind(null,e)).catch(e.oe)},c=function(){e.e("components/t-table/t-td").then(function(){return resolve(e("7d8a"))}.bind(null,e)).catch(e.oe)},i={components:{tTable:o,tTh:a,tTr:u,tTd:c},data:function(){return{tableList:[{id:0,name:"张三",age:"19",hobby:"游泳",time:"2021-4-12"},{id:1,name:"李四",age:"21",hobby:"绘画",time:"2021-4-13"},{id:2,name:"王二",age:"29",hobby:"滑板",time:"2021-4-14"},{id:3,name:"码字",age:"20",hobby:"蹦极",time:"2021-4-15"}],proDropIndex:-1,proDropIndexEnd:-1,ban_zu_text:"出勤时间",result_sta:"",result_end:"",type:0}},onLoad:function(){},methods:{selectDate:function(t){switch(t){case 0:this.type=0,this.proDropIndex=0;break;case 1:this.type=1,this.proDropIndexEnd=0;break;default:break}this.$refs.calendar.show()},change:function(t){console.log(t),0==this.type?(this.result_sta=t.result,this.proDropIndex=1):(this.result_end=t.result,this.proDropIndexEnd=1)},edit:function(n){t.showToast({title:n.name,icon:"none"})},onInput:function(t){console.log(t.detail),this.number=t.detail}}};n.default=i}).call(this,e("543d")["default"])},e263:function(t,n,e){"use strict";var o=e("8ecf"),a=e.n(o);a.a}},[["9ac2","common/runtime","common/vendor"]]]);