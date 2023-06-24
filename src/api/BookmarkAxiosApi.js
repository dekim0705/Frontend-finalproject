import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const BookmarkAxiosApi = {
  // 🍉 게시글의 북마크 여부 가져오기
  isBookmark: async (postId, token) => {
    try {
      return await axios.get(`${KH_DOMAIN}/bookmark/${postId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      throw error;
    }
  }
};

export default BookmarkAxiosApi;
