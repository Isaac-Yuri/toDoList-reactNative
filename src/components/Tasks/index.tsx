import React from "react";
import { ScrollView, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView>
      <FlatList
        data={tasks}
        renderItem={({ item: task }) => {
          return (
            <Task
              id={task.id}
              title={task.title}
              isComplete={task.isComplete}
              handleDeleteTask={handleDeleteTask}
              changeTaskState={changeTaskState}
            />
          );
        }}
        style={{ marginBottom: 100 }}
      />
    </SafeAreaView>
  );
};
