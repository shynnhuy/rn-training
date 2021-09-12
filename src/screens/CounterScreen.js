import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const CounterScreen = () => {
  const [count, setCount] = useState(1);

  const decrement = (value = 1) =>
    setCount((prev) => {
      if (prev === 0) return 0;
      return prev - value;
    });
  const increment = (value = 1) => setCount(count + value);

  return (
    <View style={styles.counterContainer}>
      <View style={styles.counter}>
        <Text style={styles.counterText}>{count}</Text>
        <TouchableOpacity
          activeOpacity={count === 0 ? 1 : 0.7}
          style={styles.counterBtn}
          onPress={() => decrement()}
        >
          <Text style={styles.counterBtnText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.counterBtn} onPress={() => increment()}>
          <Text style={styles.counterBtnText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={count === 0 ? 1 : 0.7}
          style={styles.counterBtn}
          onPress={() => decrement(10)}
        >
          <Text style={styles.counterBtnText}>- 10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.counterBtn}
          onPress={() => increment(10)}
        >
          <Text style={styles.counterBtnText}>+ 10</Text>
        </TouchableOpacity>
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
