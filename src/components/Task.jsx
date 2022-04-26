import React from "react";
import { useDispatch } from "react-redux";
import { doTask, deleteTask } from "../actions/tasks";

export default function Task({ task }) {
  const dispatch = useDispatch();
  return (
    <>
      <li
        style={{
          textDecorationLine: task.state !== "undone" ? "line-through" : "none",
        }}
      >
        {task.text}
      </li>
      <button onClick={() => dispatch(doTask(task))}>✅DONE</button>
      <button onClick={() => dispatch(deleteTask(task))}>❌DELETE</button>
    </>
  );
}
