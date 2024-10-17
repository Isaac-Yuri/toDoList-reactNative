import React from "react";
import { ButtonSettingsStyled } from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacityProps } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

interface IButtonSettingsProps extends TouchableOpacityProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

export const ButtonSettings: React.FC<IButtonSettingsProps> = ({
  navigation
}) => {
  return (
    <ButtonSettingsStyled onPress={() => {
      navigation.navigate("Settings");
    }}>
      <FontAwesome name="cog" size={25} color="white" />
    </ButtonSettingsStyled>
  );
};
