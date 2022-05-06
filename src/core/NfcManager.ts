import { EventEmitter } from "fbemitter";
import { PublicKey } from "./PublicKey";

export class NfcManager extends EventEmitter {
  getPublicKey(): Promise<PublicKey> {
    return new Promise((resolve) => {
      this.emit("readRequest", {
        type: "publicKey",
        accept: (publicKey: PublicKey) => {
          resolve(publicKey);
        },
      });
    });
  }
}
