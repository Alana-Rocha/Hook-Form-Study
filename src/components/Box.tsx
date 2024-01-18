import { Flex, FlexProps } from "@chakra-ui/react";
import { memo } from "react";

type BoxProps = { children?: JSX.Element | JSX.Element[] };

export const Box = memo(({ children, ...rest }: BoxProps & FlexProps) => {
  return (
    <Flex borderRadius="25" boxShadow="base" {...rest}>
      {children}
    </Flex>
  );
});
