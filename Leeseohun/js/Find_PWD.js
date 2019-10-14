$(function () {
    var name = document.getElementById('id');//변수 선언
    $("#find_pwd").css('cursor', 'pointer');
    $('#find_pwd').click(function () {
        if (name.value == "") {
            alert("아이디를 입력해주세요.")
        }else{
            location.href = 'Find_PWD2.html';
        }
        
            
    });
});