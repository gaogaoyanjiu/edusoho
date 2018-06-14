webpackJsonp(["app/js/auth/register/index"],{0:function(e,t){e.exports=jQuery},"6386db75dd507093b6de":function(e,t,a){"use strict";var r=a("9ffde76f31e1d8ca79f0");new(function(e){return e&&e.__esModule?e:{default:e}}(r).default)},"9ffde76f31e1d8ca79f0":function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),s=a("0282bb17fb83bfbfed9b"),o=r(s),l=a("bbc0ef257199acca9fed"),c=r(l),d=function(){function e(){n(this,e),this.drag=$("#drag-btn").length?new c.default($("#drag-btn"),$(".js-jigsaw")):null,this.dragEvent(),this.initValidator(),this.inEventMobile(),this.initMobileMsgVeriCodeSendBtn()}return i(e,[{key:"dragEvent",value:function(){var e=this;this.drag&&this.drag.on("success",function(t){e._smsBtnable()})}},{key:"initValidator",value:function(){var e=this;$("#register-form").validate(this._validataRules()),$.validator.addMethod("email_or_mobile_check",function(t,a,r){var n=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,i=/^1\d{10}$/,s=!1,o=n.test(t),l=i.test(t);return l?($(".email_mobile_msg").removeClass("hidden"),e.captchEnable||$(".js-drag-jigsaw").addClass("hidden")):($(".email_mobile_msg").addClass("hidden"),$(".js-drag-jigsaw").removeClass("hidden")),(o||l)&&(s=!0),$.validator.messages.email_or_mobile_check=Translator.trans("请输入正确的手机／邮箱"),this.optional(a)||s},Translator.trans("validate.email_or_mobile_check.message"))}},{key:"inEventMobile",value:function(){var e=this;$("#register_emailOrMobile").blur(function(){var t=$("#register_emailOrMobile").val();e.emSmsCodeValidate(t)}),$("#register_mobile").blur(function(){var t=$("#register_mobile").val();e.emSmsCodeValidate(t)})}},{key:"initDragCaptchaCodeRule",value:function(){$(".js-drag-img").length&&$('[name="dragCaptchaToken"]').rules("add",{required:!0,messages:{required:Translator.trans("auth.register.drag_captcha_tips")}})}},{key:"_smsBtnDisable",value:function(){$(".js-sms-send-btn").addClass("disabled").attr("disabled",!0)}},{key:"_smsBtnable",value:function(){$(".js-sms-send-btn").removeClass("disabled").attr("disabled",!1)}},{key:"initSmsCodeRule",value:function(){$('[name="sms_code"]').rules("add",{required:!0,unsigned_integer:!0,rangelength:[6,6],es_remote:{type:"get"},messages:{rangelength:Translator.trans("validate.sms_code.message")}})}},{key:"initMobileMsgVeriCodeSendBtn",value:function(){var e=$(".js-sms-send-btn"),t=this;e.click(function(){t._smsBtnDisable();var a=$("[name='verifiedMobile']").length?"verifiedMobile":"emailOrMobile";new o.default({element:e,url:$(this).data("smsUrl"),smsType:"sms_registration",dataTo:a,captcha:!0,captchaValidated:!0,captchaNum:"dragCaptchaToken",preSmsSend:function(){return!0},error:function(e){t.drag.initDragCaptcha()},additionalAction:function(a){return"captchaRequired"==a&&(e.attr("disabled",!0),$(".js-drag-jigsaw").removeClass("hidden"),t.captchEnable=!0,t.drag&&t.drag.initDragCaptcha(),!0)}})})}},{key:"_validataRules",value:function(){var e=this;return{rules:{nickname:{required:!0,byte_minlength:4,byte_maxlength:18,nickname:!0,chinese_alphanumeric:!0,es_remote:{type:"get"}},password:{minlength:5,maxlength:20},email:{required:!0,email:!0,es_remote:{type:"get"}},invitedCode:{required:!1,reg_inviteCode:!0,es_remote:{type:"get"}},emailOrMobile:{required:!0,email_or_mobile_check:!0,es_remote:{type:"get",callback:function(t){t?e._smsBtnable():e._smsBtnDisable()}}},verifiedMobile:{required:!0,phone:!0,es_remote:{type:"get",callback:function(t){t?e._smsBtnable():e._smsBtnDisable()}}},dragCaptchaToken:{required:!0}},messages:{verifiedMobile:{required:Translator.trans("validate.phone.message")},emailOrMobile:{required:Translator.trans("validate.phone_and_email_input.message")},email:{required:Translator.trans("validate.valid_email_input.message")},dragCaptchaToken:{required:Translator.trans("auth.register.drag_captcha_tips")}}}}},{key:"emSmsCodeValidate",value:function(e){/^1\d{10}$/.test(e)?(this.initSmsCodeRule(),$('[name="dragCaptchaToken"]').rules("remove")):(this.initDragCaptchaCodeRule(),$('[name="sms_code"]').rules("remove"))}}]),e}();t.default=d},bbc0ef257199acca9fed:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),c=a("5eb223de522186da1dd9"),d=r(c),u=a("9181c6995ae8c5c94b7a"),g=a("17c25dd7d9d2615bc1d9"),h=r(g),f=function(e){function t(e,a){i(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.$element=e,r.$target=a,r.params={top:0,left:0,currentX:0,currentY:0,flag:!1,currentLeft:0,currentTop:0},r.dragCaptchaToken=null,r.init(),r}return o(t,e),l(t,[{key:"init",value:function(){this.initDragCaptcha(),this.getLocation(this.$element[0])}},{key:"initDragCaptcha",value:function(){var e=this,t=this;d.default.dragCaptcha.get({before:function(){$(".js-drag-img-mask").removeClass("hidden"),$(".js-jigsaw-bg").remove(),$(".js-jigsaw").attr("src",""),t.setCss(t.$element[0],"cursor","pointer"),t.resetLocation(t.$element[0],t.$target[0]),t.initEvent()}}).then(function(t){e.loadingImg(t.url,t.jigsaw),e.dragCaptchaToken=t.token})}},{key:"loadingImg",value:function(e,t){var a=new Image;a.src=e,a.className="js-jigsaw-bg drag-img__bg",a.onload=function(){$(a).prependTo(".js-drag-img"),$(".js-drag-img-mask").addClass("hidden"),$(".js-jigsaw").attr("src",t)}}},{key:"initEvent",value:function(){var e=this;this.unbindEvent();var t=$(document);this.$element.on("mousedown.drag.captcha touchstart.drag.captcha",function(t){e.startDrag(t)}),t.on("mouseup.drag.captcha touchend.drag.captcha",function(t){e.stopDrag(t)}),t.on("mousemove.drag.captcha touchmove.drag.captcha",function(t){e.dragMove(t)})}},{key:"unbindEvent",value:function(){this.$element.unbind("mousedown.drag.captcha touchstart.drag.captcha"),$(document).unbind("mousemove.drag.captcha touchmove.drag.captcha mouseup.drag.captcha touchend.drag.captcha")}},{key:"startDrag",value:function(e){e.preventDefault();var t=this.params;t.flag=!0;var a=e.clientX?e.clientX.toFixed(2):e.originalEvent.targetTouches[0].pageX.toFixed(2);t.currentX=a}},{key:"stopDrag",value:function(e){var t=this,a=this.$element,r=(this.$target,this.params);if(r.flag&&(r.flag=!1,this.getLocation(a[0]),r.currentLeft)){var n=$(".js-jigsaw-bg"),i=this.calPositionX(n),s=this._getToken(this.dragCaptchaToken,i),o={token:s};d.default.dragCaptcha.validate({params:o}).then(function(e){t.validateSuccess(a[0],s)}).catch(function(){t.initDragCaptcha(),t.emit("error")})}}},{key:"dragMove",value:function(e){var t=this.$element,a=this.$target,r=this.params;if(r.flag){e.preventDefault();var n=e.clientX?e.clientX.toFixed(2):e.originalEvent.targetTouches[0].pageX.toFixed(2),i=n-r.currentX,s=t.parent().width()-t.width(),o=parseInt(r.left)+i;o<=0&&(o=0),o>=s&&(o=s),r.currentLeft=o;var l=o+"px";this.setCss(t[0],"left",l),this.setCss(a[0],"left",l),this.setCss(t[0],"cursor","move"),$(".js-drag-bar-tip").addClass("hidden");var c=o+20+"px";$(".js-drag-bar-mask").css("width",c)}}},{key:"calPositionX",value:function(e){var t=(e[0].naturalWidth/e.width()).toFixed(2);return(this.params.currentLeft.toFixed(2)*t).toFixed(2)}},{key:"validateSuccess",value:function(e,t){cd.message({type:"success",message:Translator.trans("validate.success")});var a=$('[name="dragCaptchaToken"]');a.val(t);var r=a.closest(".form-group");r.removeClass("has-error"),r.find(".jq-validate-error").remove(),this.unbindEvent(),this.setCss(e,"cursor","not-allowed"),this.emit("success",{token:t})}},{key:"getLocation",value:function(e){"auto"!==this.getCss(e,"left")&&(this.params.left=this.getCss(e,"left"))}},{key:"resetLocation",value:function(e,t){this.setCss(e,"left","0px"),this.setCss(t,"left","0px"),this.getLocation(e),$(".js-drag-bar-mask").css("width","0px"),$(".js-drag-bar-tip").removeClass("hidden")}},{key:"getCss",value:function(e,t){return e.currentStyle?e.currentStyle[t]:document.defaultView.getComputedStyle(e,!1)[t]}},{key:"setCss",value:function(e,t,a){e.style[t]=a}},{key:"_getToken",value:function(e,t){var a={token:e,captcha:t};return e=JSON.stringify(a),[].concat(n((0,u.strToBase64)(e))).reverse().join("")}}]),t}(h.default);t.default=f}},["6386db75dd507093b6de"]);