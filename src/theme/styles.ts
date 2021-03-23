import { mode, GlobalStyleProps } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: mode("grey.800", "whiteAlpha.900")(props),
      bg: "#f5f5f4",
      w: "full",
      h: "full",
      fontSize: "14px",
    },
    html: {
      w: "full",
      h: "full",
    },
  }),
};
