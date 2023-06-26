import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReportModal from "./ReportModal";
import ReportAxiosApi from "../../api/ReportAxiosApi";
import Functions from "../Functions";
import { useNavigate } from "react-router-dom";

const ReportBlockDropdownReply = ({ userNum }) => {
  const token = localStorage.getItem("accessToken");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBlockUser = async () => {
    try {
      const response = await ReportAxiosApi.blockUser(userNum, token);
      if (response.data === "차단 완료 ❤️") {
        alert("해당 사용자를 차단했습니다.");
        navigate("/home");
      }
    } catch (error) {
      await Functions.handleApiError(error);
      const newToken = Functions.getAccessToken();
      if (newToken !== token) {
        const response = await ReportAxiosApi.blockUser(userNum, newToken);
        if (response.data === "차단 완료 ❤️") {
          alert("해당 사용자를 차단했습니다.");
          navigate("/home");
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
        sx={{ cursor: "pointer", fontSize: 17, marginTop: "2px" }}
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
        <MenuItem onClick={handleBlockUser}>차단하기</MenuItem>
        <MenuItem onClick={toggleModal}>작성자 신고하기</MenuItem>
        <ReportModal open={isModalOpen} handleClose={toggleModal} />
      </Menu>
    </div>
  );
};

export default ReportBlockDropdownReply;
