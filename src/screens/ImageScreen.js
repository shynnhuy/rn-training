import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageDetail } from "../components/ImageDetail";

export const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title={"forest"}
        image={require("../../assets/forest.jpg")}
      />
      <ImageDetail title={"beach"} image={require("../../assets/beach.jpg")} />
      <ImageDetail
        title={"mountain"}
        image={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
