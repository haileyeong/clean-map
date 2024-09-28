import React, { useEffect } from 'react';

const Map = () => {
    useEffect(() => {
        // 지도 초기화
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div
        const mapOption = {
            center: new window.naver.maps.LatLng(37.4289494676142, 127.00387033385), // 초기 위치
            zoom: 16, // 초기 줌
        };

        const map = new window.naver.maps.Map(mapContainer, mapOption); // 지도 생성

        // 마커 추가 (선택 사항)
        // eslint-disable-next-line no-unused-vars
        const marker = new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(37.4289494676142, 127.00387033385), // 마커 위치
            map: map,
        });
    }, []);

    return <div id="map" style={{ width: '100vm', height: '100vh' }} />; // 지도 크기 설정
};

export default Map;
