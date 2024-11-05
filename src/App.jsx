import "./App.css";
// Import components
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import ContentSection from "./components/ContentSection/ContentSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ContentSection />
      <Footer />
    </div>
  );
}

export default App;
