import { EventEmitter } from "fbemitter";
import { useMemo } from "react";
import { PublicKey } from "./PublicKey";

export class NfcManager {
  adapter: EventEmitter;
  private constructor() {
    this.adapter = this.initEvent();
  }

  static instance: NfcManager | null = null;

  static async initOnce(): Promise<NfcManager> {
    if (NfcManager.instance) {
      return NfcManager.instance;
    } else {
      NfcManager.instance = await NfcManager.init();
      return NfcManager.instance;
    }
  }
  static async init(): Promise<NfcManager> {
    const instance = new NfcManager();
    await instance._init();
    return instance;
  }

  private async _init() {}

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
    await new Promise((resolve) => setTimeout(resolve, 300));
    this.hideUi();
    return new PublicKey("0x03", "0x010001");
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
