import React from "react";
import { ButtonGoBackStyled } from "./styles";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacityProps } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

interface IButtonGoBackProps extends TouchableOpacityProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Settings">;
}

export const ButtonGoBack: React.FC<IButtonGoBackProps> = ({ navigation }) => {
  return (
    <ButtonGoBackStyled onPress={() => navigation.goBack()}>
      <FontAwesome5Icon name="arrow-left" color="white" size={25} />
    </ButtonGoBackStyled>
  );
};
