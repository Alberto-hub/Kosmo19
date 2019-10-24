$(function () {

    $(".btn > div").css('cursor', 'pointer');
    $("button").css('cursor', 'pointer');
    $(window).resize(function() {
        // if($(window).width() < 800) {
        //창 가로 크기가 600 미만일 경우
        //     $("body").attr({ display : "none" });
        //     alert("모바일 환경에서는 실행할수 없습니다.")
        // }
     });
    $('#change').click(function () {
        var pwd = $(".pwd").val();//변수 선언
        var newpwd = $(".newpwd").val();
        var newpwd_ceck = $(".newpwd_ceck").val();
        var pwd_reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/; // 정규식
        //최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자 특수문자는 (~!@#$%^&*()-_? 만 허용)
        if (confirm("정말 변경하시겠습니까??") == true){    //확인
            if (pwd == "") {
                alert("비밀번호를 입력해주세요.")
            } 
            else if (newpwd == "") {
                alert("새 비밀번호를 입력해주세요.")
            } 
            else if (newpwd_ceck == "") {
                alert("새 비밀번호를 입력해주세요.")
            } 
            else if (!pwd_reg.test(newpwd)) {
                alert("최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자 특수문자는 (~!@#$%^&*()-_? 만 허용)")
            }
            else if (newpwd != newpwd_ceck) {
                alert("새 비밀번호가 같은지 확인해주세요.")
            } 
            else{
                alert("정상적으로 변경되었습니다.")
                $(".pwd").val("");
                $(".newpwd").val("");
                $(".newpwd_ceck").val("");
            }
        }else{   //취소
            return false;
        }
        
    });
    $('.reboke').click(function () {
        if (confirm("정말 탈퇴하시겠습니까??") == true){    //확인
            location.href = 'Reboke.html'; 
        }else{   //취소
            return false;
        }  
    });
    $('.sign_up').click(function () {
        location.href = '../index_user.html';
    });

    $('.cancel').click(function () {
        location.href = '../index_user.html';
    });
});
$(function () {
    $('.change').click(function () {
        // var pattern_kor = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g; // 한글체크
        var pattern_kor = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
        var phoneNumberRegex = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;// 전화번호
        var emailreg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //email
        if (confirm("정말 변경하시겠습니까??") == true){    //확인
            var input = prompt("바꾸실 "+$(this).attr('name')+"을(를) 입력해 주세요.");
            if(input){
                var classname = "."+$(this).attr("value");
                if($(this).attr('name') == "이름"){
                    if(!pattern_kor.test(input)){
                        $(classname).text(input);
                        alert("정상적으로 변경되었습니다.")
                    }
                    else{
                        alert("이름을 한글로 입력해 주십시오.")
                        return false;
                    }
                } if($(this).attr('name') == "전화번호"){
                    if(phoneNumberRegex.test(input)){
                        $(classname).text(input);
                        alert("정상적으로 변경되었습니다.")
                    }
                    else{
                        alert("다시 입력해 주세요. 입력 방식은 ***-****-****입니다.");
                        return false;
                    }
                } if($(this).attr('name') == "이메일"){
                    if(emailreg.test(input)){
                        $(classname).text(input);
                        alert("정상적으로 변경되었습니다.")
                    }
                    else{
                        alert("다시 입력해 주세요. 입력 방식은 ***@***.***입니다.");
                        return false;
                    }
                }
            }else{
                alert("취소되었습니다.")
                return false;
            }
        }else{   //취소
            alert("취소되었습니다.")
            return false;
        }

    });
});