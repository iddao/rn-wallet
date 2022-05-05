import { MaterialIcons } from "@expo/vector-icons";
import {
  Button,
  Divider,
  FormControl,
  HStack,
  Icon,
  Input,
  Modal,
  Text,
} from "native-base";
import React, { useState } from "react";

import { BigNumber } from "bignumber.js";

export type GasParameter = {
  maxFeePerGas?: BigNumber; // wei
  maxPriorityFeePerGas?: BigNumber; // wei
  gasLimit: BigNumber; // gas unit
  gasPrice?: BigNumber; // wei
};
type Props = {
  transactionType: "legacy" | "eip1559";
  value: GasParameter;
  onChange: (value: GasParameter) => void;
};
export function GasInput({ transactionType, value, onChange }: Props) {
  const [isOpen, setOpen] = useState(false);
  let totalMax: BigNumber;
  if (transactionType === "legacy") {
    totalMax = value.gasPrice!.times(value.gasLimit);
  } else {
    totalMax = value.maxFeePerGas!.times(value.gasLimit);
  }
  totalMax = totalMax.shiftedBy(-18);

  return (
    <>
      <Button.Group isAttached colorScheme="blue">
        <Button>
          <Icon as={MaterialIcons} name="local-gas-station" color="white" />
        </Button>
        <Button variant="outline" onPress={() => setOpen(true)} flexShrink={0}>
          <HStack space={1}>
            <Text>Max.</Text>
            <Text>{totalMax.sd(6).toFixed()}</Text>
            <Text>ASTR</Text>
          </HStack>
        </Button>
        <Button onPress={() => setOpen(true)}>
          <Icon as={MaterialIcons} name="edit" color="white" />
        </Button>
      </Button.Group>
      <GasInputModal
        isOpen={isOpen}
        onCancel={() => setOpen(false)}
        onConfirm={(data) => {
          setOpen(false);
          onChange(data);
        }}
        defaultValue={value}
        transactionType={transactionType}
      />
    </>
  );
}

type GasInputModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: (value: GasParameter) => void;
  defaultValue: GasParameter;
  transactionType: "legacy" | "eip1559";
};
function GasInputModal({
  isOpen,
  onCancel,
  onConfirm,
  defaultValue,
  transactionType,
}: GasInputModalProps) {
  const [maxFee, setMaxFee] = useState(
    defaultValue.maxFeePerGas?.shiftedBy(-9).toFixed() ?? ""
  );
  const [maxPriorityFee, setMaxPriorityFee] = useState(
    defaultValue.maxPriorityFeePerGas?.shiftedBy(-9).toFixed() ?? ""
  );
  const [gasLimit, setGasLimit] = useState(
    defaultValue.gasLimit.toFixed() ?? ""
  );
  const [gasPrice, setGasPrice] = useState(
    defaultValue.gasPrice?.shiftedBy(-9).toFixed() ?? ""
  );

  const maxFeeBN = new BigNumber(maxFee).shiftedBy(9);
  const maxPriorityFeeBN = new BigNumber(maxPriorityFee).shiftedBy(9);
  const gasLimitBN = new BigNumber(gasLimit);
  const gasPriceBN = new BigNumber(gasPrice).shiftedBy(9);

  let totalMax: BigNumber;
  if (transactionType === "legacy") {
    totalMax = gasPriceBN.times(gasLimitBN);
  } else {
    totalMax = maxFeeBN.times(gasLimitBN);
  }
  totalMax = totalMax.shiftedBy(-18);

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Edit Fee</Modal.Header>
        <Modal.Body>
          {transactionType === "eip1559" ? (
            <>
              <FeeForm
                value={maxFee}
                onChange={setMaxFee}
                label="Max Fee(GWei)"
                placeholder="Max Fee"
              />
              <FeeForm
                value={maxPriorityFee}
                onChange={setMaxPriorityFee}
                label="Max Priority Fee(GWei)"
                placeholder="Max Priority Fee"
              />
            </>
          ) : (
            <FeeForm
              value={gasPrice}
              onChange={setGasPrice}
              label="Gas Price(GWei)"
              placeholder="Gas Price"
            />
          )}
          <FeeForm
            value={gasLimit}
            onChange={setGasLimit}
            label="Gas Limit"
            placeholder="Gas Limit"
          />

          <Divider />
          <FeeForm
            value={totalMax.sd(6).toFixed()}
            onChange={() => {}}
            label="Total Max Fee"
            placeholder=""
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            onPress={() =>
              onConfirm({
                maxFeePerGas: maxFeeBN,
                maxPriorityFeePerGas: maxPriorityFeeBN,
                gasLimit: gasLimitBN,
                gasPrice: gasPriceBN,
              })
            }
            flexGrow={1}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
function FeeForm({
  value,
  onChange,
  placeholder,
  label,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
}) {
  return (
    <FormControl isRequired>
      <HStack mx="4" alignItems="center">
        <FormControl.Label>{label}</FormControl.Label>
        <Input
          type="text"
          value={value}
          placeholder={placeholder}
          textAlign="right"
          variant="ghost"
          flexShrink={1}
          flexGrow={1}
          onChangeText={(text) => onChange(text.replace(/[^0-9.]/g, ""))}
        />
      </HStack>
    </FormControl>
  );
}
