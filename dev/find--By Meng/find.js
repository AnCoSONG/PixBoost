$(document).ready(function(){
    $("#find_1").mouseover(function(){
        $('#find_bg').animate({opacity:0.5},"1000");
    });
    $("#find_1").mouseleave(function(){
        $('#find_bg').animate({opacity:1},"500");
    });
    $("#find_2").mouseover(function(){
        $('#find_bg').animate({opacity:0.5},"1000");
    });
    $("#find_2").mouseleave(function(){
        $('#find_bg').animate({opacity:1},"500");
    });

});
