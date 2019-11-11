$(document).ready(function(){
    $("#header").load("../header.html");
    $("#footer").load("../footer.html");

    var admin_pw =1111;
    $(".admin > #delete").click(function(){

   

        if (confirm("정말 삭제하시겠습니까??") == true){    //확인

            var inputpw=prompt("비밀번호를 입력하세요.");
            if(inputpw == admin_pw){
                alert("삭제되었습니다.");
            }else{
                alert("비밀번호가 틀렸습니다.");
            }
       
        }else{   //취소
       
            return false;
       
        }
       
    });

});

$(function () {
    $('.pic').mouseenter(function () { // 마우스 올렸을때 이미지 흐리게
        $(this).css('opacity', '0.5');
        $('.Object' > b).css('opacity','1');
    });
    $('.pic').mouseleave(function () {
        $(this).css('opacity', '1');
        $('.Object' > b).css('opacity','1');
    });
    

});