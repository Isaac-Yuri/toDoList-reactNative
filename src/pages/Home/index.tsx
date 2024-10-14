import React, { useState } from "react";

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

  function handleDeleteTask(idTask: string) {
    const arrayWithTaskDeleted = tasks.filter((task) => {
      if (idTask !== task.id) {
        return task;
      }
    });
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
            Adicionar
          </AddButton>
        </BoxInputAndAdd>
        <Tasks
          changeTaskState={changeTaskState}
          handleDeleteTask={handleDeleteTask}
          tasks={tasks}
        />
      </ContainerApplication>
    </>
  );
};
