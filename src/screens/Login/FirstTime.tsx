import { Box, Button, Icon, Text, VStack, ZStack } from "native-base";
import { MaterialIcons } from "@native-base/icons";
import React, { ReactNode, useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import { pubkeyState } from "../../stores/pubkey";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { nfcManagerHoldState } from "../../stores/nfc";
export default function FirstTime() {
  const nfcManager = useRecoilValue(nfcManagerHoldState)!;
  const setPublicKey = useSetRecoilState(pubkeyState);

  const connect = async () => {
    const result = await nfcManager.getPublicKey();
    if (result) {
      setPublicKey(result);
    }
  };
  return (
    <VStack alignItems="center" justifyContent="space-between" height="100%">
      <VStack alignItems="center" justifyContent="center" margin={16}>
        <Text fontSize={16}>Welcome to</Text>
        <Text fontSize={24}>MynaConnect</Text>
      </VStack>
      <VStack alignItems="center" alignContent="center" space={4}>
        <FlashFade
          items={[
            <Icon as={MaterialIcons} name="nfc" size={100} />,
            <Icon as={MaterialIcons} name="credit-card" size={100} />,
          ]}
        />
      </VStack>
      <VStack alignItems="center" alignContent="center" margin={4}>
        <Text fontSize={14}>
          By connecting, you agree to the terms and conditions of the
          application
        </Text>
        <Box padding={2} flexDirection="row">
          <Button size="lg" flexGrow={1} onPress={connect}>
            Connect
          </Button>
        </Box>
      </VStack>
    </VStack>
  );
}

function FlashFade({ items }: { items: ReactNode[] }) {
  const itemLength = items.length;
  const time = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const anim = Animated.timing(time, {
      toValue: itemLength,
      duration: 3000 * itemLength,
      easing: Easing.inOut(Easing.linear),
      useNativeDriver: false,
    });
    Animated.loop(anim).start();
  }, [time]);
  const animItms = items.map((e, i) => {
    const opacity = time.interpolate({
      inputRange: [i, i + 0.2, i + 0.8, i + 1],
      outputRange: [0, 1, 1, 0],
    });
    return (
      <Animated.View
        key={i}
        style={{
          opacity,
        }}
      >
        {e}
      </Animated.View>
    );
  });
  return (
    <ZStack alignItems="center" justifyContent="center" size={100}>
      {animItms}
    </ZStack>
  );
}
