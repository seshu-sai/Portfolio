import React from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Portfolio />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
