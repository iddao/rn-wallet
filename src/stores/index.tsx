import { createStore, createTypedHooks } from "easy-peasy";
import { model, Model } from "./models";

export const store = createStore<Model>(model);

const typedHooks = createTypedHooks<Model>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
