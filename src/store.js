import { applyMiddleware, compose, createStore } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";

import { storeReducer } from "./screens/StoreScreen";
import api from "./fakeApi";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const reducer = persistReducer(persistConfig, storeReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({ api })))
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
