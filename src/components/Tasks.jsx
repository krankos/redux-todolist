import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

export default function Tasks() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
