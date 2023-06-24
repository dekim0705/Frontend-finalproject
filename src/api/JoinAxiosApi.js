import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const JoinAxiosApi = {
  dupNickname: async (nickname) => {
    try {
      return await axios.post(KH_DOMAIN + "/join/dupnickname", null, {
        params: {
          nickname: nickname
        }
      });
    } catch (error) {
      throw error;
    }
  }
};

export default JoinAxiosApi;

