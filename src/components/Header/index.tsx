import React from "react";
import { HeaderContainer, TitleHeader } from "./styles";
interface IHeaderProps {
  title?: string;
  children?: React.ReactNode;
};

export const Header: React.FC<IHeaderProps> = ({ children, title }) => {
  return (
    <HeaderContainer style={{ position: "relative" }}>
      {children}
      <TitleHeader>{title}</TitleHeader>
    </HeaderContainer>
  );
};
