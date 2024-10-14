import styled from "styled-components/native";
import { themes } from "../../themes";

export const AddButtonStyled = styled.TouchableOpacity`
  flex: 1.2;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: ${themes.borderRadiusDefault};
  margin-left: 8px;
  background-color: ${themes.colors.colorApplication};
  padding: 5px;
  white-space: nowrap;
`;

export const TextStyled = styled.Text`
  color: white;
  font-size: ${themes.fonts.sizes.defaultFontSize}px;
`;
