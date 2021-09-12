import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export const TodoScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="What you gonna do?" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  input: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});
