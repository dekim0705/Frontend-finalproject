import axios from "axios";

const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const ChatbotAxiosApi = {
// 🏝️ 문의 작성
createInquiry: async (chatbotDto, token) => {
  try {
    return await axios.post(KH_DOMAIN + "/chatbot/inquiry", chatbotDto, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }
    });
  } catch (error) {
    throw error;
  }
},
}

export default ChatbotAxiosApi;