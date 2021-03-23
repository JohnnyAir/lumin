import React from "react";
import { Select, SelectProps, useStyleConfig } from "@chakra-ui/react";

function BrandSelect(props: SelectProps) {
  const { variant, size, colorScheme, boxShadow, ...OtherProps } = props;

  const styles = useStyleConfig("Select", {
    variant,
    size,
    colorScheme,
  });

  return <Select sx={styles} {...OtherProps} />;
}

export default BrandSelect;
