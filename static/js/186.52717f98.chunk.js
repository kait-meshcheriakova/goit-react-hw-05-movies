"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{355:function(t,e,r){r.d(e,{Df:function(){return i},M1:function(){return f},TP:function(){return o},o1:function(){return v},tx:function(){return p}});var n=r(861),a=r(757),u=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"7b34a3c54007436dcc2939a589b7d72f",language:"en-US"}},i=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day",s);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e),s);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?"),s);case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?"),s);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?query=".concat(e),s);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},186:function(t,e,r){r.r(e);var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(355),i=r(791),o=r(689),f=r(184);e.default=function(){var t=(0,o.UO)().movieId,e=(0,i.useState)([]),r=(0,a.Z)(e,2),u=r[0],p=r[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.tx)(t);case 3:r=e.sent,p(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,f.jsxs)(f.Fragment,{children:[0!==u.length&&(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:" Movie Reviews"}),u.map((function(t){return(0,f.jsx)("ul",{children:(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:["Author:",t.author]}),(0,f.jsx)("p",{children:t.content})]})},t.id)}))]}),0===u.length&&(0,f.jsx)("div",{children:"We don't have any reviews for this movie."})]})}}}]);
//# sourceMappingURL=186.52717f98.chunk.js.map