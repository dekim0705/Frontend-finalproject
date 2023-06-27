import React, { useContext } from "react";
import { PfImg, Nickname, Membership } from "../UserProfile";
import styled from "styled-components";
import Star from "../../../resource/membership_star.svg";
import Container from "../Container";
import { ColumnWrapper, RowWrapper } from "../../Join/Wrappers";
import Counts from "./Counts";
import { UserContext } from "../../../context/UserContext";

const PfImg2 = styled(PfImg)`
  width: 100px;
  height: 100px;
  margin: 0.6rem;
  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin: 10px auto;
  }
`;

const Nickname2 = styled(Nickname)`
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 10px;
  }
`;

const Membership2 = styled(Membership)`
  width: 1.2rem;
  margin: 0;
  margin-top: -10px;
`;

// const MembershipDesc = styled.p`
//   font-size: 0.8rem;
//   position: relative;
//   margin-top: -34px;
// `;

const Divider = styled.span`
  color: #eee;
`;

const ProfileBar2 = () => {
  const { isMembership, nickname, postCount, replyCount, userPfImg } =
    useContext(UserContext);

  return (
    <ColumnWrapper alignItems="center">
      <Container width="60%">
        <RowWrapper gap="10px">
          <PfImg2 src={userPfImg} alt="프로필 이미지" />

          <ColumnWrapper gap="6px">
            <div>
              <Nickname2>
                {nickname}{" "}
                {isMembership === "MEMBERSHIP" && (
                  <Membership2 src={Star} alt="멤버쉽 이미지" />
                )}{" "}
              </Nickname2>
            </div>
            <RowWrapper width="50vw">
              <Counts count={postCount} label="총 게시물 " />
              <Divider>|</Divider>
              <Counts count={replyCount} label="총 댓글 " />
            </RowWrapper>
          </ColumnWrapper>
        </RowWrapper>
      </Container>
    </ColumnWrapper>
  );
};
export default ProfileBar2;
