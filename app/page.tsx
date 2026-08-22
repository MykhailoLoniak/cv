import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Skills } from "./components/Skills";
import { Certificates } from "./components/Certificates";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col p-2 w-full">
      <Header />
      <HeroSection />
      <Projects />
      <Skills />
      <Certificates />
      <About />
      <Contact />
    </div>
  );
}
