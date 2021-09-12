import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const HomeScreen = ({ navigation: { navigate } }) => {
  const toComponent = () => navigate("Component");
  const toList = () => navigate("List");
  const toImage = () => navigate("Image");
  const toCounter = () => navigate("Counter");
  return (
    <View style={styles.container}>
      <Button title="To component screen" onPress={toComponent} />
      <Button title="To image screen" onPress={toImage} />
      <TouchableOpacity style={styles.customBtn} onPress={toList}>
        <Text>To list screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.customBtn, styles.counterBtn]}
        onPress={toCounter}
      >
        <Text style={styles.counterText}>To counter screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  customBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    marginVertical: 5,
    backgroundColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
  },
  counterBtn: {
    backgroundColor: "#009688",
    borderWidth: 0,
  },
  counterText: {
    fontSize: 18,
    color: "#fff",
  },
});
