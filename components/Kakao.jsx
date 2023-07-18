import React, { useEffect, useRef } from 'react';

function Kakao() {
  const mapRef = useRef(null);
  const searchInputRef = useRef(null);
  const placesService = useRef(null);

  useEffect(() => {
    // Kakao Map API 스크립트를 동적으로 로드
    const kakaoMapsScript = document.createElement('script');
    kakaoMapsScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_API_KEY&autoload=false`;
    window.document.body.appendChild(kakaoMapsScript);

    kakaoMapsScript.onload = () => {
      // Kakao Map API 초기화
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 초기 중심 좌표 (서울)
          level: 3, // 초기 줌 레벨
        };
        mapRef.current = new window.kakao.maps.Map(container, options);
        placesService.current = new window.kakao.maps.services.Places();
      });
    };
  }, []);

  const handleSearch = () => {
    const keyword = searchInputRef.current.value;

    if (keyword) {
      const request = {
        query: keyword + ' 카페',
        category_group_code: 'CE7', // 카테고리 코드: 카페
      };

      placesService.current.keywordSearch(request, (data, status) => {
        if (status === window.kakao.maps.services.Status.OK && data.length > 0) {
          displayPlaces(data);
        } else {
          console.log('카페를 찾을 수 없습니다.');
        }
      });
    }
  };

  const displayPlaces = (places) => {
    for (let i = 0; i < places.length; i++) {
      const place = places[i];

      // 마커 생성 및 추가
      const marker = new window.kakao.maps.Marker({
        map: mapRef.current,
        position: new window.kakao.maps.LatLng(place.y, place.x),
      });

      // 인포윈도우 생성 및 추가
      const infowindow = new window.kakao.maps.InfoWindow({
        content: `<div>${place.place_name}</div>`,
      });
      window.kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.open(mapRef.current, marker);
      });
    }
  };

  return (
    <div>
      <input type="text" ref={searchInputRef} placeholder="카페를 검색하세요" />
      <button onClick={handleSearch}>검색</button>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}

export default Kakao;
