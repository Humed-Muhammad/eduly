import { Container, Flex } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Flex justify="center" align="center" height="100vh" width="100vw">
      {children}
    </Flex>
  );
};
