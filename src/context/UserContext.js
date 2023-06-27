import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
  const [userPfImg, setUserPfImg] = useState("");
  const [isMembership, setIsMembership] = useState("");
  const [userId, setUserId] = useState(0);

  return (
    <UserContext.Provider value = {{userPfImg, setUserPfImg, isMembership, setIsMembership, userId, setUserId}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserStore;