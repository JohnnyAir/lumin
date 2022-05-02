import React from "react";
import { Text, TextProps } from "@chakra-ui/react";
import { useCurrency } from "../currency/hooks";

interface Props extends TextProps {
  amount: number;
}

function FormatAmount(props: Props) {
  const currency = useCurrency();
  const { amount, ...textProps } = props;

  return (
    <Text {...textProps}>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
        currencyDisplay: "symbol",
      }).format(props.amount)}
    </Text>
  );
}

export default FormatAmount;
