import React, { useState } from "react";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { ITask } from "../../types";

import { TaskStyled, TitleTask, ButtonDelete, CheckboxStyled } from "./styles";
import { themes } from "../../themes";

interface ITaskProps extends ITask {
  handleDeleteTask: (idTask: string) => void;
  changeTaskState: (idTask: string) => void;
}

export const Task: React.FC<ITaskProps> = ({
  title,
  isComplete,
  id,
  handleDeleteTask,
  changeTaskState,
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
          color: isChecked? '#7a7a7a': '#000',
        }}
      >
        {title}
      </TitleTask>
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
