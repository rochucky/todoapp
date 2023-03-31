import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Header from "./src/components/Header";
import Content from "./src/components/Content";

import styles from "./App.styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Content />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
