import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { Home } from "./src/screens/Home";

import { themes } from "./src/themes";

export default function App() {
  return (
    <SafeAreaView>
      <Home />
      <StatusBar
        backgroundColor={`${themes.colors.colorApplication}`}
        style="auto"
      />
    </SafeAreaView>
  );
}
