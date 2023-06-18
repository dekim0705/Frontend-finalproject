import React, { useState, useEffect } from "react";
import axios from "axios";

const FestivalAPI = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiKey = process.env.REACT_APP_FESTIVAL_API_KEY;
      const url = "http://apis.data.go.kr/B551011/KorService1/detailIntro1";

      const response = await axios.get(url, {
        params: {
          ServiceKey: apiKey,
          numOfRows: 10,
          pageNo: 1,
          MobileOS: "ETC",
          MobileApp: "AppTest",
          arrange: "A",
          listYN: "Y",
          contentTypeId: 15,
          eventStartDate: "20230601",
        },
      });

      const { data: { response: { body: { items: { item } = {} } = {} } = {} } = {} } = response;

      if (item) {
        const extractedData = item.map((item) => ({
          address: item.addr1,
          regionCode: item.areacode,
          eventStartDate: item.eventstartdate,
          eventEndDate: item.eventenddate,
          mainImage: item.firstimage,
          thumbnail: item.firstimage2,
          title: item.title,
          phoneNumber: item.tel,
          coordinates: {
            latitude: item.mapy,
            longitude: item.mapx,
          },
        }));

        console.log('결과 확인 !!: ' ,extractedData);
        setApiData(extractedData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <>{children(apiData)}</>;
};

export default FestivalAPI;
