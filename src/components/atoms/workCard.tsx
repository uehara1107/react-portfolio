import { useState } from "react";
import { Box, Image, Text, Badge, Flex, Button } from "@chakra-ui/react";
import { WorkContent } from "../../domains/type";
import WorkDetailModal from "../organisms/workDetailModal";
import style from "./workCardStyle.module.css";

type WorkCardProps = {
  content: WorkContent;
};

const WorkCard: React.FC<WorkCardProps> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Button onClick={handleOpen} className={style.customButton}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p="6">
            <Flex alignItems="center" className={style.cardHeader}>
              <Image src={content.iconImg} alt="icon" className={style.icon} />
              <Text className={style.title}>{content.title}</Text>
            </Flex>
            <Flex className={style.tag}>
              {content.tag.map((t, index) => (
                <Badge
                  key={index}
                  borderRadius="full"
                  px="2"
                  colorScheme="teal"
                >
                  #{t}
                </Badge>
              ))}
            </Flex>
            <Image
              src={content.topProductImg}
              alt={content.title}
              boxSize="300px"
            />
            {/* <Text mt="2">{content.detail}</Text> */}
            <Flex mt="2">
              <Text mr="4">💬 {content.comment}</Text>
              <Text>❤️ {content.fav}</Text>
            </Flex>
          </Box>
        </Box>
      </Button>

      <WorkDetailModal
        isOpen={isOpen}
        onClose={handleClose}
        content={content}
      />
    </Box>
  );
};

export default WorkCard;
