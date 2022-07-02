import { atom } from "recoil";
import { NfcManager } from "../core/NfcManager";
export const nfcManagerHoldState = atom<NfcManager | null>({
  key: "nfcManagerHold",
  default: null,
  effects: [
    ({ setSelf }) => {
      (async () => {
        const nfc = await NfcManager.initOnce();
        setSelf(nfc);
      })();
    },
  ],
  dangerouslyAllowMutability: true, // I want referrence to NfcManager be mutable
});
