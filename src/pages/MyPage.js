import React from 'react';
import ProfileBar from '../components/MyPage/ProfileBar';
import Header from '../components/common/Header';
import Folder from '../components/MyPage/Folder';
import styled from 'styled-components';

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

`;

const RowWrapper = styled.div`
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

const MyPage = () => {
  return(
    <>
      <Header />
      <RowWrapper>
        <ProfileBar />
          <ColumnWrapper>
          <Folder />
          <Folder />
          </ColumnWrapper>    
          <ColumnWrapper>
          <Folder />
          <Folder />
        </ColumnWrapper>        
      </RowWrapper>
    </>
  );
}
export default MyPage;