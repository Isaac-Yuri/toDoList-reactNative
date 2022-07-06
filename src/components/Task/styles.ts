import styled from "styled-components/native";
import { themes } from "../../themes";

import Checkbox from "expo-checkbox";

const paddingTopBottom = 2;

export const TaskStyled = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #d3d3d3;
  padding: ${paddingTopBottom}px 35px ${paddingTopBottom}px 12px;
`;

export const CheckboxStyled = styled(Checkbox)`
  border-radius: 100px;
  padding: 10px;
`;

export const TitleTask = styled.Text`
  font-size: ${themes.fonts.sizes.defaultFontSize - 2}px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  padding: 8px;
`;
