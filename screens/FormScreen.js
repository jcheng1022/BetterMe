import React from "react";
import { View, Text, Button } from "react-native";

export default function FormScreen({ navigation }) {
  return (
    <>
      <Text> Form</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Button title="Log Out" onPress={() => navigation.navigate("Landing")} />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />

      <Button
        title="Go to History"
        onPress={() => navigation.navigate("History")}
      />
    </>
  );
}
