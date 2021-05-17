import { FC, useState } from "react";
import {
    StateDefaultValues,
    GlobalContext,
    UserStateType,
  } from "./GlobalContext";
  
  
  /**
   * GlobalContext Provider
   * @param param0 children
   * @returns 
   */
   const GlobalContextProvider: FC = ({ children }) => {
    const [user, setState] = useState<UserStateType>(StateDefaultValues);
  
    const updateUser = (newUser: UserStateType): void => {
      setState(newUser);
    };
  
    return (
      <GlobalContext.Provider
        value={{
          user,
          updateUser,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
  
  export default GlobalContextProvider;