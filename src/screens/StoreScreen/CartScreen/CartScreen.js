import React from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store.action";
import { CartItem } from "./CartItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CartScreen = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeWithAlert = (id) => {
    Alert.alert(
      "Warning",
      "Are you sure you want to remove product from cart?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => dispatch(removeFromCart(id)) },
      ],
      { cancelable: false }
    );
  };

  const renderCart = ({ item }) => (
    <CartItem {...item} removeFromCart={() => removeWithAlert(item.id)} />
  );

  const total = (cart) =>
    cart.reduce((acc, cur) => acc + cur.amount * cur.price, 0);

  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <FlatList
        data={cart}
        keyExtractor={(cart) => `${cart.id}`}
        renderItem={renderCart}
        contentContainerStyle={{
          // flex: 1,
          justifyContent: "flex-start",
          padding: 10,
          backgroundColor: "#FAFAFA",
        }}
        ListFooterComponent={
          <View style={{ marginTop: 10, alignSelf: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Total price: {total(cart).toFixed(2)}$
            </Text>
          </View>
        }
        ListEmptyComponent={
          <View style={{ alignItems: "center", marginVertical: 10 }}>
            <MaterialCommunityIcons name="cart-outline" size={85} />
            <Text
              style={{ fontSize: 16, textAlign: "center", fontWeight: "500" }}
            >
              Your shopping cart is empty. Please add something and comeback
              later.
            </Text>
          </View>
        }
      />
    </View>
  );
};
