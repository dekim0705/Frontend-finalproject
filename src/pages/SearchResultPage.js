import React, { useContext } from "react";
import styled from "styled-components";
import AppLayout from "../components/common/AppLayout";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

const KeywordContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  @media screen and (max-width: 768px) {
    margin-left: 24px;
  }
  h1 {
    color: var(--point-color);
    font-weight: bold;
    font-size: 2em;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 8px;
  flex-wrap: wrap;
  color: var(--text-color);
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;
const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AuthorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const AuthorInfo = styled.div`
  h1 {
    font-size: 0.9em;
  }
  p {
    padding-top: 4px;
    color: var(--input-text-color);
    font-size: 0.75em;
  }
`;
const PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;
  h1 {
    font-weight: 800;
    font-size: 1.3em;
  }
  p {
    font-size: 1.1em;
    font-weight: 500;
  }
`;
const StyledThumbnail = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 350px;
    border-radius: 15px;
  }
`;

const SearchResultPage = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchInput = queryParams.get("q");
  const { resultData } = useContext(SearchContext);

  return (
    <AppLayout>
      <KeywordContainer>
        <p>검색어 : </p>
        <h1>{searchInput}</h1>
      </KeywordContainer>
      <>
        {resultData.length > 0 ? (
          resultData.map((resultData) => (
            <Container key={resultData.id}>
              <PostHeader>
                <AuthorHeader>
                  <img
                    src={resultData.pfImg}
                    alt="작성자 프로필"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                    }}
                  />
                  <AuthorInfo>
                    <h1>{resultData.nickname}</h1>
                    <p>{resultData.writeDate}</p>
                  </AuthorInfo>
                </AuthorHeader>
              </PostHeader>
              <PostTitle>
                <h1>{resultData.title}</h1>
                <p>{resultData.district}</p>
              </PostTitle>
              <StyledThumbnail>
                <img src={resultData.thumbnail} alt="" />
              </StyledThumbnail>
            </Container>
          ))
        ) : (
          <p>게시글이 없습니다 ㅜㅜ </p>
        )}
      </>
    </AppLayout>
  );
};

export default SearchResultPage;