import React, { useContext, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import HomeAxiosApi from "../../api/HomeAxiosApi";
import Functions from "../../util/Functions";
import { UserContext } from "../../context/UserContext";

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

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const options = [
    { path: "/", text: "로그아웃", onClick: handleLogout },
    { path: "/mypage", text: "마이페이지" },
  ];

  // 🍉 회원 프로필
  const [profileImg, setProfileImg] = useState("");
  const token = Functions.getAccessToken();

  // 🍉 멤버십 유무
  const { setIsMembership } = useContext(UserContext);

  useEffect(() => {
    const getProfileImg = async () => {
      try {
        const response = await HomeAxiosApi.userInfo(token);
        console.log("🐓 : " + JSON.stringify(response.data, null, 2));
        setProfileImg(response.data.pfImg);
        setIsMembership(response.data.isMembership);
      } catch (error) {
        await Functions.handleApiError(error);
        const newToken = Functions.getAccessToken();
        if (newToken !== token) {
          const response = await HomeAxiosApi.userInfo(newToken);
          setProfileImg(response.data.pfImg);
          setIsMembership(response.data.isMembership);
        }
      }
    };
    getProfileImg();
  }, [token, setIsMembership]);

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
          <MenuItem
            key={option.text}
            onClick={() => {
              option.onClick ? option.onClick() : handleClose(option);
            }}
          >
            {option.text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MemberDropDown;
