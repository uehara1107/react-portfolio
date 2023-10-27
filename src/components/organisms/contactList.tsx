import { FC } from "react";
import { Box, Link } from "@chakra-ui/react";
import contactstyle from "./contactstyle.module.css";

const ContactList: FC = () => {
  return (
    <Box className={contactstyle.component}>
      <Box className={contactstyle.overlap}>
        <Link
          href="https://twitter.com/Ueharrrr165"
          className={contactstyle.textWrapper}
        >
          X(旧Twitter):@ueharrrr165
        </Link>
        <Box className={contactstyle.overlapGroup}>
          <Box
            as="img"
            src="../../../public/assets/graypic.png"
            alt="ellipse"
            className={contactstyle.ellipse}
          />
          <Box className={contactstyle.line} />
        </Box>
      </Box>
      <Box className={contactstyle.overlap}>
        <Link
          href="https://github.com/uehara1107"
          className={contactstyle.textWrapper}
        >
          Github:uehara1107
        </Link>
        <Box className={contactstyle.overlapGroup}>
          <Box
            as="img"
            src="../../../public/assets/graypic.png"
            alt="ellipse"
            className={contactstyle.ellipse}
          />
          <Box className={contactstyle.line} />
        </Box>
      </Box>
      <Box className={contactstyle.overlap}>
        <Link
          href="https://www.instagram.com/poppo_film/"
          className={contactstyle.textWrapper}
        >
          Instagram(フィルム写真)：poppo_film
        </Link>
        <Box className={contactstyle.overlapGroup}>
          <Box
            as="img"
            src="../../../public/assets/graypic.png"
            alt="ellipse"
            className={contactstyle.ellipse}
          />
          <Box className={contactstyle.line} />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactList;
