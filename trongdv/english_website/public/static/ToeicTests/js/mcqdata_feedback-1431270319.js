var SHORT_FB_ERROR_MSG="N\u1ed9i dung c\u1ee7a b\u1ea1n c\u1ea7n c\u00f3 \u00edt nh\u1ea5t 10 k\u00ed t\u1ef1",SHORT_NOTES_ERROR_MSG="Ghi ch\u00fa c\u1ee7a b\u1ea1n c\u1ea7n c\u00f3 \u00edt nh\u1ea5t 10 k\u00ed t\u1ef1";$(document).ready(function(){$(document).on("click",".mcq-feedback-button",function(){var a=$(this);$(".mcq-feedback-dialog").dialog({show:"slide",hide:"puff",width:"60%",buttons:{"G\u1eedi c\u00e2u h\u1ecfi":function(){10>$(".mcq-feedback-dialog .mcq-feedback-content textarea").val().length?$(".mcq-feedback-content .error").html(SHORT_FB_ERROR_MSG):($(this).dialog("close"),goToClassByScroll("quiz-header"),sendFeedbackToServer(a),setTimeout(function(){$(".mcq-feedback-thank-you").show().effect("pulsate","slow")},500),setTimeout(function(){$(".mcq-feedback-thank-you").hide()},1500))},"H\u1ee7y":function(){$(".mcq-feedback-content .error").html("");$(".mcq-feedback-dialog .mcq-feedback-content textarea").val("");$(this).dialog("close");goToClassByScroll("quiz-header")}}})});$(".mcq-notes-button").click(function(){$(".mcq-notes-dialog").dialog({show:"slide",hide:"puff",width:"60%",buttons:{"T\u1ea1o ghi ch\u00fa":function(){10>$(".mcq-notes-dialog .mcq-notes-content textarea").val().length?$(".mcq-notes-content .error").html(SHORT_NOTES_ERROR_MSG):sendNotesToServer($(this))},"H\u1ee7y":function(){$(".mcq-notes-content .error").html("");$(".mcq-notes-dialog .mcq-notes-content textarea").val("");$(this).dialog("close");goToClassByScroll("quiz-header")}}})})});function sendFeedbackToServer(a){var b=a.attr("data-mcqid");a=a.attr("data-type");var c=$(".mcq-feedback-dialog .mcq-feedback-content textarea").val();$.ajax({url:"/questions/submit-mcq-question/",type:"POST",dataType:"json",data:{questionID:b,dataType:a,mcqFeedbackContent:c},success:function(a){null==a.error?($(".mcq-feedback-content .error").html(""),$(".mcq-feedback-dialog .mcq-feedback-content textarea").val("")):$(".mcq-feedback-content .error").html(a.error)},error:function(a,b,f){}})}
function sendNotesToServer(a){console.log("Send notes to server");var b=$(".mcq-notes-button").attr("id").replace("notes-",""),c=$(".mcq-notes-button").attr("data-type"),d=$(".mcq-notes-button").attr("data-testid"),e=$(".mcq-notes-dialog .mcq-notes-content textarea").val();b={questionID:b,dataType:c,notesContent:e,pTestResultId:d};console.log("dataAjax");console.log(b);$.ajax({url:"/notes/save/",type:"POST",dataType:"json",data:b,success:function(b){console.log("Return success");null==b.error?($(".mcq-notes-dialog .mcq-notes-content textarea").val(),$(".mcq-notes-content .error").html(""),$(".mcq-notes-dialog .mcq-notes-content textarea").val(""),setTimeout(function(){$(".mcq-notes-success").show().effect("pulsate","slow")},500),setTimeout(function(){$(".mcq-notes-success").hide()},1500),a.dialog("close"),goToClassByScroll("quiz-header")):$(".mcq-notes-content .error").html(b.error)},error:function(a,b,c){console.log("Return error")}})};