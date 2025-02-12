import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="MenuScreen" options={{ title: "Menu" }} />
      <Stack.Screen name="SubscribeScreen" options={{ title: "Newsletter" }} />
    </Stack>
  );
}
