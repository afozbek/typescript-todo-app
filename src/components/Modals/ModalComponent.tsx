import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import StyledBtn from "components/commons/StyledButton/StyledButton";
import { useModal } from "context/modalContext";
import { ModalProps } from "types";


const ModalComponent = ({ modalName, modalTitle, buttonScheme, onClose, onSubmit, children }: ModalProps) => {

  const { modals, setModals, showModal, hideModal } = useModal();

  if (!modals[modalName]) return null

  const { colorScheme, text } = buttonScheme;

  const handleModalClose = () => {
    if (onClose) {
      console.log("Onclose provided")
      onClose();
      return
    }

    hideModal(modalName)
  }
  const handleModalSubmit = () => {
    console.log("Modal submitted")
    onSubmit();
    handleModalClose()
  }

  return (
    <Modal id={modalName} isOpen={true} onClose={handleModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <StyledBtn colorScheme={colorScheme} onClick={handleModalSubmit} block>{text}</StyledBtn>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
