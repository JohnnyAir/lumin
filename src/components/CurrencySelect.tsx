import React from "react";
import BrandSelect from "./Select";
import { SelectProps } from "@chakra-ui/react";
import { useCurrency } from "../products/actions";

function CurrencySelect(props: SelectProps) {
  const { currencies, currency, setCurrency } = useCurrency();

  return (
    <BrandSelect
      onChange={(e) => setCurrency(e.target.value)}
      value={currency}
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
