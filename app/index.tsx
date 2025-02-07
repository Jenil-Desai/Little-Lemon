import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "@/components/global/LittleLemonHeader";
import LittleLemonFooter from "@/components/global/LittleLemonFooter";
import MenuItems from "@/components/MenuItem";
import LoginScreen from "./Login";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <MenuItems /> */}
        <LoginScreen />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
