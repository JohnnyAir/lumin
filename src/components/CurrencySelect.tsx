import React from "react";
import BrandSelect from "./Select";
import { SelectProps } from "@chakra-ui/react";
import { useCurrencies } from "../currency/hooks";

function CurrencySelect(props: SelectProps) {
  const { currencies, selectedCurrency, setCurrency } = useCurrencies();

  return (
    <BrandSelect
      onChange={(e) => setCurrency(e.target.value)}
      value={selectedCurrency}
      {...props}
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </BrandSelect>
  );
}

export default CurrencySelect;
