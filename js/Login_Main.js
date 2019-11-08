$(function () {

    // $(".find").css('cursor', 'pointer');
    // $('.gologin').click(function () {
    //     location.href = 'Login_Main.html';      // 로그인 페이지로 이동
    // });
    // $('.findpwd').click(function () {
    //     location.href = 'Find_PWD.html';        // 페스워드 찾기 페이지로 이동
    // });


    $("#lbtn").css('cursor', 'pointer'); //마우스커서 이미지변경
    $("#lbtn").click(function(){
        var id = document.getElementById('idname');//변수 선언 입력한 값(id)받아와서 변수에 저장
        var pwd = document.getElementById('pwd');//변수 선언 입력한 값(pw))받아와서 변수에 저장
        var idReg = /^[A-za-z0-9]{3,15}/g;
        var pwd_reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/; // 정규식
        if (id.value == "") {      // 빈칸 확인
            alert("아이디를 입력해주세요.")
        } else if (!idReg.test(id.value)) { // 정규식
            alert("아이디를 잘못 입력하셨습니다. 다시 입력해 주세요.");
            id.value = ""
            return false;
        } else if (pwd.value == "") {    //
            alert("비밀번호를 입력해주세요.");
            return false;
        } else if (!pwd_reg.test(pwd.value)) { //
            alert("비밀번호를 잘못 입력하셨습니다. 다시 입력해 주세요.");
            return false;
        } else{
            if(id.value == "admin"){
                alert("관리자페이지로 이동합니다.");
                window.opener.top.location.href="../index_admin.html";
                window.close();
            }
            else{
                localStorage.setItem("userid", id.value);
                alert(id.value+"님 환영합니다.");
                window.opener.top.location.href="../index_user.html";
                window.close();
            }
        }
    }); 
});