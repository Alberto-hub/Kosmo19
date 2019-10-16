$(function () {
    $(".find").css('cursor', 'pointer');
    $('.gologin').click(function () {
        location.href = 'Login_Main.html';      // 로그인 페이지로 이동
    });
    $('.findpwd').click(function () {
        location.href = 'Find_PWD.html';        // 페스워드 찾기 페이지로 이동
    });
});