import { persist as original, PersistConfig, PersistStorage } from "easy-peasy";
import AsyncStorage from "@react-native-async-storage/async-storage";

const rnStorageEngine: PersistStorage = {
  getItem: async function (key: string) {
    return JSON.parse((await AsyncStorage.getItem(key)) || "null");
  },
  setItem: function (key: string, data: any): void | Promise<void> {
    return AsyncStorage.setItem(key, JSON.stringify(data));
  },
  removeItem: function (key: string): void | Promise<void> {
    return AsyncStorage.removeItem(key);
  },
};

export default function persist<Model extends object = {}>(
  model: Model,
  config?: PersistConfig<Model>
): Model {
  return original(model, {
    storage: rnStorageEngine,
    ...config,
  });
}
