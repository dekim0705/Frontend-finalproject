import { useState, useEffect } from 'react';
import ProfileBar2 from './ProfileBar2';
import { PinReplyNav } from '../Navs';
import PinListWeb from './PinListWeb';
import PinListMobile from './PinListMobile';

const PinList = () => {
  const [isMobile, setIsMobile] = useState(false); // 반응형 

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


  const dummyData = [
    {
      postNum: 1,
      title: "한옥마을에서 한복 입고 데이트~한옥마을짱짱",
      content: "저는 개나리색 한복을 입었는데 너무 화사하구 정말 예쁘더라구요!",
      date: "2023.06.06",
      view: "100"
    },
    {
      postNum: 2,
      title: "한옥마을에서 한복 입고 데이트~",
      content: "저는 개나리색 한복을 입었는데 너무 화사하구 정말 예쁘더라구요!",
      date: "2023.06.06",
      view: "123"
    },
    {
      postNum: 3,
      title: "한옥마을에서 한복 입고 데이트~",
      content: "저는 개나리색 한복을 입었는데 너무 화사하구 정말 예쁘더라구요!",
      date: "2023.06.06",
      view: "123"
    },
    {
      postNum: 4,
      title: "한옥마을에서 한복 입고 데이트~",
      content: "저는 개나리색 한복을 입었는데 너무 화사하구 정말 예쁘더라구요!",
      date: "2023.06.06",
      view: "123"
    },
    {
      postNum: 5,
      title: "한옥마을에서 한복 입고 데이트~",
      content: "저는 개나리색 한복을 입었는데 너무 화사하구 정말 예쁘더라구요!",
      date: "2023.06.06",
      view: "123"
    },
  ];

  // const [userPosts, setUserPosts] = useState(dummyData); // 회원의 모든 게시글
  const [userPosts] = useState(dummyData); // 회원의 모든 게시글
  const [selectedPosts, setSelectedPosts] = useState([]); // 선택되는 게시글
  const [selectAll, setSelectAll] = useState(false);

  // 전체 선택 체크박스 변경 이벤트 핸들러
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

  return (
    <>
      <ProfileBar2 />
      <PinReplyNav />
        {/* 웹용 컴포넌트 */}
        {!isMobile && 
        <PinListWeb
          posts={userPosts}
          selectedPosts={selectedPosts}
          selectAll={selectAll}
          handleSelectAllChange={handleSelectAllChange}
          handleCheckboxChange={handleCheckboxChange}
          handleDeletePosts={handleDeletePosts}
          isPostSelected={isPostSelected}
        /> }

        {/* 모바일용 컴포넌트 */}
        {isMobile && 
        <PinListMobile
          posts={userPosts}
          selectedPosts={selectedPosts}
          selectAll={selectAll}
          handleSelectAllChange={handleSelectAllChange}
          handleCheckboxChange={handleCheckboxChange}
          handleDeletePosts={handleDeletePosts}
          isPostSelected={isPostSelected}
        /> }
    </>
  );
};

export default PinList;
