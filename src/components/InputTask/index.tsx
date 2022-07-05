import React from "react";
import { TextInputProps } from "react-native";

import { Input } from "./styles";

export function InputTask({
  value,
  onChangeText,
  placeholder,
}: TextInputProps) {
  return (
    <Input
      value={value}
      placeholder={placeholder ? placeholder : ""}
      onChangeText={onChangeText}
    />
  );
}
