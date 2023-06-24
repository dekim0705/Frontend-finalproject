import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const PlaceCarousel = ({ postData }) => {
  if (!postData) {
    return <p>데이터가 없습니다!</p>;
  }
  return (
    <Carousel autoplay>
      {postData.placeTag.map((place, index) => (
        <div key={index}>
          <h3 style={contentStyle}>{postData.placeTag}</h3>
        </div>
      ))}
    </Carousel>
  );
};

export default PlaceCarousel;
