import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";

//importing screens
import DashboardScreen from "./screens/DashboardScreen";
import LandingScreen from "./screens/LandingScreen";
import HistoryScreen from "./screens/HistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FormScreen from "./screens/FormScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [entries, setEntries] = useState([]);

  const [formInput, setFormInput] = useState({
    weight: "",
    date: "",
    didExercise: true,
  });

  const URL = "http://localhost:4000/entries/";

  //GET ROUTE

  const getEntries = async () => {
    const response = await fetch(URL, {
      method: "GET",
    });
    const data = await response.json();
    setEntries(data);
    console.log(`entries from get route: ` + entries);
  };

  // CREATE ROUTE

  const createEntries = async (entries) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(entries),
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="History">
          {(props) => (
            <HistoryScreen
              {...props}
              getEntries={getEntries}
              entries={entries}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Form">
          {(props) => (
            <FormScreen
              {...props}
              getEntries={getEntries}
              entries={entries}
              createEntries={createEntries}
              formInput={formInput}
              setFormInput={setFormInput}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
