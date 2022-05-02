import React from "react";
import { Flex, Text, Spinner, Box, Image } from "@chakra-ui/react";
import BrandButton from "../components/Button";
import { IProduct } from "./types";
import { useCartActions } from "../cart/actions";
import FormatAmount from "../components/FormatAmount";
import useProducts from "./useProducts";

const ProductGrid = () => {
  const { products, isFetchingProducts } = useProducts();
  const { addToCart } = useCartActions();

  if (isFetchingProducts) {
    return (
      <Flex w="full" justify="center">
        <Spinner size="lg" />
      </Flex>
    );
  }

  return (
    <Box w="full" bg="#E2E6E3">
      <Flex flexWrap="wrap" maxW="1300px" mx="auto">
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            addToCart={(id) => addToCart(id)}
          />
        ))}
      </Flex>
    </Box>
  );
};

interface ProductProps extends IProduct {
  addToCart: (id: number) => void;
}

const Product: React.FC<ProductProps> = (props) => {
  return (
    <Flex
      textAlign="center"
      align="center"
      w={["50%", "33.33%"]}
      px="4"
      py="6"
      direction="column"
      justify="flex-end"
    >
      <Flex align="center" direction="column">
        <Flex justify="center" my="8">
          <Image maxH="170px" maxW="230px" src={props.image_url} />
        </Flex>
        <Flex direction="column">
          <Text>{props.title}</Text>
          <Text>
            From: <FormatAmount as="span" amount={props.price} />{" "}
          </Text>
        </Flex>
        <BrandButton
          onClick={() => props.addToCart(props.id)}
          my="4"
          w="160px"
          size="lg"
        >
          Add to Cart
        </BrandButton>
      </Flex>
    </Flex>
  );
};

export default ProductGrid;
