import DownloadCards from "./components/DownloadCards";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FooterPanel from "./components/FooterPanel";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import OptionsPanel from "./components/OptionsPanel";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Features />
      <OptionsPanel />
      <DownloadCards />
      <Faq />
      <FooterPanel />
      <Footer />
    </div>
  );
}

export default App;
