/** 
 * 弹出窗口
 */
function showWin(winId) {
    $(".m-layer").removeClass("z-show");
    $("#" + winId).addClass("z-show");
}
function hideWin(winId) {
    $("#" + winId).removeClass("z-show");
}
function alertWin(msg) {
    $("#diyAlertContent").html(msg);
    showWin("winAlert");
}
/** 
 * 全选 反选
 */
function selectAll() {
    $('input:checkbox').each(function () {
        $(this).attr('checked', true);
    });
}
function selectInverse() {
    $('input:checkbox').each(function () {
        $(this).attr('checked', !$(this).attr('checked'));
    });
}
/** 
 * 发送验证码
 */
var sendVcodeClicked = false;
var sendVcodeClickedDuration = 30;
function allowSendVcodeClicked() {
    if (sendVcodeClickedDuration > 0) {
        --sendVcodeClickedDuration;
        $("#spanTimeLeft").html(sendVcodeClickedDuration);
        setTimeout(allowSendVcodeClicked, 1000 * 1);
    }
    else {
        sendVcodeClickedDuration = 30;
        sendVcodeClicked = false;
        $("#buttonSendVcode").css("display", "inline-block");
        $("#sendVcodeTip").css("display", "none");
    }
}
function sendVcode(name, payValidateType) {
    if (!sendVcodeClicked) {
        $.post($("#urlSendVcode").val(), { "name": name, "type": payValidateType });
        sendVcodeClicked = true;
        $("#buttonSendVcode").css("display", "none");
        $("#sendVcodeTip").css("display", "inline-block");
    }
    setTimeout(allowSendVcodeClicked, 1000 * 1);
}
//post 方式提交数据，返回页面
function postForm(URL, PARAMS) {
    var temp_form = window.document.createElement("form");
    temp_form.action = URL;
    //temp_form.target = "_blank";
    temp_form.method = "post";
    temp_form.style.display = "none";
    for (var x in PARAMS) {
        var opt = document.createElement("textarea");
        opt.name = x;
        opt.value = PARAMS[x];
        temp_form.appendChild(opt);
    }
    document.body.appendChild(temp_form);
    temp_form.submit();
    return temp_form;
}