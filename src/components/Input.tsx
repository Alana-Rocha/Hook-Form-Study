import {
  FormControl,
  FormLabel,
  Input as InputChakra,
  InputGroup,
  InputProps as InputPropsChakra,
} from "@chakra-ui/react";
import { forwardRef, memo } from "react";

type InputProps = {
  label?: string;
  maxW?: string | number;
};

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps & InputPropsChakra>(
    ({ label, maxW, ...rest }, ref) => {
      return (
        <FormControl maxW={maxW}>
          <FormLabel fontSize="0.9rem" fontWeight="400">
            {label}
          </FormLabel>
          <InputGroup>
            <InputChakra
              ref={ref}
              fontSize="1rem"
              w="300px"
              bgColor="white"
              borderRadius="5px"
              border="1px solid transparent"
              boxShadow="base"
              _focusVisible={{ borderColor: "#445995" }}
              {...rest}
            />
          </InputGroup>
        </FormControl>
      );
    }
  )
);
