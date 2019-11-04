$(function(){
    $('#Serch').click(function(){                     
        var ST = document.getElementById("arrive");      
        var STvar = ST.options[ST.selectedIndex].value;    
        if(STvar == "스미요시신사"){                              
            $("#map").css("display","none");
            $("#maps").css({display : "block"})
            $("#maps").attr("src","../img/sumiyo.PNG")
            false;
        }if(STvar == "쿠시다신사") {
            $("#map").css("display","none");
            $("#maps").css({display : "block"})
            $("#maps").attr("src","../img/cusida.PNG")
            false;
        }if(STvar == "캐널시티"){
            $("#map").css("display","none");
            $("#maps").css({display : "block"})
            $("#maps").attr("src","../img/city.PNG")
            false;
        };
    });
});

