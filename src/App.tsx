import { Flex } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import "./styles/App.css";
import {
  CreateUseFormData,
  createUseFormSchema,
} from "./schemas/createFormSchema";

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

  const { fields, append } = useFieldArray({
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
          // as="form"
          flexDirection="column"
          bgColor="#e2e2e2"
          alignContent="center"
          borderRadius="10px"
          gap={2}
          p={12}
          color="#000"
        >
          <Input label={"Name"} type="text" id="name" isRequired />
          {/* {errors.name && <span>{errors.name.message}</span>} */}
          <Input label={"E-mail"} type="email" id="email" isRequired />
          {/* {errors.email && <span>{errors.email.message}</span>} */}
          <Input label={"Password"} type="password" id="password" isRequired />
          {/* {errors.password && <span>{errors.password.message}</span>} */}

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
                <Flex flexDir="column" gap={1}>
                  {/* <Input
                    type="text"
                    {...register(`techs.${index}.title`)}
                    w="245px"
                  />

                  {errors.techs?.[index]?.title && (
                    <span>{errors.techs?.[index]?.title?.message}</span>
                  )}
                  {errors.techs && <span>{errors.techs.root?.message}</span>}
                </Flex>

                <Flex flex="1" flexDir="column" gap={1}>
                  <Input
                    w="50px"
                    type="text"
                    {...register(`techs.${index}.knowledge`)}
                  /> */}

                  {errors.techs?.[index]?.knowledge && (
                    <span>{errors.techs?.[index]?.knowledge?.message}</span>
                  )}
                </Flex>
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
