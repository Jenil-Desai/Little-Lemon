import * as React from "react";
import { StyleSheet, View } from "react-native";

import LittleLemonHeader from "@/components/global/LittleLemonHeader";
import LittleLemonFooter from "@/components/global/LittleLemonFooter";
import WelcomeScreen from "./WelcomeScreen";
import MenuItems from "@/components/MenuItem";

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <MenuItems />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
