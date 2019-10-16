$(function () {
    
    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }
    // var modal = document.getElementById('myModal');
    var modal = document.$(this).parent("#myModal");

    $(".find").css('cursor', 'pointer');
    $('.gologin').click(function () {
        // modal.style.display="none";
        location.href = 'Login_Main.html';
    });
    $('.findpwd').click(function () {
        location.href = 'Find_PWD.html';        // 페스워드 찾기 페이지로 이동
    });
});