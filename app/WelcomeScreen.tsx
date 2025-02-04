import * as React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle="white" style={{ flex: 1 }}>
      <Text style={welcomeScreenStyle.headerText}>Welcome to Little Lemon</Text>
      <Text style={welcomeScreenStyle.subText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const welcomeScreenStyle = StyleSheet.create({
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  subText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
