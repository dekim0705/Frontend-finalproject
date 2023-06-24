import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const PostAxiosApi = {
  // 🍉 게시글 작성
  createPost: async (postPinDto, token) => {
    try {
      return await axios.post(KH_DOMAIN + "/posts", JSON.stringify(postPinDto), {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      throw error;
    }
  },
  // 🍉 게시글 조회
  viewPost: async (postId, token) => {
    try {
      return await axios.get(`${KH_DOMAIN}/posts/${postId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        }
      });
    } catch (error) {
      throw error;
    }
  }
};

export default PostAxiosApi;
