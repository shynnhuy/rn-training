import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

export const ImageDetail = ({ title, image }) => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Image source={image} />
        <Text>ImageDetail - {title}</Text>
      </TouchableOpacity>
      <Text>Score: {count}</Text>
    </View>
  );
};
