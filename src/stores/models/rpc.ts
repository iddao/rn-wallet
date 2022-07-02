import { action, Action, Computed, computed, Thunk, thunk } from "easy-peasy";
import { RpcManager, SessReqParam } from "../../core/RpcManager";
import { Model as RootModel } from "./index";

type Model = {
  rpcManager: Computed<Model, RpcManager | null, RootModel>;

  connectWc: Thunk<Model, string>;
  approveWcSession: Thunk<Model, void>;
  rejectWcSession: Thunk<Model, void>;

  sessionRequest: SessReqParam | null;
  setSessionRequest: Action<RootModel, SessReqParam | null>;
};

export const model: Model = {
  rpcManager: computed(
    [
      (_, rootState) => {
        return rootState.pubkey.publicKey;
      },
    ],
    (publicKey) => {
      if (publicKey) {
        return RpcManager.initOnce(publicKey);
      }
      return null;
    }
  ),

  connectWc: thunk(async (actions, uri, { getState }) => {
    const rpcManager = getState().rpcManager!;
    const params = await rpcManager.connectWc(uri);
    actions.setSessionRequest(params);
  }),
  approveWcSession: thunk(async (action, _, { getState }) => {
    const rpcManager = getState().rpcManager!;
    await rpcManager.approveSession();
    action.setSessionRequest(null);
  }),
  rejectWcSession: thunk(async (action, _, { getState }) => {
    const rpcManager = getState().rpcManager!;
    await rpcManager.rejectSession();
    action.setSessionRequest(null);
  }),

  sessionRequest: null,
  setSessionRequest: action((state, payload) => {
    return {
      ...state,
      sessionRequest: payload,
    };
  }),
};
