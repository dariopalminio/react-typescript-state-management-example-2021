import { createContext } from "react";

// Initial values for global state 
export const StateDefaultValues: UserStateType = {
  name: "daro",
  email: "daroemail@gmail.com",
};

// Initial values for global context 
export const ContextDefaultValues: GlobalContextType = {
  user: StateDefaultValues,
  updateUser: () => {},
};

// State type
export type UserStateType = {
  name: string;
  email: string;
};

// Global context type
export type GlobalContextType = {
  user: UserStateType;
  updateUser: (user: UserStateType) => void;
};

//Creating global context
export const GlobalContext =
  createContext<GlobalContextType>(ContextDefaultValues);

