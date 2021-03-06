import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, HStack, VStack, Fab, Icon, Divider } from "native-base";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { WalletStackParamList } from ".";
import Header from "../../components/ui/Header";
import { assetInfoState } from "../../stores/assets";

export default function TokenDetail() {
  const route = useRoute<RouteProp<WalletStackParamList, "TokenDetail">>();
  const navigation =
    useNavigation<
      NativeStackScreenProps<WalletStackParamList, "TokenDetail">["navigation"]
    >();
  const goToSend = () => {
    navigation.navigate("Receive");
  };
  const token = useRecoilValue(assetInfoState).find(
    (token) =>
      token.chain.id === route.params.chainId &&
      token.address === route.params.address &&
      token.assetType === route.params.assetType
  );
  if (!token) {
    return <Text>Not found</Text>;
  }
  return (
    <>
      <Header title={token?.chain.name} />
      <Fab
        renderInPortal={false}
        icon={<Icon as={MaterialCommunityIcons} name="send" size={6} />}
        label="Send Token"
        onPress={goToSend}
      />
      <VStack alignItems="center" flexGrow={1}>
        <VStack alignItems="center" p={4}>
          <HStack space={1} alignItems="center" m={2}>
            <Text fontSize="3xl">{token.balanceDecimal}</Text>
            <Text fontSize="xl">{token.symbol}</Text>
          </HStack>
        </VStack>
        <Divider />
        <VStack alignItems="center" p={4}>
          <Text>No transfer information available for this token.</Text>
        </VStack>
      </VStack>
    </>
  );
}
