import styled from 'styled-components';
import { StyledCheckbox, Button, TitleLink } from './PinListWeb';

const ParentContainer = styled.div`
  margin: 1rem auto;
  width: 90%;
  @media screen and (max-width: 768px) {
    width: 80%;  
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap || ''};
  margin-left: 1rem;
`;

export const MapContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid var(--line-color);
  padding: 10px 0;
  gap: 10px;
  margin: 0 auto;
  p {
    color: var(--input-text-color);
    font-size: 0.8rem;
  }
`;


export const SelectAllButton = styled.button`
  display: flex;
  align-items: center; 
  margin: 10px 0 0 -8px;
  line-height: 1.4rem;
  background-color: var(--line-color);
  border: 1px solid var(--hover-color);
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: var(--hover-color);
  }
`;

const PinListMobile = ({ isPostSelected, posts, selectAll, handleCheckboxChange, handleDeletePosts, handleSelectAllChange }) => {
  
  return (
    <>
      <ParentContainer>
        {posts.map((post) => (
          <div key={post.postNum}>
            <MapContainer>
              <RowWrapper>
                <StyledCheckbox
                  type="checkbox"
                  checked={isPostSelected(post.postNum)}
                  onChange={(event) => handleCheckboxChange(event, post.postNum)}
                />
                <TitleLink to={`/mypage`}>
                  {post.title}
                </TitleLink>
              </RowWrapper>
              <RowWrapper gap="1rem">
                <p style={{marginLeft: '2rem'}}>{post.nickname}</p>
                <p>{post.date}</p>
                <p>{post.view}</p>
              </RowWrapper>
            </MapContainer>
          </div>
        ))}
        <RowWrapper gap="1rem">
          <SelectAllButton>
            <StyledCheckbox
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAllChange}
            />
              <p>전체선택</p>
            </SelectAllButton>
            <Button onClick={handleDeletePosts}>
              삭제
            </Button>
          </RowWrapper>        
      </ParentContainer>
    </>
  );
};

export default PinListMobile;