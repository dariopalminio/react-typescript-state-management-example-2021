import React, { FC, useState } from "react";

const UserFormWithUseState: FC = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  let refFormNameInput = React.createRef<HTMLInputElement>();
  let refFormEmailInput = React.createRef<HTMLInputElement>();

  const styleColor = { backgroundColor: "#7c78a1" };

  const updateUser = (): void => {
    if (refFormNameInput.current) {
      setUser(refFormNameInput.current.value);
    }
    if (refFormEmailInput.current) {
      setEmail(refFormEmailInput.current.value);
    }
  };

  return (
    <div className="UserForm" style={styleColor}>
      <h2>Using useState</h2>
      <p>
        The useState is a Hook (function) that allows you to have state
        variables in functional components. Use useState for store values
        whenever you manage a JS primitive (i.e. a string, integer, or boolean).
      </p>
      <div id="form-container-useState">
        <div id="user-form-useState">
          <label>name:</label>
          <input
            className="input-test-useState"
            ref={refFormNameInput}
            id="form-name-input-useState"
            aria-label="form-name-input-reducer"
          ></input>
        </div>
        <div>
          <label>email:</label>
          <input ref={refFormEmailInput} id="form-name-email-useState"></input>
        </div>
        <button onClick={() => updateUser()}>Update user</button>
      </div>
      <div>{` User name: ${user} Email: ${email}`}</div>
    </div>
  );
};

export default UserFormWithUseState;
