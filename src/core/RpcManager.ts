import { EventEmitter } from "react-native";
import WalletConnect from "@walletconnect/client";
import { PublicKey } from "./PublicKey";

export class RpcManager extends EventEmitter {
  static instance: RpcManager | null = null;
  constructor(publicKey: PublicKey) {
    super();
    RpcManager.instance = this;
  }

  wcInstance: WalletConnect | undefined;

  connectWc(uri: string) {
    const wcInstance = new WalletConnect({
      uri,
      clientMeta: {
        name: "MynaConnect",
        description: "MynaConnect",
        url: "https://aoki.app",
        icons: ["https://aoki.app/icon.png"],
      },
    });
    wcInstance.on("session_request", (error, payload) => {
      if (error) {
        throw error;
      }
      this.emit("wcSessRequest", {
        params: payload.params[0],
        approve: () => {
          wcInstance.approveSession({
            accounts: [],
            chainId: 1,
          });
        },
        reject: () => {
          wcInstance.rejectSession();
        },
      });
    });
  }
}
