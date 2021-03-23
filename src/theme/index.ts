import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import { styles } from "./styles";
import { Button } from "./components/button";
import { Select } from "./components/select";
import { breakpoints } from "./breakpoints";

const fonts = {
  body: "sans-serif",
  heading: "'Open Sans Condensed', sans-serif",
  mono: "Menlo, monospace",
};

const initialColorMode = "light";

const config: ThemeConfig = {
  initialColorMode: initialColorMode,
  useSystemColorMode: false,
};

const overrides = {
  styles,
  fonts,
  colors,
  config,
  breakpoints,
  components: { Button, Select },
};

export default extendTheme(overrides);
