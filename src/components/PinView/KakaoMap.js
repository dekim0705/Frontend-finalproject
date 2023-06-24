// ✨ 기본 지도 띄우기만 한 상태임. 추후 db에서 해당 게시글 경로 데이터 가져와야 함.
import React, { useEffect, useRef } from "react";

const KakaoMap = ({ postData }) => {
  const mapRef = useRef();

  useEffect(() => {
    let mapCenter = new window.kakao.maps.LatLng(33.450701, 126.570667);
    const level = 3;
  
    if(postData.pins && Array.isArray(postData.pins) && postData.pins.length > 0) {
      const firstPin = postData.pins[0];
      mapCenter = new window.kakao.maps.LatLng(firstPin.latitude, firstPin.longitude);
    }
  
    const options = {
      center: mapCenter,
      level: level
    };
    
    const map = new window.kakao.maps.Map(mapRef.current, options);
  
    if(postData.pins && Array.isArray(postData.pins)) {
      postData.pins.forEach((pin) => {
        const markerPosition = new window.kakao.maps.LatLng(pin.latitude, pin.longitude);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });
  
        marker.setMap(map);
      });
    }
  },[postData]);
  

  return (
    <div
        ref={mapRef}
        style={{ height: "450px" }}
      ></div>
  )
}

export default KakaoMap;
