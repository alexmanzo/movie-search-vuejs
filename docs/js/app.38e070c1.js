(function(e){function t(t){for(var n,a,u=t[0],i=t[1],c=t[2],l=0,p=[];l<u.length;l++)a=u[l],o[a]&&p.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-d87b3a56":"11502363"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-d87b3a56":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-d87b3a56":"9d636f7c"}[e]+".css",o=i.p+n,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=s[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){c=p[u],l=c.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.request=n,delete a[e],f.parentNode.removeChild(f),r(s)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){a[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=s);var c,l=document.getElementsByTagName("head")[0],p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=u(e),c=function(t){p.onerror=p.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");s.type=n,s.request=a,r[1](s)}o[e]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:p})},12e4);p.onerror=p.onload=c,l.appendChild(p)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var f=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"220e":function(e,t,r){"use strict";var n=r("c950"),a=r.n(n);a.a},"2df1":function(e,t,r){e.exports=r.p+"img/nophoto.76ebd871.svg"},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{style:{backgroundImage:""+e.backdrop},attrs:{id:"app"}},[r("div",{attrs:{id:"outer-container"}},[r("router-view")],1)])},o=[],s={data:function(){return{backdrop:""}},methods:{},beforeUpdate:function(){var e=this;this.$root.$on("changeBackground",function(t){e.backdrop=t})}},u=s,i=(r("034f"),r("2877")),c=Object(i["a"])(u,a,o,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,p=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("app-header")],1)},d=[],m={name:"home",components:{}},h=m,v=Object(i["a"])(h,f,d,!1,null,null,null);v.options.__file="Home.vue";var g=v.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-results"},[r("app-header"),r("search-results")],1)},_=[],y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"results"}},[r("p",{staticClass:"results-num"},[e._v(" Your search returned "+e._s(e.numOfResults)+" results")]),r("ul",{attrs:{id:"movies"}},e._l(e.movies,function(t){return r("li",{key:t.id},[r("router-link",{attrs:{to:{name:"movie",params:{id:t.id}}}},[r("div",{staticClass:"movie-card"},[null===t.poster_path?r("img",{staticClass:"results-no-poster",attrs:{src:e.noPhoto,alt:"no poster found"}}):r("img",{staticClass:"results-poster",attrs:{src:"https://image.tmdb.org/t/p/w1280/"+t.poster_path,alt:""+t.original_title}}),r("div",{staticClass:"movie-search-info"},[r("h1",[e._v(e._s(t.original_title)+" ("+e._s(t.release_date.substring(0,4))+")")]),r("p",[e._v(e._s(t.overview))])])])])],1)}))])},w=[],k=(r("96cf"),r("1da1")),x=r("bc3a"),O=r.n(x),j=r("2df1"),C=r.n(j),T={data:function(){return{movies:[],numOfResults:null,noPhoto:C.a}},methods:{getSearchResults:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r="8541c092938098d21b11f58a14dd114e",e.next=3,O.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en&query=").concat(t));case 3:n=e.sent,this.movies=n.data.results,this.numOfResults=n.data.total_results;case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},created:function(){this.getSearchResults(this.$route.params.query)},beforeUpdate:function(){this.getSearchResults(this.$route.params.query)}},E=T,P=(r("f82b"),Object(i["a"])(E,y,w,!1,null,"5e6744f7",null));P.options.__file="searchResults.vue";var S=P.exports,$={name:"results",components:{"search-results":S}},R=$,q=Object(i["a"])(R,b,_,!1,null,null,null);q.options.__file="Results.vue";var N=q.exports;n["a"].use(p["a"]);var A=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:g},{path:"/results/:query",name:"results",component:N},{path:"/movie/:id",name:"movie",component:function(){return r.e("chunk-d87b3a56").then(r.bind(null,"491e"))}},{path:"/genre/:id-:name",name:"genre",component:N}]}),B=r("ed18"),M=r.n(B),I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"app-header"},[r("router-link",{attrs:{to:{name:"home"}}},[r("img",{staticClass:"app-logo",attrs:{src:e.logo,alt:"logo"}})]),r("search-form"),r("hr")],1)},J=[],L=r("9b19"),U=r.n(L),D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"search-form",on:{submit:function(t){return t.preventDefault(),e.submitSearch(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],attrs:{type:"text",name:"userInput"},domProps:{value:e.searchTerm},on:{input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}}),r("span",{staticClass:"search-bar"}),r("label",{attrs:{for:"userInput"}},[e._v("Enter a movie title...")]),r("button",{staticClass:"search-button"})])},F=[],H={data:function(){return{searchTerm:""}},methods:{submitSearch:function(){A.push({name:"results",params:{query:this.searchTerm}}),this.searchTerm=""}}},Y=H,z=(r("220e"),Object(i["a"])(Y,D,F,!1,null,null,null));z.options.__file="searchForm.vue";var G=z.exports,K={data:function(){return{logo:U.a}},components:{"search-form":G},methods:{}},Q=K,V=(r("7037"),Object(i["a"])(Q,I,J,!1,null,"ced6f7ac",null));V.options.__file="header.vue";var W=V.exports;n["a"].component("app-header",W),M.a.config(),n["a"].config.productionTip=!1,new n["a"]({router:A,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,r){},7037:function(e,t,r){"use strict";var n=r("b46b"),a=r.n(n);a.a},"9b19":function(e,t,r){e.exports=r.p+"img/logo.439f390c.svg"},a0fe:function(e,t,r){},b46b:function(e,t,r){},c950:function(e,t,r){},f82b:function(e,t,r){"use strict";var n=r("a0fe"),a=r.n(n);a.a}});
//# sourceMappingURL=app.38e070c1.js.map