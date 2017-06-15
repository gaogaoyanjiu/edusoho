webpackJsonp(["app/js/course-manage/marketing/index"],{"1dd3c6f89866f052a53c":function(e,i){function a(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}var t=function(){function e(e,i){for(var a=0;a<i.length;a++){var t=i[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(i,a,t){return a&&e(i.prototype,a),t&&e(i,t),i}}();new(function(){function e(){a(this,e),this.validator=null,this.init()}return t(e,[{key:"init",value:function(){this.initDatePicker("#expiryStartDate"),this.initDatePicker("#expiryEndDate"),this.initDatePicker("#deadline"),this.initValidator(),this.initExpiryMode(),this.initenableBuyExpiry(),this.taskPriceSetting(),this.checkBoxChange(),this.initDatetimepicker(),this.setService()}},{key:"setService",value:function(){$(".js-service-item").click(function(e){var i=$(e.currentTarget),a=$("#course_services").val(),t=void 0;t=a?JSON.parse(a):[],i.hasClass("label-primary")?(i.removeClass("label-primary").addClass("label-default"),t.splice(t.indexOf(i.data("code")),1)):(i.removeClass("label-default").addClass("label-primary"),t.push(i.data("code"))),$("#course_services").val(JSON.stringify(t))})}},{key:"initDatetimepicker",value:function(){var e=this;$('input[name="buyExpiryTime"]').datetimepicker({format:"yyyy-mm-dd",language:"zh",minView:2,autoclose:!0}).on("hide",function(){e.validator&&e.validator.form()}),this.updateDatetimepicker()}},{key:"initValidator",value:function(){var e=this,i=$("#course-marketing-form");$(".js-task-price-setting").perfectScrollbar(),this.validator=i.validate({groups:{date:"expiryStartDate expiryEndDate"},rules:{originPrice:{required:function(){return 0==$("[name=isFree]:checked").val()},positive_currency:function(){return 0==$("[name=isFree]:checked").val()}},watchLimit:{digits:!0}},messages:{buyExpiryTime:{required:"请选择有效的加入截止日期",date:"请选择有效的加入截止日期"}}}),$("#course-submit").click(function(a){e.validator&&e.validator.form()&&($(a.currentTarget).button("loading"),i.submit())})}},{key:"updateDatetimepicker",value:function(){$('input[name="buyExpiryTime"]').datetimepicker("setStartDate",new Date(Date.now())),$('input[name="buyExpiryTime"]').datetimepicker("setEndDate",new Date(Date.now()+31536e7))}},{key:"checkBoxChange",value:function(){var e=this;$('input[name="buyable"]').on("change",function(i){0==$('input[name="buyable"]:checked').val()?($(".js-course-add-close-show").removeClass("hidden"),$(".js-course-add-open-show").addClass("hidden")):($(".js-course-add-close-show").addClass("hidden"),$(".js-course-add-open-show").removeClass("hidden")),e.initenableBuyExpiry()}),$('input[name="enableBuyExpiryTime"]').on("change",function(i){0==$('input[name="enableBuyExpiryTime"]:checked').val()?$("#buyExpiryTime").addClass("hidden"):($("#buyExpiryTime").removeClass("hidden"),e.updateDatetimepicker()),e.initenableBuyExpiry()}),$('input[name="deadlineType"]').on("change",function(i){"end_date"==$('input[name="deadlineType"]:checked').val()?($("#deadlineType-date").removeClass("hidden"),$("#deadlineType-days").addClass("hidden")):($("#deadlineType-date").addClass("hidden"),$("#deadlineType-days").removeClass("hidden")),e.initExpiryMode()}),$('input[name="expiryMode"]').on("change",function(i){"date"==$('input[name="expiryMode"]:checked').val()?($("#expiry-days").removeClass("hidden").addClass("hidden"),$("#expiry-date").removeClass("hidden")):"days"==$('input[name="expiryMode"]:checked').val()?($("#expiry-date").removeClass("hidden").addClass("hidden"),$("#expiry-days").removeClass("hidden")):($("#expiry-date").removeClass("hidden").addClass("hidden"),$("#expiry-days").removeClass("hidden").addClass("hidden")),e.initExpiryMode()}),$('input[name="isFree"]').on("change",function(e){0==$('input[name="isFree"]:checked').val()?$(".js-is-free").removeClass("hidden"):$(".js-is-free").addClass("hidden")}),$('input[name="tryLookable"]').on("change",function(e){1==$('input[name="tryLookable"]:checked').val()?$(".js-enable-try-look").removeClass("hidden"):$(".js-enable-try-look").addClass("hidden")}),$('input[name="showServices"]').on("change",function(e){1==$('input[name="showServices"]:checked').val()?$(".js-services").removeClass("hidden"):$(".js-services").addClass("hidden")})}},{key:"taskPriceSetting",value:function(){$(".js-task-price-setting").on("click","li",function(e){var i=$(this).toggleClass("open"),a=i.find("input");a.prop("checked",!a.is(":checked"))}),$(".js-task-price-setting").on("click","input",function(e){e.stopPropagation(),$(this).closest("li").toggleClass("open")})}},{key:"initDatePicker",value:function(e){var i=this,a=$(e);a.datetimepicker({format:"yyyy-mm-dd",language:"zh",minView:2,autoclose:!0,endDate:new Date(Date.now()+31536e7)}).on("hide",function(){i.validator.form()}),a.datetimepicker("setStartDate",new Date)}},{key:"initenableBuyExpiry",value:function(){var e=$('[name="enableBuyExpiryTime"]:checked'),i=$('[name="buyable"]:checked'),a=$('[name="buyExpiryTime"]');1==i.val()&&1==e.val()?this.elementAddRules(a,this.getBuyExpiryTimeRules()):this.elementRemoveRules(a),this.validator.form()}},{key:"initExpiryMode",value:function(){var e=$('[name="deadline"]'),i=$('[name="expiryDays"]'),a=$('[name="expiryStartDate"]'),t=$('[name="expiryEndDate"]'),n=$('[name="expiryMode"]:checked').val();switch(this.elementRemoveRules(e),this.elementRemoveRules(i),this.elementRemoveRules(a),this.elementRemoveRules(t),n){case"days":if("end_date"===$('[name="deadlineType"]:checked').val())return this.elementAddRules(e,this.getDeadlineEndDateRules()),void this.validator.form();this.elementAddRules(i,this.getExpiryDaysRules()),this.validator.form();break;case"date":this.elementAddRules(a,this.getExpiryStartDateRules()),this.elementAddRules(t,this.getExpiryEndDateRules()),this.validator.form();break;default:this.validator.form()}}},{key:"getBuyExpiryTimeRules",value:function(){return{required:!0,messages:{required:Translator.trans("请输入加入截止日期!")}}}},{key:"getExpiryEndDateRules",value:function(){return{required:!0,date:!0,after_date:"#expiryStartDate",messages:{required:Translator.trans("请输入结束日期!")}}}},{key:"getExpiryStartDateRules",value:function(){return{required:!0,date:!0,before_date:"#expiryEndDate",messages:{required:Translator.trans("请输入开始日期!")}}}},{key:"getExpiryDaysRules",value:function(){return{required:!0,positive_integer:!0,max_year:!0,messages:{required:Translator.trans("请输入有效期天数")}}}},{key:"getDeadlineEndDateRules",value:function(){return{required:!0,date:!0,messages:{required:Translator.trans("请输入截至日期!")}}}},{key:"elementAddRules",value:function(e,i){e.rules("add",i)}},{key:"elementRemoveRules",value:function(e){e.rules("remove")}}]),e}())}},["1dd3c6f89866f052a53c"]);