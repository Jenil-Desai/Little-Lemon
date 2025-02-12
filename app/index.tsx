import * as React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LittleLemonHeader from "@/components/global/LittleLemonHeader";
import LittleLemonFooter from "@/components/global/LittleLemonFooter";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ size }) => {
              if (route.name === "Welcome") {
                return <Ionicons name={"ios-home"} size={size} />;
              } else if (route.name === "Login") {
                return <Ionicons name={"ios-enter"} size={size} />;
              }
            },
          })}
          initialRouteName="Login"
        >
          <Tab.Screen name="Welcome" component={WelcomeScreen} />
          <Tab.Screen name="Login" component={LoginScreen} />
        </Tab.Navigator>
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
