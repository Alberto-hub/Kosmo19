$(function () {
    var pwd = document.getElementById('pwd');//변수 선언
    var check = document.getElementById('checkdong');
    $(check).prop("checked");
    $("#btn > div").css('cursor', 'pointer');

    $('#sign_up').click(function () {
        if (confirm("정말 탈퇴하시겠습니까??") == true){    //확인
            if (pwd.value == "") {
                alert("비밀번호를 입력해주세요.")
            } else if (!$(check).prop("checked")) {
                alert("회원탈퇴 동의란에 체크해주십시오")
            } else{
                alert("정상적으로 탈퇴처리 되었습니다.")
                location.href = 'Login_Main.html';
            }
        }else{   //취소
            return;
        }
        
    });
});