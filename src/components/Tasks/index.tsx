import React from "react";
import { ITask } from "../../types";

import { Task } from "../Task";

interface ITasksProps {
  tasks: ITask[];
  handleDeleteTask: (idTask: string) => void;
}

export const Tasks: React.FC<ITasksProps> = ({ tasks, handleDeleteTask }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            id={task.id}
            key={task.id}
            title={task.title}
            isComplete={task.isComplete}
            handleDeleteTask={handleDeleteTask}
          />
        );
      })}
    </>
  );
};
