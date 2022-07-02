import { EventEmitter } from "fbemitter";
import { PublicKey } from "./PublicKey";

export class NfcManager {
  adapter: EventEmitter;
  constructor() {
    this.adapter = this.initEvent();
  }

  private initEvent(): EventEmitter {
    const adapter = new EventEmitter();
    adapter.addListener(EVENTS.requestCancel, (data: NfcModalType) => {
      adapter.emit("hideUi");
    });
    return adapter;
  }

  async getPublicKey(): Promise<PublicKey> {
    this.showUi({
      type: "getCert",
    });
    // wait 3 sec
    await new Promise((resolve) => setTimeout(resolve, 3000));
    this.hideUi();
    return {
      n: "0x03",
      e: "0x010001",
    };
  }
  showUi(data: NfcModalType) {
    this.adapter.emit(EVENTS.nfcRequested, data);
  }
  hideUi() {
    this.adapter.emit(EVENTS.nfcRequested, null);
  }
}

export type NfcModalType =
  | {
      type: "getCert";
    }
  | {
      type: "sign";
      data: string;
    };

export const EVENTS = {
  nfcRequested: "nfcRequested",
  requestCancel: "requestCancel",
} as const;
