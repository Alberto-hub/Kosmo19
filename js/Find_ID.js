$(function () {
    var name = document.getElementById('findname');//변수 선언
    var cal = document.getElementById('findphone');
    var telceck = document.getElementById('telceck');
    var pattern_kor = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    var phoneNumberRegex = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;// 전화번호

    $(".find").css('cursor', 'pointer');
    
    $('.find').click(function () {
        if (name.value == "") {     //  이름에 빈칸 확인
            alert("이름을 입력해주세요.")
            return false;
        }else if (pattern_kor.test(name.value)){   // 이름을 영어로 입력하였는지 확인
            alert("이름을 한글로 입력해 주십시오.")
            name.value = "";
            return false;
        }else if (cal.value == "") {            // 전화번호 빈칸 확인
            alert("전화번호를 입력해주세요.")
            return false;
        } else {
            if(!phoneNumberRegex.test(cal.value)){  // 전화번호 입력방힉 확인
                alert("다시 입력해 주세요. 입력 방식은 ***-****-****입니다.");
                cal.value = "";
                return false;
            }else if ( $(telceck).is(":checked")) { // 체크박스 체크했는지 확인
                location.href = 'Find_ID2.html';    // 전부 만족하면 다음페이지로 이동
            } else {
                alert ("본인 확인을 확인해주세요.")
                return false;
            }
        }
    });   
});