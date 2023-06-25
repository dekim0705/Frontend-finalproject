import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const AuthAxiosApi = {
  // 🍉 로그인
  login: async (email, pwd) => {
    const loginUser = {
      email: email,
      pwd: pwd,
    };
    return await axios.post(KH_DOMAIN + "/auth/login", loginUser);
  },
  // 🍉 이메일 유효한지 확인
  email: async (email) => {
    try {
      return await axios.get(`${KH_DOMAIN}/auth/email/${email}`);
    } catch (error) {
      throw error;
    }
  },
  // 🍉 비밀번호 재설정
  resetPwd: async (email) => {
    try {
      return await axios.get(`${KH_DOMAIN}/auth/password/${email}`);
    } catch (error) {
      throw error;
    }
  }
};

export default AuthAxiosApi;
