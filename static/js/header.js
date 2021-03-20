$(function () {
    //头部导航鼠标悬停效果
    $(".nav-ul").children().mouseover(function () {
        // console.log(11);
        if(!$(this).hasClass("nav-active")){
            $(this).addClass("nav-active").siblings().removeClass("nav-active");
            if($(this).hasClass("serve")){
                console.log($(".subnav"));
                $(".subnav").removeClass('hidden').addClass("show");
                $("#serve").children().mouseover(function () {
                    if(!$(this).hasClass("subnav-active")){
                        $(this).addClass("subnav-active").siblings().removeClass("subnav-active");
                    }
                })
            }else{
                $(".subnav").removeClass('show').addClass("hidden");
            }

        }
    })
    $("#serve").children().mouseover(function () {
        if(!$(this).hasClass("subnav-active")){
            $(this).addClass("subnav-active").siblings().removeClass("subnav-active");
        }
    })
})