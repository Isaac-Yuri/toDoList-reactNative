import React, { Dispatch, SetStateAction } from "react";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { ITask } from "../../types";

import {
  TaskStyled,
  TitleTask,
  ButtonDelete,
  CheckboxStyled,
  ButtonEdit,
} from "./styles";
import { themes } from "../../themes";

interface ITaskProps extends ITask {
  handleDeleteTask: (idTask: string) => void;
  changeTaskState: (idTask: string) => void;
  setInputData: Dispatch<SetStateAction<string>>;
  setIsUpdatingATask: Dispatch<SetStateAction<boolean>>;
  setIdOfTheTaskToUpdate: Dispatch<SetStateAction<string>>;
}

export const Task: React.FC<ITaskProps> = ({
  title,
  isComplete,
  id,
  handleDeleteTask,
  changeTaskState,
  setInputData,
  setIsUpdatingATask,
  setIdOfTheTaskToUpdate
}) => {
  const isChecked = isComplete;

  return (
    <TaskStyled>
      <CheckboxStyled
        value={isChecked}
        onValueChange={() => changeTaskState(id)}
        color={isChecked ? themes.colors.colorApplication : ""}
      />
      <TitleTask
        style={{
          textDecorationLine: isChecked ? "line-through" : "none",
          color: isChecked ? "#7a7a7a" : "#000",
        }}
      >
        {title}
      </TitleTask>

      <ButtonEdit
        onPress={() => {
          if (isChecked) {
            alert("Você só pode editar tarefas que não foram concluídas");
          } else {
            setIsUpdatingATask(true);
            setInputData(title);
            setIdOfTheTaskToUpdate(id);
          }
        }}
      >
        <FontAwesome5 name="pen" size={20} color="#444" />
      </ButtonEdit>

      <ButtonDelete
        onPress={() => {
          handleDeleteTask(id);
        }}
      >
        <FontAwesome5 name="trash" size={20} color="#444" />
      </ButtonDelete>
    </TaskStyled>
  );
};
