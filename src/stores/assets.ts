import BigNumber from "bignumber.js";
import { atom, selector } from "recoil";
import { AllAsset, AllAssetExtended, Chain } from "../types/blockchain";

export const assetsListState = atom<AllAsset[]>({
  key: "assetsList",
  default: [
    {
      chainId: "0x" + (80001).toString(16),
      address: null,
      assetType: "native",
      symbol: "MATIC",
      name: "Polygon Mumbai",
    },
  ],
});

export const chainListState = atom<Chain[]>({
  key: "chainList",
  default: [
    {
      id: "0x" + (80001).toString(16),
      name: "Polygon Mumbai",
      rpcs: ["https://matic-mumbai.chainstacklabs.com"],
      factory: "0x5346cfa6b92133e82303e7d76aaa238337979990",
    },
  ],
});

export const assetInfoState = selector<AllAssetExtended[]>({
  key: "assetsInfo",
  async get({ get }) {
    const assets = get(assetsListState);

    // create chain mapping
    const chainMap: { [_: string]: Chain } = {};
    get(chainListState).forEach((chain) => {
      chainMap[chain.id] = chain;
    });

    return Promise.all(
      assets.map(async (asset) => {
        const chain = chainMap[asset.chainId];
        const balance = "0x0";
        const balanceBn = new BigNumber(balance);
        if (asset.assetType === "erc20") {
          const decimals = asset.decimals;
          const balanceDecimal = balanceBn.dividedBy(10 ** decimals).toFixed();
          return {
            chain,
            address: asset.address,
            assetType: asset.assetType,
            symbol: asset.symbol,
            name: asset.name,
            decimals: decimals,
            balance,
            balanceDecimal,
          };
        } else {
          const balanceDecimal = balanceBn.dividedBy(10 ** 18).toFixed();
          return {
            chain,
            address: asset.address,
            assetType: asset.assetType,
            symbol: asset.symbol,
            name: asset.name,
            decimals: 18,
            balance,
            balanceDecimal,
          };
        }
      })
    );
  },
});
