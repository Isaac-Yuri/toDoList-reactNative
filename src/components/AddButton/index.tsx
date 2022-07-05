import React from "react";
import { TouchableOpacityProps } from "react-native";

import { AddButtonStyled, TextStyled } from "./styles";

export const AddButton = ({ children }: TouchableOpacityProps) => {
  return (
    <AddButtonStyled>
      <TextStyled>{children}</TextStyled>
    </AddButtonStyled>
  );
};
