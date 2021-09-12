import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CounterButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.counterBtn} onPress={onPress}>
      <Text style={styles.counterBtnText}>{text}</Text>
    </TouchableOpacity>
  );
};
export const CounterScreen = () => {
  const [count, setCount] = useState(0);

  const decrement = (value = 1) => setCount(count - value);
  const increment = (value = 1) => setCount(count + value);

  return (
    <View style={styles.counterContainer}>
      <View style={styles.counter}>
        <Text style={styles.counterText}>{count}</Text>
        <CounterButton text="-" onPress={() => decrement()} />
        <CounterButton text="+" onPress={() => increment()} />
        <CounterButton text="-10" onPress={() => decrement(10)} />
        <CounterButton text="+10" onPress={() => increment(10)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    flexWrap: "wrap",
  },
  counterBtn: {
    minWidth: "48%",
    marginHorizontal: "1%",
    backgroundColor: "#009688",
    borderRadius: 4,
    paddingVertical: 6,
    marginBottom: 5,
  },
  counterBtnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 40,
  },
  counterText: {
    minWidth: "100%",
    textAlign: "center",
    fontSize: 60,
  },
});
