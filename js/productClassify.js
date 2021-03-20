var objClassify;
var mouseInSubClassify = false;
var mouseInTopClassify = false;
$(document).ready(function () {
})
function subClassShow(id) {
    //主分类背景改变
    $(".classifyItem").removeClass("select");
    $("#classifyItem"+id).addClass("select");
    //显示子分类
    $(".classifySub").addClass("hidden");
    var subShow = "#classifySub" + id;
    $(subShow).removeClass("hidden");
}

function subClassShowSelect(id) {
    //alert("subClassShow");
    var filterarray = $.grep(objClassify, function (value) { return value.parentId == id; });
    var strClassifySub = '';
    //strClassifySub = '<div class="fl" style="width:250px">';
    if (filterarray.length > 11)
        strClassifySub = '<div class="fl" style="width:48%">';
    for (var i = 0; i < filterarray.length; i++) {
        var strItem = "";
        strItem += '<div class="subClassifyItem"><label><input type="checkbox"/>'
        strItem += filterarray[i].name;
        strItem += '</label></div>';
        
        if (filterarray[i].classifyId % 1000 == 999) {
            //strClassifySub = strItem + strClassifySub;
        }
        else {
            if (i == 10)
                strClassifySub += '</div><div class="fl" style="width:50%">';
            strClassifySub += strItem;
        }
    }
    if (filterarray.length > 10)
        strClassifySub += '</div>';
    $("#classifySubShow").html(strClassifySub);
}

function subClassShowSelectInit() {
    $(document).ready(function () {
        subClassShowSelect(0);
    });
}
/** 
 * 隐藏子分类
 */
function subClassHide() {
    if (!mouseInSubClassify && !mouseInTopClassify) {
        $(".classifySub").addClass("hidden");
        //清除主分类背景
        $(".classifyItem").removeClass("select");
    }
}
function subClassHideLater() {
    setTimeout(subClassHide, 100);
    needScroll = false;
}
function setMouseInTopClassify() {
    mouseInTopClassify = true;
}
function setMouseOutTopClassify() {
    mouseInTopClassify = false;
    subClassHideLater();
}
function setMouseInSubClassify() {
    mouseInSubClassify = true;
}
function setMouseOutSubClassify() {
    mouseInSubClassify = false;
    subClassHideLater();
}
//div滚动
var needScroll = false;
var needScrollId = "";
var needScrollDirection = 1;
var scrollStart = false;
function scrollBegin() {
    if (!scrollStart) {
        scrollStart = true;
        scroll();
    }
}
function scroll() {
    var top = $("#" + needScrollId).scrollTop();
    if (needScroll) {
        $("#" + needScrollId).scrollTop(top + 3 * needScrollDirection);
        $("#" + needScrollId).prev().children().addClass("enable");
        $("#" + needScrollId).next().addClass("enable");
        if (top == $("#" + needScrollId).scrollTop())
            if (needScrollDirection > 0) {
                $("#" + needScrollId).prev().children().removeClass("enable");
            }
            else {
                $("#" + needScrollId).next().removeClass("enable");
            }
    }
    setTimeout(scroll, 10);
}
function scrollUp(id) {
    needScroll = true;
    needScrollId = id;
    needScrollDirection = 1;
    scrollBegin();
}
function scrollDown(id) {
    needScroll = true;
    needScrollId = id;
    needScrollDirection = -1;
    scrollBegin();
}
function scrollStop() {
    needScroll = false;
    needScrollId = "";
    needScrollDirection = 1;
}

$(document).ready(function () {
    $(".jsstar >li").hover(
        function () { $(this).css({ "background-position": "left bottom" }).prev().trigger("mouseover") },
        function () { $(this).css({ "background-position": "left top" }).prev().trigger("mouseout") })
    .click(function () { alert($(this).attr("title")) });
});
/** 
 * 搜索常用关键词，点击事件
 * @param text 关键词内容
 * @return null
 */
function fillSearchInput(text) {
    $("#inputSearch").val(text);
}

/** 
 * 商品信息缩略图信息，按钮动画
 * @param null
 * @return null
 */
function animalButtonHove(dom) {
    var arrDom = dom.getElementsByTagName("div");
    for (var i = arrDom.length - 1; i >= 0; --i) {
        var arrDomChild = arrDom[i].getElementsByTagName("div");
        for (var j = arrDomChild.length - 1; j >= 0; --j) {
            if (arrDomChild[j].getAttribute('class') == 'button')
                arrDomChild[j].setAttribute('class', 'button vMove');
        }
    }
}
function animalButtonMouseOut(dom) {
    var arrDom = dom.getElementsByTagName("div");
    for (var i = arrDom.length - 1; i >= 0; --i) {
        var arrDomChild = arrDom[i].getElementsByTagName("div");
        for (var j = arrDomChild.length - 1; j >= 0; --j) {
            if (arrDomChild[j].getAttribute('class') == 'button vMove')
                arrDomChild[j].setAttribute('class', 'button');
        }
    }
}
/** 
 * 页码切换
 * @param null
 * @return null
 */
function showPage(url,num) {
    location.href = url + "?pageNum=" + num;
}
/** 商品页
 * tab页切换
 * @param null
 * @return null
 */
function productDetailClicked() {
    $("#tabProdectDetail").addClass("buttonClicked");
    $("#tabProdectComment").removeClass("buttonClicked1");
}

function productCommentClicked() {
    $("#tabProdectDetail").removeClass("buttonClicked");
    $("#tabProdectComment").addClass("buttonClicked1");
}
/** 评论页
 * 五星拖动事件
 * @param null
 * @return null
 */
function starsClicked1(event, objDom) {
    var radio = (event.clientX - getX(objDom) + document.body.scrollLeft)/objDom.offsetWidth;
    var index = -1;
    if (radio > 0.85)
        index = 4;
    else if (radio > 0.67)
        index = 3;
    else if (radio > 0.49)
        index = 2;
    else if (radio > 0.3)
        index = 1;
    else if (radio > 0.1)
        index = 0;
    var arrDom = objDom.children;
    //alert(radio);
    for (var i = 0; i < arrDom.length; ++i) {
        var imgSrc = arrDom[i].src;
        //alert(imgSrc);
        var pos = imgSrc.indexOf(".");
        //alert(imgSrc);
        if (pos != -1) {
            var strLeft = imgSrc.substring(0, pos);
            var strRight = imgSrc.substring(pos, imgSrc.length);
            var leftLen = strLeft.length;
            //alert(strLeft);
            //alert(strRight);
            if (i <= index) {
                if (leftLen < 5 || "_hove" != strLeft.substring(leftLen - 5, leftLen)) {
                    arrDom[i].src = strLeft + "_hove" + strRight;
                }
            }
            else {
                if (leftLen > 5 && "_hove" == strLeft.substring(leftLen - 5, leftLen)) {
                    arrDom[i].src = strLeft.substring(0, leftLen - 5) + strRight;
                }
            }
        }
    }
}
/** 评论页
 * 获取dom的水平位置
 * @param null
 * @return null
 */
function getX(obj) {
    var parObj = obj;
    var left = obj.offsetLeft;
    while (parObj = parObj.offsetParent) {
        left += parObj.offsetLeft;
    }
    return left;
}
/** 评论页
 * 禁止图片移动弹出新的窗口
 * @param null
 * @return null
 */
function imgdragstart() { return false; }
$(document).ready(function () {
    for (i in document.images) document.images[i].ondragstart = imgdragstart;
});