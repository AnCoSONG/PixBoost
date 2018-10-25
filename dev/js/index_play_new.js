
/**
 * 初始化动画
 */
function init_shower() {
    // 主显示none
    $("main").css("display", "none");

    // 设置背景
    $("div.pre-show").css("background-color", "#333333");
    // 设置画布宽高
    $("div.pre-show").css("width", $(window).width().toString() + "px");
    $("div.pre-show").css("height", $(window).height().toString() + "px");



}

/**
 * 动画结束
 */
function after_show() {

        $(".point-left").css("opacity", "1");
        $(".point-right").css("opacity", "1");
        $("img.hi-body-img").css("opacity", "1");
        $(".show-logo").css("opacity", "1");

        $("main").css("opacity", "0");

        $("main").css("display", "block");


        $("div.pre-show").animate({
            opacity: "0",
        }, "normal", "swing", function() {
            $("div.pre-show").css("display", "none");

            $("main").animate({
                opacity: "1"
            }, "normal", "swing");



        });


}

/**
 * 主函数
 */
function main() {
    $("div.ppt-itme-1").css("height", $(window).height().toString() + "px");
    $("div.ppt-itme-2").css("height", $(window).height().toString() + "px");
    $("div.ppt-itme-3").css("height", $(window).height().toString() + "px");
    init_shower();

    setTimeout(function () {
        after_show();
    }, 7500);

}


$(document).ready(function(){
        main();
});