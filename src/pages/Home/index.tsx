import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import { Header } from "../../components/Header";
import { InputTask } from "../../components/InputTask";
import { AddButton } from "../../components/AddButton";

import { ContainerApplication, BoxInputAndAdd } from "./styles";

export const Home = () => {
  const [inputData, setInputData] = useState<string>();

  return (
    <View>
      <Header />
      <ContainerApplication>
        <BoxInputAndAdd>
          <InputTask
            value={inputData}
            onChangeText={(text) => setInputData(text)}
            placeholder='Digite sua tarefa aqui'
          />
          <AddButton>Add</AddButton>
        </BoxInputAndAdd>
      </ContainerApplication>
    </View>
  );
};
