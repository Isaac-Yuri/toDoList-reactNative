import React, { useState } from "react";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { ITask } from "../../types";

import { TaskStyled, TitleTask, ButtonDelete, CheckboxStyled } from "./styles";
import { themes } from "../../themes";

interface ITaskProps extends ITask {
  handleDeleteTask: (idTask: string) => void;
}

export const Task: React.FC<ITaskProps> = ({
  title,
  isComplete,
  id,
  handleDeleteTask,
}) => {
  const [isChecked, setChecked] = useState(isComplete);

  return (
    <TaskStyled>
      <CheckboxStyled
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? themes.colors.colorApplication : ""}
      />
      <TitleTask>{title}</TitleTask>
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
