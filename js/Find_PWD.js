$(function () {


    $(".find_pwd").css('cursor', 'pointer');
    $('.find_pwd').click(function () {
        //[영문 대문자 또는 소문자 또는 숫자로 시작하는 아이디, 길이는 3~15자, 끝날때 제한 없음]
        var idReg = /^[A-za-z0-9]{3,15}/g;
        var name = $(".id").val();

        // 아이디 공백 확인
        if (name == "") {
            alert("아이디를 입력해주세요.")
            return false;
        } 

        // 아이디 유효성 검사
        if (!idReg.test(name)) {
            // alert("형식에 맞게 입력해 주세요.\n (영문 대문자 또는 소문자 또는 숫자로 시작하는 아이디, 길이는 3~15자)")
            alert("등록되지 않은 아이디 입니다. 다시 확인하시고 입력해 주시기 바랍니다.")
            $(".id").val("");
            return false;
        }
        else{
            location.href = 'Find_PWD2.html';   // 전부 만족하면 다음 페이지로 이동
        }
        
            
    });
});