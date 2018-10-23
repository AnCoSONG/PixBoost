/* Vaskka 2018-10-23 15:56:50 */


/**
 * 展示页
 * @param {String} page 
 */
function turn_to_show(page) {
    var bl = $("[page='" + page + "']");
    var ch_css = {
        zIndex: '7',
        top: '0px',
        opacity: '1'
    };
    bl.animate(ch_css, 1000, "swing", function() {
        var c_css = {
            "z-index": '7',
            "top": '0px',
            "transform": 'scale(1)',
            "opacity": '1'
        };
        bl.css(c_css);
    });


}


/**
 * 展示下一层
 * @param {String} page 
 */
function turn_to_up_1(page) {
    var bl = $("[page='" + page + "']");
    var ch_css = {
        zIndex: '6',
        top: '-60px',
        opacity: '0.61'
    };
    bl.animate(ch_css, 1000, "swing", function() {
        var c_css = {
            "z-index": '6',
            "top": '-60px',
            "transform": 'scale(0.85)',
            "opacity": '0.61'
        }
        bl.css(c_css);
    });

}


/**
 * 展示下二层
 * @param {String} page 
 */
function turn_to_up_2(page) {
    var bl = $("[page='" + page + "']");
    var ch_css = {
        zIndex: '5',
        top: '-120px',
        opacity: '0.52'
    };
    bl.animate(ch_css, 1000, "swing", function() {
        var c_css = {
            "z-index": '5',
            "top": '-120px',
            "transform": 'scale(0.7)',
            "opacity": '0.52'
        };
        bl.css(c_css);
    });

}


/**
 * 展示下三层
 * @param {String} page 
 */
function turn_to_up_3(page) {
    var bl = $("[page='" + page + "']");
    var ch_css = {
        zIndex: '4',
        top: '-180px',
        opacity: '0.42'
    };
    bl.animate(ch_css, 1000, "swing", function() {
        var c_css = {
            "z-index": '4',
            "top": '-180px',
            "transform": 'scale(0.55)',
            "opacity": '0.42'
        };
        bl.css(c_css);
    });

}


/**
 * 展示前三层
 * @param {String} page 
 */
function turn_to_down_3(page) {
    var bl = $("[page='" + page + "']");
    var ch_css = {
        zIndex: '1',
        top: '180px',
        opacity: '0.42'
    };
    bl.animate(ch_css, 1000, "swing", function() {
        var c_css = {
            "z-index": '1',
            "top": '180px',
            "transform": 'scale(0.55)',
            "opacity": '0.42'
        };
        bl.css(c_css);
    });

}


/**
 * 展示前二层
 * @param {String}} page 
 */
function turn_to_down_2(page) {
    var bl = $("[page='" + page + "']");
    var ch_css = {
        zIndex: '2',
        top: '120px',
        opacity: '0.52'
    };
    bl.animate(ch_css, 1000, "swing", function() {
        var c_css = {
            "z-index": '2',
            "top": '120px',
            "transform": 'scale(0.7)',
            "opacity": '0.52'
        };
        bl.css(c_css);
    });

}


/**
 * 展示前一层
 * @param {String} page 
 */
function turn_to_down_1(page) {
    var bl = $("[page='" + page + "']");
    var ch_css = {
        zIndex: '3',
        top: '60px',
        opacity: '0.61'
    };
    bl.animate(ch_css, 1000, "swing", function() {
        var c_css = {
            "z-index": '3',
            "top": '60px',
            "transform": 'scale(0.85)',
            "opacity": '0.61'
        };
        bl.css(c_css);     
    });

}


/**
 * 根据z-index的值判断应该变换到什么层
 * @param {String} z_index 
 * @param {int} current_page 
 */
function turn_to_status(z_index, current_page) {
    switch (z_index) {
        case "1":
            turn_to_down_3(current_page.toString());
            break;
        case "2":
            turn_to_down_2(current_page.toString());
            break;
        case "3":
            turn_to_down_1(current_page.toString());
            break;
        case "4":
            turn_to_up_3(current_page.toString());
            break;
        case "5":
            turn_to_up_2(current_page.toString());
            break;
        case "6":
            turn_to_up_1(current_page.toString());
            break;
        case "7":
            turn_to_show(current_page.toString());
            break;
    }
}


/**
 * 更改当前状态到下一状态
 */
function changeStatus() {
    var status = $("[page='0']").css("z-index")
    for (var i = 0; i < 7; i++) {
        // 自己赋值下一个page的状态
        if (i != 6) {
            var next_status = $("[page='" + (i + 1).toString() + "']").css("z-index")
            turn_to_status(next_status, i);
        }
        else {
            turn_to_status(status, i);
        }
        
    }
}

/**
 * 主函数
 */
function main() {
    setInterval(function () {
        changeStatus();
    }, 2200);
}



$(document).ready(function(){
        main();
});