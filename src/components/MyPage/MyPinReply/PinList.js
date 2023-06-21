import { useState, useEffect } from 'react';
import ProfileBar2 from './ProfileBar2';
import { PinReplyNav } from '../Navs';
import PinListWeb from './PinListWeb';
import PinListMobile from './PinListMobile';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';

const PinList = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false); // 반응형 
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const postsPerPage = 10; // 페이지당 보여줄 게시글 수

  useEffect(() => { // 반응형
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const dummyData = [];
    for (let i = 1; i <= 53; i++) {
      dummyData.push({
        postNum: i,
        title: `게시글 제목 ${i}`,
        content: `게시글 내용 ${i}`,
        nickname: '자바광팬아님',
        date: "23.06.06",
        view: 100 + i
      });
    }

  // const [userPosts, setUserPosts] = useState(dummyData); // 회원의 모든 게시글
  const [userPosts] = useState(dummyData); // 회원의 모든 게시글
  const [selectedPosts, setSelectedPosts] = useState([]); // 선택되는 게시글
  const [selectAll, setSelectAll] = useState(false);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummyData.slice(indexOfFirstPost, indexOfLastPost);
  // const totalPosts = dummyData.length;
  // const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allPostNums = userPosts.map((post) => post.postNum);
      setSelectedPosts(allPostNums);
    } else {
      setSelectedPosts([]);
    }
  };

  // 게시글 선택 여부
  const isPostSelected = (postNum) => {
    return selectedPosts.includes(postNum);
  };

  // 체크박스 선택 함수
  const handleCheckboxChange = (event, postNum) => {
    if (event.target.checked) {
      setSelectedPosts((prevSelected) => [...prevSelected, postNum]);
      console.log(selectedPosts);
    } else {
      setSelectedPosts((prevSelected) => prevSelected.filter((id) => id !== postNum));
    }
  };
  
  const handleDeletePosts = () => {
    console.log('핀 삭제 ! ')
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/mypage/pin-list/${pageNumber}`);
  };

  return (
    <>
      <ProfileBar2 />
      <PinReplyNav />
        {/* 웹용 컴포넌트 */}
        {!isMobile && 
        <>
          <PinListWeb
            posts={currentPosts}
            selectedPosts={selectedPosts}
            selectAll={selectAll}
            handleSelectAllChange={handleSelectAllChange}
            handleCheckboxChange={handleCheckboxChange}
            handleDeletePosts={handleDeletePosts}
            isPostSelected={isPostSelected}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(userPosts.length / postsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
        }

        {/* 모바일용 컴포넌트 */}
        {isMobile && (
        <>
          <PinListMobile
            posts={currentPosts}
            selectedPosts={selectedPosts}
            selectAll={selectAll}
            handleSelectAllChange={handleSelectAllChange}
            handleCheckboxChange={handleCheckboxChange}
            handleDeletePosts={handleDeletePosts}
            isPostSelected={isPostSelected}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(userPosts.length / postsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

export default PinList;