$(document).ready(function () {

  $("#header").load("./header.html");
  $("#footer").load("./footer.html");





})





$(window).scroll(function () {
  var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
  if (height > 850) {
    $('#content_aside').attr('id', 'content_aside_two');
  } else if (height < 850) {
    $('#content_aside_two').attr('id', 'content_aside');
  } else (height)
});


function map() {
  // 버스정류장 좌표 입력
  var bushakata = [
    ["아크로스 후쿠오카", 33.5914542, 130.4024354],
    ["구 후쿠오카현 공회당 귀빈관", 33.5916249, 130.4044264],
    ["스이쿄텐만구 신사", 33.592682, 130.4017784],
    ["후쿠오카시 아카렌가 문화관", 33.5931432, 130.4018849],
    ["덴진 지하상점가", 33.5886887, 130.3999665],
    ["게고신사", 33.5877787, 130.3999067],

  ];
  // 좌표 설정
  var hakata = { lat: 33.592682, lng: 130.4017784 };
  // 좌표 센터
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 15, center: hakata });
  // 마커
  var marker, i;
  // for문을 이용해 배열로 입력했던 정류장 마커 표시
  for (i = 0; i < bushakata.length; i++) {  // bushakata변수 갯수만큼 for문 실행
    marker = new google.maps.Marker({
      id: i,
      position: new google.maps.LatLng(bushakata[i][1], bushakata[i][2]), // 각각 좌표 입력
      map: map
    });


    // // 정보창에들어갈 내용
    // var contentString = '<div><p>주소 : 〒810-0801 福岡県福岡市博多区中洲 5-3-2<br>주소 : 5-chōme-3-2 Nakasu, Hakata-ku, Fukuoka, 810-0801 일본<br>전화번호 : + 81 92 262 0433<p></div>'

    // // 닫기 버튼을 누를때 까지 정보창 유지
    // var infowindow = new google.maps.InfoWindow({
    //   content: contentString
    // });
    // // 마커 클릭 시 정보창 표시
    //   marker1.addListener('click', function () {
    //   infowindow.open(map1, marker1);
    //   marker1.setAnimation(google.maps.Animation.BOUNCE);
    // });
  }
};

