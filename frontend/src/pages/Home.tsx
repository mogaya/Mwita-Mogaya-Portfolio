import { Box } from "@chakra-ui/react";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Services from "../components/Home/Services";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
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
