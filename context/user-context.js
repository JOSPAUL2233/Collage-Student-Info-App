import { createContext, useState } from "react";

export const UsersContext = createContext();

function UsersContextProvider({ children }) {
  const [userData, setUserData] = useState({});

  return (
    <UsersContext.Provider value={[userData, setUserData]}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersContextProvider;
