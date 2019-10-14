$(function() {
    $(window).resize(function() {
        if($(window).width() < 600) {
        //창 가로 크기가 600 미만일 경우
            $("#css").attr({ href : "./css/style_taxi_mobile.css" });
        }
        else{
        //그 외
            $("#css").attr({ href : "./css/style_taxi.css" });
        }
     });
});