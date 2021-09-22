import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { UserAttributesProvider } from "../contexts/userAttributesContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UserAttributesProvider>
        <Component {...pageProps} />
      </UserAttributesProvider>
    </ChakraProvider>
  );
}
export default MyApp;
