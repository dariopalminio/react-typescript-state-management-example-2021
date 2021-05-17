import { FC } from "react";
import UserFormWithReducer from "./components/UserFormWithReducer";
import UserFormWithAtom from "./components/UserFormWithAtom";
import UserFormWithCustomHook from "./components/UserFormWithCustomHook";
import UserFormWithUseState from "./components/UserFormWithUseState";
import UserFormWithContext from "./components/UserFormWithContext";
import GlobalContextProvider from "./states/context/GlobalContextProvider";
import "./App.css";

const App: FC = () => {
  return (
    <GlobalContextProvider>
      <div className="App">
        <h1>State management examples...</h1>
        <p>
          Below is a set of examples of how to handle states in
          react/typescript. The examples read a name and email from a 'state' and
          update them with the new data from the input box when you click the update
          button.
        </p>
        <UserFormWithUseState />
        <UserFormWithReducer />
        <UserFormWithCustomHook />
        <UserFormWithAtom />
        <UserFormWithContext />
      </div>
    </GlobalContextProvider>
  );
};

export default App;
