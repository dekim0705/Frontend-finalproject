import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import miniLogo from '../../resource/오늘의 데이트 심볼.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Drawer from '@mui/material/Drawer';
import { Popover } from "@mui/material";
import { Box } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MemberDropDown from "./MemberDropDown";
import SearchIcon from '../../resource/header_search.svg';
import AlarmDropdown from "../Home/AlarmDropdown";

const StyledHeader = styled.div`
  width: 100%;
  padding: 20px 0;
  height: fit-content;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  margin: auto;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .mini {
    width: 40px;
    display: none;
  }
  @media screen and (max-width:768px) {
    flex-wrap: wrap;
    justify-content: space-around;
    .mini {
      display: block;
    }
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 250px;
    height: 50px;
    border-radius: 12px;
    padding: 10px;
    border: none;
    background-color: var(--input-color);
  }
  img {
    width: 30px;
  }
`;

const AlarmIcon = styled(NotificationsNoneIcon)`
  color: var(--point-color);
  cursor: pointer;
`;

const Header = () => {
  // 알람 드롭다운 상태 관리
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);

  // Drawer 상태 관리
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open) => e => {
    setIsOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem key={'home'} component={Link} to="/login">
          <ListItemText primary={'🏠 홈'} sx={{ color: '#2e2e2e' }}  />
        </ListItem>
        <Divider />
        <ListItem key={'event'} component={Link} to="/festival/1">
          <ListItemText primary={'🏝️ 지역행사'} sx={{ color: '#2e2e2e' }} />
        </ListItem>
        <Divider />
        <ListItem key={'write'} component={Link} to="/write">
          <ListItemText primary={'📌 핀 만들기'} sx={{ color: '#2e2e2e' }} />
        </ListItem>
        <Divider />
        <ListItem key={'membership'} component={Link} to="/membership">
          <ListItemText primary={'💲 멤버십'} sx={{ color: '#2e2e2e' }} />
        </ListItem>
        <Divider />
        <ListItem key={'contact'} component={Link} to="/contact">
          <ListItemText primary={'📞 고객센터'} sx={{ color: '#2e2e2e' }} />
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <>
      <StyledHeader>
        <Container>
          <img className="mini" src={miniLogo} alt="" onClick={toggleDrawer(true)} />
          <MemberDropDown />
          <AlarmIcon
            sx={{ fontSize: "2.5rem" }}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          />
          <SearchWrapper>
            <input placeholder="어떤 데이트를 찾으시나요?" type="text" />
            <img src={SearchIcon} alt="" />
          </SearchWrapper>
        </Container>
      </StyledHeader>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <AlarmDropdown />
      </Popover>
    </>
  );
}

export default Header;