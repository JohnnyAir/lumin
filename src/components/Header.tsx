import React from "react";
import { Box, Flex, Heading, HStack, Text, Icon } from "@chakra-ui/react";
import { ReactComponent as CartIcon } from "../assets/svg/cart.svg";
import { useCartValues } from "../cart/use-cart";
import { useCartActions } from "../cart/actions";

function Header() {
  const { cartItemsCount } = useCartValues();
  const { openCart } = useCartActions();

  return (
    <Box h="60px" boxShadow="0 2px 3px -3px;" px="14" py="2">
      <Flex w="full" justify="space-between">
        <Box display={["block", "none"]}></Box>
        <Flex display={["none", "flex"]}>
          <Heading size="lg" letterSpacing="15px">
            LUMIN
          </Heading>
          <HStack pt="2" ml="16" spacing="8">
            <Text>Shop</Text>
            <Text>Learn</Text>
          </HStack>
        </Flex>
        <HStack pt="2" ml="16" spacing="4">
          <Text>Account</Text>
          <Box position="relative" cursor="pointer">
            {cartItemsCount > 0 && (
              <Text position="absolute" right="-9px" top="-6px">
                {cartItemsCount}
              </Text>
            )}
            <Icon onClick={openCart} w="6" h="6" as={CartIcon} />
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Header;
