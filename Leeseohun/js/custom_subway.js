function map() {
// 하카타역
    // 좌표 설정
    var hakata = {lat: 33.589745, lng: 130.420746};
    // 좌표 센터
    var map1 = new google.maps.Map(
        document.getElementById('map1'), {zoom: 15, center: hakata});
    // 마커
    var marker = new google.maps.Marker({position: hakata, map: map1});

//텐진역
    // 좌표 설정
    var tengin = {lat: 33.591462, lng: 130.398891};
    // 좌표 센터
    var map2 = new google.maps.Map(
        document.getElementById('map2'), {zoom: 15, center: tengin});
    // 마커
    var marker = new google.maps.Marker({position: tengin, map: map2});

//후쿠오카 공항역 
    // 좌표 설정
    var fukuokaap = {lat: 33.597309, lng: 130.448436};
    // 좌표 센터
    var map3 = new google.maps.Map(
        document.getElementById('map3'), {zoom: 15, center: fukuokaap});
    // 마커
    var marker = new google.maps.Marker({position: fukuokaap, map: map3});
}