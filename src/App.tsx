import { Flex } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

const createUseFormSchema = z.object({
  email: z
    .string()
    .nonempty("o e-mail é obrigatório")
    .email("formato de e-mail inválido"),
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
});

type CreateUseFormData = z.infer<typeof createUseFormSchema>;

export const App = () => {
  const [output, setOutput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUseFormData>({
    resolver: zodResolver(createUseFormSchema),
  });

  const createUser = (data: any) => {
    setOutput(JSON.stringify(data, null, 2));
  };

  return (
    <Flex
      bgColor="#445995"
      flexDir="column"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={handleSubmit(createUser)}>
        <Flex
          flexDirection="column"
          bgColor="#e2e2e2"
          alignContent="center"
          borderRadius="10px"
          gap={2}
          p={12}
          color="#394686"
        >
          <Input label={"E-mail"} type="email" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
          <Input label={"Password"} type="password" {...register("password")} />
          {errors.password && <span>{errors.password.message}</span>}

          <Button mt={2} type="submit">
            Submit
          </Button>
        </Flex>
      </form>
      <Flex>{output}</Flex>
    </Flex>
  );
};
