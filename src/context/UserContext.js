import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
  const [userPfImg, setUserPfImg] = useState("");
  const [isMembership, setIsMembership] = useState("");

  return (
    <UserContext.Provider value = {{userPfImg, setUserPfImg, isMembership, setIsMembership}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserStore;