import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Section from "./components/Section";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section top="#27272a" bottom="#18181b" />
      <About />
      <Section top="#18181b" bottom="#27272a" />
      <Skill />
      <Section top="#27272a" bottom="#18181b" />
      <Project />
      <Section top="#18181b" bottom="#27272a" />
      <Contact />
    </>
  )
}