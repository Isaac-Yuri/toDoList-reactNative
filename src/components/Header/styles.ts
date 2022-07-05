import styled from "styled-components/native";
import { themes } from "../../themes";

export const HeaderContainer = styled.View`
  background-color: ${themes.colors.colorApplication};
  padding: 15px 0;
`;

export const TitleHeader = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
