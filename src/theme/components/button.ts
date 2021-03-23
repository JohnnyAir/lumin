export const Button = {
  baseStyle: {
    borderRadius: "0",
    fontWeight:"normal"
  },
  sizes: {
    lg: {
      fontSize: "13px",
    },
  },
  variants: {
    solid: {
      bg: "brand.500",
      color: "white",
      _hover: {
        bg: "brand.700",
      },
      _active: {
        bg: "brand.800",
      },
    },
    outline: {
      bg: "white",
      color: "brand.500",
      borderColor:"brand.700",
      _hover: {
        bg: "brand.50",
      },
      _active: {
        bg: "brand.100",
      },
    },
  },
  defaultProps: {
    size: "md",
  },
};
