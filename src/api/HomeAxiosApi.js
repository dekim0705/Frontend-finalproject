import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const HomeAxiosApi = {
  // 🍉 회원 프로필 이미지
  pfImg : async(token) => {
    return await axios.get(KH_DOMAIN + "/home/profile", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
  }
};

export default HomeAxiosApi;