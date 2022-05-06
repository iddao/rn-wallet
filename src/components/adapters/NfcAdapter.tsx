import { useEffect, useState } from "react";
import { useStoreState } from "../../stores";
import { ModalTemplate } from "../modalViews/ModalTemplate";

export default function NfcAdapter() {
  const nfcManager = useStoreState((s) => s.nfcManager);
  const [hdl, setHdl] = useState<any>(null);
  useEffect(() => {
    const { remove } = nfcManager.addListener("readRequest", (event: any) => {
      setHdl(event);
    });
    return remove;
  }, [nfcManager]);
  return (
    <>
      <ModalTemplate
        title="NFC"
        isOpen={!!hdl}
        onClose={() => {
          setHdl(null);
        }}
        onContinue={function (): void {
          setHdl(null);
          hdl.accept({
            n: "0x03",
            e: "0x010000",
          });
        }}
      >
        Please touch your NFC card.
      </ModalTemplate>
    </>
  );
}
