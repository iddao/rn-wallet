import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";

export const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const isLoggedIn = false; // TODO: Replace with logic(local state, redux, or others) to determine if user is logged in

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
