import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

export default function MainContent() {
  return (
    // overflow-x hidden for animations to work correctly
    <main className="overflow-x-hidden">
      <About />

      <Projects />

      <Contact />
    </main>
  );
}
