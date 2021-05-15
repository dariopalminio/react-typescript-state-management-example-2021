import React, { FC } from "react";
import useUserHook from "../states/useUserHook";

const UserFormWithCustomHook: FC = () => {
  const { name, email, updateUserHook } = useUserHook();

  let refFormNameInput = React.createRef<HTMLInputElement>();
  let refFormEmailInput = React.createRef<HTMLInputElement>();

  const styleColor = { backgroundColor: "#7c9ef2" };

  const updateUser = (): void => {
    if (refFormNameInput.current && refFormEmailInput.current) {
      //call function in useUserHook
      updateUserHook(
        refFormNameInput.current.value,
        refFormEmailInput.current.value
      );
    }
  };

  return (
    <div className="UserForm" style={styleColor}>
      <h2>Using Custom Hook from react</h2>
      <div id="form-container-hook">
        <div id="user-form-hook">
          <label>name:</label>
          <input ref={refFormNameInput} id="form-name-input-hook"></input>
        </div>
        <div>
          <label>email:</label>
          <input ref={refFormEmailInput} id="form-name-email-hook"></input>
        </div>
        <button onClick={() => updateUser()}>Update user</button>
      </div>
      <div>{` User name: ${name} Email: ${email}`}</div>
    </div>
  );
};

export default UserFormWithCustomHook;
