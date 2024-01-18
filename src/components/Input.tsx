import { SearchIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as InputChakra,
  InputGroup,
  InputProps as InputPropsChakra,
} from "@chakra-ui/react";
import { forwardRef, memo } from "react";
import { Button } from "../components/Button";
import { Cores } from "../styles/cores";

type InputProps = {
  label: string;
  isReadOnly?: boolean;
  maxW?: string | number;
  errorMessage?: string;
  isLoading?: boolean;
  confirm?: boolean;
  onConfirm?: () => void;
};

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps & InputPropsChakra>(
    (
      {
        label,
        maxW,
        isRequired,
        isLoading,
        errorMessage,
        confirm,
        onConfirm,
        ...rest
      },
      ref
    ) => {
      return (
        <FormControl
          maxW={maxW}
          isInvalid={!!errorMessage}
          isRequired={isRequired}
        >
          <FormLabel fontSize="0.85rem" fontWeight="400">
            {label}
          </FormLabel>
          <InputGroup>
            <InputChakra
              ref={ref}
              fontSize="0.9rem"
              bgColor="#F2F3F3"
              borderRadius="12px"
              borderRightRadius={confirm ? "0" : "12px"}
              border="1px solid transparent"
              _hover={{}}
              boxShadow='base'
              _focusVisible={{ borderColor: Cores.AZUL }}
              {...rest}
            />
            {confirm && (
              <Button
                p="20px"
                borderLeftRadius="0"
                borderRightRadius="12px"
                isLoading={isLoading}
                onClick={() => onConfirm && onConfirm()}
              >
                <SearchIcon fontSize="1rem" />
              </Button>
            )}
          </InputGroup>
          <FormErrorMessage mt="-1px" fontSize="0.8rem">
            {errorMessage}
          </FormErrorMessage>
        </FormControl>
      );
    }
  )
);
