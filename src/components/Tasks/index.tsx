import React, { Dispatch, SetStateAction } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ITask } from "../../types";
import { Task } from "../Task";

interface ITasksProps {
  tasks: ITask[];
  handleDeleteTask: (idTask: string) => void;
  changeTaskState: (idTask: string) => void;
  setInputData: Dispatch<SetStateAction<string>>;
  setIsUpdatingATask: Dispatch<SetStateAction<boolean>>;
  setIdOfTheTaskToUpdate: Dispatch<SetStateAction<string>>;
}

export const Tasks: React.FC<ITasksProps> = ({
  tasks,
  handleDeleteTask,
  changeTaskState,
  setInputData,
  setIsUpdatingATask,
  setIdOfTheTaskToUpdate
}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item: task }) => (
          <Task
            id={task.id}
            title={task.title}
            isComplete={task.isComplete}
            handleDeleteTask={handleDeleteTask}
            changeTaskState={changeTaskState}
            setInputData={setInputData}
            setIsUpdatingATask={setIsUpdatingATask}
            setIdOfTheTaskToUpdate={setIdOfTheTaskToUpdate}
          />
        )}
        contentContainerStyle={{ paddingBottom: 300 }}
      />
    </SafeAreaView>
  );
};
