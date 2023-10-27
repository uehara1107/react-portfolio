import { useState } from "react";
import { Box, Image, Text, Badge, Flex, Button } from "@chakra-ui/react";
import { WorkContent } from "../../domains/type";
import WorkDetailModal from "../organisms/workDetailModal";

type WorkCardProps = {
  content: WorkContent;
};

const WorkCard: React.FC<WorkCardProps> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Button onClick={handleOpen} w="100%">
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p="6">
            <Image src={content.iconImg} alt="icon" boxSize="50px" />
            <Text mt="2" fontWeight="bold" fontSize="xl">
              {content.title}
            </Text>
            <Flex mt="2">
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
              src={content.productImg}
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
