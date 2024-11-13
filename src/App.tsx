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
    </ActiveLinkProvider>
  );
}

export default App;
