import React from 'react';
import styled from 'styled-components';

const TotalCountContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px;
  .label {
    font-size: 1rem;
    font-weight: 400;
  }
`;

const Count = styled.span`
  font-weight: 600;
`;

const Counts = ({ count, label }) => {
  return (
    <TotalCountContainer>
      <span className='label'>{label}<Count>{count}</Count>개</span>
    </TotalCountContainer>
  );
};

export default Counts;
