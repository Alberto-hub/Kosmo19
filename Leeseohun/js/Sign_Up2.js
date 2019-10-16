$(function () {
    var id = document.getElementById('id');//변수 선언
    var pwd = document.getElementById('pwd');
    var pwd_ceck = document.getElementById('pwd_ceck');
    var name = document.getElementById('name');
    var cal = document.getElementById('cal');
    var email = document.getElementById('email');
    var tel = document.getElementById('tel');
    $("#btn > div").css('cursor', 'pointer');
    $('#sign_up').click(function () {
        var pattern_kor = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
        var phoneNumberRegex = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;// 전화번호
        var emailreg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //email
        var pwd_reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/; // 정규식
        //[영문 대문자 또는 소문자 또는 숫자로 시작하는 아이디, 길이는 3~15자, 끝날때 제한 없음]
        var idReg = /^[A-za-z0-9]{3,15}/g;
        if (id.value == "") {      // 빈칸 확인
            alert("아이디를 입력해주세요.");
        } if (!idReg.test(id.value)) { // 정규식
            alert("형식에 맞게 입력해 주세요.\n (영문 대문자 또는 소문자 또는 숫자로 시작하는 아이디, 길이는 3~15자)")
            id.value = "";
            return false;
        } if (pwd.value == "") {    //
            alert("비밀번호를 입력해주세요.");
            return false;
        } if (!pwd_reg.test(pwd.value)) { //
            alert("최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자 특수문자는 (~!@#$%^&*()-_? 만 허용)")
            return false;
        } if (pwd.value != pwd_ceck.value) { //
            alert("두개의 비밀번호가 서로 다릅니다. 확인해 주세요");
            return false;
        } if (name.value == "") {           //
            alert("이름을 입력해주세요.");
            return false;
        } if (pattern_kor.test(name.value)) {    //
            alert("이름을 한글로 입력해 주십시오.");
            name.value = "";
            return false;
        } if (cal.value == "") {            //
            alert("생년월일을 입력해주세요.");
            return false;
        } if (email.value == "") {          //
            alert("이메일을 입력해 주세요.");
            return false;
        } if (!emailreg.test(email.value)) {  //
            alert("다시 입력해 주세요. 입력 방식은 ***@***.***입니다.");
            email.value = "";
            return false;
        } if (tel.value == "") {             //
            alert("전화번호를 입력해주세요.");
            return false;
        } if (!phoneNumberRegex.test(tel.value)) {   //
            alert("다시 입력해 주세요. 입력 방식은 ***-****-****입니다.");
            tel.value = "";
        } else {
            if ($('input:radio[name=남성]').is(':checked') || $('input:radio[name=여성]').is(':checked')) {
                if(id.value == "admin"){
                    // 새창 닫기 아직 못함
                    location.href = '../index_admin.html';
                }
                else{
                    // 새창 닫기 아직 못함
                    location.href = '../index_user.html';
                }
                    
            } else {
                alert("성별을 입력해주세요.")
            }
        }
    });
});