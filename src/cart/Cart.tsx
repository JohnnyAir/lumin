import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Flex,
  Text,
  Stack,
  DrawerFooter,
  Divider,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import BrandButton from "../components/Button";
import { useCart } from "./useCart";
import CartItem from "./CartItem";
import FormatAmount from "../components/FormatAmount";
import CurrencySelect from "../components/CurrencySelect";

interface CartProps {}

export function Cart(props: CartProps) {
  const {
    open,
    subTotal,
    cartItems,
    increaseItemQuantiy,
    decreaseItemQuantiy,
    removeFromCart,
    closeCart,
  } = useCart();

  return (
    <Drawer onClose={closeCart} isOpen={open} size="md">
      <DrawerOverlay>
        <DrawerContent bg="#F2F3F0">
          <DrawerHeader>
            <Flex align="center">
              <Flex
                justify="center"
                align="center"
                borderColor="grey"
                borderWidth="1px"
                borderRadius="50%"
                cursor="pointer"
                w="6"
                h="6"
                onClick={closeCart}
              >
                <ChevronRightIcon w="5" h="5" />
              </Flex>
              <Text textAlign="center" flex="1">
                Your Cart
              </Text>
            </Flex>
            <CurrencySelect size="xs" width="100px" />
          </DrawerHeader>
          <DrawerBody>
            <Stack>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onDecreaseQuanity={decreaseItemQuantiy}
                    onIncreaseQuanity={increaseItemQuantiy}
                    onRemoveItem={removeFromCart}
                  />
                ))
              ) : (
                <Text>There are no items in your cart.</Text>
              )}
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Flex w="full" direction="column">
              <Divider borderColor="brand.500" />
              <Flex justify="space-between" my="4">
                <Text>Subtotal</Text>
                <FormatAmount amount={subTotal} />
              </Flex>
              <Flex direction="column">
                <BrandButton variant="outline" my="2" w="full" size="lg">
                  MAKE THIS A SUBSCRIPTION (SAVE 20%)
                </BrandButton>
                <BrandButton letterSpacing="widest" my="1" w="full" size="lg">
                  PROCEED TO CHECKOUT
                </BrandButton>
              </Flex>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
