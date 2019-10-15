$(function () {
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('section > div').mouseenter(function () {
        $(this).css('cursor', 'pointer');
        $(this).children('img').css({ 'opacity': '0.3', 'background': 'black' });
        $(this).children('p').css({ 'opacity': '0.3' });
        $(this).children('.nextbtn').stop().animate({
            left: 0,
            opacity: 0.8
        }, 500);
    });
    $('section > div').mouseleave(function () {
        $(this).children('img').css({ 'opacity': '1', 'background': 'white' });
        $(this).children('p').css({ 'opacity': '1' });
        $(this).children('.nextbtn').stop().animate({
            left: -960,
            opacity: 0
        }, 500);
    });

    $('section > div').click(function () {
        var url = $(this).attr('title');
        location.href = url;
    });

    $('.swiper-slide').click(function () {
        var url = $(this).attr('title');
        location.href = url;
    });

    $('.swiper-slide').mouseenter(function () {
        $(this).css('cursor', 'pointer');
    });
});
$(window).resize(function () {
    if ($(window).width() < 800) {
        $('body').addClass('body1')
    } else {
        $('body').removeClass()
    }
});


$(document).ready(function () {
    $("#header2").load("./header2.html");  // 원하는 파일 경로를 삽입하면 된다
    $("#footer").load("./footer.html");  // 원하는 파일 경로를
});
