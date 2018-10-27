/**
 * 主函数
 */
function main() {

    $("div.classify-block").hover(function() {
        $("img.n-angle-item-image").css("animation-name", "rotateR");
        $("img.n-angle-item-image").css("animation-timing-function", "linear");
        $("img.n-angle-item-image").css("animation-iteration-count", "infinite");
        $("img.n-angle-item-image").css("animation-duration", "10s");
    }, function() {
        $("img.n-angle-item-image").css("animation-duration", "0s");
    });



}



$(document).ready(function(){
        main();
});