import { useReducer } from "react";

// return type for useUserHook
type ReturnType = {
  name: string;
  email: string;
  updateUserHook: Function;
};

// type for user state
type UserType = {
  name: string;
  email: string;
};

const userInitialState: UserType = {
  name: "",
  email: ""
};

// Actions
enum ActionType {
  UPDATE_USER = "UPDATE_USER",
}

/**
 * useReducer is usually preferable to useState when you have complex state logic that 
 * involves multiple sub-values or when the next state depends on the previous one.
 * @param state 
 * @param action 
 * @returns newState
 */
const reducer = (
  state: UserType = userInitialState,
  action: { type: ActionType; payload: any }
): UserType => {
  switch (action.type) {
    case ActionType.UPDATE_USER: {
      const newState: UserType = action.payload;
      return newState; //return new state
    }
    default:
      return state;
  }
};

/**
 * Custom React Hook function
 * @returns ReturnType
 */
export default function useUserHook(): ReturnType {

  const [userState, dispatch] = useReducer(reducer, userInitialState);

  const { name, email } = userState;

  return {
    name,
    email,
    updateUserHook: (name: string, email: string) => dispatch({
      type: ActionType.UPDATE_USER, payload: {
        name: name,
        email: email,
      }
    }),
  }
};

