import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { usePubkey } from "../stores/pubkey";
import Login from "./Login";
import Wallet, { WalletStackParamList } from "./Wallet";

export type RootStackParamList = {
  Login: undefined;
  Wallet: NavigatorScreenParams<WalletStackParamList>;
};

export const RootStack = createNativeStackNavigator();

export default function RootNavigation() {
  const isLoggedIn = !!usePubkey(); // TODO: Replace with logic(local state, redux, or others) to determine if user is logged in

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={isLoggedIn ? "Wallet" : "Login"}
        screenOptions={{
          headerShown: false,
        }}
      >
        {isLoggedIn ? (
          <RootStack.Screen name="Wallet" component={Wallet} />
        ) : (
          <RootStack.Screen name="Login" component={Login} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
