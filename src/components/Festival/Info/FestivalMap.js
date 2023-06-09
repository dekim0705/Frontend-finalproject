import React, { useEffect, useRef } from "react";

const FestivalMap = () => {
  const mapRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=48640fae3ffe04d4a299f306589d3c71";
    script.async = true;

    script.addEventListener("load", () => {
      const options = {
        center: new window.kakao.maps.LatLng(35.86080935621928, 129.20076656227417),
        level: 3
      };
      const map = new window.kakao.maps.Map(mapRef.current, options);

      const markerPosition = { lat: 35.86080935621928, lng: 129.20076656227417 };
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(markerPosition.lat, markerPosition.lng)
      });
      marker.setMap(map);
    });

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%"
      }}
    >
      <div ref={mapRef} style={{ width: "85%", height: "350px" }} />
    </div>
  );
};

export default FestivalMap;
