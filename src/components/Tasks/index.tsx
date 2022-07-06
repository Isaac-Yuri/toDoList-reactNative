import React from "react";
import { ITask } from "../../types";

import { Task } from "../Task";

interface ITasksProps {
  tasks: ITask[];
}

export const Tasks: React.FC<ITasksProps> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            id={task.id}
            key={task.id}
            title={task.title}
            isComplete={task.isComplete}
          />
        );
      })}
    </>
  );
};
