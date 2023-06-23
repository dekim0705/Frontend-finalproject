import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const HomeAxiosApi = {
  // 🍉 회원 프로필 이미지
  pfImg: async (token) => {
    try {
      return await axios.get(KH_DOMAIN + "/home/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      throw error;
    }
  },
  // 🍉 전체 글 가져오기
  allPosts: async (token) => {
    try {
      return await axios.get(KH_DOMAIN + "/home/posts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      throw error;
    }
  },
  // 🍉 특정 지역 전체 글 가져오기
  regionAllPosts: async (city, token) => {
    try {
      return await axios.get(
        `${KH_DOMAIN}/home/posts/${encodeURIComponent(city)}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
    } catch (error) {
      throw error;
    }
  },
  // 🍉 키워드 검색
  searchPosts: async (keyword, token) => {
    try {
      return await axios.get(`${KH_DOMAIN}/home/search`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        params: {
          keyword: keyword
        }
      });
    } catch (error) {
      throw error;
    }
  }
};

export default HomeAxiosApi;
