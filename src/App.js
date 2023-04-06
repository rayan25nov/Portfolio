import React from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import NavbarComponent from "./components/NavbarComponent";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Styles from "./styles/Style.module.css";

function App() {
  return (
    <div>
      <div className={Styles.app_navbar}>
        <NavbarComponent />
      </div>
        <Home />
        <Education />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
