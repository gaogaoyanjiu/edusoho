webpackJsonp(["app/js/es-bar/index"],{ea0be669e571575018e6:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("9181c6995ae8c5c94b7a"),o=function(){function e(t){a(this,e),this.ele=$(t.ele),this.init()}return i(e,[{key:"init",value:function(){var e=this;this.initEvent(),(r.Browser.ie10||r.Browser.ie11||r.Browser.edge)&&this.ele.css("margin-right","16px"),this.ele.find('[data-toggle="tooltip"]').length>0&&this.ele.find('[data-toggle="tooltip"]').tooltip({container:".es-bar"}),this.ele.find(".bar-menu-sns li.popover-btn").popover({placement:"left",trigger:"hover",html:!0,content:function(){return $($(this).data("contentElement")).html()}}),$("body").on("click",".es-wrap",function(){$(".es-bar-main.active").length&&e.ele.animate({right:"-230px"},300).find(".bar-menu-top li.active").removeClass("active")}),this.goTop()}},{key:"initEvent",value:function(){var e=this,t=this.ele;t.on("click",".js-bar-shrink",function(t){return e.onBarBhrink(t)}),t.on("click",".bar-menu-top li",function(t){return e.onMenuTop(t)}),t.on("click",".btn-action >a",function(t){return e.onBtnAction(t)})}},{key:"onBarBhrink",value:function(e){$(e.currentTarget).parents(".es-bar-main.active").removeClass("active").end().parents(".es-bar").animate({right:"-230px"},300),$(".bar-menu-top li.active").removeClass("active")}},{key:"onMenuTop",value:function(e){var t=$(e.currentTarget);if(!r.isLogin)return void this.isNotLogin();this.ele.find(".bar-main-body").perfectScrollbar({wheelSpeed:50}),t.find(".dot")&&t.find(".dot").remove(),t.hasClass("active")?t.removeClass("active").parents(".es-bar").animate({right:"-230px"},300):(t.siblings(".active").removeClass("active").end().addClass("active").parents(".es-bar").animate({right:"0"},300),this.clickBar(t),$(t.data("id")).siblings(".es-bar-main.active").removeClass("active").end().addClass("active"))}},{key:"onBtnAction",value:function(e){var t=$(e.currentTarget),n=t.data("url");$.get(n,function(e){t.closest(".es-bar-main").html(e),$(".es-bar .bar-main-body").perfectScrollbar({wheelSpeed:50})})}},{key:"clickBar",value:function(e){if(void 0!==e.find("a").data("url")){var t=e.find("a").data("url");$.get(t,function(t){$(e.data("id")).html(t),$(".es-bar .bar-main-body").perfectScrollbar({wheelSpeed:50})})}}},{key:"isNotLogin",value:function(){var e=$("#login-modal");e.modal("show"),$.get(e.data("url"),function(t){e.html(t)})}},{key:"goTop",value:function(){var e=$(".go-top");$(window).scroll(function(t){$(window).scrollTop()>=300?e.addClass("show"):e.hasClass("show")&&e.removeClass("show")}),e.click(function(){return $("body,html").animate({scrollTop:0},300),!1})}}]),e}();new o({ele:".es-bar"})}},["ea0be669e571575018e6"]);