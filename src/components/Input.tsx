import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as InputChakra,
  InputGroup,
  InputProps as InputPropsChakra,
} from "@chakra-ui/react";
import { memo } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

type InputProps = {
  id: string;
  label?: string;
  maxW?: string | number;
  validation?: RegisterOptions;
};

export const Input = memo(
  ({
    id,
    label,
    maxW,
    isRequired,
    isReadOnly,
    validation,
    ...rest
  }: InputProps & InputPropsChakra) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();

    return (
      <FormControl maxW={maxW} isInvalid={!!errors[id]} isRequired={isRequired}>
        <FormLabel fontSize="0.9rem" fontWeight="400">
          {label}
        </FormLabel>
        <InputGroup>
          <InputChakra
            fontSize="1rem"
            w="300px"
            bgColor="white"
            borderRadius="5px"
            border="1px solid transparent"
            boxShadow="base"
            _focusVisible={{ borderColor: "#445995" }}
            {...register(id, validation)}
            {...rest}
          />
        </InputGroup>
        <FormErrorMessage mt={-0.3} fontSize="0.7rem">
          {errors[id]?.message?.toString()}
        </FormErrorMessage>
      </FormControl>
    );
  }
);
