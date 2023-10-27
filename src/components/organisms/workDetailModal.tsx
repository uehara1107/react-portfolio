import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { WorkContent } from "../../domains/type";

type WorkDetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  content: WorkContent;
};

const WorkDetailModal: React.FC<WorkDetailModalProps> = ({
  isOpen,
  onClose,
  content,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="white">
        <ModalCloseButton size="5px" />
        <ModalHeader>
          <Flex justifyContent="center" alignItems="center">
            {content.title}
          </Flex>
        </ModalHeader>

        <ModalBody>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Image
              src={content.productImg}
              alt={content.title}
              boxSize="300px"
            />
            <Box mt="4">
              <Text>{content.detail}</Text>
              <Text mt="4">Date: {content.date}</Text>
              {/* その他の情報もこちらに表示できます */}
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WorkDetailModal;
