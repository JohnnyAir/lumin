export const Select = {
  baseStyle: {
    borderRadius: "0",
  },
  sizes: {
    xl: {
      h: "56px",
    },
  },
  variants: {
    solid: {
      bg: "white",
      borderWidth: "1px",
    },
    "no-border": {
      bg: "white",
      borderWidth: "0",
    },
    outline: {},
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
};
