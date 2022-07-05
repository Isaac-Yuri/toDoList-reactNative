import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Checkbox from "expo-checkbox";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { ITask } from "../../types";

import { TaskStyled, TitleTask, ButtonDelete, CheckboxStyled } from "./styles";
import { themes } from "../../themes";

export const Task: React.FC<ITask> = ({ title, isComplete, id }) => {
  const [isChecked, setChecked] = useState(isComplete);

  return (
    <TaskStyled>
      <CheckboxStyled
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? themes.colors.colorApplication : ""}
      />
      <TitleTask>{title}</TitleTask>
      <ButtonDelete>
        <FontAwesome5 name="trash" size={20} color="#444" />
      </ButtonDelete>
    </TaskStyled>
  );
};
