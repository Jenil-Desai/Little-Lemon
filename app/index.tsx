import * as React from "react";
import { View } from "react-native";

import LittleLemonHeader from "@/components/global/LittleLemonHeader";
import LittleLemonFooter from "@/components/global/LittleLemonFooter";
import WelcomeScreen from "./WelcomeScreen";

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#495E57",
        }}
      >
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={{ backgroundColor: "#495E57" }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
