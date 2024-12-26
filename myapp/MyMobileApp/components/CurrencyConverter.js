import React, { useState } from "react";

export default function CurrencyConverter() {
    const [amount, setAmount] = useState("");
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [currencyType, setCurrencyType] = useState("USDtoLKR");
    const [showSelection, setShowSelection] = useState(false);

    const exchangeRates = {
        USD: 1,
        LKR: 294.5,
};

const handleConvert = () => {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      Alert.alert("Invalid Input", "Please enter a valid amount.");
      return;
    }
    if (currencyType === "USDtoLKR") {
      const converted = numericAmount * exchangeRates.LKR;
      setConvertedAmount(converted.toFixed(2));
    } else if (currencyType === "LKRtoUSD") {
      const converted = numericAmount / exchangeRates.LKR;
      setConvertedAmount(converted.toFixed(2));
    }
  };