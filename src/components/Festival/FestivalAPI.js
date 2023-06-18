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
      const url = `https://cors-anywhere.herokuapp.com/https://apis.data.go.kr/B551011/KorService1/searchFestival1?serviceKey=HNcIwPuzjwxn2eLOR5VlJGA0CQdz0OFSRjAo0OXziQ7tV8t6PdHfPkh97P4pyl%2FVuhLLYOe7a2ZH8DyqIwWTRQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=%08todaysDate&_type=json&listYN=Y&arrange=A&eventStartDate=20230601`;

      const response = await axios.get(url, {
        headers: {
          "x-requested-with": "xhr",
        },
      });

      const {
        data: { response: { body: { items: { item } = {} } = {} } = {} } = {},
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
          phoneNumber: item.tel,
          coordinates: {
            latitude: item.mapy,
            longitude: item.mapx,
          },
        }));

        console.log("결과 확인 !!: ", extractedData);
        setApiData(extractedData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>API Data:</h1>
      {apiData.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>Address: {item.address}</p>
          <p>Region Code: {item.regionCode}</p>
          <p>Start Date: {item.eventStartDate}</p>
          <p>End Date: {item.eventEndDate}</p>
          <img src={item.mainImage} alt={item.title} />
          <img src={item.thumbnail} alt={`${item.title} thumbnail`} />
          <p>Phone: {item.phoneNumber}</p>
          <p>
            Coordinates: {item.coordinates.latitude},{" "}
            {item.coordinates.longitude}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FestivalAPI;
