import { selector } from "recoil";
import { nfcManagerHoldState } from "./nfc";
import { pubkeyState } from "./pubkey";
export const initializedState = selector<boolean>({
  key: "initialized",
  get: ({ get }) => {
    const pubkey = get(pubkeyState);
    if (pubkey === undefined) {
      return false; // initialization is in progress
    }
    // pubkey state has resolved

    if (!get(nfcManagerHoldState)) {
      return false; // nfc is not initialized
    }
    // nfc is initialized

    // then all checks passed, so we are initialized
    return true;
  },
});
