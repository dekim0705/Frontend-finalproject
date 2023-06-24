import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppLayout from "../components/common/AppLayout";
import PostHeader from "../components/PinView/PostHeader";
import PostContent1 from "../components/PinView/PostContent1";
import PostContent2 from "../components/PinView/PostContent2";
import ReplyWrite from "../components/PinView/ReplyWrite";
import ReplyList from "../components/PinView/ReplyList";
import PostAxiosApi from "../api/PostAxiosApi";
import Functions from "../util/Functions";
import UpdateDelete from "../components/PinView/UpdateDelete";

const PinViewPage = () => {
  const token = localStorage.getItem('accessToken');
  const { postId } = useParams();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const getPostView = async () => {
      try {
        const response = await PostAxiosApi.viewPost(postId, token);
        console.log("🦜 : " + JSON.stringify(response.data, null, 2));
        setPostData(response.data);
      } catch (error) {
        await Functions.handleApiError(error);
        const newToken = Functions.getAccessToken();
        if (newToken !== token) {
          const response = await PostAxiosApi.viewPost(postId, token);
          console.log("🦜 : " + JSON.stringify(response.data, null, 2));
          setPostData(response.data);
        }
      }
    };
    getPostView();
  }, [postId, token]);

  return (
    <>
      <AppLayout>
        <PostHeader postData={postData} />
        <UpdateDelete postId={postId}/>
        <PostContent1 postData={postData} />
        <PostContent2 postData={postData} />
        <ReplyWrite />
        <ReplyList />
      </AppLayout>
    </>
  );
}

export default PinViewPage;