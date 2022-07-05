import styled from "styled-components/native";
import { TextInput } from "react-native";

import { themes } from "../../themes";

export const Input = styled(TextInput)`
  border: 1px black;
  border-radius: ${themes.borderRadiusDefault};
  font-size: ${themes.fonts.sizes.defaultFontSize}px;
  padding: 5px 10px;
  height: 100%;
  flex: 4;
`;