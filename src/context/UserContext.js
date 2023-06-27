import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
  const [userPfImg, setUserPfImg] = useState("");
  const [isMembership, setIsMembership] = useState("");
  const [userId, setUserId] = useState(0);
  const [nickname, setNickname] = useState("");
  const [userComment, setUserComment] = useState("");
  const [postCount, setPostCount] = useState("");
  const [replyCount, setReplyCount] = useState("");

  return (
    <UserContext.Provider
      value={{
        userPfImg,
        setUserPfImg,
        isMembership,
        setIsMembership,
        userId,
        setUserId,
        nickname,
        setNickname,
        userComment,
        setUserComment,
        postCount,
        setPostCount,
        replyCount,
        setReplyCount,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
