import { EventEmitter } from "fbemitter";
import WalletConnect from "@walletconnect/client";
import { PublicKey } from "./PublicKey";
import { providers } from "ethers";
import { MynaWalletFactory__factory } from "../typechain/factories/MynaWalletFactory__factory";
export class RpcManager extends EventEmitter {
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

  private constructor(private publicKey: PublicKey) {
    super();
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
        approve: async () => {
          wcInstance.approveSession({
            accounts: [await this.getAddress()],
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
