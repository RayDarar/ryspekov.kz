(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e4a612c"],{"02e4":function(t,e,a){},"2b4c":function(t,e,a){"use strict";var i=a("7971"),r=a.n(i);r.a},"54e7":function(t,e,a){"use strict";var i=a("a69a"),r=a.n(i);r.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),r=a("5899"),n="["+r+"]",s=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),c=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,a){var i=a("861d"),r=a("d2bb");t.exports=function(t,e,a){var n,s;return r&&"function"==typeof(n=e.constructor)&&n!==a&&i(s=n.prototype)&&s!==a.prototype&&r(t,s),t}},7971:function(t,e,a){},"7fb1":function(t,e,a){"use strict";var i=a("f9d3"),r=a.n(i);r.a},"84ba":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"about"}},[t._t("overlay"),t._t("wrapper"),t._t("explore"),t.$root.isProd?a("header",{staticClass:"heading"},[a("h2",{staticClass:"heading__title"},[t._v(t._s(t.content["about_main_title"]))]),a("p",{staticClass:"heading__sub-title"},[t._v(t._s(t.content["about_main_subtitle"]))])]):t._e(),t.$root.isProd?a("div",{staticClass:"info-block soft-skills"},[a("h3",{staticClass:"info-block__title"},[t._v(t._s(t.content["about_soft_title"]))]),a("soft-swiper",{staticClass:"info-block__data"})],1):t._e(),a("div",{staticClass:"info-block hard-skills"},[a("h3",{staticClass:"info-block__title"},[t._v(t._s(t.content["about_hard_title"]))]),a("div",{staticClass:"info-block__data"},[a("hard-container",{attrs:{title:t.content["about_hard_blocks"][0]}},[a("hard-item",[t._v("HTML5")]),a("hard-item",[t._v("CSS3")]),a("hard-item",[t._v("JS")]),a("hard-item",[t._v("AJAX")]),a("hard-item",[t._v("Vue")]),a("hard-item",[t._v("Vuex")]),a("hard-item",[t._v("Sass")]),a("hard-item",[t._v("Node.js")]),a("hard-item",[t._v("Express")]),a("hard-item",[t._v("SQL")]),a("hard-item",[t._v("MongoDB")]),a("hard-item",[t._v("jQuery")])],1),a("hard-container",{attrs:{title:t.content["about_hard_blocks"][1]}},[a("hard-item",[t._v("OOP")]),a("hard-item",[t._v("Patterns")]),a("hard-item",[t._v("SOLID")]),a("hard-item",[t._v("MVC")]),a("hard-item",[t._v("MVVM")]),a("hard-item",[t._v("BEM")])],1),a("hard-container",{attrs:{title:t.content["about_hard_blocks"][2]}},[a("hard-item",[t._v("PHP7")]),a("hard-item",[t._v("Svelte")]),a("hard-item",[t._v("C/C++")]),a("hard-item",[t._v("SDL")]),a("hard-item",[t._v("Python3")]),a("hard-item",[t._v("C#")]),a("hard-item",[t._v("ASP.Net")]),a("hard-item",[t._v("ADO.Net")]),a("hard-item",[t._v("WPF")]),a("hard-item",[t._v("Java")]),a("hard-item",[t._v("Spring")]),a("hard-item",[t._v("Postgre")]),a("hard-item",[t._v("MSSQL")]),a("hard-item",[t._v("MySQL")])],1),a("hard-container",{attrs:{title:t.content["about_hard_blocks"][3]}},[a("hard-item",[t._v("Git")]),a("hard-item",[t._v("VS code")]),a("hard-item",[t._v("VS")]),a("hard-item",[t._v("Adobe XD")]),a("hard-item",[t._v("Photoshop")]),a("hard-item",[t._v("Windows")]),a("hard-item",[t._v("Linux")])],1)],1)])],2)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swiper-container"},t._l(t.items,(function(t){return a("soft-item",{key:t.index,staticClass:"swiper-slide",attrs:{id:t.index,active:t.isActive,"data-id":t.index}})})),1)},s=[];a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0"),a("7a82");function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"soft-item",class:{"soft-item_active":t.active}},[a("div",{staticClass:"text-wrapper"},[a("h3",{staticClass:"title"},[t._v(t._s(t.content["about_soft_blocks"][t.id].title))]),a("p",{staticClass:"text"},[t._v(" "+t._s(t.content["about_soft_blocks"][t.id].text)+" ")])]),a("img",{attrs:{src:t.$root.getImgUrl("soft-skills-image-"+(t.id+1)+".jpg"),alt:"soft-image-"+t.id}})])},d=[],l=(a("a9e3"),{name:"SoftItem",props:{id:Number,active:Boolean},computed:{content:function(){return this.$store.state.language}}}),u=l,_=(a("54e7"),a("2877")),f=Object(_["a"])(u,c,d,!1,null,"24b6e4d6",null),v=f.exports,h=o({name:"SoftSwiper",mounted:function(){},components:{SoftItem:v},data:function(){return{items:[{index:0,isActive:!1},{index:1,isActive:!1},{index:2,isActive:!1},{index:3,isActive:!1}],observer:null}},methods:{setActive:function(t){this.items[+t[0].target.dataset.id].isActive=t[0].isIntersecting}},computed:{width:function(){return window.innerWidth}},created:function(){this.observer=new IntersectionObserver(this.setActive,{root:null,threshold:1})}},"mounted",(function(){var t=document.querySelectorAll(".swiper-slide[data-id]"),e=!0,a=!1,i=void 0;try{for(var r,n=t[Symbol.iterator]();!(e=(r=n.next()).done);e=!0){var s=r.value;this.observer.observe(s)}}catch(o){a=!0,i=o}finally{try{e||null==n["return"]||n["return"]()}finally{if(a)throw i}}})),m=h,b=(a("2b4c"),Object(_["a"])(m,n,s,!1,null,"3fb4d38d",null)),p=b.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hard-container"},[a("h3",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"container"},[t._t("default")],2)])},C=[],S={name:"HardContainer",props:{title:String}},I=S,A=(a("f605"),Object(_["a"])(I,g,C,!1,null,"f0654cae",null)),x=A.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hard-item"},[t._t("default")],2)},N=[],k={name:"HardItem"},E=k,y=(a("7fb1"),Object(_["a"])(E,w,N,!1,null,"4fcd75c1",null)),O=y.exports,P={name:"About",computed:{content:function(){return this.$store.state.language}},created:function(){document.title=this.content["TITLE_ABOUT"]},data:function(){return{blocks:[0,1,2,3]}},components:{SoftSwiper:p,HardContainer:x,HardItem:O}},M=P,L=(a("ae10"),Object(_["a"])(M,i,r,!1,null,"2c20bb5a",null));e["default"]=L.exports},9249:function(t,e,a){},a69a:function(t,e,a){},a9e3:function(t,e,a){"use strict";var i=a("83ab"),r=a("da84"),n=a("94ca"),s=a("6eeb"),o=a("5135"),c=a("c6b6"),d=a("7156"),l=a("c04e"),u=a("d039"),_=a("7c73"),f=a("241c").f,v=a("06cf").f,h=a("9bf2").f,m=a("58a8").trim,b="Number",p=r[b],g=p.prototype,C=c(_(g))==b,S=function(t){var e,a,i,r,n,s,o,c,d=l(t,!1);if("string"==typeof d&&d.length>2)if(d=m(d),e=d.charCodeAt(0),43===e||45===e){if(a=d.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+d}for(n=d.slice(2),s=n.length,o=0;o<s;o++)if(c=n.charCodeAt(o),c<48||c>r)return NaN;return parseInt(n,i)}return+d};if(n(b,!p(" 0o1")||!p("0b1")||p("+0x1"))){for(var I,A=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof A&&(C?u((function(){g.valueOf.call(a)})):c(a)!=b)?d(new p(S(e)),a,A):S(e)},x=i?f(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)o(p,I=x[w])&&!o(A,I)&&h(A,I,v(p,I));A.prototype=g,g.constructor=A,s(r,b,A)}},ae10:function(t,e,a){"use strict";var i=a("9249"),r=a.n(i);r.a},f605:function(t,e,a){"use strict";var i=a("02e4"),r=a.n(i);r.a},f9d3:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4e4a612c.495ae128.js.map