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
        px={7}
        py="17px"
        color={Cores.BRANCO}
        bgColor={Cores.CINZA}
        borderRadius={999}
        fontWeight="500"
        fontSize="0.9rem"
        transition=".3s"
        _hover={{ bg: Cores.CINZA_CLARO }}
        {...rest}
      >
        {children}
      </ButtonChakra>
    );
  }
);
