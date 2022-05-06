import { Modal } from "native-base";
import { useStoreState } from "../../stores";
import { TransactionSign } from "../modalViews/TransactionSign";

export function RpcAdapter() {
  // this component must not be rendered without logged in.
  const rpcManager = useStoreState((state) => state.rpcManager)!;
  return <></>;
}
