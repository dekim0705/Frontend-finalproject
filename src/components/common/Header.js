import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import profile from '../../resource/profile.jpeg'
import miniLogo from '../../resource/오늘의 데이트 심볼.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import { Box } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

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
  
  .profile {
    border-radius: 100%;
    width: 40px;
    height: 40px;
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
  gap: 3px;

  input {
    width: 250px;
    height: 50px;
    border-radius: 12px;
    padding: 10px;
    border: none;
    background-color: var(--input-color);
  }
`;

const AlarmIcon = styled(NotificationsNoneIcon)`
  color: var(--point-color);
  cursor: pointer;
`;

const Search = styled(SearchIcon)`
  color: var(--point-color);
  cursor: pointer;
`;

const Header = () => {
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
        <ListItem key={'event'} component={Link} to="/event">
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
        <ListItem key={'contact'} components={Link} to="/contact">
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
          <img className="profile" src={profile} alt="사용자 프로필" />
          <AlarmIcon sx={{ fontSize: "2.5rem" }} />
          <SearchWrapper>
            <input placeholder="어디로 데이트를 가시나요?" type="text" />
            <Search sx={{ fontSize: "2.5rem" }} />
          </SearchWrapper>
        </Container>
      </StyledHeader>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}

export default Header;