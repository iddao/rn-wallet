import { NativeBaseProvider } from "native-base";

import React from "react";
import { RecoilRoot } from "recoil";
import RootNavigation from "./screens";
import { Initializer } from "./components/ui/Initializer";
import NfcAdapter from "./components/adapters/NfcAdapter";

export function AppRoot() {
  return (
    <NativeBaseProvider>
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Initializer>
            <NfcAdapter />

            <RootNavigation />
          </Initializer>
        </React.Suspense>
      </RecoilRoot>
    </NativeBaseProvider>
  );
}
