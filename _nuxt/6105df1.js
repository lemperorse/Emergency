(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{334:function(t,e,n){var content=n(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("0cd63bd9",content,!0,{sourceMap:!1})},335:function(t,e,n){var o=n(41)(!1);o.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=o},395:function(t,e,n){var content=n(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("1d42a58e",content,!0,{sourceMap:!1})},403:function(t,e,n){"use strict";n(197),n(334);var o=n(0).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),r=n(132),l=Object(r.a)(o);e.a=l.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}})},449:function(t,e,n){"use strict";n(395)},450:function(t,e,n){var o=n(41)(!1);o.push([t.i,".bg[data-v-2ba33988]{background-image:url(https://images.pexels.com/photos/239548/pexels-photo-239548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);background-color:#2b32b2;background-position:50%;background-repeat:no-repeat;background-size:cover;position:relative;border-radius:5px}.tg[data-v-2ba33988]{color:#fff;text-shadow:2px 2px 10px #000}",""]),t.exports=o},481:function(t,e,n){"use strict";n.r(e);n(449);var o=n(64),r=n(88),l=n.n(r),c=n(465),h=n(403),d=n(466),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-parallax",{staticClass:"bg",attrs:{height:"220",dark:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-left",attrs:{cols:"12"}},[n("h1",{staticClass:"font-weight-bold mb-1 tg animate__animated animate__fadeInUp"},[t._v("\n                Final Test\n            ")])])],1)],1)}),[],!1,null,"2ba33988",null);e.default=component.exports;l()(component,{VCol:c.a,VParallax:h.a,VRow:d.a})}}]);