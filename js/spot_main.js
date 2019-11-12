$(document).ready(function(){

    $("#header").load("../header_admin.html");
    $("#footer").load("../footer.html");

     var search_count=0;
     var check_point; //체크값 비교하기 위한 변수
    
    // $('.spot_img > .spot_a> img').mouseenter(function(){ // 마우스 올렸을때 이미지 흐리게
    //     $(this).css('opacity','0.5');
    // });
    // $('.spot_img > .spot_a> img').mouseleave(function(){
    //     $(this).css('opacity','1');
    // });




    $(function () {
        $('.spot_img').mouseenter(function () { // 마우스 올렸을때 이미지 흐리게
            $(this).css('opacity', '0.5');
            
        });
        $('.spot_img').mouseleave(function () {
            $(this).css('opacity', '1');
           
            
        });
    });

   //관리자 spot 삭제 
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
   

  

    $("#search").click(function() {
        var chk_area_count=0;  /*지역 체크박스 선택된 갯수만큼 배열에 담기 위한 변수*/ 
        var chk_clf_count=0;   /*카테고리 체크박스 선택된 갯수만큼 배열에 담기 위한 변수*/ 

        
        var check_area=new Array(); ; /*체크된 지역*/ 
        var chk_clf=new Array(); ; /*체크된 항목*/
        
        
            
        $("input[name=chk_area]:checked").each(function() {/*지역체크박스에 체크되었을때 */
            check_area[chk_area_count] = $(this).val();
         
            chk_area_count++; 
        });

        $("input[name=chk_clf]:checked").each(function() { /*카테고리 체크박스에 체크되었을때*/
            chk_clf[chk_clf_count] = $(this).val();
            chk_clf_count++;
        });
        
        if(check_area[0] !=null && chk_clf[0]==null){ //지역만 선택한 경우  

            $(".spot").each(function(){

                var check_spot= $(this).children(".spot_info").children(".area").children("a").children("option").val();
             

                for(var i=0;i<=chk_area_count;i++){
                    
                    if(check_spot==check_area[i]){
                     
                        break;
                    }else if(i==chk_area_count){
                        // console.log("하이드");
                        $(this).hide();
                    }
                 
                }
            });

        }else if(check_area[0] ==null && chk_clf[0] !=null){ //구역만선택한 경우 
            $(".spot").each(function(){

                var check_clf= $(this).children(".spot_info").children(".category").children("a").children("option").val();
                

                for(var k=0;k<=chk_clf_count;k++){
                    
                    if(check_clf==chk_clf[k]){
                        break;
                    }else if(k==chk_clf_count){
                        // console.log(check_clf);
                        $(this).hide();
                    }
                }
            });

        }else if(check_area[0] !=null && chk_clf[0] !=null){ //둘다 선택한 경우
            $(".spot").each(function(){

                var check_spot= $(this).children(".spot_info").children(".area").children("a").children("option").val();
                var check_clf= $(this).children(".spot_info").children(".category").children("a").children("option").val();
                

                for(var i=0;i<=chk_area_count;i++){
                    
                    if(check_spot==check_area[i]){

                        for(var k=0;k<=chk_clf_count;k++){ /*체크되어있는 카테고리 횟수만큼 비교*/
                    
                            if(check_clf==chk_clf[k]){  /*체크된 카테고리 중에 해당하면 브레이크*/ 
                                break;
                            }else if(k==chk_clf_count){  /*체크된 카테고리의 마지막까지 해당되는 것이 없을경우 hide*/ 
                                $(this).hide();
                            }
                        }

                        break;
                    }else if(i==chk_area_count){
                        console.log("하이드");
                        $(this).hide();
                    }
                }

                // for(var i=0;i<=chk_area_count;i++){
                    
                //     if(check_spot==check_area[i]){ /*체크된 지역 중에 해당하면 브레이크*/ 
                //         break;
                        
                //     }else{                         /*지역에 해당되지 않을 시 카테고리 비교*/ 
                //         for(var k=0;k<=chk_clf_count;k++){ /*체크되어있는 카테고리 횟수만큼 비교*/
                    
                //             if(check_clf==chk_clf[k]){  /*체크된 카테고리 중에 해당하면 브레이크*/ 
                //                 break;
                //             }else if(k==chk_clf_count){  /*체크된 카테고리의 마지막까지 해당되는 것이 없을경우 hide*/ 
                //                 $(this).hide();
                //             }
                //         }
                //     }
                // }
            });

        }else{ //아무것도 선택하지 않고 검색버튼 눌렀을 경우
            alert("검색 조건을 설정해주십시오.");
        }
        });



        $(".area > a").click(function(){ /*해당 스팟의 지역 a태그 클릭 시 함수*/ 
            
            var check_Area1= $(this).children("option").val();

            console.log(check_Area1);

            // alert(check_Area1);

            $(".spot").each(function(){

                var check_Area2= $(this).children(".spot_info").children(".area").children("a").children("option").val();
                // console.log(check_Area2);
    
                if(check_Area1!=check_Area2){

                    $(this).hide();
                }
            });
    
        });

        $(".category > a").click(function(){ /*해당 스팟의 카테고리 a태그 클릭 시 함수*/ 
            
            var check_Area1= $(this).children("option").val();

            console.log(check_Area1);

            // alert(check_Area1);

            $(".spot").each(function(){

                var check_Area2= $(this).children(".spot_info").children(".category").children("a").children("option").val();
                // console.log(check_Area2);
    
                if(check_Area1!=check_Area2){

                    $(this).hide();
                }
            });
    
        });
     
});
