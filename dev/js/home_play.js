// 幻灯片张数
var ITEM_COUNT = 5;
// 记录点按状态
var STATUS = new Array(ITEM_COUNT);
// 初始化为0 (未被点，其他为已经被点)
for (var i = 0; i < ITEM_COUNT; i++) {
    this.STATUS[i] = 0;
}

/**
 * Context 对象构造函数，记录幻灯片逻辑基础参数
 */
function Context() {
    // 获取父屏宽度
    this.main_width = $("div.ppt-fix").width();
    
    // 间隔宽为父元素3%
    this.inner_padding = this.main_width * 0.03;
    
    // 静默宽度和点按宽度为计算值
    this.origal_width = (this.main_width - (ITEM_COUNT + 1) * this.inner_padding) / (ITEM_COUNT + 2);
    this.active_width = this.main_width - (ITEM_COUNT + 1) * this.inner_padding;

}


/**
 * 初始化
 */
function init(context) {

    // 设置宽度
    $("#i1").css("width", context.origal_width.toString() + "px");
    $("#i2").css("width", context.origal_width.toString() + "px");
    $("#i3").css("width", context.origal_width.toString() + "px");
    $("#i4").css("width", context.origal_width.toString() + "px");
    $("#i5").css("width", context.origal_width.toString() + "px");
    
    // 设置静默偏移
    $("#i1").css("left",  (1 * context.inner_padding + 1 * context.origal_width).toString() + "px");
    $("#i2").css("left",  (2 * context.inner_padding + 2 * context.origal_width).toString() + "px");
    $("#i3").css("left",  (3 * context.inner_padding + 3 * context.origal_width).toString() + "px");
    $("#i4").css("left",  (4 * context.inner_padding + 4 * context.origal_width).toString() + "px");
    $("#i5").css("left",  (5 * context.inner_padding + 5 * context.origal_width).toString() + "px");
}

/**
 * 幻灯片切换逻辑
 * @param {Context} context 记录幻灯片逻辑基础参数
 */
function main(context) {

    $("a.img-item-1").click(function() {
        if (STATUS[0] == 0) {
            // 覆盖状态
            for (var i = 0; i < ITEM_COUNT; i++) {
                if (i != 0) {
                    STATUS[i] = 0;
                }
                else {
                    STATUS[i] = 1;
                }
            }
            // 未被点按过则展开
            $("#i1").animate({
                left: (1 * context.inner_padding).toString() + "px",
                width: context.active_width.toString() + "px",
                zIndex: "5"
            });
            $("#i2").animate({
                left: (context.inner_padding + context.active_width + 1 * context.inner_padding - context.origal_width).toString() + "px",
                width: context.origal_width,
                zIndex: "4"
            });
            $("#i3").animate({
                left: (context.inner_padding + context.active_width + 2 * context.inner_padding - context.origal_width).toString() + "px",
                width: context.origal_width,
                zIndex: "3"
            });
            $("#i4").animate({
                left: (context.inner_padding + context.active_width + 3 * context.inner_padding - context.origal_width).toString() + "px",
                width: context.origal_width,
                zIndex: "2"
            });
            $("#i5").animate({
                left: (context.inner_padding + context.active_width + 4 * context.inner_padding - context.origal_width).toString() + "px",
                width: context.origal_width,
                zIndex: "1"
            });
    
        }
        else {
            // 已被点按过则恢复静默
            for (var i = 0; i < ITEM_COUNT; i++) {
                    STATUS[i] = 0;
            }
            back_to_silence(context);
        }
       
    });
    $("a.img-item-2").click(function() {
        if (STATUS[1] == 0) {
            // 覆盖状态
            for (var i = 0; i < ITEM_COUNT; i++) {
                if (i != 1) {
                    STATUS[i] = 0;
                }
                else {
                    STATUS[i] = 1;
                }
            }
            // 未被点按过则展开
            $("#i1").animate({
                left: (1 *context.inner_padding).toString() + "px",
                width: context.origal_width,
                zIndex: "4"
            });
            $("#i2").animate({
                left: (2 * context.inner_padding).toString() + "px",
                width: context.active_width.toString() + "px",
                zIndex: "5"
            });
            $("#i3").animate({
                left: (context.inner_padding + context.active_width + 2 * context.inner_padding - context.origal_width).toString() + "px",
                width: context.origal_width,
                zIndex: "3"
            });
            $("#i4").animate({
                left: (context.inner_padding + context.active_width + 3 * context.inner_padding - context.origal_width).toString() + "px",
                width: context.origal_width,
                zIndex: "2"
            });
            $("#i5").animate({
                left: (context.inner_padding + context.active_width + 4 * context.inner_padding - context.origal_width).toString() + "px",
                width: context.origal_width,
                zIndex: "1"
            });
        }
        else {
            // 已被点按过则恢复静默
            for (var i = 0; i < ITEM_COUNT; i++) {
                STATUS[i] = 0;

            }
            back_to_silence(context);
        }

        

    });
    $("a.img-item-3").click(function() {

        if (STATUS[2] == 0) {
            // 覆盖状态
            for (var i = 0; i < ITEM_COUNT; i++) {
                if (i != 2) {
                    STATUS[i] = 0;
                }
                else {
                    STATUS[i] = 1;
                }
            }
            // 未被点按过则展开
            $("#i1").animate({
                left: (1 *context.inner_padding).toString() + "px",
                width: context.origal_width,
                zIndex: "3"
            });
            $("#i2").animate({
                left: (2 * context.inner_padding).toString() + "px",
                width: context.origal_width,
                zIndex: "4"
            });
            $("#i3").animate({
                left: (3 * context.inner_padding).toString() + "px",
                width: context.active_width.toString() + "px",
                zIndex: "5"
            });
            $("#i4").animate({
                left: (context.inner_padding + context.active_width + 3 * context.inner_padding - context.origal_width).toString() + "px",
                width: context.origal_width,
                zIndex: "2"
            });
            $("#i5").animate({
                left: (context.inner_padding + context.active_width + 4 * context.inner_padding - context.origal_width).toString() + "px",
                width: context.origal_width,
                zIndex: "1"
            });
        }
        else {
            // 已被点按过则恢复静默
            for (var i = 0; i < ITEM_COUNT; i++) {
                STATUS[i] = 0;
            }
            back_to_silence(context);
        }
    });
    $("a.img-item-4").click(function() {

        if (STATUS[3] == 0) {
            // 覆盖状态
            for (var i = 0; i < ITEM_COUNT; i++) {
                if (i != 3) {
                    STATUS[i] = 0;
                }
                else {
                    STATUS[i] = 1;
                }
            }
            // 未被点按过则展开
            $("#i1").animate({
                left: (1 *context.inner_padding).toString() + "px",
                width: context.origal_width,
                zIndex: "3"
            });
            $("#i2").animate({
                left: (2 * context.inner_padding).toString() + "px",
                width: context.origal_width,
                zIndex: "4"
            });
            $("#i3").animate({
                left: (3 * context.inner_padding).toString() + "px",
                width: context.origal_width,
                zIndex: "5"
            });
            $("#i4").animate({
                left: (4 * context.inner_padding).toString() + "px",
                width: context.active_width.toString() + "px",
                zIndex: "5"
            });
            $("#i5").animate({
                left: (context.inner_padding + context.active_width + 4 * context.inner_padding - context.origal_width).toString() + "px",
                width: context.origal_width,
                zIndex: "1"
            });
        }
        else {
            // 已被点按过则恢复静默
            for (var i = 0; i < ITEM_COUNT; i++) {
                STATUS[i] = 0;
            }
            back_to_silence(context);
        }

    });
    $("a.img-item-5").click(function() {

        if (STATUS[4] == 0) {
            // 覆盖状态
            for (var i = 0; i < ITEM_COUNT; i++) {
                if (i != 4) {
                    STATUS[i] = 0;
                }
                else {
                    STATUS[i] = 1;
                }
            }
            // 未被点按过则展开
            $("#i1").animate({
                left: (1 *context.inner_padding).toString() + "px",
                width: context.origal_width,
                zIndex: "1"
            });
            $("#i2").animate({
                left: (2 * context.inner_padding).toString() + "px",
                width: context.origal_width,
                zIndex: "2"
            });
            $("#i3").animate({
                left: (3 * context.inner_padding).toString() + "px",
                width: context.origal_width,
                zIndex: "3"
            });
            $("#i4").animate({
                left: (4 * context.inner_padding).toString() + "px",
                width: context.origal_width,
                zIndex: "4"
            });
            $("#i5").animate({
                left: (5 * context.inner_padding).toString() + "px",
                width: context.active_width.toString() + "px",
                zIndex: "5"
            });
        }
        else {
            // 已被点按过则恢复静默
            for (var i = 0; i < ITEM_COUNT; i++) {
                STATUS[i] = 0;
            }
            back_to_silence(context);
        } 
    });
    

}

/**
 * 返回静默状态
 * @param {Context} context 幻灯片基础参数
 */
function back_to_silence(context) {
        // 设置宽度
        $("#i1").animate({width: context.origal_width.toString() + "px"});
        $("#i2").animate({width: context.origal_width.toString() + "px"});
        $("#i3").animate({width: context.origal_width.toString() + "px"});
        $("#i4").animate({width: context.origal_width.toString() + "px"});
        $("#i5").animate({width: context.origal_width.toString() + "px"});
        
        // 设置静默偏移
        $("#i1").animate({left:  (1 * context.inner_padding + 1 * context.origal_width).toString() + "px"});
        $("#i2").animate({left:  (2 * context.inner_padding + 2 * context.origal_width).toString() + "px"});
        $("#i3").animate({left:  (3 * context.inner_padding + 3 * context.origal_width).toString() + "px"});
        $("#i4").animate({left:  (4 * context.inner_padding + 4 * context.origal_width).toString() + "px"});
        $("#i5").animate({left:  (5 * context.inner_padding + 5 * context.origal_width).toString() + "px"});
}



$(document).ready(function() {
    

    context = new Context();
    back_to_silence(context);
    main(context);
});