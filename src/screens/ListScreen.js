import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const data = [
  { name: "Huy" },
  { name: "Ky" },
  { name: "Huong" },
  { name: "Loc" },
  { name: "Bec" },
  { name: "Huy 1" },
  { name: "Ky 1" },
  { name: "Huong 1" },
  { name: "Loc 1" },
  { name: "Bec 1" },
];

export const ListScreen = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(data) => data.name}
        renderItem={({ item }) => (
          <Text style={styles.itemStyle}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    marginVertical: 50,
  },
});
