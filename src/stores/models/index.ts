import { action, Action, thunk, Thunk } from "easy-peasy";
import { PublicKey } from "../../core/PublicKey";
export type Model = {
  initialized: boolean;
  setInitialized: Action<Model, void>;
  publicKey: PublicKey | null;
  initialize: Thunk<Model, void>;
};

export const model: Model = {
  initialized: false,
  setInitialized: action((state) => {
    return {
      ...state,
      initialized: true,
    };
  }),
  publicKey: {
    n: "deadbee",
    e: "65537",
  },
  initialize: thunk(async (actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.setInitialized();
  }),
};
