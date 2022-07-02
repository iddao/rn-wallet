import { useRecoilValue } from "recoil";
import { addressState } from "../stores/wallet";

export function useAddress(): string {
  return useRecoilValue(addressState);
}
