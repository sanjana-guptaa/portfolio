import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import { BrowserRouter } from "react-router-dom";
import Cursor from "./components/cursor/Cursor.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  useEffect(() => {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      
    }, []);
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Cursor />
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Projects />
        <Education />
        <Experience />
        <Achievements />
        <Contact />
        <Footer />
      </BrowserRouter>
    </main>
  );
};
export default App;
