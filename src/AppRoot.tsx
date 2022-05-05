import { NativeBaseProvider } from "native-base";

import { StoreProvider } from "easy-peasy";
import { store } from "./stores";

import React from "react";

import RootNavigation from "./screens";
import { Initializer } from "./components/ui/Initializer";

export function AppRoot() {
  return (
    <NativeBaseProvider>
      <StoreProvider store={store}>
        <Initializer>
          <RootNavigation />
        </Initializer>
      </StoreProvider>
    </NativeBaseProvider>
  );
}
