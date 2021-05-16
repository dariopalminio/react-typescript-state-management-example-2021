import React, { FC, useReducer } from "react";
import { userReducer, userInitialState, ActionType } from "../states/userReducer";


const UserFormWithReducer: FC = () => {
 
  const [userState, dispatch] = useReducer(userReducer, userInitialState);

  let refFormNameInput = React.createRef<HTMLInputElement>();
  let refFormEmailInput = React.createRef<HTMLInputElement>();

  const styleColor = {  backgroundColor: "#7c9ea1"};
  
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
      <div id="form-container">
        <div id="user-form">
          <label>name:</label>
          <input className="input-test" ref={refFormNameInput} id="form-name-input-reducer" aria-label="form-name-input-reducer"></input>
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