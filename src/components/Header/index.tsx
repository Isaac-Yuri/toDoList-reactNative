import React from "react";
import { HeaderContainer, TitleHeader } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ButtonSettings } from "../ButtonSettings";

import { RootStackParamList } from "../../types";

type IHeaderProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export const Header: React.FC<IHeaderProps> = ({ navigation }) => {
  return (
    <HeaderContainer style={{ position: "relative" }}>
      <ButtonSettings navigation={navigation} />
      <TitleHeader>Lista de tarefas</TitleHeader>
    </HeaderContainer>
  );
};
