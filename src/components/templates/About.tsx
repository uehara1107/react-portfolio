import { Box } from "@chakra-ui/react";
import { FC } from "react";
import Profile from "../organisms/profile";
import AboutContentList from "../organisms/aboutContentList";

const About: FC = () => (
  <div>
    <Box>
      <Profile />
    </Box>
    <Box>
      <AboutContentList />
    </Box>
  </div>
);

export default About;
