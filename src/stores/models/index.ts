import { model as settings } from "./settings";
import { model as pubkey } from "./pubkey";
import { model as rpc } from "./rpc";
import { RpcManager } from "../../core/RpcManager";
import { Computed, computed } from "easy-peasy";
import { NfcManager } from "../../core/NfcManager";
export type Model = {
  settings: typeof settings;
  pubkey: typeof pubkey;

  rpcManager: Computed<Model, RpcManager | null, Model>;
  nfcManager: NfcManager;

  rpc: typeof rpc;
};

export const model: Model = {
  settings,
  pubkey,

  rpcManager: computed([(state) => state.pubkey.publicKey], (publicKey) => {
    if (publicKey) {
      return RpcManager.initOnce(publicKey);
    }
    return null;
  }),
  nfcManager: new NfcManager(),
  rpc,
};
