(function(e){function t(t){for(var n,i,c=t[0],a=t[1],u=t[2],d=0,h=[];d<c.length;d++)i=c[d],s[i]&&h.push(s[i][0]),s[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);l&&l(t);while(h.length)h.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var a=r[c];0!==s[a]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},s={index:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=a;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034d":function(e,t,r){},"06e5":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"app"},[r("cursor-fx"),r("div",{staticClass:"grid-container"},[r("div",{staticClass:"grid-cell left"},[r("section",[r("h1",{domProps:{textContent:e._s(e.$library.VUE_APP_TITLE)}}),r("p",{domProps:{textContent:e._s(e.$library.VUE_APP_DESCRIPTION)}})])]),r("div",{staticClass:"grid-cell right"},[r("section",[r("readme")],1)])])],1)},o=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",[r("h1",[e._v("Cursor-FX")]),r("p",[r("a",{attrs:{href:"https://luxdamore.github.io/vue-cursor-fx"}},[e._v("DEMO")])]),r("h2",[e._v("Development Setup")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# install deps")]),e._v("\nnpm install\n\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# build dist files")]),e._v("\nnpm run build\n\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# serve examples at localhost:8080")]),e._v("\nnpm run dev\n\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# lint & run all tests")]),e._v("\nnpm "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("test")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("# serve docs at localhost:8080")]),e._v("\nnpm run docs\n")])]),r("h2",[e._v("Issues")]),r("p",[e._v("Please make sure to read the "),r("a",{attrs:{href:"https://github.com/LuXDAmore/vue-cursor-fx/blob/master/.github/ISSUE_TEMPLATE/bug_report.md"}},[e._v("Issue Reporting Checklist")]),e._v(" before opening an issue. Issues not conforming to the guidelines may be closed immediately.")]),r("h2",[e._v("Contribution")]),r("p",[e._v("Please make sure to read the "),r("a",{attrs:{href:"https://github.com/LuXDAmore/vue-cursor-fx/blob/master/.github/ISSUE_TEMPLATE/feature_request.md"}},[e._v("Contributing Guide")]),e._v(" before making a pull request.")]),r("h2",[e._v("Changelog")]),r("p",[e._v("Details changes for each release are documented in the "),r("a",{attrs:{href:"https://github.com/LuXDAmore/vue-cursor-fx/blob/master/CHANGELOG.md"}},[e._v("release notes")]),e._v(".")]),r("h2",[e._v("License")]),r("p",[r("a",{attrs:{href:"http://opensource.org/licenses/MIT"}},[e._v("MIT")])]),r("p",[e._v("Copyright (c) 2013-present Luca Iaconelli")]),r("h3",[e._v("Inspired by")]),r("p",[r("a",{attrs:{href:"https://tympanus.net/Tutorials/CustomCursors/index3.html"}},[e._v("CustomCursors by Tympanus")])])])}],a=r("2877"),u={},l=Object(a["a"])(u,i,c,!1,null,null,null),d=l.exports,h={name:"v-app",components:{readme:d}},f=h,p=(r("2ebd"),r("65a8"),r("85c6"),Object(a["a"])(f,s,o,!1,null,"aac16e2c",null)),v=p.exports,m=v,y={install:function(e,t){var r=t;e.library=r,e.prototype.$library=r}},b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"cursor",staticClass:"cursor",class:{touch:e.touch,loaded:e.loaded},style:e.cssVars,attrs:{id:"cursor-fx"}},[e.hideCircle?e._e():r("div",{staticClass:"cursor__inner cursor__inner--circle"}),e.$slots.default||e.$scopedSlots.default?r("div",{staticClass:"cursor__inner cursor__inner--custom"},[e._t("default")],2):e._e(),e.hideDot?e._e():r("div",{staticClass:"cursor__inner cursor__inner--dot"})])},_=[],g=r("5118"),P=r("597b"),O=r.n(P);function E(e){return M(e)||w(e)||x()}function x(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function w(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function M(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var S="cursor-fx",A={name:S,inheritAttrs:!1,props:{color:{type:String,default:"#333"},delay:{type:[Number,String],default:100},hideCircle:{type:Boolean,default:!1},hideDot:{type:Boolean,default:!1}},data:function(){return{touch:!1,loaded:!1}},computed:{cssVars:function(){return{"--color":this.color}}},created:function(){this.$timeout=null,this.$cursor=null},mounted:function(){this.touch=this.isTouchDevice(),!this.touch&&this.$nextTick(this.start)},beforeDestroy:function(){this.destroy()},methods:{isTouchDevice:function(){return"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0},destroy:function(){var e=this;this.$cursor&&(E(document.querySelectorAll("[data-cursor-hover]")).forEach(function(t){t.removeEventListener("mouseenter",function(){return e.$cursor.enter()},!1),t.removeEventListener("mouseleave",function(){return e.$cursor.leave()},!1),t.removeEventListener("click",function(){return e.$cursor.click()},!1)}),E(document.querySelectorAll("[data-cursor-hidden]")).forEach(function(t){t.removeEventListener("mouseenter",function(){return e.$cursor.enterHidden()},!1),t.removeEventListener("mouseleave",function(){return e.$cursor.leaveHidden()},!1)})),this.$timeout&&Object(g["clearTimeout"])(this.$timeout),document.documentElement.classList.remove("is-cursor-fx-active")},init:function(){var e=this;this.$cursor=new O.a(this.$refs.cursor),E(document.querySelectorAll("[data-cursor-hover]")).forEach(function(t){t.addEventListener("mouseenter",function(){return e.$cursor.enter()},!1),t.addEventListener("mouseleave",function(){return e.$cursor.leave()},!1),t.addEventListener("click",function(){return e.$cursor.click()},!1)}),E(document.querySelectorAll("[data-cursor-hidden]")).forEach(function(t){t.addEventListener("mouseenter",function(){return e.$cursor.enterHidden()},!1),t.addEventListener("mouseleave",function(){return e.$cursor.leaveHidden()},!1)}),this.$emit("ready",this.$cursor),document.documentElement.classList.add("is-cursor-fx-active"),this.loaded=!0},start:function(){this.$timeout=Object(g["setTimeout"])(this.init,parseInt(this.delay))}}},j=A,C=(r("ab2f"),r("e4c9"),Object(a["a"])(j,b,_,!1,null,"483fcd1c",null)),D=C.exports,L=D;n["a"].component(L.name,L),n["a"].use(y,Object({NODE_ENV:"production",VUE_APP_AUTHOR:"Luca Iaconelli",VUE_APP_BASE_URL:"https://luxdamore.github.io/vue-cursor-fx",VUE_APP_COLOR:"#333",VUE_APP_DESCRIPTION:"An animated custom cursor effects for interactive elements like navigations - w/ VueJS - SSR Compatible",VUE_APP_FACEBOOK:"LuXDamore",VUE_APP_LIBRARY:"vue-cursor-fx",VUE_APP_TITLE:"Vue Cursor Fx",VUE_APP_TWITTER:"@LuXDAmore",BASE_URL:"/"}));var T=!1;n["a"].config.silent=!T,n["a"].config.productionTip=T,new n["a"]({el:"#app",render:function(e){return e(m)}})},"597b":function(e,t){function r(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}var a=.5,u=1,l=function(e,t,r){return(1-r)*e+r*t},d=function(e){var t=0,r=0;return e||(e=window.event),e.pageX||e.pageY?(t=e.pageX,r=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,r=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:t,y:r}},h=function(){function e(t){var r=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,e),this.DOM={el:t},this.lerps=n({},{dot:1,circle:.15,scale:.15,opacity:.1},{},s),this.DOM.dot=this.DOM.el.querySelector(".cursor__inner--dot"),this.DOM.circle=this.DOM.el.querySelector(".cursor__inner--circle"),this.bounds={dot:this.DOM.dot.getBoundingClientRect(),circle:this.DOM.circle.getBoundingClientRect()},!this.bounds.dot.width){var i=window.getComputedStyle(this.DOM.dot);this.bounds.dot.width=parseInt(i.getPropertyValue("width").replace("px","")),this.bounds.dot.height=parseInt(i.getPropertyValue("height").replace("px",""))}if(!this.bounds.circle.width){var c=window.getComputedStyle(this.DOM.circle);this.bounds.circle.width=parseInt(c.getPropertyValue("width").replace("px","")),this.bounds.circle.height=parseInt(c.getPropertyValue("height").replace("px",""))}this.scale=a,this.lastScale=a,this.opacity=1,this.lastOpacity=1,this.mousePos={x:0,y:0},this.lastMousePos={dot:{x:0,y:0},circle:{x:0,y:0}},this.initEvents(),requestAnimationFrame(function(){return r.render()})}return c(e,[{key:"initEvents",value:function(){var e=this;window.addEventListener("mousemove",function(t){return e.mousePos=d(t)},!1)}},{key:"render",value:function(){var e=this;requestAnimationFrame(function(){return e.render()});var t=this.lerps,r=t.dot,n=t.circle,s=t.scale,o=t.opacity;this.lastMousePos.dot.x=l(this.lastMousePos.dot.x,this.mousePos.x-this.bounds.dot.width/2,r),this.lastMousePos.dot.y=l(this.lastMousePos.dot.y,this.mousePos.y-this.bounds.dot.height/2,r),this.lastMousePos.circle.x=l(this.lastMousePos.circle.x,this.mousePos.x-this.bounds.circle.width/2,n),this.lastMousePos.circle.y=l(this.lastMousePos.circle.y,this.mousePos.y-this.bounds.circle.height/2,n),this.lastScale=l(this.lastScale,this.scale,s),this.lastOpacity=l(this.lastOpacity,this.opacity,o),this.DOM.dot.style.transform="translateX(".concat(this.lastMousePos.dot.x,"px) translateY(").concat(this.lastMousePos.dot.y,"px)"),this.DOM.circle.style.transform="translateX(".concat(this.lastMousePos.circle.x,"px) translateY(").concat(this.lastMousePos.circle.y,"px) scale(").concat(this.lastScale,")")}},{key:"enter",value:function(){this.scale=u}},{key:"leave",value:function(){this.scale=a}},{key:"click",value:function(){this.lastScale=a,this.lastOpacity=0}},{key:"enterHidden",value:function(){this.DOM.el.style.visibility="hidden"}},{key:"leaveHidden",value:function(){this.DOM.el.style.visibility="visible"}}]),e}();e.exports=h},"65a8":function(e,t,r){"use strict";var n=r("850c"),s=r.n(n);s.a},"850c":function(e,t,r){},"85c6":function(e,t,r){"use strict";var n=r("034d"),s=r.n(n);s.a},"86bf":function(e,t,r){},ab2f:function(e,t,r){"use strict";var n=r("86bf"),s=r.n(n);s.a},e4c9:function(e,t,r){"use strict";var n=r("06e5"),s=r.n(n);s.a}});