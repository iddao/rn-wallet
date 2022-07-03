import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { activeSessionState } from "../../stores/wc";
import { TransactionSign } from "../modalViews/TransactionSign";
import { GasParameter } from "../ui/GasInput";

export default function WcAdapter() {
  const session = useRecoilValue(activeSessionState);
  const [payload, setPayload] = useState<any | null>(null);

  useEffect(() => {
    if (!session) {
      return;
    }
    session.on("call_request", (err, payload) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("call_request", payload);
      setPayload(payload);
    });
    return () => {
      session.off("call_request");
    };
  }, [session]);

  const reply = (gas: GasParameter) => {};
  return (
    <>
      {payload && (
        <TransactionSign
          from={payload.params[0].from}
          to={payload.params[0].to}
          data={payload.params[0].data}
          gasLimit={payload.params[0].gasLimit}
          value={payload.params[0].value}
          onClose={() => {
            setPayload(null);
          }}
          onContinue={reply}
        />
      )}
    </>
  );
}
