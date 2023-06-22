import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const AuthAxiosApi = {
  // 🔑 액세스 토큰 새로 발급
  renewToken: async (refreshToken) => {
    const token = {
      refreshToken: refreshToken
    };
    try {
      const response = await axios.post(KH_DOMAIN + "/auth/token", token);

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(
        "🔴 에러 : ",
        error.response ? error.response.data : error.message
      );
      return null;
    }
  },
  // 🍉 로그인
  login: async (email, pwd) => {
    const loginUser = {
      email: email,
      pwd: pwd,
    };
    return await axios.post(KH_DOMAIN + "/auth/login", loginUser);
  },
};

export default AuthAxiosApi;
