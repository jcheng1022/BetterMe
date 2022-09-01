import React from "react";
import { Text, View, Button } from "react-native";

export default function LandingScreen({ navigation }) {
  return (
    <>
      <Text> Landings</Text>
      <Button title="Log in" onPress={() => navigation.navigate("Dashboard")} />
    </>
  );
}
