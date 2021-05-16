/**
 * For useReducer hook as state management
 * Although useState is a Basic Hook for managing simple state transformation and 
 * useReducer is an Additional Hook for managing more complex state logic, it is 
 * worth noting that useState uses the useReducer internally. 
*/

// type for user state
export type UserType = {
  name: string;
  email: string;
};

export const userInitialState: UserType = {
  name: "",
  email: ""
};

// Actions
export enum ActionType {
  UPDATE_USER = "UPDATE_USER",
}

/**
 * useReducer is usually preferable to useState when you have complex state logic that 
 * involves multiple sub-values or when the next state depends on the previous one.
 * @param state 
 * @param action 
 * @returns newState
 */
export const userReducer = (
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