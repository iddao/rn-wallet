import { EventEmitter } from "fbemitter";
import WalletConnect from "@walletconnect/client";
import { PublicKey } from "./PublicKey";
import { providers } from "ethers";
import { MynaWalletFactory__factory } from "../typechain/factories/MynaWalletFactory__factory";
import { ISessionParams } from "@walletconnect/types";
export type SessReqParam = {
  id: number;
  jsonrpc: "2.0";
  method: string;
  params: [ISessionParams];
};
export class RpcManager {
  static instance: RpcManager | null = null;
  static instanceArg: PublicKey | null = null;

  static initOnce(publicKey: PublicKey): RpcManager {
    if (RpcManager.instance && RpcManager.instanceArg === publicKey) {
      return RpcManager.instance;
    } else {
      RpcManager.instanceArg = publicKey;
      RpcManager.instance = new RpcManager(publicKey);
      return RpcManager.instance;
    }
  }

  adapter: EventEmitter;

  private constructor(private publicKey: PublicKey) {
    this.adapter = this.initEvent();
  }

  private initEvent(): EventEmitter {
    const adapter = new EventEmitter();
    return adapter;
  }

  private async _getAddress(): Promise<string> {
    const provider = new providers.JsonRpcProvider({
      timeout: 5000,
      url: "https://rinkeby.infura.io/v3/0fa8d1a04eb04c088ae06ce33638de1f",
    });
    const factory = MynaWalletFactory__factory.connect(
      "0x1ecCCe6C55a3906C4EB57938e3A03c1b59A4694f",
      provider
    );

    const result = await factory.computeWalletAddress({
      n: this.publicKey.n,
      e: this.publicKey.e,
    });

    return result;
  }
  private _addressCache: string | null = null;
  async getAddress(): Promise<string> {
    if (this._addressCache) {
      return this._addressCache;
    }
    this._addressCache = await this._getAddress();
    return this._addressCache;
  }

  wcInstance: WalletConnect | undefined;
  connectWc(uri: string) {
    return new Promise<SessReqParam>((resolve, reject) => {
      const wcInstance = new WalletConnect({
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
          throw error;
        }
        this.wcInstance = wcInstance;
        wcInstance.off("session_request");
        resolve(payload);
      };
      wcInstance.on("session_request", handler);
    });
  }
  async approveSession() {
    this.wcInstance!.approveSession({
      accounts: [await this.getAddress()],
      chainId: 592,
    });
  }
  async rejectSession() {
    this.wcInstance!.rejectSession({
      message: "User rejected session",
    });
  }
}
