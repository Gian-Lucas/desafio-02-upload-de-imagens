import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      isCentered={true}
      size="2xl"
    >
      <ModalOverlay />
      <ModalContent bg="pGray.800">
        <Image maxW={900} maxH={600} src={imgUrl} />
        <Link w="fit-content" color="pGray.50" p="1.5" href={imgUrl} isExternal>
          Abrir original
        </Link>
      </ModalContent>
    </Modal>
  );
}
