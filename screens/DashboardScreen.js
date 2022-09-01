import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import {
  Avatar,
  Button as PaperButton,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";

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
      <View styles={styles.container}>
        <Card
          style={styles.dashboardCard}
          onPress={() => console.log("1 pressed")}
        >
          <Card.Content>
            <Title style={styles.cardTitle}>Starting Weight</Title>
            <Paragraph> 200 lbs</Paragraph>
          </Card.Content>
        </Card>
        <Card
          style={styles.dashboardCard}
          onPress={() => console.log("2 pressed")}
        >
          <Card.Content>
            <Title style={styles.cardTitle}> Goal Weight</Title>
            <Paragraph> 181 pounds</Paragraph>
          </Card.Content>
        </Card>
        <Card
          style={styles.dashboardCard}
          onPress={() => console.log("3 pressed")}
        >
          <Card.Content>
            <Title style={styles.cardTitle}>7 Day Change</Title>
            <Paragraph> 7 lbs</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardTitle: {},
  dashboardCard: {
    width: 175,
    height: 150,
    borderRadius: 25,
  },
});
