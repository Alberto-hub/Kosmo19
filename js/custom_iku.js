$(function(){
    //슬라이더 토글을 이용한 본문 가리기&보이기
    $('.sub_title').click(function(){  
        $(this).next('div').stop().slideToggle(1000);
    });
    // // 최상단 올리는버튼
    // //비행기로 가는 방법
    // //검색 누를시 ST에서 셀렉된  출발지값 AR에서 셀렉된 도착지값 읽기
    // $('#airportSr').click(function(){                      // 검색을 클릭하면 실행되는 함수
    //     var time = $("#airportRe").text().substring(0,11); // substring으로 11글자 저장
    //     $("#airportRe").empty();                           // 내용 비우기
    //     $("#airportRe").append(time);                      // 저장했던 11글자 다시 넣기
    //     var mi = ["40분","50분","1시간 50분"];                          // 배열로 시간 저장
    //     var ST = document.getElementById("startAR");       // 예)ST = 인천
    //     var STvar = ST.options[ST.selectedIndex].value;    // ST는 값이 아니므로 값으로 저장
    //     if(STvar == "부산"){                               // 부산이 아닐경우 50분 부산일경우 40분
    //         $("#airportRe").append(mi[1]);
    //         false;
    //     }else if(STvar == "도쿄"){
    //         $("#airportRe").append(mi[0]);
    //         false;
    //     }else{
    //         $("#airportRe").append(mi[2]);
    //         false;
    //     };
    // });
    // //배로 가는 방법
    // //검색 누를시 ST에서 셀렉된  출발지값 AR에서 셀렉된 도착지값 읽기
    // $('#ShipSr').click(function(){
    //     var time = $("#ShipRe").text().substring(0,11); // substring으로 11글자 저장
    //     $("#ShipRe").empty();                           // 내용 비우기
    //     $("#ShipRe").append(time);                      // 저장했던 11글자 다시 넣기
    //     var mi = ["3시간","약 하루"];                    // 배열로 시간 저장
    //     var Sh = document.getElementById("Ship");       // 예)Sh = 쾌속선
    //     var Shvar = Sh.options[Sh.selectedIndex].value; // ST는 값이 아니므로 값으로 저장
    //     if(Shvar == "쾌속선"){                          // 쾌속선과 여객선
    //         $("#ShipRe").append(mi[0]);
    //         false;
    //     }else{
    //         $("#ShipRe").append(mi[1]);
    //         false;   
    //     }
    // });
    // //기차로 가는 방법
    // //검색 누를시 ST에서 셀렉된  출발지값 AR에서 셀렉된 도착지값 읽기
    // $('#trainSr').click(function(){
    //     var time = $("#trainRe").text().substring(0,11); // substring으로 11글자 저장
    //     $("#trainRe").empty();                           // 내용 비우기
    //     $("#trainRe").append(time);                      // 저장했던 11글자 다시 넣기
    //     var mi = ["2시간30분","5시간","10시간"];            // 배열로 시간 저장
    //     var ST = document.getElementById("startTR");     // 예)ST = 인천
    //     var STvar = ST.options[ST.selectedIndex].value;  // ST는 값이 아니므로 값으로 저장
    //     if(STvar == "오사카"){                           // 오사카 도쿄 홋카이도
    //         $("#trainRe").append(mi[0]);
    //         false;
    //     }else if(STvar == "도쿄"){
    //         $("#trainRe").append(mi[1]);
    //         false;
    //     }else{
    //         $("#trainRe").append(mi[2]);
    //         false;
    //     };
    // });
    // //버스로 가는 방법
    // //검색 누를시 ST에서 셀렉된  출발지값 AR에서 셀렉된 도착지값 읽기
    // $('#busSr').click(function(){
    //     var time = $("#busRe").text().substring(0,11); // substring으로 11글자 저장
    //     $("#busRe").empty();                           // 내용 비우기
    //     $("#busRe").append(time);                      // 저장했던 11글자 다시 넣기
    //     var mi = ["9시간","14시간"];                   // 배열로 시간 저장
    //     var ST = document.getElementById("startBS");   // 예)ST = 인천
    //     var STvar = ST.options[ST.selectedIndex].value;// ST는 값이 아니므로 값으로 저장
    //     var AR = document.getElementById("arriveBS");  // 예)AR = 후쿠오카
    //     var ARvar = AR.options[AR.selectedIndex].value;// AR은 값이 아니므로 값으로 저장
    //     if(STvar == "오사카"){                         // 도쿄 오사카
    //         $("#busRe").append(mi[0]);
    //         false;
    //     }else{
    //         $("#busRe").append(mi[1]);
    //         false;
    //     }
    // });
    
});