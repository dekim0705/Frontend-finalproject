import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const ReportAxiosApi = {
  // 🍉 게시글 신고하기
  reportPost: async (postId, token) => {
    try {
      return await axios.delete(`${KH_DOMAIN}/post/${postId}/report`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      throw error;
    }
  },
  // 🍉 사용자 신고하기
  reportUser: async (reportRequestDto, token) => {
    try {
      return await axios.post(`${KH_DOMAIN}/report`, reportRequestDto, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      throw error;
    }
  },
  // 🍉 사용자 차단하기
  blockUser: async (blockUserId, token) => {
    try {
      return await axios.post(
        `${KH_DOMAIN}/block/${blockUserId}`,
        {},
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
  // 🍉 사용자 차단 해제하기
  deleteBlockUser: async (blockedId, token) => {
    try {
      return await axios.delete(`${KH_DOMAIN}/block/${blockedId}`, {
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

export default ReportAxiosApi;
