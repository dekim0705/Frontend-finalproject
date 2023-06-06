import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import thumbnail from "../../../resource/축제썸네일.jpg";
import thumbnail2 from "../../../resource/축제썸네일2.png";
import thumbnail3 from "../../../resource/축제썸네일3.jpg";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 3.3rem;
  color: gray;
  padding: 0px;

  svg {
    font-size: 3rem;
    font-weight: bold;
  }
`;

const Window = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Flexbox = styled.div`
  display: flex;
  transition: transform 0.3s ease-out;
  transform: ${({ current, imgSize }) => `translateX(-${current * (100 / imgSize)}%)`};
  @media (max-width: 600px) {
    transform: ${({ current }) => `translateX(-${current * 100}%)`};
  }
`;

const Img = styled.img`
  width: 31.5%;
  height: 180px;
  object-fit: cover;
  margin: 0px 7px;
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0px 10px;
  }
`;

const Position = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const Dot = styled.div`
  background: lightgray;
  border-radius: 100%;
  height: 10px;
  width: 10px;
  & + & {
    margin-left: 20px;
  }
`;

const CurrentDot = styled(Dot)`
  background: gray;
`;

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const imgSize = useRef(3);

  const moveSlide = (i) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };

  useEffect(() => {
    imgSize.current = images.length;
  }, []);

  const images = [thumbnail, thumbnail2, thumbnail3];

  return (
    <Container>
      <Slide>
        <Button onClick={() => moveSlide(-1)}>
          <NavigateBeforeIcon />
        </Button>
        <Window>
          <Flexbox current={current} imgSize={imgSize.current}>
            {images.map((src, i) => (
              <Img key={i} src={src} alt={`Image ${i}`} imgSize={imgSize.current} />
            ))}
          </Flexbox>
        </Window>
        <Button onClick={() => moveSlide(1)}>
          <NavigateNextIcon />
        </Button>
      </Slide>
      <Position>
        {images.map((_, i) => (i === current ? <CurrentDot key={i} /> : <Dot key={i} />))}
      </Position>
    </Container>
  );
};

export default Carousel;
