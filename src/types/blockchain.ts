export type AssetIdentifier = {
  /** Chain ID in Hex, required, necesary for the asset to be valid */
  chainId: string;
  /** Contract address in Hex, required, necesary for the asset to be valid. Null means the native token */
  address: string | null;
  /**
   * Asset type, required, necesary for the asset to be valid
   * Note: Such contract that implements both ERC20 and ERC721 will be possible
   */
  assetType: AssetType;
};

export interface Asset extends AssetIdentifier {
  /** Asset symbol, required but can be retrieved from address */
  symbol: string;
  /** Asset name, required but can be retrieved from address */
  name: string;
  /** icon uri, optional */
  icon?: string;
}

export interface AssetERC20 extends Asset {
  /** If asset is erc20... */
  assetType: "erc20";
  /** Asset decimals, required but can be retrieved from address */
  decimals: number;
}

export interface AssetNative extends Asset {
  /** If asset is native... */
  assetType: "native";
}

export type AllAsset = AssetERC20 | AssetNative;

export type AssetType = "erc20" | "native";

// todo: impl erc721 and erc1155

interface AssetExtended {
  chain: Chain;
  address: string | null;
  assetType: AssetType;
  symbol: string;
  name: string;
  icon?: string;
}

export interface AssetERC20Extended extends AssetExtended {
  assetType: "erc20";
  decimals: number;
  /** raw asset balance retrieved from server */
  balance: string;
  /** asset balance in decimal */
  balanceDecimal: string;
}
export interface AssetNativeExtended extends AssetExtended {
  assetType: "native";
  balance: string;
  decimals: 18;
  balanceDecimal: string;
}

export type AllAssetExtended = AssetERC20Extended | AssetNativeExtended;

export type Chain = {
  id: string;
  name: string;
  rpcs: string[];
  factory: string;
};
