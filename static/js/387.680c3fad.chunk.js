"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{355:function(n,t,r){r.d(t,{Df:function(){return o},M1:function(){return p},TP:function(){return u},o1:function(){return l},tx:function(){return f}});var e=r(861),a=r(757),c=r.n(a),i=r(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"7b34a3c54007436dcc2939a589b7d72f",language:"en-US"}},o=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day",s);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t),s);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?"),s);case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews?"),s);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(t),s);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},387:function(n,t,r){r.r(t),r.d(t,{default:function(){return Z}});var e,a,c,i,s=r(861),o=r(439),u=r(757),p=r.n(u),f=r(355),l=r(791),d=r(689),h=r(168),m=r(87),x=r(867),v=x.ZP.ul(e||(e=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n"]))),g=x.ZP.li(a||(a=(0,h.Z)(["\n  align-items: center;\n  background-color: rgba(255, 69, 0, 0.5);\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n"]))),b=((0,x.ZP)(m.rU)(c||(c=(0,h.Z)(["\n  color: #000;\n  text-decoration: none;\n  margin: 1px;\n\n  &:hover,\n  &:focus {\n    color: #064e8a;\n  }\n"]))),x.ZP.img(i||(i=(0,h.Z)(["\n  display: block;\n  height: auto;\n  max-width: 100%;\n"])))),w=r(184),Z=function(){var n=(0,d.UO)().movieId,t=(0,l.useState)([]),r=(0,o.Z)(t,2),e=r[0],a=r[1];return(0,l.useEffect)((function(){var t=function(){var t=(0,s.Z)(p().mark((function t(){var r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.M1)(n);case 3:r=t.sent,a(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,w.jsxs)(w.Fragment,{children:[0!==e.length&&(0,w.jsxs)("div",{children:[(0,w.jsx)("h2",{children:"Movie cast "}),(0,w.jsx)(v,{children:e.map((function(n){return(0,w.jsxs)(g,{children:[(0,w.jsx)(b,{width:"200px",height:"300px",src:n.profile_path?"https://image.tmdb.org/t/p/w500/".concat(n.profile_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:n.original_name}),(0,w.jsx)("p",{children:n.name}),(0,w.jsxs)("p",{children:["Character: ",n.character]})]},n.id)}))})]}),0===e.length&&(0,w.jsx)("div",{children:" We haven't information about cast of this movie "})]})}}}]);
//# sourceMappingURL=387.680c3fad.chunk.js.map