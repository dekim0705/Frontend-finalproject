import React, { useState } from 'react';
import styled from 'styled-components';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "../../../firebase";

const ProfileImageUploaderContainer = styled.div`
  margin-top: 1rem;
  position: relative;
  width: 180px;
  height: 180px;
  @media screen and (max-width: 768px) {
    width: 110px;
    height: 110px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const ProfileImageUploaderOverlay = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 1rem;
  opacity: 0;
  transition: opacity 0.3s;

  ${ProfileImageUploaderContainer}:hover & {
    opacity: 1;
  }
`;

const ProfileImageUploader = ({ defaultImage, onImageChange }) => {
  const [image, setImage] = useState(defaultImage);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const imageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(imageRef, file);
    const imageUrl = await getDownloadURL(imageRef);

    setImage(imageUrl);
    onImageChange(imageUrl);
  };

  return (
    <ProfileImageUploaderContainer>
      <ProfileImage 
        src={image} 
        alt="Profile" 
      />
      <ProfileImageUploaderOverlay>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        프로필 사진 변경
      </ProfileImageUploaderOverlay>
    </ProfileImageUploaderContainer>
  );
};

export default ProfileImageUploader;
