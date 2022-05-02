import * as React from "react";
import { Flex, Text, Grid, Image } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import FormatAmount from "../components/FormatAmount";
import { ICartItem } from "./types";

interface CartItemProps extends ICartItem {
  onIncreaseQuanity: (id: number) => void;
  onDecreaseQuanity: (id: number) => void;
  onRemoveItem: (id: number) => void;
}

const CartItem = (props: CartItemProps) => {
  return (
    <Flex
      position="relative"
      bg="white"
      justifyContent="space-between"
      w="full"
    >
      <Flex
        direction="column"
        justify="space-between"
        minH="150px"
        px="6"
        py="3"
        w="65%"
      >
        <Text w="full">{props.title}</Text>
        <Flex alignItems="center" justify="space-between">
          <Grid
            borderWidth="1px"
            p="1"
            textAlign="center"
            placeContent="center"
            templateColumns="1fr 2fr 1fr"
          >
            <Text
              onClick={() => props.onDecreaseQuanity(props.id)}
              w="full"
              h="full"
              role="button"
              cursor="pointer"
              as="span"
            >
              -
            </Text>
            <Text cursor="pointer" px="4" as="span">
              {props.qty}
            </Text>
            <Text
              onClick={() => props.onIncreaseQuanity(props.id)}
              w="full"
              h="full"
              role="button"
              cursor="pointer"
              as="span"
            >
              +
            </Text>
          </Grid>
          <FormatAmount amount={props.price * props.qty} />
        </Flex>
      </Flex>
      <Grid placeContent="center" w="32%" bg="whiteAlpha.100">
        <Image w="100px" src={props.image_url} />
      </Grid>
      <CloseIcon
        onClick={() => props.onRemoveItem(props.id)}
        w="3"
        h="3"
        position="absolute"
        right="4"
        top="4"
      />
    </Flex>
  );
};

export default CartItem;
