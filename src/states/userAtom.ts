import { atom } from 'jotai';

/**
 * For atom jotai as state management
 */

 export type UserTypeAtom = {
    name: string;
    email: string;
  };
  
  export const userInitialState: UserTypeAtom = {
    name: "",
    email: ""
  };

  export const userAtom = atom(userInitialState);

