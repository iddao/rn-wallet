import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HStack, Icon, VStack, Text, ScrollView, Avatar } from "native-base";
import { ModalTemplate } from "./ModalTemplate";
import { useStoreActions, useStoreState } from "../../stores";

export function WcSessionRequest() {
  const {
    params: [param],
  } = useStoreState((state) => state.rpc.sessionRequest)!;
  const rejectSession = useStoreActions((s) => s.rpc.rejectWcSession);
  const approveSession = useStoreActions((s) => s.rpc.approveWcSession);
  return (
    <ModalTemplate
      isOpen={true}
      onClose={() => {
        rejectSession();
      }}
      onContinue={() => {
        approveSession();
      }}
      title="Connect to DApp"
    >
      <VStack alignItems="center">
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
    </ModalTemplate>
  );
}
