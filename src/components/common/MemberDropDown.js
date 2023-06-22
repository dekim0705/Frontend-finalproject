import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import HomeAxiosApi from "../../api/HomeAxiosApi";

const MemberDropDown = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    setAnchorEl(null);
    navigate(option.path);
  };

  const options = [
    { path: "/", text: "로그아웃" },
    { path: "/mypage", text: "마이페이지" },
  ];

  // 🍉 회원 프로필
  const [profileImg, setProfileImg] = useState("");

  useEffect(() => {
    const getProfileImg = async () => {
      try {
        const response = await HomeAxiosApi.pfImg();
        setProfileImg(response.data);
      } catch (error) {
        console.error("🍒 : " + error);
      }
    };
    getProfileImg();
  }, []);

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img
          src={profileImg}
          alt="Profile"
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.text} onClick={() => handleClose(option)}>
            {option.text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MemberDropDown;