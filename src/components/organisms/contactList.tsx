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
  const openBooth = () => {
    window.open("https://poppo165.booth.pm/");
  };

  return (
    <Box className={contactstyle.component}>
      <Button onClick={openTwitter} className={contactstyle.customButton}>
        <Flex className={contactstyle.card}>
          <Image
            src="./assets/contactPage/twitter.png"
            alt="twitter"
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
            src="./assets/contactPage/github.png"
            alt="github"
            className={contactstyle.icon}
          />
          <Text className={contactstyle.textWrapper}>Github:uehara1107</Text>
        </Flex>
      </Button>
      <Button onClick={openInstagram} className={contactstyle.customButton}>
        <Flex className={contactstyle.card}>
          <Image
            src="./assets/contactPage/instagram.png"
            alt="instagram"
            className={contactstyle.icon}
          />
          <Text className={contactstyle.textWrapper}>
            Instagram(フィルム写真)：poppo_film
          </Text>
        </Flex>
      </Button>
      <Button onClick={openBooth} className={contactstyle.customButton}>
        <Flex className={contactstyle.card}>
          <Image
            src="./assets/contactPage/booth.png"
            alt="booth"
            className={contactstyle.icon}
          />
          <Text className={contactstyle.textWrapper}>
            BOOTH：ぽっぽの好きなものあつめ
          </Text>
        </Flex>
      </Button>
    </Box>
  );
};

export default ContactList;
