import React from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import NavbarComponent from "./components/NavbarComponent";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
