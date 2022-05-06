import { HStack, Text } from "native-base";

type Props = {
  children: string;
};
export default function Address({ children }: Props) {
  // remove 0x prefix
  const address = children.replace("0x", "");

  // last 4 digits
  const last4 = address.slice(-4);
  // rest of the address
  const rest = address.slice(0, -4);

  return (
    <HStack flexShrink={1}>
      <Text>0x</Text>
      <Text isTruncated flexShrink={1} flexGrow={0}>
        {rest}
      </Text>
      <Text>{last4}</Text>
    </HStack>
  );
}
