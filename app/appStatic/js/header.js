$(function () {
    var page_heig = $(document).scrollTop();            /* 初始化。用于第一次获取滚动条的高度 */
    var header = $('.header').outerHeight();            /* 获取该元素的高度 */

    $(window).scroll(function() {                       /* 滚动条触发事件 */
        var real_heig = $(document).scrollTop();        /* 事件触发后获取滚动条高度 */

        if (real_heig > header){                    /* 触发后的高度 与 元素的高度对比 */
            $('.header').addClass('hide');          /* True 添加隐藏属性 */
        }else {
            $('.header').removeClass('hide');       /* False 删除隐藏属性 */
        }

        if (real_heig < page_heig){                     /* 触发后的高度 与 上次触发后的高度 */
            $('.header').removeClass('hide');       /* True 删除隐藏属性 */
        }
        page_heig = $(document).scrollTop();            /* 再次获取滚动条的高度，用于下次触发事件后的对比 */

    })