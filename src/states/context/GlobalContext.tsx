import { createContext, FC, useState } from "react";


const stateDefaultValues: UserStateType = {
  name: "daro",
  email: "daroemail@gmail.com",
};

const contextDefaultValues: GlobalContextType = {
  user: stateDefaultValues,
  updateUser: () => {},
};

export type UserStateType = {
  name: string;
  email: string;
};

export type GlobalContextType = {
  user: UserStateType;
  updateUser: (user: UserStateType) => void;
};

export const GlobalContext =
  createContext<GlobalContextType>(contextDefaultValues);

const GlobalContextProvider: FC = ({ children }) => {
  const [user, setState] = useState<UserStateType>(stateDefaultValues);

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
