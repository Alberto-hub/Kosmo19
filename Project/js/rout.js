$(document).ready(function(){

    // $('#content_aside > a').click(function () {
    //     $('html, body').animate({ scrollTop: 0 }, 600);
    //     return false;
    // });

//       //링크 클릭시 헤당 섹션으로 부드럽게 이동시키기
//   $(document).on('click','#gnb a',function(event){
//     var headerHeight = $('header').outerHeight();
//     event.preventDefault();
//        $("html,body").animate({
//          scrollTop : $(this.hash).offset().top - headerHeight
//       },300)
//     });
//   });



})

function initialize() {
    // var myLatlng = new google.maps.LatLng(34.708846,135.507477); //<- 위도와 경도
    // var myOptions = {
    //  zoom: 15,
    //  center: myLatlng,
    //  mapTypeId: google.maps.MapTypeId.TERRAIN
    // }
    // var map = new google.maps.Map(document.getElementById("map"), myOptions);
    // var marker = new google.maps.Marker( {
    //  position: myLatlng, 
    //  map: map, 
    //  title:"(주)서울" //<- 본인의 목적에 맞게수정
    // });   
    // var infowindow = new google.maps.InfoWindow( {
    //  content: "(주)서울시 마포구" //<- 본인의 목적에 맞게수정
    // });
    // infowindow.open(map,marker);

    
}
window.onload=function() {
    initialize();
}




$(window).scroll(function () {
    var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
    if (height > 850) {
      $('#content_aside').attr('id','content_aside_two');
    } else if (height < 850) {
      $('#content_aside_two').attr('id', 'content_aside');
    } else(height)
  });
  

