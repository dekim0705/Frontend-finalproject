import React, { useEffect, useRef } from "react";
import { addMarker, addLine } from '../../util/mapUtil';
import marker01 from "../../resource/pin_icon/01.png";
import marker02 from "../../resource/pin_icon/02.png";
import marker03 from "../../resource/pin_icon/03.png";
import marker04 from "../../resource/pin_icon/04.png";
import marker05 from "../../resource/pin_icon/05.png";
import marker06 from "../../resource/pin_icon/06.png";
import marker07 from "../../resource/pin_icon/07.png";
import marker08 from "../../resource/pin_icon/08.png";
import marker09 from "../../resource/pin_icon/09.png";
import marker10 from "../../resource/pin_icon/10.png";

const KakaoMap = ({ postData }) => {
  const markerImages = [marker01, marker02, marker03, marker04, marker05, marker06, marker07, marker08, marker09, marker10];
  const mapRef = useRef();

  useEffect(() => {
    let centerLat = 0;
    let centerLng = 0;

    if(postData.pins && Array.isArray(postData.pins)) {
      postData.pins.sort((a, b) => a.routeNum - b.routeNum);
  
      postData.pins.forEach((pin) => {
        centerLat += pin.latitude;
        centerLng += pin.longitude;
      });

      centerLat /= postData.pins.length;
      centerLng /= postData.pins.length;
    }

    const options = {
      center: new window.kakao.maps.LatLng(centerLat, centerLng),
      level: 3
    };
    const map = new window.kakao.maps.Map(mapRef.current, options);

    let markers = [];
    if(postData.pins && Array.isArray(postData.pins)) {
      postData.pins.forEach((pin, index) => {
        const markerPosition = new window.kakao.maps.LatLng(pin.latitude, pin.longitude);
        const marker = addMarker(markerPosition, map, index, markerImages);
        markers.push(marker);
      });
    }
    
    if(markers.length > 1) {
      addLine(markers, map);
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