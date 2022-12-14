import React from "react";
import { Text, View, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <>
      <Text> ProfileScreen</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Button title="Log Out" onPress={() => navigation.navigate("Landing")} />
      <Button title="Go to Form" onPress={() => navigation.navigate("Form")} />
      <Button
        title="Go to History"
        onPress={() => navigation.navigate("History")}
      />
    </>
  );
}
