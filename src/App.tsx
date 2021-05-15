import {FC} from "react";
import UserFormWithReducer from "./components/UserFormWithReducer";
import UserFormWithAtom from "./components/UserFormWithAtom";
import UserFormWithCustomHook from "./components/UserFormWithCustomHook";
import "./App.css";


const App: FC = () => {

  return (
    <div className="App">
      <h1>State management examples...</h1>

     <UserFormWithReducer/>
     
     <UserFormWithAtom/>

     <UserFormWithCustomHook/>

    </div>
  );
};

export default App;
