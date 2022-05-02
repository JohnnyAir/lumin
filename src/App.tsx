import * as React from "react";
import { ChakraProvider, Box, Flex, Heading, Text } from "@chakra-ui/react";
import theme from "./theme";
import { Cart } from "./cart/Cart";
import ProductGrid from "./products/Products";
import BrandSelect from "./components/Select";
import Header from "./components/Header";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box w="full" h="full">
        <Box w="full" maxW="1300px" mx="auto" p="8">
          <Flex
            direction={["column", "row"]}
            justify="space-between"
            align={["flex-start", "flex-end"]}
            py="16"
          >
            <Box mb={["6", "0"]}>
              <Heading
                fontSize={["x-large", "4xl"]}
                fontFamily="Prata"
                lineHeight="2"
              >
                All Products
              </Heading>
              <Text>A 360° look at Lumin </Text>
            </Box>
            <Box w={["full", "96"]} pb="4">
              <BrandSelect
                size="xl"
                w="full"
                placeholder="Filter by"
              ></BrandSelect>
            </Box>
          </Flex>
        </Box>
        <ProductGrid />
      </Box>
      <Cart />
    </ChakraProvider>
  );
};
