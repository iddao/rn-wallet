import WalletConnect from "@walletconnect/client";
import { ISessionParams } from "@walletconnect/types";
import { defaultChainId } from "../constants/data";
export type SessReqParam = {
  id: number;
  jsonrpc: "2.0";
  method: string;
  params: [ISessionParams];
};
export class WcRequestContext {
  /**
   * Initiate the connection and wait for reply from Dapp
   */
  static async connect(uri: string) {
    return new Promise<WcRequestContext>((resolve, reject) => {
      const wc = new WalletConnect({
        uri,
        clientMeta: {
          name: "MynaConnect",
          description: "MynaConnect",
          url: "https://aoki.app",
          icons: ["https://aoki.app/icon.png"],
        },
      });
      const handler = (error: any, payload: SessReqParam) => {
        if (error) {
          reject(error);
        }
        wc.off("session_request");
        resolve(new WcRequestContext(wc, payload.params[0]));
      };
      wc.on("session_request", handler);
    });
  }
  private wc: WalletConnect | undefined;
  private constructor(wc: WalletConnect, public payload: ISessionParams) {
    this.wc = wc;
  }
  accept(accounts: string[]) {
    this.wc!.approveSession({
      accounts: accounts,
      chainId: Number(defaultChainId),
    });

    return this.wc!;
  }
  async reject() {
    await this.wc!.rejectSession({
      message: "User rejected session",
    });
    // unlink the reference to wc
    this.wc = undefined;
  }
}
