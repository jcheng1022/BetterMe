import React from "react";
import { View, Text, Button } from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <>
      <Button title="Log Out" onPress={() => navigation.navigate("Landing")} />
      <Text> Dashboard</Text>

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button title="Go to Form" onPress={() => navigation.navigate("Form")} />
      <Button
        title="Go to History"
        onPress={() => navigation.navigate("History")}
      />
    </>
  );
}
