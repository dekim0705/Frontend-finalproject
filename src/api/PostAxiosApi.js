import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const PostAxiosApi = {
  // 🍉 글 작성
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
};

export default PostAxiosApi;
