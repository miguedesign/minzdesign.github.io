!function t(e,i,n){function o(r,a){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!a&&l)return l(r,!0);if(s)return s(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[r]={exports:{}};e[r][0].call(u.exports,function(t){var i=e[r][1][t];return o(i?i:t)},u,u.exports,t,e,i,n)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,i){var n=function(){function e(){var t=$("[data-bg]");t.css("background-color",function(){return $(this).data("bg")})}$("a[rel=simplezoom]").simplezoom(),e();var i=$("[data-color]");color=i.attr("data-color"),$("[data-color]").css({color:"#"+color}),window.matchMedia("(min-width:1200px)").matches&&$(".Projects__link").hover(function(){$(".Projects__link").each(function(){$(".Projects__link").addClass("Projects__link-hide-other"),$(this).removeClass("Projects__link-show")}),$(this).addClass("Projects__link-show")},function(){$(".Projects__link").each(function(){$(".Projects__link").removeClass("Projects__link-hide-other")})});t("../vendor/unveil");$(".Project img").unveil(300)};e.exports=n},{"../vendor/unveil":12}],2:[function(t,e,i){var n=function(){var t=$(".scroll");t.on("click",function(t){t.preventDefault(),$("body").animate({scrollTop:$(this.hash).position().top+0},800,"easeInOutCirc"),$(".scroll.is-current").removeClass("is-current"),$(this).addClass("is-current")})};e.exports=n},{}],3:[function(t,e,i){var n=function(){var e=t("../vendor/scrollreveal.min"),i={delay:200,distance:"90px",easing:"cubic-bezier( 0.03, 0.3, 0.65, 0.94)",scale:1,viewFactor:.05};window.matchMedia("(min-width:1200px)").matches&&(window.sr=e({duration:700}),sr.reveal(".animatedFadeInUp",i))};e.exports=n},{"../vendor/scrollreveal.min":9}],4:[function(t,e,i){var n=function(){var t=$(".section_nav"),e=$(".StickNav");e.outerHeight();$(window).on("scroll",function(){var i=$(this).scrollTop();t.each(function(){var t=$(this).offset().top-150;t+$(this).outerHeight();i>=t&&(e.find("a").removeClass("is-current"),e.find('a[href="#'+$(this).attr("id")+'"]').addClass("is-current"))})}),e.find("a").on("click",function(){var t=$(this),e=t.attr("href");return $("html, body").animate({scrollTop:$(e).offset().top-0},500,"easeInOutCirc"),!1})};e.exports=n},{}],5:[function(t,e,i){var n=function(){$("#typed").typed({stringsElement:$("#typed-strings"),typeSpeed:80,backDelay:500,loop:!0,loopCount:!1})};e.exports=n},{}],6:[function(t,e,i){var n=function(){function t(){$(".Hero__name").animate({opacity:"0"},700,"easeInOutCirc"),$(".Hero__lead").animate({left:"-100%"},700,"easeInOutCirc"),$(".Hero__image").animate({width:"10%"},700,"easeInOutCirc"),$(".Hero__arrow").animate({bottom:"-500px"},700,"easeInOutCirc"),$(".Hero__cta").animate({right:"-1500px"},700,"easeInOutCirc"),$(".Hero").animate({opacity:"0"},700,"easeInOutCirc")}function e(){$(".topbar").addClass("is-loading"),setTimeout(function(){$("body").animate({"margin-top":"100%"},300,"easeInOutCirc"),$(".topbar__menu").animate({bottom:"-300px"},300,"easeInOutCirc"),$(".Hero").animate({opacity:"0"},200,"easeInOutCirc"),$(".StickNav").animate({opacity:"0",left:"-400px"},200,"easeInOutCirc")},400),setTimeout(function(){window.location=linkLocation},1200)}var i=($("#btn_menu"),$(".Hero__arrow")),n=$(".leave"),o=($("#menu"),$(".Header")),s=o.offset().top;$(window).scroll(function(t){$(this).scrollTop()>=s+50?o.addClass("is-scrolled"):o.removeClass("is-scrolled")}),window.matchMedia("(min-width:1200px)").matches&&(n.on("click",function(t){t.preventDefault(),$("body").animate({scrollTop:$("body").position().top},500,"easeInOutCirc"),linkLocation=this.href,e(linkLocation)}),i.on("click",function(i){i.preventDefault(),t(),linkLocation=this.href,setTimeout(function(){e(linkLocation)},100)}))};e.exports=n},{}],7:[function(t,e,i){var n=(t("./vendor/easing"),t("./vendor/simplezoom"),t("./vendor/typed"),t("./libs/scrollreveal")),o=t("./libs/scrolled"),s=t("./libs/topbar"),r=t("./libs/projects"),a=t("./libs/sticknav"),l=t("./libs/tipedJS");jQuery(document).ready(function(t){o(),s(),r(),a(),n(),l()})},{"./libs/projects":1,"./libs/scrolled":2,"./libs/scrollreveal":3,"./libs/sticknav":4,"./libs/tipedJS":5,"./libs/topbar":6,"./vendor/easing":8,"./vendor/simplezoom":10,"./vendor/typed":11}],8:[function(t,e,i){jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,o){return jQuery.easing[jQuery.easing.def](t,e,i,n,o)},easeInQuad:function(t,e,i,n,o){return n*(e/=o)*e+i},easeOutQuad:function(t,e,i,n,o){return-n*(e/=o)*(e-2)+i},easeInOutQuad:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,o){return n*(e/=o)*e*e+i},easeOutCubic:function(t,e,i,n,o){return n*((e=e/o-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,o){return n*(e/=o)*e*e*e+i},easeOutQuart:function(t,e,i,n,o){return-n*((e=e/o-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,o){return n*(e/=o)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,o){return n*((e=e/o-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,o){return-n*Math.cos(e/o*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,o){return n*Math.sin(e/o*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,o){return-n/2*(Math.cos(Math.PI*e/o)-1)+i},easeInExpo:function(t,e,i,n,o){return 0==e?i:n*Math.pow(2,10*(e/o-1))+i},easeOutExpo:function(t,e,i,n,o){return e==o?i+n:n*(-Math.pow(2,-10*e/o)+1)+i},easeInOutExpo:function(t,e,i,n,o){return 0==e?i:e==o?i+n:(e/=o/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(-Math.pow(2,-10*--e)+2)+i},easeInCirc:function(t,e,i,n,o){return-n*(Math.sqrt(1-(e/=o)*e)-1)+i},easeOutCirc:function(t,e,i,n,o){return n*Math.sqrt(1-(e=e/o-1)*e)+i},easeInOutCirc:function(t,e,i,n,o){return(e/=o/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,o){var s=1.70158,r=0,a=n;if(0==e)return i;if(1==(e/=o))return i+n;if(r||(r=.3*o),a<Math.abs(n)){a=n;var s=r/4}else var s=r/(2*Math.PI)*Math.asin(n/a);return-(a*Math.pow(2,10*(e-=1))*Math.sin((e*o-s)*(2*Math.PI)/r))+i},easeOutElastic:function(t,e,i,n,o){var s=1.70158,r=0,a=n;if(0==e)return i;if(1==(e/=o))return i+n;if(r||(r=.3*o),a<Math.abs(n)){a=n;var s=r/4}else var s=r/(2*Math.PI)*Math.asin(n/a);return a*Math.pow(2,-10*e)*Math.sin((e*o-s)*(2*Math.PI)/r)+n+i},easeInOutElastic:function(t,e,i,n,o){var s=1.70158,r=0,a=n;if(0==e)return i;if(2==(e/=o/2))return i+n;if(r||(r=o*(.3*1.5)),a<Math.abs(n)){a=n;var s=r/4}else var s=r/(2*Math.PI)*Math.asin(n/a);return e<1?-.5*(a*Math.pow(2,10*(e-=1))*Math.sin((e*o-s)*(2*Math.PI)/r))+i:a*Math.pow(2,-10*(e-=1))*Math.sin((e*o-s)*(2*Math.PI)/r)*.5+n+i},easeInBack:function(t,e,i,n,o,s){return void 0==s&&(s=1.70158),n*(e/=o)*e*((s+1)*e-s)+i},easeOutBack:function(t,e,i,n,o,s){return void 0==s&&(s=1.70158),n*((e=e/o-1)*e*((s+1)*e+s)+1)+i},easeInOutBack:function(t,e,i,n,o,s){return void 0==s&&(s=1.70158),(e/=o/2)<1?n/2*(e*e*(((s*=1.525)+1)*e-s))+i:n/2*((e-=2)*e*(((s*=1.525)+1)*e+s)+2)+i},easeInBounce:function(t,e,i,n,o){return n-jQuery.easing.easeOutBounce(t,o-e,0,n,o)+i},easeOutBounce:function(t,e,i,n,o){return(e/=o)<1/2.75?n*(7.5625*e*e)+i:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,o){return e<o/2?.5*jQuery.easing.easeInBounce(t,2*e,0,n,o)+i:.5*jQuery.easing.easeOutBounce(t,2*e-o,0,n,o)+.5*n+i}})},{}],9:[function(t,e,i){!function(n,o){"function"==typeof define&&define.amd?define(o):"object"==typeof i?e.exports=o(t,i,e):n.ScrollReveal=o()}(this,function(t,e,i){return function(){"use strict";var t,e,i;this.ScrollReveal=function(){function n(i){return"undefined"==typeof this||Object.getPrototypeOf(this)!==n.prototype?new n(i):(t=this,t.tools=new e,t.isSupported()?(t.tools.extend(t.defaults,i||{}),o(t.defaults),t.store={elements:{},containers:[]},t.sequences={},t.history=[],t.uid=0,t.initialized=!1):"undefined"!=typeof console&&null!==console,t)}function o(e){var i=e.container;return i&&"string"==typeof i?e.container=window.document.querySelector(i):(i&&!t.tools.isNode(i)&&(e.container=null),null==i&&(e.container=window.document.documentElement),e.container)}function s(){return++t.uid}function r(e,i){e.config?e.config=t.tools.extendClone(e.config,i):e.config=t.tools.extendClone(t.defaults,i),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X","top"!==e.config.origin&&"left"!==e.config.origin||(e.config.distance="-"+e.config.distance)}function a(t){var e=window.getComputedStyle(t.domEl);t.styles||(t.styles={transition:{},transform:{},computed:{}},t.styles.inline=t.domEl.getAttribute("style")||"",t.styles.inline+="; visibility: visible; ",t.styles.computed.opacity=e.opacity,e.transition&&"all 0s ease 0s"!=e.transition?t.styles.computed.transition=e.transition+", ":t.styles.computed.transition=""),t.styles.transition.instant=l(t,0),t.styles.transition.delayed=l(t,t.config.delay),t.styles.transform.initial=" -webkit-transform:",t.styles.transform.target=" -webkit-transform:",c(t),t.styles.transform.initial+="transform:",t.styles.transform.target+="transform:",c(t)}function l(t,e){var i=t.config;return"-webkit-transition: "+t.styles.computed.transition+"-webkit-transform "+i.duration/1e3+"s "+i.easing+" "+e/1e3+"s, opacity "+i.duration/1e3+"s "+i.easing+" "+e/1e3+"s; transition: "+t.styles.computed.transition+"transform "+i.duration/1e3+"s "+i.easing+" "+e/1e3+"s, opacity "+i.duration/1e3+"s "+i.easing+" "+e/1e3+"s; "}function c(t){var e=t.config,i=t.styles.transform;parseInt(e.distance)&&(i.initial+=" translate"+e.axis+"("+e.distance+")",i.target+=" translate"+e.axis+"(0)"),e.scale&&(i.initial+=" scale("+e.scale+")",i.target+=" scale(1)"),e.rotate.x&&(i.initial+=" rotateX("+e.rotate.x+"deg)",i.target+=" rotateX(0)"),e.rotate.y&&(i.initial+=" rotateY("+e.rotate.y+"deg)",i.target+=" rotateY(0)"),e.rotate.z&&(i.initial+=" rotateZ("+e.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+e.opacity+";",i.target+="; opacity: "+t.styles.computed.opacity+";"}function u(e){var i=e.config.container;i&&-1==t.store.containers.indexOf(i)&&t.store.containers.push(e.config.container),t.store.elements[e.id]=e}function f(e,i,n){var o={selector:e,config:i,interval:n};t.history.push(o)}function d(){if(t.isSupported()){m();for(var e=0;e<t.store.containers.length;e++)t.store.containers[e].addEventListener("scroll",h),t.store.containers[e].addEventListener("resize",h);t.initialized||(window.addEventListener("scroll",h),window.addEventListener("resize",h),t.initialized=!0)}return t}function h(){i(m)}function p(){var e,i,n,o;t.tools.forOwn(t.sequences,function(s){o=t.sequences[s],e=!1;for(var r=0;r<o.elemIds.length;r++)n=o.elemIds[r],i=t.store.elements[n],k(i)&&!e&&(e=!0);o.active=e})}function m(){var e,i;p(),t.tools.forOwn(t.store.elements,function(n){i=t.store.elements[n],e=w(i),y(i)?(e?i.domEl.setAttribute("style",i.styles.inline+i.styles.transform.target+i.styles.transition.delayed):i.domEl.setAttribute("style",i.styles.inline+i.styles.transform.target+i.styles.transition.instant),v("reveal",i,e),i.revealing=!0,i.seen=!0,i.sequence&&g(i,e)):b(i)&&(i.domEl.setAttribute("style",i.styles.inline+i.styles.transform.initial+i.styles.transition.instant),v("reset",i),i.revealing=!1)})}function g(e,i){var n=0,o=0,s=t.sequences[e.sequence.id];s.blocked=!0,i&&"onload"==e.config.useDelay&&(o=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){s.blocked=!1,e.sequence.timer=null,h()},Math.abs(s.interval)+o-n)}function v(t,e,i){var n=0,o=0,s="after";switch(t){case"reveal":o=e.config.duration,i&&(o+=e.config.delay),s+="Reveal";break;case"reset":o=e.config.duration,s+="Reset"}e.timer&&(n=Math.abs(e.timer.started-new Date),window.clearTimeout(e.timer.clock)),e.timer={started:new Date},e.timer.clock=window.setTimeout(function(){e.config[s](e.domEl),e.timer=null},o-n)}function y(e){if(e.sequence){var i=t.sequences[e.sequence.id];return i.active&&!i.blocked&&!e.revealing&&!e.disabled}return k(e)&&!e.revealing&&!e.disabled}function w(e){var i=e.config.useDelay;return"always"===i||"onload"===i&&!t.initialized||"once"===i&&!e.seen}function b(e){if(e.sequence){var i=t.sequences[e.sequence.id];return!i.active&&e.config.reset&&e.revealing&&!e.disabled}return!k(e)&&e.config.reset&&e.revealing&&!e.disabled}function $(t){return{width:t.clientWidth,height:t.clientHeight}}function I(t){if(t&&t!==window.document.documentElement){var e=M(t);return{x:t.scrollLeft+e.left,y:t.scrollTop+e.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function M(t){var e=0,i=0,n=t.offsetHeight,o=t.offsetWidth;do isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(i+=t.offsetLeft);while(t=t.offsetParent);return{top:e,left:i,height:n,width:o}}function k(t){function e(){var e=c+a*r,i=u+l*r,n=f-a*r,h=d-l*r,p=s.y+t.config.viewOffset.top,m=s.x+t.config.viewOffset.left,g=s.y-t.config.viewOffset.bottom+o.height,v=s.x-t.config.viewOffset.right+o.width;return g>e&&n>p&&i>m&&v>h}function i(){return"fixed"===window.getComputedStyle(t.domEl).position}var n=M(t.domEl),o=$(t.config.container),s=I(t.config.container),r=t.config.viewFactor,a=n.height,l=n.width,c=n.top,u=n.left,f=c+a,d=u+l;return e()||i()}return n.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:null,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},afterReveal:function(t){},afterReset:function(t){}},n.prototype.isSupported=function(){var t=document.documentElement.style;return"WebkitTransition"in t&&"WebkitTransform"in t||"transition"in t&&"transform"in t},n.prototype.reveal=function(e,i,n,l){var c,h,p,m,g,v;if(c=i&&i.container?o(i):t.defaults.container,h=t.tools.isNode(e)?[e]:Array.prototype.slice.call(c.querySelectorAll(e)),!h.length)return t;i&&"number"==typeof i&&(n=i,i={}),n&&"number"==typeof n&&(v=s(),g=t.sequences[v]={id:v,interval:n,elemIds:[],active:!1});for(var y=0;y<h.length;y++)m=h[y].getAttribute("data-sr-id"),m?p=t.store.elements[m]:(p={id:s(),domEl:h[y],seen:!1,revealing:!1},p.domEl.setAttribute("data-sr-id",p.id)),g&&(p.sequence={id:g.id,index:g.elemIds.length},g.elemIds.push(p.id)),r(p,i||{}),a(p),u(p),t.tools.isMobile()&&!p.config.mobile||!t.isSupported()?(p.domEl.setAttribute("style",p.styles.inline),p.disabled=!0):p.revealing||p.domEl.setAttribute("style",p.styles.inline+p.styles.transform.initial);return!l&&t.isSupported()&&(f(e,i),t.initTimeout&&window.clearTimeout(t.initTimeout),t.initTimeout=window.setTimeout(d,0)),t},n.prototype.sync=function(){if(t.history.length&&t.isSupported()){for(var e=0;e<t.history.length;e++){var i=t.history[e];t.reveal(i.selector,i.config,i.interval,!0)}d()}return t},n}(),e=function(){function t(){}return t.prototype.isObject=function(t){return null!==t&&"object"==typeof t&&t.constructor==Object},t.prototype.isNode=function(t){return"object"==typeof Node?t instanceof Node:t&&"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},t.prototype.forOwn=function(t,e){if(!this.isObject(t))throw new TypeError('Expected "object", but received "'+typeof t+'".');for(var i in t)t.hasOwnProperty(i)&&e(i)},t.prototype.extend=function(t,e){return this.forOwn(e,function(i){this.isObject(e[i])?(t[i]&&this.isObject(t[i])||(t[i]={}),this.extend(t[i],e[i])):t[i]=e[i]}.bind(this)),t},t.prototype.extendClone=function(t,e){return this.extend(this.extend({},t),e)},t.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},t}(),i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}.call(this),this.ScrollReveal})},{}],10:[function(t,e,i){!function(t){function e(e,n){if(this.$el=t(e),this.options=t.extend(!0,{},i,n,this.$el.data()),this.$img=this.$el.find(this.options.imgclass),0!==this.$img.length&&(this.$img=this.$img.first(),this.img_lg=this.$el.attr("href"),this.img_sm=this.$img.attr("src"),this.img_lg&&this.img_sm&&"#"!=this.img_lg)){var o=this;this.$el.on("click.simplezoom",function(t){t.preventDefault(),o.showModal()})}}var i={classie:"",offset:40,scrollclose:!0,imgclass:"img",duration:0,modalTmpl:null,loaderTmpl:null},n='<div class="modal-simplezoom modal"><div class="modal-bg"></div><div class="modal-content"><div class="simplezoom-item"><img src="{{img}}" alt="simplezoom-img" /></div></div></div>',o='<div class="simplezoom-loader loader"><i></i></div>';t.extend(e.prototype,{showModal:function(){var e=this,i=null;this.$modal=this.createModal(this.img_sm),this.$content=this.$modal.find(".simplezoom-item"),this.setInitPosition(),this.options.duration&&this.$content.css("transitionDuration",this.options.duration+"ms"),this.$img.css("visibility","hidden"),this.loadImageMeta(this.img_sm,function(n){e.$modal&&!e.isClosing&&(e.setFullPosition(n),e.$content.append(e.options.loaderTmpl||o),e.$modal.addClass("in loading"),e.loadImageMeta(e.img_lg,function(t){e.$modal&&!e.isClosing&&(e.$modal.removeClass("loading"),t&&(e.$content.find("img").attr("src",e.img_lg),e.setFullPosition(t),e.evtTrigger("onImageLoaded")))}),t(window).on("resize.simplezoom",function(t){clearTimeout(i),i=setTimeout(function(){e.setFullPosition(n)},100)}),e.$modal.on("click",function(t){e.closeModal()}),e.options.scrollclose&&t(window).on("scroll.simplezoom",function(t){e.closeModal()}))}),e.evtTrigger("onModalInit")},closeModal:function(){var e=this;this.isClosing=!0,this.$modal.removeClass("in"),this.$content.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e.$modal.remove(),e.$modal=null,e.$img.css("visibility","visible"),t(window).off("resize.simplezoom").off("scroll.simplezoom"),e.isClosing=!1}),this.setInitPosition(),this.evtTrigger("onModalClosed")},createModal:function(e){var i=this.options.modalTmpl||n;return i=i.replace("{{img}}",e),t(i).addClass(this.options.classie).appendTo("body")},setInitPosition:function(){var e={width:this.$img.width(),height:this.$img.height(),left:this.$img.offset().left,top:this.$img.offset().top-t(window).scrollTop()};this.$content.css(e)},setFullPosition:function(e){var i,n,o,s,r,a,l,c;i=e.w,n=e.h,r=i/n,o=t(window).width()-2*this.options.offset,s=t(window).height()-2*this.options.offset,a=o/s,a>r?(n=Math.min(s,n),i=n*r):(i=Math.min(o,i),n=i/r),l=(t(window).width()-i)/2,c=(t(window).height()-n)/2,this.$content.css({width:i,height:n,left:l,top:c})},loadImageMeta:function(e,i){var n=this;t("<img />").load(function(){i({w:this.width,h:this.height})}).error(function(){n.evtTrigger("onImageError"),i(null)}).attr("src",e)},evtTrigger:function(t){t&&this.options[t]&&"function"==typeof this.options[t]&&this.options[t].call(this,this.$el,this.$modal)}}),t.fn.simplezoom=function(i){var n="iws_simplezoom";return this.each(function(){var o=t.data(this,n);o||(o=new e(this,i),t.data(this,n,o))})}}(jQuery)},{}],11:[function(t,e,i){!function(t){"use strict";var e=function(e,i){this.el=t(e),this.options=t.extend({},t.fn.typed.defaults,i),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};e.prototype={constructor:e,init:function(){var t=this;t.timeout=setTimeout(function(){for(var e=0;e<t.strings.length;++e)t.sequence[e]=e;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var e=this;if(this.showCursor===!0&&(this.cursor=t('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.stringsElement){this.strings=[],this.stringsElement.hide();var i=this.stringsElement.children();t.each(i,function(i,n){e.strings.push(t(n).html())})}this.init()},typewrite:function(t,e){if(this.stop!==!0){var i=Math.round(70*Math.random())+this.typeSpeed,n=this;n.timeout=setTimeout(function(){var i=0,o=t.substr(e);if("^"===o.charAt(0)){var s=1;/^\^\d+/.test(o)&&(o=/\d+/.exec(o)[0],s+=o.length,i=parseInt(o)),t=t.substring(0,e)+t.substring(e+s)}if("html"===n.contentType){var r=t.substr(e).charAt(0);if("<"===r||"&"===r){var a="",l="";for(l="<"===r?">":";";t.substr(e+1).charAt(0)!==l&&(a+=t.substr(e).charAt(0),e++,!(e+1>t.length)););e++,a+=l}}n.timeout=setTimeout(function(){if(e===t.length){if(n.options.onStringTyped(n.arrayPos),n.arrayPos===n.strings.length-1&&(n.options.callback(),n.curLoop++,n.loop===!1||n.curLoop===n.loopCount))return;n.timeout=setTimeout(function(){n.backspace(t,e)},n.backDelay)}else{0===e&&n.options.preStringTyped(n.arrayPos);var i=t.substr(0,e+1);n.attr?n.el.attr(n.attr,i):n.isInput?n.el.val(i):"html"===n.contentType?n.el.html(i):n.el.text(i),e++,n.typewrite(t,e)}},i)},i)}},backspace:function(t,e){if(this.stop!==!0){var i=Math.round(70*Math.random())+this.backSpeed,n=this;n.timeout=setTimeout(function(){if("html"===n.contentType&&">"===t.substr(e).charAt(0)){for(var i="";"<"!==t.substr(e-1).charAt(0)&&(i-=t.substr(e).charAt(0),e--,!(0>e)););e--,i+="<"}var o=t.substr(0,e);n.attr?n.el.attr(n.attr,o):n.isInput?n.el.val(o):"html"===n.contentType?n.el.html(o):n.el.text(o),e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.shuffle&&(n.sequence=n.shuffleArray(n.sequence)),n.init()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))},i)}},shuffleArray:function(t){var e,i,n=t.length;if(n)for(;--n;)i=Math.floor(Math.random()*(n+1)),e=t[i],t[i]=t[n],t[n]=e;return t},reset:function(){var t=this;clearInterval(t.timeout),this.el.attr("id"),this.el.empty(),"undefined"!=typeof this.cursor&&this.cursor.remove(),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},t.fn.typed=function(i){return this.each(function(){var n=t(this),o=n.data("typed"),s="object"==typeof i&&i;o&&o.reset(),n.data("typed",o=new e(this,s)),"string"==typeof i&&o[i]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery)},{}],12:[function(t,e,i){!function(t){t.fn.unveil=function(e,i){function n(){var e=c.filter(function(){var e=t(this);if(!e.is(":hidden")){var i=s.scrollTop(),n=i+s.height(),o=e.offset().top,a=o+e.height();return a>=i-r&&o<=n+r}});o=e.trigger("unveil"),c=c.not(o)}var o,s=t(window),r=e||0,a=window.devicePixelRatio>1,l=a?"data-src-retina":"data-src",c=this;return this.one("unveil",function(){var t=this.getAttribute(l);t=t||this.getAttribute("data-src"),t&&(this.setAttribute("src",t),"function"==typeof i&&i.call(this))}),s.on("scroll.unveil resize.unveil lookup.unveil",n),n(),this}}(window.jQuery||window.Zepto)},{}]},{},[7]);