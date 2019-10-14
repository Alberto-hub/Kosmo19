$(function () {
    var id = document.getElementById('id');//변수 선언
    var pwd = document.getElementById('pwd');
    var pwd_ceck = document.getElementById('pwd_ceck');
    var name = document.getElementById('name');
    var cal = document.getElementById('cal');
    var email = document.getElementById('email');
    var tel = document.getElementById('tel');

    // 이메일 체크
    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;


    $("#btn > div").css('cursor', 'pointer');
    $('#sign_up').click(function () {
        if (id.value == "") {
            alert("아이디를 입력해주세요.")
        } else if (pwd.value == "") {
            alert("비밀번호를 입력해주세요.")
        } else if (pwd.value != pwd_ceck.value) {
            alert("비밀번호를 확인해주세요.")
        } else if (name.value == "") {
            alert("이름을 입력해주세요.")
        } else if (cal.value == "") {
            alert("생년월일을 입력해주세요.")
        } else if (email.value == "") {
            alert("이메일형식이 올바르지 않습니다.")
        } else if (tel.value == "") {
            alert("전화번호를 입력해주세요.")
        } else {
            if ($('input:radio[name=남성]').is(':checked') || $('input:radio[name=여성]').is(':checked')) {
                location.href = 'Sign_Up3.html';
            } else {
                alert("성별을 입력해주세요.")
            }
        }
    });
});