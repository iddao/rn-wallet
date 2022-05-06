import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RpcAdapter } from "../../components/adapters/RpcAdapter";
import Home from "./Home";
import Receive from "./Receive";
import Scan from "./Scan";
import Settings from "./Settings";
import TokenDetail from "./TokenDetail";

export type WalletStackParamList = {
  Home: undefined;
  Receive: undefined;
  Scan: undefined;
  TokenDetail: { assetId: string };
  Settings: undefined;
};

export const WalletStack = createNativeStackNavigator<WalletStackParamList>();

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
        <WalletStack.Screen name="Receive" component={Receive} />
        <WalletStack.Screen name="TokenDetail" component={TokenDetail} />
        <WalletStack.Screen name="Settings" component={Settings} />
      </WalletStack.Navigator>
    </>
  );
}
