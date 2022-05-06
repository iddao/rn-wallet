import { action, Action } from "easy-peasy";
import persist from "../persist";

export type Model = {
  fiat: "USD" | "JPY";
  setFiat: Action<Model, "USD" | "JPY">;

  awareTokens: Array<{
    chainId: number;
    address: string | null; // if null, it is native token such as ETH, ASTR
    name: string;
    symbol: string;
    decimals: number;
  }>;
};

export const model: Model = persist({
  fiat: "USD",
  setFiat: action((state, fiat) => {
    return {
      ...state,
      fiat,
    };
  }),
  awareTokens: [],
});
