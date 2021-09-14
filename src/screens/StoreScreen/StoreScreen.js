import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ProductScreen } from "./ProductScreen";
import { CartScreen } from "./CartScreen";
import { useSelector } from "react-redux";
import { selectCartCount } from "./store.reducer";

const Tab = createBottomTabNavigator();

export const StoreScreen = () => {
  const cartCount = useSelector(selectCartCount);
  return (
    <Tab.Navigator
      initialRouteName="Products"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Products"
        component={ProductScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "albums" : "albums-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "cart" : "cart-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarBadge: cartCount | 0,
        }}
      />
    </Tab.Navigator>
  );
};
