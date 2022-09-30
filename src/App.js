import { Flex, Heading } from "@chakra-ui/react";
import Urna from "./components/urna/urna";

function App() {
  return (
    <Flex
      bgColor="#1a202c"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Heading
        marginBottom="2rem"
        color="whiteAlpha.900"
      >
        Simulador de Urna Eletrônica
      </Heading>
      <Urna />
    </Flex>
  );
}

export default App;
