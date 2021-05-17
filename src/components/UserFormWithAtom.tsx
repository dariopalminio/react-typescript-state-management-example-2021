import React, { FC } from "react";
import { useAtom } from "jotai";
import { userAtom } from "../states/userAtom";

const UserFormWithAtom: FC = () => {
  //Then access the atom’s value and updater function inside of the component
  const [user, setPassword] = useAtom(userAtom);

  let refFormNameInput = React.createRef<HTMLInputElement>();
  let refFormEmailInput = React.createRef<HTMLInputElement>();

  const styleColor = { backgroundColor: "#7c9ecc" };

  const updateUser = (): void => {
    if (refFormNameInput.current && refFormEmailInput.current) {
      const newUser = {
        name: refFormNameInput.current.value,
        email: refFormEmailInput.current.value,
      };
      //dispatch({ type: ActionType.UPDATE_USER, payload: newUser });
      setPassword(newUser);
    }
  };

  return (
    <div className="UserFormWithAtom" style={styleColor}>
      <h2>Using useAtom from jotai</h2>
      <p>
        Jotai is util for its minimalistic but flexible way to manage a simple
        global state. The selling point of atoms is that you can access the same
        atom from multiple components. If a component updates the atom, then all
        the components that read this atom are updated. This is the global state
        management!
      </p>
      <div id="form-container-atom">
        <div id="user-form-atom">
          <label>name:</label>
          <input ref={refFormNameInput} id="form-name-input-atom"></input>
        </div>
        <div>
          <label>email:</label>
          <input ref={refFormEmailInput} id="form-name-email-atom"></input>
        </div>
        <button onClick={() => updateUser()}>Update user</button>
      </div>
      <div>{` User name: ${user.name} Email: ${user.email}`}</div>
    </div>
  );
};

export default UserFormWithAtom;
