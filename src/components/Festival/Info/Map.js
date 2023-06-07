import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=48640fae3ffe04d4a299f306589d3c71";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        center: new window.kakao.maps.LatLng(35.86080935621928, 129.20076656227417),
        level: 3
      };
      new window.kakao.maps.Map(mapRef.current, options);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: "350px" }}
    ></div>
  );
}

export default Map;
