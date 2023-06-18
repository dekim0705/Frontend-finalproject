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
      const url = "https://apis.data.go.kr/B551011/KorService1/searchFestival1"; 

      const response = await axios.get(url, {
        params: {
          numOfRows: 6,
          pageNo: 1,
          MobileOS: "ETC",
          MobileApp: "todaysDate",
          _type: "_JSON", 
          listYN: "Y",
          eventStartDate: "20230601",
          eventEndDate: "20231231",
          serviceKey: apiKey,
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
