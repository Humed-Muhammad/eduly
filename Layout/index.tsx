import { getFromLocalStorage } from "@/utils";
import { Container, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const router = useRouter();
  useLayoutEffect(() => {
    const token = getFromLocalStorage();
    if (!token) {
      router.push("/login");
    }
  }, []);
  return (
    <Flex justify="center" align="center" height="100vh" width="100vw">
      {children}
    </Flex>
  );
};
