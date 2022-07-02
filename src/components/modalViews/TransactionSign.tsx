import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HStack, Icon, VStack, Text, ScrollView } from "native-base";
import { ModalTemplate } from "./ModalTemplate";
import { Address } from "../ui/Address";
import { GasInput, GasParameter } from "../ui/GasInput";
import { BigNumber } from "bignumber.js";
import { useState } from "react";
import { useAddress } from "../../hooks/useAddress";

type Props = {
  from?: string;
  to: string;
  data: string;
  gasLimit: string;
  value: string;
  onClose: () => void;
  onContinue: (_: GasParameter) => void;
};

export function TransactionSign({
  from,
  to,
  data,
  gasLimit,
  value,
  onClose,
  onContinue,
}: Props) {
  const [gasParam, setGasParam] = useState<GasParameter>({
    maxFeePerGas: new BigNumber("81747976828"),
    maxPriorityFeePerGas: new BigNumber("1500000000"),
    gasLimit: new BigNumber(gasLimit),
    gasPrice: new BigNumber("81747976828"),
  });
  const myAddress = from ?? useAddress();
  return (
    <ModalTemplate
      isOpen={true}
      onClose={onClose}
      onContinue={() => onContinue(gasParam)}
      title="Sign Transaction"
    >
      <VStack>
        <HStack alignItems="center" justifyContent="space-between" space={1}>
          <Address>{myAddress}</Address>
          <Icon as={MaterialCommunityIcons} name="arrow-right" size={5} />
          <Address>{to}</Address>
        </HStack>
        <HStack
          alignItems="center"
          justifyContent="center"
          space={1}
          padding={1}
        >
          <GasInput
            transactionType="eip1559"
            value={gasParam}
            onChange={setGasParam}
          />
        </HStack>
        <HStack alignItems="center" justifyContent="space-between" space={1}>
          <Text>Value</Text>
          <Text>{new BigNumber(value).shiftedBy(-18).toFixed()}</Text>
        </HStack>
        <VStack>
          <Text>Data</Text>
          <ScrollView h="10" _contentContainerStyle={{ flexGrow: 1 }}>
            <Text>{data}</Text>
          </ScrollView>
        </VStack>
      </VStack>
    </ModalTemplate>
  );
}
