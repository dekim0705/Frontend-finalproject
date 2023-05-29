import React from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import home from '../../resource/bottomNav_home.png';


const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #F9F9F9;
  @media screen and (min-width:768px) {
    display: none;
  }
  
  .icon {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px 0;
    cursor: pointer;
    img {
      width: 25px;
    }
  }
`;

const BottomNav = () => {

  return (
    <Container>
      <div className="icon"><ArrowBackIosNewIcon sx={{ fontSize: "25px" }} /></div>
      <div className="icon"><img src={home} alt="" /></div>
      <div className="icon"><PersonPinIcon sx={{ fontSize: "30px" }} /></div>
    </Container>
  );
}

export default BottomNav;