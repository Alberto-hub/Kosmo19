$(function () {

    $(".find").css('cursor', 'pointer');
    $('.gologin').click(function () {
        location.href = 'Login_Main.html';      // 로그인 페이지로 이동
    });
    $('.findpwd').click(function () {
        location.href = 'Find_PWD.html';        // 페스워드 찾기 페이지로 이동
    });
    $("#lbtn").css('cursor', 'pointer');
    $("#lbtn").click(function(){
        var id = document.getElementById('idname');//변수 선언
        var pwd = document.getElementById('pwd');
        var idReg = /^[A-za-z0-9]{3,15}/g;
        var pwd_reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/; // 정규식
        if (id.value == "") {      // 빈칸 확인
            alert("아이디를 입력해주세요.")
        } else if (!idReg.test(id.value)) { // 정규식
            alert("아이디를 잘못 입력하셨습니다. 다시 입력해 주십시오.");
            id.value = ""
            return false;
        } else if (pwd.value == "") {    //
            alert("비밀번호를 입력해주세요.");
            return false;
        } else if (!pwd_reg.test(pwd.value)) { //
            alert("비밀번호를 잘못 입력하셨습니다. 다시 입력해 주십시오.");
            return false;
        } else{
            if(id.value == "admin"){
                location.href = '../index_admin.html';// 메인 페이지 이동
            }
            else{
                location.href = '../index_user.html';// 메인 페이지 이동
            }
        }
    }); 
});