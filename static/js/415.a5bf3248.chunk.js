"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{355:function(n,t,r){r.d(t,{Df:function(){return o},M1:function(){return p},TP:function(){return s},o1:function(){return l},tx:function(){return f}});var e=r(861),a=r(757),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i={params:{api_key:"7b34a3c54007436dcc2939a589b7d72f",language:"en-US"}},o=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day",i);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t),i);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?"),i);case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?"),i);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?query=".concat(t),i);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},47:function(n,t,r){r.d(t,{Z:function(){return v}});var e,a,c,u,i=r(168),o=r(87),s=r(867),p=s.ZP.ul(e||(e=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n"]))),f=s.ZP.li(a||(a=(0,i.Z)(["\n  align-items: center;\n  background-color: rgba(255, 69, 0, 0.5);\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"]))),l=(0,s.ZP)(o.rU)(c||(c=(0,i.Z)(["\n  color: #000;\n  text-decoration: none;\n  margin: 1px;\n\n  &:hover,\n  &:focus {\n    color: #064e8a;\n  }\n"]))),d=s.ZP.img(u||(u=(0,i.Z)(["\n  display: block;\n  height: auto;\n  max-width: 100%;\n"]))),h=r(184),v=function(n){var t=n.films;return(0,h.jsx)(p,{children:t.map((function(n){var t;return(0,h.jsx)(f,{children:(0,h.jsxs)(l,{to:"/movies/".concat(n.id),cover:n.poster_path,children:[(0,h.jsx)(d,{src:n.poster_path?"https://image.tmdb.org/t/p/w500/".concat(n.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"poster"}),(0,h.jsx)("p",{children:null!==(t=n.title)&&void 0!==t?t:n.movieName})]})},n.id)}))})}},415:function(n,t,r){r.r(t);var e=r(439),a=r(791),c=r(355),u=r(512),i=r(47),o=r(184);t.default=function(){var n=(0,a.useState)([]),t=(0,e.Z)(n,2),r=t[0],s=t[1],p=(0,a.useState)(!1),f=(0,e.Z)(p,2),l=f[0],d=f[1];return(0,a.useEffect)((function(){d(!0),(0,c.Df)().then((function(n){s(n)})).catch((function(n){console.log(n)})).finally((function(){d(!1)}))}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Trending Movies"}),(0,o.jsx)(i.Z,{films:r}),l&&(0,o.jsx)(u.Z,{})]})}}}]);
//# sourceMappingURL=415.a5bf3248.chunk.js.map