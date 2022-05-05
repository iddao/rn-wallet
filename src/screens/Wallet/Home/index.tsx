import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import Balance from "./Balance";
import React from "react";

export const HomeTab = createBottomTabNavigator();

export default function Home() {
  return (
    <HomeTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeTab.Screen
        name="Balance"
        component={Balance}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon
              as={MaterialCommunityIcons}
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
}
