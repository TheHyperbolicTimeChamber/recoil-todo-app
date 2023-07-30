import "./App.css";
import InputTask from "./components/InputTask";
import AddTask from "./components/AddTask";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <h1 className="text-3xl ">Simple Todo App</h1>
      <div className="todo">
        <InputTask />
        <AddTask />
      </div>
    </RecoilRoot>
  );
}

export default App;
