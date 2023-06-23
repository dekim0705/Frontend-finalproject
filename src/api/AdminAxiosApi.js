import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const AdminAxiosApi = {
  // 🥨 모든 회원 조회
  getAllUsers : async (token) => {
    return await axios.get(KH_DOMAIN + "/admin/user", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
  },

  // 🥨 모든 게시글 조회
  getAllPosts : async (token) => {
    return await axios.get(KH_DOMAIN +"/admin/post", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
      }
    });
  }, 

  // 🥨 모든 댓글 조회
  getAllReplies : async (token) => {
    return await axios.get(KH_DOMAIN +"/admin/reply" , {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
  });
}, 

  // 🥨 모든 광고 조회
  getAllAds : async (token) => {
    return await axios.get(KH_DOMAIN +"/admin/ad" , {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
  });
}, 

  // 🥨 모든 문의 조회
  getAllinquiries : async (token) => {
    return await axios.get(KH_DOMAIN +"/admin/inquiry" , {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
  });
}, 
  // 🥨 모든 신고 조회
  getAllReports : async (token) => {
    return await axios.get(KH_DOMAIN +"/admin/report" , {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
  });
}, 



}

export default AdminAxiosApi;