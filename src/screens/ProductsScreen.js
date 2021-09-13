import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Product } from "../components/Product";
import fakeApi from "../fakeApi";

export const ProductsScreen = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await fakeApi.get("/products");
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const renderProduct = ({ item: product }) => <Product {...product} />;

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>LOADING PRODUCTS</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(products) => `${products.id}`}
      renderItem={renderProduct}
      contentContainerStyle={{ backgroundColor: "#FAFAFA" }}
    />
  );
};
