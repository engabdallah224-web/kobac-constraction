import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Projects />
      <Contact />
    </>
  );
}