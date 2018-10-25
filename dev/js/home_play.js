


function main() {

    var main_width = $(window).width();

    var active_width = main_width * 0.6;
    var inner_padding = 20;
    var slience_width = (main_width - active_width - 6 * inner_padding) / 4;
    
    $("a.img-item-1").click(function() {
        $("#il").attr("class", "none");
        $("#ir").attr("class", "none");
        $("#i1").attr("class", "col-md-8");
        $("#i2").attr("class", "col-md-1");
        $("#i3").attr("class", "col-md-1");
        $("#i4").attr("class", "col-md-1");
        $("#i5").attr("class", "col-md-1");

    });
    $("a.img-item-2").click(function() {
        $("#il").attr("class", "none");
        $("#ir").attr("class", "none");
        $("#i1").attr("class", "col-md-1");
        $("#i2").attr("class", "col-md-8");
        $("#i3").attr("class", "col-md-1");
        $("#i4").attr("class", "col-md-1");
        $("#i5").attr("class", "col-md-1");
    });
    $("a.img-item-3").click(function() {
        $("#il").attr("class", "none");
        $("#ir").attr("class", "none");
        $("#i1").attr("class", "col-md-1");
        $("#i2").attr("class", "col-md-1");
        $("#i3").attr("class", "col-md-8");
        $("#i4").attr("class", "col-md-1");
        $("#i5").attr("class", "col-md-1");
    });
    $("a.img-item-4").click(function() {
        $("#il").attr("class", "none");
        $("#ir").attr("class", "none");
        $("#i1").attr("class", "col-md-1");
        $("#i2").attr("class", "col-md-1");
        $("#i3").attr("class", "col-md-1");
        $("#i4").attr("class", "col-md-8");
        $("#i5").attr("class", "col-md-1");
    });
    $("a.img-item-5").click(function() {
        $("#il").attr("class", "none");
        $("#ir").attr("class", "none");
        $("#i1").attr("class", "col-md-1");
        $("#i2").attr("class", "col-md-1");
        $("#i3").attr("class", "col-md-1");
        $("#i4").attr("class", "col-md-1");
        $("#i5").attr("class", "col-md-8");
    });

}

$(document).ready(function() {
    main();
});