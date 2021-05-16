import { FC } from "react";
import UserFormWithReducer from "./components/UserFormWithReducer";
import UserFormWithAtom from "./components/UserFormWithAtom";
import UserFormWithCustomHook from "./components/UserFormWithCustomHook";
import UserFormWithUseState from "./components/UserFormWithUseState";
import UserFormWithContext from "./components/UserFormWithContext";
import StaticContext from "./states/context/StaticContext";
import "./App.css";

const App: FC = () => {
  return (
    <StaticContext.Provider value={{initialName: 'Daro', initialEmail: 'daro@gmail.com'}}>
    <div className="App">
      <h1>State management examples...</h1>

      <UserFormWithUseState />

      <UserFormWithReducer />

      <UserFormWithAtom />

      <UserFormWithCustomHook />

      <UserFormWithContext/>
    </div>
    </StaticContext.Provider>
  );
};

export default App;
