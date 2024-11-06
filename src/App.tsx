import Container from "./components/Container";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <main>
        <Container id="about">
          <h3 className="text-4xl font-bold text-gray-400">Kevin k Noel</h3>
          <h1 className="text-7xl font-bold">
            Frontend Developer (React/Next.js)
          </h1>
        </Container>

        <section
          id="projects"
          className="min-h-[calc(100vh-84px)] md:min-h-[calc(100vh-100px)] scroll-m-[84px] md:scroll-m-[100px] bg-blue-950"
        >
          Projects
        </section>

        <section
          id="contact"
          className="min-h-[calc(100vh-84px)] md:min-h-[calc(100vh-100px)] scroll-m-[84px] md:scroll-m-[100px] bg-green-950"
        >
          Contact
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
