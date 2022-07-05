import styled from "styled-components/native";
import { themes } from "../../themes";

export const AddButtonStyled = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: ${themes.borderRadiusDefault};
  margin-left: 8px;
`;

export const TextStyled = styled.Text`
  color: black;
  font-size: 18px;
`;
