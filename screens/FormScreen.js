import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import {
  TextInput as PaperTextInput,
  Checkbox,
  RadioButton,
} from "react-native-paper";
import DatePicker from "react-native-date-picker";
import DropDownPicker from "react-native-dropdown-picker";

export default function FormScreen({
  navigation,
  formInput,
  setFormInput,
  createEntries,
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [checked, setChecked] = useState(false);

  const [openDrop, setOpenDrop] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Exercised", value: true },
    { label: "Did not Exercise", value: false },
  ]);

  const handleChange = (event) => {
    setFormInput({
      ...formInput,
      [event.name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(
      `${formInput.date} , ${formInput.weight} , ${formInput.didExercise}`
    );
    createEntries(formInput);
    {
      navigation.navigate("History");
    }
    setFormInput({
      ...formInput,
      weight: "",
      date: "",
      didExercise: true,
    });
  };
  return (
    <View style={styles.container}>
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
      <View style={styles.formContainer}>
        <DatePicker
          date={date}
          onDateChange={(value) => {
            setFormInput({ ...formInput, date: value });
            setDate(value);
          }}
          mode="date"
          required
        />

        {/* <TextInput
          style={styles.textInput}
          placeholder="date"
          value={formInput.date}
          onChangeText={(value) => setFormInput({ ...formInput, date: value })}
        /> */}
        <TextInput
          style={styles.textInput}
          placeholder="weight"
          value={formInput.weight}
          onChangeText={(value) =>
            setFormInput({ ...formInput, weight: value })
          }
        />
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onSelectItem={(item) =>
            setFormInput({ ...formInput, didExercise: item.value })
          }
        />

        {/* <TextInput
          style={styles.textInput}
          placeholder="exercise?"
          value={formInput.didExercise}
          onChangeText={(value) =>
            setFormInput({ ...formInput, didExercise: value })
          }
        /> */}

        <Button title="submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    height: 30,
    margin: 10,
  },
  buttonContainer: {
    padding: 18,
    backgroundColor: "#e7dfed",
    width: 300,
    borderRadius: 5,
    margin: 15,
  },
  dateButton: {
    fontSize: 15,
  },
  formContainer: {
    alignItems: "center",
  },
  textInput: {
    width: 300,
    margin: 15,
  },
  dropDownMenu: {
    backgroundColor: "#e7dfed",
    width: 300,
    justifyContent: "center",
  },
});
