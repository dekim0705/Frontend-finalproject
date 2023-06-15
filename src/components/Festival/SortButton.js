import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 1.1rem;
  color: var(--text-color);
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

const Separator = styled.div`
  width: 1px;
  height: 16px;
  background-color: #ccc;
`;

const SortButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 35px;

  ${Button} {
    padding: 0px 8px;
  }
`;

const SortButtons = () => {
  const [sortBy, setSortBy] = useState('date');

  const handleSort = (type) => {
    setSortBy(type);
  };

  return (
    <SortButtonsContainer>
      <Button
        onClick={() => handleSort('date')}
        style={{
          color: sortBy === 'date' ? '#FF62AD' : '#2e2e2e',
        }}
      >
        날짜순
      </Button>
      <Separator />
      <Button
        onClick={() => handleSort('views')}
        style={{
          color: sortBy === 'views' ? '#FF62AD' : '#2e2e2e',
        }}
      >
        이름순
      </Button>
    </SortButtonsContainer>
  );
};

export default SortButtons;
