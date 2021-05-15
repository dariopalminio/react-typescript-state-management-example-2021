
/**
 * For useReducer hook as state management
 */

export type UserType = {
  name: string;
  email: string;
};

export const userInitialState: UserType = {
  name: "",
  email: ""
};

export enum ActionType {
  UPDATE_USER = "UPDATE_USER",
}

/**
 * useReducer is usually preferable to useState when you have complex state logic that 
 * involves multiple sub-values or when the next state depends on the previous one.
 * @param state 
 * @param action 
 * @returns 
 */
export const userReducer = (
  state: UserType = userInitialState,
  action: { type: ActionType; payload: any }
) => {
  switch (action.type) {
    case ActionType.UPDATE_USER: {
      return action.payload; //return new state
    }
    default:
      return state;
  }
};