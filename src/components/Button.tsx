import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra,
} from "@chakra-ui/react";
import { memo } from "react";
import { Cores } from "../styles/cores";

type ButtonProps = {
  children?: string | JSX.Element;
};

export const Button = memo(
  ({ children, ...rest }: ButtonProps & ButtonPropsChakra) => {
    return (
      <ButtonChakra
        color={Cores.BRANCO}
        bgColor="#445799"
        borderRadius={999}
        fontWeight="500"
        fontSize="0.9rem"
        transition=".3s"
        _hover={{ bg: "#394686" }}
        {...rest}
      >
        {children}
      </ButtonChakra>
    );
  }
);
