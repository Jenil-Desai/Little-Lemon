import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import * as React from "react";

const WelcomeScreen = () => {
  const router = useRouter();

  function menuOnPress() {
    router.push("/MenuScreen");
  }

  function newsletterOnPress() {
    router.push("/SubscribeScreen");
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/little-lemon-logo.png")}
        />
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={menuOnPress}>
          <Text style={styles.btnText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={newsletterOnPress}>
          <Text style={styles.btnText}>Newsletter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: "contain",
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  btn: {
    borderRadius: 8,
    backgroundColor: "#495E57",
    justifyContent: "center",
    padding: 8,
    width: "50%",
  },
  btnText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
});

export default WelcomeScreen;
