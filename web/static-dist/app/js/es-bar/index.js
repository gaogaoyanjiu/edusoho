webpackJsonp(["app/js/es-bar/index"],[function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),r=t("9181c6995ae8c5c94b7a"),o=function(){function e(n){a(this,e),this.ele=$(n.ele),this.init()}return i(e,[{key:"init",value:function(){var e=this;this.initEvent(),(r.Browser.ie10||r.Browser.ie11||r.Browser.edge)&&this.ele.css("margin-right","16px"),this.ele.find('[data-toggle="tooltip"]').length>0&&this.ele.find('[data-toggle="tooltip"]').tooltip({container:".es-bar"}),this.ele.find(".bar-menu-sns li.popover-btn").popover({placement:"left",trigger:"hover",html:!0,content:function(){return $($(this).data("contentElement")).html()}}),$("body").on("click",".es-wrap",function(){$(".es-bar-main.active").length&&e.ele.animate({right:"-230px"},300).find(".bar-menu-top li.active").removeClass("active")}),this.goTop()}},{key:"initEvent",value:function(){var e=this,n=this.ele;n.on("click",".js-bar-shrink",function(n){return e.onBarBhrink(n)}),n.on("click",".bar-menu-top li",function(n){return e.onMenuTop(n)}),n.on("click",".btn-action >a",function(n){return e.onBtnAction(n)})}},{key:"onBarBhrink",value:function(e){var n=$(e.currentTarget);n.parents(".es-bar-main.active").removeClass("active").end().parents(".es-bar").animate({right:"-230px"},300),$(".bar-menu-top li.active").removeClass("active")}},{key:"onMenuTop",value:function(e){var n=$(e.currentTarget);return r.isLogin?(this.ele.find(".bar-main-body").perfectScrollbar({wheelSpeed:50}),n.find(".dot")&&n.find(".dot").remove(),void(n.hasClass("active")?n.removeClass("active").parents(".es-bar").animate({right:"-230px"},300):(n.siblings(".active").removeClass("active").end().addClass("active").parents(".es-bar").animate({right:"0"},300),this.clickBar(n),$(n.data("id")).siblings(".es-bar-main.active").removeClass("active").end().addClass("active")))):void this.isNotLogin()}},{key:"onBtnAction",value:function(e){var n=$(e.currentTarget),t=n.data("url");$.get(t,function(e){n.closest(".es-bar-main").html(e),$(".es-bar .bar-main-body").perfectScrollbar({wheelSpeed:50})})}},{key:"clickBar",value:function(e){if("undefined"!=typeof e.find("a").data("url")){var n=e.find("a").data("url");$.get(n,function(n){$(e.data("id")).html(n),$(".es-bar .bar-main-body").perfectScrollbar({wheelSpeed:50})})}}},{key:"isNotLogin",value:function(){var e=$("#login-modal");e.modal("show"),$.get(e.data("url"),function(n){e.html(n)})}},{key:"goTop",value:function(){var e=$(".go-top");$(window).scroll(function(n){var t=$(window).scrollTop();t>=300?e.addClass("show"):e.hasClass("show")&&e.removeClass("show")}),e.click(function(){return $("body,html").animate({scrollTop:0},300),!1})}}]),e}();new o({ele:".es-bar"})}]);