import logo from "./logo.svg";
import "./App.css";
import Tasks from "./components/Tasks";
import Form from "./components/Form";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Form />
      <Tasks />
    </div>
  );
}

export default App;
