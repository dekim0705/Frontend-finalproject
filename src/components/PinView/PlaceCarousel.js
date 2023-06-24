import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  color: #2e2e2e;
  h3 a {
    cursor: pointer;
    padding: 40px 70px;
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    outline: none;
  }
  a:hover {
    border: 1px solid var(--point-color);
    box-shadow: 0px 15px 20px rgba(244, 97, 159, 0.23);
    color: #2e2e2e;
    transition-duration: 0.35s;
  }
`;

const PlaceCarousel = ({ postData }) => {
  if (!postData) {
    return <p>데이터가 없습니다!</p>;
  }
  return (
    <Carousel autoplay>
      {postData.placeTag.map((place, index) => (
        <div key={index}>
          <StyledContent>
            <h3>
              <a
                href={`https://map.naver.com/v5/search/${place}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {place} 📎
              </a>
            </h3>
          </StyledContent>
        </div>
      ))}
    </Carousel>
  );
};

export default PlaceCarousel;
