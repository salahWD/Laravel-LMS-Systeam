let q=document.querySelectorAll(".disabled-form");q.forEach(t=>{t.addEventListener("submit",function(e){e.preventDefault()})});let d=0;function m(){let t=$(`#questions-holder > .question[data-order="${d+1}"]`);t.length==0||t.hasClass("no-answer-yet")?$("#forward-ques-btn").addClass("opacity-50"):$("#forward-ques-btn").removeClass("opacity-50"),d<=0?$("#back-ques-btn").addClass("opacity-50"):$("#back-ques-btn").removeClass("opacity-50")}$("#forward-ques-btn").click(function(){let t=$(`#questions-holder > .question[data-order="${d+1}"]`);t.hasClass("no-answer-yet")||r(t.attr("id"))});$("#back-ques-btn").click(function(){d-1==0?(d=0,r("test-intro")):r($(`#questions-holder > .question[data-order="${d-1}"]`).attr("id"))});function r(t){let e=$(`#${t}`);e.removeClass("no-answer-yet");let i=parseInt(e.data("order"));isNaN(i)?(e.hasClass("result")||e.attr("id")=="no-result")&&$("#steps-btns").fadeOut():d=i>0?i:0,m(),e.fadeIn(300).css("display","flex").addClass("active").siblings().each(function(){$(this).removeClass("active"),$(this).fadeOut(300)}),$("#"+t).hasClass("question")&&$("#"+t).data("id")&&($(document).unbind("keypress"),parseInt($("#"+t).data("type"))==3&&$(document).on("keypress",function(n){n.which==13&&$("#"+t).find(".nex-btn").click()}))}$("#intro-btn").one("click",function(){if($(this).data("target")!="end"){let t=$(this).data("target");p(function(){r(t)})}else console.log("::::::: INTRO END :::::::")});var c=0,u=0;function l(t,e=null,i){let n=AnswersRoute,s={id:t};if($("#question-"+t).data("type")==3&&e!=null?(s.form_data=e,n=FormRoute):e!=null&&(s.answers=e),window.submission!=null)s.submission_code=window.submission;else if($(".questions .intro").length==0&&$(".questions .question.no-answer-yet.active").length>0&&$(".questions .question.no-answer-yet.active").data("order")==1)return p(function(){l(t,e,i)});let o=$(`#question-${t} + .question`);o.data("type")==5&&(s.equation_question=o.data("id")),$.ajax({url:n,method:"POST",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:s,success:function(a){if(a!=null){if(a!=null&&a.submission_code!=null&&(window.submission=a.submission_code),a!=null&&a.equation_variables!=null&&b(o,a.equation_variables),a!=null&&a.equation_result!=null&&a.equation_result==!0){let f=$("#question-"+t).data("score");c+=parseInt(f),f&&u++}a!=null&&a.certificate!=null&&a.certificate==!0&&($("#certificate-download").show(),$("#certificate-noti").show()),i=="end"?g(c):r(i)}else console.log("no response")},error:a=>{console.error(a),r(i)}})}function g(t){let e=$(".questions .result").first(),i=[];if(e!=null&&e!=null){if($(`#${e.attr("id")}-score`).text(t),e.data("min-score")!=null&&t<e.data("min-score")&&i.push(__["your score is less then"]+` (${e.data("min-score")}), `+__["try again later"]),e.data("min-percent")!=null&&Math.round(t/v()*100)<Math.trunc(e.data("min-percent"))&&i.push(__["your overall percent is less then"]+` ${Math.trunc(e.data("min-percent"))}%, `+__["try again later"]),console.log(u),console.log(e.data("min-correct")),e.data("min-correct")!=null&&e.data("min-correct")>u&&i.push(__["your overall correct answered questions are less then"]+` ${e.data("min-correct")}, `+__["try again later"]),i.length>0){let n=e.find(".desc").first();e.find(".failed-title").show(),e.find(".success-title").hide(),e.find(".btn-danger").show(),e.find(".btn-primary").hide(),n.html(""),i.forEach(s=>{n.append(`
          <p class="lead text-error">${s}</p>
        `)})}r(e.attr("id"))}else r("no-result")}$(".questions .question.media .nex-btn").each(function(){$(this).click(function(){let t=$(this);t.prop("disabled",!0),setTimeout(function(){t.prop("disabled",!1)},2e3),l($(this).parents(".question").data("id"),null,$(this).data("target"))})});$(".questions .question.form").each(function(){let t=$(this),e=$(this).find(".form");$(this).find(".nex-btn").click(function(){let i=$(this);i.prop("disabled",!0),setTimeout(function(){i.prop("disabled",!1)},2e3);let n=[];if(e.find("input").length>0&&e.find("input").each(function(){$(this).prop("required")==!0&&(["text","textarea"].includes($(this).attr("type"))?$(this).val().length<1&&n.push($(this).attr("id")):$(this).attr("type")=="email"?$(this).val().toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||n.push($(this).attr("id")):$(this).attr("type")=="number"&&(isNaN($(this).val())||$(this).val()<=0)&&n.push($(this).attr("id")))}),n.length==0){let s={};e.find("input[type='radio']:checked,[type='checkbox']:checked,input:not([type='radio']):not([type='checkbox']),select,textarea").each(function(o){s[$(this).data("id")]={id:$(this).data("id"),type:$(this).data("type"),value:$(this).val()}}),l($(this).parents(".question").data("id"),s,$(this).data("target"))}else n.forEach(s=>{document.getElementById(s).classList.add("border-danger")}),t.find(".btns-row .error-box").html("<div class='alert alert-danger'>"+__["required fields are not filled"]+"</div>")}),$(this).find(".btn.skip").first().click(function(){let i=$(this);i.prop("disabled",!0),setTimeout(function(){i.prop("disabled",!1)},2e3),l($(this).parents(".question").data("id"),{},$(this).data("target"))})});$(".questions .question.equation").each(function(){let t=$(this);$(this).find(".nex-btn").click(function(){let e=$(this);e.prop("disabled",!0),setTimeout(function(){e.prop("disabled",!1)},2e3);let i=[];if(!t.find(".answer_val").val().length>0&&i.push(t.attr("id")+"-answer"),i.length==0){let n=t.find("#"+t.attr("id")+"-answer");l($(this).parents(".question").data("id"),[n.val()],$(this).data("target"))}else i.forEach(n=>{document.getElementById(n).classList.add("border-danger")}),t.find(".btns-row .error-box").html("<div class='alert alert-danger'>"+__["required fields are not filled"]+"</div>")}),$(this).find(".btn.skip").first().click(function(){let e=$(this);e.prop("disabled",!0),setTimeout(function(){e.prop("disabled",!1)},2e3),l($(this).parents(".question").data("id"),{},$(this).data("target"))})});$(".answers").each(function(){let t=[];if($(this).data("multi")==1){let e=[];$(this).find(".answer").each(function(){$(this).click(function(){if(t.includes($(this).data("id"))){const i=t.indexOf($(this).data("id")),n=e.indexOf($(this).data("score"));i>-1&&(t.splice(i,1),e.splice(n,1),$(this).removeClass("active"))}else t.push($(this).data("id")),e.push($(this).data("score")),$(this).addClass("active")})}),$(this).siblings(".nex-btn").click(function(){let i=$(this);i.prop("disabled",!0),setTimeout(function(){i.prop("disabled",!1)},2e3);let n=e.reduce((s,o)=>s+o,0);c+=parseInt(n),n>0&&u++,t.length>0&&l($(this).parents(".question").data("id"),t,$(this).data("target"))})}else $(this).find(".answer").each(function(){$(this).on("click",function(){h($(this))})})});function h(t,e){c+=parseInt(t.data("score")),t.data("score")>0&&u++,t.data("id")!=null&&l(t.parents(".question").data("id"),[t.data("id")],t.data("target")),t.off("click"),setTimeout(function(){t.on("click",function(){h(t)}),console.log("after timeout")},2e3)}function v(){let t=0;return $(".questions .answers").each(function(){if($(this).data("multi")==1)$(this).find(".answer").each(function(){$(this).data("score")>0&&(t+=$(this).data("score"))});else{let e=0;$(this).find(".answer").each(function(){$(this).data("score")>e&&(e=$(this).data("score"))}),t+=e}}),t}function p(t=null){let e={test_id:testId},i=$(".intro + .question");i.data("type")==5&&(e.equation_question=i.data("id")),$.ajax({method:"POST",url:submissionRoute,data:e,headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(n){n.submission!=null&&(window.submission=n.submission),n!=null&&n.equation_variables!=null&&b(i,n.equation_variables),t!=null&&t()},error:n=>console.error(n)})}function b(t,e){let i=t.find(".question-desc"),n=i.text(),s=new Set(n.match(/\[[^\s]+\]/g));s!=null&&s.size>0&&(s.forEach(o=>{e[o]!=null&&e[o]!="undefined"&&(n=n.replaceAll(o,e[o]))}),i.text(n))}