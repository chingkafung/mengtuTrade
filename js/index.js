$(document).ready(function () {
    //$(".fillOrderbutton").click(function () { sureBuyClicked(); });
    //关联下拉列表
    $(".alpha").click(function () {
        if (!$(this).hasClass("notSelect")) {
            $(".alpha").each(function () {
                $(this).removeClass("select");
            });
            $(this).addClass("select");
            //列表显隐
            $(".gameItemContainer").each(function () {
                $(this).addClass("hidden");
            });
            $("#gameItemContainer"+$(this).attr("data")).removeClass("hidden");
        }
    });
})