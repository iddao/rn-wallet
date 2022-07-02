import Clipboard from "@react-native-clipboard/clipboard";
import { Box, Button, VStack } from "native-base";
import React from "react";
import Header from "../../components/ui/Header";
import { useSetRecoilState } from "recoil";
import { pubkeyState } from "../../stores/pubkey";

export default function Settings() {
  const setPublicKey = useSetRecoilState(pubkeyState);
  const logout = () => {
    setPublicKey(null);
  };

  return (
    <>
      <Header title="Settings" />

      <VStack alignItems="center" flexGrow={1}>
        <Button block variant="ghost" onPress={logout}>
          logout
        </Button>
      </VStack>
    </>
  );
}
