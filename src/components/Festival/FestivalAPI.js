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
          areaCode: item.areacode,
          eventStartDate: item.eventstartdate,
          eventEndDate: item.eventenddate,
          mainImage: item.firstimage,
          thumbnail: item.firstimage2,
          title: item.title,
          contentid: item.contentid,
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
      console.error('api호출 에러!!', error);
    }

    // 추가 API 호출
    if (apiData.length > 0) {
      try {
        const contentIds = apiData.map((data) => data.contentid);
        const newUrls = contentIds.map((contentId) => `/B551011/KorService1/detailCommon1?MobileOS=ETC&MobileApp=todaysDate&_type=json&contentId=${contentId}&contentTypeId=15&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&serviceKey=${process.env.REACT_APP_FESTIVAL_API_KEY}`);

        const newResponses = await Promise.all(
          newUrls.map((newUrl) =>
            axios.get(newUrl, {
              headers: {
                "x-requested-with": "xhr",
              },
            })
          )
        );

        const newItems = newResponses.map((newResponse) => {
          const {
            data: {
              response: {
                body: {
                  items: { item: newItem },
                },
              },
            },
          } = newResponse;

          return newItem;
        });

        const newExtractedData = newItems.map((newItem, index) => {
          if (newItem && Array.isArray(newItem)) {
            return newItem.map((item) => ({
              overview: item.overview,
              homepage: item.homepage,
            }));
          } else {
            return [];
          }
        });

        // 기존 데이터에 새로운 공공데이터 추가
        const updatedData = apiData.map((data, index) => ({
          ...data,
          overview: newExtractedData[index] && newExtractedData[index][0] && newExtractedData[index][0].overview,
          homepage: newExtractedData[index] && newExtractedData[index][0] && newExtractedData[index][0].homepage,
        }));

        setApiData(updatedData);
        console.log('새로운 데이터 가져오기:', newExtractedData);

       // 이미지 API 호출
       const imageUrls = apiData.map((data) =>
       `/B551011/KorService1/detailImage1?MobileOS=ETC&MobileApp=todaysDate&_type=json&contentId=${data.contentid}&imageYN=Y&subImageYN=Y&numOfRows=10&pageNo=1&serviceKey=${process.env.REACT_APP_FESTIVAL_API_KEY}`
     );
     
        const imageResponses = await Promise.all(
          imageUrls.map((imageUrl) =>
            axios.get(imageUrl, {
              headers: {
                "x-requested-with": "xhr",
              },
            })
          )
        );
        
        const imageItems = imageResponses.map((imageResponse) => {
          const {
            data: {
              response: {
                body: {
                  items: { item: imageItem },
                },
              },
            },
          } = imageResponse;
        
          return imageItem;
        });
        const imageExtractedData = imageItems.map((imageItem) => {
          if (imageItem && Array.isArray(imageItem)) {
            return imageItem.map((item) => ({
              contentid: item.contentid,
              originimgurl: item.originimgurl,
              imgname: item.imgname,
              smallimageurl: item.smallimageurl,
              cpyrhtDivCd: item.cpyrhtDivCd,
              serialnum: item.serialnum,
            }));
          } else {
            return [];
          }
        });
        
// 기존 데이터에 이미지 데이터 추가
const updatedApiData = apiData.map((data, index) => ({
  ...data,
  images: imageExtractedData[index],
}));

setApiData(updatedApiData);
console.log('이미지 가져오기:', imageExtractedData);

        
      } catch (error) {
        console.error('추가 API 호출 에러!!', error);
      }
    }
  };

  return <div>{children(apiData, totalPages)}</div>;
};

export default FestivalAPI;
