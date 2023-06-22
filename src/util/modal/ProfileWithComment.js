import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .popup {
    position: absolute;
    top: 40%;
    left: 100%;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    font-size: 0.9em;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s;
  }

  &:hover .popup {
    visibility: visible;
    opacity: 1;
  }
`;

const ProfileWithComment = ({ pfImg, comment }) => {
  return (
    <StyledContainer>
      <img src={pfImg} alt="" />
      <div className="popup">{comment}</div>
    </StyledContainer>
  );
};

export default ProfileWithComment;
