import { Login } from "@/components";
import React from "react";
import NoSSR from "react-no-ssr";

const LoginPage = () => {
  return (
    <NoSSR>
      <Login />
    </NoSSR>
  );
};

export default LoginPage;
