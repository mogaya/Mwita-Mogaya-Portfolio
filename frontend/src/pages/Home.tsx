import AboutMe from "../components/Home/AboutMe";
import Awards from "../components/Home/Awards";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Services from "../components/Home/Services";
import Skills from "../components/Home/Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Skills />
      <Awards />
      <AboutMe />
      <Contact />
    </>
  );
};

export default Home;
