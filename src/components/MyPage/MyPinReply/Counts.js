import React from "react";
import styled from "styled-components";

const TotalCountContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  .label {
    font-size: 1rem;
    font-weight: 400;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
      width: 90px;
      margin: -4px 0 0 -16px;
    }
  }
`;

const Count = styled.span`
  font-weight: 600;
`;

const Counts = ({ count, label }) => {
  return (
    <TotalCountContainer>
      <span className="label">
        {label}
        <Count>{count}</Count>개
      </span>
    </TotalCountContainer>
  );
};

export default Counts;
