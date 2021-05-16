import React, { FC, useState, useContext } from "react";
import StaticContext from "../states/context/StaticContext";

const UserFormWithContext: FC = () => {
  const staticContext = useContext(StaticContext);
  const [user, setUser] = useState(staticContext.initialName);
  const [email, setEmail] = useState(staticContext.initialEmail);

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
    <div className="UserFormWithContext" style={styleColor}>
      <h2>Using useContext</h2>
      <p>
       
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
          <input ref={refFormEmailInput} id="form-name-email-useContext"></input>
        </div>
        <button onClick={() => updateUser()}>Update user</button>
      </div>
      <div>{` User name: ${user} Email: ${email}`}</div>
    </div>
  );
};

export default UserFormWithContext;
