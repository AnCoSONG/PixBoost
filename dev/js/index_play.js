
/**
 * 初始化动画
 */
function init_shower() {
    // 主显示none
    $("nav.navabr").css("display", "none");
    $("main.main-content").css("display", "none");

    // 设置背景
    $("div.pre-show").css("background-color", "#333333");
    // 设置画布宽高
    $("div.pre-show").css("width", $(window).width());
    $("div.pre-show").css("height", $(window).height());

}

/**
 * 动画结束
 */
function after_show() {

        $(".point-left").css("opacity", "1");
        $(".point-right").css("opacity", "1");
        $("img.hi-body-img").css("opacity", "1");
        $(".show-logo").css("opacity", "1");

        $("nav.navabr").css("opacity", "0");
        $("main.main-content").css("opacity", "0");
        $("nav.navabr").css("display", "block");
        $("main.main-content").css("display", "block");

        $("div.pre-show").animate({
            opacity: "0",
        }, "normal", "swing", function() {
            $("div.pre-show").css("display", "none");
            $("nav.navabr").animate({
                opacity: "1"
            }, "normal", "swing");
            $("main.main-content").animate({
                opacity: "1"
            }, "normal", "swing");
        });


}

/**
 * 主函数
 */
function main() {
    init_shower();

    setTimeout(function () {
        after_show();
    }, 7500);

}


$(document).ready(function(){
        main();
});