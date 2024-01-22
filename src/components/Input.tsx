import {
  FormControl,
  FormLabel,
  Input as InputChakra,
  InputGroup,
  InputProps as InputPropsChakra,
} from "@chakra-ui/react";
import { forwardRef, memo } from "react";
import { Button } from "../components/Button";

type InputProps = {
  label?: string;
  isReadOnly?: boolean;
  maxW?: string | number;

  isLoading?: boolean;
  confirm?: boolean;
  onConfirm?: () => void;
};

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps & InputPropsChakra>(
    ({ label, maxW, confirm, onConfirm, ...rest }, ref) => {
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
            {confirm && (
              <Button
                borderRightRadius="12px"
                onClick={() => onConfirm && onConfirm()}
              ></Button>
            )}
          </InputGroup>
        </FormControl>
      );
    }
  )
);
