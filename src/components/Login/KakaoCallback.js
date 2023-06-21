import React from "react";
// import { useLocation } from "react-router-dom";
// import KakaoAxiosApi from "../../api/KakaoAxiosApi";

const KakaoCallback = () => {
  // const location = useLocation();

  // const sendAuthCode = async (code) => {
  //   try {
  //     const response = await KakaoAxiosApi.kakaoAuthCode(code);
  //     console.log("🍔확인!!!" + response.data);
  //   } catch (error) {
  //     console.error("서버에 인가 코드를 보내는 데 실패했습니다..",error);
  //   }
  // };

  // useEffect(() => {
  //   const url = new URL(window.location.href);
  //   const authorizationCode = url.searchParams.get("code");

  //   console.log("🍑인가 코드🍑 " + authorizationCode);

  //   if (authorizationCode) {
  //     sendAuthCode(authorizationCode);
  //   }
  // }, [location]);
  return (
    <>
      <h1>결제가 진행중입니다.</h1>
    </>
  );
}

export default KakaoCallback;