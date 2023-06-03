import styled from 'styled-components'

export const ColumnWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column ;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.gap || ''};
  @media screen and (max-width:768px) {
    width: 80%;
  }
`;

export const RowWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${props => props.gap || ''};
  @media screen and (max-width:768px) {
    width: 80%;
  }
`;