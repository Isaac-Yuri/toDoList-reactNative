import React from "react";
import { ButtonSettingsStyled } from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export const ButtonSettings: React.FC = () => {
  return (
    <ButtonSettingsStyled>
      <FontAwesome name="cog" size={25} color="white" />
    </ButtonSettingsStyled>
  );
};
