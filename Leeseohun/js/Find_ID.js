$(function () {
    var name = document.getElementById('findname');//변수 선언
    var cal = document.getElementById('findphone');
    var telceck = document.getElementById('telceck');
    $("#find").css('cursor', 'pointer');
    
    $('#find').click(function () {
        if (name.value == "") {
            alert("이름을 입력해주세요.")
        }else if (cal.value == "") {
            alert("전화번호를 입력해주세요.")
        } else {
            if ( $(telceck).is(":checked")) {
                location.href = 'Find_ID2.html';
            } else {
                alert ("본인 확인을 확인해주세요.")
            }
        }
    });





});