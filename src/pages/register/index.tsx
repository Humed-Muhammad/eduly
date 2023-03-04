import React from "react";
import { Signup } from "@/components";
import NoSSR from "react-no-ssr";

const Register = () => {
  return (
    <NoSSR>
      <Signup />
    </NoSSR>
  );
};

export default Register;
