// Top 이동 버튼
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
    $('.top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});

// 스크롤이 맨 아래에 위치 할 시 버튼 위치 변경
$(window).scroll(function () {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        $(".top").css("bottom", 140);
    } else {
        $(".top").css("bottom", 0);
    }
});
// 화면 가로크기에따라 변경
$(window).resize(function () {
    if ($(window).width() < 800) {
        $('body').addClass('body1')
        $('.Map').hide();
        $('.btn').show();
    } else {
        $('body').removeClass()
        $('.Map').show();
        $('.btn').hide();
    }
});
// 관리자 페이지
$(function () {
    $('.enteradmin').click(function () {
        location.href = "fu-ADFM.html";
    });
    $('.btn').click(function () {
        window.open($(this).attr('src'));
    });
});
