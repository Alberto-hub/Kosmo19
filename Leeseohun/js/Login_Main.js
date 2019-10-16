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
            location.href = '.html';// 메인 페이지 이동
        }
    }); 

    // Get the modal
    var modal = document.getElementById('myModal');
 
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];                                          

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }

});