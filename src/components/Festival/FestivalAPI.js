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
      const url = `/B551011/KorService1/searchFestival1?serviceKey=${process.env.REACT_APP_FESTIVAL_API_KEY}&numOfRows=6&pageNo=${page}&MobileOS=ETC&MobileApp=%08todaysDate&_type=json&listYN=Y&arrange=A&eventStartDate=20230801&eventEndDate=20230930`;

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

      //   // 추가 API 호출 및 이미지 API 호출
      //   if (extractedData.length > 0) {
      //     const contentIds = extractedData.map((data) => data.contentid);
      //     const newUrls = contentIds.map((contentId) => `/B551011/KorService1/detailCommon1?MobileOS=ETC&MobileApp=todaysDate&_type=json&contentId=${contentId}&contentTypeId=15&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&serviceKey=${process.env.REACT_APP_FESTIVAL_API_KEY}&pageNo=${page}`);

      //     const newResponses = await Promise.all(
      //       newUrls.map((newUrl) =>
      //         axios.get(newUrl, {
      //           headers: {
      //             "x-requested-with": "xhr",
      //           },
      //         })
      //       )
      //     );

      //     const newItems = newResponses.map((newResponse) => {
      //       const {
      //         data: {
      //           response: {
      //             body: {
      //               items: { item: newItem },
      //             },
      //           },
      //         },
      //       } = newResponse;

      //       return newItem;
      //     });

      //     const newExtractedData = newItems.map((newItem) => {
      //       if (newItem && Array.isArray(newItem) && newItem.length > 0) {
      //         const items = newItem.map((item) => ({
      //           overview: item.overview,
      //           homepage: item.homepage,
      //         }));
      //         return items;
      //       } else {
      //         return [];
      //       }
      //     });

      //     const updatedData = apiData.map((data, index) => ({
      //       ...data,
      //       overview: newExtractedData[index] || [],
      //       homepage: newExtractedData[index] || [],
      //     }));

      //     setApiData(updatedData);
      //     console.log('새로운 데이터 가져오기:', updatedData);

          // // 이미지 API 호출
          // const imageUrls = apiData.map((data) =>
          //   `/B551011/KorService1/detailImage1?MobileOS=ETC&MobileApp=todaysDate&_type=json&contentId=${data.contentid}&imageYN=Y&subImageYN=Y&numOfRows=10&pageNo=1&serviceKey=${process.env.REACT_APP_FESTIVAL_API_KEY}&pageNo=${page}`
          // );

          // const imageResponses = await Promise.all(
          //   imageUrls.map((imageUrl) =>
          //     axios.get(imageUrl, {
          //       headers: {
          //         "x-requested-with": "xhr",
          //       },
          //     })
          //   )
          // );

          // const imageItems = imageResponses.map((imageResponse) => {
          //   const {
          //     data: {
          //       response: {
          //         body: {
          //           items: { item: imageItem },
          //         },
          //       },
          //     },
          //   } = imageResponse;

          //   return imageItem;
          // });

          // const imageExtractedData = imageItems.map((imageItem) => {
          //   if (imageItem && Array.isArray(imageItem) && imageItem.length > 0) {
          //     return imageItem.map((item) => ({
          //       contentid: item.contentid,
          //       originimgurl: item.originimgurl,
          //       imgname: item.imgname,
          //       smallimageurl: item.smallimageurl,
          //       cpyrhtDivCd: item.cpyrhtDivCd,
          //       serialnum: item.serialnum,
          //     }));
          //   } else {
          //     return [];
          //   }
          // });

          // const updatedApiData = apiData.map((data, index) => ({
          //   ...data,
          //   images: imageExtractedData[index] || [],
          // }));

          // setApiData(updatedApiData);
          // console.log('이미지 포함 가져오기:', updatedApiData);
          // return <div>{children(apiData, updatedApiData, totalPages)}</div>; 
        
      }
    } catch (error) {
      console.error('API 호출 에러!!', error);
    }
  };

  return <div>{children(apiData, totalPages)}</div>;
};

export default FestivalAPI;
