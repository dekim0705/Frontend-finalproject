import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
  const [userPfImg, setUserPfImg] = useState("");

  return (
    <UserContext.Provider value = {{userPfImg, setUserPfImg}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserStore;