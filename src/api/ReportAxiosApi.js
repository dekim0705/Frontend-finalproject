import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const ReportAxiosApi = {
  // 🍉 게시글 신고하기
  reportPost: async (postId, token) => {
    try {
      return await axios.delete(`${KH_DOMAIN}/post/${postId}/report`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      });
    } catch (error) {
      throw error;
    }
  },
};

export default ReportAxiosApi;
