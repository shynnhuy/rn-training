import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { Product } from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, fetchProducts } from "../store.action";

export const ProductScreen = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const renderProduct = ({ item: product }) => (
    <Product {...product} addToCart={() => dispatch(addToCart(product))} />
  );

  if (store.loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>LOADING PRODUCTS</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={store.products}
        keyExtractor={(products) => `${products.id}`}
        renderItem={renderProduct}
        contentContainerStyle={{ backgroundColor: "#FAFAFA" }}
      />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};
