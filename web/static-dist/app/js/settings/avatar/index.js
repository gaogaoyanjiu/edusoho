webpackJsonp(["app/js/settings/avatar/index"],{0:function(t,a){t.exports=jQuery},"7f2eb8fe298d75a46e47":function(t,a,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=e("0f84c916401868c4758e"),r=n(o),c=e("b334fd7e4c5a19234db2"),u=n(c);new r.default({element:"#upload-picture-btn",onUploadSuccess:function(t,a){var e=$("#upload-picture-btn").data("gotoUrl");(0,u.default)("success",Translator.trans("上传成功！"),1),document.location.href=e}}),$(".use-partner-avatar").on("click",function(){var t=$(this),a=t.data("goto");$.post(t.data("url"),{imgUrl:t.data("imgUrl")},function(){window.location.href=a})})}},["7f2eb8fe298d75a46e47"]);