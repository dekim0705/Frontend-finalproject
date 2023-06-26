import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookmarkNav } from '../Navs';
import BookmarkedPin from './BookmarkedPin';
import { FolderContainer } from './BookmarkMain';
import Functions from '../../../util/Functions';
import UserAxiosApi from '../../../api/UserAxiosApi';


const BookmarkDetailPage = () => {
  const { folderId } = useParams();

  // const decodedFolderName = decodeURIComponent(folderId);

  const [bookmarks, setBookmarks] = useState([]); 
  const token = Functions.getAccessToken();


  useEffect(() => {
    const getUserBookmarks = async () => {
      try {
        const response = await UserAxiosApi.userBookmarks(token, folderId);
        // console.log("🍒 북마크 : ", response.data)
        setBookmarks(response.data); 
      } catch (error) {
        await Functions.handleApiError(error);
        const newToken = Functions.getAccessToken();
        if (newToken !== token) {
          const response = await UserAxiosApi.userBookmarks(newToken, folderId);
          setBookmarks(response.data); 
        }
      }
    };
    getUserBookmarks();
  }, [token, folderId])
  

  return(
    <>
      <BookmarkNav />
      <FolderContainer>
      {bookmarks.map((bookmark) => (
        <BookmarkedPin
          key={bookmark.id}
          thumbnail={bookmark.imgUrl}
          title={bookmark.title}
          district={bookmark.district}
          postId={bookmark.postId}
        />
      ))}
      </FolderContainer>
    </>
  );
}
export default BookmarkDetailPage;