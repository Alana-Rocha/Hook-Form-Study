import { Box } from "./components/Box";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Cores } from "./styles/cores";

export const App = () => {
  return (
    <Box
      bgColor={Cores.CINZA_IMAGEM}
      flexDir="column"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bgColor="#e2e2e2"
        flexDir="column"
        alignContent="center"
        maxW="100%"
        gap={4}
        p={12}
        color="#394686"
      >
        <Input label={"E-mail"}></Input>
        <Input label={"Password"}></Input>
        <Button mt={5}>Submit</Button>
      </Box>
    </Box>
  );
};
