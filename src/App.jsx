import CustomCursor from "./components/CustomCursor";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import SkillsSphere from "./components/SkillsSphere";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import { Toaster } from "react-hot-toast";
import Hero from "./components/Hero";





function App() {
  return (
    <div className="relative bg-[#0a0a0a] text-white overflow-x-hidden">
      <Toaster position="top-center" />
      <CustomCursor />
    
      <Home />
      <About />
      <Projects />
      <SkillsSphere />
      <Experience />
      <ContactForm />
    </div>
  );
}

export default App;
