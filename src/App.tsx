import { Flex } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

const createUseFormSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .transform((username) => {
      return username
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido"),
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
  techs: z.array(
    z.object({
      title: z.string().nonempty("O título é obrigatório"),
      knowledge: z.number().min(1).max(100),
    })
  ),
});

type CreateUseFormData = z.infer<typeof createUseFormSchema>;

export const App = () => {
  const [output, setOutput] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUseFormData>({
    resolver: zodResolver(createUseFormSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "techs",
  });

  const addNewTech = () => {
    append({ title: "", knowledge: 0 });
  };

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
          color="#000"
        >
          <Input label={"Name"} type="text" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
          <Input label={"E-mail"} type="email" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
          <Input label={"Password"} type="password" {...register("password")} />
          {errors.password && <span>{errors.password.message}</span>}

          <Flex gap={3}>
            <label style={{ fontWeight: "500" }}>Technologies</label>
            <Button
              maxW="20%"
              h="25px"
              fontSize="0.6rem"
              onClick={addNewTech}
              bgColor="green"
              _hover={{ bg: "#006e01" }}
            >
              Adicionar
            </Button>
          </Flex>

          {fields.map((field, index) => {
            return (
              <Flex key={field.id} gap={2}>
                <Input
                  w="230px"
                  type="text"
                  {...register(`techs.${index}.title`)}
                />
                <Input
                  w="60px"
                  type="text"
                  {...register(`techs.${index}.knowledge`)}
                />
              </Flex>
            );
          })}

          <Button mt={5} type="submit">
            Submit
          </Button>
        </Flex>
      </form>
      <Flex>{output}</Flex>
    </Flex>
  );
};
