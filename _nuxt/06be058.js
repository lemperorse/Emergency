(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{505:function(t,e,n){var content=n(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("0cd63bd9",content,!0,{sourceMap:!1})},506:function(t,e,n){var o=n(33)(!1);o.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=o},549:function(t,e,n){var content=n(610);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("4a878116",content,!0,{sourceMap:!1})},561:function(t,e,n){"use strict";n(71),n(505);var o=n(1).default.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),r=n(61),l=Object(r.a)(o);e.a=l.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}})},609:function(t,e,n){"use strict";n(549)},610:function(t,e,n){var o=n(33)(!1);o.push([t.i,".bg[data-v-4aede3ce]{background-image:url(https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);background-color:#2b32b2;background-position:50%;background-repeat:no-repeat;background-size:cover;position:relative;border-radius:5px}.tg[data-v-4aede3ce]{color:#fff;text-shadow:2px 2px 10px #000}",""]),t.exports=o},655:function(t,e,n){"use strict";n.r(e);n(609);var o=n(62),r=n(72),l=n.n(r),c=n(637),d=n(561),h=n(638),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-parallax",{staticClass:"bg",attrs:{height:"220",dark:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-left",attrs:{cols:"12"}},[n("h1",{staticClass:"font-weight-bold mb-1 tg animate__animated animate__fadeInUp"},[t._v("\r\n                 Country\r\n            ")]),t._v(" "),n("h3",{staticClass:"subheading font-weight-bold tg animate__animated animate__fadeInUp"},[t._v("\r\n                Accents\r\n            ")])])],1)],1)}),[],!1,null,"4aede3ce",null);e.default=component.exports;l()(component,{VCol:c.a,VParallax:d.a,VRow:h.a})}}]);