import React from "react";
import { TextInputProps } from "react-native";

import { Input } from "./styles";

export function InputTask(props: TextInputProps) {
  return <Input placeholder="Insira sua nova tarefa aqui" />;
}
