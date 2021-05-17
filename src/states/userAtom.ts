import { atom } from 'jotai';

/**
 * For atom jotai as global state management.
 */

// Type for atom state
export type UserTypeAtom = {
  name: string;
  email: string;
};

// Initial state for atom
export const userInitialState: UserTypeAtom = {
  name: "",
  email: ""
};

/**
 * Define the atom for your global state variable.
 * A piece of state in Jotai is represented by an atom. An atom accepts an
 * initial value, be it a primitive type like a number, string, or more
 * complex structures like arrays and objects.
 */
export const UserAtom = atom(userInitialState);

