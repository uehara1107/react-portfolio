import { FC } from "react";
import { Box } from "@chakra-ui/react";
import profstyle from "./profstyle.module.css";

const Profile: FC = () => (
  <div>
    <Box className={profstyle.header} bg="#00E39F" w="100%" />
    <div className={profstyle.content}>
      <img className={profstyle.icon} src="../public/assets/graypic.png" />
      <Box className={profstyle.profArea}>
        <p className={profstyle.name}>UEHARA Sumika</p>
        <p className={profstyle.birthday}>2002.11.07</p>
        <p className={profstyle.bio}>自由に楽しく生きる</p>
      </Box>
    </div>
  </div>
);

export default Profile;
