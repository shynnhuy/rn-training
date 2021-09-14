import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  BoxScreen,
  ColorScreen,
  ComponentScreen,
  CounterScreen,
  HomeScreen,
  ImageScreen,
  ListScreen,
  StoreScreen,
  TodoScreen,
} from "./screens";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const Stack = createNativeStackNavigator();

const { store, persistor } = configureStore();

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Component" component={ComponentScreen} />
            <Stack.Screen name="Image" component={ImageScreen} />
            <Stack.Screen name="Counter" component={CounterScreen} />
            <Stack.Screen name="Color" component={ColorScreen} />
            <Stack.Screen name="Todo" component={TodoScreen} />
            <Stack.Screen name="Store" component={StoreScreen} />
            <Stack.Screen name="Box" component={BoxScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
