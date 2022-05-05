import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useStoreState } from "../stores";
import Login from "./Login";
import Wallet from "./Wallet";

export const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const isLoggedIn = !!useStoreState((state) => state.publicKey); // TODO: Replace with logic(local state, redux, or others) to determine if user is logged in

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? "Wallet" : "Login"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        {isLoggedIn && <Stack.Screen name="Wallet" component={Wallet} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
