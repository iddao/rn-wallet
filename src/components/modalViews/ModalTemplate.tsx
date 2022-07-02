import { Button, Modal } from "native-base";
import { StyleSheet } from "react-native";

type ModalTemplateProps = {
  isOpen: boolean;
  onClose: () => void;
  onContinue?: () => void;
  title: string;
  children: React.ReactNode;
};
export function ModalTemplate({
  isOpen,
  onClose,
  onContinue,
  title,
  children,
}: ModalTemplateProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content style={styles.bottomModal}>
        <Modal.CloseButton />
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {onContinue && (
          <Modal.Footer>
            <Button onPress={onContinue}>Continue</Button>
          </Modal.Footer>
        )}
      </Modal.Content>
    </Modal>
  );
}
const styles = StyleSheet.create({
  bottomModal: {
    marginBottom: 8,
    marginTop: "auto",
  },
});
