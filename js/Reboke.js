$(function () {
    var check = document.getElementById('checkdong');
    var pwd_reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    $(check).prop("checked");
    $(".btn > div").css('cursor', 'pointer');
    $('.sign_up').click(function () {
        var pwd = $(".pwd").val();
        if (confirm("정말 탈퇴하시겠습니까??") == true){    //확인
            if (pwd == "") {
                alert("비밀번호를 입력해주세요.")
                return false;
            } else if (!$(check).prop("checked")) {
                alert("회원탈퇴 동의란에 체크해주십시오")
                return false;
            } else if (!pwd_reg.test(pwd)){       // 유효성검사
                alert("비밀 번호를 잘못 입력 하셨습니다.")
                return false;
             }
             else{
                alert("정상적으로 탈퇴처리 되었습니다.")
                location.href = '../index.html';
            }
        }else{   //취소
            return false;
        }
        
    });
});