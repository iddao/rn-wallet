import { useEffect, useState } from "react";
import { useStoreState } from "../stores";

export function useAddress(): string | null {
  const [myAddress, setMyAddress] = useState<string | null>(null);
  const rpcManager = useStoreState((state) => state.rpcManager);
  useEffect(() => {
    rpcManager?.getAddress().then((address) => {
      setMyAddress(address);
    });
  }, []);
  return myAddress;
}
