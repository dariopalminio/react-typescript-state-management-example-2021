import React, { FC, useReducer } from "react";
import {
  userReducer,
  userInitialState,
  ActionType,
} from "../states/userReducer";

const UserFormWithReducer: FC = () => {
  const [userState, dispatch] = useReducer(userReducer, userInitialState);

  let refFormNameInput = React.createRef<HTMLInputElement>();
  let refFormEmailInput = React.createRef<HTMLInputElement>();

  const styleColor = { backgroundColor: "#7c9ea1" };

  const updateUser = (): void => {
    if (refFormNameInput.current && refFormEmailInput.current) {
      const newUser = {
        name: refFormNameInput.current.value,
        email: refFormEmailInput.current.value,
      };
      dispatch({ type: ActionType.UPDATE_USER, payload: newUser });
    }
  };

  return (
    <div className="UserForm" style={styleColor}>
      <h2>Using userReducer from react hook</h2>
      <p>
        If you move past managing a single primitive (i.e. a string, integer, or
        boolean) and instead must manage a complex object (e.g. with objects,
        arrays and additional primitives), you may be better of using
        useReducer. We also use it to manage logic in one part and separate view
        from logic. Another important advantage is an improved developer
        experience: With one code block (the reducer function) managing multiple
        transitions of one state object, it is far easier to debug your logic if
        anything should go wrong. Another great advantage of having all state
        transitions neatly organized into one reducer function is the ability to
        export the reducer for unit tests.
      </p>
      <div id="form-container">
        <div id="user-form">
          <label>name:</label>
          <input
            className="input-test"
            ref={refFormNameInput}
            id="form-name-input-reducer"
            aria-label="form-name-input-reducer"
          ></input>
        </div>
        <div>
          <label>email:</label>
          <input ref={refFormEmailInput} id="form-name-email"></input>
        </div>
        <button onClick={() => updateUser()}>Update user</button>
      </div>
      <div>{` User name: ${userState.name} Email: ${userState.email}`}</div>
    </div>
  );
};

export default UserFormWithReducer;
