import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RpcAdapter } from "../../components/adapters/RpcAdapter";
import Home from "./Home/index";
import Scan from "./Scan";

export const WalletStack = createNativeStackNavigator();

export default function Wallet() {
  return (
    <>
      <RpcAdapter />
      <WalletStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <WalletStack.Screen name="Home" component={Home} />
        <WalletStack.Screen name="Scan" component={Scan} />
      </WalletStack.Navigator>
    </>
  );
}
