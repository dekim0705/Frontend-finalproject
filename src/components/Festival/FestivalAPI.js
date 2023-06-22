import React, { useState, useEffect } from "react";
import axios from "axios";

const FestivalAPI = ({ children, page, contentId }) => {
  const [apiData, setApiData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  },  [page, contentId]);

  const fetchData = async () => {
    try {
      const url = `/B551011/KorService1/searchFestival1?serviceKey=${process.env.REACT_APP_FESTIVAL_API_KEY}&numOfRows=99&&MobileOS=ETC&MobileApp=%08todaysDate&_type=json&listYN=Y&arrange=A&eventStartDate=20230701&eventEndDate=20231231`;

      const response = await axios.get(url, {
        headers: {
          "x-requested-with": "xhr",
        },
      });

      const {
        data: {
          response: {
            body: {
              items: { item },
              totalCount,
            },
          },
        },
      } = response;

      if (item) {
        const extractedData = item.map((item) => ({
          address: item.addr1,
          areaCode: item.areacode,
          eventStartDate: item.eventstartdate,
          eventEndDate: item.eventenddate,
          mainImage: item.firstimage,
          title: item.title,
          contentid: item.contentid,
          tel:item.tel,
          coordinates: {
            latitude: item.mapy,
            longitude: item.mapx,
          },
        }));

        console.log('데이터 가져오기:', extractedData);
        setApiData(extractedData);
        setTotalPages(Math.ceil(totalCount / 6));
        
      }
    } catch (error) {
      console.error('API 호출 에러!!', error);
    }
  };

  return <div>{children(apiData, totalPages)}</div>;
};

export default FestivalAPI;
