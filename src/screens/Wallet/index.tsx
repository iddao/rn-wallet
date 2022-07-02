import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AssetIdentifier, AssetType } from "../../types/blockchain";
import Home from "./Home";
import Receive from "./Receive";
import Scan from "./Scan";
import Settings from "./Settings";
import TokenDetail from "./TokenDetail";
import WcRequest from "./WcRequest";

export type WalletStackParamList = {
  Home: undefined;
  Receive: undefined;
  Scan: undefined;
  TokenDetail: AssetIdentifier;
  Settings: undefined;
  WcRequest: { uri: string };
};

export const WalletStack = createNativeStackNavigator<WalletStackParamList>();

export default function Wallet() {
  return (
    <>
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
        <WalletStack.Screen name="WcRequest" component={WcRequest} />
      </WalletStack.Navigator>
    </>
  );
}
