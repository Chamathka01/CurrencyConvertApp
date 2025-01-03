import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from "react-native-paper";
import CurrencyConverter from "./components/CurrencyConverter";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <CurrencyConverter></CurrencyConverter>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
