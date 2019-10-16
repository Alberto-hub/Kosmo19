$(function () {
    $('#mise').mouseenter(function () {
        $(this).css('cursor', 'pointer');
    });
    
    $('#mise').click(function () {
        var url = $(this).attr('title');
        location.href = url;
    });

    // 화면 가로크기에따라 변경
$(window).resize(function () {
    if ($(window).width() < 800) {
        $('body').addClass('body1')
        $('.Map').hide();
        $('.btn').show();
    } else {
        $('body').removeClass()
        $('.Map').hide();
        $('.btn').show();
    }
});
});