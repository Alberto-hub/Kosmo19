// 하카타역
function map() {
    // 버스정류장 좌표 입력
    var bushakata = [
        ["정류장1",33.589070,130.418888],
        ["정류장2",33.589383, 130.418470],
        ["정류장3",33.589875, 130.418073],
        ["정류장4",33.590116, 130.418598],
        ["정류장5",33.590455, 130.418967],
        ["정류장6",33.591393, 130.419836],
        ["정류장7",33.591786, 130.419847],
        ["정류장8",33.590678, 130.422379],
        ["정류장9",33.589722, 130.422508],
        ["정류장10",33.587353, 130.419922]
    ];
    // 좌표 설정
    var hakata = {lat: 33.589745, lng: 130.420746};
    // 좌표 센터
    var map1 = new google.maps.Map(
        document.getElementById('map1'), {zoom: 16, center: hakata});
    // 마커
    var marker, i;
    // for문을 이용해 배열로 입력했던 정류장 마커 표시
    for (i = 0; i < bushakata.length; i++) {  // bushakata변수 갯수만큼 for문 실행
      marker = new google.maps.Marker({
        id:i,
        position: new google.maps.LatLng(bushakata[i][1], bushakata[i][2]), // 각각 좌표 입력
        map: map1
      });
    }
//텐진역
    // 버스정류장 좌표 입력
    var bustengin = [
        ["정류장1",33.590765, 130.399360],
        ["정류장2",33.592650, 130.398898],
        ["정류장3",33.592275, 130.397461],
        ["정류장4",33.592954, 130.398174],
    ];
    // 좌표 설정
    var tengin = {lat: 33.591462, lng: 130.398891};
    // 좌표 센터
    var map2 = new google.maps.Map(
        document.getElementById('map2'), {zoom: 16, center: tengin});
    // 마커
    var marker, i;
    // for문을 이용해 배열로 입력했던 정류장 마커 표시
    for (i = 0; i < bustengin.length; i++) {  // bustengin 변수 갯수만큼 for문 실행
      marker = new google.maps.Marker({
        id:i,
        position: new google.maps.LatLng(bustengin[i][1], bustengin[i][2]), // 각각 좌표 입력
        map: map2
      });
    }
//후쿠오카 공항역
    var busfukuoka = [
        ["정류장1",33.587971, 130.454260],
        ["정류장2",33.590436, 130.452576],
        ["정류장3",33.588413, 130.455595],
        ["정류장4",33.594468, 130.450680],
        ["정류장5",33.594809, 130.449784],
        ["정류장6",33.596364, 130.448889],
        ["정류장7",33.597046, 130.449117],
        ["정류장8",33.589804, 130.457143],
        ["정류장9",33.594281, 130.455515],
    ]; 
    // 좌표 설정
    var fukuokaap = {lat: 33.597309, lng: 130.448436};
    // 좌표 센터
    var map3 = new google.maps.Map(
        document.getElementById('map3'), {zoom: 14, center: fukuokaap});
    // 마커
    var marker, i;
    // for문을 이용해 배열로 입력했던 정류장 마커 표시
    for (i = 0; i < busfukuoka.length; i++) {  // bustengin 변수 갯수만큼 for문 실행
      marker = new google.maps.Marker({
        id:i,
        position: new google.maps.LatLng(busfukuoka[i][1], busfukuoka[i][2]), // 각각 좌표 입력
        map: map3
      });
    }

}
$(function() {
  $("#back").click(function(){
      history.back(-1);
  });
});

