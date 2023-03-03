// pages/_app.js
import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Layout } from "../../Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
