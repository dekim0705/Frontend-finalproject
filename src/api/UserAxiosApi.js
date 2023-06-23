import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

  const UserAxiosApi = {
    // 회원 프로필 바
    userProfile : async(token) => {
      try{
        return await axios.post(KH_DOMAIN + "/mypage/profile", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
        });
      } catch (error) {
        throw error;
      }
    },
    // 회원의 모든 글
    userPosts : async(token) => {
      try {
        return await axios.get(KH_DOMAIN + "/mypage/posts", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
        });
      } catch (error) {
        throw error;
      }
    },
    // 회원의 모든 댓글
    userReplies : async(token) => {
      try {
        return await axios.get(KH_DOMAIN + "/mypage/replies", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
        });
      } catch (error) {
        throw error;
      }
    },
    // 글 삭제
    deletePosts: async(postIds, token) => {
      try {
        return await axios.delete(KH_DOMAIN + "/mypage/posts", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          data: postIds
        });
      } catch (error) {
        throw error;
      }
    },
    // 댓글 삭제
    deleteReplies: async(replyIds, token) => {
      try {
        return await axios.delete(KH_DOMAIN + "/mypage/replies", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          data: replyIds
        });
      } catch (error) {
        throw error;
      }
    },

  };
export default UserAxiosApi;

