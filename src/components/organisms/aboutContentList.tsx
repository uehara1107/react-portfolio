import { FC } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { aboutContentData } from "../../data/aboutcontents";
import startStyle from "./start.module.css";
import middleStyle from "./middle.module.css";
import endStyle from "./end.module.css";

const AboutContentList: FC = () => {
  return (
    <Box>
      {aboutContentData.map((content) => {
        let style;
        switch (content.id) {
          case "start":
            style = startStyle;
            break;
          case "middle":
            style = middleStyle;
            break;
          case "end":
            style = endStyle;
            break;
          default:
            return null;
        }

        return (
          <Box className={style.component} key={content.id}>
            <Box className={style.overlap}>
              <Text className={style.textWrapper}>{content.detail}</Text>
              <Text className={style.div}>{content.comment}</Text>
              <Box className={style.overlapGrupe}>
                <Image
                  className={style.ellipse}
                  alt="photo"
                  src={content.img}
                />
                <Box className={style.line} />
                <Box className={style.border} />
                {style === endStyle && <Box className={style.border2} />}
                <Box className={style.line2} />
              </Box>
              <Image className={style.sms} alt="Sms" src="./assets/sms.svg" />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default AboutContentList;
