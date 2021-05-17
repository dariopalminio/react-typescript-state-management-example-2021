import React, { FC } from "react";
import {
  GlobalContextType,
  GlobalContext,
  UserStateType,
} from "../states/context/GlobalContext";

const UserFormWithContext: FC = () => {
  //Using global context as consumers
  const { user, updateUser } = React.useContext(
    GlobalContext
  ) as GlobalContextType;

  let refFormNameInput = React.createRef<HTMLInputElement>();
  let refFormEmailInput = React.createRef<HTMLInputElement>();

  const styleColor = { backgroundColor: "#5668a1" };

  const onClickHandler = (): void => {
    if (refFormNameInput.current && refFormEmailInput.current) {
      const newUser: UserStateType = {
        name: refFormNameInput.current.value,
        email: refFormEmailInput.current.value,
      };
      //Update in global context
      updateUser(newUser);
    }
  };

  return (
    <div className="UserFormWithContext" style={styleColor}>
      <h2>Using useContext</h2>
      <p>
        Context is designed to share data that can be considered “global” for a
        tree of React components, such as the current authenticated user, theme,
        or preferred language.
      </p>
      <div id="form-container-useContext">
        <div id="user-form-useContext">
          <label>name:</label>
          <input
            className="input-test-useContext"
            ref={refFormNameInput}
            id="form-name-input-useContext"
            aria-label="form-name-input-reducer"
          ></input>
        </div>
        <div>
          <label>email:</label>
          <input
            ref={refFormEmailInput}
            id="form-name-email-useContext"
          ></input>
        </div>
        <button onClick={() => onClickHandler()}>Update user</button>
      </div>
      <div>{` User name: ${user.name} Email: ${user.email}`}</div>
    </div>
  );
};

export default UserFormWithContext;
