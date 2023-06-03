// ✨ 기본 지도 띄우기만 한 상태임. 추후 db에서 해당 게시글 경로 데이터 가져와야 함.
import React, { useEffect, useRef } from "react";

const KakaoMap = () => {
  const mapRef = useRef();

  useEffect(() => {
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    new window.kakao.maps.Map(mapRef.current, options);
  },[]);

  return (
    <div
        ref={mapRef}
        style={{ height: "450px" }}
      ></div>
  )
}

export default KakaoMap;
