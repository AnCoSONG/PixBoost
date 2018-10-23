/* Vaskka 2018-10-23 15:56:50 */



function turn_to_show(page) {
    var bl = $("[page='" + page + "']");
    var ch_css = {
        zIndex: '7',
        top: '0px',
        // transformScale: '1',
        opacity: '1'
    };
    bl.animate(ch_css, 700, "swing", function() {
        var c_css = {
            "z-index": '7',
            "top": '0px',
            "transform": 'scale(1)',
            "opacity": '1'
        };
        bl.css(c_css);
    });


}

function turn_to_up_1(page) {
    var bl = $("[page='" + page + "']");
    var ch_css = {
        zIndex: '6',
        top: '-60px',
        // transformScale: '0.85',
        opacity: '0.85'
    };
    bl.animate(ch_css, 700, "swing", function() {
        var c_css = {
            "z-index": '6',
            "top": '-60px',
            "transform": 'scale(0.85)',
            "opacity": '0.85'
        }
        bl.css(c_css);
    });

}

function turn_to_up_2(page) {
    var bl = $("[page='" + page + "']");
    var ch_css = {
        zIndex: '5',
        top: '-120px',
        // transformScale: '0.7',
        opacity: '0.7'
    };
    bl.animate(ch_css, 700, "swing", function() {
        var c_css = {
            "z-index": '5',
            "top": '-120px',
            "transform": 'scale(0.7)',
            "opacity": '0.7'
        };
        bl.css(c_css);
    });

}

function turn_to_up_3(page) {
    var bl = $("[page='" + page + "']");
    var ch_css = {
        zIndex: '4',
        top: '-180px',
        // transformScale: '0.55',
        opacity: '0.55'
    };
    bl.animate(ch_css, 700, "swing", function() {
        var c_css = {
            "z-index": '4',
            "top": '-180px',
            "transform": 'scale(0.55)',
            "opacity": '0.55'
        };
        bl.css(c_css);
    });

}


function turn_to_down_3(page) {
    var bl = $("[page='" + page + "']");
    var ch_css = {
        zIndex: '1',
        top: '180px',
        // transformScale: '0.55',
        opacity: '0.55'
    };
    bl.animate(ch_css, 700, "swing", function() {
        var c_css = {
            "z-index": '1',
            "top": '180px',
            "transform": 'scale(0.55)',
            "opacity": '0.55'
        };
        bl.css(c_css);
    });

}

function turn_to_down_2(page) {
    var bl = $("[page='" + page + "']");
    var ch_css = {
        zIndex: '2',
        top: '120px',
        // transformScale: '0.7',
        opacity: '0.7'
    };
    bl.animate(ch_css, 700, "swing", function() {
        var c_css = {
            "z-index": '2',
            "top": '120px',
            "transform": 'scale(0.7)',
            "opacity": '0.7'
        };
        bl.css(c_css);
    });

}

function turn_to_down_1(page) {
    var bl = $("[page='" + page + "']");
    var ch_css = {
        zIndex: '3',
        top: '60px',
        // transformScale: '0.85',
        opacity: '0.85'
    };
    bl.animate(ch_css, 700, "swing", function() {
        var c_css = {
            "z-index": '3',
            "top": '60px',
            "transform": 'scale(0.85)',
            "opacity": '0.85'
        };
        bl.css(c_css);     
    });

}

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
    }, 2000);
}



$(document).ready(function(){
        main();
});