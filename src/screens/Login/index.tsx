import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstTime from "./FirstTime";

export const Stack = createNativeStackNavigator();

export default function Login() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FirstTime" component={FirstTime} />
    </Stack.Navigator>
  );
}
