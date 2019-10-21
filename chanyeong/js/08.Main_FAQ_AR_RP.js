$(document).ready(function() {
    
    $(".FAQ_Qst").click(function(){
        $(this).css({"border-radius":"15px 15px 0 0"});
        $(this).css({"color":"Red", "background-color":"lightgreen"});
        
        $(".FAQ_Ans").not($(this).next(".FAQ_Ans").slideToggle(500)).slideUp();
    });

});

function func_prompt_delete() {
    if(prompt('비밀번호를 입력하시면 삭제됩니다.') ==='1234'){
        alert("삭제되었습니다.");
        location.href='08.Main_FAQ_AR_RP.html';
    } else {
        alert("비밀번호가 틀렸습니다.");
    }
}

function func_prompt_modify() {
    if(prompt('비밀번호를 입력하시면 수정창으로 이동합니다.') ==='1234'){
        alert("비밀번호가 일치합니다.");
        location.href='08.Main_FAQ_AR_MP.html';
    } else {
        alert("비밀번호가 틀렸습니다.");
    }
}