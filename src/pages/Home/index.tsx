import React, { useState } from "react";
import { View } from "react-native";

import { Header } from "../../components/Header";
import { InputTask } from "../../components/InputTask";
import { AddButton } from "../../components/AddButton";
import { Tasks } from "../../components/Tasks";

import { v4 as uuidV4 } from "uuid";
import "react-native-get-random-values";

import { ContainerApplication, BoxInputAndAdd } from "./styles";

import { ITask } from "../../types";

export const Home = () => {
  const [inputData, setInputData] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([
    { id: uuidV4(), title: "Estudar", isComplete: true },
    { id: uuidV4(), title: "Treinar saltos", isComplete: false },
    { id: uuidV4(), title: "Ler", isComplete: false },
    { id: uuidV4(), title: "Tomar café", isComplete: true },
  ]);

  function handleAddNewTask(newTask: string) {
    const arrayWithNewTask: ITask[] = [
      ...tasks,
      { id: uuidV4(), title: newTask, isComplete: false },
    ];
    setTasks(arrayWithNewTask);
  }

  function handleDeleteTask(idTask: string) {
    const arrayWithTaskDeleted = tasks.filter((task) => {
      if (idTask !== task.id) {
        return task;
      }
    });
    setTasks(arrayWithTaskDeleted);
  }

  return (
    <>
      <Header />
      <ContainerApplication>
        <BoxInputAndAdd>
          <InputTask
            value={inputData}
            onChangeText={(text) => setInputData(text)}
            placeholder="Adicione uma tarefa"
          />
          <AddButton handleAddNewTask={handleAddNewTask} inputData={inputData}>
            Add
          </AddButton>
        </BoxInputAndAdd>
        <Tasks handleDeleteTask={handleDeleteTask} tasks={tasks} />
      </ContainerApplication>
    </>
  );
};
