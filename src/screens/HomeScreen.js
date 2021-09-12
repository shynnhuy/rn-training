import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const HomeScreen = ({ navigation }) => {
  const toComponent = () => navigation.navigate("Component");
  const toList = () => navigation.navigate("List");
  const toImage = () => navigation.navigate("Image");
  return (
    <View style={styles.container}>
      <Button title="To component screen" onPress={toComponent} />
      <Button title="To image screen" onPress={toImage} />
      <TouchableOpacity style={styles.customBtn} onPress={toList}>
        <Text>To list screen</Text>
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
    backgroundColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
  },
});
