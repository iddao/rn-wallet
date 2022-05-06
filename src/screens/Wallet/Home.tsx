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
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/ui/Header";
import TokenItem from "../../components/ui/TokenItem";
import Address from "../../components/ui/Address";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WalletStackParamList } from ".";
import { useStoreState } from "../../stores";
import { useAddress } from "../../hooks/useAddress";

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
  const tokens = useRef<any[]>([
    {
      name: "Astar",
      symbol: "ASTR",
      balance: "300.512",
      iconUri: "https://astar.network/images/favicon/apple-touch-icon.png",
      assetId: "ASTR",
    },
    {
      name: "JPY Coin",
      symbol: "JPYC",
      balance: "10000",
      iconUri: "https://jpyc.jp/static/media/jpyc2.545c73cd.png",
      assetId: "JPYC",
    },
  ]);
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
            <Text fontSize="3xl">121.5</Text>
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
          {tokens.current.map((token: any) => (
            <TokenItem
              key={token.assetId}
              name={token.name}
              symbol={token.symbol}
              balance={token.balance}
              iconUri={token.iconUri}
              onPress={() => {
                navigation.navigate("TokenDetail", {
                  assetId: token.assetId,
                });
              }}
            />
          ))}
        </VStack>
      </VStack>
    </>
  );
}
