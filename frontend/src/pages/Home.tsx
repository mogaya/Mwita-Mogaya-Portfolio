import { Box } from "@chakra-ui/react";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Services from "../components/Home/Services";

const Home = () => {
  return (
    <Box mx="auto">
      <Hero />
      <Services />
      <Projects />
      {/* <Skills /> */}
      {/* <Awards /> */}
      {/* <AboutMe /> */}
      <Contact />
    </Box>
  );
};

export default Home;
