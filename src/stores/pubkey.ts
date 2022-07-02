import { atom } from "recoil";
import { PublicKey } from "../core/PublicKey";
import { useRecoilValue } from "recoil";
/**
 * atom that hodls the public key
 *
 * * If PublicKey is set, it means that the user has registered
 * * If null is set, it means that the user has not registered
 * * If undefined is set, it means that the initialization is in progress
 */
export const pubkeyState = atom<PublicKey | null | undefined>({
  key: "pubkey",
  default: undefined,
  effects: [
    (e) => {
      e.setSelf(null);
    },
  ],
});
export function usePubkey() {
  return useRecoilValue(pubkeyState);
}
