import { HStack, Avatar, VStack, Text, Pressable } from "native-base";
import React from "react";

type Props = {
  name: string;
  symbol: string;
  balance: string;
  iconUri: string;
  onPress: () => void;
};
export default function TokenItem({
  name,
  symbol,
  balance,
  iconUri,
  onPress,
}: Props) {
  return (
    <Pressable onPress={onPress}>
      <HStack justifyContent="space-between" p={4}>
        <HStack alignItems="center" space={2}>
          <Avatar
            source={{
              uri: iconUri,
            }}
          >
            {symbol}
          </Avatar>
          <VStack alignItems="center">
            <Text>{name}</Text>
            {/*<Text>$0.01</Text>*/}
          </VStack>
        </HStack>
        <VStack alignItems="flex-end" justifyContent="center">
          <HStack space={1}>
            <Text>{balance}</Text>
            <Text>{symbol}</Text>
          </HStack>
          {/*<Text>$1.00</Text>*/}
        </VStack>
      </HStack>
    </Pressable>
  );
}
