import { FC } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import profstyle from "./profstyle.module.css";

const Profile: FC = () => (
  <Box>
    <Box className={profstyle.header} bg="#00E39F" w="100%" />
    <Box className={profstyle.content} display="flex">
      <Image
        className={profstyle.icon}
        src="./assets/graypic.png"
        alt="Profile Icon"
      />
      <Box className={profstyle.profArea}>
        <Text className={profstyle.name}>UEHARA Sumika</Text>
        <Text className={profstyle.birthday}>2002.11.07</Text>
        <Text className={profstyle.bio}>自由に楽しく生きる</Text>
      </Box>
    </Box>
  </Box>
);

export default Profile;
