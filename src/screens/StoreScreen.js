import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ProductsScreen } from "./ProductsScreen";
import { CartScreen } from "./CartScreen";

const Tab = createBottomTabNavigator();

export const StoreScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Products"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
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
        }}
      />
    </Tab.Navigator>
  );
};
