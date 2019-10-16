$(function () {
    $(".find_pwd").css('cursor', 'pointer');
    $('.find_pwd').click(function () {
        var name = $(".findname").val();//변수 선언
        var cal = $(".findphone").val();
        var telceck = document.getElementById('telceck');
        var pattern_kor = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
        var phoneNumberRegex = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;// 전화번호

        // 아이디 공백 확인
        if (name == "") {
            alert("이름을 입력해주세요.")
            return false;
        }

        // 전화번호 공백 확인
        if (cal == "") {
            alert("전화번호를 입력해주세요.")
            return false;
        } 

        // 이름 유효성 검사
        if (pattern_kor.test(name)){
            alert("이름을 한글로 입력해주세요.")
            $(".findname").val("");
            return false;
        }

        // 전화번호 유효성 검사
        if (!phoneNumberRegex.test(cal)){
            alert("다시 입력해 주세요. 입력 방식은 ***-****-****입니다.");
            $(".findphone").val("");
            return false;
        } else {
            if ( $(telceck).is(":checked")) {   // 본인확인 체크 확인
                location.href = 'Find_PWD3.html';   //전부 만족하면 다음페이지로
            } else {
                alert ("본인 확인을 확인해주세요.")
            }
        }
    });
});