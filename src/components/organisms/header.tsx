import { FC } from "react";
import { Box, HStack } from "@chakra-ui/react";
import headerstyle from "./headerstyle.module.css";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "../templates/About";
import Works from "../templates/Works";
import Contact from "../templates/Contact";

const Header: FC = () => (
  <Box>
    <HStack
      spacing="50px"
      className={headerstyle.headerarea}
      justify={"center"}
      bg="#00E39F"
    >
      <Box className={headerstyle.headerlink}>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? headerstyle["active-link"] : ""
          }
        >
          About
        </NavLink>
      </Box>
      <Box className={headerstyle.headerlink}>
        <NavLink
          to={"/works"}
          className={({ isActive }) =>
            isActive ? headerstyle["active-link"] : ""
          }
        >
          Works
        </NavLink>
      </Box>
      <Box className={headerstyle.headerlink}>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? headerstyle["active-link"] : ""
          }
        >
          Contact
        </NavLink>
      </Box>
    </HStack>
    <Routes>
      <Route path={"/"} element={<About />}></Route>
      <Route path={"/works"} element={<Works />}></Route>
      <Route path={"/contact"} element={<Contact />}></Route>
    </Routes>
  </Box>
);

export default Header;
