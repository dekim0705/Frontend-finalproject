import thumbnail from "../../../resource/축제썸네일.jpg";
import thumbnail2 from "../../../resource/축제썸네일2.png";
import thumbnail3 from "../../../resource/축제썸네일3.jpg";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';


const CarouselContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 30px;
    line-height: 1;
    opacity: 0.65;
    color: #000000;
    -webkit-font-smoothing: antialiased;
  }
  
  
`;
const Image = styled.img`
  width: 95%;
  border-radius: 10px;
  margin: 0 auto;
`;





const Carousel = () => {
  const images = [thumbnail, thumbnail2, thumbnail3, thumbnail, thumbnail2, thumbnail3];

  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    speed: 500,
    prevArrow: <button className="slick-prev" />,
    nextArrow: <button className="slick-next" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;







