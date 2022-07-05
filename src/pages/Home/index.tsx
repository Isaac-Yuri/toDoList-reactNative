import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import { Header } from "../../components/Header";
import { InputTask } from "../../components/InputTask";

import { ContainerApplication, BoxInputAndAdd } from "./styles";

export const Home = () => {
  const [inputData, setInputData] = useState("");

  return (
    <>
      <Header />
      <ContainerApplication>
        <BoxInputAndAdd>
          <InputTask
            onChangeText={(value) => {
              setInputData(value);
            }}
            value={inputData}
          />
          <TouchableOpacity>clique</TouchableOpacity>
        </BoxInputAndAdd>
      </ContainerApplication>
    </>
  );
};
