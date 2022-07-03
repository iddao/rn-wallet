import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { VStack, Text, Avatar, Spinner, HStack, Button } from "native-base";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { WalletStackParamList } from ".";
import Header from "../../components/ui/Header";
import { WcRequestContext } from "../../core/WcRequestContext";
import { addressState } from "../../stores/wallet";
import { activeSessionState } from "../../stores/wc";

export default function WcRequest() {
  const navigation =
    useNavigation<
      NativeStackScreenProps<WalletStackParamList, "WcRequest">["navigation"]
    >();
  const route = useRoute<RouteProp<WalletStackParamList, "WcRequest">>();
  const uri = route.params.uri;
  const [reqCtx, setReqCtx] = useState<WcRequestContext | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setError("timeout");
    }, 10000);
    (async () => {
      const _reqCtx = await WcRequestContext.connect(uri);
      setReqCtx(_reqCtx);
      clearTimeout(timeout);
    })().catch((e) => {
      console.error(e);
      setError(e.message);
    });
  }, []);
  const param = reqCtx?.payload;
  const address = useRecoilValue(addressState);

  const [sess, setSess] = useRecoilState(activeSessionState);
  const approve = () => {
    const wc = reqCtx!.accept([address]);
    setSess(wc);
    navigation.navigate("Home");
  };
  const reject = () => {
    reqCtx!.reject();

    navigation.navigate("Home");
  };
  const goHome = () => {
    navigation.navigate("Home");
  };
  return (
    <>
      <Header title="Connect to Dapp" />
      {param ? (
        <VStack alignItems="center" flexGrow={1}>
          <VStack alignItems="center" flexGrow={1} justifyContent="center">
            <Text>Do you want to connect to DApp?</Text>
            {param.peerMeta && (
              <>
                <Avatar
                  source={{
                    uri: param.peerMeta.icons[0],
                  }}
                  m={2}
                  size="lg"
                />
                <Text fontSize="lg">{param.peerMeta.name}</Text>
                <Text fontSize="sm">{param.peerMeta.url}</Text>
                <Text m={1}>{param.peerMeta.description}</Text>
              </>
            )}
          </VStack>
          <HStack space={1} alignItems="center" m={2}>
            <Button onPress={approve} colorScheme="primary" flex={1}>
              Approve
            </Button>
            <Button onPress={reject} colorScheme="secondary" flex={1}>
              Reject
            </Button>
          </HStack>
        </VStack>
      ) : error ? (
        <VStack>
          <Text>Error: {error}</Text>
          <Button onPress={goHome}>
            <Text>Dismiss</Text>
          </Button>
        </VStack>
      ) : (
        <VStack alignItems="center">
          <Spinner />
        </VStack>
      )}
    </>
  );
}
