import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const AuthAxiosApi = {
  // 🍉 로그인
  login : async(email, pwd) => {
    const loginUser = {
      email : email,
      pwd : pwd
    };
    return await axios.post(KH_DOMAIN + "/auth/login", loginUser);
  }
};

export default AuthAxiosApi;