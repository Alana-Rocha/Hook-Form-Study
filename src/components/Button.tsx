import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra,
} from "@chakra-ui/react";
import { memo } from "react";

type ButtonProps = {
  children?: string | JSX.Element;
};

export const Button = memo(
  ({ children, ...rest }: ButtonProps & ButtonPropsChakra) => {
    return (
      <ButtonChakra
        color="#FFF"
        bgColor="#445799"
        borderRadius="5px"
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
