import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const NavButton = ({ title, style, onPress, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.customBtn, style]}
      onPress={onPress}
      {...props}
    >
      <Text style={styles.counterText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const HomeScreen = ({ navigation: { navigate } }) => {
  const toComponent = () => navigate("Component");
  const toList = () => navigate("List");
  const toImage = () => navigate("Image");
  const toCounter = () => navigate("Counter");
  const toColorGenerator = () => navigate("Color");
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
      <TouchableOpacity
        style={[styles.customBtn, styles.counterBtn]}
        onPress={toColorGenerator}
      >
        <Text style={styles.counterText}>To color generator</Text>
      </TouchableOpacity>
      <NavButton title="Todo List" onPress={() => navigate("Todo")} />
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
