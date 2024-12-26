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

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title style={styles.titleText}>Currency Converter</Title>
      </View>
      <View style={styles.body}>
        <TextInput
          label="Amount"
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <Card
          style={styles.selectionCard}
          onPress={() => setShowSelection(!showSelection)}
        >
          <Text style={styles.selectionText}>
            {currencyType === "USDtoLKR"
              ? "Convert USD to LKR"
              : "Convert LKR to USD"}
          </Text>
        </Card>

        {showSelection && (
          <View style={styles.selectionOptions}>
            <Button
              mode="outlined"
              onPress={() => {
                setCurrencyType("USDtoLKR");
                setShowSelection(false);
              }}
            >
              Convert USD to LKR
            </Button>
            <Button
              mode="outlined"
              onPress={() => {
                setCurrencyType("LKRtoUSD");
                setShowSelection(false);
              }}
            >
              Convert LKR to USD
            </Button>
          </View>
        )}

        <Button mode="contained" onPress={handleConvert}>
          Convert
        </Button>

        {convertedAmount !== null && (
          <Text style={styles.convertedAmount}>
            Converted Amount: {convertedAmount}
          </Text>
        )}
      </View>
    </View>
  );
}
