var MAX_COUNT = 4;

function checkMouseInPage(page) {
    var x;
    var y;
    $(document).mousemove(function(e){ 
        x = e.pageX;
        y = e.pageY; 
   });
    
   //x的值相对于文档的左边缘。y的值相对于文档的上边缘
   //x,y是全局变量;
   //判断鼠标是否在某DIV中
   var div = $("[page='" + page.toString() + "']");
   var y1 = div.offset().top;  //div上面两个的点的y值
   var y2 = y1 + div.height();//div下面两个点的y值
   var x1 = div.offset().left;  //div左边两个的点的x值
   var x2 = x1 + div.width();  //div右边两个点的x的值
    
   if( x < x1 || x > x2 || y < y1 || y > y2) {
       console.log('鼠标不在该DIV中');
       
   }else{
        console.log('鼠标在该DIV中');
   };
}


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
            checkMouseInPage(0);
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
            
        }, 1000);
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
            
        }, 1000);
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
            
        }, 1000);
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
            
        }, 1000);
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