import ActiveLinkProvider from "./components/ActiveLinkProvider";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ActiveLinkProvider>
      <NavBar />

      <MainContent />

      <Footer />

      {/* for the background texture */}
      <div
        style={{
          backgroundImage: "url(/texture-background.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "100px",
        }}
        className="fixed inset-0 pointer-events-none z-30 opacity-10"
      />
    </ActiveLinkProvider>
  );
}

export default App;
