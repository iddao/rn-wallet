import Clipboard from "@react-native-clipboard/clipboard";
import { Box, Button, VStack } from "native-base";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import Address from "../../components/ui/Address";
import Header from "../../components/ui/Header";
import { useAddress } from "../../hooks/useAddress";
import { useStoreActions } from "../../stores";

export default function Settings() {
  const setPublicKey = useStoreActions(
    (actions) => actions.pubkey.setPublicKey
  );
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
