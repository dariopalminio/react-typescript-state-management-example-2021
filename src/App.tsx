import { FC } from "react";
import UserFormWithReducer from "./components/UserFormWithReducer";
import UserFormWithAtom from "./components/UserFormWithAtom";
import UserFormWithCustomHook from "./components/UserFormWithCustomHook";
import UserFormWithUseState from "./components/UserFormWithUseState";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <h1>State management examples...</h1>

      <UserFormWithUseState />

      <UserFormWithReducer />

      <UserFormWithAtom />

      <UserFormWithCustomHook />
    </div>
  );
};

export default App;
