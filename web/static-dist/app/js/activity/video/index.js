webpackJsonp(["app/js/activity/video/index"],{"06597b47670159844043":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("b704ce0ef0c1bec36938"),u=r(s),l=n("17c25dd7d9d2615bc1d9"),f=r(l),d=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.name=e.name,n.project=e.project,n.children=e.children,n.type=e.type,n.setup(),n}return o(t,e),c(t,[{key:"setup",value:function(){var e=this,t=new u.default(this.name,this.project);if("child"==this.type)t.addTarget(window.parent,"parent"),t.addTarget(window.self,"partner");else if("parent"==this.type){t.addTarget(window.self,"child");for(var n=this.children,r=n.length-1;r>=0;r--)t.addTarget(n[r].contentWindow,n[r].id)}t.listen(function(t){t=JSON.parse(t),e.emit(t.eventName,t.args)}),this.messenger=t}},{key:"sendToParent",value:function(e,t){for(var n in this.messenger.targets)this.messenger.targets[n].send(this.convertToString(e,t))}},{key:"sendToChild",value:function(e,t,n){this.messenger.targets[e.id].send(this.convertToString(t,n))}},{key:"convertToString",value:function(e,t){var n={eventName:e,args:t};return n=JSON.stringify(n)}}]),t}(f.default);t.default=d},"3152735b7d14aa57d929":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("c04c1b91e3806f24595a"),c=r(o),s=n("06597b47670159844043"),u=r(s),l=n("da32dea28c2b82c7aab1"),f=r(l),d=function(){function e(t){i(this,e),this.player={},this.intervalId=null,this.recorder=t,this.emitter=new f.default}return a(e,[{key:"play",value:function(){$("#swf-player").length?this._playerSwf():this._playVideo(),this.record()}},{key:"record",value:function(){var e=this;this.intervalId=setInterval(function(){e.recorder.addVideoPlayerCounter(e.emitter,e.player)},1e3)}},{key:"getPlay",value:function(){return this.player}},{key:"_playerSwf",value:function(){c.default.embedSWF($("#swf-player").data("url"),"swf-player","100%","100%","9.0.0",null,null,{wmode:"opaque",allowFullScreen:"true"})}},{key:"_playVideo",value:function(){var e=this,t=new u.default({name:"partner",project:"PlayerProject",children:[],type:"parent"});t.on("ended",function(t){e.player.playing=!1,e._onFinishLearnTask(t)}),t.on("playing",function(t){e.player.playing=!0}),t.on("paused",function(t){e.player.playing=!1,e.recorder.watching(e.emitter)}),t.on("timechange",function(t){e.player.currentTime=t.currentTime})}},{key:"_onFinishLearnTask",value:function(e){var t=this;this.emitter.emit("finish",{data:e}).then(function(){clearInterval(t.intervalId)}).catch(function(e){})}}]),e}();t.default=d},"4f9109757f3c44d0ec12":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("9a49bb678fea4ca10409"),i=n.n(r),a=n("3152735b7d14aa57d929"),o=n.n(a),c=new i.a("#video-content");new o.a(c).play()},"9a49bb678fea4ca10409":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n("d5e8fa5f17ac5fe79c78");var a=function(){function e(t){r(this,e),this.container=t,this.interval=120,this.playerCounter=0,this.activityId=$(this.container).data("id")}return i(e,[{key:"addVideoPlayerCounter",value:function(e,t){var n=store.get("activity_id_"+this.activityId+"_playing_counter");if(n||(this.playerCounter=0),!t||!t.playing)return!1;n>=this.interval?this.watching(e):t.playing&&this.playerCounter++,store.set("activity_id_"+this.activityId+"_playing_counter",this.playerCounter)}},{key:"watching",value:function(e){var t=store.get("activity_id_"+this.activityId+"_playing_counter");e.emit("watching",{watchTime:t}).then(function(){var e=$("#video-content").data("watchUrl");$.post(e,function(e){e&&"error"==e.status&&window.location.reload()})}).catch(function(e){}),this.playerCounter=0}}]),e}();t.default=a},b704ce0ef0c1bec36938:function(e,t){e.exports=function(){function e(e,t,n){var r="";if(arguments.length<2?r="target error - target and name are both required":"object"!=typeof e?r="target error - target itself must be window object":"string"!=typeof t&&(r="target error - target name must be string type"),r)throw new Error(r);this.target=e,this.name=t,this.prefix=n}function t(e,t){this.targets={},this.name=e,this.listenFunc=[],this.prefix=t||n,this.initListen()}var n="[PROJECT_NAME]",r="postMessage"in window;return e.prototype.send=r?function(e){this.target.postMessage(this.prefix+"|"+this.name+"__Messenger__"+e,"*")}:function(e){var t=window.navigator[this.prefix+this.name];if("function"!=typeof t)throw new Error("target callback function is not defined");t(this.prefix+e,window)},t.prototype.addTarget=function(t,n){var r=new e(t,n,this.prefix);this.targets[n]=r},t.prototype.initListen=function(){var e=this,t=function(t){"object"==typeof t&&t.data&&(t=t.data);try{var n=t.split("__Messenger__")}catch(e){return!0}for(var t=n[1],r=n[0].split("|"),i=r[0],a=r[1],o=0;o<e.listenFunc.length;o++)i+a===e.prefix+e.name&&e.listenFunc[o](t)};r?"addEventListener"in document?window.addEventListener("message",t,!1):"attachEvent"in document&&window.attachEvent("onmessage",t):window.navigator[this.prefix+this.name]=t},t.prototype.listen=function(e){for(var t=0,n=this.listenFunc.length,r=!1;t<n;t++)if(this.listenFunc[t]==e){r=!0;break}r||this.listenFunc.push(e)},t.prototype.clear=function(){this.listenFunc=[]},t.prototype.send=function(e){var t,n=this.targets;for(t in n)n.hasOwnProperty(t)&&n[t].send(e)},t}()}},["4f9109757f3c44d0ec12"]);