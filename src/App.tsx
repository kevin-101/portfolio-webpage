import ActiveLinksProvider from "./components/ActiveLinksProvider";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ActiveLinksProvider>
      <NavBar />

      <MainContent />

      <Footer />
    </ActiveLinksProvider>
  );
}

export default App;
