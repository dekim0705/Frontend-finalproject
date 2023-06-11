import React from 'react';
import { useParams } from 'react-router-dom';
import { BookmarkNav } from '../Navs';
import BookmarkedPin from './BookmarkedPin';
import { FolderContainer } from './BookmarkMain';

const BookmarkDetailPage = () => {
  const { folderName } = useParams();
  const decodedFolderName = decodeURIComponent(folderName);

  return(
    <>
      <BookmarkNav folderName={decodedFolderName}/>
      <FolderContainer>
        <BookmarkedPin />
        <BookmarkedPin />
        <BookmarkedPin />
        <BookmarkedPin />
        <BookmarkedPin />
      </FolderContainer>
    </>
  );
}
export default BookmarkDetailPage;