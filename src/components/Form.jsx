import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/tasks";
import newId from "../actions/id";

const Form = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    input
      ? dispatch(
          addTask({ id: dispatch(newId()), text: input, state: "undone" })
        )
      : alert("Empty Tasks are not allowed!! 😤😤");
    setInput("");
  };
  return (
    <div>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        value={input}
        placeholder="Write task here...✍️"
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Add Task
      </button>
    </div>
  );
};

export default Form;
