$(document).ready(function() {
    
    $(".FAQ_Qst").click(function(){
        $(this).css({"border-radius":"15px 15px 0 0"});
        $(".FAQ_Ans").not($(this).next(".FAQ_Ans").slideToggle(500)).slideUp();
    });

});
