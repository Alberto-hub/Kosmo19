$(function () {
    var pwd = document.getElementById('pwd');//변수 선언
    var newpwd = document.getElementById('newpwd');
    var pwd_ceck = document.getElementById('newpwd_ceck');

    $("#btn > div").css('cursor', 'pointer');

    $('#change').click(function () {
        if (confirm("정말 변경하시겠습니까??") == true){    //확인
            if (pwd.value == "") {
                alert("비밀번호를 입력해주세요.")
            } else if (newpwd.value == "") {
                alert("비밀번호를 입력해주세요.")
            } else if (pwd_ceck.value == "") {
                alert("비밀번호를 입력해주세요.")
            } else if (newpwd.value != newpwd_ceck.value) {
                alert("비밀번호가 같은지 확인해주세요.")
            } 
            else{
                alert("정상적으로 변경되었습니다.")
                pwd.value = ""
                newpwd.value = ""
                newpwd_ceck.value = ""
            }
        }else{   //취소
            return;
        }
        
    });
    $('#reboke').click(function () {
        if (confirm("정말 탈퇴하시겠습니까??") == true){    //확인
            location.href = 'Reboke.html'; 
        }else{   //취소
            return;
        }
        
    });


    $('#sign_up').click(function () {
        location.href = 'Login_Main.html';
    });

    $('#cancel').click(function () {
        location.href = 'Login_Main.html';
    });
});
$(function () {
    $('.change').click(function () {
        if (confirm("정말 변경하시겠습니까??") == true){    //확인
            var input = prompt('Message');
            $(this).prev().html(input)
            alert("정상적으로 변경되었습니다.")
        }else{   //취소
            return;
        }

    });
});