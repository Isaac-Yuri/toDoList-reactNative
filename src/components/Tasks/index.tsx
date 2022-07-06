import React from "react";
import { ScrollView, View } from "react-native";
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
    <ScrollView style={{ marginBottom: 43 }}>
      <View>
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
      </View>
    </ScrollView>
  );
};
