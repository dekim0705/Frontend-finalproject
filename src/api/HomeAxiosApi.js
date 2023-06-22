import axios from "axios";
import Functions from "../util/Functions";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const HomeAxiosApi = {
  // 🍉 회원 프로필 이미지
  pfImg : async() => {
    Functions.setAuthorizationHeader();
    return await axios.get(KH_DOMAIN + "/home/profile")
  }
};


export default HomeAxiosApi;