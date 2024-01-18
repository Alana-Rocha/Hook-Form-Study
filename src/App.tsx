import { Flex } from "@chakra-ui/react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Cores } from "./styles/cores";

export const App = () => {
  return (
    <Flex
      bgColor={Cores.CINZA_IMAGEM}
      flexDir="column"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        bgColor={Cores.CINZA_IMAGEM}
        flexDir="column"
        alignContent="center"
        maxW="100%"
        gap={4}
      >
        <Input label={"e-mail"}></Input>
        <Input label={"password"}></Input>
        <Button>Submit</Button>
      </Flex>
    </Flex>
  );
};
