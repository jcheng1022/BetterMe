import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { DataTable } from "react-native-paper";

export default function HistoryScreen({ navigation, getEntries, entries }) {
  useEffect(() => {
    getEntries();
  }, []);

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

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title numeric>Weight</DataTable.Title>
          <DataTable.Title numeric>Total Change</DataTable.Title>
          <DataTable.Title numeric>Exercised?</DataTable.Title>
        </DataTable.Header>

        {entries.map((entry, index) => {
          return (
            <DataTable.Row>
              <DataTable.Cell>{entry.date}</DataTable.Cell>
              <DataTable.Cell numeric>{entry.weight}</DataTable.Cell>
              <DataTable.Cell numeric>2</DataTable.Cell>
              <DataTable.Cell numeric>
                {entry.didExercise ? "Yes" : "No"}
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
        {/* <DataTable.Row>
          <DataTable.Cell>2022-05-02</DataTable.Cell>
          <DataTable.Cell numeric>200</DataTable.Cell>
          <DataTable.Cell numeric>0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>2022-05-01</DataTable.Cell>
          <DataTable.Cell numeric>199</DataTable.Cell>
          <DataTable.Cell numeric>1</DataTable.Cell>
        </DataTable.Row> */}

        {/* <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      /> */}
      </DataTable>
    </>
  );
}
