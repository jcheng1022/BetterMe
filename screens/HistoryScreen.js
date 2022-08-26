import React from "react";
import { Text, View, Button } from "react-native";

export default function HistoryScreen({ navigation }) {
  return (
    <>
      <Text> History</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Button title="Log Out" onPress={() => navigation.navigate("Landing")} />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button title="Go to Form" onPress={() => navigation.navigate("Form")} />
    </>
  );
}
