import { Modal } from "native-base";
import { useStoreState } from "../../stores";
import { ModalTemplate } from "../modalViews/ModalTemplate";
import { TransactionSign } from "../modalViews/TransactionSign";
import { WcSessionRequest } from "../modalViews/WcSessionRequest";

export function RpcAdapter() {
  // this component must not be rendered without logged in.
  const sessionRequest = useStoreState((state) => state.rpc.sessionRequest)!;

  return <>{sessionRequest && <WcSessionRequest />}</>;
}
