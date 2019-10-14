$(function () {
    var pwd = document.getElementById('pwd');
    var pwd_ceck = document.getElementById('pwd_ceck');

    $("#gologin").css('cursor', 'pointer');
    $('#gologin').click(function () {
        if (pwd.value == "") {
            alert("비밀번호를 입력해주세요.")
        } else if (pwd.value != pwd_ceck.value) {
            alert("비밀번호를 확인해주세요.")
        }else {
            location.href = 'Login_Main.html';
        }
    });
});