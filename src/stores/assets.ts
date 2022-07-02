import BigNumber from "bignumber.js";
import { atom, selector } from "recoil";
import {
  AllAsset,
  AllAssetExtended,
  Asset,
  AssetERC20Extended,
  Chain,
} from "../types/blockchain";

export const assetsListState = atom<AllAsset[]>({
  key: "assetsList",
  default: [
    {
      chainId: "0x1",
      address: null,
      assetType: "native",
      symbol: "ETH",
      name: "Ethereum",
    },
    {
      chainId: "0x89",
      address: null,
      assetType: "native",
      symbol: "MATIC",
      name: "Polygon",
    },
  ],
});

export const chainListState = atom<Chain[]>({
  key: "chainList",
  default: [
    {
      id: "0x1",
      name: "Ethereum",
    },
    {
      id: "0x89",
      name: "Polygon",
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
