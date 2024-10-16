import React, { useState } from "react";

import { Header } from "../../components/Header";
import { InputTask } from "../../components/InputTask";
import { AddButton } from "../../components/AddButton";
import { Tasks } from "../../components/Tasks";

import { v4 as uuidV4 } from "uuid";
import "react-native-get-random-values";

import { ContainerApplication, BoxInputAndAdd } from "./styles";

import { ITask, RootStackParamList } from "../../types";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ButtonSettings } from "../../components/ButtonSettings";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [inputData, setInputData] = useState<string>("");
  const [isUpdatingATask, setIsUpdatingATask] = useState<boolean>(false);
  const [idOfTheTaskToUpdate, setIdOfTheTaskToUpdate] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([
    { id: uuidV4(), title: "Estudar", isComplete: true },
    { id: uuidV4(), title: "Treinar", isComplete: false },
    { id: uuidV4(), title: "Ler", isComplete: false },
    { id: uuidV4(), title: "Tomar café", isComplete: true },
  ]);

  function handleAddNewTask(newTask: string) {
    if (inputData.length === 0) {
      alert("Campo vazio");
      return;
    }

    const arrayWithNewTask: ITask[] = [
      ...tasks,
      { id: uuidV4(), title: newTask, isComplete: false },
    ];
    setTasks(arrayWithNewTask);
    setInputData("");
  }

  function handleUpdateTitleTask(idTask: string, newTitle: string) {
    const arrayWithTitleTaskUpdated = tasks.map((task) => {
      if (idTask === task.id) {
        return { ...task, title: newTitle };
      }
      return task;
    });
    setTasks(arrayWithTitleTaskUpdated);
    setIsUpdatingATask(false);
    setInputData("");
    setIdOfTheTaskToUpdate("");
  }

  function handleDeleteTask(idTask: string) {
    const arrayWithTaskDeleted = tasks.filter((task) => task.id !== idTask);
    setTasks(arrayWithTaskDeleted);
  }

  function changeTaskState(idTask: string) {
    const arrayWithChangedTaskState = tasks.map((task) => {
      if (idTask === task.id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(arrayWithChangedTaskState);
  }

  return (
    <SafeAreaView>
      <Header title="Lista de tarefas">
        <ButtonSettings navigation={navigation} />
      </Header>
      <ContainerApplication>
        <BoxInputAndAdd>
          <InputTask
            value={inputData}
            onChangeText={(text) => setInputData(text)}
            placeholder="Adicione uma tarefa"
          />
          <AddButton
            handleAddNewTask={handleAddNewTask}
            handleUpdateTitleTask={handleUpdateTitleTask}
            idOfTheTaskToUpdate={idOfTheTaskToUpdate}
            isUpdatingATask={isUpdatingATask}
            inputData={inputData}
          >
            {isUpdatingATask ? "Atualizar" : "Adicionar"}
          </AddButton>
        </BoxInputAndAdd>
        <Tasks
          changeTaskState={changeTaskState}
          handleDeleteTask={handleDeleteTask}
          tasks={tasks}
          setInputData={setInputData}
          setIsUpdatingATask={setIsUpdatingATask}
          setIdOfTheTaskToUpdate={setIdOfTheTaskToUpdate}
        />
      </ContainerApplication>
    </SafeAreaView>
  );
};
