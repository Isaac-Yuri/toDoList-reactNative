import React, { useState } from "react";
import { View } from "react-native";

import { Header } from "../../components/Header";
import { InputTask } from "../../components/InputTask";
import { AddButton } from "../../components/AddButton";
import { Task } from "../../components/Task";

import { v4 as uuidV4 } from "uuid";
import "react-native-get-random-values";

import { ContainerApplication, BoxInputAndAdd } from "./styles";

import { ITask } from "../../types";

export const Home = () => {
  const [inputData, setInputData] = useState<string>();
  const [tasks, setTasks] = useState<ITask[]>([
    { id: uuidV4(), title: "Estudar", isComplete: true },
    { id: uuidV4(), title: "Treinar saltos", isComplete: false },
    { id: uuidV4(), title: "Ler", isComplete: false },
    { id: uuidV4(), title: "Tomar café", isComplete: true },
  ]);

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
          <AddButton>Add</AddButton>
        </BoxInputAndAdd>
        <View>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                isComplete={task.isComplete}
              />
            );
          })}
        </View>
      </ContainerApplication>
    </>
  );
};
