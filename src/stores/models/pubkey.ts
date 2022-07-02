import { action, Action, computed } from "easy-peasy";
import { PublicKey } from "../../core/PublicKey";
import persist from "../persist";

type Model = {
  publicKey: PublicKey | null;
  setPublicKey: Action<Model, PublicKey | null>;
};

export const model: Model = persist({
  publicKey: null,
  setPublicKey: action((state, payload) => ({
    ...state,
    publicKey: payload,
  })),
});
