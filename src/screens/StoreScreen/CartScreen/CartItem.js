import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CartItem = ({ image, title, amount, price, removeFromCart }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: image }} style={styles.itemImg} />
      <View style={styles.itemDetail}>
        <Text style={styles.itemName}>{title}</Text>
        <View style={styles.itemActions}>
          <Text>
            {amount} x {price}$
          </Text>
          <TouchableOpacity style={styles.clearBtn} onPress={removeFromCart}>
            <MaterialCommunityIcons name="cart-remove" color="red" size="20" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    height: 150,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 16,

    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  itemImg: {
    flex: 2,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  itemDetail: {
    flex: 3,
    padding: 5,
    justifyContent: "space-between",
  },
  itemName: {
    fontWeight: "bold",
  },
  itemActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  clearBtn: {
    padding: 2,
  },
});
