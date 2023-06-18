import React, { useState, useEffect } from "react";
import axios from "axios";

const FestivalAPI = ({ children, page }) => {
  const [apiData, setApiData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const url = `/B551011/KorService1/searchFestival1?serviceKey=${process.env.REACT_APP_FESTIVAL_API_KEY}&numOfRows=6&pageNo=${page}&MobileOS=ETC&MobileApp=%08todaysDate&_type=json&listYN=Y&arrange=A&eventStartDate=20230601`;

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
          regionCode: item.areacode,
          eventStartDate: item.eventstartdate,
          eventEndDate: item.eventenddate,
          mainImage: item.firstimage,
          thumbnail: item.firstimage2,
          title: item.title,
          coordinates: {
            latitude: item.mapy,
            longitude: item.mapx,
          },
        }));

        setApiData(extractedData);
        setTotalPages(Math.ceil(totalCount / 6)); 
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <div>{children(apiData, totalPages)}</div>;
};

export default FestivalAPI;
