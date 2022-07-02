import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { EVENTS, NfcModalType } from "../../core/NfcManager";
import { nfcManagerHoldState } from "../../stores/nfc";
import { ModalTemplate } from "../modalViews/ModalTemplate";

export default function NfcAdapter() {
  const nfcManager = useRecoilValue(nfcManagerHoldState)!;
  const [params, setParams] = useState<NfcModalType | null>(null);
  useEffect(() => {
    const { remove } = nfcManager.adapter.addListener(
      EVENTS.nfcRequested,
      (params: NfcModalType) => {
        setParams(params);
      }
    );
    return remove;
  }, [nfcManager]);
  return (
    <>
      <ModalTemplate
        title="NFC"
        isOpen={!!params}
        onClose={() => nfcManager.adapter.emit(EVENTS.requestCancel)}
      >
        Please touch your NFC card.
      </ModalTemplate>
    </>
  );
}
