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
  
  function map() {
    // 버스정류장 좌표 입력
    var bushakata = [ 
        ["정류장1",33.589070,130.418888],
        ["정류장2",33.589383, 130.418470],
        ["정류장3",33.589875, 130.418073],
        ["정류장4",33.590116, 130.418598],
        ["정류장5",33.590455, 130.418967],
        ["정류장6",33.591393, 130.419836]
    ];
    // 좌표 설정
    var hakata = {lat: 33.589745, lng: 130.420746};
    // 좌표 센터
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: hakata});
    // 마커
    var marker, i;
    // for문을 이용해 배열로 입력했던 정류장 마커 표시
    for (i = 0; i < bushakata.length; i++) {  // bushakata변수 갯수만큼 for문 실행
      marker = new google.maps.Marker({
        id:i,
        position: new google.maps.LatLng(bushakata[i][1], bushakata[i][2]), // 각각 좌표 입력
        map: map
      });
    }
}

