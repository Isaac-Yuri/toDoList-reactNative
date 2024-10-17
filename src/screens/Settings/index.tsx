import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header";
import { ButtonGoBack } from "../../components/ButtonGoBack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

type SettingsProps = NativeStackScreenProps<RootStackParamList, "Settings">;

export const Settings: React.FC<SettingsProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header title="Configurações">
        <ButtonGoBack navigation={navigation} />
      </Header>
      <Text>Tela de Configurações</Text>
    </SafeAreaView>
  );
};
