$(function () {
    $("#btn > div").css('cursor', 'pointer');
    $('#CH').click(function () {
        location.href = 'Sign_Up_Child.html';
    });
    $('#Cancel').click(function () {
        location.href = 'Login_Main.html';
    });
    $('#Consent').click(function () {
        if ($('#ToUA').is(":checked") == false) {
            var target_offset = $("#ToUA").offset();
            var target_top = target_offset.top;
            $('html, body').animate({ scrollTop: target_top }, 500);
            alert("이용약관에 체크해주세요.");
        } else if ($('#PICC').is(":checked") == false) {
            var target_offset = $("#PICC").offset();
            var target_top = target_offset.top;
            $('html, body').animate({ scrollTop: target_top }, 500)
            alert("개인정보 수집 동의에 체크해주세요");
        } else {
            location.href = 'Sign_Up2.html';
        }
    });
});