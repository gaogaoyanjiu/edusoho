webpackJsonp(["app/js/activity/download/index"],{"1110e2d3c09436f945ce":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("da32dea28c2b82c7aab1"),c=e.n(i),d=new c.a;$(".download-activity-list").on("click","a",function(){$(this).attr("href",$(this).data("url")),d.emit("finish",{fileId:$(this).data("fileId")})}),$("#download-activity").perfectScrollbar(),$("#download-activity").perfectScrollbar("update")}},["1110e2d3c09436f945ce"]);