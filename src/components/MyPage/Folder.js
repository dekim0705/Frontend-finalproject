import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const StyledFolder = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  padding: 14px;
  border: 1px solid #FF62AD;
  border-radius: 15px;
  text-decoration: none;
  background-color: var(--hover-color);
  margin: 0 auto;
  cursor: pointer;
  box-shadow: 3px 3px 3px #999;
  width: ${({ width }) => width || '280px'};
  height: ${({ height }) => height || '140px'};
  &:hover {
    border: 3px solid #FF62AD;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    border: none;
    box-shadow: none;
    background-color: transparent;
    &:active {
      background-color: var(--hover-color);
      outline: none;
    }
    &:hover {
    border: none;
    }
  }
`;

const FolderIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const FolderTitle = styled.h1`
  color: var(--text-color);
  font-size: 1.1rem;
  line-height: 1.8rem;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    margin-left: 30px;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const FolderDescription = styled.p`
  color: var(--text-color);
  font-size: 0.8rem;
  margin: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ChevronIconWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    margin-left: auto;
    display: block;


  }
`;

const Folder = ({ icon, title, to, desc}) => {

  return(
    <StyledFolder to={to}>
      <FolderIcon src={icon} alt={icon} />
      <FolderTitle>{title}</FolderTitle>
      <ChevronIconWrapper>
        <ChevronRightIcon />
      </ChevronIconWrapper>      
      <FolderDescription>{desc}</FolderDescription>
    </StyledFolder>
  );
}
export default Folder;