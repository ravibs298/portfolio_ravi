import { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import OverlayMenu from "./components/OverlayMenu";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans cursor-none">
      <CustomCursor />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <OverlayMenu open={menuOpen} setOpen={setMenuOpen} />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;