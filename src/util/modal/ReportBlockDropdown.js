import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReportModal from "./ReportModal";
import ReportAxiosApi from "../../api/ReportAxiosApi";
import Functions from "../Functions";
import { useNavigate } from "react-router-dom";
import UserPopUp from "./UserPopUp";

const ReportBlockDropdown = ({ postData, userId }) => {
  const token = localStorage.getItem("accessToken");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleReportPost = () => {
    const reportPost = async () => {
      try {
        const response = await ReportAxiosApi.reportPost(
          postData.postId,
          token
        );
        if (response.data === "게시글 신고 완료 ❤️") {
          setIsOpen(true);
        }
      } catch (error) {
        await Functions.handleApiError(error);
        const newToken = Functions.getAccessToken();
        if (newToken !== token) {
          const response = await ReportAxiosApi.reportPost(
            postData.postId,
            token
          );
          if (response.data === "게시글 신고 완료 ❤️") {
            setIsOpen(true);
          }
        }
      }
    };
    reportPost();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClosePopUp = () => {
    setIsOpen(false);
    navigate("/home");
  };

  const handleBlockUser = async () => {
    try {
      const response = await ReportAxiosApi.blockUser(userId, token);
      if (response.data === "차단 완료 ❤️") {
        setIsOpen(true);
      }
    } catch (error) {
      await Functions.handleApiError(error);
      const newToken = Functions.getAccessToken();
      if (newToken !== token) {
        const response = await ReportAxiosApi.blockUser(userId, newToken);
        if (response.data === "차단 완료 ❤️") {
          setIsOpen(true);
        }
      }
    }
  };

  return (
    <div>
      <MoreVertIcon
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ cursor: "pointer" }}
      ></MoreVertIcon>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleReportPost}>게시글 신고하기</MenuItem>
        <MenuItem onClick={handleBlockUser}>차단하기</MenuItem>
        <MenuItem onClick={toggleModal}>작성자 신고하기</MenuItem>
        <ReportModal
          open={isModalOpen}
          handleClose={toggleModal}
          userId={userId}
        />
        <UserPopUp
          open={isOpen}
          close={handleClosePopUp}
          header={"❗️"}
          closeText="확인"
        >
          해당 게시글/사용자를 신고/차단 하였습니다.
        </UserPopUp>
      </Menu>
    </div>
  );
};

export default ReportBlockDropdown;
