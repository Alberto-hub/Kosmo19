$(document).ready(function(){
    $("#header").load("./header.html");
    $("#footer").load("./footer.html");


});

$(function () {
    $('.pic').mouseenter(function () { // 마우스 올렸을때 이미지 흐리게
        $(this).css('opacity', '0.5');
        $('.Object' > b).css('opacity','1');
    });
    $('.pic').mouseleave(function () {
        $(this).css('opacity', '1');
        $('.Object' > b).css('opacity','1');
    });
});