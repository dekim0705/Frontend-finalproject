import React from "react";
import FestivalAPI from "../FestivalAPI";

const FestivalMap = ({ page, contentId }) => {
  return (
    <FestivalAPI page={page}>
      {(apiData) => {
        const festivalData = apiData.find(
          (item) => item.contentid.toString() === contentId
        );

        if (festivalData) {
          const latitude = festivalData.coordinates.latitude;
          const longitude = festivalData.coordinates.longitude;

          const script = document.createElement("script");
          script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?appkey=48640fae3ffe04d4a299f306589d3c71";
          script.async = true;

          script.addEventListener("load", () => {
            const options = {
              center: new window.kakao.maps.LatLng(latitude, longitude),
              level: 3,
            };
            const map = new window.kakao.maps.Map(
              document.getElementById("map"),
              options
            );

            const markerPosition = { lat: latitude, lng: longitude };
            const marker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(
                markerPosition.lat,
                markerPosition.lng
              ),
            });
            marker.setMap(map);
          });

          document.body.appendChild(script);
        }

        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div id="map" style={{ width: "85%", height: "350px" }} />
          </div>
        );
      }}
    </FestivalAPI>
  );
};

export default FestivalMap;
