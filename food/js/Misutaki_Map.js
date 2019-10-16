function initMap() {
    // 지도 좌표 설정
    var mtb = { lat: 33.592541, lng: 130.407062 };
    // 좌표를 가운대로 지도 생성
    var map1 = new google.maps.Map(
        document.getElementById('MTB'), { zoom: 16, center: mtb });
    // 좌표값에 마커 생성
    var marker1 = new google.maps.Marker({ position: mtb, map: map1, animation: google.maps.Animation.DROP });

    // 정보창에들어갈 내용
    var contentString = '<div><p>주소 : 〒810-0801 福岡県福岡市博多区２ 中洲 ４丁目 ２ １５ メインストリートビル2F<br>주소 : 일본 〒810-0801 Fukuoka, Hakata Ward, 2, 中洲 ４丁目 ２ １５ メインストリートビル2F<br>전화번호 : +81 92-281-1177<p></div>'

    // 닫기 버튼을 누를때 까지 정보창 유지
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    // 마커 클릭 시 정보창 표시
    marker1.addListener('click', function () {
        infowindow.open(map1, marker1);
        marker1.setAnimation(google.maps.Animation.BOUNCE);
    });


    var hana = { lat: 33.588407, lng: 130.416906 };
    // 좌표를 가운대로 지도 생성
    var map2 = new google.maps.Map(
        document.getElementById('HMT'), { zoom: 16, center: hana });
    // 좌표값에 마커 생성
    var marker2 = new google.maps.Marker({ position: hana, map: map2, animation: google.maps.Animation.DROP });

    // 정보창에들어갈 내용
    var contentString = '<div><p>주소 : 〒815-0035 福岡県福岡市南区向野２丁目２−12<br>주소 : 2 Chome-2-12 Mukaino, Minami Ward, Fukuoka, 815-0035 일본<br>전화번호 : +81 92-553-6915<p></div>'

    // 닫기 버튼을 누를때 까지 정보창 유지
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    // 마커 클릭 시 정보창 표시
    marker2.addListener('click', function () {
        infowindow.open(map2, marker2);
        marker2.setAnimation(google.maps.Animation.BOUNCE);
    });
}