$(function () {

    $(".gologin").css('cursor', 'pointer');
    $(".gologin").click(function () {
        var pwd_reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
        // var pwd_reg = /^(?=.*?[A-z])(?=.*?[0-9]).{6,}$/;
        // - 영어
        // - 하나 이상의 숫자 (?=.*?[0-9])
        // - 최소 길이 6자 .{6,} (앵커 포함)

        var pwd = $(".pwd").val();//변수 선언
        var pwd_ceck = $(".pwd_ceck").val();
        if (pwd == "") {        // 빈칸 체크
            alert("비밀번호를 입력해주세요.")
            return false;
        }
        if (pwd_ceck == "") {      // 빈칸 체크
            alert("비밀번호를 입력해주세요.")
            return false;
        }
        if (pwd != pwd_ceck) {      // 다른지 체크
            alert("두개의 비밀번호가 다릅니다.")
            return false;
        }
        if (!pwd_reg.test(pwd)){       // 유효성검사
                alert("최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자 특수문자는 (~!@#$%^&*()-_? 만 허용)")
            return false;
        }
        else{                       // 모두 만족하면 다음 페이지로
            alert("정상적으로 변경되었습니다.")
            return location.href = 'Login_Main.html';
        }
    });
});
