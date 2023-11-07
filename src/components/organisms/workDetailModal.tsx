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
  ListItem,
  UnorderedList,
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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      scrollBehavior="inside"
    >
      <ModalOverlay bg="rgba(255, 255, 255, 0.8)" />
      <ModalContent
        bg="white"
        width="600px" // モーダルの横幅を指定
        maxWidth="600px" // モーダルの最大横幅を指定
        maxHeight="100vh" // モーダルの最大高さをビューポートの高さに設定
        overflowY="auto" // 縦スクロールを有効にする
        mx="auto" // 横のマージンを自動に設定して中央に配置
        my="4" // 上下のマージンを設定
      >
        <ModalCloseButton />
        <ModalHeader>
          <Flex justifyContent="center" alignItems="center">
            {content.title}
          </Flex>
        </ModalHeader>
        <ModalBody>
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Image
              src={content.productImg}
              alt={content.title}
              boxSize="300px"
            />
            <Box m="4">
              <Text>{content.detail}</Text>
              <Text mt="4">期間：{content.date}</Text>
              <Text mt="4">開発チーム：{content.team}</Text>
              <Text mt="4">役割</Text>
              <UnorderedList>
                {content.role &&
                  content.role.map((role, index) => (
                    <ListItem key={index}>{role}</ListItem>
                  ))}
              </UnorderedList>
              <Text mt="4">頂いた賞</Text>
              <UnorderedList>
                {content.award &&
                  content.award.map((award, index) => (
                    <ListItem key={index}>{award}</ListItem>
                  ))}
              </UnorderedList>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WorkDetailModal;
