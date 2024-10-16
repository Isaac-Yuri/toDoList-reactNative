import React from "react";
import { HeaderContainer, TitleHeader } from "./styles";
import { ButtonSettings } from "../ButtonSettings";

export const Header: React.FC = () => {
  return (
    <HeaderContainer style={{ position:"relative" }}>
      <ButtonSettings />
      <TitleHeader>Lista de tarefas</TitleHeader>
    </HeaderContainer>
  );
};
