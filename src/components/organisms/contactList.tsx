import { FC } from "react";
import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import contactstyle from "./contactstyle.module.css";

const ContactList: FC = () => {
  const openTwitter = () => {
    window.open("https://twitter.com/Ueharrrr165");
  };
  const openGithub = () => {
    window.open("https://github.com/uehara1107");
  };
  const openInstagram = () => {
    window.open("https://www.instagram.com/poppo_film/");
  };
  return (
    <Box className={contactstyle.component}>
      <Button onClick={openTwitter} className={contactstyle.customButton}>
        <Flex className={contactstyle.card}>
          <Image
            src="../../../public/assets/graypic.png"
            alt="ellipse"
            className={contactstyle.icon}
          />
          <Text className={contactstyle.textWrapper}>
            X(旧Twitter):@ueharrrr165
          </Text>
        </Flex>
      </Button>
      <Button onClick={openGithub} className={contactstyle.customButton}>
        <Flex className={contactstyle.card}>
          <Image
            src="../../../public/assets/graypic.png"
            alt="ellipse"
            className={contactstyle.icon}
          />
          <Text className={contactstyle.textWrapper}>Github:uehara1107</Text>
        </Flex>
      </Button>
      <Button onClick={openInstagram} className={contactstyle.customButton}>
        <Flex className={contactstyle.card}>
          <Image
            src="../../../public/assets/graypic.png"
            alt="ellipse"
            className={contactstyle.icon}
          />
          <Text className={contactstyle.textWrapper}>
            Instagram(フィルム写真)：poppo_film
          </Text>
        </Flex>
      </Button>
    </Box>
  );
};

export default ContactList;
