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