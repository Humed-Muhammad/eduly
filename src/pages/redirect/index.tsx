import React from "react";
import NoSSR from "react-no-ssr";
import { RedirectPage } from "@/components/RedirectPage";

const Redirect = () => {
  return (
    <NoSSR>
      <RedirectPage />
    </NoSSR>
  );
};

export default Redirect;
