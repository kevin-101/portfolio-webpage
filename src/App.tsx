import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="text-center">
        <section
          id="about"
          className="min-h-[calc(100vh-100px)] scroll-m-[100px] bg-red-950"
        >
          About
        </section>

        <section
          id="projects"
          className="min-h-[calc(100vh-100px)] scroll-m-[100px] bg-blue-950"
        >
          Projects
        </section>

        <section
          id="contact"
          className="min-h-[calc(100vh-100px)] scroll-m-[100px] bg-green-950"
        >
          Contact
        </section>
      </main>
      <footer className="text-center">Footer</footer>
    </>
  );
}

export default App;
