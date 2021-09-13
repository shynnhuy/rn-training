import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export const Product = ({ image, title, price, description }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.thumb}
        height={300}
        source={{
          uri: image,
        }}
      />
      <View style={styles.infoContainer}>
        <View style={styles.productInfo}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}$</Text>
        </View>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
    marginHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  thumb: {
    height: 300,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  infoContainer: {
    padding: 16,
  },
  productInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    fontWeight: "500",
  },
  desc: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
  },
});
