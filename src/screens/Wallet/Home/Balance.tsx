import { HStack, Icon, Stack, Text, VStack, Fab } from "native-base";
import { MaterialCommunityIcons } from "@native-base/icons";
import React, { ReactNode, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../components/ui/Header";

export default function Balance() {
  const navigation = useNavigation();
  const goToScan = () => {
    navigation.navigate("Scan" as any);
  };
  return (
    <>
      <Header title="Home" />

      <Fab
        renderInPortal={false}
        icon={<Icon as={MaterialCommunityIcons} name="qrcode-scan" size={6} />}
        onPress={goToScan}
      />
      <VStack alignItems="center" justifyContent="center" flexGrow={1}>
        <HStack space={1} alignItems="center">
          <Text fontSize="2xl">100</Text>
          <Text fontSize="2xl">ASTR</Text>
        </HStack>
      </VStack>
    </>
  );
}
