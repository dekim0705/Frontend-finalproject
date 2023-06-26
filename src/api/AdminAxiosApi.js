import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const AdminAxiosApi = {
  // 🥨 모든 회원 조회
  getAllUsers : async (token) => {
    try {
      return await axios.get(KH_DOMAIN + "/admin/user", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      });
    } catch (error) {
      throw error;
    }
},

  // 🥨 모든 게시글 조회
  getAllPosts : async (token) => {
    try {
      return await axios.get(KH_DOMAIN + "/admin/post", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      });
    } catch (error) {
      throw error;
    }
},

  // 🥨 모든 댓글 조회
  getAllReplies : async (token) => {
    try {
      return await axios.get(KH_DOMAIN + "/admin/reply", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      });
    } catch (error) {
      throw error;
    }
},

  // 🥨 모든 광고 조회
  getAllAds : async (token) => {
    try {
      return await axios.get(KH_DOMAIN + "/admin/ad", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      });
    } catch (error) {
      throw error;
    }
},

  // 🥨 모든 문의 조회
  getAllinquiries : async (token) => {
    try {
      return await axios.get(KH_DOMAIN + "/admin/inquiry", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      });
    } catch (error) {
      throw error;
    }
},

  // 🥨 모든 신고 조회
  getAllReports : async (token) => {
    try {
      return await axios.get(KH_DOMAIN + "/admin/report", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      throw error;
    }
},

// 🥨 회원 삭제
  deleteUsers: async (userIds, token) => {
    try {
      return await axios.delete(KH_DOMAIN + "/admin/delete/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        data: userIds
      });
    } catch (error) {
      throw error;
   }
},

// 🥨 게시글 삭제
  deletePosts: async (postIds, token) => {
    try {
      return await axios.delete(KH_DOMAIN + "/admin/delete/posts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        data: postIds
      });
    } catch (error) {
      throw error;
   }
},

// 🥨 댓글 삭제
  deleteReplies: async (replyIds, token) => {
    try {
      return await axios.delete(KH_DOMAIN + "/admin/delete/replies", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        data: replyIds
      });
    } catch (error) {
      throw error;
    }
  },

// 🥨 광고 삭제
deleteAds: async (adIds, token) => {
  try {
    return await axios.delete(KH_DOMAIN + "/admin/delete/ad", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: adIds
    });
  } catch (error) {
    throw error;
 }
},

// 🥨 광고 추가
createAd: async (adDto, token) => {
  try {
    return await axios.post(KH_DOMAIN + "/admin/ad/new", adDto, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }
    });
  } catch (error) {
    throw error;
  }
},

// 🥨 회원 검색
searchUsers: async (keyword, token) => {
  try {
    return await axios.get(KH_DOMAIN + "/admin/user/search", {
      params: { keyword },
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token,
      },
    });
  } catch (error) {
    throw error;
  }
},

// 🥨 게시글 검색
searchPosts: async (keyword, token) => {
  try {
    return await axios.get(KH_DOMAIN + "/admin/posts/search", {
      params: { keyword },
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token,
      },
    });
  } catch (error) {
    throw error;
  }
},

// 🥨 댓글 검색
searchReplies: async (keyword, token) => {
  try {
    return await axios.get(KH_DOMAIN + "/admin/replies/search", {
      params: { keyword },
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token,
      },
    });
  } catch (error) {
    throw error;
  }
},

// 🥨 문의 상태 변경
updateStatus: async (inquiryNum, status, token) => {
  try {
    return await axios.put(KH_DOMAIN + `/admin/inquiry/${inquiryNum}?status=${status}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token,
      },
    });
  } catch (error) {
    throw error;
  }
},

}

export default AdminAxiosApi;