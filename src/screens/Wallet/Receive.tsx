import Clipboard from "@react-native-clipboard/clipboard";
import { Box, Button, VStack } from "native-base";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import Address from "../../components/ui/Address";
import Header from "../../components/ui/Header";
import { useAddress } from "../../hooks/useAddress";

export default function Receive() {
  const myAddress = useAddress() || "";
  const copy = () => {
    Clipboard.setString(myAddress);
  };
  return (
    <>
      <Header title="Receive" />

      <VStack alignItems="center" flexGrow={1}>
        <VStack alignItems="center" p={4}>
          <Box backgroundColor="blue.100">
            {myAddress && <QRCode value={myAddress} size={256} />}
          </Box>
        </VStack>
        <Address>{myAddress}</Address>
        <Button block variant="ghost" onPress={copy}>
          Copy
        </Button>
      </VStack>
    </>
  );
}
