function initMap() {
    // 지도 좌표 설정
    var icr = { lat: 33.593192, lng: 130.404405 };
    // 좌표를 가운대로 지도 생성
    var map1 = new google.maps.Map(
        document.getElementById('IRM'), { zoom: 16, center: icr });
    // 좌표값에 마커 생성
    var marker1 = new google.maps.Marker({ position: icr, map: map1, animation: google.maps.Animation.DROP });

    // 정보창에들어갈 내용
    var contentString = '<div><p>주소 : 〒810-0801 福岡県福岡市博多区中洲 5-3-2<br>주소 : 5-chōme-3-2 Nakasu, Hakata-ku, Fukuoka, 810-0801 일본<br>전화번호 : + 81 92 262 0433<p></div>'

    // 닫기 버튼을 누를때 까지 정보창 유지
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    // 마커 클릭 시 정보창 표시
    marker1.addListener('click', function () {
        infowindow.open(map1, marker1);
        marker1.setAnimation(google.maps.Animation.BOUNCE);
    });


    var grm = { lat: 33.592437, lng: 130.386604 };
    // 좌표를 가운대로 지도 생성
    var map2 = new google.maps.Map(
        document.getElementById('GRM'), { zoom: 16, center: grm });
    // 좌표값에 마커 생성
    var marker2 = new google.maps.Marker({ position: grm, map: map2, animation: google.maps.Animation.DROP });

    // 정보창에들어갈 내용
    var contentString = '<div><p>주소 : 〒810-0072 福岡県福岡市中央区長浜 2-5-38<br>주소 : 2 Chome-5-25 Nagahama, Chuo Ward, Fukuoka, 810-0072 일본<br>전화번호 : + 81 92 711 8154<p></div>'

    // 닫기 버튼을 누를때 까지 정보창 유지
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    // 마커 클릭 시 정보창 표시
    marker2.addListener('click', function () {
        infowindow.open(map2, marker2);
        marker2.setAnimation(google.maps.Animation.BOUNCE);
    });

    var prm = { lat: 33.587818, lng: 130.395856 };
    // 좌표를 가운대로 지도 생성
    var map3 = new google.maps.Map(
        document.getElementById('PRM'), { zoom: 16, center: prm });
    // 좌표값에 마커 생성
    var marker3 = new google.maps.Marker({ position: prm, map: map3, animation: google.maps.Animation.DROP });

    // 정보창에 들어갈 내용
    var contentString = '<div><p>〒810-0041 福岡県福岡市中央区大名１丁目１３-14<br>1-chōme-13-14 Daimyō, Chūō-ku, Fukuoka, 810-0041 일본<br>전화번호 : +81 92-771-0880<p></div>'

    // 닫기 버튼을 누를때 까지 정보창 유지
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    // 마커 클릭 시 정보창 표시
    marker3.addListener('click', function () {
        infowindow.open(map3, marker3);
        marker3.setAnimation(google.maps.Animation.BOUNCE);
    });
}