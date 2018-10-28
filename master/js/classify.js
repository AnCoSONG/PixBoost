var MAX_COUNT = 4;


/**
 * 主函数
 */
function main() {

    /* 十六边型 */
    // $("div.classify-block").hover(function() {
    //     $("img.n-angle-item-image").css("animation-name", "rotateR");
    //     $("img.n-angle-item-image").css("animation-timing-function", "linear");
    //     $("img.n-angle-item-image").css("animation-iteration-count", "infinite");
    //     $("img.n-angle-item-image").css("animation-duration", "10s");
    // }, function() {
    //     $("img.n-angle-item-image").css("animation-duration", "0s");
    // });

    $("[page='0']").hover(function() {
        // star-line
        for (var i = 1; i <= 3; i++) {
            $("[page='0'] > div.star-show > div.star-line-" + i.toString()).css("animation-name", "front-line-move-" + i.toString());
            $("[page='0'] > div.star-show > div.star-line-" + i.toString()).css("animation-duration", "1s");
            $("[page='0'] > div.star-show > div.star-line-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='0'] > div.star-show > div.star-line-" + i.toString()).css("animation-fill-mode", "forwards");
        }

        // star
        for (var i = 1; i <= 3; i++) {
            $("[page='0'] > div.star-show > div.star-" + i.toString()).css("animation-name", "front-star-move-" + i.toString());
            $("[page='0'] > div.star-show > div.star-" + i.toString()).css("animation-duration", "1s");
            $("[page='0'] > div.star-show > div.star-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='0'] > div.star-show > div.star-" + i.toString()).css("animation-fill-mode", "forwards");
        }


        setTimeout(function() {
            // star-line
            for (var i = 1; i <= 3; i++) {
                $("[page='0'] > div.star-show > div.star-line-" + i.toString()).css("animation-name", "line-move-" + i.toString());
                $("[page='0'] > div.star-show > div.star-line-" + i.toString()).css("animation-duration", "2s");
                $("[page='0'] > div.star-show > div.star-line-" + i.toString()).css("animation-timing-function", "linear");
                $("[page='0'] > div.star-show > div.star-line-" + i.toString()).css("animation-iteration-count", "infinite");
                $("[page='0'] > div.star-show > div.star-line-" + i.toString()).css("animation-fill-mode", "forwards");
            }

            // star
            for (var i = 1; i <= 3; i++) {
                $("[page='0'] > div.star-show > div.star-" + i.toString()).css("animation-name", "star-move-" + i.toString());
                $("[page='0'] > div.star-show > div.star-" + i.toString()).css("animation-duration", "2s");
                $("[page='0'] > div.star-show > div.star-" + i.toString()).css("animation-timing-function", "linear");
                $("[page='0'] > div.star-show > div.star-" + i.toString()).css("animation-iteration-count", "infinite");
                $("[page='0'] > div.star-show > div.star-" + i.toString()).css("animation-fill-mode", "forwards");
            }
            
        }, 1000)
    },
    function() {
        // star-line
        for (var i = 1; i <= 3; i++) {
            $("[page='0'] > div.star-show > div.star-line-" + i.toString()).css("animation-name", "back-star-line-" + i.toString());
            $("[page='0'] > div.star-show > div.star-line-" + i.toString()).css("animation-duration", "1s");
            $("[page='0'] > div.star-show > div.star-line-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='0'] > div.star-show > div.star-line-" + i.toString()).css("animation-fill-mode", "forwards");
            $("[page='0'] > div.star-show > div.star-line-" + i.toString()).css("animation-iteration-count", "1");
        }

        // star
        for (var i = 1; i <= 3; i++) {
            $("[page='0'] > div.star-show > div.star-" + i.toString()).css("animation-name", "back-star-move-" + i.toString());
            $("[page='0'] > div.star-show > div.star-" + i.toString()).css("animation-duration", "1s");
            $("[page='0'] > div.star-show > div.star-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='0'] > div.star-show > div.star-" + i.toString()).css("animation-fill-mode", "forwards");
            $("[page='0'] > div.star-show > div.star-" + i.toString()).css("animation-iteration-count", "1");
        }
    });


    $("[page='1']").hover(function() {
        // star-line
        for (var i = 1; i <= 3; i++) {
            $("[page='1'] > div.star-show > div.star-line-" + i.toString()).css("animation-name", "front-line-move-" + i.toString());
            $("[page='1'] > div.star-show > div.star-line-" + i.toString()).css("animation-duration", "1s");
            $("[page='1'] > div.star-show > div.star-line-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='1'] > div.star-show > div.star-line-" + i.toString()).css("animation-fill-mode", "forwards");
        }

        // star
        for (var i = 1; i <= 3; i++) {
            $("[page='1'] > div.star-show > div.star-" + i.toString()).css("animation-name", "front-star-move-" + i.toString());
            $("[page='1'] > div.star-show > div.star-" + i.toString()).css("animation-duration", "1s");
            $("[page='1'] > div.star-show > div.star-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='1'] > div.star-show > div.star-" + i.toString()).css("animation-fill-mode", "forwards");
        }


        setTimeout(function() {
            // star-line
            for (var i = 1; i <= 3; i++) {
                $("[page='1'] > div.star-show > div.star-line-" + i.toString()).css("animation-name", "line-move-" + i.toString());
                $("[page='1'] > div.star-show > div.star-line-" + i.toString()).css("animation-duration", "2s");
                $("[page='1'] > div.star-show > div.star-line-" + i.toString()).css("animation-timing-function", "linear");
                $("[page='1'] > div.star-show > div.star-line-" + i.toString()).css("animation-iteration-count", "infinite");
                $("[page='1'] > div.star-show > div.star-line-" + i.toString()).css("animation-fill-mode", "forwards");
            }

            // star
            for (var i = 1; i <= 3; i++) {
                $("[page='1'] > div.star-show > div.star-" + i.toString()).css("animation-name", "star-move-" + i.toString());
                $("[page='1'] > div.star-show > div.star-" + i.toString()).css("animation-duration", "2s");
                $("[page='1'] > div.star-show > div.star-" + i.toString()).css("animation-timing-function", "linear");
                $("[page='1'] > div.star-show > div.star-" + i.toString()).css("animation-iteration-count", "infinite");
                $("[page='1'] > div.star-show > div.star-" + i.toString()).css("animation-fill-mode", "forwards");
            }
            
        }, 1000)
    },
    function() {
        // star-line
        for (var i = 1; i <= 3; i++) {
            $("[page='1'] > div.star-show > div.star-line-" + i.toString()).css("animation-name", "back-star-line-" + i.toString());
            $("[page='1'] > div.star-show > div.star-line-" + i.toString()).css("animation-duration", "1s");
            $("[page='1'] > div.star-show > div.star-line-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='1'] > div.star-show > div.star-line-" + i.toString()).css("animation-fill-mode", "forwards");
            $("[page='1'] > div.star-show > div.star-line-" + i.toString()).css("animation-iteration-count", "1");
        }

        // star
        for (var i = 1; i <= 3; i++) {
            $("[page='1'] > div.star-show > div.star-" + i.toString()).css("animation-name", "back-star-move-" + i.toString());
            $("[page='1'] > div.star-show > div.star-" + i.toString()).css("animation-duration", "1s");
            $("[page='1'] > div.star-show > div.star-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='1'] > div.star-show > div.star-" + i.toString()).css("animation-fill-mode", "forwards");
            $("[page='1'] > div.star-show > div.star-" + i.toString()).css("animation-iteration-count", "1");
        }
    });


    $("[page='2']").hover(function() {
        // star-line
        for (var i = 1; i <= 3; i++) {
            $("[page='2'] > div.star-show > div.star-line-" + i.toString()).css("animation-name", "front-line-move-" + i.toString());
            $("[page='2'] > div.star-show > div.star-line-" + i.toString()).css("animation-duration", "1s");
            $("[page='2'] > div.star-show > div.star-line-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='2'] > div.star-show > div.star-line-" + i.toString()).css("animation-fill-mode", "forwards");
        }

        // star
        for (var i = 1; i <= 3; i++) {
            $("[page='2'] > div.star-show > div.star-" + i.toString()).css("animation-name", "front-star-move-" + i.toString());
            $("[page='2'] > div.star-show > div.star-" + i.toString()).css("animation-duration", "1s");
            $("[page='2'] > div.star-show > div.star-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='2'] > div.star-show > div.star-" + i.toString()).css("animation-fill-mode", "forwards");
        }


        setTimeout(function() {
            // star-line
            for (var i = 1; i <= 3; i++) {
                $("[page='2'] > div.star-show > div.star-line-" + i.toString()).css("animation-name", "line-move-" + i.toString());
                $("[page='2'] > div.star-show > div.star-line-" + i.toString()).css("animation-duration", "2s");
                $("[page='2'] > div.star-show > div.star-line-" + i.toString()).css("animation-timing-function", "linear");
                $("[page='2'] > div.star-show > div.star-line-" + i.toString()).css("animation-iteration-count", "infinite");
                $("[page='2'] > div.star-show > div.star-line-" + i.toString()).css("animation-fill-mode", "forwards");
            }

            // star
            for (var i = 1; i <= 3; i++) {
                $("[page='2'] > div.star-show > div.star-" + i.toString()).css("animation-name", "star-move-" + i.toString());
                $("[page='2'] > div.star-show > div.star-" + i.toString()).css("animation-duration", "2s");
                $("[page='2'] > div.star-show > div.star-" + i.toString()).css("animation-timing-function", "linear");
                $("[page='2'] > div.star-show > div.star-" + i.toString()).css("animation-iteration-count", "infinite");
                $("[page='2'] > div.star-show > div.star-" + i.toString()).css("animation-fill-mode", "forwards");
            }
            
        }, 1000)
    },
    function() {
        // star-line
        for (var i = 1; i <= 3; i++) {
            $("[page='2'] > div.star-show > div.star-line-" + i.toString()).css("animation-name", "back-star-line-" + i.toString());
            $("[page='2'] > div.star-show > div.star-line-" + i.toString()).css("animation-duration", "1s");
            $("[page='2'] > div.star-show > div.star-line-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='2'] > div.star-show > div.star-line-" + i.toString()).css("animation-fill-mode", "forwards");
            $("[page='2'] > div.star-show > div.star-line-" + i.toString()).css("animation-iteration-count", "1");
        }

        // star
        for (var i = 1; i <= 3; i++) {
            $("[page='2'] > div.star-show > div.star-" + i.toString()).css("animation-name", "back-star-move-" + i.toString());
            $("[page='2'] > div.star-show > div.star-" + i.toString()).css("animation-duration", "1s");
            $("[page='2'] > div.star-show > div.star-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='2'] > div.star-show > div.star-" + i.toString()).css("animation-fill-mode", "forwards");
            $("[page='2'] > div.star-show > div.star-" + i.toString()).css("animation-iteration-count", "1");
        }
    });


    $("[page='3']").hover(function() {
        // star-line
        for (var i = 1; i <= 3; i++) {
            $("[page='3'] > div.star-show > div.star-line-" + i.toString()).css("animation-name", "front-line-move-" + i.toString());
            $("[page='3'] > div.star-show > div.star-line-" + i.toString()).css("animation-duration", "1s");
            $("[page='3'] > div.star-show > div.star-line-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='3'] > div.star-show > div.star-line-" + i.toString()).css("animation-fill-mode", "forwards");
        }

        // star
        for (var i = 1; i <= 3; i++) {
            $("[page='3'] > div.star-show > div.star-" + i.toString()).css("animation-name", "front-star-move-" + i.toString());
            $("[page='3'] > div.star-show > div.star-" + i.toString()).css("animation-duration", "1s");
            $("[page='3'] > div.star-show > div.star-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='3'] > div.star-show > div.star-" + i.toString()).css("animation-fill-mode", "forwards");
        }


        setTimeout(function() {
            // star-line
            for (var i = 1; i <= 3; i++) {
                $("[page='3'] > div.star-show > div.star-line-" + i.toString()).css("animation-name", "line-move-" + i.toString());
                $("[page='3'] > div.star-show > div.star-line-" + i.toString()).css("animation-duration", "2s");
                $("[page='3'] > div.star-show > div.star-line-" + i.toString()).css("animation-timing-function", "linear");
                $("[page='3'] > div.star-show > div.star-line-" + i.toString()).css("animation-iteration-count", "infinite");
                $("[page='3'] > div.star-show > div.star-line-" + i.toString()).css("animation-fill-mode", "forwards");
            }

            // star
            for (var i = 1; i <= 3; i++) {
                $("[page='3'] > div.star-show > div.star-" + i.toString()).css("animation-name", "star-move-" + i.toString());
                $("[page='3'] > div.star-show > div.star-" + i.toString()).css("animation-duration", "2s");
                $("[page='3'] > div.star-show > div.star-" + i.toString()).css("animation-timing-function", "linear");
                $("[page='3'] > div.star-show > div.star-" + i.toString()).css("animation-iteration-count", "infinite");
                $("[page='3'] > div.star-show > div.star-" + i.toString()).css("animation-fill-mode", "forwards");
            }
            
        }, 1000)
    },
    function() {
        // star-line
        for (var i = 1; i <= 3; i++) {
            $("[page='3'] > div.star-show > div.star-line-" + i.toString()).css("animation-name", "back-star-line-" + i.toString());
            $("[page='3'] > div.star-show > div.star-line-" + i.toString()).css("animation-duration", "1s");
            $("[page='3'] > div.star-show > div.star-line-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='3'] > div.star-show > div.star-line-" + i.toString()).css("animation-fill-mode", "forwards");
            $("[page='3'] > div.star-show > div.star-line-" + i.toString()).css("animation-iteration-count", "1");
        }

        // star
        for (var i = 1; i <= 3; i++) {
            $("[page='3'] > div.star-show > div.star-" + i.toString()).css("animation-name", "back-star-move-" + i.toString());
            $("[page='3'] > div.star-show > div.star-" + i.toString()).css("animation-duration", "1s");
            $("[page='3'] > div.star-show > div.star-" + i.toString()).css("animation-timing-function", "cubic-bezier(.22,-0.08,.27,1.55)");
            $("[page='3'] > div.star-show > div.star-" + i.toString()).css("animation-fill-mode", "forwards");
            $("[page='3'] > div.star-show > div.star-" + i.toString()).css("animation-iteration-count", "1");
        }
    });
}



$(document).ready(function(){
    main();
});