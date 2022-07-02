import { providers } from "ethers";
import { selector } from "recoil";
import { MynaWalletFactory__factory } from "../types/typechain/factories/MynaWalletFactory__factory";
import { pubkeyState } from "./pubkey";

export const addressState = selector<string>({
  key: "address",
  async get({ get }) {
    console.log("pubkey");
    const pubkey = get(pubkeyState);

    if (pubkey) {
      const provider = new providers.JsonRpcProvider({
        timeout: 5000,
        url: "https://rinkeby.infura.io/v3/0fa8d1a04eb04c088ae06ce33638de1f",
      });
      const factory = MynaWalletFactory__factory.connect(
        "0x1ecCCe6C55a3906C4EB57938e3A03c1b59A4694f",
        provider
      );

      const result = await factory.computeWalletAddress({
        n: pubkey.n,
        e: pubkey.e,
      });

      return result;
    } else {
      return "";
    }
  },
});
