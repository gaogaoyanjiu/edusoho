webpackJsonp(["app/js/teacher/index"],{"7840d638cc48059df0fc":function(e,t,c){"use strict";$("body").on("click",".teacher-item .follow-btn",function(){var e=$(this);$.post(e.data("url"),function(){1===e.data("loggedin")&&(e.hide(),e.closest(".teacher-item").find(".unfollow-btn").show())})}).on("click",".unfollow-btn",function(){var e=$(this);$.post(e.data("url"),function(){}).always(function(){e.hide(),e.closest(".teacher-item").find(".follow-btn").show()})})},ac59ea92748d495b5ede:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c("7840d638cc48059df0fc");c.n(n)}},["ac59ea92748d495b5ede"]);