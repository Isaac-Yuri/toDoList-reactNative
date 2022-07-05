import React, { useState } from "react";

import { Header } from "../../components/Header";
import { InputTask } from "../../components/InputTask";
import { AddButton } from "../../components/AddButton";

import { ContainerApplication, BoxInputAndAdd } from "./styles";

import { ITask } from "../../types";

export const Home = () => {
  const [inputData, setInputData] = useState<string>();
  const [tasks, setTasks] = useState<ITask[]>([
    { title: "Estudar", isComplete: true },
    { title: "Treinar saltos", isComplete: false },
    { title: "Ler", isComplete: false },
    { title: "Tomar café", isComplete: true },
  ]);

  return (
    <>
      <Header />
      <ContainerApplication>
        <BoxInputAndAdd>
          <InputTask
            value={inputData}
            onChangeText={(text) => setInputData(text)}
            placeholder="Digite sua tarefa aqui"
          />
          <AddButton>Add</AddButton>
        </BoxInputAndAdd>
      </ContainerApplication>
    </>
  );
};
