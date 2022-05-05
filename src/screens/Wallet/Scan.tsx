import { HStack, Icon, Stack, Text, Box, ZStack } from "native-base";
import { MaterialIcons } from "@native-base/icons";
import React, { ReactNode, useEffect, useRef } from "react";
import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet } from "react-native";
import Header from "../../components/ui/Header";
import { useNavigation } from "@react-navigation/native";
import { RpcManager } from "../../core/RpcManager";

export default function Scan() {
  const navigation = useNavigation();
  const onScan = ({ data }: BarCodeEvent) => {
    navigation.goBack();

    if (data.startsWith("wc:")) {
      RpcManager!.instance?.connectWc(data);
    } else {
      console.log("unknown scan data", data);
    }
  };
  return (
    <ZStack flexGrow={1}>
      <Box backgroundColor="black" size="100%">
        <BarCodeScanner onBarCodeScanned={onScan} style={styles.scanView} />
      </Box>
      <Box width="100%">
        <Header
          title="Scan QR Code"
          headerTintColor="white"
          headerTransparent
        />
      </Box>
    </ZStack>
  );
}

const styles = StyleSheet.create({
  scanView: {
    height: "100%",
    width: "100%",
    backgroundColor: "#000",
  },
});
