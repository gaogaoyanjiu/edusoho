webpackJsonp(["app/js/card/index/index"],{0:function(e,t){e.exports=jQuery},"93e2cb978d492cfab482":function(e,t,a){"use strict";var c=a("b334fd7e4c5a19234db2"),n=function(e){return e&&e.__esModule?e:{default:e}}(c);$("a[role=filter-change]").click(function(e){window.location.href=$(this).data("url")}),$(".receive-modal").click(),$("body").on("click",".money-card-use",function(){$("body").off("click",".money-card-use");var e=$(this).data("url"),t=$(this).data("target-url"),a=$(this).prev().text();$.post(e,function(e){(0,n.default)("success",Translator.trans("学习卡已使用，充值"+a+"虚拟币成功，可前往【账户中心】-【我的账户】查看充值情况。"),2),setTimeout("window.location.href = '"+t+"'",2e3)}).error(function(){(0,n.default)("danger",Translator.trans("失败！"),1)})})}},["93e2cb978d492cfab482"]);