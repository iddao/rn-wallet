import {
  HStack,
  Icon,
  Text,
  VStack,
  Fab,
  Pressable,
  IconButton,
} from "native-base";
import { MaterialCommunityIcons } from "@native-base/icons";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/ui/Header";
import TokenItem from "../../components/ui/TokenItem";
import { Address } from "../../components/ui/Address";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WalletStackParamList } from ".";
import { useAddress } from "../../hooks/useAddress";
import { useRecoilValue } from "recoil";
import { assetInfoState } from "../../stores/assets";

export default function Home() {
  const navigation =
    useNavigation<
      NativeStackScreenProps<WalletStackParamList, "Home">["navigation"]
    >();
  const goToScan = () => {
    navigation.push("Scan");
  };
  const goToReceive = () => {
    navigation.push("Receive");
  };
  const goToSettings = () => {
    navigation.push("Settings");
  };
  const tokens = useRecoilValue(assetInfoState);
  const myAddress = useAddress();

  return (
    <>
      <Header
        title="Home"
        headerRight={() => (
          <IconButton
            icon={<MaterialCommunityIcons name="cog" size={24} color="#333" />}
            onPress={goToSettings}
          />
        )}
      />

      <Fab
        renderInPortal={false}
        icon={<Icon as={MaterialCommunityIcons} name="qrcode-scan" size={6} />}
        label="Connect"
        onPress={goToScan}
      />
      <VStack alignItems="center" flexGrow={1}>
        <VStack alignItems="center" p={4}>
          <HStack space={1} alignItems="center" m={2}>
            <Text fontSize="3xl">123.4</Text>
            <Text fontSize="xl">USD</Text>
          </HStack>
          <Pressable
            maxW="32"
            borderRadius={16}
            borderWidth={1}
            borderColor="#999"
            p={1}
            onPress={goToReceive}
          >
            <HStack alignItems="center">
              <Icon as={MaterialCommunityIcons} name="qrcode" size={6} />
              <Address>{myAddress || ""}</Address>
            </HStack>
          </Pressable>
        </VStack>
        <VStack w="100%">
          {tokens.map((token) => (
            <TokenItem
              key={token.chain.id + token.address + token.assetType}
              name={token.name}
              symbol={token.symbol}
              balance={token.balanceDecimal}
              iconUri={token.icon ?? ""}
              onPress={() => {
                navigation.navigate("TokenDetail", {
                  chainId: token.chain.id,
                  address: token.address,
                  assetType: token.assetType,
                });
              }}
            />
          ))}
        </VStack>
      </VStack>
    </>
  );
}
