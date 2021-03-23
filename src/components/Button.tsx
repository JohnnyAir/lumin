import React from "react";
import { Button, ButtonProps, useStyleConfig } from "@chakra-ui/react";

// interface Props {}

function BrandButton(props: ButtonProps) {
  const { variant, size, colorScheme, ...rest } = props;

  const styles = useStyleConfig("Button", {
    variant,
    size,
    colorScheme,
  });

  return <Button sx={styles} {...rest} />;
}

export default BrandButton;
