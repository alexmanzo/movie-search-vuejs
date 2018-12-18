(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d87b3a56"],{"02f4":function(t,e,a){var i=a("4588"),n=a("be13");t.exports=function(t){return function(e,a){var o,r,s=String(n(e)),c=i(a),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(r=s.charCodeAt(c+1))<56320||r>57343?t?s.charAt(c):o:t?s.slice(c,c+2):r-56320+(o-55296<<10)+65536)}}},"0efe":function(t,e,a){"use strict";var i=a("7d30"),n=a.n(i);n.a},"14ff":function(t,e,a){"use strict";var i=a("7ddd"),n=a.n(i);n.a},"22b8":function(t,e,a){"use strict";var i=a("6737"),n=a.n(i);n.a},"491e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"moviePage"}},[a("app-header"),a("movie-page")],1)},n=[],o=(a("cadf"),a("551c"),a("097d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.movieData.title?a("div",{staticClass:"movie-container"},[a("movie-details",{attrs:{movieData:t.movieData}})],1):a("div",[a("h1",{staticClass:"loading"},[t._v("Loading...")])])])}),r=[];a("ac6a"),a("5df3");function s(t){if(Array.isArray(t))return t}function c(t,e){var a=[],i=!0,n=!1,o=void 0;try{for(var r,s=t[Symbol.iterator]();!(i=(r=s.next()).done);i=!0)if(a.push(r.value),e&&a.length===e)break}catch(c){n=!0,o=c}finally{try{i||null==s["return"]||s["return"]()}finally{if(n)throw o}}return a}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function v(t,e){return s(t)||c(t,e)||u()}a("96cf");var l=a("1da1"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movie"},[null===t.movieData.poster_path?a("img",{staticClass:"movie-page-no-poster",attrs:{src:t.noPhoto,alt:"no poster found"}}):a("img",{staticClass:"movie-page-poster",attrs:{src:"https://image.tmdb.org/t/p/w1280/"+t.movieData.poster_path,alt:""+t.movieData.original_title}}),a("div",{staticClass:"movie-data"},[a("div",{staticClass:"movie-headline"},[a("h1",[t._v(t._s(t.movieData.original_title)+" ("+t._s(t.movieData.release_date.substring(0,4))+")")]),a("h4",[t._v(t._s(t.movieData.tagline))])]),a("div",{staticClass:"movie-details"},[a("p",[a("strong",[t._v("Budget")]),a("br"),0===t.movieData.budget?a("span",[t._v("\n                        N/A\n                    ")]):a("span",[t._v("\n                        $"+t._s(t.movieData.budget.toLocaleString())+"\n                    ")])]),a("p",[a("strong",[t._v("Revenue")]),a("br"),0===t.movieData.revenue?a("span",[t._v("\n                        N/A\n                    ")]):a("span",[t._v("\n                        $"+t._s(t.movieData.revenue.toLocaleString())+"\n                    ")])]),a("p",[a("strong",[t._v("Runtime")]),a("br"),null===t.movieData.runtime?a("span",[t._v("\n                        N/A\n                    ")]):a("span",[t._v("\n                        "+t._s(t.movieData.runtime)+" minutes\n                    ")])]),a("div",{staticClass:"genres"},[a("p",[a("strong",[t._v("Genres")]),a("br"),a("ul",t._l(t.movieData.genres,function(e){return a("li",{key:e.name},[a("router-link",{attrs:{to:{name:"genre",params:{id:e.id,name:e.id}}}},[t._v(t._s(e.name))])],1)}))])])]),a("div",{staticClass:"movie-plot"},[a("p",[a("strong",[t._v("Plot")]),a("br"),t._v(t._s(t.movieData.overview))])])])])},m=[],g={props:{movieData:{type:Object,required:!0}},data:function(){return{}},methods:{},created:function(){}},p=g,f=(a("0efe"),a("2877")),h=Object(f["a"])(p,d,m,!1,null,"28703c46",null);h.options.__file="movieDetails.vue";var _=h.exports,D=a("bc3a"),b=a.n(D),S="8541c092938098d21b11f58a14dd114e",L={components:{"movie-details":_},data:function(){return{movieData:{},castData:{},videoData:{},similarMoviesData:{}}},methods:{getMovieDetails:function(){return b.a.get("https://api.themoviedb.org/3/movie/".concat(this.$route.params.id,"?api_key=").concat(S,"&language=en-US"))},getMovieCast:function(){return b.a.get("https://api.themoviedb.org/3/movie/".concat(this.$route.params.id,"/credits?api_key=").concat(S,"&language=en-US"))},getVideos:function(){return b.a.get("https://api.themoviedb.org/3/movie/".concat(this.$route.params.id,"/videos?api_key=").concat(S,"&language=en-US"))},getSimilarMovies:function(){return b.a.get("https://api.themoviedb.org/3/movie/".concat(this.$route.params.id,"/similar?api_key=").concat(S,"&language=en-US"))},getMovieData:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,a,i,n,o,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([this.getMovieDetails(),this.getMovieCast(),this.getVideos(),this.getSimilarMovies()]);case 2:e=t.sent,a=v(e,4),i=a[0],n=a[1],o=a[2],r=a[3],this.movieData=i.data,this.castData=n.data,this.videoData=o.data,this.similarMoviesData=r.data,this.$root.$emit("changeBackground","url('https://image.tmdb.org/t/p/original/".concat(i.data.backdrop_path,"')"));case 13:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getMovieData()},beforeUpdate:function(){this.getMovieData()},beforeDestroy:function(){this.$root.$emit("changeBackground","")}},y=L,M=(a("22b8"),Object(f["a"])(y,o,r,!1,null,null,null));M.options.__file="moviePage.vue";var C=M.exports,k={name:"moviePage",components:{"movie-page":C}},T=k,w=(a("14ff"),Object(f["a"])(T,i,n,!1,null,null,null));w.options.__file="MoviePage.vue";e["default"]=w.exports},"5df3":function(t,e,a){"use strict";var i=a("02f4")(!0);a("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,a=this._i;return a>=e.length?{value:void 0,done:!0}:(t=i(e,a),this._i+=t.length,{value:t,done:!1})})},6737:function(t,e,a){},"7d30":function(t,e,a){},"7ddd":function(t,e,a){},ac6a:function(t,e,a){for(var i=a("cadf"),n=a("0d58"),o=a("2aba"),r=a("7726"),s=a("32e9"),c=a("84f2"),u=a("2b4c"),v=u("iterator"),l=u("toStringTag"),d=c.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=n(m),p=0;p<g.length;p++){var f,h=g[p],_=m[h],D=r[h],b=D&&D.prototype;if(b&&(b[v]||s(b,v,d),b[l]||s(b,l,h),c[h]=d,_))for(f in i)b[f]||o(b,f,i[f],!0)}}}]);
//# sourceMappingURL=chunk-d87b3a56.11502363.js.map