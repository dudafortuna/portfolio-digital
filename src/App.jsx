import "./index.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/Navbar";

export const meuPortifolio = () => {
  return (
    <div className="w-full h-[646px] top-[-3px] left-0">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default meuPortifolio;
