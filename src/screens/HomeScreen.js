import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const NavButton = ({ title, style, textStyle, onPress, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.customBtn, style]}
      onPress={onPress}
      {...props}
    >
      <Text style={[styles.customText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const HomeScreen = ({ navigation: { navigate } }) => {
  const toComponent = () => navigate("Component");
  const toList = () => navigate("List");
  const toImage = () => navigate("Image");

  return (
    <View style={styles.container}>
      <Button title="Component screen" onPress={toComponent} />
      <Button title="Image screen" onPress={toImage} />
      <NavButton title="List screen" onPress={() => navigate("List")} />
      <NavButton
        title="Counter"
        onPress={() => navigate("Counter")}
        style={styles.counterBtn}
        textStyle={styles.counterText}
      />
      <NavButton title="Color Generator" onPress={() => navigate("Color")} />
      <NavButton title="Todo List" onPress={() => navigate("Todo")} />
      <NavButton title="Fake Store" onPress={() => navigate("Store")} />
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
    borderRadius: 5,
  },
  customText: {
    fontSize: 18,
  },
  counterBtn: {
    backgroundColor: "#009688",
    borderWidth: 0,
  },
  counterText: {
    color: "#fff",
  },
});
