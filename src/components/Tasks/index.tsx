import React from "react";
import { ITask } from "../../types";

import { Task } from "../Task";

interface ITasksProps {
  tasks: ITask[];
  handleDeleteTask: (idTask: string) => void;
  changeTaskState: (idTask: string) => void;
}

export const Tasks: React.FC<ITasksProps> = ({
  tasks,
  handleDeleteTask,
  changeTaskState,
}) => {
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
            changeTaskState={changeTaskState}
          />
        );
      })}
    </>
  );
};
