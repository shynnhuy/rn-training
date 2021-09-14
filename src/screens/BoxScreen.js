import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={[styles.text, styles.red]}>Child #1</Text>
      <Text style={[styles.text, styles.blue]}>Child #2</Text>
      <Text style={[styles.text, styles.green]}>Child #3</Text>
      <Text style={[styles.text, styles.blue, { flex: 4 }]}>Child #4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 3,
    // borderColor: "black",
    // flex: 1,
    // alignItems: "center",
    height: 300,
    justifyContent: "space-between",
    flexDirection: "row",
    // alignItems: "stretch",
    // alignItems: "center",
  },
  text: {
    // borderWidth: 3,
    color: "white",
    padding: 15,
    flex: 1,
    marginHorizontal: 2,
  },
  red: {
    backgroundColor: "red",
  },
  blue: {
    backgroundColor: "blue",
    // alignSelf: "stretch"
  },
  green: {
    backgroundColor: "green",
  },
});
