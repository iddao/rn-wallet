import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HStack, Icon, VStack, Text, ScrollView } from "native-base";
import { ModalTemplate } from "./ModalTemplate";
import { Address } from "../ui/Address";
import { GasInput, GasParameter } from "../ui/GasInput";
import { BigNumber } from "bignumber.js";
import { useState } from "react";

export function TransactionSign() {
  const [gasParam, setGasParam] = useState<GasParameter>({
    maxFeePerGas: new BigNumber("81747976828"),
    maxPriorityFeePerGas: new BigNumber("1500000000"),
    gasLimit: new BigNumber("21000"),
    gasPrice: new BigNumber("81747976828"),
  });
  return (
    <ModalTemplate
      isOpen={true}
      onClose={() => {}}
      onContinue={() => {}}
      title="Sign Transaction"
    >
      <VStack>
        <HStack alignItems="center" justifyContent="space-between" space={1}>
          <Address>0xc7B6F844BC714E63C1CECFb639DaD54D55C40446</Address>
          <Icon as={MaterialCommunityIcons} name="arrow-right" size={5} />
          <Address>0xc7B6F844BC714E63C1CECFb639DaD54D55C40446</Address>
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
          <Text>0.00</Text>
        </HStack>
        <VStack>
          <Text>Data</Text>
          <ScrollView h="10" _contentContainerStyle={{ flexGrow: 1 }}>
            <Text>
              60606040526000600260146101000a815481602028302160208701359181151560730600160a060020a033316600090815260016020526040812054600160a060020a03033316600090815260016020526040902054600160a060020a0316333016060604052336060908152602090f35b6060908152602090f35b6060908152602090f35b
            </Text>
          </ScrollView>
        </VStack>
      </VStack>
    </ModalTemplate>
  );
}
