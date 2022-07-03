import WalletConnect from "@walletconnect/client";
import { atom, RecoilState, selector, SetterOrUpdater } from "recoil";
import { WcRequestContext } from "../core/WcRequestContext";

export const activeSessionState = atom<WalletConnect | null>({
  key: "activeSession",
  default: null,
  dangerouslyAllowMutability: true,
});
