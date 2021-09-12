import React, { useState } from "react";
import { View, Button, FlatList, Text } from "react-native";

const colorGenerator = () => {
  const color = () => Math.floor(Math.random() * 256);
  return `rgb(${color()}, ${color()}, ${color()})`;
};

const ColorBox = ({ color }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 100,
        backgroundColor: color,
        justifyContent: "center",
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 22 }}>{color}</Text>
    </View>
  );
};

export const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const createColor = () => setColors([...colors, colorGenerator()]);

  return (
    <View>
      <Button title="Add new color" onPress={createColor} />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => <ColorBox color={item} />}
      />
      {/* <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {colors.map((color, idx) => (
          <ColorBox color={color} key={idx} />
        ))}
      </View> */}
    </View>
  );
};
