import React from "react";
import { TouchableOpacityProps } from "react-native";

import { AddButtonStyled, TextStyled } from "./styles";

interface IAddButtonProps extends TouchableOpacityProps {
  handleAddNewTask: (newTask: string) => void;
  inputData: string;
}

export const AddButton = ({
  children,
  handleAddNewTask,
  inputData,
}: IAddButtonProps) => {
  return (
    <AddButtonStyled
      onPress={() => {
        handleAddNewTask(inputData);
      }}
    >
      <TextStyled>{children}</TextStyled>
    </AddButtonStyled>
  );
};
