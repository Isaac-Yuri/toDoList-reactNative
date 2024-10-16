import React from "react";
import { TouchableOpacityProps } from "react-native";

import { AddButtonStyled, TextStyled } from "./styles";

interface IAddButtonProps extends TouchableOpacityProps {
  handleAddNewTask: (newTask: string) => void;
  handleUpdateTitleTask: (idTask: string, newTitle: string) => void;
  inputData: string;
  idOfTheTaskToUpdate: string;
  isUpdatingATask: boolean;
}

export const AddButton = ({
  children,
  handleAddNewTask,
  inputData,
  isUpdatingATask,
  handleUpdateTitleTask,
  idOfTheTaskToUpdate,
}: IAddButtonProps) => {
  return (
    <AddButtonStyled
      onPress={() => {
        if (isUpdatingATask) {
          handleUpdateTitleTask(idOfTheTaskToUpdate, inputData);
        } else {
          handleAddNewTask(inputData);
        }
      }}
    >
      <TextStyled>{children}</TextStyled>
    </AddButtonStyled>
  );
};
